import {
    STRIPE_ACOMPTE_PER_PERSON_EUR,
    STRIPE_MEMOIRE_D_AMES_ACOMPTE_PER_PERSON_EUR
} from "@/lib/reservation-pricing";

// Valeurs à mettre à jour au fil des réservations Mémoire d’Âmes.
export const MEMOIRE_D_AMES_DUO_AVAILABLE_PLACES = 15;
export const MEMOIRE_D_AMES_INDIVIDUAL_AVAILABLE_PLACES = 15;
// Tarif Early Bird partagé entre les deux formules : à mettre à 0 une fois les 8 premières réservations effectuées.
export const MEMOIRE_D_AMES_EARLY_BIRD_AVAILABLE_PLACES = 8;
export const MEMOIRE_D_AMES_DUO_STANDARD_PRICE = 1820;
export const MEMOIRE_D_AMES_DUO_EARLY_BIRD_PRICE = 1720;
export const MEMOIRE_D_AMES_INDIVIDUAL_STANDARD_PRICE = 1880;
export const MEMOIRE_D_AMES_INDIVIDUAL_EARLY_BIRD_PRICE = 1780;
export const MEMOIRE_D_AMES_BOOKING_OPENS_AT = "2026-09-10T00:00:00+02:00";

export type ReservationPackage = {
    id: string;
    stayId: string;
    eventName: string;
    reservationPath: string;
    title: string;
    dateRange: string;
    startDate: string;
    endDate: string;
    bookingDeadline: string;
    bookingOpensAt?: string;
    subtitle: string;
    price: number;
    originalPrice?: number;
    depositPerPersonEuros: number;
    image: string;
    badge: string;
    badgeColor: string;
    features: string[];
    location: string;
    type: string;
    totalPlaces: number;
    availablePlaces: number;
};

export const reservationPackages: ReservationPackage[] = [
    {
        id: "shared-room-2",
        stayId: "trans-en-provence-octobre-2026",
        eventName: "Séjour bien-être — Trans-en-Provence (22–28 octobre 2026)",
        reservationPath: "/reservations",
        title: "Séjour bien-être du 22 au 28 octobre 2026",
        dateRange: "22 au 28 octobre 2026",
        startDate: "2026-10-22",
        endDate: "2026-10-28",
        bookingDeadline: "2026-10-22T00:00:00+02:00",
        subtitle: "(chambre partagée)",
        price: 1800,
        depositPerPersonEuros: STRIPE_ACOMPTE_PER_PERSON_EUR,
        image: "/sejours/espaces-exterieurs/evenement-ava-bien-etre-octobre-2026.jpg",
        badge: "RÉSERVATIONS TERMINÉES",
        badgeColor: "bg-muted-foreground",
        features: [
            "Séjour en pension complète du jeudi 22 au mercredi 28 octobre 2026",
            "Hébergement, repas, collations, intervenants, animations, ateliers inclus",
            "Option de règlement de votre séjour en plusieurs fois disponible sur demande (Paypal / Virement bancaire)"
        ],
        location: "Trans-en-Provence",
        type: "Chambre Partagée",
        totalPlaces: 11,
        availablePlaces: 0
    },
    {
        id: "memoire-d-ames-duo",
        stayId: "memoire-d-ames-decembre-2026",
        eventName: "Mémoire d’Âmes — Saint-Usuge (17–21 décembre 2026)",
        reservationPath: "/reservations/memoire-d-ames",
        title: "Mémoire d’Âmes — Chambre duo",
        dateRange: "17 au 21 décembre 2026",
        startDate: "2026-12-17",
        endDate: "2026-12-21",
        bookingDeadline: "2026-12-17T18:00:00+01:00",
        bookingOpensAt: MEMOIRE_D_AMES_BOOKING_OPENS_AT,
        subtitle: "Chambre partagée à deux",
        price: MEMOIRE_D_AMES_DUO_EARLY_BIRD_PRICE,
        originalPrice: MEMOIRE_D_AMES_DUO_STANDARD_PRICE,
        depositPerPersonEuros: STRIPE_MEMOIRE_D_AMES_ACOMPTE_PER_PERSON_EUR,
        image: "/sejour-et-activite/mémoire-d-ames/pierre-yonas-et-la-decouverte-de-soi-1200.webp",
        badge: "EARLY BIRD · 1 720 € / personne",
        badgeColor: "bg-primary",
        features: [
            "Séjour complet du 17 au 21 décembre 2026, pension complète incluse",
            "Chambre partagée à deux : 2 lits simples ou 1 lit double pour les couples, selon disponibilité",
            "Ateliers de présence et de conscience, transe auto-induite avec Aurélie AVA et Cindy MARIN",
            "Enseignements de Pierre Yonas les 18, 19 et 20 décembre"
        ],
        location: "Saint-Usuge, Bourgogne",
        type: "Chambre duo",
        totalPlaces: MEMOIRE_D_AMES_DUO_AVAILABLE_PLACES,
        availablePlaces: MEMOIRE_D_AMES_DUO_AVAILABLE_PLACES
    },
    {
        id: "memoire-d-ames-individuelle",
        stayId: "memoire-d-ames-decembre-2026",
        eventName: "Mémoire d’Âmes — Saint-Usuge (17–21 décembre 2026)",
        reservationPath: "/reservations/memoire-d-ames",
        title: "Mémoire d’Âmes — Chambre individuelle",
        dateRange: "17 au 21 décembre 2026",
        startDate: "2026-12-17",
        endDate: "2026-12-21",
        bookingDeadline: "2026-12-17T18:00:00+01:00",
        bookingOpensAt: MEMOIRE_D_AMES_BOOKING_OPENS_AT,
        subtitle: "Chambre privative",
        price: MEMOIRE_D_AMES_INDIVIDUAL_EARLY_BIRD_PRICE,
        originalPrice: MEMOIRE_D_AMES_INDIVIDUAL_STANDARD_PRICE,
        depositPerPersonEuros: STRIPE_MEMOIRE_D_AMES_ACOMPTE_PER_PERSON_EUR,
        image: "/sejour-et-activite/mémoire-d-ames/pierre-yonas-et-la-decouverte-de-soi-1200.webp",
        badge: "EARLY BIRD · 1 780 € / personne",
        badgeColor: "bg-primary",
        features: [
            "Séjour complet du 17 au 21 décembre 2026, pension complète incluse",
            "Chambre privative avec lit simple ou double selon la chambre attribuée",
            "Ateliers de présence et de conscience, transe auto-induite avec Aurélie AVA et Cindy MARIN",
            "Enseignements de Pierre Yonas les 18, 19 et 20 décembre"
        ],
        location: "Saint-Usuge, Bourgogne",
        type: "Chambre individuelle",
        totalPlaces: MEMOIRE_D_AMES_INDIVIDUAL_AVAILABLE_PLACES,
        availablePlaces: MEMOIRE_D_AMES_INDIVIDUAL_AVAILABLE_PLACES
    }
];

export function isReservationOpen(pkg: ReservationPackage, now = new Date()) {
    return now.getTime() < new Date(pkg.bookingDeadline).getTime();
}
