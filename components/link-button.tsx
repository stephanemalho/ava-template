import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { VariantProps } from "class-variance-authority"
import { buttonVariants } from "@/components/ui/button"
import type { ReactNode } from "react"

type LinkButtonProps = {
  href: string
  children: ReactNode
  className?: string
} & VariantProps<typeof buttonVariants>

export function LinkButton({ href, children, className, variant, size }: LinkButtonProps) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <Link href={href}>{children}</Link>
    </Button>
  )
}
