import { NextResponse } from "next/server";
import Stripe from "stripe";
import { reservationPackages } from "@/app/reservations/_data/packages";
import { STRIPE_ACOMPTE_PER_PERSON_EUR } from "@/lib/reservation-pricing";
import {
    buildReservationSummary,
    inspectReservationCheckoutSession
} from "@/lib/stripe-reservation";
import { getStripeClient } from "@/lib/stripe-server";

export const runtime = "nodejs";

function getPaymentIntentId(session: Stripe.Checkout.Session) {
    if (typeof session.payment_intent === "string") {
        return session.payment_intent;
    }

    return session.payment_intent?.id ?? null;
}

async function persistReservationStatus(params: {
    stripe: Stripe;
    eventId: string;
    sessionId: string;
    paymentIntentId: string | null;
    metadata: Record<string, string>;
}) {
    const {
        stripe,
        eventId,
        sessionId,
        paymentIntentId,
        metadata
    } = params;

    if (paymentIntentId) {
        await stripe.paymentIntents.update(
            paymentIntentId,
            { metadata },
            {
                idempotencyKey: `ava-reservation-payment-intent-${eventId}`
            }
        );
    }

    await stripe.checkout.sessions.update(
        sessionId,
        { metadata },
        {
            idempotencyKey: `ava-reservation-checkout-session-${eventId}`
        }
    );
}

async function handlePaymentEvent(params: {
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

    const verification = inspectReservationCheckoutSession(
        currentSession,
        reservationPackages,
        STRIPE_ACOMPTE_PER_PERSON_EUR
    );
    const processedAt = new Date().toISOString();

    if (verification.status === "invalid") {
        const metadata = {
            ...currentMetadata,
            reservation_status: "payment_invalid",
            reservation_validation_error: verification.reason,
            reservation_event_id: event.id,
            reservation_processed_at: processedAt,
            reservation_payment_status: currentSession.payment_status,
            reservation_amount_paid: String(currentSession.amount_total ?? 0),
            reservation_currency_received:
                currentSession.currency ?? "non-renseignee"
        };

        await persistReservationStatus({
            stripe,
            eventId: event.id,
            sessionId: currentSession.id,
            paymentIntentId: getPaymentIntentId(currentSession),
            metadata
        });

        console.warn("stripe.reservation.payment_rejected", {
            sessionId: currentSession.id,
            paymentStatus: currentSession.payment_status,
            reason: verification.reason
        });

        return { status: "payment_invalid" as const };
    }

    if (verification.status === "pending") {
        const metadata = {
            ...currentMetadata,
            reservation_status: "payment_pending",
            reservation_event_id: event.id,
            reservation_processed_at: processedAt,
            reservation_payment_status: currentSession.payment_status,
            reservation_total_people: String(verification.totalPeople),
            reservation_amount_paid: String(currentSession.amount_total ?? 0),
            reservation_amount_expected: String(
                verification.expectedAmountCents
            ),
            reservation_stay_amount_total_cents: String(
                verification.totalStayAmountCents
            ),
            reservation_balance_due_cents: String(
                verification.remainingBalanceCents
            ),
            reservation_summary: buildReservationSummary(verification.items)
        };

        await persistReservationStatus({
            stripe,
            eventId: event.id,
            sessionId: currentSession.id,
            paymentIntentId: getPaymentIntentId(currentSession),
            metadata
        });

        console.info("stripe.reservation.payment_pending", {
            sessionId: currentSession.id,
            paymentStatus: currentSession.payment_status
        });

        return { status: "payment_pending" as const };
    }

    const metadata = {
        ...currentMetadata,
        reservation_status: "deposit_confirmed",
        reservation_event_id: event.id,
        reservation_processed_at: processedAt,
        reservation_payment_status: currentSession.payment_status,
        reservation_total_people: String(verification.totalPeople),
        reservation_amount_paid: String(currentSession.amount_total ?? 0),
        reservation_amount_expected: String(verification.expectedAmountCents),
        reservation_stay_amount_total_cents: String(
            verification.totalStayAmountCents
        ),
        reservation_balance_due_cents: String(
            verification.remainingBalanceCents
        ),
        reservation_summary: buildReservationSummary(verification.items)
    };

    await persistReservationStatus({
        stripe,
        eventId: event.id,
        sessionId: currentSession.id,
        paymentIntentId: getPaymentIntentId(currentSession),
        metadata
    });

    console.info("stripe.reservation.deposit_processed", {
        sessionId: currentSession.id,
        paymentStatus: currentSession.payment_status,
        reservationStatus: metadata.reservation_status,
        hasCustomerName: Boolean(
            currentSession.customer_details?.individual_name ||
                currentSession.customer_details?.name
        ),
        hasCustomerEmail: Boolean(currentSession.customer_details?.email),
        hasCustomerPhone: Boolean(currentSession.customer_details?.phone),
        totalPeople: verification.totalPeople,
        paidAmountCents: currentSession.amount_total,
        expectedAmountCents: verification.expectedAmountCents,
        reservationSummary: metadata.reservation_summary
    });

    return { status: "deposit_confirmed" as const };
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
        reservation_processed_at: new Date().toISOString(),
        reservation_payment_status: currentSession.payment_status
    };

    await persistReservationStatus({
        stripe,
        eventId: event.id,
        sessionId: currentSession.id,
        paymentIntentId: getPaymentIntentId(currentSession),
        metadata
    });

    console.warn("stripe.reservation.payment_failed", {
        sessionId: currentSession.id,
        paymentStatus: currentSession.payment_status
    });
}

function handlePaymentIntentFailed(paymentIntent: Stripe.PaymentIntent) {
    console.warn("stripe.payment_intent.payment_failed", {
        paymentIntentId: paymentIntent.id,
        hasReservationItems: Boolean(
            paymentIntent.metadata?.reservation_items
        )
    });
}

export async function POST(request: Request) {
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (!process.env.STRIPE_SECRET_KEY || !webhookSecret) {
        return NextResponse.json(
            { error: "Configuration Stripe webhook incomplete." },
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

    const payload = await request.text();
    const stripe = getStripeClient();

    let event: Stripe.Event;
    try {
        event = stripe.webhooks.constructEvent(
            payload,
            signature,
            webhookSecret
        );
    } catch {
        return NextResponse.json(
            { error: "Signature Stripe invalide." },
            { status: 400 }
        );
    }

    try {
        switch (event.type) {
            case "checkout.session.completed":
            case "checkout.session.async_payment_succeeded": {
                const session = event.data.object as Stripe.Checkout.Session;
                await handlePaymentEvent({ stripe, event, session });
                break;
            }
            case "checkout.session.async_payment_failed": {
                const session = event.data.object as Stripe.Checkout.Session;
                await handleAsyncPaymentFailed({ stripe, event, session });
                break;
            }
            case "payment_intent.payment_failed": {
                const paymentIntent = event.data.object as Stripe.PaymentIntent;
                handlePaymentIntentFailed(paymentIntent);
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
        console.error("stripe.webhook.handler_failed", {
            type: event.type,
            errorName: error instanceof Error ? error.name : "UnknownError"
        });
        return NextResponse.json(
            { error: "Traitement du webhook Stripe impossible." },
            { status: 500 }
        );
    }
}
