export type ReservationPackage = {
  id: string
  title: string
  dateRange: string
  startDate: string
  endDate: string
  subtitle: string
  price: number
  image: string
  badge: string
  badgeColor: string
  features: string[]
  location: string
  type: string
  totalPlaces: number
  availablePlaces: number
}

export const reservationPackages: ReservationPackage[] = [
  {
    id: "shared-room",
    title: "Séjour du 11 au 17 Juillet 2026",
    dateRange: "11 au 17 juillet 2026",
    startDate: "2026-07-11",
    endDate: "2026-07-17",
    subtitle: "(chambre partagée)",
    price: 1800,
    image: "/sejour-11-17-Juillet.jpeg",
    badge: "1800 € / personne",
    badgeColor: "bg-primary",
    features: [
      "Séjour en pension complète du samedi 11 au 17 juillet 2026",
      "Hébergement, repas, collations, intervenants, animations, ateliers inclus",
      "Option de règlement de votre séjour en plusieurs fois disponible sur demande (Paypal / Alma)",
    ],
    location: "Trans-en-Provence",
    type: "Chambre Partagée",
    totalPlaces: 11,
    availablePlaces: 1,
  },
  {
    id: "shared-room-2",
    title: "Séjour du 22 au 28 Octobre 2026",
    dateRange: "22 au 28 octobre 2026",
    startDate: "2026-10-22",
    endDate: "2026-10-28",
    subtitle: "(chambre partagée)",
    price: 1800,
    image: "/sejour-22-28-Octobre.jpeg",
    badge: "1800 € / personne",
    badgeColor: "bg-primary",
    features: [
      "Séjour en pension complète du Jeudi 22 au Mercredi 28 Octobre 2026",
      "Hébergement, repas, collations, intervenants, animations, ateliers inclus",
      "Option de règlement de votre séjour en plusieurs fois disponible sur demande (Paypal / Alma)",
    ],
    location: "Trans-en-Provence",
    type: "Chambre Partagée",
    totalPlaces: 11,
    availablePlaces: 4,
  },
]
