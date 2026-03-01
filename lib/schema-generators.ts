import { reservationPackages } from "@/app/reservations/_data/packages"
import { siteConfig } from "./seo-config"

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    image: `${siteConfig.siteUrl}${siteConfig.ogImage}`,
    description: siteConfig.description,
    email: "contact@auxbienetre.fr",
    telephone: "+33689758031",
    address: {
      "@type": "PostalAddress",
      streetAddress: "800 chemin de la liambe",
      postalCode: "71480",
      addressLocality: "Dommartin-les-Cuiseaux",
      addressCountry: "FR",
    },
    areaServed: "FR",
    sameAs: ["https://www.instagram.com"],
  }
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    inLanguage: "fr-FR",
  }
}

export function generateStayOffersSchema() {
  const offers = reservationPackages.map((pkg) => ({
    "@type": "Offer",
    name: pkg.title,
    description: `${pkg.subtitle} - ${pkg.location}`,
    priceCurrency: "EUR",
    price: pkg.price.toString(),
    url: `${siteConfig.siteUrl}${siteConfig.pages.reservations}`,
    availability: pkg.availablePlaces > 0 ? "https://schema.org/InStock" : "https://schema.org/SoldOut",
    validFrom: "2026-01-01",
    category: "Sejour bien-etre",
  }))

  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Offres de sejours AVA Bien-Etre",
    url: `${siteConfig.siteUrl}${siteConfig.pages.reservations}`,
    itemListElement: offers,
  }
}
