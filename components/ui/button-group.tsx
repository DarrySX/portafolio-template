import type React from "react"
import { cn } from "@/lib/utils"

interface ButtonGroupProps {
  children: React.ReactNode
  className?: string
}

export function ButtonGroup({ children, className }: ButtonGroupProps) {
  return <div className={cn("flex flex-wrap gap-3", className)}>{children}</div>
}
