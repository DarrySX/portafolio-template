import type React from "react"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: React.ReactNode
  id?: string
  className?: string
  containerClassName?: string
}

export function SectionWrapper({ children, id, className, containerClassName }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-20 md:py-32 relative", className)}>
      <div className={cn("container-custom", containerClassName)}>{children}</div>
    </section>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  className?: string
  titleClassName?: string
}

export function SectionHeader({ title, subtitle, description, className, titleClassName }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 md:mb-16 text-center", className)}>
      {subtitle && <p className="text-primary font-semibold text-sm md:text-base mb-2">{subtitle}</p>}
      <h2 className={cn("text-4xl md:text-5xl font-bold mb-4 gradient-text", titleClassName)}>{title}</h2>
      {description && <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{description}</p>}
    </div>
  )
}
