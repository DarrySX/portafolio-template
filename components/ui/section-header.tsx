import { cn } from "@/lib/utils"

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
      <h2 className={cn("text-4xl md:text-5xl font-bold mb-4", titleClassName)}>{title}</h2>
      {description && <p className="text-muted text-lg max-w-2xl mx-auto">{description}</p>}
    </div>
  )
}
