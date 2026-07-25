import type Stripe from "stripe";

export type ReservationPackageReference = {
    id: string;
    title: string;
    totalPlaces: number;
    price: number;
};

export type ReservationSelection = {
    id: string;
    peopleCount: number;
    title: string;
    unitPriceEuros: number;
};

export type ReservationPaymentVerification =
    | {
          status: "paid";
          items: ReservationSelection[];
          totalPeople: number;
          expectedAmountCents: number;
          totalStayAmountCents: number;
          remainingBalanceCents: number;
      }
    | {
          status: "pending";
          items: ReservationSelection[];
          totalPeople: number;
          expectedAmountCents: number;
          totalStayAmountCents: number;
          remainingBalanceCents: number;
      }
    | {
          status: "invalid";
          reason:
              | "invalid_session_mode"
              | "invalid_session_status"
              | "invalid_reservation_items"
              | "unexpected_amount"
              | "unexpected_currency"
              | "unexpected_payment_status"
              | "deposit_exceeds_stay_total";
      };

export function parseReservationItems(
    rawValue: string | null | undefined,
    packages: ReservationPackageReference[]
) {
    if (!rawValue) return null;

    const entries = rawValue
        .split(",")
        .map((entry) => entry.trim())
        .filter(Boolean);
    if (entries.length === 0 || entries.length > 10) return null;

    const packageMap = new Map(packages.map((pkg) => [pkg.id, pkg]));
    const seenPackageIds = new Set<string>();
    const selections: ReservationSelection[] = [];

    for (const entry of entries) {
        const match = /^([^,:]+):([1-9]\d*)$/.exec(entry);
        if (!match) return null;

        const [, id, peopleCountRaw] = match;
        const peopleCount = Number(peopleCountRaw);
        const pkg = packageMap.get(id);

        if (
            !pkg ||
            seenPackageIds.has(id) ||
            !Number.isSafeInteger(peopleCount) ||
            peopleCount > pkg.totalPlaces ||
            !Number.isFinite(pkg.price) ||
            pkg.price < 0
        ) {
            return null;
        }

        seenPackageIds.add(id);
        selections.push({
            id,
            peopleCount,
            title: pkg.title,
            unitPriceEuros: pkg.price
        });
    }

    return selections;
}

export function buildReservationSummary(items: ReservationSelection[]) {
    return items
        .map((item) => `${item.title} x${item.peopleCount}`)
        .join(" | ");
}

export function inspectReservationCheckoutSession(
    session: Stripe.Checkout.Session,
    packages: ReservationPackageReference[],
    depositPerPersonEuros: number
): ReservationPaymentVerification {
    if (session.mode !== "payment") {
        return { status: "invalid", reason: "invalid_session_mode" };
    }

    if (session.status !== "complete") {
        return { status: "invalid", reason: "invalid_session_status" };
    }

    const items = parseReservationItems(
        session.metadata?.reservation_items,
        packages
    );
    if (!items) {
        return { status: "invalid", reason: "invalid_reservation_items" };
    }

    const totalPeople = items.reduce(
        (sum, item) => sum + item.peopleCount,
        0
    );
    const expectedAmountCents =
        totalPeople * depositPerPersonEuros * 100;
    const totalStayAmountCents = items.reduce(
        (sum, item) =>
            sum +
            Math.round(item.unitPriceEuros * 100) * item.peopleCount,
        0
    );
    const remainingBalanceCents =
        totalStayAmountCents - expectedAmountCents;

    if (remainingBalanceCents < 0) {
        return {
            status: "invalid",
            reason: "deposit_exceeds_stay_total"
        };
    }

    if (session.currency?.toLowerCase() !== "eur") {
        return { status: "invalid", reason: "unexpected_currency" };
    }

    if (session.amount_total !== expectedAmountCents) {
        return { status: "invalid", reason: "unexpected_amount" };
    }

    if (session.payment_status === "unpaid") {
        return {
            status: "pending",
            items,
            totalPeople,
            expectedAmountCents,
            totalStayAmountCents,
            remainingBalanceCents
        };
    }

    if (session.payment_status !== "paid") {
        return { status: "invalid", reason: "unexpected_payment_status" };
    }

    return {
        status: "paid",
        items,
        totalPeople,
        expectedAmountCents,
        totalStayAmountCents,
        remainingBalanceCents
    };
}
