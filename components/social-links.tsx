"use client"

import { Instagram, Youtube } from "lucide-react"
import { siteConfig } from "@/lib/seo-config"

const iconClassName = "h-4 w-4"
const itemClassName = "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"

export function SocialLinks() {
    return (
        <div className="fixed bottom-4 right-4 z-40 flex items-center gap-1 rounded-full border border-border bg-background/95 p-1.5 shadow-lg backdrop-blur-sm" aria-label="Réseaux sociaux">
            <a href="https://www.facebook.com/share/1JvHSZgg1k/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className={itemClassName} aria-label="Facebook Ava Bien-Être (nouvel onglet)" title="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" className={iconClassName} aria-hidden="true">
                    <path d="M13.5 22v-9h3l.5-3.5h-3.5V7.25c0-1 .3-1.75 1.75-1.75H17V2.35A23 23 0 0 0 14.45 2C11.9 2 10 3.55 10 6.4v3.1H7V13h3v9h3.5Z" />
                </svg>
            </a>
            <a
                href="https://www.instagram.com/ava.bienetre?cplk=MXJycnV5cXV0NmZ3dA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Ava Bien-Être (fenêtre popup)"
                title="Instagram"
                className={itemClassName}
                onClick={(event) => {
                    window.open(event.currentTarget.href, "_blank", "popup,width=540,height=720,noopener,noreferrer")
                    event.preventDefault()
                }}
            >
                <Instagram className={iconClassName} strokeWidth={1.7} aria-hidden="true" />
            </a>
            <a
                href={`https://wa.me/${siteConfig.contact.telephone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contacter Ava Bien-Être sur WhatsApp (nouvel onglet)"
                title="WhatsApp"
                className={itemClassName}
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={iconClassName} aria-hidden="true">
                    <path d="M21 11.5a9 9 0 0 1-13.4 7.9L3 21l1.6-4.6A9 9 0 1 1 21 11.5Z" />
                    <path d="M8.2 7.5c-.5 0-1.2.8-1.2 1.8 0 2.6 3.7 6.3 6.4 6.3 1 0 1.9-.7 1.9-1.2l-2.3-1.3-.9.9c-1.4-.6-2.5-1.7-3.1-3.1l.9-.9-1.3-2.5Z" />
                </svg>
            </a>
            <span className={itemClassName} role="img" aria-label="YouTube — lien à venir" title="YouTube — lien à venir">
                <Youtube className={iconClassName} strokeWidth={1.7} aria-hidden="true" />
            </span>
        </div>
    )
}
