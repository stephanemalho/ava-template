"use client"

import { Mail } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

export type PaymentConfirmationMessage = {
    title: string
    description: string
    className: string
    details?: {
        label: string
        value: string
    }[]
    contactEmail?: string
}

type PaymentConfirmationDialogProps = {
    message: PaymentConfirmationMessage
}

export function PaymentConfirmationDialog({
    message,
}: PaymentConfirmationDialogProps) {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(true)

    const handleOpenChange = (open: boolean) => {
        setIsOpen(open)

        if (!open) {
            router.replace("/reservations", { scroll: false })
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={handleOpenChange}>
            <DialogContent className="max-w-xl">
                <DialogHeader>
                    <DialogTitle>{message.title}</DialogTitle>
                    <DialogDescription>{message.description}</DialogDescription>
                </DialogHeader>

                <div
                    className={`rounded-lg border p-4 text-sm ${message.className}`}
                >
                    {message.details ? (
                        <dl className="grid gap-3 rounded-md border border-current/20 bg-white/50 p-3 sm:grid-cols-2">
                            {message.details.map((detail) => (
                                <div key={detail.label}>
                                    <dt className="text-xs font-medium opacity-80">
                                        {detail.label}
                                    </dt>
                                    <dd className="font-semibold">
                                        {detail.value}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    ) : null}

                    {message.contactEmail ? (
                        <section className="mt-4 rounded-md border border-current/20 bg-white/50 p-3">
                            <h2 className="font-semibold">
                                Contacter AVA Bien-Être
                            </h2>
                            <p className="mt-1 text-xs opacity-80">
                                Une question sur la suite de votre réservation ?
                                L’équipe AVA Bien-Être reste disponible pour vous
                                accompagner.
                            </p>
                            <a
                                className="mt-3 inline-flex items-center gap-2 font-semibold underline underline-offset-4"
                                href={`mailto:${message.contactEmail}`}
                            >
                                <Mail className="h-4 w-4" aria-hidden="true" />
                                {message.contactEmail}
                            </a>
                        </section>
                    ) : null}
                </div>

                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="button">Fermer</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
