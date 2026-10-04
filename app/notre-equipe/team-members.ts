export type TeamMember = {
    name: string;
    role: string;
    image: string;
    description: string;
    specialties: string[];
    linkedinUrl: string;
};

export const teamMembers: TeamMember[] = [
    {
        name: "Pierre Yonas",
        role: "Médium, magnétiseur, auteur, conférencier et formateur",
        image: "/Pierre_Yonas-profil.jpg",
        linkedinUrl: "https://www.instagram.com/pierre_yonas_/",
        description: `
Médium, magnétiseur, auteur, conférencier et formateur, Pierre Yonas partage depuis une quarantaine d’années son expérience de la médiumnité et du magnétisme. Sa démarche met l’accent sur la transmission, le discernement et la prévention des pratiques abusives.

Auteur de plusieurs ouvrages, dont *Le Défroisseur d’âmes* et *De la Terre au Ciel*, paru en octobre 2025, il aborde dans ses écrits son parcours et les questions liées à la spiritualité et à la connaissance de soi.

Aux côtés d’Aurélie AVA, Pierre participe à l’aventure AVA Bien-Être et à la création de séjours immersifs. Leurs approches complémentaires ouvrent un espace d’échange et d’exploration, dans le respect du rythme et de la sensibilité de chacun.

Au sein des séjours AVA Bien-Être, il partage son expérience à travers des échanges, des conférences et des ateliers consacrés à la connaissance de soi, à l’intuition et à la médiumnité.

À travers ses interventions, il invite les participants à explorer leurs ressentis et à développer leur discernement. Son humour et sa présence contribuent à la dimension humaine et conviviale des rencontres proposées par AVA.
  `,
        specialties: [
            "Médiumnité",
            "Magnétisme",
            "Guérison spirituelle",
            "Transmission et pédagogie",
            "Conférences et ateliers"
        ]
    },
    {
        name: "Aurélie",
        role: "Ateliers : méditation, hypnose, breathwork, cérémonies, ateliers créatifs, chant intuitif",
        image: "/Aurelie.jpg",
        linkedinUrl: "https://www.instagram.com/ava.magnetisme/",
        description: `
Je suis Aurélie AVA, hypnothérapeute, magnétiseuse, guérisseuse et fondatrice d’AVA Bien-Être.

Je vois la vie comme un parcours initiatique, fait de rencontres, d’apprentissages et de transformations. Prendre soin de soi, c’est s’accorder le temps d’écouter ce qui se vit en nous, de mieux comprendre notre histoire et de reconnaître nos besoins.

Au cœur de mon approche se trouve une conviction : la considération que nous nous portons nourrit notre relation à nous-mêmes et aux autres. J’accorde une place essentielle à l’écoute, à la bienveillance et au respect du chemin de chacun.

Certifiée en hypnose ericksonienne transpersonnelle, je vous accompagne dans l’exploration de votre monde intérieur à travers des pratiques en état modifié de conscience. Ces espaces d’introspection invitent à observer vos émotions, vos peurs et vos schémas répétitifs, mais aussi à découvrir vos ressources et à éclairer vos choix lors de périodes de transition personnelle ou professionnelle.

Lors des séjours AVA Bien-Être, je propose des ateliers d’hypnose, de méditation, de magnétisme et d’exploration de la conscience. J’anime également des cérémonies inspirées des traditions auxquelles j’ai été initiée, pour partager des moments de présence, de rencontre et de célébration.

Chaque atelier collectif tient compte du rythme et des limites des participants. Des temps d’échange avant et après les pratiques permettent de poser vos questions, de partager vos ressentis et de mettre des mots sur votre expérience.

Je propose aussi des consultations de magnétisme, à distance ou en présentiel, et anime des ateliers aux côtés de Pierre Yonas, avec une attention particulière à l’éthique et au discernement.

Mon intention est de vous offrir un cadre attentif pour explorer vos capacités, renouer avec vos ressources et avancer vers une relation plus apaisée avec vous-même. Je serai heureuse de vous accueillir dans cette aventure humaine.
  `,
        specialties: [
            "Thérapie holistique",
            "Développement personnel",
            "Bien-être"
        ]
    },
    {
        name: "Émilie",
        role: "Healthy food, aromathérapie, ateliers de fabrication de produits naturels.",
        image: "/Emilie-presentation-2026.jpeg",
        linkedinUrl: "",
        description:
            "Émilie est la cheffe cuisinière d’AVA Bien-Être. Après plus de vingt ans d’expérience dans le domaine de la restauration, elle a choisi de donner un nouveau sens à son parcours en se consacrant pleinement au bien-être. Lors des retraites, elle prépare avec passion des repas et collations healthy, pensés pour nourrir le corps tout en éveillant les sens, et vous faire découvrir le bien-être jusque dans l’assiette. En dehors de la cuisine, Émilie anime des ateliers d’aromathérapie et de fabrication de produits naturels à base d’huiles essentielles, afin de transmettre des pratiques simples, utiles et applicables au quotidien. Elle est heureuse de partager cette aventure humaine aux côtés d’Aurélie et de Pierre, et se réjouit de vous rencontrer lors de nos séjours.",
        specialties: [
            "Cuisine bien-être",
            "Nutrition saine",
            "Aromathérapie",
            "Fabrication de produits naturels",
            "Gestion des émotions par l’alimentation"
        ]
    },
    // {
    //     name: "Léa Gabriele",
    //     role: "Professeure de yoga, pilates et sonothérapeute",
    //     image: "/Lea_Gabriele.jpg",
    //     description:
    //         "Un sourire radieux et une énergie débordante caractérisent Léa, dont la pratique allie douceur, spontanéité, bienveillance et professionnalisme. Professeure de yoga et de pilates depuis plus de dix ans, elle pratique également la sonothérapie. Lors des séjours AVA Bien-Être, Léa vous emmène dans son univers à travers des voyages sonores, des séances de relaxation, des méditations guidées ainsi que des pratiques de yoga accessibles à tous les niveaux et à tous les âges. Elle vous accompagne avec joie sur le chemin de la détente, du partage et du mieux-être, dans une approche à la fois corporelle, sensorielle et profondément humaine.",
    //     specialties: [
    //         "Yoga",
    //         "Pilates",
    //         "Sonothérapie",
    //         "Relaxation",
    //         "Méditation guidée",
    //     ],
    // },
    // {
    //     name: "Sophie T.",
    //     role: "Maître Reiki et praticienne en lithothérapie",
    //     image: "/Sophie-2.jpg",
    //     description:
    //         "Passionnée par la nature, la spiritualité et les soins énergétiques, Sophie accompagne depuis plus de dix-sept ans les personnes en quête de mieux-être à travers la pratique du Reiki. Certifiée Maître Reiki, elle a acquis au fil des années de nombreuses techniques qu’elle souhaite aujourd’hui transmettre avec pédagogie et bienveillance. Lors des séjours AVA Bien-Être, Sophie vous propose de découvrir le Reiki à différents niveaux, en commençant par l’auto-soin, afin de vous permettre d’améliorer votre quotidien tout en explorant cette pratique de manière ludique et accessible. Créatrice de bijoux en lithothérapie, elle animera également des ateliers autour des vertus des pierres, pour partager son savoir-faire et vous guider vers une meilleure compréhension des énergies qui nous entourent.",
    //     specialties: [
    //         "Reiki",
    //         "Soins énergétiques",
    //         "Auto-soin",
    //         "Lithothérapie",
    //         "Transmission et initiation",
    //     ],
    // },
    {
        name: "Bérengère",
        role: "Accompagnement bien-être et coaching de vie",
        image: "/staff/Berengere-Ava.jpg",
        linkedinUrl: "https://www.instagram.com/innerharmonie_/",
        description:
            "Bérengère accompagne les personnes vers un mieux-être global à travers une approche douce, intuitive et profondément humaine. Elle aide à relâcher les tensions, à se recentrer dans le corps et à apaiser les émotions, afin de retrouver clarté intérieure, confiance et énergie plus légère. Son accompagnement s’adresse tout particulièrement aux personnes traversant des périodes de doute, de transition ou de remise en question, auxquelles elle offre un espace sécurisant pour se reconnecter à soi. Heureuse de faire partie de l’aventure AVA Bien-Être, Bérengère met tout son engagement et sa sensibilité au service de votre transformation, pour vous permettre de repartir plus aligné(e), apaisé(e) et recentré(e).",
        specialties: [
            "Coaching de vie",
            "Accompagnement émotionnel",
            "Bien-être corporel",
            "Recentrage et relaxation",
            "Transitions de vie"
        ]
    },
    {
        name: "Patricia",
        role: "Art thérapeute, professeur de danse Africaine",
        image: "/Patricia.jpg",
        linkedinUrl: "",
        description:
            "L'art thérapie, comme son nom l'indique est une démarche d'accompagnement thérapeutique par la création, ou l'expression artistique. Libérez les tensions, focalisez sur l'instant présent… laissez votre corps s'exprimer à travers votre propre rythme : des mouvements lents, ou rapides. Laissez-vous guider par la voix de patricia, par la musique… créez votre bulle de bien être ! ces ateliers sont une invitation au lâcher prise ! L'art thérapie s'adresse à tous sans distinction d'âge et sans prérequis.",
        specialties: ["Massages", "Relaxation", "Énergétique"]
    },
    {
        name: "Johan",
        role: "Praticien en massages bien-être et musculaires",
        image: "/staff/JOHAN-Massage-Ava.jpg",
        linkedinUrl: "https://www.instagram.com/lesmassagesdejohan/",
        description:
            "Formé au massage relaxant au sein d’une école reconnue par la Fédération Française du Massage Traditionnel de Relaxation, Johan pratique différentes techniques telles que le massage ayurvédique, polynésien, amma, californien et drainant. Souhaitant approfondir son approche, il s’est également spécialisé en massage musculaire sportif, en se formant auprès de la championne de France de massage 2022, afin de proposer des soins d’une grande qualité. Attentif aux besoins de chacun, Johan adapte ses techniques et ses gestes aux attentes spécifiques de chaque personne pour offrir un moment de détente sur mesure. Heureux de faire partie de l’aventure AVA Bien-Être, il vous accompagnera avec professionnalisme et bienveillance pour vous faire vivre des instants de relaxation profonde et de lâcher-prise.",
        specialties: [
            "Massage bien-être",
            "Massage musculaire sportif",
            "Massage ayurvédique",
            "Massage relaxant",
            "Détente et récupération"
        ]
    },
    {
        name: "Laila Delmonte",
        role: "Spécialiste de la communication animale",
        image: "/Laila-Delmonte.jpeg",
        linkedinUrl: "https://www.instagram.com/lailadelmonte/",
        description:
            "Laïla Del Monte est une professionnelle et spécialiste de la communication animale : elle a suivi ses études secondaires et universitaires à Paris, jusqu'au niveau d'une Maîtrise en Religions comparées à la Sorbonne. Elle se consacre essentiellement à la communication animale, dont elle est l'une des pionnières en Europe. Elle enseigne son savoir dans plusieurs pays du monde. De nombreux vétérinaires font appel à Laïla Del Monte, mais aussi des éleveurs, des entraîneurs de chevaux, des cavaliers de haut niveau, des comportementalismes, des parcs animaliers, dentistes équins, dresseurs, ostéopathes, éducateurs canin, S.P.A, refuges etc. Laïla sera parmi nous pour animer des conférences, des discussions et ateliers dont nous dévoilerons le contenu et thèmes lors de la présentation des séjours. L'authenticité de la démarche de Laïla Del Monte fait naître le désir d'entreprendre, à notre tour, ce chemin vers l'animal et, par ce biais, vers nous-même. Nous remercions Laïla pour son engagement et sa présence lors de nos retraites, et nous sommes sûrs qu'elle marquera votre esprit comme personne.",
        specialties: ["Coordination", "Accueil", "Suivi personnalisé"]
    }
];
