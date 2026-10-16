export type FounderPreview = {
    name: string;
    image: string;
    description: string;
};

export type ClientInfoCard = {
    title: string;
    description: string;
    href: string;
    cta: string;
    icon: "program" | "philosophy" | "team" | "contact";
};

export const founderPreviews: FounderPreview[] = [
    {
        name: "Aurélie",
        image: "/Aurelie-2.jpg",
        description:
            "Fondatrice d’AVA Bien-Être, hypnothérapeute et magnétiseuse, Aurélie anime des ateliers d’hypnose, de méditation et d’exploration de la conscience. Elle vous accompagne avec écoute et bienveillance pour renouer avec vos ressources, dans le respect de votre rythme."
    },
    {
        name: "Pierre Yonas",
        image: "/Pierre_Yonas-profil-2.jpg",
        description:
            "Médium depuis l’enfance et auteur de plusieurs ouvrages, Pierre pratique le magnétisme depuis près d’un demi-siècle et transmet son expérience à travers des conférences et des ateliers. Son approche allie éthique, discernement et humour pour explorer la médiumnité et le magnétisme avec sérieux et humanité."
    }
];

export const clientInfoCards: ClientInfoCard[] = [
    {
        title: "Programme complet sur place",
        description:
            "Découvrez un séjour structuré avec ateliers bien-être, temps de repos, activités collectives et accompagnement humain.",
        href: "/sejour-a-trans-en-provence",
        cta: "Voir le programme",
        icon: "program"
    },
    {
        title: "Approche et philosophie AVA",
        description:
            "Découvrez la vision d’Ava Bien-Être, les valeurs du collectif et notre méthode d’accompagnement globale.",
        href: "/presentation",
        cta: "Lire la présentation",
        icon: "philosophy"
    },
    {
        title: "L’équipe qui vous accompagne",
        description:
            "Consultez les profils des intervenants et des fondateurs qui encadrent les retraites et les ateliers.",
        href: "/notre-equipe",
        cta: "Rencontrer l’équipe",
        icon: "team"
    },
    {
        title: "Réservation et contact",
        description:
            "Besoin d’un échange avant de réserver ? Contactez-nous ou accédez directement à la page réservations.",
        href: "/contact",
        cta: "Nous écrire",
        icon: "contact"
    }
];
