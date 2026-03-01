import type { MetadataRoute } from "next"
import { siteConfig, sitemapPages } from "@/lib/seo-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const toUrl = (path: string) => new URL(path, siteConfig.siteUrl).toString()

  return sitemapPages.map((page) => ({
    url: toUrl(page.url),
    lastModified: page.lastmod,
    changeFrequency: page.changefreq as
      | "always"
      | "hourly"
      | "daily"
      | "weekly"
      | "monthly"
      | "yearly"
      | "never",
    priority: page.priority,
  }))
}
