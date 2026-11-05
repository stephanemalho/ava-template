import assert from "node:assert/strict";
import test from "node:test";
import { reservationPackages } from "../app/reservations/_data/packages";
import {
    generateStayOffersSchema
} from "../lib/schema-generators";
import { siteConfig } from "../lib/seo-config";

test("only keeps Mémoire d’Âmes in active reservation data", () => {
    assert.equal(reservationPackages.length, 1);
    assert.equal(reservationPackages[0]?.id, "memoire-d-ames-duo");
    assert.ok(reservationPackages.every((pkg) => !/trans-en-provence/i.test(JSON.stringify(pkg))));
});

test("publishes only the active stay offer on the reservations page", () => {
    const catalog = generateStayOffersSchema();

    assert.equal(catalog["@type"], "OfferCatalog");
    assert.equal(catalog.itemListElement.length, 1);
    assert.equal(catalog.itemListElement[0]?.name, reservationPackages[0]?.title);
    assert.equal(
        catalog.itemListElement[0]?.url,
        `${siteConfig.siteUrl}${siteConfig.pages.memoireDAmesReservations}#sejour-memoire-d-ames-duo`
    );
});

test("exposes Mémoire d’Âmes prices, stock and booking validity", () => {
    const memoirePackages = reservationPackages.filter(
        (pkg) => pkg.stayId === "memoire-d-ames-decembre-2026"
    );

    assert.equal(memoirePackages.length, 1);
    assert.deepEqual(
        memoirePackages.map((pkg) => ({ price: pkg.price, places: pkg.availablePlaces })),
        [{ price: 1490, places: 1 }]
    );
    assert.ok(memoirePackages.every((pkg) => pkg.bookingOpensAt && pkg.bookingDeadline));
});
