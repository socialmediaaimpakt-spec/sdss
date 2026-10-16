import { TrendingDown, Waves, ShieldAlert } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { problemCards } from "@/lib/site-data"

const icons = [TrendingDown, Waves, ShieldAlert]

export function CoreThesis() {
  return (
    <section id="thesis" className="relative scroll-mt-20 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Core Thesis"
          title="A strategic reality audit for modern infrastructure & EPC enterprises"
          description="Modern infrastructure and EPC entities navigate demanding operational parameters where traditional generalist consulting frameworks routinely fall short."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {problemCards.map((card, i) => {
            const Icon = icons[i]
            return (
              <Reveal key={card.title} delay={i * 0.1}>
                <article className="group h-full rounded-xl border border-border bg-card p-7 transition-colors hover:border-emerald/40">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-emerald">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-heading text-xl font-semibold text-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {card.body}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10 overflow-hidden rounded-xl border border-emerald/30 bg-navy p-8 text-navy-foreground md:p-12">
            <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-center md:gap-10">
              <p className="font-heading text-2xl font-semibold leading-tight text-emerald md:max-w-xs md:text-3xl">
                The Aegle Marmelos Strategic Approach
              </p>
              <p className="text-pretty text-lg leading-relaxed text-navy-foreground/80">
                We act strictly as a high-conviction advisory partnership and a
                seamless extension of corporate leadership teams — delivering
                practical execution where others deliver only recommendations.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
