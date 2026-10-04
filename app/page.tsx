import type { Metadata } from "next"
import Image, { getImageProps } from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LocalVideoPlayer } from "@/components/local-video-player"
import { clientInfoCards, founderPreviews } from "./home-content"
import { toAnchorId } from "@/lib/anchor"
import { CalendarDays, Compass, HeartHandshake, MapPin, MessageCircle, ShieldCheck, Sparkles, Target, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Séjours immersifs et connaissance de soi | AVA Bien-Être",
  description:
    "Découvrez les séjours immersifs AVA Bien-Être avec Aurélie AVA et Pierre Yonas : connaissance de soi, hypnose, magnétisme et médiumnité dans des lieux privilégiés.",
  openGraph: {
    title: "Séjours immersifs et connaissance de soi | AVA Bien-Être",
    description: "Des séjours immersifs pour ralentir, explorer et se rencontrer, avec Aurélie AVA et Pierre Yonas.",
    url: "/",
    type: "website",
    images: ["/sejours-ava.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Séjours immersifs et connaissance de soi | AVA Bien-Être",
    description: "Des séjours immersifs pour ralentir, explorer et se rencontrer, avec Aurélie AVA et Pierre Yonas.",
    images: ["/sejours-ava.jpg"],
  },
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  const {
    props: { srcSet: mobileHeroSrcSet },
  } = getImageProps({
    alt: "Les fondateurs d'Ava Bien-Être",
    src: "/Aurelie-Pierre-2026.jpeg",
    width: 960,
    height: 1440,
    sizes: "100vw",
    quality: 85,
  })

  const { props: desktopHeroImageProps } = getImageProps({
    alt: "Les fondateurs d'Ava Bien-Être",
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
        "Créer des expériences qui transforment : des séjours immersifs autour de la connaissance de soi, de la conscience et du vivant, dans un cadre privilégié.",
      icon: Target,
    },
    {
      title: "Nos valeurs",
      description:
        "Bienveillance, authenticité et partage guident chaque atelier, chaque échange et chaque accompagnement pendant votre séjour.",
      icon: HeartHandshake,
    },
    {
      title: "Notre engagement",
      description:
        "Vous proposer des retraites tout inclus avec un encadrement qualifié, des groupes à taille humaine et un cadre naturel propice au lâcher-prise.",
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
              alt="Équipe Ava Bien-Être"
              className="h-full w-full object-cover object-center md:object-[center_32%]"
              fetchPriority="high"
            />
          </picture>
        </div>

        {/* Contenu centré */}
        <div className="absolute text-white z-10 bottom-0 text-center space-y-2 px-4 max-w-2xl mx-auto bg-[#544c41cc]  md:rounded-t-lg py-8">
          <h1 className="text-xl md:text-2xl font-bold drop-shadow-[0_3px_14px_rgba(0,0,0,0.35)]">
            Bienvenue chez
            Ava bien-être
          </h1>
          <p className="text-base md:mb-6  md:text-md opacity-90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            Des séjours immersifs dans des lieux privilégiés, pour ralentir, explorer et se rencontrer.
            Une parenthèse hors du quotidien, une expérience à vivre pleinement.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/80">
            <Link href="/sejour-a-trans-en-provence">Découvrez nos retraites</Link>
          </Button>
        </div>
      </section>
      {/* Événement Mémoire d’Âmes */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto">
          <div className="grid items-center gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <figure>
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted/30">
                <Image
                  src="/sejour-et-activite/mémoire-d-ames/affiche-memoire-d-ames-decembre-2026.jpeg"
                  alt="Pierre Yonas — stage Mémoire d’Âmes à Saint-Usuge"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-contain"
                />
              </div>
              <figcaption className="mt-2 text-xs text-muted-foreground">Crédit photo : Franck glenisson — <a href="https://www.franck-glenisson.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-primary">www.franck-glenisson.com</a></figcaption>
            </figure>
            <div className="space-y-5">
              <Badge variant="outline" className="w-fit">Nouvel événement — Bourgogne</Badge>
              <h2 className="text-3xl font-bold text-primary md:text-4xl">Mémoire d’Âmes</h2>
              <p className="text-xl font-semibold">Stage de régression dans les vies antérieures</p>
              <p className="text-muted-foreground">Du 17 au 21 décembre 2026, Pierre YONAS, Aurélie AVA et Cindy MARIN vous accompagnent pendant trois jours d’enseignement autour de la découverte de soi, de la mémoire de l’âme et de l’exploration des vies antérieures.</p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground"><span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4 text-primary" />17–21 décembre 2026</span><span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" />Saint-Usuge, Bourgogne</span></div>
              <Button asChild size="lg"><Link href="/memoire-d-ames">Découvrir l’événement</Link></Button>
            </div>
          </div>
        </div>
      </section>
      {/* Ressourcement Section */}
      <section className="py-16 bg-muted/30 my-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <LocalVideoPlayer />

            <div className="space-y-6">
              <Badge variant="outline" className="w-fit">
                Lâcher-prise - reconnexion à soi
              </Badge>
              <h2 className="text-base md:text-xl font-bold">
                Une parenthèse pour revenir à l’essentiel
              </h2>
              <p className="text-muted-foreground">
                Dans des lieux choisis pour leur beauté et leur sérénité, nos séjours vous invitent à ralentir, à explorer votre monde intérieur et à vous ouvrir à de nouvelles perspectives.
              </p>
              <div className="space-y-2 mt-6">
                <p className="text-muted-foreground">
                  Des rencontres, des expériences et du temps pour soi : une invitation à repartir avec un regard renouvelé sur votre histoire et vos aspirations.
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
            <h2 className="text-base md:text-xl font-bold">L’esprit AVA Bien-Être</h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              Des séjours imaginés avec attention, des rencontres choisies et une approche humaine pour explorer ce qui vous anime.
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
              Informations essentielles pour votre séjour
            </h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              Avant de réserver, consultez les informations utiles sur le programme, les intervenants, le lieu à
              Saint-Usuge (71) et les modalités de contact.
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
