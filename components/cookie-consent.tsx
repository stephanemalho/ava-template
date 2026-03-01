"use client"

import { useEffect, useState } from "react"
import { Cookie } from "lucide-react"
import { Button } from "./ui/button"

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

type ConsentState = "accepted" | "denied" | "unknown"
type WindowWithAnalytics = Window & {
  gtag?: (...args: unknown[]) => void
  dataLayer?: unknown[]
}

export default function CookieConsent() {
  // Rendu initial stable SSR/CSR pour eviter les mismatch d'hydratation.
  const [consent, setConsent] = useState<ConsentState>("unknown")
  const [managerOpen, setManagerOpen] = useState(false)
  const open = consent === "unknown" || managerOpen

  function injectGAScript() {
    if (!GA_ID) return
    const alreadyLoaded = document.querySelector('script[data-cookie-consent="ga-loader"]')
    if (alreadyLoaded) return

    const s1 = document.createElement("script")
    s1.async = true
    s1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    s1.dataset.cookieConsent = "ga-loader"
    document.head.appendChild(s1)

    const s2 = document.createElement("script")
    s2.dataset.cookieConsent = "ga-inline"
    s2.innerHTML = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`
    document.head.appendChild(s2)
  }

  function notifyConsentChange() {
    try {
      window.dispatchEvent(new Event("cookie-consent-updated"))
    } catch {}
  }

  function clearGACookies() {
    try {
      const cookies = document.cookie.split(";")
      cookies.forEach((c) => {
        const name = c.split("=")[0].trim()
        if (/_ga|_gid|_gat|gac_/.test(name)) {
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${location.hostname}`
        }
      })
    } catch {}
  }

  function removeGAScript() {
    if (!GA_ID) return
    try {
      const scripts = Array.from(document.querySelectorAll('script[data-cookie-consent^="ga"]'))
      scripts.forEach((s) => s.parentElement?.removeChild(s))
      try {
        const win = window as WindowWithAnalytics
        delete win.gtag
        delete win.dataLayer
      } catch {}
    } catch {}
  }

  function accept() {
    try {
      localStorage.setItem("cookie_consent", "accepted")
    } catch {}
    setConsent("accepted")
    setManagerOpen(false)
    notifyConsentChange()
  }

  function decline() {
    try {
      localStorage.setItem("cookie_consent", "denied")
    } catch {}
    try {
      const win = window as WindowWithAnalytics
      if (win.gtag) {
        win.gtag("consent", "update", {
          analytics_storage: "denied",
        })
      }
    } catch {}
    clearGACookies()
    removeGAScript()
    setConsent("denied")
    setManagerOpen(false)
    notifyConsentChange()
  }

  useEffect(() => {
    try {
      const stored = localStorage.getItem("cookie_consent")
      if (stored === "accepted" || stored === "denied") {
        // Synchronisation post-hydratation avec le stockage client.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setConsent(stored)
      }
    } catch {}
  }, [])

  useEffect(() => {
    if (consent === "accepted") {
      injectGAScript()
    } else if (consent === "denied") {
      removeGAScript()
      clearGACookies()
    }
  }, [consent])

  return (
    <>
      {open && (
        <div className="fixed inset-x-0 bottom-4 z-50 px-3 md:bottom-6 md:px-6">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 rounded-2xl border border-primary/25 bg-background/95 p-5 shadow-2xl backdrop-blur-md md:flex-row md:items-center md:gap-8 md:p-6">
            <div className="flex flex-1 items-start gap-3">
              <div className="mt-0.5 rounded-full bg-primary/10 p-2 text-primary">
                <Cookie className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-foreground md:text-base">Gestion des cookies</p>
                <p className="text-sm text-muted-foreground">
                  Nous utilisons des cookies analytiques pour mesurer l&apos;audience et ameliorer ton experience.
                  Tu peux accepter ou refuser, puis modifier ce choix a tout moment.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <Button variant="ghost" onClick={decline} className="w-full sm:w-auto">
                Refuser
              </Button>
              <Button onClick={accept} className="w-full sm:w-auto">
                Accepter
              </Button>
            </div>
          </div>
        </div>
      )}

      {consent !== "unknown" && (
        <button
          aria-label="Gerer les cookies"
          title="Gerer les cookies"
          onClick={() => setManagerOpen(true)}
          className="fixed bottom-4 left-4 z-40 rounded-full border border-primary bg-background/60 p-2 text-primary shadow-md transition hover:bg-accent"
        >
          <Cookie className="h-4 w-4" />
        </button>
      )}
    </>
  )
}
