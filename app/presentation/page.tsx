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
        "Découvrez la mission, les valeurs et l'approche d'Ava Bien-Être pour ses retraites bien-être tout inclus.",
    keywords: [
        "présentation ava bien-être",
        "mission ava bien-être",
        "valeurs retraite bien-être",
        "approche bien-être",
    ],
    alternates: {
        canonical: siteConfig.pages.presentation,
    },
    openGraph: {
        title: "Présentation | Ava Bien-Être",
        description:
            "Une présentation de l'univers Ava Bien-Être, de sa mission et de son accompagnement humain.",
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
                        Une approche authentique du bien-être
                    </p>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                </div>

                {/* Mission Section */}
                <section className="mb-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <Badge variant="secondary" className="w-fit">
                                <Heart className="h-4 w-4 mr-2" />
                                Notre mission
                            </Badge>
                            <h2 className="text-base md:text-xl font-bold">Créer des expériences qui transforment</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                AVA Bien-Être est né d’une envie : créer des espaces hors du quotidien, où l’on peut ralentir, vivre, ressentir et explorer autrement.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Nous imaginons des séjours immersifs autour de la connaissance de soi, de la conscience et du vivant, en réunissant des intervenants aux parcours et aux approches singulières.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Chaque retraite possède son propre univers, mais toutes partagent la même intention : <strong>vous permettre de vivre une expérience profonde, dans un cadre privilégié, et d’en repartir avec quelque chose qui continue de résonner bien après le séjour.</strong>
                            </p>
                        </div>
                        <div className="relative aspect-[3/2] rounded-lg overflow-hidden">
                            <Image
                                src="/ava-notre-mission-groupe.jpeg"
                                alt="Groupe réuni dans un jardin lors d’un séjour AVA Bien-Être"
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
                        <div className="relative aspect-[3/2] rounded-lg overflow-hidden md:order-2">
                            <Image
                                src="/ava-notre-approche-groupe.jpeg"
                                alt="Groupe réuni au bord de la piscine lors d’un séjour AVA Bien-Être"
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
                            <h2 className="text-base md:text-xl font-bold">Explorer votre monde intérieur, à votre rythme</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                À travers l’hypnose, le magnétisme, la médiumnité et le développement personnel, nous vous invitons à faire une pause, à écouter vos ressentis et à explorer votre monde intérieur. Chaque atelier ouvre un espace pour mieux vous connaître, porter un regard nouveau sur votre expérience et découvrir ce qui fait sens pour vous.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                                    <p className="text-sm">Des expériences guidées pour explorer, ressentir et prendre du recul</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                                    <p className="text-sm">Un accompagnement attentif, dans le respect de votre rythme et de vos limites</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                                    <p className="text-sm">Des groupes à taille humaine pour favoriser l’écoute, la confiance et le partage</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Story Section */}
                <section className="mb-16 bg-muted/30 -mx-4 px-4 py-16 rounded-lg">
                    <div className="max-w-6xl mx-auto space-y-8">
                        <div className="text-center">
                            <h2 className="text-base md:text-xl font-bold">Notre histoire</h2>
                            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
                        </div>
                        <div className="grid gap-10 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] items-center">
                            <Image
                                src="/ava-notre-histoire-echange.jpeg"
                                alt="Deux personnes échangent dans un jardin, vêtues de t-shirts AVA Bien-Être"
                                width={1320}
                                height={2218}
                                className="w-full h-auto rounded-lg"
                                sizes="(max-width: 767px) 100vw, 40vw"
                            />
                            <div className="space-y-6">
                                <p className="text-muted-foreground leading-relaxed">
                                    AVA Bien-Être est né de l’élan d’Aurélie AVA, thérapeute et fondatrice du projet, avec l’envie de créer des séjours qui sortent des cadres habituels et laissent une vraie place à l’expérience, à l’humain et à l’ouverture de conscience.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Pierre Yonas rejoint très rapidement le projet AVA aux côtés d’Aurélie. Au-delà de leurs approches thérapeutiques respectives, c’est une relation fondée sur des valeurs communes qui se construit : la loyauté, la confiance et une même exigence dans l’accompagnement.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Très vite, quelque chose de particulier se crée lorsqu’ils accompagnent ensemble. Leurs personnalités et leurs approches complémentaires donnent naissance à une véritable alchimie qui se révèle pleinement au cours des séjours.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    AVA grandit alors autour de cette dynamique, en invitant également des intervenants choisis pour leur sensibilité, leur expérience et la singularité de ce qu’ils peuvent transmettre.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Chaque séjour possède son propre univers, mais conserve cette même essence : créer les conditions d’une rencontre, d’une expérience et parfois d’un véritable tournant intérieur.
                                </p>
                            </div>
                        </div>
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
                    <h2 className="text-base md:text-xl font-bold">Souhaitez-vous nous rejoindre ?</h2>
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
