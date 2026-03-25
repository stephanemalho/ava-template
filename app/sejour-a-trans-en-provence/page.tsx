import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImageCarousel } from "@/components/image-carousel"
import {
  Calendar,
  MapPin,
  Users,
  Bed,
  Utensils,
  Dumbbell,
  SpadeIcon as Spa,
  Coffee,
  Sparkles,
  UtensilsCrossed,
  CupSoda,
  Zap,
  Waves,
  WavesLadder,
  MoonStar,
  BookOpen,
  Sofa,
  HandHeart,
  Trophy,
  Volleyball,
  CookingPot,
  Umbrella,
} from "lucide-react"
import { siteConfig } from "@/lib/seo-config"
import { generateStayEventsSchema, generateStayFaqSchema } from "@/lib/schema-generators"

type StaySession = {
  title: string
  dateRange: string
  image: string
  imageAlt: string
  badge: string
  description: string
}

type CarouselSlide = {
  src: string
  alt: string
  caption: string
}

const staySessions: StaySession[] = [
  {
    title: "Séjour d'été",
    dateRange: "du 10 au 16 juillet 2026",
    image: "/sejour-11-17-Juillet.jpeg",
    imageAlt: "Participants d'un séjour bien-être AVA en juillet 2026",
    badge: "Juillet 2026",
    description: "Retraite bien-être immersive avec ateliers, détente et accompagnement en petit groupe.",
  },
  {
    title: "Séjour d'automne",
    dateRange: "du 22 au 28 octobre 2026",
    image: "/sejour-22-28-Octobre.jpeg",
    imageAlt: "Participants d'un séjour bien-être AVA en octobre 2026",
    badge: "Octobre 2026",
    description: "Une session propice au recentrage, à la relaxation profonde et au ressourcement en Provence.",
  },
]

function createSlides(images: string[], altBase: string, captionBase: string): CarouselSlide[] {
  return images.map((src, index) => ({
    src,
    alt: `${altBase} - vue ${index + 1}`,
    caption: `${captionBase} (${index + 1}/${images.length})`,
  }))
}

const hebergementSlides = createSlides(
  [
    "/sejours/hebergement/hebergement-exterieur-a.jpg",
    "/sejours/hebergement/hebergement-exterieur-b.jpg",
    "/sejours/hebergement/hebergement-exterieur-c.jpg",
  ],
  "Mas provençal AVA Bien-être avec extérieurs et piscine",
  "Le domaine AVA Bien-être à Trans-en-Provence"
)

const interieurSlides = createSlides(
  [
    "/sejours/espaces-interieurs/hebergement-interieur-a.jpg",
    "/sejours/espaces-interieurs/hebergement-interieur-b.jpg",
    "/sejours/espaces-interieurs/hebergement-interieur-c.jpg",
  ],
  "Espaces intérieurs partagés du séjour AVA Bien-être",
  "Salle de vie et espace d'échange intérieur"
)

const exterieurSlides = createSlides(
  [
    "/sejours/espaces-exterieurs/hebergement-exterieur-c-1.jpg",
    "/sejours/espaces-exterieurs/hebergement-exterieur-d.jpg",
    "/sejours/espaces-exterieurs/hebergement-exterieur-e.jpg",
    "/sejours/espaces-exterieurs/hebergement-exterieur-f.jpg",
    "/sejours/espaces-exterieurs/hebergement-exterieur-g.jpg",
  ],
  "Espaces extérieurs du mas pour activités et repos",
  "Jardins et zones de détente en plein air"
)

const cuisineSlides = createSlides(
  [
    "/sejours/la-cuisine/cuisine-a.jpg",
    "/sejours/la-cuisine/cuisine-b.jpg",
  ],
  "Cuisine du mas où sont préparés repas et collations",
  "Espace cuisine dédié à l'équilibre nutritionnel"
)

