export type FounderPreview = {
  name: string
  image: string
  description: string
}

export const founderPreviews: FounderPreview[] = [
  {
    name: "Aurélie",
    image: "/Aurelie-2.jpg",
    description:
      "Spécialiste du mieux-être, Aurélie accompagne avec bienveillance les personnes en recherche d’alignement personnel.",
  },
  {
    name: "Émilie",
    image: "/Emilie-2.jpg",
    description:
      "Émilie transmet des pratiques concrètes pour retrouver calme intérieur, énergie et équilibre au quotidien.",
  },
  {
    name: "Pierre Yonas",
    image: "/Pierre_Yonas-2.jpg",
    description:
      "Pierre Yonas anime des accompagnements autour du développement personnel, de la conscience de soi et de l’intuition.",
  },
]

export const clientInfoCards = [
  {
    title: "Programme complet sur place",
    description:
      "Un séjour structuré avec ateliers bien-être, temps de repos, activités collectives et accompagnement humain.",
    href: "/sejour-a-trans-en-provence",
    cta: "Voir le programme",
  },
  {
    title: "Approche et philosophie AVA",
    description:
      "Découvrez la vision d’Ava Bien-Être, les valeurs du collectif et notre méthode d’accompagnement globale.",
    href: "/presentation",
    cta: "Lire la présentation",
  },
  {
    title: "L’équipe qui vous accompagne",
    description:
      "Consultez les profils des intervenants et des fondateurs qui encadrent les retraites et les ateliers.",
    href: "/notre-equipe",
    cta: "Rencontrer l’équipe",
  },
  {
    title: "Réservation et contact",
    description:
      "Besoin d’un échange avant de réserver ? Contactez-nous ou accédez directement à la page réservations.",
    href: "/contact",
    cta: "Nous contacter",
  },
]