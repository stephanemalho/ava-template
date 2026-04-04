import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { reservationPackages } from "@/app/reservations/_data/packages";
import { STRIPE_ACOMPTE_PER_PERSON_EUR } from "@/lib/reservation-pricing";

export const runtime = "nodejs";

type CheckoutItem = {
    id: string;
    peopleCount: number;
};

type CheckoutBody = {
    items?: CheckoutItem[];
};

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 20;

type RateLimitEntry = {
    count: number;
    resetAt: number;
};

const globalForRateLimit = globalThis as typeof globalThis & {
    __checkoutRateLimit?: Map<string, RateLimitEntry>;
};

const checkoutRateLimit =
    globalForRateLimit.__checkoutRateLimit ?? new Map<string, RateLimitEntry>();
globalForRateLimit.__checkoutRateLimit = checkoutRateLimit;

function buildReservationItemsMetadata(items: CheckoutItem[]) {
    return items.map((item) => `${item.id}:${item.peopleCount}`).join(",");
}

function getClientIp(request: Request) {
    const forwardedFor = request.headers.get("x-forwarded-for");
    if (forwardedFor) return forwardedFor.split(",")[0]?.trim() || "unknown";
    return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(key: string) {
    const now = Date.now();
    const entry = checkoutRateLimit.get(key);

    if (!entry || entry.resetAt <= now) {
        checkoutRateLimit.set(key, {
            count: 1,
            resetAt: now + RATE_LIMIT_WINDOW_MS
        });
        return false;
    }

    if (entry.count >= RATE_LIMIT_MAX_REQUESTS) return true;
    entry.count += 1;
    checkoutRateLimit.set(key, entry);
    return false;
}

function getAllowedOrigins(request: Request) {
    const allowed = new Set<string>();
    const fromEnv =
        process.env.ALLOWED_ORIGINS?.split(",")
            .map((o) => o.trim())
            .filter(Boolean) ?? [];
    fromEnv.forEach((origin) => allowed.add(origin));
    if (process.env.NEXT_PUBLIC_APP_URL)
        allowed.add(process.env.NEXT_PUBLIC_APP_URL);

    const host =
        request.headers.get("x-forwarded-host") ?? request.headers.get("host");
    const protocol = request.headers.get("x-forwarded-proto") ?? "https";
    if (host) allowed.add(`${protocol}://${host}`);

    return allowed;
}

function getRequestOrigin(request: Request) {
    const originHeader = request.headers.get("origin");
    if (originHeader) return originHeader;

    const referer = request.headers.get("referer");
    if (!referer) return null;
    try {
        return new URL(referer).origin;
    } catch {
        return null;
    }
}

export async function POST(request: Request) {
    try {
        const secretKey = process.env.STRIPE_SECRET_KEY;
        if (!secretKey) {
            return NextResponse.json(
                { error: "Clé Stripe secrète manquante (STRIPE_SECRET_KEY)." },
                { status: 500 }
            );
        }

        const requestOrigin = getRequestOrigin(request);
        const allowedOrigins = getAllowedOrigins(request);
        if (!requestOrigin || !allowedOrigins.has(requestOrigin)) {
            return NextResponse.json(
                { error: "Origine non autorisee." },
                { status: 403 }
            );
        }

        const ip = getClientIp(request);
        if (isRateLimited(ip)) {
            return NextResponse.json(
                { error: "Trop de requetes. Reessayez plus tard." },
                { status: 429 }
            );
        }

        const body = (await request
            .json()
            .catch(() => null)) as CheckoutBody | null;
        const items = body?.items ?? [];

        if (!Array.isArray(items) || items.length === 0) {
            return NextResponse.json(
                { error: "Le panier est vide." },
                { status: 400 }
            );
        }
        if (items.length > 10) {
            return NextResponse.json(
                { error: "Trop d'articles dans la requete." },
                { status: 400 }
            );
        }

        const stripe = new Stripe(secretKey);

        const packageMap = new Map(
            reservationPackages.map((pkg) => [pkg.id, pkg])
        );
        const lineItems = items.map((item) => {
            const pkg = packageMap.get(item.id);
            if (!pkg) {
                throw new Error(`BAD_REQUEST: Formule invalide: ${item.id}`);
            }

            if (!Number.isInteger(item.peopleCount) || item.peopleCount < 1) {
                throw new Error(
                    `BAD_REQUEST: Nombre de personnes invalide pour ${item.id}`
                );
            }
            if (item.peopleCount > pkg.availablePlaces) {
                throw new Error(
                    `BAD_REQUEST: Quantite superieure aux places disponibles pour ${item.id}`
                );
            }

            return {
                quantity: item.peopleCount,
                price_data: {
                    currency: "eur",
                    unit_amount: STRIPE_ACOMPTE_PER_PERSON_EUR * 100,
                    product_data: {
                        name: `Arrhes - ${pkg.title}`,
                        description: `${STRIPE_ACOMPTE_PER_PERSON_EUR}.00 € par personne`
                    }
                }
            };
        });

        const requestHeaders = await headers();
        const host =
            requestHeaders.get("x-forwarded-host") ??
            requestHeaders.get("host");
        const protocol = requestHeaders.get("x-forwarded-proto") ?? "http";
        const origin = host
            ? `${protocol}://${host}`
            : process.env.NEXT_PUBLIC_APP_URL;

        if (!origin) {
            return NextResponse.json(
                {
                    error: "Origine introuvable. Configure NEXT_PUBLIC_APP_URL pour Stripe Checkout."
                },
                { status: 500 }
            );
        }

        const session = await stripe.checkout.sessions.create({
            mode: "payment",
            line_items: lineItems,
            billing_address_collection: "auto",
            customer_creation: "always",
            locale: "fr",
            metadata: {
                reservation_items: buildReservationItemsMetadata(items)
            },
            payment_intent_data: {
                metadata: {
                    reservation_items: buildReservationItemsMetadata(items)
                }
            },
            phone_number_collection: {
                enabled: true
            },
            success_url: `${origin}/reservations?payment=success&session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/reservations?payment=cancelled`
        });

        if (!session.url) {
            return NextResponse.json(
                { error: "Stripe n'a pas renvoyé d'URL de checkout." },
                { status: 500 }
            );
        }

        return NextResponse.json({ url: session.url });
    } catch (error) {
        const message =
            error instanceof Error ? error.message : "Erreur inconnue Stripe.";
        if (message.startsWith("BAD_REQUEST:")) {
            return NextResponse.json(
                { error: message.replace("BAD_REQUEST:", "").trim() },
                { status: 400 }
            );
        }
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
