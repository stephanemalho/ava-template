type PageEntry = {
  url: string
  lastmod?: string
}

export function createLastmodGetter(pages: PageEntry[]) {
  return (pageUrl: string, fallback?: string) => {
    const page = pages.find((p) => p.url === pageUrl)
    const value = page?.lastmod || fallback
    if (!value) return "Non renseignee"

    const parsed = new Date(value)
    if (!Number.isNaN(parsed.getTime())) {
      return parsed.toLocaleDateString("fr-FR")
    }
    return value
  }
}