const chambreSlides = createSlides(
  [
    "/sejours/les-chambres/chambre-a.jpg",
    "/sejours/les-chambres/chambre-b.jpg",
    "/sejours/les-chambres/chambre-c.jpg",
    "/sejours/les-chambres/chambre-d.jpg",
    "/sejours/les-chambres/chambre-e.jpg",
    "/sejours/les-chambres/chambre-f.jpg",
    "/sejours/les-chambres/chambre-g.jpg",
  ],
  "Chambre climatisée du séjour AVA Bien-être",
  "Chambre confortable pour un sommeil réparateur"
)

const stayAmenities = [
  { label: "Deux piscines ensoleillées", icon: WavesLadder },
  { label: "Un salon de jardin convivial", icon: Sofa },
  { label: "Une table de massage", icon: HandHeart },
  { label: "Une table de ping-pong", icon: Trophy },
  { label: "Un terrain de volley-ball", icon: Volleyball },
  { label: "Une cuisine extérieure entièrement équipée", icon: CookingPot },
]

const programAdjustments = [
  { label: "le besoin de repos du groupe", icon: MoonStar },
  { label: "la dynamique collective", icon: Users },
  { label: "l’enthousiasme partagé", icon: Sparkles },
  { label: "le temps d’intégration nécessaire", icon: Waves },
  { label: "les conditions météorologiques", icon: Umbrella },
]

const faqItems = [
  {
    question: "Puis-je venir seul(e) ?",
    paragraphs: [
      "Bien sûr.",
      "Nos séjours sont particulièrement adaptés aux personnes venant seules, désireuses de se ressourcer et de rencontrer d’autres participants dans un cadre bienveillant et sécurisant.",
      "Beaucoup de liens authentiques naissent durant ces parenthèses hors du temps.",
    ],
  },
  {
    question: "Les débutants sont-ils acceptés ?",
    paragraphs: [
      "Absolument.",
      "Nos activités sont pensées pour être accessibles à tous les niveaux, des débutants aux pratiquants expérimentés.",
      "Chacun avance à son rythme, dans le respect de ses capacités et de son expérience.",
    ],
  },
  {
    question: "Puis-je annuler ma réservation ?",
    paragraphs: [
      "Les conditions d’annulation sont détaillées dans nos Conditions Générales de Vente, consultables lors de votre inscription.",
      "Nous vous invitons à en prendre connaissance attentivement avant votre inscription.",
    ],
  },
  {
    question: "L’expérience est-elle religieuse ?",
    paragraphs: [
      "Non.",
      "Ava Bien-Être propose un cadre ouvert, respectueux de toutes les sensibilités.",
      "Nos pratiques s’inscrivent dans une démarche de développement personnel, de reconnexion à soi et d’exploration intérieure, sans dogme ni obligation de croyance.",
    ],
  },
  {
    question: "Que dois-je apporter ?",
    paragraphs: [
      "Une liste détaillée vous sera transmise avant votre arrivée (tenues confortables, affaires personnelles, éventuel matériel spécifique).",
      "L’essentiel reste : venir avec ouverture et bienveillance envers vous-même.",
    ],
  },
  {
    question: "Le séjour est-il confidentiel ?",
    paragraphs: [
      "Oui.",
      "Le respect de la confidentialité, de l’intimité et du parcours de chacun fait partie intégrante de notre éthique.",
    ],
  },
  {
    question: "Pourquoi choisir Ava Bien-Être ?",
    paragraphs: [
      "Parce que nous allions :",
      "Ava Bien-Être est une expérience à la fois structurée et vivante, ancrée et inspirée.",
    ],
    bullets: [
      "cadre naturel exceptionnel en Provence",
      "accompagnement professionnel",
      "liberté individuelle",
      "profondeur humaine",
      "authenticité",
    ],
  },
]

export const metadata: Metadata = {
  title: "Séjour à Trans-en-Provence | AVA Bien-être",
  description:
    "Découvrez le programme du séjour bien-être AVA à Trans-en-Provence : hébergement en mas provençal, espaces intérieurs et extérieurs, cuisine, chambres et activités.",
  keywords: [
    "sejour bien-etre trans-en-provence",
    "programme retraite bien-etre",
    "hebergement retraite provence",
    "activites bien-etre",
  ],
  alternates: {
    canonical: siteConfig.pages.sejours,
  },
}

