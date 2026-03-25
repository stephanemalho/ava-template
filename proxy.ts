import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

function applySecurityHeaders(response: NextResponse, path: string) {
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  response.headers.set("X-DNS-Prefetch-Control", "off")
  response.headers.set("X-Permitted-Cross-Domain-Policies", "none")
  response.headers.set("Cross-Origin-Opener-Policy", "same-origin")
  response.headers.set("Cross-Origin-Resource-Policy", "same-site")
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=()"
  )

  if (path.startsWith("/api/stripe/")) {
    response.headers.set("Content-Security-Policy", "default-src 'none'; frame-ancestors 'none'; base-uri 'none';")
    response.headers.set("Cache-Control", "no-store")
  }
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === "/api/stripe/checkout" && request.method !== "POST") {
    const response = NextResponse.json({ error: "Method Not Allowed" }, { status: 405 })
    response.headers.set("Allow", "POST")
    applySecurityHeaders(response, pathname)
    return response
  }

  if (pathname === "/api/stripe/webhook" && request.method !== "POST") {
    const response = NextResponse.json({ error: "Method Not Allowed" }, { status: 405 })
    response.headers.set("Allow", "POST")
    applySecurityHeaders(response, pathname)
    return response
  }

  const response = NextResponse.next()
  applySecurityHeaders(response, pathname)
  return response
}

export const config = {
  matcher: ["/api/stripe/:path*"],
}
