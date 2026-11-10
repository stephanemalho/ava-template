import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Check, MapPin, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ReservationCartPill } from "../_components/reservation-cart-pill";
import { ReservationPackageControls } from "../_components/reservation-package-controls";
import { isReservationOpen, reservationPackages } from "../_data/packages";
import { siteConfig } from "@/lib/seo-config";

const pagePath = "/reservations/les-lignes-du-destin";
const eventImageMeta = "/sejour-et-activite/les-lignes-du-destin/affiche-les-lignes-du-destin.jpeg";
const packages = reservationPackages.filter(
    (pkg) => pkg.stayId === "les-lignes-du-destin-juin-2027"
);
const depositPerPersonEuros = packages[0]?.depositPerPersonEuros;

const offerCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": `${siteConfig.siteUrl}${pagePath}#offer-catalog`,
    name: "Réservations Les lignes du destin — 24 au 28 juin 2027",
    url: `${siteConfig.siteUrl}${pagePath}`,
    itemListElement: packages.map((pkg, position) => ({
        "@type": "Offer",
        position,
        "@id": `${siteConfig.siteUrl}${pagePath}#offer-${pkg.id}`,
        name: pkg.title,
        description: `${pkg.features[0]} — Saint-Usuge (71).`,
        url: `${siteConfig.siteUrl}${pagePath}#sejour-${pkg.id}`,
        price: pkg.price,
        priceCurrency: "EUR",
        availability: pkg.availablePlaces > 0 ? "https://schema.org/InStock" : "https://schema.org/SoldOut",
        inventoryLevel: { "@type": "QuantitativeValue", value: pkg.availablePlaces },
        validFrom: pkg.bookingOpensAt,
        priceValidUntil: pkg.bookingDeadline,
        itemOffered: {
            "@type": "Service",
            name: `Séjour Les lignes du destin — ${pkg.type}`,
        },
    })),
};

export const metadata: Metadata = {
    title: "Réserver Les lignes du destin à Saint-Usuge | AVA Bien-Être",
    description:
        "Réservez le séjour Les lignes du destin, du 24 au 28 juin 2027 à Saint-Usuge : stage Early Bird à 1 390 € par personne, hors hébergement et repas. Pension complète à partir de 290 € en supplément.",
    alternates: { canonical: pagePath },
    openGraph: {
        title: "Réserver Les lignes du destin à Saint-Usuge | AVA Bien-Être",
        description:
            "Réservez Les lignes du destin à Saint-Usuge : stage Early Bird à 1 390 € hors hébergement et repas, pension complète à partir de 290 € en supplément, 16 participants en deux groupes de huit.",
        url: pagePath,
        type: "website",
        images: [{ url: eventImageMeta, width: 1199, height: 1312, alt: "Les lignes du destin — Pierre Yonas" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Réserver Les lignes du destin à Saint-Usuge | AVA Bien-Être",
        description: "Les lignes du destin à Saint-Usuge : stage Early Bird à 1 390 € par personne, hors hébergement et repas. Pension complète à partir de 290 € en supplément.",
        images: [eventImageMeta],
    },
};

export default function LesLignesDuDestinReservationsPage() {
    return (
        <main className="py-16">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema) }} />
            <div className="container mx-auto max-w-6xl">
                <header className="mb-16 space-y-6 text-center">
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary">AVA Bien-être · 24 — 28 juin 2027</p>
                    <h1 className="text-3xl font-bold md:text-5xl">Réserver Les lignes du destin</h1>
                    <div className="mx-auto h-1 w-24 rounded-full bg-primary" />
                    <p className="mx-auto max-w-3xl text-base text-muted-foreground">
                        À Saint-Usuge, en Bourgogne. À l’Écolieu Ô Saveur de l’Instant, avec Pierre Yonas et Christian Vidal. Stage Early Bird : 1 390 € par personne, hors hébergement et repas (tarif standard : 1 490 €). Tarifs hébergement et repas en pension complète : à partir de 290 € par personne, en supplément du stage (chambre individuelle ou partagée).
                    </p>
                    <p className="mx-auto w-fit rounded-xl border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary md:rounded-full">
                        Arrhes à la réservation : {depositPerPersonEuros} € par personne. Le solde est à régler ultérieurement.
                    </p>
                </header>

                <section className="mx-auto grid max-w-2xl gap-8">
                    {packages.map((pkg) => (
                        <Card key={pkg.id} id={`sejour-${pkg.id}`} className="scroll-mt-24 overflow-hidden border-primary/20">
                            <CardContent className="p-0">
                                <div className="p-4 pb-0">
                                    <figure>
                                        <div className="relative mx-auto aspect-square overflow-hidden rounded-md bg-muted/30">
                                            <Image src={pkg.image} alt={pkg.title} fill className="object-contain" sizes="(max-width: 1024px) 100vw, 520px" />
                                        </div>
                                    </figure>
                                </div>
                                <div className="flex h-full flex-col p-6 md:p-8">
                                    <div className="space-y-6">
                                        <Badge className={`${pkg.badgeColor} w-fit flex-wrap gap-2 px-3 py-1 font-bold text-white`}>{pkg.badge}</Badge>
                                        <div>
                                            <h2 className="mb-2 text-2xl font-bold text-primary">LES LIGNES DU DESTIN</h2>
                                            <p className="text-muted-foreground">{pkg.subtitle}</p>
                                        </div>
                                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                            <span className="inline-flex items-center gap-1"><CalendarDays className="h-4 w-4" />{pkg.dateRange}</span>
                                            <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" />{pkg.location}</span>
                                            <span className="inline-flex items-center gap-1"><Users className="h-4 w-4" />{pkg.availablePlaces} place{pkg.availablePlaces > 1 ? "s" : ""} disponible{pkg.availablePlaces > 1 ? "s" : ""} sur {pkg.totalPlaces}</span>
                                        </div>
                                        <Separator />
                                        <div className="space-y-3">
                                            {pkg.features.map((feature) => <p key={feature} className="flex gap-2 text-sm text-muted-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{feature}</p>)}
                                        </div>
                                    </div>
                                    {isReservationOpen(pkg) ? <ReservationPackageControls pkg={pkg} /> : <p className="mt-8 text-sm font-medium text-muted-foreground">Les réservations pour cette formule sont closes.</p>}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </section>

                <section className="mt-12 rounded-2xl bg-muted/30 p-6 text-center md:p-10">
                    <h2 className="text-2xl font-bold">Déroulé de votre séjour</h2>
                    <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">Accueil le 24 juin à partir de 18h, conférence de Christian Vidal, ateliers de présence et de conscience, transe auto-induite avec Aurélie AVA et Cindy MARIN, initiations au magnétisme, à la médiumnité, au tarot et à la chiromancie en deux groupes de huit. Clôture et départ le 28 juin à 12h.</p>
                </section>

                <div className="mt-10 flex justify-center"><ReservationCartPill /></div>
                <div className="mt-8 text-center"><Button asChild variant="outline"><Link href="/les-lignes-du-destin">Découvrir le programme complet du séjour</Link></Button></div>
            </div>
        </main>
    );
}
