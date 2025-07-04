import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const teamMembers = [
    {
        name: "Florent Castellano",
        role: "Coach & Formateur",
        image: "/placeholder.svg?height=400&width=300",
        description:
            "Florent accompagne les personnes dans leur développement personnel depuis plus de 10 ans. Spécialisé dans la gestion du stress et l'équilibre vie professionnelle/personnelle.",
        specialties: ["Coaching", "Méditation", "Gestion du stress"],
    },
    {
        name: "Aurélie",
        role: "Thérapeute Holistique",
        image: "/placeholder.svg?height=400&width=300",
        description:
            "Aurélie pratique différentes approches thérapeutiques pour accompagner chacun dans sa quête de bien-être. Elle privilégie une approche douce et bienveillante.",
        specialties: ["Thérapie holistique", "Développement personnel", "Bien-être"],
    },
    {
        name: "Emily",
        role: "Praticienne en Relaxation",
        image: "/placeholder.svg?height=400&width=300",
        description:
            "Emily guide les participants vers un état de relaxation profonde à travers diverses techniques de détente et de lâcher-prise.",
        specialties: ["Relaxation", "Sophrologie", "Méditation guidée"],
    },
    {
        name: "Lise Sabatier",
        role: "Nutritionniste & Naturopathe",
        image: "/placeholder.svg?height=400&width=300",
        description:
            "Lise accompagne les participants dans leur relation à l'alimentation et propose des conseils personnalisés pour une meilleure hygiène de vie.",
        specialties: ["Nutrition", "Naturopathie", "Hygiène de vie"],
    },
    {
        name: "Marjorie",
        role: "Professeure de Yoga",
        image: "/placeholder.svg?height=400&width=300",
        description:
            "Marjorie enseigne le yoga avec passion et guide les participants vers une pratique respectueuse du corps et de l'esprit.",
        specialties: ["Hatha Yoga", "Vinyasa", "Méditation"],
    },
    {
        name: "Christel Ariza",
        role: "Art-thérapeute",
        image: "/placeholder.svg?height=400&width=300",
        description:
            "Christel utilise l'art comme moyen d'expression et de thérapie, permettant à chacun d'explorer sa créativité et ses émotions.",
        specialties: ["Art-thérapie", "Expression créative", "Développement personnel"],
    },
    {
        name: "Audrey",
        role: "Praticienne en Bien-être",
        image: "/placeholder.svg?height=400&width=300",
        description:
            "Audrey propose différentes approches de bien-être pour accompagner chacun dans sa démarche de ressourcement et de détente.",
        specialties: ["Massages", "Relaxation", "Énergétique"],
    },
    {
        name: "Pierre Yonas",
        role: "Coach & Mentor",
        image: "/placeholder.svg?height=400&width=300",
        description:
            "Pierre Yonas accompagne formateurs et coachs dans leur développement professionnel. Il anime des sessions de développement personnel et de leadership.",
        specialties: ["Coaching", "Leadership", "Formation"],
    },
    {
        name: "Julie Fontaine",
        role: "Coordinatrice Bien-être",
        image: "/placeholder.svg?height=400&width=300",
        description:
            "Julie coordonne l'ensemble des activités bien-être et s'assure que chaque participant vive une expérience enrichissante et transformatrice.",
        specialties: ["Coordination", "Accueil", "Suivi personnalisé"],
    },
]

export default function EquipePage() {
    return (
        <div className="py-16">
            <div className="container">
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
                                    <div className={`relative h-64 md:h-auto ${index % 2 === 1 ? "md:order-2" : ""}`}>
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
