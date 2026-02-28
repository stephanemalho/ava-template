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
      "Specialiste du mieux-etre, Aurelie accompagne avec bienveillance les personnes en recherche d'alignement personnel.",
  },
  {
    name: "Émilie",
    image: "/Emilie-2.jpg",
    description:
      "Emilie transmet des pratiques concretes pour retrouver calme interieur, energie et equilibre au quotidien.",
  },
  {
    name: "Pierre Yonas",
    image: "/Pierre_Yonas-2.jpg",
    description:
      "Pierre Yonas anime des accompagnements autour du developpement personnel, de la conscience de soi et de l'intuition.",
  },
]

export const clientInfoCards = [
  {
    title: "Programme complet sur place",
    description:
      "Un sejour structure avec ateliers bien-etre, temps de repos, activites collectives et accompagnement humain.",
    href: "/sejour-a-trans-en-provence",
    cta: "Voir le programme",
  },
  {
    title: "Approche et philosophie AVA",
    description:
      "Decouvrez la vision d'Ava Bien-Etre, les valeurs du collectif et notre methode d'accompagnement globale.",
    href: "/presentation",
    cta: "Lire la presentation",
  },
  {
    title: "L'equipe qui vous accompagne",
    description:
      "Consultez les profils des intervenants et des fondateurs qui encadrent les retraites et les ateliers.",
    href: "/notre-equipe",
    cta: "Rencontrer l'equipe",
  },
  {
    title: "Reservation et contact",
    description:
      "Besoin d'un echange avant de reserver ? Contactez-nous ou accedez directement a la page reservations.",
    href: "/contact",
    cta: "Nous contacter",
  },
]
