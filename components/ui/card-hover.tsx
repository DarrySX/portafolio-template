"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface CardHoverProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function CardHover({ children, className, onClick }: CardHoverProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group relative p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm",
        "hover:border-primary/50 hover:bg-card/80 transition-all duration-300",
        "hover:shadow-lg hover:shadow-primary/10 cursor-pointer",
        className,
      )}
    >
      {children}
    </div>
  )
}
