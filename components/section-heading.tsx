import { cn } from "@/lib/utils"

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className,
}: {
  eyebrow: string
  title: string
  description?: string
  align?: "left" | "center"
  dark?: boolean
  className?: string
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3",
          align === "center" && "justify-center",
        )}
      >
        <span className="h-px w-8 bg-emerald" />
        <span
          className={cn(
            "label-eyebrow",
            dark ? "text-emerald" : "text-emerald",
          )}
        >
          {eyebrow}
        </span>
      </div>
      <h2
        className={cn(
          "mt-4 text-balance font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-[2.75rem]",
          dark ? "text-navy-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-pretty text-base leading-relaxed md:text-lg",
            dark ? "text-navy-foreground/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
