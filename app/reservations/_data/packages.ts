export type ReservationPackage = {
  id: string
  title: string
  dateRange: string
  subtitle: string
  price: number
  image: string
  badge: string
  badgeColor: string
  features: string[]
  location: string
  type: string
}

export const reservationPackages: ReservationPackage[] = [
  {
    id: "shared-room",
    title: "Séjour du 11 au 17 Juillet 2026 (chambre partagée)",
    dateRange: "11 au 17 juillet 2026",
    subtitle: "(chambre partagée)",
    price: 1200,
    image: "/sejour-11-17-Juillet.jpeg",
    badge: "CHAMBRE PARTAGÉE",
    badgeColor: "bg-primary",
    features: [
      "Séjour en pension complète du dimanche 8 Juin 2025 au Vendredi 13 Juin 2025",
      "Hébergement, repas, collations, intervenants, animations, ateliers inclus",
      "Option de règlement de votre séjour en plusieurs fois disponible sur demande (Paypal / Alma)",
    ],
    location: "Trans-en-Provence",
    type: "Chambre Partagée",
  },
  {
    id: "single-room",
    title: "Séjour du 22 au 28 Octobre 2026",
    dateRange: "22 au 28 octobre 2026",
    subtitle: "(chambre solo)",
    price: 1500,
    image: "/sejour-22-28-Octobre.jpeg",
    badge: "CHAMBRE PRIVÉE",
    badgeColor: "bg-primary",
    features: [
      "Séjour en pension complète du dimanche 8 Juin 2025 au Vendredi 13 Juin 2025",
      "Hébergement, repas, collations, intervenants, animations, ateliers inclus",
      "Option de règlement de votre séjour en plusieurs fois disponible sur demande (Paypal / Alma)",
    ],
    location: "Trans-en-Provence",
    type: "Chambre Solo",
  },
]
