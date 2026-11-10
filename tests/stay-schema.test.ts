import assert from "node:assert/strict";
import test from "node:test";
import { reservationPackages } from "../app/reservations/_data/packages";
import {
    generateStayOffersSchema
} from "../lib/schema-generators";
import { siteConfig } from "../lib/seo-config";

test("includes both active stays in reservation data", () => {
    assert.equal(reservationPackages.length, 2);
    assert.deepEqual(reservationPackages.map((pkg) => pkg.id).sort(), ["les-lignes-du-destin", "memoire-d-ames-duo"]);
    assert.ok(reservationPackages.every((pkg) => !/trans-en-provence/i.test(JSON.stringify(pkg))));
});

test("publishes both active stay offers on the reservations page", () => {
    const catalog = generateStayOffersSchema();

    assert.equal(catalog["@type"], "OfferCatalog");
    assert.equal(catalog.itemListElement.length, 2);
    assert.equal(catalog.itemListElement[0]?.name, reservationPackages[0]?.title);
    assert.equal(
        catalog.itemListElement[0]?.url,
        `${siteConfig.siteUrl}${siteConfig.pages.lesLignesDuDestinReservations}#sejour-les-lignes-du-destin`
    );
});

test("exposes Mémoire d’Âmes prices, stock and booking validity", () => {
    const memoirePackages = reservationPackages.filter(
        (pkg) => pkg.stayId === "memoire-d-ames-decembre-2026"
    );

    assert.equal(memoirePackages.length, 1);
    assert.deepEqual(
        memoirePackages.map((pkg) => ({ price: pkg.price, places: pkg.availablePlaces })),
        [{ price: 1490, places: 0 }]
    );
    assert.ok(memoirePackages.every((pkg) => pkg.bookingOpensAt && pkg.bookingDeadline));
});
