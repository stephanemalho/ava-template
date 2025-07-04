import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const teamMembers = [
    {
        name: "Franck Castellano",
        role: "Prestation de chant en chorale",
        image: "/Franck_Castellano-3.jpg",
        description:
            "Fondateur, chef de choeur de la plus grande chorale d'Europe « Le Choeur du Sud, Chorus United » Frank Castellano fait chanter plus de 7000 choristes répartis entre la  France et la Belgique. Il se produit régulièrement dans le département du VAR, mais également dans plusieurs régions de France avec ses choristes à l'occasion de spectacles, accompagnant de nombreux artistes.Frank a créé « Gospel Variety Show » Il y'a 18 ans : il a débuté l'aventure avec seulement 25 choristes! Au fil des années, le bouche à oreille, le partage d'expériences, les choristes conquis se passent le mot: la petite chorale s'est transformée d'année en année pour devenir le plus grand choeur d'Europe.Son enthousiasme, son humilité, sa bonne humeur, ses valeurs humaines, son perfectionnisme sont la recette de ce succès grandissant qui n'a sans aucun doute pas fini de croître et de conquérir le coeur des gens ainsi que leur procurer des instants de magie inoubliables ! Pour le projet AVA bien être, Frank et ses belles énergies quitteront la scène et les lumières des projecteurs afin de s'engager dans notre très belle cause: il sera présent à nos côtés pour prendre soin de vous et de votre bien être ! Vous pourrez avoir le plaisir de le rencontrer, de chanter en petit comité, accompagné par le chant des oiseaux et le soleil, dans un cadre idyllique et reposant situé en pleine nature. Une invitation à vous laisser aller et guider, à vous dépasser, dans la joie et la bonne humeur, les rires et le partage d'émotions fortes.Nous savons déjà que vous allez adorer Frank Castellano !",
        specialties: ["Coaching", "Méditation", "Gestion du stress"],
    },
    {
        name: "Aurélie",
        role: "Méditation, Communication animale, Danse intuitive",
        image: "/Aurelie.jpg",
        description:
            "Aurélie a pris conscience de ses capacités intuitives en 2020, grâce à la communication animale, la danse intuitive et la découverte de l'art thérapie. Son parcours, ainsi que le développement de ses capacités l'ont menée vers une véritable révélation : la pratique de magnétiseuse / guérisseuse. Elève de Pierre Yonas, guérisseur spirituel et magnétiseur depuis plus de 40 ans, elle porte en elle les valeurs éthiques et déontologiques ainsi que les méthodes transmises par son mentor, pour être au service de ceux qui souhaitent être accompagnés dans leur processus de guérison. Son désir est de faire partager de merveilleux moments aux personnes qui sont appelées par ce séjour, par ces découvertes nouvelles, cette joie de vivre, de vibrer, dans la bonne humeur. Une invitation à se laisser surprendre, se relaxer, à prendre soin de soi, à découvrir, à oser être, tout simplement.",
        specialties: ["Thérapie holistique", "Développement personnel", "Bien-être"],
    },
    {
        name: "Émilie",
        role: "Fabrication de produits naturels, Gestion des émotions",
        image: "/Emilie.jpg",
        description:
            "Émilie est une passionnée par le Monde de l'ésotérisme et du bien être ! Elle présentera un atelier de fabrication de produits naturels, pour que vous puissiez expérimenter la simplicité et le plaisir de fabriquer des produits qui pourront vous être utile au quotidien. Repartez avec les recettes et secrets AVA bien être !",
        specialties: ["Relaxation", "Sophrologie", "Méditation guidée"],
    },
    {
        name: "Lea Gabriele",
        role: "Professeur de Yoga, Pilates, et Sonothérapeute",
        image: "/Lea_Gabriele.jpg",
        description:
            "Un sourire radieux, une énergie débordante : douceur, spontanéité, bienveillance et professionnalisme ! Léa vous enmène dans son univers : voyages sonores, relaxation, méditations, yoga accessible à tous niveaux et tous âges, seront au programme de vos séjours.",
        specialties: ["Nutrition", "Naturopathie", "Hygiène de vie"],
    },
    {
        name: "Sophie T.",
        role: "Maître REIKI - Litothérapeute",
        image: "/Sophie-2.jpg",
        description:
            "Sophie est passionnée par la nature, la spiritualité, et notamment par les soins énergétiques pour soulager les maux des autres. A travers la pratique du REIKI, qu'elle exerce depuis 17 ans, elle a pu acquérir de nombreuses techniques et est certifiée Maître Reiki. Aujourd'hui, son désir est de vous transmettre ses connaissances pour que vous puissiez améliorer votre quotidien, découvrir cette pratique tout en vous amusant. Elle est également créatrice de bijoux en litothérapie et vous fera découvrir les vertus des pierres à travers des ateliers ludiques et enrichissants !",
        specialties: ["Hatha Yoga", "Vinyasa", "Méditation"],
    },
    {
        name: "Christel Arsiel",
        role: "Kinésiologue, Coach de vie",
        image: "/Christel_Arsiel.jpg",
        description:
            "Christelle est coach de vie et kinésiologue : en 2012 la spiritualité est apparue dans sa vie de façon inatendue et a provoqué une remise en question totale ! Depuis cette ouverture, elle accompagne les autres sur le chemin de leur transformation intérieure grâce à des thérapies et ateliers pratiques. Être heureux, se réaliser, avoir confiance en soi… goûter à la douceur de vivre, c'est possible, et ce à tout âge ! Une invitation à se retrouver…",
        specialties: ["Art-thérapie", "Expression créative", "Développement personnel"],
    },
    {
        name: "Patricia",
        role: "Art thérapeute, professeur de danse Africaine",
        image: "/Patricia.jpg",
        description:
            "L'art thérapie, comme son nom l'indique est une démarche d'accompagnement thérapeutique par la création, ou l'expression artistique. Libérez les tensions, focalisez sur l'instant présent… laissez votre corps s'exprimer à travers votre propre rythme : des mouvements lents, ou rapides. Laissez-vous guider par la voix de patricia, par la musique… créez votre bulle de bien être ! ces ateliers sont une invitation au lâcher prise ! L'art thérapie s'adresse à tous sans distinction d'âge et sans prérequis.",
        specialties: ["Massages", "Relaxation", "Énergétique"],
    },
    {
        name: "Pierre Yonas",
        role: "Médium, guérisseur spirituel et magnétiseur",
        image: "/Pierre_Yonas.jpg",
        description:
            "Sous sa peau est ancré le mot « honneur » en Japonais, son regard sincère, intense et profond transperce votre âme et perçois au delà des apparences : voici Pierre Yonas. Médium, guérisseur spirituel et magnétiseur depuis plus de 40 ans, il fait partie de notre équipe AVA BIEN ÊTRE. Auteur du livre le défroisseur d'âmes, conférencier et formateur, c'est un thérapeute qui exerce avec passion, éthique et déontologie, dans le respect d'autrui et la bienveillance. Il accompagne de nombreux consultants en magnétisme, et en médiumnité à Paris ou à Cannes. Ce qu'il souhaite partager avec vous, c'est avant tout son expérience. Sensibiliser les personnes qui s'intéressent à cette spiritualité effervescente, que l'on peut trouver un peu partout sur internet et les réseaux sociaux : quelles sont donc les bonnes pratiques ? Les pratiques dangereuses ? Vers quels thérapeutes dois-je me tourner ? Des conférences et ateliers seront réalisés par ses soins afin de mettre en pratique ces apprentissages, car oui… vous aussi, vous avez des capacités intuitives et médiumniques. Pierre aborde les différentes thématiques de façon rationnelle, avec une approche factuelle et scientifique : sa devise est  » ne pas se prendre au sérieux mais faire les choses sérieusement » : son humour, sa bonne humeur, et son authenticité vous feront passer un merveilleux séjour à ses côtés. Pierre partagera nos séjours, et nous sommes par dessus tout heureux et honorés de l'accueillir dans notre lieu de villégiature : nous tenons du fond du coeur à le remercier pour son engagement, sa présence, son implication, dans cette cause qui est celle de vous apporter du bien-être, de vous sensibiliser et de vous guider, et qui sait ? peut être à vous aider à vous révéler : nous avons hâte de vous le présenter, et nous sommes plus que certains que vous n'êtes pas prêts de l'oublier.",
        specialties: ["Coaching", "Leadership", "Formation"],
    },
    {
        name: "Laila Delmonte",
        role: "Spécialiste de la communication animale",
        image: "/Laila-Delmonte.jpeg",
        description:
            "Laïla Del Monte est une professionnelle et spécialiste de la communication animale : elle a suivi ses études secondaires et universitaires à Paris, jusqu'au niveau d'une Maîtrise en Religions comparées à la Sorbonne. Elle se consacre essentiellement à la communication animale, dont elle est l'une des pionnières en Europe. Elle enseigne son savoir dans plusieurs pays du monde. De nombreux vétérinaires font appel à Laïla Del Monte, mais aussi des éleveurs, des entraîneurs de chevaux, des cavaliers de haut niveau, des comportementalismes, des parcs animaliers, dentistes équins, dresseurs, ostéopathes, éducateurs canin, S.P.A, refuges etc. Laïla sera parmi nous pour animer des conférences, des discussions et ateliers dont nous dévoilerons le contenu et thèmes lors de la présentation des séjours. L'authenticité de la démarche de Laïla Del Monte fait naître le désir d'entreprendre, à notre tour, ce chemin vers l'animal et, par ce biais, vers nous-même. Nous remercions Laïla pour son engagement et sa présence lors de nos retraites, et nous sommes sûrs qu'elle marquera votre esprit comme personne.",
        specialties: ["Coordination", "Accueil", "Suivi personnalisé"],
    },
]

