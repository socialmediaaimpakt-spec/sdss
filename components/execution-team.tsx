import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { executionTeam } from "@/lib/site-data"

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
}

export function ExecutionTeam() {
  return (
    <section className="scroll-mt-20 border-t border-border bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Core Execution Team"
          title="Specialized cross-functional specialists"
          description="A bench of domain operators executing across capital markets, trade finance, risk transfer, human capital and analytics."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {executionTeam.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.08}>
              <article className="flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-emerald/40">
                <div className="flex items-center gap-3">
                  <div
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary font-heading text-sm font-semibold text-navy"
                  >
                    {initials(p.name)}
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-foreground">
                      {p.name}
                    </h3>
                    <p className="text-[11px] font-medium uppercase tracking-wide text-emerald">
                      {p.role}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
