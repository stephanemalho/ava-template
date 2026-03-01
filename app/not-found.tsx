import Link from "next/link"
import { SearchX } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFoundPage() {
  return (
    <main className="py-20 md:py-24">
      <div className="container mx-auto max-w-2xl">
        <div className="space-y-5 rounded-xl border bg-muted/30 p-8 text-center md:p-10">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <SearchX className="h-6 w-6" aria-hidden="true" />
          </div>
          <h1 className="text-base font-bold md:text-2xl">Page introuvable</h1>
          <p className="text-sm text-muted-foreground">
            Cette page n&apos;existe pas ou a été déplacée.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild>
              <Link href="/">Retour à l&apos;accueil</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
