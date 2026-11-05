import {
    STRIPE_MEMOIRE_D_AMES_ACOMPTE_PER_PERSON_EUR
} from "@/lib/reservation-pricing";

// Valeurs à mettre à jour au fil des réservations Mémoire d’Âmes.
export const MEMOIRE_D_AMES_AVAILABLE_PLACES = 1;
export const MEMOIRE_D_AMES_FULL_BOARD_PRICE = 290;
export const MEMOIRE_D_AMES_TOTAL_PLACES = 15;
export const MEMOIRE_D_AMES_STANDARD_PRICE = 1490;
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
        id: "memoire-d-ames-duo",
        stayId: "memoire-d-ames-decembre-2026",
        eventName: "Mémoire d’Âmes — Saint-Usuge (17–21 décembre 2026)",
        reservationPath: "/reservations/memoire-d-ames",
        title: "Mémoire d’Âmes — Séjour",
        dateRange: "17 au 21 décembre 2026",
        startDate: "2026-12-17",
        endDate: "2026-12-21",
        bookingDeadline: "2026-12-17T18:00:00+01:00",
        bookingOpensAt: MEMOIRE_D_AMES_BOOKING_OPENS_AT,
        subtitle: `Tarifs hébergement et repas en pension complète : à partir de ${MEMOIRE_D_AMES_FULL_BOARD_PRICE} € par personne, en supplément du stage (chambre individuelle ou partagée)`,
        price: MEMOIRE_D_AMES_STANDARD_PRICE,
        depositPerPersonEuros: STRIPE_MEMOIRE_D_AMES_ACOMPTE_PER_PERSON_EUR,
        image: "/sejour-et-activite/mémoire-d-ames/affiche-memoire-d-ames-decembre-2026.jpeg",
        badge: `TARIF STANDARD / ${MEMOIRE_D_AMES_STANDARD_PRICE} €`,
        badgeColor: "bg-primary",
        features: [
            `Stage : ${MEMOIRE_D_AMES_STANDARD_PRICE.toLocaleString("fr-FR")} € par personne, hors hébergement et repas`,
            `Tarifs hébergement et repas en pension complète : à partir de ${MEMOIRE_D_AMES_FULL_BOARD_PRICE} € par personne, en supplément du stage (chambre individuelle ou partagée)`,
            "Sur place : espaces de détente, hammam, piscine naturelle et parc de 7 hectares, le tout dans un écrin de nature préservé.",
            "Ateliers de présence et de conscience, transe auto-induite avec Aurélie AVA et Cindy MARIN les 17 et 21 décembre",
            "Enseignements de Pierre Yonas les 18, 19 et 20 décembre"
        ],
        location: "Saint-Usuge, Bourgogne",
        type: "Séjour",
        totalPlaces: MEMOIRE_D_AMES_TOTAL_PLACES,
        availablePlaces: MEMOIRE_D_AMES_AVAILABLE_PLACES
    }
];

export function isReservationOpen(pkg: ReservationPackage, now = new Date()) {
    return now.getTime() < new Date(pkg.bookingDeadline).getTime();
}
