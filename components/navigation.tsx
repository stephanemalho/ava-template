"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"
import Image from "next/image"
import { useReservationCart } from "./providers/reservation-cart-provider"
import { ReservationCartDialog } from "./reservation-cart-dialog"

const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Présentation", href: "/presentation" },
    { name: "Notre Équipe", href: "/notre-equipe" },
    { name: "Séjours", href: "/sejour-a-trans-en-provence" },
    { name: "Réservations", href: "/reservations" },
    { name: "Contact", href: "/contact" },
]

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()
    const { totalPeople } = useReservationCart()

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-[#4d6c4d]">
            <div className="mx-auto flex h-16 w-full max-w-full items-center justify-between px-4">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="h-10 w-10 relative">
                        <Image
                            src="/Logo-Ava_Bien_Etre-2-300x300.png"
                            alt="Équipe Ava Bien-Être"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <span className="text-xl font-bold text-white">Ava Bien-Être</span>
                </Link>


                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "rounded-full p-1 text-sm font-medium transition-colors text-white/85 hover:text-white",
                                pathname === item.href ? "bg-white/15 text-white" : "",
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center space-x-2">
                    <div className="relative">
                        <ReservationCartDialog />
                        {totalPeople > 0 && (
                            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
                                {totalPeople}
                            </span>
                        )}
                    </div>
                    <ThemeToggle />

                    {/* Mobile Navigation */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu className="h-5 w-5 text-white" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-1/2 px-4">
                            <SheetTitle className="sr-only">Menu principal</SheetTitle>
                            <nav className="flex flex-col space-y-4 mt-8">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                                            pathname === item.href ? "bg-primary/10 text-primary" : "text-muted-foreground",
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
