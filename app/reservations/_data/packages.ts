export type ReservationPackage = {
    id: string;
    title: string;
    dateRange: string;
    startDate: string;
    endDate: string;
    bookingDeadline: string;
    subtitle: string;
    price: number;
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
        title: "Séjour bien-être du 22 au 28 octobre 2026",
        dateRange: "22 au 28 octobre 2026",
        startDate: "2026-10-22",
        endDate: "2026-10-28",
        bookingDeadline: "2026-10-22T00:00:00+02:00",
        subtitle: "(chambre partagée)",
        price: 1800,
        image: "/sejours/espaces-exterieurs/evenement-ava-bien-etre-octobre-2026.jpg",
        badge: "1800 € / personne",
        badgeColor: "bg-primary",
        features: [
            "Séjour en pension complète du jeudi 22 au mercredi 28 octobre 2026",
            "Hébergement, repas, collations, intervenants, animations, ateliers inclus",
            "Option de règlement de votre séjour en plusieurs fois disponible sur demande (Paypal / Virement bancaire)"
        ],
        location: "Trans-en-Provence",
        type: "Chambre Partagée",
        totalPlaces: 11,
        availablePlaces: 6
    }
];

export function isReservationOpen(pkg: ReservationPackage, now = new Date()) {
    return now.getTime() < new Date(pkg.bookingDeadline).getTime();
}
