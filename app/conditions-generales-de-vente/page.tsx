import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "CGV | Ava Bien-Être",
  description: "Conditions Générales de Vente des séjours AVA BIEN ÊTRE.",
  alternates: {
    canonical: "/conditions-generales-de-vente",
  },
}

export default function ConditionsGeneralesDeVentePage() {
  return (
    <main className="py-16">
      <div className="container mx-auto max-w-5xl space-y-8">
        <header className="space-y-4 text-center">
          <h1 className="text-base md:text-2xl font-bold">Conditions Générales de Vente (CGV)</h1>
          <p className="text-sm text-muted-foreground">
            Vous avez la possibilité de consulter à tout moment les présentes CGV sur notre site{" "}
            <a href="https://www.avabienetre.fr" target="_blank" rel="noreferrer" className="text-primary underline">
              https://www.avabienetre.fr
            </a>
            .
          </p>
          <p className="text-sm text-muted-foreground">
            Nous nous réservons le droit d&apos;adapter ou de modifier à tout moment et sans préavis les présentes CGV.
            Dans ce cas, les adaptations ou modifications seront applicables à toutes inscriptions intervenant à compter
            de la publication des CGV modifiées sur le site sur lequel vous effectuerez votre réservation.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-base md:text-xl font-semibold">I. DOMAINE D&apos;APPLICATION DES CGV - OPPOSABILITÉ</h2>
          <ol className="list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
            <li>
              L&apos;inscription à l&apos;un des séjours AVA BIEN ÊTRE implique l&apos;adhésion entière et sans réserves du participant aux
              conditions générales de ventes (CGV), à l&apos;exclusion de tout autre document. Ces conditions générales
              s&apos;appliquent aux contrats ayant trait à un séjour proposé par AVA BIEN ÊTRE, ainsi qu&apos;à toutes les autres
              prestations fournies intrinsèquement aux participants par le lieu de séjour AVA BIEN ÊTRE.
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-base md:text-xl font-semibold">II. CONCLUSION DU CONTRAT</h2>
          <ol className="list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
            <li>La réservation d&apos;un séjour AVA BIEN ÊTRE s&apos;effectue directement via le formulaire d&apos;inscription en ligne.</li>
            <li>La réservation d&apos;un séjour AVA BIEN ÊTRE s&apos;effectue également par e-mail.</li>
            <li>
              La réservation ferme d&apos;un séjour AVA BIEN ÊTRE est prise en compte dès réception du versement d&apos;arrhes d&apos;un
              montant de 500€ ou bien du paiement intégral du séjour.
            </li>
            <li>Une réservation devient effective par le renvoi de la confirmation d&apos;inscription par nos services.</li>
            <li>
              Le participant atteste, dans une démarche libre et volontaire, souhaiter effectuer un séjour bien-être
              dans l&apos;un des lieux proposés par AVA BIEN ÊTRE et pour lequel il s&apos;inscrit (lieu fonction de la semaine choisie).
            </li>
            <li>
              Le participant atteste, pour ce faire, être en bonne santé et s&apos;engage à assurer ses responsabilités
              personnelles et en groupe.
            </li>
            <li>
              Le participant atteste avoir été informé(e) que la conduite d&apos;un véhicule, motorisé ou non, est fortement
              déconseillée durant toute la durée du séjour.
            </li>
            <li>Ces séjours s&apos;adressent à des personnes majeures et en bonne santé.</li>
            <li>
              Il relève de l&apos;entière responsabilité du participant de vérifier auprès des autorités médicales
              compétentes que sa condition physique et psychique est compatible avec un stage comportant des activités
              de méditation, respiration, relaxation.
            </li>
            <li>
              Le participant certifie ses déclarations étant sincères et véritables et dégage Aurélie VIOLETTE et Frank CASTELLANO de toute responsabilité à ce sujet. Il s&apos;engage également à avertir
              tout changement de situation sur sa santé pouvant survenir avant le séjour.
            </li>
            <li>
              En cas de ronchopathie (ronflement), le participant s&apos;engage à prévenir l&apos;équipe ou retenir une chambre
              en individuel dès l&apos;inscription.
            </li>
            <li>
              Le participant déclare avoir souscrit un contrat d&apos;assurance couvrant sa Responsabilité Civile
              Individuelle (en cas de dommages causés à des tiers). Celle-ci est normalement incluse dans un contrat
              multirisque habitation disposant d&apos;une clause de villégiature ou une responsabilité civile hors domicile.
              À défaut, le participant s&apos;engage à souscrire une garantie temporaire pour la durée du séjour.
            </li>
            <li>
              Les offres de séjour bien-être ne s&apos;adressent pas aux mineurs de moins de 18 ans non accompagnés de leur
              responsable légal.
            </li>
            <li>
              Les animaux de compagnie ne sont pas admis en stage mais peuvent l&apos;être si le lieu de stage le permet.
            </li>
            <li>Il est interdit de fumer à l&apos;intérieur des bâtiments et les zones non dallées du site.</li>
            <li>
              Pour des raisons de sécurité incendie, les feux, bougies et encens allumés par les participants sont
              également interdits.
            </li>
            <li>
              Pour des questions de souplesse d&apos;organisation, de congruence avec la taille des groupes (nombre de
              participants par session) ou encore en cas de nécessité, AVA BIEN ÊTRE se réserve le droit de changer le
              programme de déroulement du séjour, ainsi que la date du séjour. Ce changement sera totalement transparent
              pour les personnes demandant à bénéficier de la navette gratuite entre la gare TGV et le centre
              (horaires des billets arrivée/départ inchangés).
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-base md:text-xl font-semibold">III. SERVICES, TARIFS, PAIEMENTS ET FACTURATIONS</h2>
          <ol className="list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
            <li>
              Toutes les prestations seront facturées sur la base des tarifs en vigueur. Les prix / indications
              tarifaires sont donnés en EURO et non négociables. AVA BIEN ÊTRE se réserve le droit de modifier ses prix
              à tout moment, mais s&apos;engage à appliquer les tarifs en vigueur indiqués au moment de la réservation, sous
              réserve de disponibilité à cette date.
            </li>
            <li>
              Le participant peut régler sa réservation par chèque à l&apos;ordre de « AVA BIEN ÊTRE », par virement SEPA ou
              bien également par carte bancaire pour les ressortissants hors zone Euro. Le solde complet du stage est à
              régler par virement SEPA ou espèces dans les 24h suivant l&apos;arrivée du participant.
            </li>
            <li>
              Quel que soit le mode de règlement que vous choisirez, tout paiement ne sera considéré comme définitif
              qu&apos;après encaissement effectif et complet des sommes par nous. Nous ne prenons pas en charge les frais
              afférents à des paiements en provenance de pays tiers de l&apos;Union Européenne.
            </li>
            <li>
              Le prix du stage AVA BIEN ÊTRE inclut l&apos;accompagnement ainsi que l&apos;ensemble des activités collectives, il
              comprend :
              <ol className="list-[lower-alpha] space-y-1 pl-5 pt-1">
                <li>
                  Le coût de l&apos;hébergement durant toute la durée du stage. Si vous habitez ou pouvez être hébergé à
                  proximité, cette charge financière sera nulle.
                </li>
                <li>
                  Le coût optionnel des prestations individuelles de type massage ou soins proposés durant le séjour.
                  AVA BIEN ÊTRE n&apos;a qu&apos;un rôle de sélection et mise en relation de ces praticiens externes et
                  indépendants avec la clientèle.
                </li>
              </ol>
            </li>
            <li>
              L&apos;hébergement est libre de choix. Le stagiaire peut tout à fait opter pour un autre hébergement que ceux
              proposés par AVA BIEN ÊTRE. Nos propositions d&apos;hébergements jouent un rôle centralisateur et prennent tout
              leur sens du point de vue organisationnel et logistique, mais également pour l&apos;esprit et la dynamique de
              groupe. Il est nécessaire de se retrouver tous physiquement en un lieu pour l&apos;ensemble des activités
              collectives proposées (méditations / ateliers / repas / espaces détente), qui font partie intégrante et
              non dissociable du programme proposé. Par ailleurs, les hébergements proposés disposent d&apos;infrastructures
              et d&apos;équipements spécifiquement adaptés aux séjours bien-être, tels sauna, jacuzzi et espace de pratiques
              d&apos;ateliers corporels ou de soins. Si vous optez pour un autre hébergement, il est nécessaire que celui-ci
              soit à proximité immédiate du centre proposé où se tiendront toutes les activités collectives.
            </li>
            <li>
              Inscription pour un hébergement en chambre partagée (prévue pour 2 personnes) au sein du séjour :
              <ol className="list-[lower-alpha] space-y-1 pl-5 pt-1">
                <li>
                  Dans le cas d&apos;une inscription en chambre partagée avec un membre de la famille ou une connaissance, la
                  chambre sera facturée pour 2 personnes et donc 2 séjours. En cas d&apos;annulation de l&apos;une des 2 personnes
                  inscrites, 3 cas de figure sont possibles :
                  <ol className="list-[upper-roman] space-y-1 pl-5 pt-1">
                    <li>La personne annulant son séjour est remplacée par un autre participant. Le tarif reste inchangé.</li>
                    <li>
                      À défaut de remplacement ou si le participant inscrit refuse de partager la chambre, celui-ci
                      accepte une chambre individuelle disponible et le surcoût tarifaire induit.
                    </li>
                    <li>
                      La personne souhaite conserver sa chambre partagée pour elle seule et accepte de régler le total
                      des 2 cures initialement prévues (hébergement + séjour).
                    </li>
                  </ol>
                </li>
                <li>
                  Toute personne s&apos;inscrivant en chambre partagée accepte de partager sa chambre avec une autre personne
                  du même sexe. Dans le cas où aucune autre inscription ne permet de remplir cette chambre prévue pour 2
                  participants de même sexe, la personne inscrite accepte de se voir surclassée et attribuée une autre
                  chambre de tarif supérieur mais au tarif de la chambre Duo.
                </li>
              </ol>
            </li>
            <li>
              Une facture de séjour AVA BIEN ÊTRE est systématiquement émise et vous sera remise à la demande. Dans
              certaines situations, nous pouvons être amenés à vous demander une autorisation de débours.
            </li>
            <li>
              Lors de nos stages, vous pouvez changer de formule diététique, soit de votre propre chef, soit suite à nos recommandations.
            </li>
            <li>Les transports sont proposés à titre gratuit.</li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-base md:text-xl font-semibold">IV. ANNULATION / RÉSILIATION</h2>
          <ol className="list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
            <li>
              Les contrats de séjour AVA BIEN ÊTRE rentrent dans la catégorie des contrats exclus du droit de
              rétractation définis par l&apos;article L.121-21-8 du Code de la consommation. Le délai de rétractation
              standard de 14 jours n&apos;est donc pas applicable.
            </li>
            <li>
              Le participant a la possibilité de reporter la date de son séjour jusqu&apos;à 28 jours avant la date de
              séjour initialement prévue, sans frais et selon les disponibilités.
            </li>
            <li>Le participant ne peut annuler sa réservation par écrit (voie postale ou courriel).</li>
            <li>
              La conclusion du contrat implique l&apos;acceptation, de la part du participant, du versement de frais
              d&apos;annulation selon les modalités suivantes :
              <ol className="list-[lower-alpha] space-y-1 pl-5 pt-1">
                <li>
                  Pour toute annulation jusqu&apos;à 28 jours avant le début du séjour, les frais d&apos;annulation correspondent
                  aux frais de dossier, soit 50€. Le montant remboursé sera donc celui des arrhes (500€) déduit des frais
                  de dossier, soit un total de 270€.
                </li>
                <li>
                  Pour toute annulation entre 14 et 28 jours avant la date de début du séjour, et ce quel que soit le
                  motif, les frais d&apos;annulation correspondent au montant des arrhes versées (500€).
                </li>
                <li>
                  Pour toute annulation en deçà de 14 jours avant le début du séjour, et ce quel que soit le motif, la
                  totalité du séjour est due (hébergement y compris).
                </li>
                <li>Tout séjour commencé est dû dans sa totalité (activités + hébergement).</li>
              </ol>
            </li>
            <li>
              Le principe de précaution prévaut en cas de doute sur l&apos;état de santé ou de contre-indication due à la
              santé du participant. AVA BIEN ÊTRE se réserve le droit, à tout moment, de mettre fin au processus
              d&apos;inscription ou au déroulement du séjour en cours. Les sommes versées seront alors intégralement remboursées.
            </li>
            <li>
              AVA BIEN ÊTRE se réserve le droit d&apos;annuler tout stage et remboursera intégralement les versements du
              participant. Les frais connexes engagés par les participants (transports, logement, etc.) ne seront pas
              pris en charge.
            </li>
            <li>
              En cas de non-respect des règles élémentaires de comportement en collectivité, AVA BIEN ÊTRE se réserve le
              droit d&apos;interrompre la participation du stagiaire à ses frais.
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-base md:text-xl font-semibold">V. ARRIVÉE / DÉPART</h2>
          <ol className="list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
            <li>Le participant ne peut revendiquer une chambre spécifique au sein du séjour.</li>
            <li>La chambre réservée est mise à disposition à partir de 10h00 le jour de l&apos;arrivée.</li>
            <li>Le jour du départ, la chambre doit être libérée avant 16h00.</li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-base md:text-xl font-semibold">VI. RESPONSABILITÉ POUR LES OBJETS APPORTÉS</h2>
          <ol className="list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
            <li>
              AVA BIEN ÊTRE décline toute responsabilité pour les objets apportés par les participants, en particulier
              les bijoux, les documents et l&apos;argent en espèces.
            </li>
            <li>AVA BIEN ÊTRE décline toute responsabilité pour l&apos;utilisation d&apos;un parking extérieur.</li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-base md:text-xl font-semibold">VII. DISPOSITIONS FINALES</h2>
          <ol className="list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
            <li>C&apos;est le droit français qui s&apos;applique aux présentes conditions.</li>
            <li>
              Si des dispositions de ces CGV sont devenues caduques ou nulles, les autres dispositions demeurent
              valides. Ce sont alors les prescriptions légales qui s&apos;appliquent.
            </li>
            <li>Le lieu de facturation est le siège social de AVA BIEN ÊTRE : 800 CHEMIN DE LA LIAMBE 71480 DOMMARTIN-LES-CUISEAUX.</li>
            <li>
              Le lieu de séjour est situé au MAS CALISTO, 738 CHEMIN DES EYSSARES 83720 TRANS-EN-PROVENCE.
              AVA BIEN ÊTRE n&apos;est pas propriétaire de ce lieu de séjour.
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-base md:text-xl font-semibold">VIII. MÉDIATION À LA CONSOMMATION</h2>
          <ol className="list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
            <li>
              Conformément aux dispositions du Code de la consommation concernant le règlement amiable des litiges, AVA
              BIEN ÊTRE adhère au service de médiation du Centre de la Médiation de la Consommation de Conciliateurs de
              Justice (CM2C).
            </li>
            <li>
              En cas de litige, vous pouvez adresser une réclamation écrite à : Centre de la Médiation de la
              Consommation de Conciliateurs de Justice (CM2C), 49 Rue de Ponthieu, 75008 Paris. Site internet :{" "}
              <a href="https://www.cm2c.net" target="_blank" rel="noreferrer" className="text-primary underline">
                www.cm2c.net
              </a>
              {" "} - Courriel :{" "}
              <a href="mailto:cm2c@cm2c.net" className="text-primary underline">
                cm2c@cm2c.net
              </a>
              .
            </li>
            <li>
              Le recours à la médiation est gratuit pour le consommateur. Avant de saisir le médiateur, le consommateur
              doit adresser une réclamation écrite à notre service client. Si aucune solution n&apos;a été trouvée dans un
              délai de 45 jours, il pourra alors saisir le médiateur de la consommation dont nous dépendons.
            </li>
          </ol>
        </section>

        <div className="text-sm text-muted-foreground">
          <Link href="/contact#contact-direct" className="text-primary underline">
            Pour toute question sur ces CGV, contacte notre équipe.
          </Link>
        </div>
      </div>
    </main>
  )
}
