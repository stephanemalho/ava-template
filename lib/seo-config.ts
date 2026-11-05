import { createLastmodGetter } from "./lastmod";

export const siteConfig = {
    name: "Ava Bien-Être",
    siteUrl: "https://www.avabienetre.fr",
    title: "Séjours immersifs et connaissance de soi | AVA Bien-Être",
    description:
        "Des séjours immersifs pour ralentir, explorer et se rencontrer, avec Aurélie AVA et Pierre Yonas.",
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
    },
    logo: "/logo-ava-bien-etre-nouveau.png",
    ogImage: "/sejours-ava.jpg",
    ogImageAlt: "Retraite bien-être AVA",
    ogImageWidth: 2000,
    ogImageHeight: 1333,
    keywords: [
        "retraite bien-être",
        "séjour bien-être en Saône-et-Loire",
        "stage ressourcement",
        "reconnexion à soi",
        "hypnose magnétisme médiumnité",
        "réservation retraite bien-être"
    ],
    pages: {
        home: "/",
        presentation: "/presentation",
        team: "/notre-equipe",
        sejours: "/memoire-d-ames",
        memoireDAmes: "/memoire-d-ames",
        reservations: "/reservations",
        memoireDAmesReservations: "/reservations/memoire-d-ames",
        contact: "/contact",
        legalNotice: "/mentions-legales",
        privacy: "/politique-de-confidentialite",
        cgv: "/conditions-generales-de-vente"
    }
} as const;

export const sitemapPages = [
    { url: "/", changefreq: "monthly", priority: 1.0, lastmod: "2026-10-05" },
    {
        url: "/presentation",
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2026-10-05"
    },
    {
        url: "/notre-equipe",
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2026-10-05"
    },
    {
        url: "/memoire-d-ames",
        changefreq: "weekly",
        priority: 0.95,
        lastmod: "2026-10-05"
    },
    {
        url: "/reservations",
        changefreq: "monthly",
        priority: 0.9,
        lastmod: "2026-10-05"
    },
    {
        url: "/reservations/memoire-d-ames",
        changefreq: "monthly",
        priority: 0.9,
        lastmod: "2026-10-05"
    },
    {
        url: "/contact",
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2026-10-05"
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
