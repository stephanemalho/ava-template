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
        category: "Séjour bien-être",
    };
}

export function generateRetreatServiceSchema() {
    const availablePackages = reservationPackages.filter(
        (pkg) => pkg.availablePlaces > 0
    );
    const pricedPackages =
        availablePackages.length > 0 ? availablePackages : reservationPackages;
    const prices = pricedPackages.map((pkg) => pkg.price);
    const totalAvailablePlaces = reservationPackages.reduce(
        (sum, pkg) => sum + pkg.availablePlaces,
        0
    );

    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${siteConfig.siteUrl}${siteConfig.pages.sejours}#service`,
        name: "Séjours bien-être AVA",
        provider: {
            "@id": `${siteConfig.siteUrl}/#organization`,
        },
        areaServed: "FR",
        serviceType: "Retraites bien-être tout inclus",
        url: `${siteConfig.siteUrl}${siteConfig.pages.sejours}`,
        image: [`${siteConfig.siteUrl}${siteConfig.ogImage}`],
        offers: {
            "@type": "AggregateOffer",
            priceCurrency: "EUR",
            lowPrice: Math.min(...prices).toString(),
            highPrice: Math.max(...prices).toString(),
            offerCount: availablePackages.length.toString(),
            availability:
                availablePackages.length > 0
                    ? "https://schema.org/InStock"
                    : "https://schema.org/SoldOut",
            inventoryLevel: {
                "@type": "QuantitativeValue",
                value: totalAvailablePlaces,
            },
            url: `${siteConfig.siteUrl}${siteConfig.pages.reservations}`,
        },
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
            name: "Retraite bien-être tout inclus",
        },
        ...buildRetreatOffer(pkg),
    }));

    return {
        "@context": "https://schema.org",
        "@type": "OfferCatalog",
        "@id": `${siteConfig.siteUrl}${siteConfig.pages.reservations}#offer-catalog`,
        name: "Offres de séjours AVA Bien-Être",
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
        description: `Retraite bien-être AVA en pension complète à ${pkg.location} ${pkg.subtitle}.`,
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
