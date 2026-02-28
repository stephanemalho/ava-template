"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { useReservationCart } from "@/components/providers/reservation-cart-provider"
import { STRIPE_ACOMPTE_PER_PERSON_EUR } from "@/lib/reservation-pricing"
import { CalendarDays, CreditCard, ShieldCheck, ShoppingCart, Users } from "lucide-react"

export function ReservationCartDialog() {
  const { items, totalPeople, totalPrice, totalAcompte, isCartDialogOpen, setCartDialogOpen } = useReservationCart()
  const selections = Object.values(items)
  const [isRedirecting, setIsRedirecting] = useState(false)
  const [checkoutError, setCheckoutError] = useState<string | null>(null)

  const handleCheckout = async () => {
    try {
      setCheckoutError(null)
      setIsRedirecting(true)

      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: selections.map((item) => ({
            id: item.id,
            peopleCount: item.peopleCount,
          })),
        }),
      })

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null
        throw new Error(payload?.error ?? "Impossible de créer la session Stripe.")
      }

      const { url } = (await response.json()) as { url?: string }
      if (!url) {
        throw new Error("URL Checkout Stripe invalide.")
      }

      window.location.assign(url)
    } catch (error) {
      setCheckoutError(error instanceof Error ? error.message : "Une erreur est survenue.")
      setIsRedirecting(false)
    }
  }

  return (
    <Dialog open={isCartDialogOpen} onOpenChange={setCartDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Panier des réservations">
          <ShoppingCart className="h-5 w-5" />
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Récapitulatif de votre séjour</DialogTitle>
          <DialogDescription>
            Le paiement Stripe correspond à un acompte de {STRIPE_ACOMPTE_PER_PERSON_EUR}.00 € par personne.
          </DialogDescription>
        </DialogHeader>

        {selections.length === 0 ? (
          <div className="rounded-lg border border-dashed p-6 text-center text-sm text-muted-foreground">
            Votre panier est vide. Sélectionnez un séjour et le nombre de personnes depuis la page réservations.
          </div>
        ) : (
          <div className="space-y-4">
            <div className="space-y-3">
              {selections.map((item) => {
                const linePrice = item.unitPrice * item.peopleCount

                return (
                  <div key={item.id} className="rounded-lg border p-4">
                    <div className="space-y-2">
                      <p className="font-semibold">{item.title}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays className="h-4 w-4" aria-hidden="true" />
                          {item.dateRange}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Users className="h-4 w-4" aria-hidden="true" />
                          {item.peopleCount} personne{item.peopleCount > 1 ? "s" : ""}
                        </span>
                      </div>
                      {item.peopleCount > 1 ? (
                        <p className="text-sm">
                          {item.unitPrice}.00 € x {item.peopleCount} ={" "}
                          <span className="font-semibold text-foreground">{linePrice}.00 €</span>
                        </p>
                      ) : (
                        <p className="text-sm">
                          <span className="font-semibold text-foreground">{linePrice}.00 €</span>
                        </p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            <Separator />

            <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-start">
              <div className="rounded-lg border bg-muted/30 p-4 space-y-2">
                <p className="font-medium">Moyen de paiement</p>
                <div className="flex items-center gap-2 text-sm">
                  <CreditCard className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span>Paiement sécurisé par Stripe (acompte)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                  <span>Carte bancaire, Apple Pay / Google Pay (selon disponibilité)</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Acompte Stripe: {STRIPE_ACOMPTE_PER_PERSON_EUR}.00 € x {totalPeople} personne{totalPeople > 1 ? "s" : ""}
                </p>
              </div>

              <div className="rounded-lg border p-4 min-w-52">
                <p className="text-sm text-muted-foreground">Total personnes</p>
                <p className="text-base font-semibold">{totalPeople}</p>
                <p className="mt-2 text-sm text-muted-foreground">Prix total du séjour</p>
                <p className="text-base font-bold">{totalPrice}.00 €</p>
                <p className="mt-2 text-sm text-muted-foreground">Acompte à payer maintenant (Stripe)</p>
                <p className="text-base font-bold">{totalAcompte}.00 €</p>
              </div>
            </div>
          </div>
        )}

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" type="button">
              Continuer mes choix
            </Button>
          </DialogClose>
          <Button type="button" disabled={selections.length === 0 || isRedirecting} onClick={handleCheckout}>
            {isRedirecting ? "Redirection..." : "Payer avec Stripe"}
          </Button>
        </DialogFooter>
        {checkoutError ? <p className="text-sm text-destructive">{checkoutError}</p> : null}
      </DialogContent>
    </Dialog>
  )
}
