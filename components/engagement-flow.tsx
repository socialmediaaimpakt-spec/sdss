import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { engagementPhases } from "@/lib/site-data"

export function EngagementFlow() {
  return (
    <section
      id="process"
      className="relative scroll-mt-20 overflow-hidden bg-navy py-24 text-navy-foreground md:py-32"
    >
      <div className="absolute inset-0 grid-lines opacity-25" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          dark
          eyebrow="Engagement Process"
          title="From assessment to financial closure"
        />

        <div className="relative mt-16">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-white/10 lg:block" />
          <div className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {engagementPhases.map((phase, i) => (
              <Reveal key={phase.title} delay={i * 0.12}>
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald/40 bg-navy font-heading text-xl font-semibold text-emerald">
                    {phase.step}
                  </div>
                  <h3 className="mt-6 font-heading text-xl font-semibold text-navy-foreground">
                    {phase.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-foreground/65">
                    {phase.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-16 border-t border-white/10 pt-8 text-sm leading-relaxed text-navy-foreground/60">
            All client advisory engagements are strictly senior-led directly by
            experienced partners with performance-aligned, success-linked fee
            metrics.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
