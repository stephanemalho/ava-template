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
  MoonStar,
  BookOpen,
} from "lucide-react"

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
    title: "Séjour d&apos;été",
    dateRange: "du 11 au 17 juillet 2026",
    image: "/sejour-11-17-Juillet.jpeg",
    imageAlt: "Participants d&apos;un séjour bien-être AVA en juillet 2026",
    badge: "Juillet 2026",
    description: "Retraite bien-être immersive avec ateliers, détente et accompagnement en petit groupe.",
  },
  {
    title: "Séjour d&apos;automne",
    dateRange: "du 22 au 28 octobre 2026",
    image: "/sejour-22-28-Octobre.jpeg",
    imageAlt: "Participants d&apos;un séjour bien-être AVA en octobre 2026",
    badge: "Octobre 2026",
    description: "Une session propice au recentrage, à la relaxation profonde et au ressourcement en Provence.",
  },
]

function duplicateSlides(src: string, altBase: string, captionBase: string): CarouselSlide[] {
  return [1, 2, 3, 4].map((position) => ({
    src,
    alt: `${altBase} - vue ${position}`,
    caption: `${captionBase} (${position}/4)`,
  }))
}

const hebergementSlides = duplicateSlides(
  "/hebergement-exterieur-5.png",
  "Mas provençal AVA Bien-être avec extérieurs et piscine",
  "Le domaine AVA Bien-être à Trans-en-Provence"
)

const interieurSlides = duplicateSlides(
  "/interieur-1.jpg",
  "Espaces intérieurs partagés du séjour AVA Bien-être",
  "Salle de vie et espace d&apos;échange intérieur"
)

const exterieurSlides = duplicateSlides(
  "/exterieur-3.jpg",
  "Espaces extérieurs du mas pour activités et repos",
  "Jardins et zones de détente en plein air"
)

const cuisineSlides = duplicateSlides(
  "/cuisine-2.jpg",
  "Cuisine du mas où sont préparés repas et collations",
  "Espace cuisine dédié à l&apos;équilibre nutritionnel"
)

const chambreSlides = duplicateSlides(
  "/chambre-1-1.jpg",
  "Chambre climatisée du séjour AVA Bien-être",
  "Chambre confortable pour un sommeil réparateur"
)

