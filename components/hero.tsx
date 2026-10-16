"use client"

import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-card text-foreground">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/hero-infrastructure.png"
          alt=""
          className="h-full w-full object-cover opacity-[0.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-card/90 via-card/70 to-card" />
        <div className="absolute inset-0 grid-lines-dark opacity-50" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pb-20 pt-32 md:px-8 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center gap-2"
        >
          {["Institutional Advisory", "Structured Finance", "Strategy", "Risk & ESG"].map(
            (item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-emerald/35 bg-emerald/10 px-4 py-2 text-xs font-semibold tracking-wide text-emerald"
              >
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald" />
                {item}
              </span>
            ),
          )}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-4xl text-balance font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-navy sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Capital is not scarce. The right counsel to deploy it is.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground"
        >
          Aegle Marmelos Capital Advisors LLP acts as a high-conviction advisory
          partnership and a seamless extension of corporate leadership teams —
          transforming strategic intent into tangible outcomes for large
          corporates, business owners, investors and conglomerates.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#verticals"
            className="group inline-flex items-center justify-center gap-2 rounded-md bg-emerald px-7 py-3.5 text-sm font-semibold text-emerald-foreground transition-opacity hover:opacity-90"
          >
            Explore Advisory Verticals
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Nomenclature story */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 max-w-2xl border-l-2 border-emerald/50 pl-5"
        >
          <p className="label-eyebrow text-emerald">The Name</p>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
            Our name is inspired by{" "}
            <span className="italic text-navy">Aegle Marmelos</span>{" "}
            — commonly known as Bael, a sacred Indian plant offered to Lord
            Shiva. Renowned for its rich bioactive compounds and medicinal
            properties, Bael symbolizes resilience and healing. We embody this
            same spirit, serving as a seamless extension of our clients&apos;
            management teams.
          </p>
          <p className="mt-4 font-heading text-base italic text-emerald">
            &ldquo;Your Trusted Partner for Success.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  )
}
