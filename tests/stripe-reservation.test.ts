import assert from "node:assert/strict";
import test from "node:test";
import type Stripe from "stripe";
import {
    inspectReservationCheckoutSession,
    parseReservationItems
} from "../lib/stripe-reservation";

const packages = [
    {
        id: "shared-room",
        title: "Séjour partagé",
        totalPlaces: 6
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
            reservation_items: "shared-room:2"
        },
        ...overrides
    } as Stripe.Checkout.Session;
}

test("accepts a completed paid EUR reservation with the exact amount", () => {
    const result = inspectReservationCheckoutSession(
        buildSession(),
        packages,
        500
    );

    assert.equal(result.status, "paid");
    if (result.status === "paid") {
        assert.equal(result.totalPeople, 2);
        assert.equal(result.expectedAmountCents, 100_000);
    }
});

test("keeps an unpaid completed session pending", () => {
    const result = inspectReservationCheckoutSession(
        buildSession({ payment_status: "unpaid" }),
        packages,
        500
    );

    assert.equal(result.status, "pending");
});

test("rejects a session whose amount does not match the reservation", () => {
    const result = inspectReservationCheckoutSession(
        buildSession({ amount_total: 99_900 }),
        packages,
        500
    );

    assert.deepEqual(result, {
        status: "invalid",
        reason: "unexpected_amount"
    });
});

test("rejects a session paid in another currency", () => {
    const result = inspectReservationCheckoutSession(
        buildSession({ currency: "usd" }),
        packages,
        500
    );

    assert.deepEqual(result, {
        status: "invalid",
        reason: "unexpected_currency"
    });
});

test("rejects duplicate or malformed reservation metadata", () => {
    assert.equal(
        parseReservationItems(
            "shared-room:2,shared-room:1",
            packages
        ),
        null
    );
    assert.equal(parseReservationItems("shared-room:0", packages), null);
    assert.equal(parseReservationItems("unknown:1", packages), null);
});
