"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Calendar,
    MapPin,
    Users,
    Bed,
    Utensils,
    Dumbbell,
    SpadeIcon as Spa,
    Coffee,
    Sparkles,
    UtensilsCrossed,
    CupSoda,
    Zap,
    Waves,
    MoonStar,
    BookOpen,
} from "lucide-react"

export default function SejoursPage() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    useEffect(() => {
        const targetDate = new Date("2025-06-08T00:00:00")

        const timer = setInterval(() => {
            const now = new Date().getTime()
            const distance = targetDate.getTime() - now

            if (distance > 0) {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000),
                })
            }
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="py-16">
            <div className="container mx-auto">
                {/* Hero Section */}
                <div className="text-center space-y-6 mb-16">
                    <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                        <Image src="/sejours-ava.jpg" alt="Séjour à Trans-en-Provence" fill className="object-cover" />
                        <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
                            <div className="text-background text-center space-y-4">
                                <h1 className="text-4xl md:text-6xl font-bold">Séjour à Trans-en-Provence</h1>
                                <div className="flex items-center justify-center space-x-4">
                                    <Calendar className="h-5 w-5" />
                                    <span className="text-lg">du 11 au 17 juillet 2026</span>
                                </div>
                                <div className="flex items-center justify-center space-x-4">
                                    <Calendar className="h-5 w-5" />
                                    <span className="text-lg">et du 22 au 28 Octobre 2026</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Séjour Info */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Voici la liste de vos espaces et activités</h2>
                    <div className="flex items-center justify-center space-x-6 text-muted-foreground mb-8">
                        <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4" />
                            <span>Trans-en-Provence, Var</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4" />
                            <span>Groupe limité</span>
                        </div>
                    </div>
                </div>

                {/* Accommodation Sections */}
                <div className="space-y-16">
                    {/* Hébergement */}
                    <section>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <Badge variant="secondary" className="w-fit">
                                    <Bed className="h-4 w-4 mr-2" />
                                    Hébergement
                                </Badge>
                                <h3 className="text-3xl font-bold">Un cadre exceptionnel</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Profitez d&lsquo;un hébergement confortable dans un environnement naturel préservé. Nos chambres sont
                                    conçues pour favoriser la détente et le ressourcement, avec une décoration soignée et des équipements
                                    modernes.
                                </p>
                                <Button variant="outline">Découvrir nos chambres</Button>
                            </div>
                            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                                <Image src="/hebergement-exterieur-5.png" alt="Hébergement" fill className="object-cover" />
                            </div>
                        </div>
                    </section>

                    {/* Espaces Intérieurs */}
                    <section className="bg-muted/30 -mx-4 px-4 py-16 rounded-lg">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden md:order-2">
                                <Image
                                    src="/interieur-1.jpg"
                                    alt="Espaces intérieurs"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="space-y-6 md:order-1">
                                <Badge variant="secondary" className="w-fit">
                                    <Spa className="h-4 w-4 mr-2" />
                                    Espaces Intérieurs
                                </Badge>
                                <h3 className="text-3xl font-bold">Des espaces de bien-être</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Nos espaces intérieurs sont pensés pour créer une atmosphère propice à la détente et aux échanges.
                                    Salles de méditation, espaces de relaxation et zones de convivialité vous attendent.
                                </p>
                                <Button variant="outline">Visiter les espaces</Button>
                            </div>
                        </div>
                    </section>

                    {/* Espaces Extérieurs */}
                    <section>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <Badge variant="secondary" className="w-fit">
                                    <Dumbbell className="h-4 w-4 mr-2" />
                                    Espaces Extérieurs
                                </Badge>
                                <h3 className="text-3xl font-bold">En harmonie avec la nature</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Jardins méditerranéens, terrasses ombragées et espaces de pratique en plein air. Reconnectez-vous avec
                                    la nature dans un cadre préservé au cœur de la Provence.
                                </p>
                                <Button variant="outline">Explorer les jardins</Button>
                            </div>
                            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                                <Image
                                    src="/exterieur-3.jpg"
                                    alt="Espaces extérieurs"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Cuisine */}
                    <section className="bg-muted/30 -mx-4 px-4 py-16 rounded-lg">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden md:order-2">
                                <Image src="/cuisine-2.jpg" alt="Cuisine" fill className="object-cover" />
                            </div>
                            <div className="space-y-6 md:order-1">
                                <Badge variant="secondary" className="w-fit">
                                    <Utensils className="h-4 w-4 mr-2" />
                                    Cuisine
                                </Badge>
                                <h3 className="text-3xl font-bold">Une cuisine saine et savoureuse</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Découvrez une cuisine équilibrée préparée avec des produits locaux et de saison. Nos repas sont conçus
                                    pour nourrir le corps et l&lsquo;esprit, dans le respect de vos besoins nutritionnels.
                                </p>
                                <Button variant="outline">Découvrir nos menus</Button>
                            </div>
                        </div>
                    </section>

                    {/* Chambres */}
                    <section>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <Badge variant="secondary" className="w-fit">
                                    <Bed className="h-4 w-4 mr-2" />
                                    Chambres
                                </Badge>
                                <h3 className="text-3xl font-bold">Confort et sérénité</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Nos chambres offrent tout le confort nécessaire pour un séjour reposant. Décoration épurée, literie de
                                    qualité et vue sur les jardins pour des nuits réparatrices.
                                </p>
                                <Button variant="outline">Voir les chambres</Button>
                            </div>
                            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                                <Image src="/chambre-1-1.jpg" alt="Chambres" fill className="object-cover" />
                            </div>
                        </div>
                    </section>
                </div>

                {/* Programme Type */}
                <section className="mt-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Journée type durant votre séjour</h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Programme Matinal</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <p className="flex items-start gap-2">
                                        <Coffee className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                                        <span>
                                            <strong>8h-9h30 :</strong> Petit déjeuner équilibré
                                        </span>
                                    </p>
                                    <p className="flex items-start gap-2">
                                        <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                                        <span>
                                            <strong>10h :</strong> Médiumnité avec Pierre Yonas
                                        </span>
                                    </p>
                                    <p className="flex items-start gap-2">
                                        <UtensilsCrossed className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                                        <span>
                                            <strong>12h30 :</strong> déjeuner convivial
                                        </span>
                                    </p>
                                    <p className="flex items-start gap-2">
                                        <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                                        <span>
                                            <strong>14h :</strong> Atelier méditation avec Aurélie
                                        </span>
                                    </p>
                                    <p className="flex items-start gap-2">
                                        <CupSoda className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                                        <span>
                                            <strong>15h :</strong> Collation & pause détente
                                        </span>
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Programme Après-midi</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <p className="flex items-start gap-2">
                                        <Zap className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                                        <span>
                                            <strong>16h :</strong> Atelier magnétisme avec Pierre et Aurélie
                                        </span>
                                    </p>
                                    <p className="flex items-start gap-2">
                                        <Waves className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                                        <span>
                                            <strong>18h :</strong> Détente, sauna, jaccusi, piscine
                                        </span>
                                    </p>
                                    <p className="flex items-start gap-2">
                                        <UtensilsCrossed className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                                        <span>
                                            <strong>19h30h :</strong> Dîner sous les étoiles
                                        </span>
                                    </p>
                                    <p className="flex items-start gap-2">
                                        <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                                        <span>
                                            <strong>21h :</strong> Veillée contée avec Patricia
                                        </span>
                                    </p>
                                    <p className="flex items-start gap-2">
                                        <MoonStar className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                                        <span>
                                            <strong>19h :</strong> Dîner et soirée libre
                                        </span>
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* FAQ */}
                <section className="mt-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">FAQ</h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold mb-2">Puis-je venir seul ?</h3>
                                <p className="text-muted-foreground text-sm">
                                    Bien sûr ! Nos séjours sont parfaits pour les personnes seules souhaitant se ressourcer et rencontrer
                                    d&lsquo;autres participants.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Les débutants sont-ils acceptés ?</h3>
                                <p className="text-muted-foreground text-sm">
                                    Absolument ! Nos activités sont adaptées à tous les niveaux, des débutants aux pratiquants
                                    expérimentés.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold mb-2">Puis-je annuler ma réservation ?</h3>
                                <p className="text-muted-foreground text-sm">
                                    Les conditions d&lsquo;annulation sont détaillées dans nos conditions générales de vente disponibles lors de
                                    la réservation.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Qu&lsquo;est-ce qui est inclus dans le prix ?</h3>
                                <p className="text-muted-foreground text-sm">
                                    Hébergement, tous les repas, toutes les activités et l&lsquo;accompagnement par notre équipe
                                    professionnelle.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Localisation */}
                <section className="mt-16 text-center">
                    <h2 className="text-3xl font-bold mb-4">Localisation du Mas</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
                    <p className="text-muted-foreground max-w-5xl mx-auto">
                        Notre mas provençal, situé à 6min du village de Trans-en-provence et à 12min de la gare TVG Les Arcs / Draguignan, dispose de 7 chambres confortables, lumineuses, équipées de literie haut de gamme, climatisation, et salles de bain partagées ou privatives selon votre réservation.
                        Il dispose également d'une piscine, avec transats dédiés à la détente, salon de jardin, cuisine extérieure pour des déjeuners, et dîners conviviaux.
                        Sur place vous pourrez également retrouver un sauna de 4 places, un jaccusi, et une salle de sport pour vos séances de relaxation.
                    </p>
                </section>
            </div>
        </div>
    )
}
