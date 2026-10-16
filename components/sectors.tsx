import Image from "next/image"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { sectors } from "@/lib/site-data"

const sectorImages = [
  "/sector-infrastructure.png",
  "/sector-energy.png",
  "/sector-social.png",
  "/sector-economic.png",
]

export function Sectors() {
  return (
    <section id="sectors" className="scroll-mt-20 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Sector Coverage"
          title="High-impact segments across the asset lifecycle"
          description="Deep mandate coverage spanning hard infrastructure, energy transition, social infrastructure and economic development."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-emerald/40">
                <div className="relative aspect-[16/10] overflow-hidden bg-navy">
                  <Image
                    src={sectorImages[i] || "/placeholder.svg"}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute right-4 top-3 font-heading text-2xl font-semibold text-emerald/50">
                    {s.index}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
