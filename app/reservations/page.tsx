import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MapPin, Users, Check } from "lucide-react"

const packages = [
    {
        id: "shared-room",
        title: "Séjour du 11 au 17 Juillet 2026 (chambre partagée)",
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
        title: "Séjour du 8 au 13 Juin 2025",
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
    }
]

export default function ReservationsPage() {
    return (
        <div className="py-16">
            <div className="container mx-auto">
                {/* Header */}
                <div className="text-center space-y-6 mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold">Réservez votre séjour à Trans-en-Provence</h1>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Choisissez la formule qui vous correspond le mieux pour votre retraite bien-être
                    </p>
                </div>

                {/* Packages */}
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    {packages.map((pkg) => (
                        <Card key={pkg.id} className="overflow-hidden">
                            <CardContent className="p-0">
                                <div className="grid grid-cols-1 gap-0">
                                    <div className="p-4 pb-0">
                                        <div className="relative mx-auto w-full max-w-md aspect-[3/4] overflow-hidden rounded-md">
                                            <Image src={pkg.image || "/placeholder.svg"} alt={pkg.title} fill className="object-cover" />
                                        </div>
                                    </div>

                                    <div className="p-6 md:p-8 flex flex-col justify-between">
                                        <div className="space-y-6">
                                            <Badge className={`${pkg.badgeColor} text-white font-bold px-3 py-1 w-fit`}>
                                                {pkg.badge}
                                            </Badge>
                                            <div>
                                                <h3 className="text-2xl font-bold text-primary mb-2">{pkg.title}</h3>
                                                <p className="text-lg text-muted-foreground">{pkg.subtitle}</p>
                                            </div>

                                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                                <div className="flex items-center space-x-1">
                                                    <Users className="h-4 w-4" />
                                                    <span>{pkg.type}</span>
                                                </div>
                                                <div className="flex items-center space-x-1">
                                                    <MapPin className="h-4 w-4" />
                                                    <span>{pkg.location}</span>
                                                </div>
                                            </div>

                                            <Separator />

                                            <div className="space-y-3">
                                                {pkg.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-start space-x-2">
                                                        <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                                                        <p className="text-sm text-muted-foreground">{feature}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-4">
                                            <div className="flex items-center justify-between">
                                                <div className="text-3xl font-bold">{pkg.price}.00 €</div>
                                                <div className="flex space-x-2">
                                                    <Button variant="outline" size="sm">
                                                        ♡
                                                    </Button>
                                                    <Button
                                                        size="lg"
                                                        disabled={pkg.badge === "COMPLET"}
                                                        className={pkg.badge === "COMPLET" ? "opacity-50 cursor-not-allowed" : ""}
                                                    >
                                                        {pkg.badge === "COMPLET" ? "Complet" : "Réserver votre séjour"}
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Info Section */}
                <div className="mt-16 bg-muted/30 rounded-lg p-8">
                    <div className="text-center space-y-4">
                        <h2 className="text-2xl font-bold">Informations importantes</h2>
                        <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground">
                            <div className="space-y-2">
                                <h3 className="font-semibold text-foreground">Réservation</h3>
                                <p>Les places sont limitées pour garantir une expérience personnalisée</p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-semibold text-foreground">Paiement</h3>
                                <p>Possibilité de règlement en plusieurs fois sur demande</p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-semibold text-foreground">Annulation</h3>
                                <p>Conditions d&lsquo;annulation détaillées dans nos CGV</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact CTA */}
                <div className="mt-16 text-center space-y-6">
                    <h2 className="text-3xl font-bold">Des questions ?</h2>
                    <p className="text-muted-foreground">Notre équipe est là pour vous accompagner dans votre choix</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="outline" size="lg">
                            Nous contacter
                        </Button>
                        <Button size="lg">FAQ</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
