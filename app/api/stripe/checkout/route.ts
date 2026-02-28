import { headers } from "next/headers"
import { NextResponse } from "next/server"
import Stripe from "stripe"

export const runtime = "nodejs"

type CheckoutItem = {
  id: string
  title: string
  dateRange: string
  unitPrice: number
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

    const lineItems = items.map((item) => ({
      quantity: item.peopleCount,
      price_data: {
        currency: "eur",
        unit_amount: Math.round(item.unitPrice * 100),
        product_data: {
          name: item.title,
          description: item.dateRange,
        },
      },
    }))

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
