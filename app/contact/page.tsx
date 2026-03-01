import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/link-button"
import { BriefcaseBusiness, CalendarDays, Chrome, Clock, Mail, MapPin, PawPrint, Sparkles, Users } from "lucide-react"

const contactItems = [
    {
        icon: MapPin,
        title: "Adresse",
        type: "address",
        content: "Trans-en-Provence",
        secondaryLine: "Var (83), France",
    },
    {
        icon: Mail,
        title: "Email",
        type: "email",
        content: "contact@auxbienetre.fr",
        secondaryLine: "Réponse en général sous 24 à 48h.",
    },
    {
        icon: Clock,
        title: "Disponibilités",
        type: "text",
        content: "Du lundi au samedi",
        secondaryLine: "9h00 - 18h00",
    },
    {
        icon: Chrome,
        title: "Réseaux",
        type: "link",
        content: "Découvrir notre Instagram",
        href: "https://www.instagram.com",
        secondaryLine: "Actualités des séjours et coulisses de l'équipe.",
    },
] as const

const renderContactContent = (item: (typeof contactItems)[number]) => {
    switch (item.type) {
        case "email":
            return (
                <div>
                    <h2 className="text-base md:text-xl font-semibold">{item.title}</h2>
                    <a href={`mailto:${item.content}`} className="text-primary hover:underline text-sm">
                        {item.content}
                    </a>
                    <p className="text-muted-foreground text-sm">{item.secondaryLine}</p>
                </div>
            )
        case "address":
            return (
                <div>
                    <h2 className="text-base md:text-xl font-semibold">{item.title}</h2>
                    <address className="not-italic text-muted-foreground text-sm">
                        {item.content}
                        <br />
                        {item.secondaryLine}
                    </address>
                </div>
            )
        case "link":
            return (
                <div>
                    <h2 className="text-base md:text-xl font-semibold">{item.title}</h2>
                    <a href={item.href} target="_blank" rel="noreferrer" className="text-primary hover:underline text-sm">
                        {item.content}
                    </a>
                    <p className="text-muted-foreground text-sm">{item.secondaryLine}</p>
                </div>
            )
        default:
            return (
                <div>
                    <h2 className="text-base md:text-xl font-semibold">{item.title}</h2>
                    <p className="text-muted-foreground text-sm">{item.content}</p>
                    <p className="text-muted-foreground text-sm">{item.secondaryLine}</p>
                </div>
            )
    }
}

export default function ContactPage() {
    return (
        <div className="py-16">
            <div className="container mx-auto">
                <section className="text-center space-y-4 mb-12">
                    <h1 className="text-base md:text-2xl font-bold">Contact</h1>
                    <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                        Une question sur les séjours, les ateliers ou l&apos;organisation ? Écrivez-nous, nous vous aidons à
                        choisir la formule la plus adaptée à votre besoin.
                    </p>
                </section>

                <div className="grid md:grid-cols-2 gap-8">
                    <Card id="contact-direct" className="bg-muted/40 scroll-mt-24">
                        <CardContent className="p-6 space-y-5">
                            {contactItems.map((item) => {
                                const IconComponent = item.icon
                                return (
                                    <div key={item.title} className="flex flex-col items-center gap-2 text-center md:flex-row md:items-start md:gap-3 md:text-left">
                                        <IconComponent className="h-5 w-5 text-primary mt-1" aria-hidden="true" />
                                        {renderContactContent(item)}
                                    </div>
                                )
                            })}
                        </CardContent>
                    </Card>

                    <Card className="bg-muted/40">
                        <CardContent className="p-6 space-y-5">
                            <h2 className="text-base md:text-xl font-semibold">Préparez votre séjour bien-être</h2>
                            <p className="text-muted-foreground">
                                Indiquez vos disponibilités et vos attentes (repos, ateliers, accompagnement) pour que
                                nous puissions vous orienter vers la session la plus pertinente.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <PawPrint className="h-4 w-4 text-primary" aria-hidden="true" />
                                    <span className="text-sm text-muted-foreground">
                                        Échange personnalisé avant réservation
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <PawPrint className="h-4 w-4 text-primary" aria-hidden="true" />
                                    <span className="text-sm text-muted-foreground">
                                        Conseils sur le format de séjour le plus adapté
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <PawPrint className="h-4 w-4 text-primary" aria-hidden="true" />
                                    <span className="text-sm text-muted-foreground">
                                        Informations pratiques envoyées par email
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-between">
                                <div className="mt-12 relative h-28 w-28">
                                    <Image
                                        src="/contact/adobe-express-qr-code.png"
                                        alt="QR code de contact Ava Bien-Être"
                                        fill
                                        className="object-contain"
                                        sizes="112px"
                                    />
                                </div>
                                <div className="flex flex-col items-center gap-2 md:items-start">
                                    <LinkButton href="/reservations">Revoir les séjours disponibles</LinkButton>
                                    <Button asChild variant="outline">
                                        <a href="https://forms.gle/gFuHdXa9z6anSEJR8" target="_blank" rel="noreferrer">
                                            Posez nous toutes vos questions
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <section className="mt-14 bg-muted/30 rounded-xl p-6 md:p-8 space-y-8">
                    <div className="text-center space-y-3">
                        <p className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-sm font-medium">
                            <BriefcaseBusiness className="h-4 w-4 text-primary" aria-hidden="true" />
                            Offres Entreprises
                        </p>
                        <h2 className="text-base md:text-xl font-bold">Séjours bien-être B2B pour vos équipes</h2>
                        <p className="text-muted-foreground max-w-3xl mx-auto">
                            Proposez une expérience utile à la cohésion, à la prévention du stress et à la qualité de
                            vie au travail. Nous concevons des retraites sur mesure, avec dates à la demande et
                            sélection de lieux premium selon vos objectifs.
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                        <Card>
                            <CardContent className="p-5 space-y-3">
                                <CalendarDays className="h-5 w-5 text-primary" aria-hidden="true" />
                                <h3 className="text-base md:text-xl font-semibold">Dates flexibles</h3>
                                <p className="text-sm text-muted-foreground">
                                    Planning adapté à vos contraintes RH et opérationnelles, en semaine ou sur
                                    week-end prolongé.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-5 space-y-3">
                                <Sparkles className="h-5 w-5 text-primary" aria-hidden="true" />
                                <h3 className="text-base md:text-xl font-semibold">Lieux privilégiés</h3>
                                <p className="text-sm text-muted-foreground">
                                    Domaines sélectionnés pour leur confort, confidentialité et qualité
                                    d&apos;infrastructure.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-5 space-y-3">
                                <Users className="h-5 w-5 text-primary" aria-hidden="true" />
                                <h3 className="text-base md:text-xl font-semibold">Tarifs groupe entreprise</h3>
                                <p className="text-sm text-muted-foreground">
                                    Budget optimisé selon l&apos;effectif, le format choisi et le niveau de personnalisation
                                    attendu.
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="flex flex-col items-center gap-4 rounded-lg border bg-background p-5 text-center md:flex-row md:items-center md:justify-between md:text-left">
                        <div className="space-y-1">
                            <p className="font-semibold">Pack entreprise personnalisable</p>
                            <p className="text-sm text-muted-foreground">
                                Team building, séminaire bien-être, programme QVCT, ateliers cohésion et récupération.
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-2 sm:flex-row">
                            <Button asChild>
                                <a href="https://forms.gle/gFuHdXa9z6anSEJR8" target="_blank" rel="noreferrer">
                                    Demander un devis
                                </a>
                            </Button>
                            <LinkButton href="/reservations" variant="outline">Consulter les formats</LinkButton>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
