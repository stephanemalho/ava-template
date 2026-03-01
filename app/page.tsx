import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { YoutubeClickPlayer } from "@/components/youtube-click-player"
import { clientInfoCards, founderPreviews } from "./home-content"
import { toAnchorId } from "@/lib/anchor"

export const metadata: Metadata = {
  title: "Ava Bien-Etre | Retraites bien-etre en Provence",
  description:
    "Decouvrez Ava Bien-Etre a Trans-en-Provence: retraites tout inclus, equipe pluridisciplinaire, sejours ressourcants et accompagnement personnalise.",
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden group">
        {/* Image de fond */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Aurelie-Pierre.jpg"
            alt="Equipe Ava Bien-Etre"
            fill
            className="object-cover md:hidden"
            priority
          />
          <Image
            src="/les-fondateurs-2.jpg"
            alt="Fondatrices et fondateur Ava Bien-Etre"
            fill
            className="object-cover hidden md:block"
            priority
          />
        </div>

        {/* Contenu centré */}
        <div className="absolute text-white z-10 bottom-0 text-center space-y-2 px-4 max-w-2xl mx-auto md:bg-[#4D6C4D] bg-[#544c41cc]  md:rounded-t-lg py-8">
          <h1 className="text-xl md:text-2xl font-bold drop-shadow-[0_3px_14px_rgba(0,0,0,0.35)]">
            Bienvenue chez
            Ava bien-être
          </h1>
          <p className="text-base md:mb-6  md:text-md opacity-90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            Ava Bien-Être organise des séjours retraite bien-être tout inclus en Provence, vos journées seront dédiées à la reconnexion à soi, au lâcher-prise et à l&apos;équilibre corps-esprit, dans un cadre naturel propice au ressourcement.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/80">
            <Link href="/sejour-a-trans-en-provence">Découvrez nos retraites</Link>
          </Button>
        </div>
      </section>
      {/* Ressourcement Section */}
      <section className="py-16 bg-muted/30 my-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <YoutubeClickPlayer
              className="relative w-full aspect-video overflow-hidden"
              title="Teaser officiel AVA BIEN-ÊTRE Pierre Yonas"
              youtubeId="QnyHeO6l4F4"
              thumbnailSrc="/minia-youtube.png"
              thumbnailAlt="Lancer la vidéo teaser AVA Bien-Être"
            />

            <div className="space-y-6">
              <Badge variant="outline" className="w-fit">
                Lâcher-prise - reconnexion à soi
              </Badge>
              <h2 className="text-base md:text-xl font-bold">
                Besoin de te ressourcer ?
              </h2>
              <p>
                Retrouve sur cette page toutes les informations et les liens vers les pages qui te permettront de
                mieux connaître nos séjours, notre équipe et les raisons pour lesquelles
                tu devrais nous rejoindre pour une expérience de reconnexion à soi
                inoubliable&nbsp;!
              </p>
              <div className="space-y-2 mt-6">
                <h3 className="font-semibold">
                  Nos séjours tout inclus proposent une expérience de ressourcement
                  complète, alliant&nbsp;:
                </h3>
                <p className="text-sm text-muted-foreground">
                  Hébergement, repas, ateliers et accompagnement humain dans un cadre
                  naturel propice à la reconnexion à soi.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">
                  Toute notre énergie est consacrée à faire de ton séjour une expérience
                  extraordinaire, relaxante et dépaysante&nbsp;!
                </h3>

                <p className="text-sm text-muted-foreground">
                  Nous canalisons cette énergie à travers de nombreux ateliers afin que tu
                  vives un séjour apaisant, ressourçant et profondément dépaysant en notre
                  compagnie&nbsp;! N’attends plus pour te joindre à cette merveilleuse aventure
                  humaine, qui te permettra de revoir la vie sous un angle nouveau et plus
                  serein&nbsp;!
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/80">
                  <Link href="/presentation">Découvrir Ava Bien-Être</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/reservations">Accéder aux réservations</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infos SEO */}
      <section className="py-16">
        <div className="container mx-auto space-y-10">
          <div className="text-center space-y-4">
            <h2 className="text-base md:text-xl font-bold">
              Informations essentielles pour votre séjour
            </h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              Avant de réserver, consultez les informations utiles sur le programme,
              les intervenants, le lieu à Trans-en-Provence et les modalités de contact.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {clientInfoCards.map((item) => (
              <Card key={item.title} className="h-full">
                <CardContent className="flex h-full flex-col gap-4 p-6">
                  <h3 className="text-base md:text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  <Button asChild variant="link" className="w-fit p-0 underline mt-auto cursor-pointer hover:text-primary/80">
                    <Link href={item.href}>{item.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fondateurs Section */}
      <section className="py-16 mt-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-base md:text-xl font-bold">Les Fondateurs</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {founderPreviews.map((founder) => (
              <Link
                key={founder.name}
                href={`/notre-equipe#${toAnchorId(founder.name)}`}
                className="group block h-full"
                aria-label={`Voir le profil de ${founder.name}`}
              >
                <Card className="h-full text-center transition-colors group-hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <Image
                        src={founder.image || "/placeholder.svg"}
                        alt={founder.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <h3 className="text-base md:text-xl font-semibold mb-2">{founder.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{founder.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
