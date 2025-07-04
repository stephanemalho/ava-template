import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Calendar, MapPin } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] minw- flex items-center justify-center overflow-hidden group">
        {/* Image de fond */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/les-fondateurs.jpg"
            alt="Équipe Aux Bien-Être"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Contenu centré */}
        <div className="absolute z-10 text-center text-white space-y-6 px-4 max-w-2xl mx-auto 
                  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                  opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <h1 className="text-4xl md:text-6xl font-bold">Besoin de déconnecter ?</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Rejoignez-nous pour une retraite bien-être authentique en Provence
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Découvrez nos retraites
          </Button>
        </div>
      </section>


      {/* Ressourcement Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Personne en méditation"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                Ressourcement
              </Badge>
              <h2 className="text-3xl font-bold">Besoin de vous ressourcer ?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nos séjours bien-être organisés des séjours tout inclus ! Hébergement, repas et activités au cœur de la
                nature. Nous proposons des séjours de déconnexion, de ressourcement, de développement personnel et de
                bien-être.
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
      <section className="py-16">
        <div className="container">
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

          <div className="relative max-w-4xl mx-auto">
            <Image
              src="/placeholder.svg?height=500&width=800"
              alt="Séjour bien-être"
              width={800}
              height={500}
              className="rounded-lg w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button size="lg" variant="secondary" className="rounded-full">
                <Play className="h-6 w-6 mr-2" />
                Voir la vidéo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Fondateurs Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Les Fondateurs</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Aurélie",
                image: "/placeholder.svg?height=300&width=300",
                description:
                  "La spécialiste à l'écoute accompagne avec bienveillance et de l'empathie, les problèmes des autres. Elle privilégie les méthodes de développement personnel et de bien-être.",
              },
              {
                name: "Émilie",
                image: "/placeholder.svg?height=300&width=300",
                description:
                  "Après plusieurs années d'une vie rythmée par le stress, Émilie a su créer sa bulle de sérénité. Elle vous accompagne dans votre quête de bien-être.",
              },
              {
                name: "Pierre Yonas",
                image: "/placeholder.svg?height=300&width=300",
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
