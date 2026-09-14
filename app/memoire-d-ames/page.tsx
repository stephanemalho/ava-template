import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CalendarDays, Car, Check, MapPin, MessageCircle, TrainFront, Utensils } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { LinkButton } from "@/components/link-button"
import { ImageCarousel } from "@/components/image-carousel"
import { siteConfig } from "@/lib/seo-config"
import { reservationPackages } from "@/app/reservations/_data/packages"

const pagePath = "/memoire-d-ames"
const eventImage = "/sejour-et-activite/mémoire-d-ames/pierre-yonas-et-la-decouverte-de-soi-1200.webp"
const eventImageMeta = "/sejour-et-activite/mémoire-d-ames/pierre-yonas-et-la-decouverte-de-soi-og.jpg"
const informationFormUrl = "https://forms.gle/66e1uT5Pp4n5FQYZ9"

const ecolieuSlides = [
  { src: "/sejour-et-activite/mémoire-d-ames/ecolieu-o-saveur-de-l-instant/entree-ecolieu.webp", alt: "Entrée végétalisée de l’Écolieu Ô Saveur de l’Instant", caption: "L’arrivée à l’Écolieu Ô Saveur de l’Instant" },
  { src: "/sejour-et-activite/mémoire-d-ames/ecolieu-o-saveur-de-l-instant/facade-et-jardin.webp", alt: "Façade en briques et jardin de l’Écolieu Ô Saveur de l’Instant", caption: "La façade et le jardin du lieu de séjour" },
  { src: "/sejour-et-activite/mémoire-d-ames/ecolieu-o-saveur-de-l-instant/bassin-naturel.webp", alt: "Bassin naturel et ponton au cœur de la végétation de l’écolieu", caption: "Un espace de nature au cœur de l’écolieu" },
  { src: "/sejour-et-activite/mémoire-d-ames/ecolieu-o-saveur-de-l-instant/exterieur-01.webp", alt: "Vue extérieure de l’Écolieu Ô Saveur de l’Instant", caption: "Les extérieurs de l’écolieu" },
  { src: "/sejour-et-activite/mémoire-d-ames/ecolieu-o-saveur-de-l-instant/exterieur-02.webp", alt: "Jardin et extérieur de l’Écolieu Ô Saveur de l’Instant", caption: "Le jardin de l’écolieu" },
  { src: "/sejour-et-activite/mémoire-d-ames/ecolieu-o-saveur-de-l-instant/exterieur-03.webp", alt: "Espace extérieur de l’Écolieu Ô Saveur de l’Instant", caption: "Un aperçu des espaces extérieurs" },
  { src: "/sejour-et-activite/mémoire-d-ames/ecolieu-o-saveur-de-l-instant/exterieur-04.webp", alt: "Nature autour de l’Écolieu Ô Saveur de l’Instant", caption: "La nature qui entoure le lieu" },
  { src: "/sejour-et-activite/mémoire-d-ames/ecolieu-o-saveur-de-l-instant/exterieur-05.webp", alt: "Extérieurs de l’Écolieu Ô Saveur de l’Instant à Saint-Usuge", caption: "Le cadre extérieur du séjour" },
]

