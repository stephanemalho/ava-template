import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CalendarDays, MapPin, MessageCircle, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LinkButton } from "@/components/link-button"

const eventImage = "/sejour-et-activite/les-lignes-du-destin/affiche-les-lignes-du-destin.jpeg"
const programmeImage = "/sejour-et-activite/les-lignes-du-destin/programme-les-lignes-du-destin.jpeg"
const description = "Les lignes du destin, du 24 au 28 juin 2027 à l’Écolieu Ô Saveur de l’Instant en Bourgogne, avec Pierre Yonas et Christian Vidal. Stage Early Bird : 1 390 € par personne, hors hébergement et repas. Pension complète à partir de 290 € en supplément. Votre destin est-il écrit ?"

export const metadata: Metadata = {
  title: "Les lignes du destin à Saint-Usuge | Séjour AVA Bien-Être",
  description,
  alternates: { canonical: "/les-lignes-du-destin" },
  openGraph: {
    title: "Les lignes du destin à Saint-Usuge | AVA Bien-Être",
    description,
    url: "/les-lignes-du-destin",
    type: "article",
    images: [{ url: eventImage, width: 1199, height: 1312, alt: "Les lignes du destin avec Pierre Yonas et Christian Vidal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Les lignes du destin à Saint-Usuge | AVA Bien-Être",
    description,
    images: [eventImage],
  },
}

export default function LesLignesDuDestinPage() {
  return (
    <main className="py-12 md:py-16">
      <div className="container mx-auto max-w-6xl space-y-16">
        <section className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <figure>
            <a href={eventImage} target="_blank" rel="noopener noreferrer" className="relative block aspect-square overflow-hidden rounded-2xl bg-muted/30 shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary" aria-label="Voir l’affiche Les lignes du destin en grand (nouvel onglet)">
              <Image
                src={eventImage}
                alt="Affiche du séjour Les lignes du destin avec Pierre Yonas et Christian Vidal. Votre destin est-il écrit ?"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-contain"
              />
            </a>
          </figure>
          <div className="space-y-6">
            <Badge className="w-fit">Événement exceptionnel AVA Bien-être</Badge>
            <div className="space-y-3">
              <h1 className="text-4xl font-bold tracking-tight text-primary md:text-6xl">LES LIGNES DU DESTIN</h1>
              <p className="text-xl font-semibold md:text-2xl">Avec Pierre Yonas et Christian Vidal</p>
              <p className="text-lg text-muted-foreground">Entre magnétisme, médiumnité, tarot et chiromancie</p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm font-medium text-muted-foreground">
              <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4 text-primary" aria-hidden="true" /><span>Du <time dateTime="2027-06-24">24</time> au <time dateTime="2027-06-28">28 juin 2027</time></span></span>
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" aria-hidden="true" />Écolieu Ô Saveur de l’Instant, Bourgogne</span>
            </div>
            <h2 className="text-xl italic leading-relaxed text-primary">Votre destin est-il écrit&nbsp;?</h2>
            <p className="leading-relaxed text-muted-foreground">
              Et si nous partions ensemble à la découverte de ce que la vie cherche à vous révéler…
            </p>
            <LinkButton href="/reservations/les-lignes-du-destin" size="lg">Réserver le séjour</LinkButton>
          </div>
        </section>
      <section className="mx-auto max-w-4xl space-y-6 text-lg leading-relaxed text-muted-foreground">
        <h2 className="text-3xl font-bold text-primary">Entre libre arbitre et destinée</h2>
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            Et si notre existence suivait une trame invisible, tissée bien avant notre naissance ?
            Sommes-nous les auteurs de notre propre histoire ou avançons-nous sur un chemin dont certaines rencontres,
            certaines épreuves et certains événements seraient déjà inscrits ?
          </p>
          <p>
            Entre libre arbitre et destinée, hasard et synchronicités, une question fascinante se dessine :
            sommes-nous libres de choisir notre chemin ou simplement invités à découvrir celui qui nous attend ?
          </p>
          <p>
            Et si le destin n’était ni totalement écrit, ni entièrement à inventer, mais une rencontre mystérieuse
            entre ce qui nous est donné et ce que nous choisissons d’en faire…
          </p>
        </div>
      </section>
        <section className="grid gap-6 md:grid-cols-3" aria-label="Informations pratiques du séjour">
          {[
            { icon: CalendarDays, title: "24 au 28 juin 2027", text: "Accueil le jeudi à partir de 18h. Départ le lundi à 12h." },
            { icon: Users, title: "16 participants", text: "Deux groupes de huit personnes pour les ateliers avec Pierre Yonas et Christian Vidal." },
            { icon: MapPin, title: "Écolieu Ô Saveur de l’Instant", text: "Saint-Usuge, Bourgogne." },
          ].map(({ icon: Icon, title, text }) => (
            <Card key={title} className="h-full border-primary/20">
              <CardContent className="space-y-3 p-6">
                <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section id="programme" className="scroll-mt-24 space-y-8">
          <div className="space-y-3 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Le programme</p>
            <h2 className="text-3xl font-bold text-primary">Cinq jours à la découverte de soi</h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">Un continuum d’enseignements pour explorer vos ressentis, affiner votre intuition et décoder les lignes de votre destin.</p>
          </div>
          <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { date: "Jeudi 24 juin", sessions: [
                ["À partir de 18h", "Accueil des participants et installation."],
              ] },
              { date: "Vendredi 25 juin", sessions: [
                ["Matin", "Conférence de Christian Vidal (1h) et ouverture du stage."],
                ["Après-midi", "Ateliers de présence et de conscience, transe auto-induite avec Aurélie AVA et Cindy MARIN."],
              ] },
              { date: "Samedi 26 juin", sessions: [
                ["9h30 – 12h30", "Groupe 1 : initiation au magnétisme avec Pierre Yonas. Groupe 2 : initiation au tarot avec le livre, avec Christian Vidal."],
                ["Après-midi", "Groupe 1 : initiation au tarot avec le livre, avec Christian Vidal. Groupe 2 : initiation au magnétisme avec Pierre Yonas."],
              ] },
              { date: "Dimanche 27 juin", sessions: [
                ["9h30 – 12h30", "Groupe 1 : initiation à la chiromancie avec Christian Vidal. Groupe 2 : initiation à la médiumnité avec Pierre Yonas."],
                ["Après-midi", "Groupe 1 : initiation à la médiumnité avec Pierre Yonas. Groupe 2 : initiation à la chiromancie avec Christian Vidal."],
                ["Temps de dédicaces", "Avec Pierre et Christian."],
              ] },
              { date: "Lundi 28 juin", sessions: [
                ["Matinée", "Questions / Réponses et clôture du stage."],
                ["12h", "Départ des participants."],
              ] },
            ].map(({ date, sessions }) => (
              <Card key={date} className="h-full border-primary/20">
                <CardContent className="space-y-4 p-5">
                  <h3 className="text-xl font-semibold text-primary">{date}</h3>
                  <dl className="space-y-4">
                    {sessions.map(([time, detail]) => (
                      <div key={time} className="space-y-2">
                        <dt className="font-medium">{time}</dt>
                        <dd className="text-sm leading-relaxed text-muted-foreground">{detail}</dd>
                      </div>
                    ))}
                  </dl>
                </CardContent>
              </Card>
            ))}
          </div>
          <figure className="mx-auto max-w-4xl">
            <a href={programmeImage} target="_blank" rel="noopener noreferrer" className="block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary" aria-label="Ouvrir l’affiche du programme en grand (nouvel onglet)">
              <Image src={programmeImage} alt="Programme du stage Les lignes du destin, du 24 au 28 juin 2027, détaillé ci-dessus" width={1254} height={1254} sizes="(max-width: 896px) 100vw, 896px" className="h-auto w-full rounded-2xl shadow-lg" />
            </a>
            <figcaption className="mt-3 text-center text-sm text-muted-foreground">Le programme en un coup d’œil — cliquez sur l’affiche pour l’agrandir.</figcaption>
          </figure>
        </section>

        <section className="space-y-6 text-center" aria-labelledby="tarif-sejour">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Tarif du stage</p>
            <h2 id="tarif-sejour" className="mt-2 text-3xl font-bold text-primary">1 390 € par personne · Early Bird</h2>
            <p className="mt-2 text-sm text-muted-foreground">Tarif standard : <span className="line-through">1 490 €</span> par personne</p>
            <p className="mt-2 text-muted-foreground">Hors hébergement et repas</p>
            <p className="mt-4 text-muted-foreground">Tarifs hébergement et repas en pension complète : à partir de 290 € par personne, en supplément du stage (chambre individuelle ou partagée)</p>
            <p className="mx-auto mt-3 max-w-3xl text-sm text-muted-foreground">Sur place : espaces de détente, hammam, piscine naturelle et parc de 7 hectares, le tout dans un écrin de nature préservé.</p>
          </div>
          <LinkButton href="/reservations/les-lignes-du-destin" size="lg">Voir les disponibilités et réserver</LinkButton>
        </section>

        <section id="informations" className="scroll-mt-24 rounded-2xl border border-primary/20 bg-muted/30 p-6 md:p-10">
          <div className="space-y-4 text-center">
            <MessageCircle className="mx-auto h-7 w-7 text-primary" aria-hidden="true" />
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-primary">Une question sur le séjour&nbsp;?</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">Contactez l’équipe AVA Bien-être pour en savoir plus sur « Les lignes du destin » et les informations pratiques du séjour.</p>
            </div>
            <LinkButton href="/contact" size="lg">Demander des informations</LinkButton>
          </div>
        </section>

        <section className="space-y-4 text-center">
          <p className="text-2xl font-semibold text-primary">Votre destin est-il écrit&nbsp;?</p>
          <p className="text-lg text-muted-foreground">Et si nous partions ensemble à la découverte de ce que la vie cherche à vous révéler…</p>
          <Link href="/" className="text-sm font-medium text-primary underline underline-offset-4">Retour à l’accueil</Link>
        </section>
      </div>
    </main>
  )
}
