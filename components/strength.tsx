import { Crown, Handshake, Network } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { Counter } from "@/components/counter"
import { benchmarks, standOut } from "@/lib/site-data"

const standOutIcons = [Crown, Handshake, Network]

export function Strength() {
  return (
    <section
      id="strength"
      className="relative scroll-mt-20 overflow-hidden bg-navy py-24 text-navy-foreground md:py-32"
    >
      <div className="absolute inset-0 grid-lines opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          dark
          eyebrow="Institutional Strength"
          title="Scale, footprint and execution capability"
          description="Senior operators with deep cross-border visibility and a demonstrated capital markets footprint."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-3">
          {benchmarks.map((b, i) => (
            <Reveal
              key={b.label}
              delay={i * 0.12}
              className="bg-navy"
            >
              <div className="h-full p-8 md:p-10">
                <div className="font-heading text-5xl font-semibold tracking-tight text-emerald md:text-6xl">
                  <Counter value={b.value} suffix={b.suffix} />
                </div>
                <p className="mt-4 font-heading text-lg font-medium text-navy-foreground">
                  {b.label}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-navy-foreground/65">
                  {b.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <Reveal>
            <p className="label-eyebrow text-emerald">Why Aegle Marmelos Stands Out</p>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {standOut.map((item, i) => {
              const Icon = standOutIcons[i]
              return (
                <Reveal key={item.title} delay={i * 0.1}>
                  <article className="h-full rounded-xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-emerald/40">
                    <Icon className="h-6 w-6 text-emerald" />
                    <h3 className="mt-5 font-heading text-lg font-semibold text-navy-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-navy-foreground/65">
                      {item.body}
                    </p>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
