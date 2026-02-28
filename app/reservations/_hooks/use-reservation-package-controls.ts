"use client"

import { useCallback, useMemo, useState } from "react"
import { useReservationCart } from "@/components/providers/reservation-cart-provider"
import type { ReservationPackage } from "../_data/packages"

export function useReservationPackageControls(pkg: ReservationPackage) {
  const { setReservation, removeReservation, getReservation } = useReservationCart()
  const cartItem = getReservation(pkg.id)
  const [selectedPeopleCount, setSelectedPeopleCount] = useState(cartItem?.peopleCount ?? 1)

  const updatePeopleCount = useCallback((delta: number) => {
    setSelectedPeopleCount((current) => Math.max(1, current + delta))
  }, [])

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
    return {
      selectedPeopleCount,
      computedPrice: pkg.price * selectedPeopleCount,
      isValidated,
      hasPendingChanges: isValidated && cartItem?.peopleCount !== selectedPeopleCount,
      updatePeopleCount,
      validateSelection,
      removeSelection,
    }
  }, [
    cartItem,
    pkg.price,
    removeSelection,
    selectedPeopleCount,
    updatePeopleCount,
    validateSelection,
  ])
}
