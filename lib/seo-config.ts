import { createLastmodGetter } from "./lastmod";

export const siteConfig = {
    name: "Ava Bien-Etre",
    siteUrl: "https://www.avabienetre.fr",
    title: "Ava Bien-Etre | Retraites bien-etre en Provence",
    description:
        "Retraites bien-etre tout inclus en Provence: séjours ressourcants, équipe pluridisciplinaire et accompagnement personnalisé.",
    locale: "fr_FR",
    author: "Ava Bien-Etre",
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
            name: "Séjour AVA Bien-Etre à Trans-en-Provence",
            addressLocality: "Trans-en-Provence",
            addressRegion: "Provence-Alpes-Côte d'Azur",
            addressCountry: "FR",
        },
    },
    ogImage: "/sejours-ava.jpg",
    ogImageAlt: "Retraite bien-etre AVA en Provence",
    ogImageWidth: 2000,
    ogImageHeight: 1333,
    keywords: [
        "retraite bien-etre provence",
        "sejour bien-etre trans-en-provence",
        "stage ressourcement",
        "reconnexion a soi",
        "sejour yoga meditation",
        "reservation retraite bien-etre"
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
    { url: "/", changefreq: "monthly", priority: 1.0, lastmod: "2026-03-01" },
    {
        url: "/presentation",
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2026-03-01"
    },
    {
        url: "/notre-equipe",
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2026-03-01"
    },
    {
        url: "/sejour-a-trans-en-provence",
        changefreq: "monthly",
        priority: 0.9,
        lastmod: "2026-03-01"
    },
    {
        url: "/reservations",
        changefreq: "monthly",
        priority: 0.9,
        lastmod: "2026-03-01"
    },
    {
        url: "/contact",
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2026-03-01"
    },
    {
        url: "/mentions-legales",
        changefreq: "yearly",
        priority: 0.4,
        lastmod: "2026-03-01"
    },
    {
        url: "/politique-de-confidentialite",
        changefreq: "yearly",
        priority: 0.4,
        lastmod: "2026-03-01"
    },
    {
        url: "/conditions-generales-de-vente",
        changefreq: "yearly",
        priority: 0.5,
        lastmod: "2026-03-01"
    }
];

export const returnLastmod = createLastmodGetter(sitemapPages);
