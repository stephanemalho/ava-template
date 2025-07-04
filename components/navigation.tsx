"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"
import Image from "next/image"

const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Présentation", href: "/presentation" },
    { name: "Notre Équipe", href: "/equipe" },
    { name: "Séjours", href: "/sejours" },
    { name: "Réservations", href: "/reservations" },
    { name: "Contact", href: "/contact" },
]

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    return (
        <header className="flex h-16 items-center justify-between sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between mx-auto">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="h-10 w-10 relative">
                        <Image
                            src="/Logo-Ava_Bien_Etre-2-300x300.png"
                            alt="Équipe Aux Bien-Être"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <span className="text-xl font-bold text-primary">Ava Bien-Être</span>
                </Link>


                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                pathname === item.href ? "text-primary" : "text-muted-foreground",
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center space-x-2">
                    <ThemeToggle />

                    {/* Mobile Navigation */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <nav className="flex flex-col space-y-4 mt-8">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "text-sm font-medium transition-colors hover:text-primary",
                                            pathname === item.href ? "text-primary" : "text-muted-foreground",
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
