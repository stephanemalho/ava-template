import Image from "next/image"
import { MapPin, Users, Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { LinkButton } from "@/components/link-button"
import { reservationPackages } from "./_data/packages"
import { ReservationPackageControls } from "./_components/reservation-package-controls"
import { ReservationCartPill } from "./_components/reservation-cart-pill"
import { STRIPE_ACOMPTE_PER_PERSON_EUR } from "@/lib/reservation-pricing"

export default function ReservationsPage() {
    return (
        <main className="py-16">
            <div className="container mx-auto">
                <header className="mb-16 space-y-6 text-center">
                    <h1 className="text-base font-bold md:text-5xl">Réservez votre séjour à Trans-en-Provence</h1>
                    <div className="mx-auto h-1 w-24 rounded-full bg-primary" />
                    <p className="mx-auto max-w-3xl text-base text-muted-foreground">
                        Choisissez la formule qui vous correspond le mieux pour votre retraite bien-être
                    </p>
                </header>

                <section className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    {reservationPackages.map((pkg) => (
                        <Card key={pkg.id} className="overflow-hidden">
                            <CardContent className="p-0">
                                <div className="grid grid-cols-1 gap-0">
                                    <div className="p-4 pb-0">
                                        <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-md">
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
                        <div className="grid gap-6 text-sm text-muted-foreground md:grid-cols-3">
                            <article className="space-y-2">
                                <h3 className="text-base md:text-xl font-semibold text-foreground">Réservation</h3>
                                <p>Les places sont limitées pour garantir une expérience personnalisée</p>
                            </article>
                            <article className="space-y-2">
                                <h3 className="text-base md:text-xl font-semibold text-foreground">Paiement</h3>
                                <p>
                                    Le paiement Stripe correspond à un acompte de {STRIPE_ACOMPTE_PER_PERSON_EUR}.00 € par personne.
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
