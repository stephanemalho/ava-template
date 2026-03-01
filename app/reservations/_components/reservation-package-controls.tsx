"use client"

import { Minus, Plus, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { ReservationPackage } from "../_data/packages"
import { useReservationPackageControls } from "../_hooks/use-reservation-package-controls"

type ReservationPackageControlsProps = {
  pkg: ReservationPackage
}

export function ReservationPackageControls({ pkg }: ReservationPackageControlsProps) {
  const {
    selectedPeopleCount,
    computedPrice,
    isValidated,
    hasPendingChanges,
    updatePeopleCount,
    validateSelection,
    removeSelection,
  } = useReservationPackageControls(pkg)

  return (
    <div className="mt-8 space-y-4">
      <div className="flex flex-col items-center gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div>
          <div className="text-3xl font-bold">{computedPrice}.00 €</div>
          {selectedPeopleCount > 1 && (
            <p className="text-xs text-muted-foreground">
              {pkg.price}.00 € x {selectedPeopleCount} personnes
            </p>
          )}
        </div>
        <div className="flex items-center gap-2 rounded-lg border p-1">
          <Button
            variant="ghost"
            size="icon"
            type="button"
            onClick={() => updatePeopleCount(-1)}
            aria-label={`Retirer une personne pour ${pkg.title}`}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="min-w-20 text-center text-sm font-medium">{selectedPeopleCount} pers.</span>
          <Button
            variant="ghost"
            size="icon"
            type="button"
            onClick={() => updatePeopleCount(1)}
            aria-label={`Ajouter une personne pour ${pkg.title}`}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 md:justify-start">
        <Button
          size="lg"
          disabled={pkg.badge === "COMPLET"}
          className={pkg.badge === "COMPLET" ? "cursor-not-allowed opacity-50" : ""}
          onClick={validateSelection}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          {pkg.badge === "COMPLET"
            ? "Complet"
            : !isValidated
              ? "Valider la sélection"
              : hasPendingChanges
                ? "Mettre à jour le panier"
                : "Sélection validée"}
        </Button>

        {isValidated && (
          <Button variant="outline" size="lg" type="button" onClick={removeSelection}>
            Retirer du panier
          </Button>
        )}
      </div>
    </div>
  )
}
