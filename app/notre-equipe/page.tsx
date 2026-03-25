import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/link-button"
import { toAnchorId } from "@/lib/anchor"
import { siteConfig } from "@/lib/seo-config"
import { teamMembers } from "./team-members"

export const metadata: Metadata = {
    title: "Notre equipe | Ava Bien-Etre",
    description:
        "Rencontrez les praticiens et intervenants d'Ava Bien-Etre qui accompagnent les retraites et sejours bien-etre en Provence.",
    keywords: [
        "equipe ava bien-etre",
        "intervenants retraite bien-etre",
        "praticiens bien-etre provence",
        "notre equipe ava",
    ],
    alternates: {
        canonical: siteConfig.pages.team,
    },
    openGraph: {
        title: "Notre equipe | Ava Bien-Etre",
        description:
            "Decouvrez l'equipe AVA Bien-Etre et les expertises qui accompagnent chaque sejour en Provence.",
        url: siteConfig.pages.team,
        type: "website",
    },
}

export default function EquipePage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="relative min-h-screen overflow-hidden bg-linear-to-b from-background to-muted/40 [text-shadow:0_2px_10px_rgba(0,0,0,0.55)]">
                <div className="absolute inset-0">
                    <Image
                        src="/groupe-ava.jpg"
                        alt="Image de toutes l'équipe de AVA Bien-Etre prete à vous accueillir pour vos retraites bien-être en Provence"
                        fill
                        priority
                        aria-hidden="true"
                        className="object-cover"
                        sizes="100vw"
                    />
                </div>

                <div className="absolute inset-x-0 top-0 z-10">
                    <div className="container m-auto px-4 pt-8">
                        <h1 className="text-center text-base md:text-5xl font-bold leading-tight text-white">
                            Rencontrez notre groupe de praticiens et intervenants bien-être
                        </h1>
                    </div>
                </div>

                <div className="relative container mx-auto flex min-h-screen items-center px-4 pt-20">
                    <div className="max-w-3xl mx-auto mt-auto space-y-6 items-center text-center md:rounded-t-lg p-4 md:bg-[#4d6c4d] bg-[#544c41cc]">
                        <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium text-white sm:text-white">
                            Équipe AVA Bien-Être
                        </p>
                        <p className="text-base leading-relaxed text-white/90">
                            Rencontrez l’équipe qui incarne l’âme d’AVA Bien-Être.
                        </p>
                        <p className="text-base leading-relaxed text-white/90">Une équipe réunie non pas pour enseigner… mais pour ouvrir des espaces où quelque chose en vous peut enfin se révéler.</p>
                        <p className="text-base leading-relaxed text-white/90">Notre rôle est de vous accompagner sur ce chemin</p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto">
                    <div className="text-center space-y-6 mb-16">
                        <h2 className="text-base md:text-xl font-bold">Notre Équipe</h2>
                        <p className="text-base text-muted-foreground max-w-3xl mx-auto">
                            Aux côtés de personnalités inspirantes telles que Pierre Yonas et Laila Del Monte, notre équipe vous accompagne tout au long de votre séjour avec des approches complémentaires, au service de votre transformation intérieure.
                        </p>
                    </div>

                    {/* Team Grid */}
                    <div className="grid gap-8">
                        {teamMembers.map((member, index) => (
                            <Card key={member.name} id={toAnchorId(member.name)} className="overflow-hidden scroll-mt-24 max-w-5xl mx-auto">
                                <CardContent className="p-0">
                                    <div className={`grid gap-0 md:grid-cols-2 ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}>
                                        <div className={`p-4 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                                            <div className="relative mx-auto w-full max-w-105 overflow-hidden rounded-lg aspect-3/4">
                                                <Image
                                                    src={member.image || "/placeholder.svg"}
                                                    alt={member.name}
                                                    fill
                                                    className="object-cover object-top"
                                                    sizes="(max-width: 640px) calc(100vw - 3rem), (max-width: 949px) 70vw, 420px"
                                                />
                                            </div>
                                        </div>
                                        <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}>
                                            <div className="space-y-4">
                                                <div>
                                                    <h3 className="text-base md:text-xl font-bold">{member.name}</h3>
                                                    <p className="text-primary font-medium">{member.role}</p>
                                                </div>
                                                <p className="text-muted-foreground leading-relaxed">{member.description}</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {member.specialties.map((specialty, idx) => (
                                                        <Badge key={`${member.name}-${idx}`} variant="secondary">
                                                            {specialty}
                                                        </Badge>
                                                    ))}
                                                </div>
                                                <div className="flex justify-center md:justify-start">
                                                    <Button asChild variant="outline" size="sm">
                                                        <a
                                                            href={`https://www.linkedin.com/in/${toAnchorId(member.name)}`}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            {`Contacter ${member.name}`}
                                                        </a>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="text-center mt-16 space-y-6">
                        <h2 className="text-base md:text-xl font-bold">Prêt à nous rencontrer ?</h2>
                        <p className="text-muted-foreground">
                            Rejoignez-nous pour une expérience transformatrice avec notre équipe bienveillante
                        </p>
                        <LinkButton href="/reservations" size="lg">Réserver votre séjour</LinkButton>
                    </div>
                </div>
            </section>
        </main>
    )
}
