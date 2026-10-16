"use client"

import { motion } from "motion/react"
import { Building2, Landmark, ShieldCheck, Leaf, ArrowUpRight, ArrowUp } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { verticals } from "@/lib/site-data"

const verticalIcons = [Building2, Landmark, ShieldCheck, Leaf]

export function Verticals() {
  return (
    <section id="verticals" className="scroll-mt-20 border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <SectionHeading
          eyebrow="Advisory Verticals"
          title="Four integrated verticals, one execution partner"
          description="Our complete service index. Every practice area and every service we deliver, laid out in full."
        />

        {/* Index overview — a table-of-contents strip */}
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {verticals.map((v, i) => {
            const Icon = verticalIcons[i]
            return (
              <a
                key={v.id}
                href={`#vertical-${v.id}`}
                className="group flex flex-col gap-3 bg-card p-5 transition-colors hover:bg-navy"
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-5 w-5 text-emerald" />
                  <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-emerald">
                    {v.index}
                  </span>
                </div>
                <p className="font-heading text-sm font-semibold leading-snug text-foreground transition-colors group-hover:text-navy-foreground">
                  {v.title}
                </p>
                <span className="mt-auto inline-flex items-center gap-1 text-xs font-medium text-emerald">
                  View services
                  <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            )
          })}
        </div>
      </div>

      {/* Verticals as editorial index bands */}
      {verticals.map((vertical, vi) => {
        const Icon = verticalIcons[vi]
        const alternate = vi % 2 === 1
        return (
          <div
            key={vertical.id}
            id={`vertical-${vertical.id}`}
            className={`scroll-mt-24 border-t border-border ${alternate ? "bg-secondary/50" : "bg-background"}`}
          >
            <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20 lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
              {/* Identity rail — sticky on desktop */}
              <div className="lg:sticky lg:top-24 lg:self-start">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald text-emerald-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-sm text-emerald">
                      {"Vertical "}
                      {vertical.index}
                    </span>
                  </div>
                  <h3 className="mt-6 font-heading text-3xl font-semibold text-foreground text-balance md:text-4xl">
                    {vertical.title}
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                    {vertical.subtitle}
                  </p>
                </motion.div>
              </div>

              {/* Service index */}
              <div className="mt-10 lg:mt-0">
                {vertical.groups.map((group, gi) => (
                  <motion.div
                    key={group.heading}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className={`py-8 first:pt-0 ${gi > 0 ? "border-t border-border" : ""}`}
                  >
                    <h4 className="font-heading text-xl font-semibold text-foreground text-balance">
                      {group.heading}
                    </h4>
                    <ul className="mt-5 flex flex-col gap-3">
                      {group.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-sm leading-relaxed text-muted-foreground md:text-[15px]"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2.5 h-0.5 w-4 shrink-0 rounded-full bg-emerald"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    {group.outcome && (
                      <p className="mt-5 flex gap-3 text-sm leading-relaxed md:text-[15px]">
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-0.5 w-4 shrink-0 rounded-full bg-emerald"
                        />
                        <span className="font-medium text-foreground">
                          {group.outcome}
                        </span>
                      </p>
                    )}
                  </motion.div>
                ))}

                {/* Footprint */}
                {vertical.footprint && (
                  <div className="mt-2 rounded-xl bg-navy p-6 text-navy-foreground md:p-8">
                    <p className="label-eyebrow text-emerald">{vertical.footprint.title}</p>
                    <div className="mt-6 grid gap-8 sm:grid-cols-2">
                      {vertical.footprint.columns.map((col) => (
                        <div key={col.heading}>
                          <h4 className="font-heading text-base font-semibold text-navy-foreground">
                            {col.heading}
                          </h4>
                          <ul className="mt-4 flex flex-col gap-2">
                            {col.items.map((item) => (
                              <li
                                key={item}
                                className="flex gap-3 text-sm text-navy-foreground/80"
                              >
                                <span
                                  aria-hidden="true"
                                  className="mt-2.5 h-0.5 w-4 shrink-0 rounded-full bg-emerald"
                                />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Back to vertical selection */}
                <div className="mt-10 flex justify-center lg:justify-start">
                  <a
                    href="#verticals"
                    className="group inline-flex items-center gap-2 rounded-full border border-emerald/40 bg-emerald/5 px-6 py-3 text-sm font-semibold text-emerald transition-colors hover:bg-emerald hover:text-emerald-foreground"
                  >
                    <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                    Back to all verticals
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}
