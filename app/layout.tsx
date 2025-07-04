import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { Navigation } from "../components/navigation"
import { Footer } from "../components/footer"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aux Bien-Être - Retraites Bien-être en Provence",
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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-background">
            <Navigation />
            <main className="px-4 sm:px-6 lg:px-8">
              {children}
            </main>
          <Footer />
        </div>
      </ThemeProvider>
    </body>
    </html >
  )
}
