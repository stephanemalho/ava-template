import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden group">
        {/* Image de fond */}
        <div className="absolute inset-0 z-0">          <Image
            src="/Aurelie-Pierre.jpg"
            alt="?quipe Ava Bien-?tre"
            fill
            className="object-cover md:hidden"
            priority
          />
          <Image
            src="/les-fondateurs-2.jpg"
            alt="?quipe Ava Bien-?tre"
            fill
            className="object-cover hidden md:block"
            priority
          />
        </div>

        {/* Contenu centré */}
        <div className="absolute text-white z-10 bottom-0 text-center space-y-6 px-4 max-w-2xl mx-auto bg-blur-lg bg-background/30 md:rounded-lg py-8 group-hover:backdrop-blur-sm transition-all">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-[0_3px_14px_rgba(0,0,0,0.35)]">
            Bienvenue chez
            Ava bien-être
          </h1>
          <p className="text-xl md:text-2xl opacity-90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            Ava Bien-Être organise des retraites bien-être tout inclus en Provence, dédiées
            à la reconnexion à soi, au lâcher-prise et à l&apos;équilibre corps-esprit, dans un
            cadre naturel propice au ressourcement.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/80">
            Découvrez nos retraites
          </Button>
        </div>
      </section>


      {/* Ressourcement Section */}
      <section className="py-16 bg-muted/30 my-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full aspect-video overflow-hidden">
              <iframe
                title="AVA Bien être version 1min V2 1"
                src="https://www.youtube.com/embed/blFaVQ4bTNc?feature=oembed"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                name="fitvid0"
                className="absolute inset-0 w-full h-full"
              />
            </div>

            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                Ressourcement
              </Badge>
              <h2 className="text-3xl font-bold">Besoin de vous ressourcer ?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ava bien être organise des séjours tout inclus : hébergement, repas et activités au service de ton bien être dans un cadre idyllique. Nous réunissons toute notre énergie dans de nombreux ateliers afin que tu passes un séjour extraordinaire, relaxant et dépaysant en notre compagnie ! N’attends plus pour te joindre à cette merveilleuse aventure humaine ! Sourires, bonne ambiance, rencontres, partage, surprises et découvertes seront au rendez-vous !
              </p>
              <div className="space-y-2">
                <p className="font-semibold">Hébergement, repas, ateliers variés</p>
                <p className="text-sm text-muted-foreground">À partir de 500€ (sans hébergement)</p>
              </div>
              <Button>Réservez votre place !</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Séjour Inclus Section */}
      <section className="py-16 my-8">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Rejoins nous à notre Séjour Bien-Être tout inclus !</h2>
            <div className="flex items-center justify-center space-x-4 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Du 8 au 13 juin 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Trans-en-Provence</span>
              </div>
            </div>
            <Button variant="outline">Informations détaillées</Button>
          </div>

          <div className="relative w-full min-h-[70vh] mx-auto">
            <iframe title="Aurélie et Frank Castellano - AVA BIEN ETRE" src="https://www.youtube.com/embed/_GjYhQpu9_A?feature=oembed" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" name="fitvid1" className="absolute inset-0 w-full h-full"></iframe>
          </div>
        </div>
      </section>

      {/* Fondateurs Section */}
      <section className="py-16 mt-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Les Fondateurs</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Aurélie",
                image: "/Aurelie-2.jpg",
                description:
                  "La spécialiste à l'écoute accompagne avec bienveillance et de l'empathie, les problèmes des autres. Elle privilégie les méthodes de développement personnel et de bien-être.",
              },
              {
                name: "Émilie",
                image: "/Emilie-2.jpg",
                description:
                  "Après plusieurs années d'une vie rythmée par le stress, Émilie a su créer sa bulle de sérénité. Elle vous accompagne dans votre quête de bien-être.",
              },
              {
                name: "Pierre Yonas",
                image: "/Pierre_Yonas-2.jpg",
                description:
                  "Installé entre Paris et Cannes, Pierre Yonas accompagne formateurs et coachs. Il anime des sessions de développement personnel et de bien-être.",
              },
            ].map((founder, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={founder.image || "/placeholder.svg"}
                      alt={founder.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{founder.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{founder.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
