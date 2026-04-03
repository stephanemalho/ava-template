import type { Metadata } from "next"
import { returnLastmod, siteConfig } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: "Mentions légales | Ava Bien-Être",
  description:
    "Mentions légales du site Ava Bien-Être : éditeur, direction de publication et hébergeur.",
  keywords: [
    "mentions légales ava bien-être",
    "éditeur site avabienetre.fr",
    "hébergeur OVH",
    "informations légales retraite bien-être",
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
          <h1 className="text-base md:text-2xl font-bold">Mentions légales</h1>
          <p className="text-muted-foreground">
            Ce site internet est édité par Ava Bien-Être, entrepreneur individuel sous le numéro SIREN 830502555 et
            dont l&apos;adresse professionnelle est située au 800 chemin de la Liambe, 71480 Dommartin-les-Cuiseaux -
            courriel :{" "}
            <a className="text-primary underline" href="mailto:avabienetre71@gmail.com">
              avabienetre71@gmail.com
            </a>{" "}
            - téléphone : 06 89 75 80 31.
          </p>
          <p className="text-muted-foreground">
            Le directeur ou la directrice de publication du site internet et le responsable ou la responsable de la
            rédaction est Ava Bien-Être.
          </p>
          <p className="text-muted-foreground">
            Ce site internet accessible à l&apos;adresse{" "}
            <a className="text-primary underline" href="https://avabienetre.fr" target="_blank" rel="noreferrer">
              https://avabienetre.fr
            </a>{" "}
            est hébergé par la société OVH, SAS au capital de 10 069 020 euros, RCS Lille Métropole 424 761 419
            00045, Code APE 2620Z, N° TVA : FR 22 424 761 419, Siège social : 2 rue Kellermann - 59100 Roubaix -
            France. téléphone : 09 72 10 10 07.
          </p>
        </header>

        <section className="space-y-2">
          <h2 className="text-base md:text-xl font-semibold">Propriété intellectuelle</h2>
          <p className="text-muted-foreground">
            Les contenus du site (textes, visuels, images, logo, structure) sont protégés par le droit de la Propriété
            intellectuelle. Toute reproduction, représentation, adaptation ou diffusion, totale ou partielle, sans
            autorisation écrite préalable est interdite.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base md:text-xl font-semibold">Responsabilité</h2>
          <p className="text-muted-foreground">
            Ava Bien-Être s&apos;efforce de fournir des informations exactes et à jour. Toutefois, des erreurs ou omissions
            peuvent survenir. L&apos;utilisation des informations disponibles sur le site se fait sous la responsabilité de
            l&apos;utilisateur.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base md:text-xl font-semibold">Données personnelles et cookies</h2>
          <p className="text-muted-foreground">
            Le traitement des données personnelles et l&apos;utilisation des cookies sont détaillés dans la politique de
            confidentialité. Vous pouvez modifier votre consentement cookies à tout moment via le gestionnaire de
            cookies présent sur le site.
          </p>
        </section>

        <p className="text-right text-xs text-muted-foreground">Dernière mise à jour : {lastMod}</p>
      </div>
    </main>
  )
}
