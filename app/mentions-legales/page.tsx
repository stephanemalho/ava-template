import type { Metadata } from "next"
import { returnLastmod, siteConfig } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: "Mentions legales | Ava Bien-Etre",
  description:
    "Mentions legales du site Ava Bien-Etre: editeur, direction de publication et hebergeur.",
  keywords: [
    "mentions legales ava bien-etre",
    "editeur site avabienetre.fr",
    "hebergeur OVH",
    "informations legales retraite bien-etre",
  ],
  alternates: {
    canonical: siteConfig.pages.legalNotice,
  },
}

export default function MentionsLegalesPage() {
  const lastMod = returnLastmod(siteConfig.pages.legalNotice)

  return (
    <main className="py-16">
      <div className="container mx-auto max-w-4xl space-y-8">
        <header className="space-y-3">
          <h1 className="text-base md:text-2xl font-bold">Mentions legales</h1>
          <p className="text-muted-foreground">
            Ce site internet est edite par Ava Bien Etre, entrepreneur individuel sous le numero SIREN 830502555 et
            dont l&apos;adresse professionnelle est situee au 800 chemin de la liambe 71480 dommartin-les-cuiseaux -
            courriel : avabienetre71@gmail.com - telephone : 06 89 75 80 31.
          </p>
          <p className="text-muted-foreground">
            Le directeur ou la directrice de publication du site internet et le responsable ou la responsable de la
            redaction est Ava Bien Etre.
          </p>
          <p className="text-muted-foreground">
            Ce site internet accessible a l&apos;adresse{" "}
            <a className="text-primary underline" href="https://avabienetre.fr" target="_blank" rel="noreferrer">
              https://avabienetre.fr
            </a>{" "}
            est heberge par la societe OVH, SAS au capital de 10 069 020 euros, RCS Lille Metropole 424 761 419
            00045, Code APE 2620Z, N deg TVA : FR 22 424 761 419, Siege social : 2 rue Kellermann - 59100 Roubaix -
            France. Telephone : 09 72 10 10 07.
          </p>
        </header>

        <section className="space-y-2">
          <h2 className="text-base md:text-xl font-semibold">Propriete intellectuelle</h2>
          <p className="text-muted-foreground">
            Les contenus du site (textes, visuels, images, logo, structure) sont proteges par le droit de la propriete
            intellectuelle. Toute reproduction, representation, adaptation ou diffusion, totale ou partielle, sans
            autorisation ecrite prealable est interdite.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base md:text-xl font-semibold">Responsabilite</h2>
          <p className="text-muted-foreground">
            Ava Bien Etre s&apos;efforce de fournir des informations exactes et a jour. Toutefois, des erreurs ou omissions
            peuvent survenir. L&apos;utilisation des informations disponibles sur le site se fait sous la responsabilite de
            l&apos;utilisateur.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base md:text-xl font-semibold">Donnees personnelles et cookies</h2>
          <p className="text-muted-foreground">
            Le traitement des donnees personnelles et l&apos;utilisation des cookies sont detailles dans la politique de
            confidentialite. Vous pouvez modifier votre consentement cookies a tout moment via le gestionnaire de
            cookies present sur le site.
          </p>
        </section>

        <p className="text-right text-xs text-muted-foreground">Derniere mise a jour : {lastMod}</p>
      </div>
    </main>
  )
}
