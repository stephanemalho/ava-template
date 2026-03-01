"use client"

import Link from "next/link"
import { AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className="py-20 md:py-24">
      <div className="container mx-auto max-w-2xl">
        <div className="space-y-5 rounded-xl border bg-muted/30 p-8 text-center md:p-10">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10 text-destructive">
            <AlertTriangle className="h-6 w-6" aria-hidden="true" />
          </div>
          <h1 className="text-base font-bold md:text-2xl">Une erreur est survenue</h1>
          <p className="text-sm text-muted-foreground">
            Un problème inattendu est apparu. Tu peux réessayer ou revenir à l&apos;accueil.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button onClick={reset}>Réessayer</Button>
            <Button asChild variant="outline">
              <Link href="/">Retour à l&apos;accueil</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
