"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { useReservationCart } from "@/components/providers/reservation-cart-provider"
import type { ReservationPackage } from "../_data/packages"

export function useReservationPackageControls(pkg: ReservationPackage) {
  const { setReservation, removeReservation, getReservation } = useReservationCart()
  const cartItem = getReservation(pkg.id)
  const maxSelectablePeople = pkg.availablePlaces
  const minSelectablePeople = 0
  const clampPeopleCount = useCallback(
    (value: number) => Math.min(Math.max(value, minSelectablePeople), maxSelectablePeople),
    [maxSelectablePeople, minSelectablePeople]
  )
  const [selectedPeopleCount, setSelectedPeopleCount] = useState(
    clampPeopleCount(cartItem?.peopleCount ?? minSelectablePeople)
  )

  useEffect(() => {
    // Synchronise la quantite locale quand le panier global evolue.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedPeopleCount(clampPeopleCount(cartItem?.peopleCount ?? minSelectablePeople))
  }, [cartItem?.peopleCount, clampPeopleCount, minSelectablePeople])

  const updatePeopleCount = useCallback((delta: number) => {
    setSelectedPeopleCount((current) => clampPeopleCount(current + delta))
  }, [clampPeopleCount])

  const validateSelection = useCallback(() => {
    setReservation({
      id: pkg.id,
      title: pkg.title,
      dateRange: pkg.dateRange,
      unitPrice: pkg.price,
      peopleCount: selectedPeopleCount,
    })
  }, [pkg.dateRange, pkg.id, pkg.price, pkg.title, selectedPeopleCount, setReservation])

  const removeSelection = useCallback(() => {
    removeReservation(pkg.id)
  }, [pkg.id, removeReservation])

  return useMemo(() => {
    const isValidated = Boolean(cartItem)
    const isSoldOut = maxSelectablePeople === 0
    return {
      selectedPeopleCount,
      computedPrice: pkg.price * selectedPeopleCount,
      isValidated,
      isSoldOut,
      minSelectablePeople,
      maxSelectablePeople,
      hasPendingChanges: isValidated && cartItem?.peopleCount !== selectedPeopleCount,
      updatePeopleCount,
      validateSelection,
      removeSelection,
    }
  }, [
    cartItem,
    maxSelectablePeople,
    minSelectablePeople,
    pkg.price,
    removeSelection,
    selectedPeopleCount,
    updatePeopleCount,
    validateSelection,
  ])
}
