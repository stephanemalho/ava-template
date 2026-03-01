import type { Metadata } from "next"
import { returnLastmod, siteConfig } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: "Politique de confidentialite | Ava Bien-Etre",
  description:
    "Politique de confidentialite d'Ava Bien-Etre: donnees collectees, finalites, cookies, durees de conservation et droits RGPD.",
  keywords: [
    "politique confidentialite ava bien-etre",
    "rgpd retraite bien-etre",
    "cookies google analytics",
    "protection donnees personnelles",
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
          <h1 className="text-base md:text-2xl font-bold">Politique de confidentialite</h1>
          <p className="text-muted-foreground">
            Cette politique explique comment Ava Bien-Etre collecte, utilise et protege vos donnees personnelles dans
            le cadre des demandes de contact, des reservations de sejours et de la mesure d&apos;audience du site.
          </p>
        </header>

        <section className="space-y-2">
          <h2 className="text-base md:text-xl font-semibold">1. Responsable de traitement</h2>
          <p className="text-muted-foreground">
            Responsable : Ava Bien-Etre - 800 chemin de la liambe, 71480 Dommartin-les-Cuiseaux - Email :
            avabienetre71@gmail.com - Telephone : 06 89 75 80 31.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base md:text-xl font-semibold">2. Donnees collectees</h2>
          <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
            <li>Identite et coordonnees transmises via formulaire ou email.</li>
            <li>Informations necessaires a la reservation d&apos;un sejour.</li>
            <li>Donnees de navigation et audience (Google Analytics et Vercel Analytics) apres consentement.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base md:text-xl font-semibold">3. Finalites</h2>
          <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
            <li>Repondre aux demandes de contact et d&apos;information.</li>
            <li>Gerer les reservations de sejours et l&apos;accompagnement client.</li>
            <li>Mesurer l&apos;audience du site et ameliorer les contenus.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base md:text-xl font-semibold">4. Cookies et consentement</h2>
          <p className="text-muted-foreground">
            Un bandeau cookies permet d&apos;accepter ou de refuser les cookies analytiques. En cas de refus, les scripts
            Google Analytics et Vercel Analytics ne sont pas charges. Vous pouvez modifier votre choix a tout moment
            via le bouton de gestion des cookies.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base md:text-xl font-semibold">5. Duree de conservation</h2>
          <p className="text-muted-foreground">
            Les donnees sont conservees pendant la duree strictement necessaire a la finalite du traitement, puis
            archivees ou supprimees conformement aux obligations legales applicables.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base md:text-xl font-semibold">6. Vos droits</h2>
          <p className="text-muted-foreground">
            Vous disposez des droits d&apos;acces, rectification, effacement, opposition, limitation et portabilite de vos
            donnees. Pour exercer vos droits, contactez :{" "}
            <a className="text-primary underline" href="mailto:avabienetre71@gmail.com">
              avabienetre71@gmail.com
            </a>
            . Vous pouvez egalement introduire une reclamation aupres de la CNIL.
          </p>
        </section>

        <p className="text-right text-xs text-muted-foreground">Derniere mise a jour : {lastMod}</p>
      </div>
    </main>
  )
}