export const metadata: Metadata = {
  title: "Mémoire d’Âmes | Stage de régression dans les vies antérieures",
  description:
    "Mémoire d’Âmes : immersion avec Pierre Yonas du 17 au 21 décembre 2026 à Saint-Usuge en Bourgogne, avec trois jours inclus d’enseignement autour de la découverte de soi, de la mémoire de l’âme et des vies antérieures.",
  keywords: [
    "stage régression vies antérieures",
    "mémoire de l’âme",
    "découverte de soi",
    "voyance et spiritualité",
    "Pierre Yonas",
    "stage spirituel Bourgogne",
    "Saint-Usuge décembre 2026",
    "séjour pour se détendre et se reconnecter",
  ],
  alternates: { canonical: pagePath },
  openGraph: {
    title: "Mémoire d’Âmes — Stage de régression dans les vies antérieures",
    description:
      "Cinq jours d’exploration de la conscience et de découverte de soi à Saint-Usuge, en Bourgogne, avec Pierre Yonas.",
    url: pagePath,
    type: "article",
    images: [{ url: eventImageMeta, width: 1200, height: 1200, alt: "Pierre Yonas — Mémoire d’Âmes" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mémoire d’Âmes — Stage de régression dans les vies antérieures",
    description: "Cinq jours d’exploration de la conscience à Saint-Usuge, avec Pierre Yonas.",
    images: [eventImageMeta],
  },
}

const memoireDAmesPackages = reservationPackages.filter(
  (pkg) => pkg.stayId === "memoire-d-ames-decembre-2026"
)

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  "@id": `${siteConfig.siteUrl}${pagePath}#event`,
  url: `${siteConfig.siteUrl}${pagePath}`,
  inLanguage: "fr-FR",
  name: "Mémoire d’Âmes — Stage de régression dans les vies antérieures",
  description:
    "Immersion de cinq jours autour de la conscience, des états modifiés de conscience et de la régression dans les vies antérieures, avec trois jours d’enseignement de Pierre Yonas.",
  image: [`${siteConfig.siteUrl}${eventImageMeta}`],
  startDate: "2026-12-17T18:00:00+01:00",
  endDate: "2026-12-21T18:00:00+01:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Écolieu Ô Saveur de l’Instant",
    address: {
      "@type": "PostalAddress",
      streetAddress: "174 rue du Thiellet",
      postalCode: "71500",
      addressLocality: "Saint-Usuge",
      addressRegion: "Saône-et-Loire, Bourgogne",
      addressCountry: "FR",
    },
  },
  organizer: { "@type": "Organization", name: siteConfig.name, url: siteConfig.siteUrl },
  performer: { "@type": "Person", name: "Pierre Yonas" },
  offers: memoireDAmesPackages.map((pkg) => ({
    "@type": "Offer",
    "@id": `${siteConfig.siteUrl}${pkg.reservationPath}#offer-${pkg.id}`,
    name: pkg.title,
    url: `${siteConfig.siteUrl}${pkg.reservationPath}#sejour-${pkg.id}`,
    price: pkg.price,
    priceCurrency: "EUR",
    availability: pkg.availablePlaces > 0 ? "https://schema.org/InStock" : "https://schema.org/SoldOut",
    inventoryLevel: { "@type": "QuantitativeValue", value: pkg.availablePlaces },
    validFrom: pkg.bookingOpensAt,
    priceValidUntil: pkg.bookingDeadline,
  })),
}