export default function SejoursPage() {
  return (
    <main className="py-16">
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
                <h2 className="text-base md:text-xl font-bold">Séjour à Trans-en-Provence</h2>
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

        <section className="mb-16">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {staySessions.map((session, index) => (
              <Card key={session.dateRange} className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr]">
                  <div className="p-3 pb-0 lg:pb-3">
                    <figure className="relative min-h-[320px] overflow-hidden rounded-md aspect-[3/4] lg:min-h-full">
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

        <section className="mb-16 rounded-lg bg-muted/30 p-6 md:p-10">
          <div className="mx-auto max-w-5xl space-y-5">
            <h1 className="text-base md:text-2xl font-bold">Le programme d&apos;AVA Bien-être</h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              Notre programme est une proposition et par conséquent aucune participation à un atelier n&apos;est obligatoire,
              il est possible de ne pas participer selon vos besoins et préférences, chacun doit se sentir libre.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Des moments de repos et de temps libre, de relaxation, de partage et d&apos;échange vous seront proposés entre
              chaque atelier, notre équipe est susceptible d&apos;adapter ou de modifier l&apos;ordre du programme des activités
              en fonction du besoin de repos, de l&apos;enthousiasme du groupe et le besoin d&apos;intégration.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nous nous réservons également le droit de vous apporter une part de mystère et vous concocter de belles
              surprises.
            </p>
          </div>
        </section>

        <section className="mb-16 text-center">
          <h2 className="mb-4 text-base md:text-xl font-bold">Voici la liste de vos espaces et activités</h2>
          <div className="mb-8 flex items-center justify-center space-x-6 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Trans-en-Provence, Var</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Groupe limité</span>
            </div>
          </div>
        </section>

        <div className="space-y-16">
          <section>
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit">
                  <Bed className="mr-2 h-4 w-4" />
                  Hébergement
                </Badge>
                <h2 className="text-base md:text-xl font-bold">Hébergement</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Bienvenue dans notre cadre idyllique, alliant le confort, le calme, et le charme de la Provence :
                  Notre MAS PROVENCAL, niché au coeur de la nature, implanté au sein d&apos;un domaine de 4 hectares sera
                  votre lieu de villégiature : de grands espaces intérieurs et extérieurs sauront vous accueillir dans
                  ce domaine merveilleux et bucolique. Le soleil, le chant des oiseaux, la pinède, la nature, les
                  arbres, la forêt, les oliviers et les eucalyptus sont les éléments accompagnateurs de votre voyage.
                  De nombreux animaux vivent également au sein du domaine, ce qui vous offrira l&apos;opportunité
                  incroyable d&apos;une mise en pratique de vos capacités lors de nos ateliers de communication animale.
                  Voici un aperçu du mas et de l&apos;un de nos espaces extérieur : deux piscines ensoleillées, un salon de
                  jardin, une table de massage, table de ping-pong, un terrain de volley-ball table de cuisine en
                  plein air dont vous pourrez disposer librement afin de profiter de chaque expérience. Des ateliers,
                  des moments de détente, de relaxation et de partage en groupe seront au rendez-vous.
                </p>
              </div>
              <ImageCarousel slides={hebergementSlides} priorityFirstImage className="w-full" />
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
                  Un coup d&apos;œil à l&apos;intérieur pour vous présenter rapidement nos espaces de vie commune durant votre
                  séjour : la salle à manger et le salon. Espace et convivialité seront au rendez-vous lors de repas
                  et de discussions animées.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit">
                  <Dumbbell className="mr-2 h-4 w-4" />
                  Espaces extérieurs
                </Badge>
                <h2 className="text-base md:text-xl font-bold">En harmonie avec la nature</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Jardins méditerranéens, terrasses ombragées et espaces de pratique en plein air. Reconnectez-vous
                  avec la nature dans un cadre préservé au coeur de la Provence.
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
                  Nos repas et collations seront confectionnés dans l&apos;espace cuisine que voici. Au programme :
                  plusieurs menus variés et équilibrés, des produits du terroir : frais et de qualité, des boissons
                  artisanales et petites collations entre les ateliers. Du petit déjeuner au diner, laissez-vous
                  surprendre par notre savoir faire alliant à la fois saveur et légèreté, pour un bien être et un
                  équilibre nutritionnel et physique. Votre corps et vos papilles vous remercieront.
                </p>
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
                  Composé de 8 chambres à lit simple, et double, climatisées, au charme unique et individuel, à la
                  décoration soignée, pour un sommeil réparateur. Nous disposons de 4 salles de bains spacieuses avec
                  des douches, et des baignoires selon les préférences. Nous vous proposons des chambres partagées
                  avec le binôme de votre choix constitué par affinités.
                </p>
              </div>
              <ImageCarousel slides={chambreSlides} className="w-full" />
            </div>
          </section>
        </div>

        <section className="mt-16">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-base md:text-xl font-bold">Journee type durant votre sejour</h2>
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
                      <strong>8h-9h30 :</strong> Petit dejeuner equilibre
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      <strong>10h :</strong> Mediumnite avec Pierre Yonas
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <UtensilsCrossed className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      <strong>12h30 :</strong> Dejeuner convivial
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      <strong>14h :</strong> Atelier meditation avec Aurelie
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CupSoda className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      <strong>15h :</strong> Collation et pause detente
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Programme apres-midi</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="flex items-start gap-2">
                    <Zap className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      <strong>16h :</strong> Atelier magnetisme avec Pierre et Aurelie
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Waves className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      <strong>18h :</strong> Detente, sauna, jaccusi, piscine
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <UtensilsCrossed className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      <strong>19h30 :</strong> Diner sous les etoiles
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      <strong>21h :</strong> Veillee contee avec Patricia
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <MoonStar className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      <strong>22h :</strong> Soiree libre
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="faq" className="mt-16 scroll-mt-24">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-base md:text-xl font-bold">FAQ</h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-primary" />
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-base md:text-xl font-semibold">Puis-je venir seul ?</h3>
                <p className="text-sm text-muted-foreground">
                  Bien sur. Nos sejours sont parfaits pour les personnes seules souhaitant se ressourcer et rencontrer
                  d&apos;autres participants.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-base md:text-xl font-semibold">Les debutants sont-ils acceptes ?</h3>
                <p className="text-sm text-muted-foreground">
                  Absolument. Nos activites sont adaptees a tous les niveaux, des debutants aux pratiquants
                  experimentes.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-base md:text-xl font-semibold">Puis-je annuler ma reservation ?</h3>
                <p className="text-sm text-muted-foreground">
                  Les conditions d&apos;annulation sont detaillees dans nos conditions generales de vente disponibles lors de
                  la reservation.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-base md:text-xl font-semibold">Qu&apos;est-ce qui est inclus dans le prix ?</h3>
                <p className="text-sm text-muted-foreground">
                  Hebergement, tous les repas, toutes les activites et l&apos;accompagnement par notre equipe
                  professionnelle.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 text-center">
          <h2 className="mb-4 text-base md:text-xl font-bold">Localisation du Mas</h2>
          <div className="mx-auto mb-8 h-1 w-24 rounded-full bg-primary" />
          <p className="mx-auto max-w-5xl text-muted-foreground">
            Notre mas provencal, situe a 6 min du village de Trans-en-Provence et a 12 min de la gare TGV Les Arcs /
            Draguignan, dispose de 7 chambres confortables, lumineuses, equipees de literie haut de gamme,
            climatisation, et salles de bain partagees ou privatives selon votre reservation. Il dispose egalement
            d&apos;une piscine, avec transats dedies a la detente, salon de jardin, cuisine exterieure pour des dejeuners,
            et diners conviviaux. Sur place vous pourrez egalement retrouver un sauna de 4 places, un jaccusi, et une
            salle de sport pour vos seances de relaxation.
          </p>
        </section>
      </div>
    </main>
  )
}
