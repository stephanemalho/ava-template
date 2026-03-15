import type { Metadata } from "next"
import Image from "next/image"
import { BriefcaseBusiness, CalendarDays, MapPin, Users, Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { LinkButton } from "@/components/link-button"
import { reservationPackages } from "./_data/packages"
import { ReservationPackageControls } from "./_components/reservation-package-controls"
import { ReservationCartPill } from "./_components/reservation-cart-pill"
import { STRIPE_ACOMPTE_PER_PERSON_EUR } from "@/lib/reservation-pricing"
import { generateStayEventsSchema, generateStayOffersSchema } from "@/lib/schema-generators"
import { siteConfig } from "@/lib/seo-config"

const enterpriseOffer = {
    title: "Offre Entreprise sur mesure",
    subtitle: "Cohésion d'équipe, QVCT et séminaire bien-être à la carte",
    image: "/sejours-ava.jpg",
    badge: "ENTREPRISES",
    location: "Trans-en-Provence (ou lieu à définir)",
    type: "Format B2B",
    features: [
        "Programme construit selon vos objectifs RH : cohésion, prévention du stress, reconnexion d'équipe",
        "Dates, durée, intervenants et activités personnalisables selon vos contraintes opérationnelles",
        "Accompagnement sur mesure pour PME, ETI et grandes organisations",
        "Prix sur devis selon effectif, format et niveau de personnalisation",
    ],
}

export const metadata: Metadata = {
    title: "Reservations | Ava Bien-Etre",
    description:
        "Reserve ton sejour bien-etre AVA en Provence. Acompte de 500 EUR, disponibilites en temps reel et offre entreprise sur devis.",
    keywords: [
        "reservation retraite bien-etre",
        "prix sejour bien-etre provence",
        "acompte 500 euros retraite",
        "offre entreprise qvct",
    ],
    alternates: {
        canonical: siteConfig.pages.reservations,
    },
}

type ReservationsPageProps = {
    searchParams?: Promise<{
        payment?: string
        session_id?: string
    }>
}

export default async function ReservationsPage({ searchParams }: ReservationsPageProps) {
    const resolvedSearchParams = searchParams ? await searchParams : undefined
    const stayOffersSchema = generateStayOffersSchema()
    const stayEventsSchema = generateStayEventsSchema()
    const paymentState = resolvedSearchParams?.payment
    const sessionId = resolvedSearchParams?.session_id

    const paymentMessage =
        paymentState === "success"
            ? {
                title: "Acompte recu",
                description: sessionId
                    ? `Votre acompte Stripe a ete confirme. Reference de session: ${sessionId}. L'equipe AVA reprendra contact avec vous pour la suite.`
                    : "Votre acompte Stripe a ete confirme. L'equipe AVA reprendra contact avec vous pour la suite.",
                className: "border-green-200 bg-green-50 text-green-900",
            }
            : paymentState === "cancelled"
                ? {
                    title: "Paiement annule",
                    description: "Le paiement de l'acompte a ete annule. Vous pouvez reprendre votre reservation quand vous le souhaitez.",
                    className: "border-amber-200 bg-amber-50 text-amber-900",
                }
                : null

    return (
        <main className="py-16">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(stayOffersSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(stayEventsSchema) }}
            />
            <div className="container mx-auto">
                {paymentMessage ? (
                    <section className={`mb-10 rounded-lg border p-4 text-sm ${paymentMessage.className}`}>
                        <p className="font-semibold">{paymentMessage.title}</p>
                        <p className="mt-1">{paymentMessage.description}</p>
                    </section>
                ) : null}
                <header className="mb-16 space-y-6 text-center">
                    <h1 className="text-base font-bold md:text-5xl">Réservez votre séjour à Trans-en-Provence</h1>
                    <div className="mx-auto h-1 w-24 rounded-full bg-primary" />
                    <p className="mx-auto max-w-3xl text-base text-muted-foreground">
                        Choisissez la formule qui vous correspond le mieux pour votre retraite bien-être
                    </p>
                    <p className="mx-auto w-fit md:rounded-full rounded-xl border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                        Acompte à la réservation : 500€ par personne. Le solde est à régler plus tard.
                    </p>
                </header>

                <section className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    {reservationPackages.map((pkg) => (
                        <Card key={pkg.id} className="overflow-hidden">
                            <CardContent className="p-0">
                                <div className="grid grid-cols-1 gap-0">
                                    <div className="p-4 pb-0">
                                        <div className="relative mx-auto aspect-3/4 w-full max-w-md overflow-hidden rounded-md">
                                            <Image
                                                src={pkg.image || "/placeholder.svg"}
                                                alt={pkg.title}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 1024px) 100vw, 420px"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-between p-6 md:p-8">
                                        <div className="space-y-6">
                                            <Badge className={`${pkg.badgeColor} w-fit px-3 py-1 font-bold text-white`}>{pkg.badge}</Badge>
                                            <div>
                                                <h2 className="mb-2 text-base md:text-xl font-bold text-primary">{pkg.title}</h2>
                                                <p className="text-base text-muted-foreground">{pkg.subtitle}</p>
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
                                            <p className="text-sm text-primary font-medium">
                                                Disponibilité : {pkg.availablePlaces} {pkg.availablePlaces > 1 ? "places" : "place"} disponible{pkg.availablePlaces > 1 ? "s" : ""} sur {pkg.totalPlaces}
                                            </p>

                                            <Separator />

                                            <div className="space-y-3">
                                                {pkg.features.map((feature, idx) => (
                                                    <div key={`${pkg.id}-${idx}`} className="flex items-start space-x-2">
                                                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                                        <p className="text-sm text-muted-foreground">{feature}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <ReservationPackageControls pkg={pkg} />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </section>
                <div className="mt-12 flex justify-center">
                    <ReservationCartPill />
                </div>
                <section className="mt-16 rounded-lg bg-muted/30 p-8">
                    <div className="space-y-4 text-center">
                        <h2 className="text-base md:text-xl font-bold">Informations importantes</h2>
                        <div className="mx-auto h-1 w-24 rounded-full bg-primary" />
                        <div className="grid gap-6 text-sm text-muted-foreground md:grid-cols-3">
                            <article className="space-y-2">
                                <h3 className="text-base md:text-xl font-semibold text-foreground">Réservation</h3>
                                <p>Les places sont limitées pour garantir une expérience personnalisée</p>
                            </article>
                            <article className="space-y-2">
                                <h3 className="text-base md:text-xl font-semibold text-foreground">Paiement</h3>
                                <p>
                                    Le paiement Stripe correspond uniquement à un acompte de {STRIPE_ACOMPTE_PER_PERSON_EUR}.00 € par personne.
                                    Le solde du séjour sera réglé selon les modalités convenues.
                                </p>
                            </article>
                            <article className="space-y-2">
                                <h3 className="text-base md:text-xl font-semibold text-foreground">Annulation</h3>
                                <p>Conditions d&lsquo;annulation détaillées dans nos CGV</p>
                            </article>
                        </div>
                    </div>
                </section>
                {/* AJouter les section B to B ici */}
                <section id="offre-btob" className="mt-16 scroll-mt-24 space-y-6">
                    <div className="text-center space-y-3">
                        <Badge className="bg-primary px-3 py-1 font-bold text-white">{enterpriseOffer.badge}</Badge>
                        <h2 className="text-base md:text-xl font-bold">Offre dédiée aux entreprises</h2>
                        <div className="mx-auto h-1 w-24 rounded-full bg-primary" />
                        <p className="text-muted-foreground max-w-3xl mx-auto">
                            Un format professionnel pensé pour la cohésion d&apos;équipe, avec un accompagnement entièrement sur mesure.
                        </p>
                    </div>
                    <Card className="overflow-hidden border-primary/30">
                        <CardContent className="p-0">
                            <div className="grid grid-cols-1 gap-0 lg:grid-cols-[360px_1fr]">
                                <div className="p-4 pb-0 lg:pb-4">
                                    <div className="relative mx-auto aspect-3/4 w-full max-w-md overflow-hidden rounded-md">
                                        <Image
                                            src={enterpriseOffer.image}
                                            alt={enterpriseOffer.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 100vw, 360px"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col justify-between p-6 md:p-8">
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="mb-2 text-base md:text-xl font-bold text-primary">{enterpriseOffer.title}</h3>
                                            <p className="text-base text-muted-foreground">{enterpriseOffer.subtitle}</p>
                                        </div>

                                        <div className="flex flex-col gap-2 text-sm text-muted-foreground md:flex-row md:items-center md:space-x-4">
                                            <div className="flex items-center space-x-1">
                                                <BriefcaseBusiness className="h-4 w-4" />
                                                <span>{enterpriseOffer.type}</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <MapPin className="h-4 w-4" />
                                                <span>{enterpriseOffer.location}</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <CalendarDays className="h-4 w-4" />
                                                <span>Dates à la demande</span>
                                            </div>
                                        </div>

                                        <Separator />

                                        <div className="space-y-3">
                                            {enterpriseOffer.features.map((feature) => (
                                                <div key={feature} className="flex items-start space-x-2">
                                                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                                    <p className="text-sm text-muted-foreground">{feature}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-8 space-y-3">
                                        <p className="text-2xl font-bold text-primary">Prix sur devis</p>
                                        <p className="text-xs text-muted-foreground">
                                            Réservation possible après validation du devis et des modalités de votre organisation.
                                        </p>
                                        <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                                            <Button asChild size="lg">
                                                <a href="https://forms.gle/gFuHdXa9z6anSEJR8" target="_blank" rel="noreferrer">
                                                    Demander un devis
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>
                <section className="mt-16 space-y-6 text-center">
                    <h2 className="text-base md:text-xl font-bold">Des questions ?</h2>
                    <p className="text-muted-foreground">Notre équipe est là pour vous accompagner dans votre choix</p>
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <LinkButton href="/contact#contact-direct" variant="outline" size="lg">
                            Nous contacter
                        </LinkButton>
                    </div>
                </section>
            </div>
        </main>
    )
}
