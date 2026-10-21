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
        role: "Co-fondateur d’AVA Bien-Être · Auteur, médium, magnétiseur, conférencier et formateur",
        image: "/Pierre_Yonas-profil.jpg",
        linkedinUrl: "https://www.instagram.com/pierre_yonas",
        description: `
Sur sa peau est ancré le mot « honneur » en japonais. Une valeur qui résume la manière dont Pierre Yonas envisage son parcours, ses engagements et la transmission de son expérience.

Médium depuis l’enfance et magnétiseur depuis près d’un demi-siècle, Pierre Yonas consacre sa vie à l’accompagnement, à la compréhension du monde invisible et à la transmission d’une pratique fondée sur l’éthique, le discernement et le respect de l’humain.

Auteur de plusieurs ouvrages, il a notamment publié Le Soigneur d’âmes aux éditions J’ai lu, ainsi que De la Terre au Ciel – Guérir du passé et révéler sa force pour atteindre la lumière, paru en octobre 2025 chez Mama Éditions. Dans ce récit autobiographique, qui rencontre un succès croissant auprès du public, Pierre revient sur un parcours de vie marqué par l’abandon, les épreuves, la résilience et la capacité à transformer ses blessures en force.

À travers ses conférences, ses formations et ses interventions publiques, Pierre Yonas souhaite démystifier la médiumnité et le magnétisme, les rendre plus accessibles et transmettre des repères clairs face à la multiplication des discours et des pratiques diffusés sur internet et les réseaux sociaux.

Son approche, à la fois rationnelle, structurée et profondément humaine, invite chacun à développer son discernement : mieux comprendre ses ressentis, différencier une pratique sérieuse d’une pratique potentiellement dangereuse et ne jamais confondre accompagnement spirituel ou énergétique avec prise en charge médicale.

Pierre est convaincu que chacun possède une forme de sensibilité et des capacités intuitives qui peuvent être explorées avec sérieux, prudence et responsabilité. Sa devise résume parfaitement son état d’esprit :

« Ne pas se prendre au sérieux, mais faire les choses sérieusement. »

Au sein des séjours AVA Bien-Être, Pierre Yonas anime des ateliers pratiques autour du magnétisme, de la médiumnité et sur la régression de vies antérieures.

Son humour, sa générosité, sa franchise et son authenticité contribuent à faire de chacune de ses interventions une expérience forte, accessible et profondément humaine.
  `,
        specialties: [
            "Médiumnité",
            "Magnétisme",
            "Transmission et pédagogie",
            "Conférences et ateliers"
        ]
    },
    {
        name: "Aurélie",
        role: "Fondatrice d’AVA Bien-Être · Ateliers : méditation, hypnose ericksonienne et transpersonnelle ©, breathwork, cérémonies, ateliers créatifs, chant intuitif",
        image: "/Aurelie.jpg",
        linkedinUrl: "https://www.instagram.com/ava.magnetisme/",
        description: `
Je suis Aurélie AVA, hypnothérapeute, magnétiseuse, guérisseuse et fondatrice d’AVA Bien-Être.

Je vois la vie comme un parcours initiatique, fait de rencontres, d’apprentissages et de transformations. Prendre soin de soi, c’est s’accorder le temps d’écouter ce qui se vit en nous, de mieux comprendre notre histoire et de reconnaître nos besoins.

Au cœur de mon approche se trouve une conviction : la considération que nous nous portons nourrit notre relation à nous-mêmes et aux autres. J’accorde une place essentielle à l’écoute, à la bienveillance et au respect du chemin de chacun.

Certifiée en hypnose ericksonienne et transpersonnelle ©, je vous accompagne dans l’exploration de votre monde intérieur à travers des pratiques en état modifié de conscience. Ces espaces d’introspection invitent à observer vos émotions, vos peurs et vos schémas répétitifs, mais aussi à découvrir vos ressources et à éclairer vos choix lors de périodes de transition personnelle ou professionnelle.

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
        role: "Ateliers de produits naturels, aromathérapie et cuisine bien-être",
        image: "/Emilie-presentation-2026.jpeg",
        linkedinUrl: "",
        description:
            "Émilie vous invite à découvrir le plaisir de créer vos propres produits naturels à travers des ateliers pratiques et sensoriels. Autour de l’aromathérapie et des huiles essentielles, elle partage des savoir-faire et des gestes simples à intégrer dans votre quotidien. Forte de plus de vingt ans d’expérience dans la restauration, elle met également ses talents de cheffe au service de certaines retraites, en préparant des repas et des collations qui allient gourmandise et bien-être. Heureuse de prendre part à l’aventure AVA Bien-Être, elle se réjouit de vous retrouver pour des moments de création, de découverte et de partage.",
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
        specialties: ["Art-thérapie", "Danse africaine", "Expression corporelle", "Lâcher-prise"]
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
];
