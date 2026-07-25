import assert from "node:assert/strict";
import test from "node:test";
import { reservationPackages } from "../app/reservations/_data/packages";
import {
    generateStayEventsSchema,
    generateStayOffersSchema
} from "../lib/schema-generators";
import { siteConfig } from "../lib/seo-config";

test("keeps only the upcoming October stay in active reservation data", () => {
    assert.equal(reservationPackages.length, 1);
    assert.equal(reservationPackages[0]?.id, "shared-room-2");
    assert.match(reservationPackages[0]?.title ?? "", /octobre 2026/i);
});

test("publishes the October event on the descriptive stay page", () => {
    const events = generateStayEventsSchema();

    assert.equal(events.length, 1);
    assert.equal(events[0]?.["@type"], "Event");
    assert.equal(
        events[0]?.url,
        `${siteConfig.siteUrl}${siteConfig.pages.sejours}`
    );
    assert.equal(events[0]?.offers?.["@type"], "Offer");
    assert.equal(events[0]?.offers?.price, "1800");
    assert.equal(events[0]?.offers?.priceCurrency, "EUR");
    assert.equal(
        events[0]?.offers?.url,
        `${siteConfig.siteUrl}${siteConfig.pages.reservations}#sejour-shared-room-2`
    );
});

test("publishes only the active stay offer on the reservations page", () => {
    const catalog = generateStayOffersSchema();

    assert.equal(catalog["@type"], "OfferCatalog");
    assert.equal(catalog.itemListElement.length, 1);
    assert.equal(catalog.itemListElement[0]?.name, reservationPackages[0]?.title);
    assert.equal(
        catalog.itemListElement[0]?.url,
        `${siteConfig.siteUrl}${siteConfig.pages.reservations}#sejour-shared-room-2`
    );
});
