import Link from "next/link"
import Image from "next/image"
import { NavigationMenuClient } from "./navigation-menu-client"

const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Présentation", href: "/presentation" },
    { name: "Notre équipe", href: "/notre-equipe" },
    {
        name: "Séjours",
        href: "/memoire-d-ames",
        children: [
            { name: "Mémoire d’Âmes · Saint-Usuge", href: "/memoire-d-ames" },
        ],
    },
    {
        name: "Réservations",
        href: "/reservations/memoire-d-ames",
        children: [
            { name: "Mémoire d’Âmes · Saint-Usuge", href: "/reservations/memoire-d-ames" },
        ],
    },
    { name: "Contact", href: "/contact" },
]

export function Navigation() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-[#4d6c4d]">
            <div className="mx-auto flex h-16 w-full max-w-full items-center justify-between px-4">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="h-10 w-10 relative">
                        <Image
                            src="/logo-ava-bien-etre-nouveau.png"
                            alt="Logo AVA Bien-Être"
                            fill
                            className="object-contain invert"
                            priority
                            sizes="40px"
                        />
                    </div>
                    <span className="text-xl font-bold text-white">Ava Bien-Être</span>
                </Link>
                <NavigationMenuClient items={navigation} />
            </div>
        </header>
    )
}