export default function SejoursPage() {
  const stayEventsSchema = generateStayEventsSchema()
  const stayFaqSchema = generateStayFaqSchema(
    faqItems.map((item) => ({
      question: item.question,
      answer: [...item.paragraphs, ...(item.bullets ? item.bullets : [])].join(" "),
    }))
  )

  const retreatServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.siteUrl}${siteConfig.pages.sejours}#service`,
    name: "Séjours bien-être AVA",
    provider: {
      "@id": `${siteConfig.siteUrl}/#organization`,
    },
    areaServed: "FR",
    serviceType: "Retraites bien-être tout inclus",
    url: `${siteConfig.siteUrl}${siteConfig.pages.sejours}`,
    image: [`${siteConfig.siteUrl}${siteConfig.ogImage}`],
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      lowPrice: "1800",
      highPrice: "1800",
      offerCount: "2",
      url: `${siteConfig.siteUrl}${siteConfig.pages.reservations}`,
    },
  }

  return (
    <main className="py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(retreatServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stayEventsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stayFaqSchema) }}
      />
      <div className="container mx-auto">
        <section className="mb-16 text-center space-y-6">
          <div className="relative h-64 overflow-hidden rounded-lg md:h-96">
            <Image
              src="/sejours-ava.jpg"
              alt="Séjour AVA Bien-être à Trans-en-Provence"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-foreground/40">
              <div className="space-y-4 text-center text-background">
                <h1 className="text-base md:text-xl font-bold">Séjour à Trans-en-Provence</h1>
                <div className="flex items-center justify-center space-x-4">
                  <Calendar className="h-5 w-5" />
                  <span className="text-lg">du 11 au 17 juillet 2026</span>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <Calendar className="h-5 w-5" />
                  <span className="text-lg">et du 22 au 28 octobre 2026</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-16 rounded-lg bg-muted/30 p-6 md:p-10">
          <div className="mx-auto max-w-5xl space-y-8">
            <div className="space-y-4 text-center">
              <h2 className="text-base md:text-2xl font-bold">Le programme d&apos;AVA Bien-être</h2>
              <p className="mx-auto max-w-3xl text-base text-muted-foreground leading-relaxed">
                Notre programme est une proposition d’exploration. Aucune participation à un atelier n’est obligatoire.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Card className="h-full border-primary/20 bg-card/85 text-left shadow-sm">
                <CardContent className="space-y-4 p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Chacun est libre d’écouter ses besoins, son rythme, son énergie du moment. Vous pouvez choisir de
                    participer… ou de vous retirer si cela vous semble juste.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Ici, la liberté et le respect de soi priment.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full border-border/70 bg-background/80 text-left shadow-sm">
                <CardContent className="space-y-4 p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Entre chaque atelier, des temps de repos, d’intégration, de relaxation et d’échanges seront
                    naturellement proposés afin de favoriser l’équilibre et l’assimilation des expériences vécues.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-border/70 bg-background/80 shadow-sm">
              <CardHeader className="space-y-3">
                <CardTitle className="text-base md:text-xl">
                  Notre équipe se réserve la possibilité d’adapter le déroulement ou l’ordre des activités selon :
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
                  {programAdjustments.map((item) => {
                    const Icon = item.icon

                    return (
                      <Card key={item.label} className="h-full border-border/70 bg-card/80 shadow-none">
                        <CardContent className="flex h-full items-start gap-3 p-2">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </div>
                          <p className="text-sm leading-relaxed text-card-foreground">{item.label}</p>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
                <p className="text-muted-foreground leading-relaxed">Parce qu’un séjour vivant ne peut être figé.</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card/90 shadow-sm">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start justify-center gap-3 text-center">
                  <span className="text-5xl leading-none text-primary/70 md:text-6xl" aria-hidden="true">
                    &ldquo;
                  </span>
                  <p className="max-w-3xl text-base italic leading-relaxed text-card-foreground md:text-lg">
                    Enfin… nous nous gardons le droit de préserver une part de mystère et de vous préparer quelques
                    belles surprises, pensées avec soin et intention.
                  </p>
                  <span className="text-5xl leading-none text-primary/70 md:text-6xl" aria-hidden="true">
                    &rdquo;
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>



        <div className="space-y-16">
          <section>
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit">
                  <Bed className="mr-2 h-4 w-4" />
                  Le lieu de séjour
                </Badge>
                <h2 className="text-base md:text-xl font-bold">Le lieu de séjour</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Bienvenue dans un cadre idyllique où se rencontrent confort, calme et authenticité provençale.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Notre mas provençal, niché au cœur de la nature à Trans-en-Provence et implanté au sein d&apos;un
                  domaine de 4 hectares, sera votre lieu de villégiature tout au long du séjour bien-être.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  De grands espaces intérieurs et extérieurs vous accueillent dans un environnement lumineux, paisible
                  et ressourçant, pensé pour allier détente, confort et profondeur.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Le domaine abrite également de nombreux animaux, vous offrant une opportunité rare : expérimenter
                  concrètement, dans un cadre respectueux et authentique, les ateliers de communication animale proposés
                  durant le séjour.
                </p>
              </div>
              <ImageCarousel slides={hebergementSlides} priorityFirstImage className="w-full" />
            </div>
          </section>

          <section className="mb-16 rounded-lg bg-muted/30 p-6 text-center md:p-10">
            <div className="mx-auto max-w-5xl space-y-8">
              <div className="space-y-4">
                <h2 className="text-base md:text-xl font-bold">Les espaces à votre disposition</h2>
                <p className="mx-auto max-w-3xl text-muted-foreground leading-relaxed">
                  Poussez la porte et découvrez les espaces qui accueilleront vos moments de convivialité durant le
                  séjour.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Trans-en-Provence, Var</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span>Groupe limité</span>
                </div>
              </div>

              <Card className="border-primary/20 bg-card/85 text-left shadow-sm">
                <CardContent className="space-y-4 p-6 md:p-8">
                  <p className="text-muted-foreground leading-relaxed">Pour accompagner chaque moment de votre voyage :</p>
                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {stayAmenities.map((amenity) => {
                      const Icon = amenity.icon

                      return (
                        <Card key={amenity.label} className="h-full border-border/70 bg-background/80 shadow-none">
                          <CardContent className="flex h-full items-start gap-3 p-5">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                              <Icon className="h-5 w-5" aria-hidden="true" />
                            </div>
                            <p className="text-sm font-medium leading-relaxed text-card-foreground">{amenity.label}</p>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-4 md:grid-cols-3">
                <Card className="h-full border-border/70 bg-background/80 text-left shadow-sm md:col-span-1">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Ces espaces sont librement accessibles afin que chacun puisse profiter pleinement du lieu, selon son
                      rythme.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full border-border/70 bg-background/80 text-left shadow-sm md:col-span-2">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Des ateliers inspirants, des temps de détente, de relaxation, de partage et de connexion
                      collective rythmeront le séjour, dans un équilibre entre expérience guidée et liberté personnelle.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-primary/20 bg-card/90 shadow-sm">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start justify-center gap-3 text-center">
                    <span className="text-5xl leading-none text-primary/70 md:text-6xl " aria-hidden="true">
                      &ldquo;
                    </span>
                    <p className="max-w-3xl text-base italic leading-relaxed text-card-foreground md:text-lg mt-2">
                      Ici, la nature ne sert pas de décor. Elle devient partenaire de votre transformation.
                    </p>
                    <span className="text-5xl leading-none text-primary/70 md:text-6xl" aria-hidden="true">
                      &rdquo;
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="-mx-4 rounded-lg bg-muted/30 px-4 py-16">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="md:order-2">
                <ImageCarousel slides={interieurSlides} className="w-full" />
              </div>
              <div className="space-y-6 md:order-1">
                <Badge variant="secondary" className="w-fit">
                  <Spa className="mr-2 h-4 w-4" />
                  Espaces intérieurs
                </Badge>
                <h2 className="text-base md:text-xl font-bold">Les espaces intérieurs</h2>
                <p className="text-muted-foreground leading-relaxed">
                  La salle à manger et le salon ont été pensés comme de véritables lieux de rencontre : spacieux,
                  lumineux et chaleureux.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  C’est ici que se tisseront les liens autour de repas partagés, de conversations inspirantes, de rires
                  spontanés et de temps d’échange en toute simplicité.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Un cadre confortable, propice à la détente et à la profondeur, où chacun peut se sentir à sa place.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Parce qu’au-delà des ateliers, ce sont aussi ces instants de vie commune qui rendent l’expérience
                  inoubliable.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit">
                  <Dumbbell className="mr-2 h-4 w-4" />
                  Les espaces extérieurs
                </Badge>
                <h2 className="text-base md:text-xl font-bold">Les espaces extérieurs</h2>
                <p className="text-muted-foreground leading-relaxed">
                  La plupart de nos ateliers se déroulent en plein air, au cœur de la nature provençale qui entoure le
                  mas.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Sous les arbres, bercés par le chant des cigales, enveloppés par le parfum de la pinède, des
                  oliviers et des eucalyptus, vous expérimentez chaque pratique dans un cadre vivant et inspirant. Le
                  chant des oiseaux accompagne les temps de respiration, de mouvement et de partage.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Ici, la nature ne sert pas de décor : elle devient un véritable soutien à l’expérience.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  L’atmosphère est à la fois relaxante, dépaysante et profondément ressourçante, un espace propice au
                  lâcher-prise, à la connexion et à l’intégration.
                </p>
              </div>
              <ImageCarousel slides={exterieurSlides} className="w-full" />
            </div>
          </section>

          <section className="-mx-4 rounded-lg bg-muted/30 px-4 py-16">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="md:order-2">
                <ImageCarousel slides={cuisineSlides} className="w-full" />
              </div>
              <div className="space-y-6 md:order-1">
                <Badge variant="secondary" className="w-fit">
                  <Utensils className="mr-2 h-4 w-4" />
                  Cuisine
                </Badge>
                <h2 className="text-base md:text-xl font-bold">La cuisine</h2>
                <p className="text-muted-foreground leading-relaxed">
                  C’est dans cet espace cuisine chaleureux et convivial que seront préparés vos repas et collations
                  tout au long du séjour.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Au programme : des menus variés et équilibrés, élaborés à partir de produits du terroir, frais et
                  soigneusement sélectionnés. Des saveurs authentiques, des boissons artisanales, ainsi que de
                  délicates collations viendront rythmer les temps entre les ateliers.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Du petit-déjeuner au dîner, chaque repas est pensé comme un moment à part entière : nourrir le corps,
                  soutenir l’énergie, favoriser la légèreté et l’équilibre.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Notre approche allie plaisir gustatif et harmonie nutritionnelle, pour que l’expérience soit aussi
                  sensorielle qu’intégrative.
                </p>
                <p className="text-muted-foreground leading-relaxed">Votre corps… et vos papilles… vous remercieront.</p>
              </div>
            </div>
          </section>

          <section>
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit">
                  <Bed className="mr-2 h-4 w-4" />
                  Chambres
                </Badge>
                <h2 className="text-base md:text-xl font-bold">Les chambres</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Le mas accueille ses hôtes au sein de 8 chambres climatisées, simples ou doubles, chacune dotée
                  d’un charme singulier et d’une décoration raffinée.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Pensées comme de véritables cocons, ces chambres allient confort, esthétisme et douceur des matières
                  afin de favoriser un repos profond et réparateur. Chaque détail a été choisi avec soin pour créer une
                  atmosphère apaisante, propice à l’intégration des expériences vécues durant la journée.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Nous disposons de 4 salles de bains spacieuses, équipées de douches et, pour certaines, de
                  baignoires, offrant à chacun un moment privilégié de détente et de relaxation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Les chambres sont proposées en formule partagée, avec le binôme de votre choix, constitué par
                  affinité. Cette organisation favorise une expérience harmonieuse, respectueuse de l’intimité et du
                  confort de chacun.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Ici, le repos devient un art de vivre. Un espace de calme, d’élégance et de régénération au cœur
                  d’un séjour d’exception.
                </p>
              </div>
              <ImageCarousel slides={chambreSlides} className="w-full" />
            </div>
          </section>
        </div>

        <section className="my-16">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-base md:text-xl font-bold">Journée type durant votre séjour</h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-primary" />
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Programme matinal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="flex items-start gap-2">
                    <Coffee className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      <strong>8h-9h30 :</strong> Petit déjeuner équilibré
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      <strong>10h :</strong> Médiumnité avec Pierre Yonas
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <UtensilsCrossed className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      <strong>12h30 :</strong> Déjeuner convivial
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      <strong>14h :</strong> Atelier méditation avec Aurélie
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CupSoda className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      <strong>15h :</strong> Collation et pause détente
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Programme après-midi</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="flex items-start gap-2">
                    <Zap className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      <strong>16h :</strong> Atelier magnétisme avec Pierre et Aurélie
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Waves className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      <strong>18h :</strong> Détente, sauna, jacuzzi, piscine
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <UtensilsCrossed className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      <strong>19h30 :</strong> Dîner sous les étoiles
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      <strong>21h :</strong> Veillée contée avec Patricia
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <MoonStar className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      <strong>22h :</strong> Soirée libre
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="mb-16">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-base md:text-xl font-bold">Prochaines sessions</h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-primary" />
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {staySessions.map((session, index) => (
              <Card key={session.dateRange} className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr]">
                  <div className="p-3 pb-0 lg:pb-3">
                    <figure className="relative min-h-80 overflow-hidden rounded-md aspect-3/4 lg:min-h-full">
                      <Image
                        src={session.image}
                        alt={session.imageAlt}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 1024px) 100vw, 220px"
                        className="object-cover object-top"
                      />
                      <figcaption className="sr-only">{session.title}</figcaption>
                    </figure>
                  </div>
                  <CardContent className="flex flex-col justify-center p-6">
                    <div className="space-y-4">
                      <Badge variant="secondary" className="w-fit">
                        {session.badge}
                      </Badge>
                      <div className="space-y-1">
                        <h3 className="text-base md:text-xl font-semibold">{session.title}</h3>
                        <p className="font-medium text-primary">{session.dateRange}</p>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">{session.description}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                        <span>Trans-en-Provence, Var</span>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </section>
        <section id="faq" className="mt-16 scroll-mt-24">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-base md:text-xl font-bold">FAQ</h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-primary" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {faqItems.map((item) => (
              <Card key={item.question} className="h-full border-border/70 bg-background/80 shadow-sm">
                <CardContent className="space-y-4 p-6">
                  <h3 className="text-base md:text-xl font-semibold">{item.question}</h3>
                  <div className="space-y-3">
                    {item.paragraphs[0] ? (
                      <p className="text-sm leading-relaxed text-muted-foreground">{item.paragraphs[0]}</p>
                    ) : null}
                    {item.bullets ? (
                      <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {item.paragraphs.slice(item.bullets ? 1 : 1).map((paragraph) => (
                      <p key={paragraph} className="text-sm leading-relaxed text-muted-foreground">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-16 text-center">
          <h2 className="mb-4 text-base md:text-xl font-bold">Le mas en pratique</h2>
          <div className="mx-auto mb-8 h-1 w-24 rounded-full bg-primary" />
          <p className="mx-auto max-w-5xl text-muted-foreground">
            Notre mas provençal, situé à 6 min du village de Trans-en-Provence et à 12 min de la gare TGV Les Arcs /
            Draguignan, dispose de 7 chambres confortables, lumineuses, équipées de literie haut de gamme,
            climatisation, et salles de bain partagées ou privatives selon votre réservation. Il dispose également
            d&apos;une piscine, avec transats dédiés à la détente, salon de jardin, cuisine extérieure pour des déjeuners,
            et dîners conviviaux. Sur place vous pourrez également retrouver un sauna de 4 places, un jacuzzi, et une
            salle de sport pour vos séances de relaxation.
          </p>
        </section>
      </div>
    </main>
  )
}
