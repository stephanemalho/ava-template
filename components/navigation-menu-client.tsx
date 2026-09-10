"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"
import { ReservationCartDialog } from "./reservation-cart-dialog"
import { useReservationCart } from "./providers/reservation-cart-provider"

type NavItem = {
  name: string
  href: string
  children?: NavItem[]
}

type NavigationMenuClientProps = {
  items: NavItem[]
}

export function NavigationMenuClient({ items }: NavigationMenuClientProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { totalPeople } = useReservationCart()
  const isTransEnProvenceReservationsPage = pathname === "/reservations"

  return (
    <>
      <nav className="hidden md:flex items-center space-x-6">
        {items.map((item) => item.children ? (
          <div key={item.name} className="group relative">
            <button type="button" className="flex items-center gap-1 rounded-full p-1 text-sm font-medium text-white/85 transition-colors hover:text-white" aria-haspopup="true">
              {item.name}<ChevronDown className="h-4 w-4" aria-hidden="true" />
            </button>
            <div className="invisible absolute left-0 top-full z-50 mt-2 w-64 rounded-lg border bg-background p-2 opacity-0 shadow-lg transition-all group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              {item.children.map((child) => <Link key={child.href} href={child.href} className={cn("block rounded-md px-3 py-2 text-sm hover:bg-muted", pathname === child.href ? "bg-primary/10 text-primary" : "text-foreground")}>{child.name}</Link>)}
            </div>
          </div>
        ) : (
          <Link key={item.name} href={item.href} className={cn("rounded-full p-1 text-sm font-medium transition-colors text-white/85 hover:text-white", pathname === item.href ? "bg-white/15 text-white" : "")}>{item.name}</Link>
        ))}
      </nav>

      <div className="flex items-center space-x-2">
        <div className="relative">
          <ReservationCartDialog disabled={isTransEnProvenceReservationsPage} />
          {!isTransEnProvenceReservationsPage && totalPeople > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
              {totalPeople}
            </span>
          )}
        </div>
        <ThemeToggle />

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Ouvrir le menu principal">
              <Menu className="h-5 w-5 text-white" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-1/2 px-4">
            <SheetTitle className="sr-only">Menu principal</SheetTitle>
            <nav className="flex flex-col space-y-4 mt-8">
              {items.map((item) => (
                item.children ? (
                  <div key={item.name} className="space-y-1">
                    <p className="px-3 pt-2 text-sm font-semibold">{item.name}</p>
                    {item.children.map((child) => <Link key={child.href} href={child.href} onClick={() => setIsOpen(false)} className={cn("ml-3 block rounded-md px-3 py-2 text-sm transition-colors hover:text-primary", pathname === child.href ? "bg-primary/10 text-primary" : "text-muted-foreground")}>{child.name}</Link>)}
                  </div>
                ) : <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)} className={cn("rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary", pathname === item.href ? "bg-primary/10 text-primary" : "text-muted-foreground")}>{item.name}</Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}
