import type React from "react"
import { cn } from "@/lib/utils"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  variant?: "primary" | "accent" | "rainbow"
}

export function GradientText({ children, className, variant = "primary" }: GradientTextProps) {
  const variants = {
    primary: "bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent",
    accent: "bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent",
    rainbow: "bg-gradient-to-r from-primary via-accent via-primary to-accent bg-clip-text text-transparent",
  }

  return <span className={cn(variants[variant], className)}>{children}</span>
}
