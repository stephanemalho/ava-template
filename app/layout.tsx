import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { Navigation } from "../components/navigation"
import { Footer } from "../components/footer"
import { ReservationCartProvider } from "../components/providers/reservation-cart-provider"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ava Bien-Être - Retraites Bien-être en Provence",
  description:
    "Découvrez nos retraites bien-être à Trans-en-Provence. Déconnectez-vous et ressourcez-vous dans un cadre naturel exceptionnel.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <ReservationCartProvider>
            <div className="min-h-screen bg-background">
              <Navigation />
              <main className="px-4 sm:px-6 lg:px-8">
                {children}
              </main>
              <Footer />
            </div>
          </ReservationCartProvider>
        </ThemeProvider>
      </body>
    </html >
  )
}