export default function MemoireDAmesPage() {
  return (
    <main className="py-12 md:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />

      <div className="container mx-auto max-w-6xl space-y-16">
        <section className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <figure>
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted/30 shadow-lg">
              <Image
                src={eventImage}
                alt="Pierre Yonas et la découverte de soi — stage Mémoire d’Âmes"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-2 text-xs text-muted-foreground">Crédit photo : Frank glenisson</figcaption>
          </figure>
          <div className="space-y-6">
            <Badge className="w-fit">Événement exceptionnel AVA Bien-être</Badge>
            <div className="space-y-3">
              <h1 className="text-4xl font-bold tracking-tight text-primary md:text-6xl">MÉMOIRE D’ÂMES</h1>
              <p className="text-xl font-semibold md:text-2xl">Stage de régression dans les vies antérieures</p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm font-medium text-muted-foreground">
              <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4 text-primary" />17 au 21 décembre 2026</span>
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" />Saint-Usuge, Bourgogne</span>
            </div>
            <p className="text-xl leading-relaxed text-primary">Et si certaines parts de notre histoire ne commençaient pas avec cette vie&nbsp;?</p>
            <p className="leading-relaxed text-muted-foreground">
              Mémoire d’Âmes est une immersion de cinq jours imaginée par AVA Bien-être autour de l’exploration de la conscience, des états modifiés de conscience et de la régression dans les vies antérieures.
            </p>
            <LinkButton href="/reservations/memoire-d-ames" size="lg">Réserver le séjour</LinkButton>
          </div>
        </section>

        <section className="mx-auto max-w-4xl space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            Un voyage intérieur pour aller à la rencontre de ce qui, parfois, semble nous précéder&nbsp;: des mémoires, des sensations, des liens, des peurs inexpliquées, des schémas récurrents ou simplement cette impression intime que notre histoire est peut-être plus vaste que ce que nous en connaissons.
          </p>
          <p>
            Durant trois journées, les 18, 19 et 20 décembre, <strong className="text-foreground">Pierre YONAS</strong> accompagnera les participants dans un enseignement consacré à la régression et à l’exploration de ces mémoires.
          </p>
          <p>
            L’approche se veut avant tout expérientielle et initiatique&nbsp;: il ne s’agit pas d’adhérer à une croyance, mais de vivre l’expérience, d’observer ce qui émerge et de laisser chacun donner son propre sens à ce qu’il traverse.
          </p>
          <p>
            Le séjour débutera le jeudi 17 décembre à 18h, avec l’accueil du groupe et le dîner. Cette première soirée, accompagnée par Aurélie AVA Bien-Être et Cindy Marin, permettra d’entrer progressivement dans l’expérience à travers la transe auto-induite, les états modifiés de conscience, des ateliers de présence et de conscience, des temps d’introspection, de partage et des cercles de parole.
          </p>
          <p>Les trois journées suivantes seront consacrées aux enseignements de Pierre Yonas et aux expériences de régression, ponctuées de temps d’échange et d’intégration.</p>
          <p>
            Le 21 décembre, Aurélie AVA et Cindy MARIN accompagneront à nouveau le groupe pour une journée entièrement consacrée à l’intégration. Transe auto-induite, états modifiés de conscience, ateliers de présence et de conscience, introspection, partages et cercles de parole permettront de revenir sur les expériences vécues, d’accueillir ce qui aura émergé et de mettre du sens sur le chemin parcouru.
          </p>
          <p>Un dernier temps pour revenir pleinement à soi, intégrer l’expérience et refermer ensemble ce voyage intérieur.</p>
          <p>Fin du séjour le 21 décembre à 18h.</p>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {[
            ["17 décembre", "Accueil à partir de 18h, dîner et première soirée autour de la transe auto-induite."],
            ["18 au 20 décembre", "Trois journées d’enseignement et d’expériences de régression avec Pierre Yonas."],
            ["21 décembre", "Intégration, échanges et clôture du séjour à 18h."],
          ].map(([title, description]) => (
            <Card key={title} className="h-full border-primary/20">
              <CardContent className="space-y-3 p-6">
                <Check className="h-5 w-5 text-primary" aria-hidden="true" />
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="space-y-8 rounded-2xl bg-muted/30 p-6 md:p-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-primary">Un lieu au cœur de la nature</h2>
            <p className="leading-relaxed text-muted-foreground">
              Nous avons choisi d’accueillir cette immersion à l’Écolieu Ô Saveur de l’Instant, à Saint-Usuge, en Saône-et-Loire, au cœur de la Bourgogne. Le domaine s’étend sur 7 hectares de nature, entre prairies, jardins et espaces préservés. L’écolieu a été pensé comme un lieu de ressourcement, de transmission et de reconnexion à l’essentiel. Il propose des bâtiments écologiques, des espaces dédiés aux pratiques et une cuisine végétarienne préparée à partir de produits bio et locaux.
            </p>
            <p className="leading-relaxed text-muted-foreground">Le séjour est proposé en pension complète, afin que chacun puisse véritablement déposer le quotidien pendant quelques jours et se consacrer pleinement à l’expérience.</p>
          </div>
          <div className="rounded-xl border bg-background p-5 text-sm leading-relaxed">
            <p className="font-semibold">Écolieu Ô Saveur de l’Instant</p>
            <p>174 rue du Thiellet</p>
            <p>71500 Saint-Usuge</p>
          </div>
          <div className="pt-2">
            <ImageCarousel
              slides={ecolieuSlides}
              priorityFirstImage
              className="w-full"
              frameClassName="h-72 md:h-[32rem] lg:h-[38rem]"
              imageClassName="bg-muted/30 object-contain"
            />
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <Card><CardContent className="space-y-4 p-6"><TrainFront className="h-6 w-6 text-primary" /><h2 className="text-2xl font-semibold">Venir en train</h2><p className="text-sm leading-relaxed text-muted-foreground">La gare la plus proche est celle de Louhans, située à environ 10 minutes de l’Écolieu. Une navette pourra être organisée pour les participants&nbsp;: le trajet devra être réservé en amont auprès d’AVA Bien-être. Depuis Paris, Le Creusot TGV est également une alternative intéressante (environ 1h30 depuis Paris Gare de Lyon, puis transfert jusqu’au domaine).</p></CardContent></Card>
          <Card><CardContent className="space-y-4 p-6"><Car className="h-6 w-6 text-primary" /><h2 className="text-2xl font-semibold">Venir en voiture</h2><p className="text-sm leading-relaxed text-muted-foreground">Depuis l’A6&nbsp;: sortie Chalon-sur-Saône. Depuis l’A39&nbsp;: sortie Beaurepaire-en-Bresse en venant du Nord, ou sortie Le Miroir en venant du Sud. Le domaine se situe à environ 40 minutes de Lons-le-Saunier et Chalon-sur-Saône, 1h de Mâcon et Dijon, et 1h30 de Lyon et Genève.</p></CardContent></Card>
        </section>

        <section id="reservation" className="scroll-mt-24 rounded-2xl border border-primary/30 bg-primary/5 p-6 text-center md:p-10">
          <Utensils className="mx-auto h-7 w-7 text-primary" aria-hidden="true" />
          <h2 className="mt-3 text-3xl font-bold text-primary">Réserver Mémoire d’Âmes</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground mb-10">Choisissez votre chambre et réglez les arrhes sécurisées de 500 € par personne pour réserver votre place.</p>
          <LinkButton href="/reservations/memoire-d-ames" size="lg">Voir les chambres et réserver</LinkButton>
          <p className="mt-3 text-xs text-muted-foreground">Pour les couples souhaitant partager un lit double, merci de le préciser lors de votre réservation.</p>
        </section>

        <section id="informations" className="scroll-mt-24 rounded-2xl border border-primary/20 bg-muted/30 p-6 md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[auto_1fr] md:gap-10">
            <div className="mx-auto rounded-xl bg-background p-3 shadow-sm">
              <Image
                src="/sejour-et-activite/mémoire-d-ames/google-form-informations-qr.png"
                alt="QR code vers le formulaire d’informations du séjour Mémoire d’Âmes"
                width={500}
                height={500}
                sizes="(max-width: 768px) 176px, 200px"
                className="h-44 w-44 md:h-52 md:w-52"
              />
            </div>
            <div className="space-y-4 text-center md:text-left">
              <MessageCircle className="mx-auto h-7 w-7 text-primary md:mx-0" aria-hidden="true" />
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-primary">Une question sur le séjour&nbsp;?</h2>
                <p className="max-w-2xl text-muted-foreground">Scannez le QR code ou ouvrez le formulaire pour demander des informations pratiques. L’équipe AVA Bien-être vous répondra directement.</p>
              </div>
              <LinkButton href={informationFormUrl} size="lg">Demander des informations</LinkButton>
              <p className="text-xs text-muted-foreground">Ce formulaire est destiné aux demandes d’informations. Pour réserver votre place, utilisez la page de réservation ci-dessus.</p>
            </div>
          </div>
        </section>

        <section className="space-y-4 text-center">
          <p className="text-2xl font-semibold text-primary">5 jours pour ralentir. Explorer. Ressentir. Intégrer.</p>
          <p className="text-lg text-muted-foreground">Et peut-être retrouver une part de soi que l’on croyait oubliée.</p>
          <Link href="/" className="text-sm font-medium text-primary underline underline-offset-4">Retour à l’accueil</Link>
        </section>
      </div>
    </main>
  )
}
