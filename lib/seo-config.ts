import { createLastmodGetter } from "./lastmod";

export const siteConfig = {
    name: "Ava Bien-Être",
    siteUrl: "https://www.avabienetre.fr",
    title: "Ava Bien-Être | Retraites bien-être en Provence",
    description:
        "Retraites bien-être tout inclus en Provence : séjours ressourçants, équipe pluridisciplinaire et accompagnement personnalisé.",
    locale: "fr_FR",
    author: "Ava Bien-Être",
    contact: {
        email: "avabienetre71@gmail.com",
        telephone: "+33689758031",
    },
    socials: {
        instagram: "https://www.instagram.com/ava.bienetre/",
    },
    locations: {
        headquarters: {
            streetAddress: "800 chemin de la liambe",
            postalCode: "71480",
            addressLocality: "Dommartin-les-Cuiseaux",
            addressCountry: "FR",
        },
        retreatVenue: {
            name: "Séjour AVA Bien-Être à Trans-en-Provence",
            addressLocality: "Trans-en-Provence",
            addressRegion: "Provence-Alpes-Côte d'Azur",
            addressCountry: "FR",
        },
    },
    ogImage: "/sejours-ava.jpg",
    ogImageAlt: "Retraite bien-être AVA en Provence",
    ogImageWidth: 2000,
    ogImageHeight: 1333,
    keywords: [
        "retraite bien-être provence",
        "séjour bien-être trans-en-provence",
        "stage ressourcement",
        "reconnexion à soi",
        "séjour yoga méditation",
        "réservation retraite bien-être"
    ],
    pages: {
        home: "/",
        presentation: "/presentation",
        team: "/notre-equipe",
        sejours: "/sejour-a-trans-en-provence",
        reservations: "/reservations",
        contact: "/contact",
        legalNotice: "/mentions-legales",
        privacy: "/politique-de-confidentialite",
        cgv: "/conditions-generales-de-vente"
    }
} as const;

export const sitemapPages = [
    { url: "/", changefreq: "monthly", priority: 1.0, lastmod: "2026-04-03" },
    {
        url: "/presentation",
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2026-04-03"
    },
    {
        url: "/notre-equipe",
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2026-04-03"
    },
    {
        url: "/sejour-a-trans-en-provence",
        changefreq: "monthly",
        priority: 0.9,
        lastmod: "2026-04-03"
    },
    {
        url: "/reservations",
        changefreq: "monthly",
        priority: 0.9,
        lastmod: "2026-04-03"
    },
    {
        url: "/contact",
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2026-04-03"
    },
    {
        url: "/mentions-legales",
        changefreq: "yearly",
        priority: 0.4,
        lastmod: "2026-04-03"
    },
    {
        url: "/politique-de-confidentialite",
        changefreq: "yearly",
        priority: 0.4,
        lastmod: "2026-04-03"
    },
    {
        url: "/conditions-generales-de-vente",
        changefreq: "yearly",
        priority: 0.5,
        lastmod: "2026-04-03"
    }
];

export const returnLastmod = createLastmodGetter(sitemapPages);
