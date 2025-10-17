import type React from "react"
import { cn } from "@/lib/utils"

interface BadgeCustomProps {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "accent" | "muted"
  className?: string
}

export function BadgeCustom({ children, variant = "primary", className }: BadgeCustomProps) {
  const variants = {
    primary: "bg-primary/10 text-primary border border-primary/30",
    secondary: "bg-secondary/10 text-secondary border border-secondary/30",
    accent: "bg-accent/10 text-accent border border-accent/30",
    muted: "bg-muted/10 text-muted border border-muted/30",
  }

  return (
    <span className={cn("inline-block px-3 py-1 rounded-full text-xs font-semibold", variants[variant], className)}>
      {children}
    </span>
  )
}
