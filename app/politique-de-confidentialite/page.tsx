import type { Metadata } from "next"
import { returnLastmod, siteConfig } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: "Politique de confidentialité | Ava Bien-Être",
  description:
    "Politique de confidentialité d'Ava Bien-Être : données collectées, finalités, cookies, durées de conservation et droits RGPD.",
  keywords: [
    "politique confidentialité ava bien-être",
    "rgpd retraite bien-être",
    "cookies google analytics",
    "protection données personnelles",
  ],
  alternates: {
    canonical: siteConfig.pages.privacy,
  },
}

export default function PolitiqueConfidentialitePage() {
  const lastMod = returnLastmod(siteConfig.pages.privacy)

  return (
    <main className="py-16">
      <div className="container mx-auto max-w-4xl space-y-8">
        <header className="space-y-3">
          <h1 className="text-base md:text-2xl font-bold">Politique de confidentialité</h1>
          <p className="text-muted-foreground">
            Cette politique explique comment Ava Bien-Être collecte, utilise et protège vos données personnelles dans
            le cadre des demandes de contact, des réservations de séjours et de la mesure d&apos;audience du site.
          </p>
        </header>

        <section className="space-y-2">
          <h2 className="text-base md:text-xl font-semibold">1. Responsable de traitement</h2>
          <p className="text-muted-foreground">
            Responsable : Ava Bien-Être - 800 chemin de la Liambe, 71480 Dommartin-les-Cuiseaux - Email :
            {" "}
            <a className="text-primary underline" href="mailto:avabienetre71@gmail.com">
              avabienetre71@gmail.com
            </a>{" "}
            - Téléphone : 06 89 75 80 31.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base md:text-xl font-semibold">2. Données collectées</h2>
          <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
            <li>Identité et coordonnées transmises via formulaire ou email.</li>
            <li>Informations nécessaires à la réservation d&apos;un séjour.</li>
            <li>Données de navigation et audience (Google Analytics et Vercel Analytics) après consentement.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base md:text-xl font-semibold">3. Finalités</h2>
          <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
            <li>Répondre aux demandes de contact et d&apos;information.</li>
            <li>Gérer les réservations de séjours et l&apos;accompagnement client.</li>
            <li>Mesurer l&apos;audience du site et améliorer les contenus.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base md:text-xl font-semibold">4. Cookies et consentement</h2>
          <p className="text-muted-foreground">
            Un bandeau cookies permet d&apos;accepter ou de refuser les cookies analytiques. En cas de refus, les scripts
            Google Analytics et Vercel Analytics ne sont pas chargés. Vous pouvez modifier votre choix à tout moment
            via le bouton de gestion des cookies.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base md:text-xl font-semibold">5. Durée de conservation</h2>
          <p className="text-muted-foreground">
            Les données sont conservées pendant la durée strictement nécessaire à la finalité du traitement, puis
            archivées ou supprimées conformément aux obligations légales applicables.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base md:text-xl font-semibold">6. Vos droits</h2>
          <p className="text-muted-foreground">
            Vous disposez des droits d&apos;accès, rectification, effacement, opposition, limitation et portabilité de vos
            données. Pour exercer vos droits, contactez :{" "}
            <a className="text-primary underline" href="mailto:avabienetre71@gmail.com">
              avabienetre71@gmail.com
            </a>
            . Vous pouvez également introduire une réclamation auprès de la CNIL.
          </p>
        </section>

        <p className="text-right text-xs text-muted-foreground">Dernière mise à jour : {lastMod}</p>
      </div>
    </main>
  )
}
