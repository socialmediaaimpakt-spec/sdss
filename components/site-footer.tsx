"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { cn } from "@/lib/utils"
import { LeafMark } from "@/components/leaf-mark"
import { navLinks, disclaimerParagraphs } from "@/lib/site-data"

export function SiteFooter() {
  const [open, setOpen] = useState(false)

  return (
    <footer className="border-t border-white/10 bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <LeafMark className="h-8 w-8 text-emerald" />
              <div className="leading-none">
                <p className="font-heading text-lg font-semibold">
                  Aegle Marmelos
                </p>
                <p className="label-eyebrow mt-1 text-[10px] text-emerald/90">
                  Capital Advisors LLP
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-navy-foreground/60">
              Institutional Advisory · Structured Finance · Strategy · Risk &amp;
              ESG. Your Trusted Partner for Success — serving large corporates,
              business owners, investors and conglomerates.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            <p className="label-eyebrow text-emerald">Navigate</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-navy-foreground/65 transition-colors hover:text-emerald"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        </div>

        {/* Collapsible disclaimer */}
        <div className="mt-14 rounded-xl border border-white/10 bg-white/[0.02]">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-7"
          >
            <span className="label-eyebrow text-navy-foreground/55">
              Disclaimer &amp; No Liability Statement
            </span>
            <ChevronDown
              className={cn(
                "h-4 w-4 shrink-0 text-navy-foreground/55 transition-transform",
                open && "rotate-180 text-emerald",
              )}
            />
          </button>
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="space-y-4 px-5 pb-6 md:px-7">
                  {disclaimerParagraphs.map((p, i) => (
                    <p
                      key={i}
                      className="text-xs leading-relaxed text-navy-foreground/55"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-navy-foreground/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Confidential — Not for distribution. All rights reserved. © 2026
            Aegle Marmelos Capital Advisors LLP.
          </p>
          <p>Your Trusted Partner for Success.</p>
        </div>
      </div>
    </footer>
  )
}
