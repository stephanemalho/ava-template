import assert from "node:assert/strict";
import test from "node:test";
import type Stripe from "stripe";
import {
    inspectReservationCheckoutSession,
    parseReservationItems
} from "../lib/stripe-reservation";

const packages = [
    {
        id: "shared-room-2",
        title: "Séjour bien-être d'octobre",
        totalPlaces: 6,
        price: 1800,
        depositPerPersonEuros: 500
    }
];

const packagesWithDifferentDeposits = [
    ...packages,
    {
        id: "memoire-d-ames-duo",
        title: "Mémoire d’Âmes — Chambre duo",
        totalPlaces: 10,
        price: 1820,
        depositPerPersonEuros: 600
    }
];

function buildSession(
    overrides: Partial<Stripe.Checkout.Session> = {}
): Stripe.Checkout.Session {
    return {
        mode: "payment",
        status: "complete",
        payment_status: "paid",
        currency: "eur",
        amount_total: 100_000,
        metadata: {
            reservation_items: "shared-room-2:2"
        },
        ...overrides
    } as Stripe.Checkout.Session;
}

test("accepts a completed paid EUR reservation with the exact amount", () => {
    const result = inspectReservationCheckoutSession(
        buildSession(),
        packages
    );

    assert.equal(result.status, "paid");
    if (result.status === "paid") {
        assert.equal(result.totalPeople, 2);
        assert.equal(result.expectedAmountCents, 100_000);
        assert.equal(result.totalStayAmountCents, 360_000);
        assert.equal(result.remainingBalanceCents, 260_000);
    }
});

test("keeps an unpaid completed session pending", () => {
    const result = inspectReservationCheckoutSession(
        buildSession({ payment_status: "unpaid" }),
        packages
    );

    assert.equal(result.status, "pending");
});

test("calculates the deposit independently for each stay", () => {
    const result = inspectReservationCheckoutSession(
        buildSession({
            amount_total: 110_000,
            metadata: { reservation_items: "shared-room-2:1,memoire-d-ames-duo:1" }
        }),
        packagesWithDifferentDeposits
    );

    assert.equal(result.status, "paid");
    if (result.status === "paid") {
        assert.equal(result.expectedAmountCents, 110_000);
        assert.equal(result.remainingBalanceCents, 252_000);
    }
});

test("rejects a session whose amount does not match the reservation", () => {
    const result = inspectReservationCheckoutSession(
        buildSession({ amount_total: 99_900 }),
        packages
    );

    assert.deepEqual(result, {
        status: "invalid",
        reason: "unexpected_amount"
    });
});

test("rejects a session paid in another currency", () => {
    const result = inspectReservationCheckoutSession(
        buildSession({ currency: "usd" }),
        packages
    );

    assert.deepEqual(result, {
        status: "invalid",
        reason: "unexpected_currency"
    });
});

test("rejects duplicate or malformed reservation metadata", () => {
    assert.equal(
        parseReservationItems(
            "shared-room-2:2,shared-room-2:1",
            packages
        ),
        null
    );
    assert.equal(parseReservationItems("shared-room-2:0", packages), null);
    assert.equal(parseReservationItems("unknown:1", packages), null);
});

test("rejects a deposit greater than the full stay price", () => {
    const result = inspectReservationCheckoutSession(
        buildSession({ amount_total: 400_000 }),
        [{ ...packages[0], depositPerPersonEuros: 2000 }]
    );

    assert.deepEqual(result, {
        status: "invalid",
        reason: "deposit_exceeds_stay_total"
    });
});
