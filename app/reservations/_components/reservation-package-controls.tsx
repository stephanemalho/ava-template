"use client"

import { ShoppingCart } from "lucide-react"
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
    isSoldOut,
    maxSelectablePeople,
    updatePeopleCount,
    validateSelection,
    removeSelection,
  } = useReservationPackageControls(pkg)
  const isInvalidSelection = selectedPeopleCount === 0

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
        <div className="w-full space-y-2 md:w-auto">
          <label htmlFor={`people-${pkg.id}`} className="block text-sm font-medium">
            1. Sélectionnez le nombre de personnes
          </label>
          <select
            id={`people-${pkg.id}`}
            value={selectedPeopleCount}
            onChange={(event) => updatePeopleCount(Number(event.target.value) - selectedPeopleCount)}
            disabled={isSoldOut}
            className="w-full rounded-lg border bg-background px-4 py-3 text-base md:min-w-56"
          >
            {isSoldOut ? <option value={0}>Complet</option> : Array.from({ length: maxSelectablePeople }, (_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1} personne{index > 0 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>
      </div>
      {(isSoldOut || selectedPeopleCount >= maxSelectablePeople) && (
        <p className="text-xs text-amber-700">
          {isSoldOut
            ? "Il n'y a plus de place disponible pour ce séjour."
            : "Le nombre maximum de personnes pour ce séjour est atteint."}
        </p>
      )}

      <div className="flex flex-wrap justify-center gap-2 md:justify-start">
        <Button
          size="lg"
          disabled={pkg.badge === "COMPLET" || isSoldOut || isInvalidSelection}
          className={pkg.badge === "COMPLET" || isSoldOut || isInvalidSelection ? "cursor-not-allowed opacity-50" : ""}
          onClick={validateSelection}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          {pkg.badge === "COMPLET" || isSoldOut
            ? "Complet"
            : isInvalidSelection
              ? "Sélectionnez au moins 1 personne"
            : "Valider mon panier"}
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
