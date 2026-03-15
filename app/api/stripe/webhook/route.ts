import { NextResponse } from "next/server";
import Stripe from "stripe";
import { reservationPackages } from "@/app/reservations/_data/packages";
import { STRIPE_ACOMPTE_PER_PERSON_EUR } from "@/lib/reservation-pricing";

export const runtime = "nodejs";

type ReservationSelection = {
    id: string;
    peopleCount: number;
    title: string;
};

function createStripeClient(secretKey: string) {
    return new Stripe(secretKey);
}

function parseReservationItems(rawValue: string | null | undefined) {
    if (!rawValue) return [];

    const packageMap = new Map(reservationPackages.map((pkg) => [pkg.id, pkg]));

    return rawValue
        .split(",")
        .map((entry) => entry.trim())
        .filter(Boolean)
        .flatMap((entry) => {
            const [id, peopleCountRaw] = entry.split(":");
            const peopleCount = Number(peopleCountRaw);
            const pkg = packageMap.get(id);

            if (!pkg || !Number.isInteger(peopleCount) || peopleCount < 1) {
                return [];
            }

            return [
                {
                    id,
                    peopleCount,
                    title: pkg.title
                } satisfies ReservationSelection
            ];
        });
}

function buildReservationSummary(items: ReservationSelection[]) {
    return items
        .map((item) => `${item.title} x${item.peopleCount}`)
        .join(" | ");
}

function buildReservationAmounts(items: ReservationSelection[]) {
    const totalPeople = items.reduce((sum, item) => sum + item.peopleCount, 0);
    return {
        totalPeople,
        expectedAmountCents: totalPeople * STRIPE_ACOMPTE_PER_PERSON_EUR * 100
    };
}

function getSessionCustomerFields(session: Stripe.Checkout.Session) {
    const name =
        session.customer_details?.name?.trim() ||
        session.customer_details?.email?.trim() ||
        "Client inconnu";
    const email = session.customer_details?.email?.trim() || "non-renseigne";
    const phone = session.customer_details?.phone?.trim() || "non-renseigne";

    return { name, email, phone };
}

async function persistReservationStatus(params: {
    stripe: Stripe;
    sessionId: string;
    paymentIntentId: string | null;
    metadata: Record<string, string>;
}) {
    const { stripe, sessionId, paymentIntentId, metadata } = params;

    await stripe.checkout.sessions.update(sessionId, { metadata });

    if (paymentIntentId) {
        await stripe.paymentIntents.update(paymentIntentId, { metadata });
    }
}

async function handleConfirmedDeposit(params: {
    stripe: Stripe;
    event: Stripe.Event;
    session: Stripe.Checkout.Session;
}) {
    const { stripe, event, session } = params;
    const currentSession = await stripe.checkout.sessions.retrieve(session.id);
    const currentMetadata = currentSession.metadata ?? {};

    if (currentMetadata.reservation_status === "deposit_confirmed") {
        return { status: "already_processed" as const };
    }

    const reservationItems = parseReservationItems(
        currentMetadata.reservation_items ?? session.metadata?.reservation_items
    );
    if (reservationItems.length === 0) {
        throw new Error(
            "Aucune reservation exploitable trouvee dans les metadonnees Stripe."
        );
    }

    const { totalPeople, expectedAmountCents } =
        buildReservationAmounts(reservationItems);
    const paidAmountCents = currentSession.amount_total ?? 0;
    const amountStatus =
        paidAmountCents === expectedAmountCents ? "ok" : "mismatch";
    const { name, email, phone } = getSessionCustomerFields(currentSession);

    const metadata = {
        ...currentMetadata,
        reservation_status:
            amountStatus === "ok"
                ? "deposit_confirmed"
                : "deposit_amount_mismatch",
        reservation_event_id: event.id,
        reservation_processed_at: new Date().toISOString(),
        reservation_customer_name: name,
        reservation_customer_email: email,
        reservation_customer_phone: phone,
        reservation_total_people: String(totalPeople),
        reservation_amount_paid: String(paidAmountCents),
        reservation_amount_expected: String(expectedAmountCents),
        reservation_summary: buildReservationSummary(reservationItems)
    };

    await persistReservationStatus({
        stripe,
        sessionId: currentSession.id,
        paymentIntentId:
            typeof currentSession.payment_intent === "string"
                ? currentSession.payment_intent
                : null,
        metadata
    });

    console.info("stripe.reservation.deposit_processed", {
        sessionId: currentSession.id,
        paymentStatus: currentSession.payment_status,
        reservationStatus: metadata.reservation_status,
        customerEmail: email,
        totalPeople,
        paidAmountCents,
        expectedAmountCents,
        reservationSummary: metadata.reservation_summary
    });

    return {
        status: metadata.reservation_status as
            | "deposit_confirmed"
            | "deposit_amount_mismatch"
    };
}

async function handleAsyncPaymentFailed(params: {
    stripe: Stripe;
    event: Stripe.Event;
    session: Stripe.Checkout.Session;
}) {
    const { stripe, event, session } = params;
    const currentSession = await stripe.checkout.sessions.retrieve(session.id);
    const currentMetadata = currentSession.metadata ?? {};

    const metadata = {
        ...currentMetadata,
        reservation_status: "payment_failed",
        reservation_event_id: event.id,
        reservation_processed_at: new Date().toISOString()
    };

    await persistReservationStatus({
        stripe,
        sessionId: currentSession.id,
        paymentIntentId:
            typeof currentSession.payment_intent === "string"
                ? currentSession.payment_intent
                : null,
        metadata
    });

    console.warn("stripe.reservation.payment_failed", {
        sessionId: currentSession.id,
        paymentStatus: currentSession.payment_status
    });
}

async function handlePaymentIntentFailed(paymentIntent: Stripe.PaymentIntent) {
    console.warn("stripe.payment_intent.payment_failed", {
        paymentIntentId: paymentIntent.id,
        reservationItems: paymentIntent.metadata?.reservation_items ?? null
    });
}

export async function POST(request: Request) {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (!secretKey || !webhookSecret) {
        return NextResponse.json(
            {
                error: "Configuration Stripe webhook incomplete (STRIPE_SECRET_KEY / STRIPE_WEBHOOK_SECRET)."
            },
            { status: 500 }
        );
    }

    const signature = request.headers.get("stripe-signature");
    if (!signature) {
        return NextResponse.json(
            { error: "Signature Stripe manquante." },
            { status: 400 }
        );
    }

    try {
        const payload = await request.text();
        const stripe = createStripeClient(secretKey);
        const event = stripe.webhooks.constructEvent(
            payload,
            signature,
            webhookSecret
        );

        switch (event.type) {
            case "checkout.session.completed":
            case "checkout.session.async_payment_succeeded": {
                const session = event.data.object as Stripe.Checkout.Session;
                await handleConfirmedDeposit({ stripe, event, session });
                break;
            }
            case "checkout.session.async_payment_failed": {
                const session = event.data.object as Stripe.Checkout.Session;
                await handleAsyncPaymentFailed({ stripe, event, session });
                break;
            }
            case "payment_intent.payment_failed": {
                const paymentIntent = event.data.object as Stripe.PaymentIntent;
                await handlePaymentIntentFailed(paymentIntent);
                break;
            }
            default:
                console.info("stripe.webhook.ignored_event", {
                    type: event.type
                });
                break;
        }

        return NextResponse.json({ received: true });
    } catch (error) {
        const message =
            error instanceof Error ? error.message : "Erreur webhook Stripe.";
        return NextResponse.json({ error: message }, { status: 400 });
    }
}
