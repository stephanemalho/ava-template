import type { Metadata } from "next"
import Image, { getImageProps } from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { YoutubeClickPlayer } from "@/components/youtube-click-player"
import { clientInfoCards, founderPreviews } from "./home-content"
import { toAnchorId } from "@/lib/anchor"
import { Compass, HeartHandshake, MessageCircle, ShieldCheck, Sparkles, Target, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Ava Bien-Etre | Retraites bien-etre en Provence",
  description:
    "Decouvrez Ava Bien-Etre a Trans-en-Provence: retraites tout inclus, equipe pluridisciplinaire, sejours ressourcants et accompagnement personnalise.",
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  const {
    props: { srcSet: mobileHeroSrcSet },
  } = getImageProps({
    alt: "Les fondateurs d'Ava Bien-Etre en Provence",
    src: "/Aurelie-Pierre-2026.jpeg",
    width: 960,
    height: 1440,
    sizes: "100vw",
    quality: 85,
  })

  const { props: desktopHeroImageProps } = getImageProps({
    alt: "Les fondateurs d'Ava Bien-Etre en Provence",
    src: "/Aurelie-Pierre-2026.jpeg",
    width: 1800,
    height: 1200,
    sizes: "100vw",
    quality: 85,
    priority: true,
  })

  const presentationCards = [
    {
      title: "Notre mission",
      description:
        "T’aider à te reconnecter à l’essentiel, retrouver un équilibre durable et repartir avec des outils concrets pour ton bien-être quotidien.",
      icon: Target,
    },
    {
      title: "Nos valeurs",
      description:
        "Bienveillance, authenticité et partage guident chaque atelier, chaque échange et chaque accompagnement pendant ton séjour.",
      icon: HeartHandshake,
    },
    {
      title: "Notre engagement",
      description:
        "Te proposer des retraites tout inclus avec un encadrement qualifié, des groupes à taille humaine et un cadre naturel propice au lâcher-prise.",
      icon: ShieldCheck,
    },
  ] as const

  const clientCardIcons = {
    program: Compass,
    philosophy: Sparkles,
    team: Users,
    contact: MessageCircle,
  } as const

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden group">
        {/* Image de fond */}
        <div className="absolute inset-0 z-0">
          <picture className="block h-full w-full">
            <source media="(max-width: 767px)" srcSet={mobileHeroSrcSet} />
            <img
              {...desktopHeroImageProps}
              alt="Equipe Ava Bien-Etre en Provence"
              className="h-full w-full object-cover object-center md:object-[center_32%]"
              fetchPriority="high"
            />
          </picture>
        </div>

        {/* Contenu centré */}
        <div className="absolute text-white z-10 bottom-0 text-center space-y-2 px-4 max-w-2xl mx-auto md:bg-[#4D6C4D] bg-[#544c41cc]  md:rounded-t-lg py-8">
          <h1 className="text-xl md:text-2xl font-bold drop-shadow-[0_3px_14px_rgba(0,0,0,0.35)]">
            Bienvenue chez
            Ava bien-être
          </h1>
          <p className="text-base md:mb-6  md:text-md opacity-90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            AVA Bien-Être organise des séjours tout inclus dans des cadres exceptionnels : hébergement, repas et activités réunis pour une expérience complète et immersive.
          </p>
          <p className="text-base md:mb-6  md:text-md opacity-90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">Des ateliers puissants, une ambiance conviviale, des rencontres authentiques et une énergie collective forte t’attendent.
          </p>
          <p className="text-base md:mb-6  md:text-md opacity-90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">Viens vivre un séjour extraordinaire, relaxant et profondément dépaysant.
            L’aventure commence ici.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/80">
            <Link href="/sejour-a-trans-en-provence">Découvre nos retraites</Link>
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
              <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/80">
                  <Link href="/presentation">Découvrir Ava Bien-Être</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/reservations">Accède aux réservations</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Présentation condensée */}
      <section className="py-16">
        <div className="container mx-auto space-y-10">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="w-fit mx-auto">
              Qui sommes-nous ?
            </Badge>
            <h2 className="text-base md:text-xl font-bold">Une présentation rapide d&apos;Ava Bien-Être</h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              Ava Bien-Être t&apos;accompagne dans une parenthèse de ressourcement en Provence, avec une
              approche humaine, professionnelle et authentique.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {presentationCards.map((item) => {
              const Icon = item.icon
              return (
                <Card key={item.title} className="h-full">
                  <CardContent className="p-6 space-y-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="text-base md:text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          <div className="flex justify-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/presentation">Voir la présentation complète</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Infos SEO */}
      <section className="py-16">
        <div className="container mx-auto space-y-10">
          <div className="text-center space-y-4">
            <h2 className="text-base md:text-xl font-bold">
              Informations essentielles pour ton séjour
            </h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              Avant de réserver, consulte les informations utiles sur le programme, les intervenants, le lieu à
              Trans-en-Provence et les modalités de contact.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {clientInfoCards.map((item) => {
              const Icon = clientCardIcons[item.icon]
              return (
                <Card key={item.title} className="h-full">
                  <CardContent className="flex h-full flex-col gap-4 p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="text-base md:text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                    <Button asChild variant="link" className="w-fit p-0 underline mt-auto cursor-pointer hover:text-primary/80 self-center md:self-start">
                      <Link href={item.href}>{item.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
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
              >
                <Card className="h-full text-center transition-colors group-hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <Image
                        src={founder.image || "/placeholder.svg"}
                        alt={founder.name}
                        fill
                        className="rounded-full object-cover"
                        sizes="128px"
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
