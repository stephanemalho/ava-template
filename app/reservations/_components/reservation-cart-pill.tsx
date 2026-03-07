"use client"

import { ShoppingCart } from "lucide-react"
import { useReservationCart } from "@/components/providers/reservation-cart-provider"

export function ReservationCartPill() {
  const { totalPeople, totalPrice, setCartDialogOpen } = useReservationCart()

  return (
    <div className="flex items-center justify-center">
      <button
        type="button"
        className="inline-flex items-center gap-3 rounded-full border bg-background px-4 py-2 text-sm transition-colors hover:bg-muted/40"
        onClick={() => setCartDialogOpen(true)}
      >
        <span className="relative inline-flex">
          <ShoppingCart className="h-4 w-4 text-primary" aria-hidden="true" />
          {totalPeople > 0 && (
            <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
              {totalPeople}
            </span>
          )}
        </span>
        <span className="text-muted-foreground">
          {totalPeople > 0 ? `${totalPeople} personne(s) sélectionnée(s)` : "Aucune sélection validée"}
        </span>
        {totalPeople > 0 && <span className="font-semibold">{totalPrice}.00 €</span>}
      </button>
    </div>
  )
}
