import type { Metadata } from "next"
import Image from "next/image"
import { Instagram } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/link-button"
import { toAnchorId } from "@/lib/anchor"
import { siteConfig } from "@/lib/seo-config"
import { teamMembers } from "./team-members"

export const metadata: Metadata = {
    title: "Notre équipe | Ava Bien-Être",
    description:
        "Rencontrez les praticiens et intervenants d'Ava Bien-Être qui accompagnent les retraites et séjours bien-être.",
    keywords: [
        "équipe ava bien-être",
        "intervenants retraite bien-être",
        "praticiens bien-être",
        "notre équipe ava",
    ],
    alternates: {
        canonical: siteConfig.pages.team,
    },
    openGraph: {
        title: "Notre équipe | Ava Bien-Être",
        description:
            "Découvrez l'équipe AVA Bien-Être et les expertises qui accompagnent chaque séjour.",
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
                        alt="Image de toute l'équipe d'AVA Bien-Être prête à vous accueillir pour vos retraites bien-être"
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
                            Rencontrez l’équipe AVA Bien-Être
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

            <section id="notre-equipe" className="scroll-mt-28 py-16 px-4">
                <div className="container mx-auto">
                    <div className="text-center space-y-4 mb-16">
                        <h2 className="text-base md:text-xl font-bold">Les visages d’AVA Bien-Être</h2>
                        <p className="text-base text-muted-foreground max-w-3xl mx-auto">
                            Chez AVA Bien-Être, nous considérons que chaque membre, même présent pour une seule journée, fait pleinement partie de l’équipe. La transformation se nourrit de la contribution de chacun : chaque personne apporte sa pierre à l’édifice.
                        </p>
                        <p className="text-base text-muted-foreground max-w-3xl mx-auto">
                            Les interventions et la durée de présence de chaque membre de l’équipe varient selon les séjours. Consultez le programme de chaque séjour pour connaître les intervenants présents et les ateliers proposés. Par leur présence, leur sensibilité et leur savoir-faire, ils incarnent notre philosophie et contribuent à faire de chaque séjour une expérience humaine partagée.
                        </p>
                    </div>
                    <div className="grid gap-8">
                        {teamMembers.map((member, index) => (
                            <Card key={member.name} id={toAnchorId(member.name)} className="w-full overflow-hidden scroll-mt-24 max-w-5xl mx-auto border-l-4 border-l-[#4d6c4d]">
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
                                                    <h3 className="text-xl md:text-2xl font-bold">{member.name}</h3>
                                                    <p className="text-primary font-medium">{member.role}</p>
                                                    <p className="mt-2 text-sm font-medium">Présence sur les séminaires : {member.presenceDays} jour{member.presenceDays > 1 ? "s" : ""}.</p>
                                                </div>
                                                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{member.description.trim()}</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {member.specialties.map((specialty, idx) => (
                                                        <Badge key={`${member.name}-${idx}`} variant="secondary" className="max-w-full whitespace-normal">
                                                            {specialty}
                                                        </Badge>
                                                    ))}
                                                </div>
                                                {member.linkedinUrl ? (
                                                    <div className="flex justify-center md:justify-start">
                                                        <Button asChild variant="outline" size="sm">
                                                            <a
                                                                href={member.linkedinUrl}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                className="inline-flex items-center"
                                                            >
                                                                <Instagram className="mr-2 h-4 w-4" />
                                                                {`Contacter ${member.name}`}
                                                            </a>
                                                        </Button>
                                                    </div>
                                                ) : null}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="text-center mt-16 space-y-6">
                        <h2 className="text-base md:text-xl font-bold">Souhaitez-vous nous rencontrer ?</h2>
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