export default function EquipePage() {
    return (
        <div className="py-16">
            <div className="container mx-auto">
                {/* Hero Section */}
                <div className="text-center space-y-6 mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold">Notre Équipe</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Découvrez les professionnels passionnés qui vous accompagneront tout au long de votre séjour bien-être
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid gap-8">
                    {teamMembers.map((member, index) => (
                        <Card key={index} className="overflow-hidden">
                            <CardContent className="p-0">
                                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}>
                                    <div className={`relative h-64 md:min-h-260 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                                        <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                                    </div>
                                    <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}>
                                        <div className="space-y-4">
                                            <div>
                                                <h3 className="text-2xl font-bold">{member.name}</h3>
                                                <p className="text-primary font-medium">{member.role}</p>
                                            </div>
                                            <p className="text-muted-foreground leading-relaxed">{member.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {member.specialties.map((specialty, idx) => (
                                                    <Badge key={idx} variant="secondary">
                                                        {specialty}
                                                    </Badge>
                                                ))}
                                            </div>
                                            <Button variant="outline" size="sm">
                                                En savoir plus
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16 space-y-6">
                    <h2 className="text-3xl font-bold">Prêt à nous rencontrer ?</h2>
                    <p className="text-muted-foreground">
                        Rejoignez-nous pour une expérience transformatrice avec notre équipe bienveillante
                    </p>
                    <Button size="lg">Réserver votre séjour</Button>
                </div>
            </div>
        </div>
    )
}
