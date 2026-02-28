import { headers } from "next/headers"
import { NextResponse } from "next/server"
import Stripe from "stripe"
import { reservationPackages } from "@/app/reservations/_data/packages"
import { STRIPE_ACOMPTE_PER_PERSON_EUR } from "@/lib/reservation-pricing"

export const runtime = "nodejs"

type CheckoutItem = {
  id: string
  peopleCount: number
}

type CheckoutBody = {
  items?: CheckoutItem[]
}

export async function POST(request: Request) {
  try {
    const secretKey = process.env.STRIPE_SECRET_KEY
    if (!secretKey) {
      return NextResponse.json({ error: "Clé Stripe secrète manquante (STRIPE_SECRET_KEY)." }, { status: 500 })
    }

    const body = (await request.json().catch(() => null)) as CheckoutBody | null
    const items = body?.items ?? []

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Le panier est vide." }, { status: 400 })
    }

    const stripe = new Stripe(secretKey)

    const packageMap = new Map(reservationPackages.map((pkg) => [pkg.id, pkg]))
    const lineItems = items.map((item) => {
      const pkg = packageMap.get(item.id)
      if (!pkg) {
        throw new Error(`Formule invalide: ${item.id}`)
      }

      if (!Number.isInteger(item.peopleCount) || item.peopleCount < 1 || item.peopleCount > 20) {
        throw new Error(`Nombre de personnes invalide pour ${item.id}`)
      }

      return {
        quantity: item.peopleCount,
        price_data: {
          currency: "eur",
          unit_amount: STRIPE_ACOMPTE_PER_PERSON_EUR * 100,
          product_data: {
            name: `Acompte - ${pkg.title}`,
            description: `${STRIPE_ACOMPTE_PER_PERSON_EUR}.00 € par personne`,
          },
        },
      }
    })

    const requestHeaders = await headers()
    const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host")
    const protocol = requestHeaders.get("x-forwarded-proto") ?? "http"
    const origin = host ? `${protocol}://${host}` : process.env.NEXT_PUBLIC_APP_URL

    if (!origin) {
      return NextResponse.json(
        { error: "Origine introuvable. Configure NEXT_PUBLIC_APP_URL pour Stripe Checkout." },
        { status: 500 },
      )
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: `${origin}/reservations?payment=success`,
      cancel_url: `${origin}/reservations?payment=cancelled`,
    })

    if (!session.url) {
      return NextResponse.json({ error: "Stripe n'a pas renvoyé d'URL de checkout." }, { status: 500 })
    }

    return NextResponse.json({ url: session.url })
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erreur inconnue Stripe."
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
