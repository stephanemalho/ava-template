import type { Metadata } from "next"
import { returnLastmod, siteConfig } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: "CGV | Ava Bien-Être",
  description: "Conditions générales de vente des séjours AVA Bien-Être.",
  keywords: [
    "cgv ava bien-être",
    "conditions générales de vente ava",
    "réservation séjour bien-être",
    "annulation séjour ava",
  ],
  alternates: {
    canonical: siteConfig.pages.cgv,
  },
}

export default function ConditionsGeneralesDeVentePage() {
  const lastMod = returnLastmod(siteConfig.pages.cgv)

  return (
    <main className="px-4 py-16">
      <article className="mx-auto max-w-4xl space-y-8">
        <header className="space-y-4">
          <h1 className="text-3xl font-bold">Conditions Générales de Vente - AVA Bien-Être</h1>
          <p>
            Les présentes Conditions Générales de Vente (CGV) sont consultables à tout moment sur le site :{" "}
            <a href="https://www.avabienetre.fr" target="_blank" rel="noreferrer" className="underline">
              https://www.avabienetre.fr
            </a>
          </p>
          <p>
            AVA Bien-Être se réserve le droit de modifier les présentes CGV à tout moment. Les conditions applicables
            sont celles en vigueur à la date de la réservation.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">I. Champ d&apos;application</h2>
          <p>Les présentes CGV régissent l&apos;ensemble des prestations proposées par AVA Bien-Être.</p>
          <p>
            Toute inscription à un séjour implique l&apos;adhésion pleine et entière du participant aux présentes
            conditions, à l&apos;exclusion de tout autre document.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">II. Réservation et formation du contrat</h2>
          <p>La réservation peut être effectuée :</p>
          <ul className="list-disc pl-6">
            <li>via le formulaire en ligne</li>
            <li>par e-mail</li>
          </ul>
          <p>Elle devient ferme et définitive :</p>
          <ul className="list-disc pl-6">
            <li>à réception d&apos;un versement de 500 EUR d&apos;arrhes ou du paiement intégral</li>
            <li>et après confirmation écrite d&apos;AVA Bien-Être</li>
          </ul>
          <p>Le participant reconnaît :</p>
          <ul className="list-disc pl-6">
            <li>s&apos;inscrire librement et volontairement</li>
            <li>être majeur et juridiquement capable</li>
            <li>être en bon état de santé physique et psychique</li>
          </ul>
          <p>
            Les séjours proposés relèvent du bien-être et du développement personnel et ne constituent pas des actes
            médicaux ou thérapeutiques.
          </p>
          <p>Le participant s&apos;engage à :</p>
          <ul className="list-disc pl-6">
            <li>vérifier la compatibilité de sa condition de santé avec les activités proposées</li>
            <li>informer l&apos;organisateur de toute situation particulière</li>
            <li>être couvert par une assurance responsabilité civile</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">III. Conditions de participation</h2>
          <p>Les séjours sont réservés aux personnes majeures.</p>
          <p>Le participant s&apos;engage à :</p>
          <ul className="list-disc pl-6">
            <li>respecter les lieux, les équipes et les autres participants</li>
            <li>adopter un comportement respectueux et bienveillant</li>
          </ul>
          <p>
            AVA Bien-Être se réserve le droit d&apos;exclure toute personne dont le comportement nuirait au bon
            déroulement du séjour, sans remboursement.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">IV. Tarifs et modalités de paiement</h2>
          <p>Les prix sont exprimés en euros et sont non négociables.</p>
          <p>Les tarifs applicables sont ceux en vigueur au moment de la réservation.</p>
          <p>Modalités :</p>
          <ul className="list-disc pl-6">
            <li>Arrhes : 500 EUR à la réservation</li>
            <li>Solde : à régler au plus tard 30 jours avant le début du séjour</li>
          </ul>
          <p>
            À défaut de paiement du solde dans les délais, la réservation pourra être annulée sans remboursement des
            arrhes.
          </p>
          <p>Moyens de paiement :</p>
          <ul className="list-disc pl-6">
            <li>virement bancaire (SEPA)</li>
            <li>carte bancaire (hors zone euro)</li>
            <li>espèces (sur place uniquement)</li>
          </ul>
          <p>Tout paiement est considéré comme définitif après encaissement effectif.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">V. Prestations et hébergement</h2>
          <p>Le prix du séjour comprend :</p>
          <ul className="list-disc pl-6">
            <li>l&apos;accompagnement</li>
            <li>les activités collectives</li>
            <li>l&apos;organisation globale du séjour</li>
          </ul>
          <p>L&apos;hébergement peut être :</p>
          <ul className="list-disc pl-6">
            <li>inclus dans la formule choisie</li>
            <li>ou organisé librement par le participant à proximité du lieu du séjour</li>
          </ul>
          <p>
            Certaines prestations complémentaires (massages, soins...) peuvent être proposées par des intervenants
            indépendants. AVA Bien-Être agit uniquement en tant qu&apos;intermédiaire.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">VI. Hébergement partagé</h2>
          <p>Dans le cadre d&apos;une chambre partagée :</p>
          <ul className="list-disc pl-6">
            <li>le participant accepte de partager sa chambre avec une personne du même sexe</li>
            <li>en cas d&apos;impossibilité d&apos;appariement, une solution équivalente sera proposée</li>
          </ul>
          <p>En cas d&apos;annulation d&apos;un des participants partageant une chambre :</p>
          <ul className="list-disc pl-6">
            <li>un remplacement pourra être proposé</li>
            <li>ou un ajustement tarifaire pourra être appliqué</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">VII. Conditions d&apos;annulation</h2>
          <h3 className="text-xl font-medium">Annulation du participant</h3>
          <ul className="list-disc pl-6">
            <li>Les arrhes (500 EUR) ne sont pas remboursables</li>
            <li>Plus de 60 jours avant le séjour : perte des arrhes uniquement</li>
            <li>Entre 30 et 14 jours : arrhes conservées</li>
            <li>Moins de 14 jours : la totalité du séjour est due</li>
          </ul>
          <p>Tout séjour commencé est dû dans sa totalité.</p>

          <h3 className="text-xl font-medium">Report</h3>
          <p>Un report peut être envisagé jusqu&apos;à 28 jours avant le séjour, selon disponibilités.</p>

          <h3 className="text-xl font-medium">Annulation par AVA Bien-Être</h3>
          <p>En cas d&apos;annulation du séjour :</p>
          <ul className="list-disc pl-6">
            <li>remboursement intégral des sommes versées</li>
            <li>ou proposition de report</li>
          </ul>
          <p>Les frais annexes engagés par le participant (transport, etc.) restent à sa charge.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">VIII. Intervenants extérieurs</h2>
          <p>Dans le cadre des séjours, des intervenants extérieurs peuvent participer à certaines activités.</p>
          <p>Ces interventions s&apos;inscrivent dans une démarche de bien-être et de développement personnel.</p>
          <p>Elles ne constituent pas :</p>
          <ul className="list-disc pl-6">
            <li>un acte médical</li>
            <li>une pratique thérapeutique réglementée</li>
          </ul>
          <p>Les intervenants agissent de manière indépendante.</p>
          <p>
            AVA Bien-Être ne saurait être tenu responsable des propos, pratiques ou accompagnements proposés par ces
            intervenants.
          </p>
          <p>
            AVA Bien-Être se réserve le droit de modifier le programme ou les intervenants sans que cela ne constitue
            un motif de remboursement.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">IX. Responsabilité</h2>
          <p>Chaque participant reste responsable de sa participation aux activités.</p>
          <p>AVA Bien-Être ne pourra être tenu responsable :</p>
          <ul className="list-disc pl-6">
            <li>des conséquences liées à une condition de santé non signalée</li>
            <li>des incidents liés à une mauvaise appréciation personnelle</li>
          </ul>
          <p>Les effets personnels restent sous la responsabilité du participant.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">X. Règles de sécurité et de vie</h2>
          <p>Il est interdit :</p>
          <ul className="list-disc pl-6">
            <li>de fumer à l&apos;intérieur des bâtiments</li>
            <li>d&apos;allumer bougies, encens ou feux</li>
          </ul>
          <p>Les animaux ne sont admis que si le lieu le permet.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">XI. Droit à l&apos;image</h2>
          <p>
            Sauf opposition écrite préalable, le participant autorise AVA Bien-Être à utiliser des photos ou vidéos
            prises lors du séjour à des fins de communication.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">XII. Données personnelles</h2>
          <p>
            Les données collectées sont utilisées uniquement dans le cadre de la gestion des séjours et ne sont pas
            transmises à des tiers sans consentement.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">XIII. Droit applicable</h2>
          <p>Les présentes CGV sont soumises au droit français.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">XIV. Informations légales</h2>
          <ul className="list-disc pl-6">
            <li>Siège : 800 chemin de la Liambe, 71480 Dommartin-les-Cuiseaux</li>
            <li>Lieu des séjours : variable selon les sessions</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">XV. Médiation à la consommation</h2>
          <p>Conformément aux dispositions du Code de la consommation, le client peut recourir gratuitement à un médiateur :</p>
          <p>
            CM2C - 49 Rue de Ponthieu, 75008 Paris
            <br />
            <a href="https://www.cm2c.net" target="_blank" rel="noreferrer" className="underline">
              www.cm2c.net
            </a>
          </p>
          <p>
            Avant toute médiation, une réclamation écrite doit être adressée à AVA Bien-Être. À défaut de réponse
            satisfaisante dans un délai de 45 jours, le médiateur pourra être saisi.
          </p>
        </section>

        <p className="text-sm text-muted-foreground">Dernière mise à jour : {lastMod}</p>
      </article>
    </main>
  )
}
