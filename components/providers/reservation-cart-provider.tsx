"use client"

import type React from "react"
import { createContext, useCallback, useContext, useMemo, useState } from "react"
import { STRIPE_ACOMPTE_PER_PERSON_EUR } from "@/lib/reservation-pricing"

export type ReservationCartItem = {
    id: string
    title: string
    dateRange: string
    unitPrice: number
    peopleCount: number
}

type ReservationCartContextValue = {
    items: Record<string, ReservationCartItem>
    setReservation: (item: ReservationCartItem) => void
    removeReservation: (id: string) => void
    getReservation: (id: string) => ReservationCartItem | undefined
    totalPeople: number
    totalPrice: number
    totalAcompte: number
}

const ReservationCartContext = createContext<ReservationCartContextValue | null>(null)

export function ReservationCartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<Record<string, ReservationCartItem>>({})

    const setReservation = (item: ReservationCartItem) => {
        setItems((prev) => ({
            ...prev,
            [item.id]: {
                ...item,
                peopleCount: Math.max(1, item.peopleCount),
            },
        }))
    }

    const removeReservation = (id: string) => {
        setItems((prev) => {
            if (!prev[id]) return prev
            const next = { ...prev }
            delete next[id]
            return next
        })
    }

    const getReservation = useCallback((id: string) => items[id], [items])

    const totalPeople = Object.values(items).reduce((sum, item) => sum + item.peopleCount, 0)
    const totalPrice = Object.values(items).reduce((sum, item) => sum + item.unitPrice * item.peopleCount, 0)
    const totalAcompte = totalPeople * STRIPE_ACOMPTE_PER_PERSON_EUR

    const value = useMemo(
        () => ({
            items,
            setReservation,
            removeReservation,
            getReservation,
            totalPeople,
            totalPrice,
            totalAcompte,
        }),
        [getReservation, items, totalPeople, totalPrice, totalAcompte],
    )

    return <ReservationCartContext.Provider value={value}>{children}</ReservationCartContext.Provider>
}

export function useReservationCart() {
    const context = useContext(ReservationCartContext)

    if (!context) {
        throw new Error("useReservationCart must be used within ReservationCartProvider")
    }

    return context
}
