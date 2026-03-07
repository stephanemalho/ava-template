import { reservationPackages, type ReservationPackage } from "@/app/reservations/_data/packages";
import { siteConfig } from "./seo-config";

type FaqEntry = {
    question: string;
    answer: string;
};

function buildRetreatOffer(pkg: ReservationPackage) {
    return {
        priceCurrency: "EUR",
        price: pkg.price.toString(),
        url: `${siteConfig.siteUrl}${siteConfig.pages.reservations}`,
        availability:
            pkg.availablePlaces > 0
                ? "https://schema.org/InStock"
                : "https://schema.org/SoldOut",
        inventoryLevel: {
            "@type": "QuantitativeValue",
            value: pkg.availablePlaces,
        },
        validFrom: "2026-01-01",
        category: "Sejour bien-etre",
    };
}

export function generateOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${siteConfig.siteUrl}/#organization`,
        name: siteConfig.name,
        url: siteConfig.siteUrl,
        image: `${siteConfig.siteUrl}${siteConfig.ogImage}`,
        description: siteConfig.description,
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.telephone,
        address: {
            "@type": "PostalAddress",
            ...siteConfig.locations.headquarters,
        },
        areaServed: "FR",
        sameAs: [siteConfig.socials.instagram],
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: siteConfig.contact.email,
            telephone: siteConfig.contact.telephone,
            areaServed: "FR",
            availableLanguage: ["fr"],
        },
    };
}

export function generateWebsiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${siteConfig.siteUrl}/#website`,
        name: siteConfig.name,
        url: siteConfig.siteUrl,
        inLanguage: "fr-FR",
        publisher: {
            "@id": `${siteConfig.siteUrl}/#organization`,
        },
    };
}

export function generateStayOffersSchema() {
    const offers = reservationPackages.map((pkg) => ({
        "@type": "Offer",
        "@id": `${siteConfig.siteUrl}${siteConfig.pages.reservations}#offer-${pkg.id}`,
        name: pkg.title,
        description: `${pkg.subtitle} - ${pkg.location}`,
        itemOffered: {
            "@type": "Service",
            name: "Retraite bien-etre tout inclus",
        },
        ...buildRetreatOffer(pkg),
    }));

    return {
        "@context": "https://schema.org",
        "@type": "OfferCatalog",
        "@id": `${siteConfig.siteUrl}${siteConfig.pages.reservations}#offer-catalog`,
        name: "Offres de sejours AVA Bien-Etre",
        url: `${siteConfig.siteUrl}${siteConfig.pages.reservations}`,
        seller: {
            "@id": `${siteConfig.siteUrl}/#organization`,
        },
        itemListElement: offers
    };
}

export function generateStayEventsSchema() {
    return reservationPackages.map((pkg) => ({
        "@context": "https://schema.org",
        "@type": "Event",
        "@id": `${siteConfig.siteUrl}${siteConfig.pages.reservations}#event-${pkg.id}`,
        name: pkg.title,
        description: `Retraite bien-etre AVA en pension complete a ${pkg.location} ${pkg.subtitle}.`,
        image: [`${siteConfig.siteUrl}${pkg.image}`],
        startDate: `${pkg.startDate}T16:00:00+02:00`,
        endDate: `${pkg.endDate}T11:00:00+02:00`,
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        inLanguage: "fr-FR",
        location: {
            "@type": "Place",
            name: siteConfig.locations.retreatVenue.name,
            address: {
                "@type": "PostalAddress",
                addressLocality: siteConfig.locations.retreatVenue.addressLocality,
                addressRegion: siteConfig.locations.retreatVenue.addressRegion,
                addressCountry: siteConfig.locations.retreatVenue.addressCountry,
            },
        },
        organizer: {
            "@id": `${siteConfig.siteUrl}/#organization`,
        },
        offers: {
            "@id": `${siteConfig.siteUrl}${siteConfig.pages.reservations}#offer-${pkg.id}`,
        },
    }));
}

export function generateStayFaqSchema(entries: FaqEntry[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${siteConfig.siteUrl}${siteConfig.pages.sejours}#faq`,
        mainEntity: entries.map((entry) => ({
            "@type": "Question",
            name: entry.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: entry.answer,
            },
        })),
    };
}
