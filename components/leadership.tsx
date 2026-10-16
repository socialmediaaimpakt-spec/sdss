import Image from "next/image"
import { ShieldCheck } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { leadership } from "@/lib/site-data"

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
}

export function Leadership() {
  return (
    <section id="leadership" className="scroll-mt-20 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Leadership Profiles"
          title="An experienced principal partnership"
          description="A partner page built like a serious advisory firm — every mandate anchored to operational reality by experienced principals."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {leadership.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.08}>
              <article className="group flex h-full flex-col rounded-xl border border-border bg-card overflow-hidden transition-colors hover:border-emerald/40">
                {p.image && (
                  <div className="relative h-72 w-full overflow-hidden bg-muted">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(min-width: 1024px) 360px, (min-width: 768px) calc((100vw - 40px) / 2), calc(100vw - 40px)"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="flex flex-col gap-3 p-7">
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {p.name}
                    </h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-emerald">
                      {p.role}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal delay={0.16}>
            <article className="flex h-full flex-col justify-center rounded-xl border border-emerald/30 bg-navy p-7 text-navy-foreground">
              <ShieldCheck className="h-7 w-7 text-emerald" />
              <h3 className="mt-5 font-heading text-xl font-semibold">
                Direct C-Suite Governance
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-foreground/70">
                Every engagement is managed directly by these experienced
                principals to anchor corporate financial strategy directly to
                operational realities.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
