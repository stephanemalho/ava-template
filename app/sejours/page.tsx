"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Bed, Utensils, Dumbbell, SpadeIcon as Spa } from "lucide-react"

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
                        <Image src="/hebergement-exterieur.png" alt="Séjour à Trans-en-Provence" fill className="object-cover" />
                        <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
                            <div className="text-background text-center space-y-4">
                                <h1 className="text-4xl md:text-6xl font-bold">Séjour à Trans-en-Provence</h1>
                                <div className="flex items-center justify-center space-x-4">
                                    <Calendar className="h-5 w-5" />
                                    <span className="text-lg">du 8 au 13 juin 2025</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Countdown Timer */}
                <div className="text-center mb-16">
                    <h2 className="text-2xl font-bold mb-6">Compte à rebours</h2>
                    <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
                        {[
                            { label: "Jours", value: timeLeft.days },
                            { label: "Heures", value: timeLeft.hours },
                            { label: "Minutes", value: timeLeft.minutes },
                            { label: "Secondes", value: timeLeft.seconds },
                        ].map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-primary text-primary-foreground rounded-lg p-4 text-2xl font-bold">
                                    {item.value.toString().padStart(2, "0")}
                                </div>
                                <p className="text-sm text-muted-foreground mt-2">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Séjour Info */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Séjour à Trans-en-Provence</h2>
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
                                    <p>
                                        <strong>8h-9h :</strong> Petit déjeuner équilibré
                                    </p>
                                    <p>
                                        <strong>9h :</strong> Séance de Yoga matinal
                                    </p>
                                    <p>
                                        <strong>10h :</strong> Atelier méditation ou Écofitness
                                    </p>
                                    <p>
                                        <strong>11h :</strong> Atelier créatif ou Sortie
                                    </p>
                                    <p>
                                        <strong>12h :</strong> Collation & pause détente
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
                                    <p>
                                        <strong>13h :</strong> Déjeuner convivial
                                    </p>
                                    <p>
                                        <strong>14h :</strong> Temps libre ou sieste
                                    </p>
                                    <p>
                                        <strong>15h :</strong> Yoga ou activité
                                    </p>
                                    <p>
                                        <strong>16h30 :</strong> Goûter sain et détente
                                    </p>
                                    <p>
                                        <strong>19h :</strong> Dîner et soirée libre
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
                    <p className="text-muted-foreground max-w-3xl mx-auto">
                        Notre mas se situe au cœur de la Provence, à Trans-en-Provence dans le Var. Un cadre exceptionnel entre
                        nature préservée et authenticité provençale, facilement accessible depuis les principales villes de la
                        région.
                    </p>
                </section>
            </div>
        </div>
    )
}
