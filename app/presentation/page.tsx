import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LinkButton } from "@/components/link-button"
import { HandCoins, Heart, Leaf, ShieldCheck, Star, Users, UserRoundCheck } from "lucide-react"
import { siteConfig } from "@/lib/seo-config"

export const metadata: Metadata = {
    title: "Présentation | Ava Bien-Être",
    description:
        "Découvrez la mission, les valeurs et l'approche d'Ava Bien-Être pour ses retraites bien-être tout inclus en Provence.",
    keywords: [
        "présentation ava bien-être",
        "mission ava bien-être",
        "valeurs retraite bien-être",
        "approche bien-être provence",
    ],
    alternates: {
        canonical: siteConfig.pages.presentation,
    },
    openGraph: {
        title: "Présentation | Ava Bien-Être",
        description:
            "Une présentation de l'univers Ava Bien-Être, de sa mission et de son accompagnement humain en Provence.",
        url: siteConfig.pages.presentation,
        type: "website",
    },
}

export default function PresentationPage() {
    return (
        <div className="py-16">
            <div className="container mx-auto">
                {/* Hero Section */}
                <div className="text-center space-y-6 mb-16">
                    <h1 className="text-base md:text-2xl font-bold [text-shadow:0_4px_14px_rgba(0,0,0,0.35)]">
                        Ava Bien-Être
                    </h1>
                    <p className="text-base text-muted-foreground max-w-3xl mx-auto [text-shadow:0_3px_10px_rgba(0,0,0,0.22)]">
                        Une approche authentique du bien-être au cœur de la Provence
                    </p>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                </div>

                {/* Mission Section */}
                <section className="mb-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <Badge variant="secondary" className="w-fit">
                                <Heart className="h-4 w-4 mr-2" />
                                Notre Mission
                            </Badge>
                            <h2 className="text-base md:text-xl font-bold">Reconnecter avec l&lsquo;essentiel</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Ava Bien-Être est né de la conviction que chacun mérite de prendre du temps pour soi, de se reconnecter
                                à ses valeurs profondes et de retrouver un équilibre authentique entre corps et esprit.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Nous proposons des retraites bien-être qui allient tradition provençale et approches modernes du
                                développement personnel, dans un cadre naturel préservé.
                            </p>
                        </div>
                        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                            <Image
                                src="/ava-seance-magnatisme-pierre-yonas.jpeg"
                                alt="Mission Ava Bien-Être"
                                fill
                                className="object-cover"
                                sizes="(max-width: 949px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="mb-16 bg-muted/30 -mx-4 px-4 py-16 rounded-lg">
                    <div className="text-center mb-12">
                        <h2 className="text-base md:text-xl font-bold mb-4">Nos Valeurs</h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="text-center">
                            <CardContent className="p-6">
                                <div className="flex justify-center mb-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                                        <Heart className="h-6 w-6 text-primary-foreground" />
                                    </div>
                                </div>
                                <h3 className="text-base md:text-xl font-semibold mb-2">Bienveillance</h3>
                                <p className="text-muted-foreground text-sm">
                                    Un accompagnement respectueux et sans jugement, dans l&lsquo;écoute de vos besoins individuels.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardContent className="p-6">
                                <div className="flex justify-center mb-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                                        <Leaf className="h-6 w-6 text-primary-foreground" />
                                    </div>
                                </div>
                                <h3 className="text-base md:text-xl font-semibold mb-2">Authenticité</h3>
                                <p className="text-muted-foreground text-sm">
                                    Des expériences vraies, loin des artifices, en harmonie avec la nature provençale.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardContent className="p-6">
                                <div className="flex justify-center mb-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                                        <Users className="h-6 w-6 text-primary-foreground" />
                                    </div>
                                </div>
                                <h3 className="text-base md:text-xl font-semibold mb-2">Partage</h3>
                                <p className="text-muted-foreground text-sm">
                                    La richesse des échanges humains et la force du collectif dans le respect de chacun.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Approach Section */}
                <section className="mb-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden md:order-2">
                            <Image
                                src="/hebergement-exterieur-3.png"
                                alt="Notre approche"
                                fill
                                className="object-cover"
                                sizes="(max-width: 949px) 100vw, 50vw"
                            />
                        </div>
                        <div className="space-y-6 md:order-1">
                            <Badge variant="secondary" className="w-fit">
                                <Star className="h-4 w-4 mr-2" />
                                Notre Approche
                            </Badge>
                            <h2 className="text-base md:text-xl font-bold">Des ateliers pour vous découvrir sous un jour nouveau : </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Notre approche holistique combine différentes pratiques complémentaires : yoga, méditation, développement personnel, art-thérapie et connexion à la nature.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                                    <p className="text-sm">Programmes personnalisés selon vos besoins</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                                    <p className="text-sm">Encadrement par des professionnels certifiés</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                                    <p className="text-sm">Groupes restreints pour une qualité d’écoute et de partage </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Story Section */}
                <section className="mb-16 bg-muted/30 -mx-4 px-4 py-16 rounded-lg">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <h2 className="text-base md:text-xl font-bold">Notre Histoire</h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
                        <p className="text-muted-foreground leading-relaxed">
                            Ava Bien-Être est né de la rencontre de plusieurs thérapeutes, et passionnées unis par la même vision : offrir un espace de ressourcement authentique et unique en France.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Après des années d‘expérience dans l‘accompagnement individuel, nous avons souhaité créer un lieu unique où chacun peut prendre le temps de se trouver, ou se retrouver en conscience, découvrir et développer de nouvelles capacités, expérimenter et partager, entouré d‘une équipe bienveillante et dans un cadre naturel exceptionnel.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Depuis notre création, nous avons accompagné des dizaines de personnes dans leur quête de bien-être, créant une communauté unie par des valeurs de partage et d‘authenticité.
                        </p>
                    </div>
                </section>

                {/* Commitment Section */}
                <section className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-base md:text-xl font-bold mb-4">Nos Engagements</h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card>
                            <CardContent className="p-6">
                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Leaf className="h-5 w-5" aria-hidden="true" />
                                </div>
                                <h3 className="text-base md:text-xl font-semibold mb-4">Respect de l‘environnement</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Nous limitons notre impact écologique et sensibilisons nos participants à la préservation de la nature.
                                </p>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    La connexion avec la nature est essentielle lors de nos retraites : c’est pourquoi nous avons choisi un cadre naturel. </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                                </div>
                                <h3 className="text-base md:text-xl font-semibold mb-4">Qualité et professionnalisme</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Notre équipe est composée de professionnels qui s‘engagent à vous offrir un accompagnement de qualité dans le respect de l‘éthique de nos métiers respectifs.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <HandCoins className="h-5 w-5" aria-hidden="true" />
                                </div>
                                <h3 className="text-base md:text-xl font-semibold mb-4">Accessibilité</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Nous proposons des formules avec hébergement en pension complète, avec des possibilités de paiement échelonné.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <UserRoundCheck className="h-5 w-5" aria-hidden="true" />
                                </div>
                                <h3 className="text-base md:text-xl font-semibold mb-4">Suivi personnalisé</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Chaque participant bénéficie d‘un accompagnement individualisé avant, pendant et après le séjour pour optimiser les bénéfices de l‘expérience.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* CTA Section */}
                <div className="text-center space-y-6">
                    <h2 className="text-base md:text-xl font-bold">Prêt à nous rejoindre ?</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Découvrez nos prochaines retraites et commencez votre voyage vers un mieux-être authentique et durable.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <LinkButton href="/sejour-a-trans-en-provence" size="lg">Voir nos séjours</LinkButton>
                        <LinkButton href="/contact#contact-direct" variant="outline" size="lg">
                            Nous contacter
                        </LinkButton>
                    </div>
                </div>
            </div>
        </div>
    )
}
