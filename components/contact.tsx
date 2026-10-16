import { Download, Mail, Globe, Link2, AtSign } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { contactDetails } from "@/lib/site-data"

const contactIcons: Record<string, typeof Mail> = {
  Email: Mail,
  Website: Globe,
  LinkedIn: Link2,
  Instagram: AtSign,
}

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-emerald/20 bg-navy px-6 py-14 text-navy-foreground md:px-14 md:py-20">
            <div className="absolute inset-0 grid-lines opacity-25" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-emerald" />
                <span className="label-eyebrow text-emerald">Contact</span>
              </div>
              <h2 className="mt-5 max-w-2xl text-balance font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Let&apos;s build something enduring together.
              </h2>
              <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-navy-foreground/75">
                We welcome the opportunity to partner with you. Reach out to
                discuss your strategic, financing, and risk advisory needs.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/aegle-marmelos-executive-credentials.pdf"
                  download="Aegle Marmelos Capital Advisors LLP - Executive Credentials.pdf"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald px-7 py-3.5 text-sm font-semibold text-emerald-foreground transition-opacity hover:opacity-90"
                >
                  <Download className="h-4 w-4" />
                  Download Credentials
                </a>
              </div>

              <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
                {contactDetails.map((c) => {
                  const Icon = contactIcons[c.label] ?? Mail
                  return (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex flex-col gap-2 bg-navy p-5 transition-colors hover:bg-white/[0.03]"
                    >
                      <Icon className="h-5 w-5 text-emerald" />
                      <span className="label-eyebrow text-[10px] text-navy-foreground/50">
                        {c.label}
                      </span>
                      <span className="break-words text-sm font-medium text-navy-foreground transition-colors group-hover:text-emerald">
                        {c.value}
                      </span>
                    </a>
                  )
                })}
              </div>

              <p className="mt-6 text-xs text-navy-foreground/45">
                Website link shown is a placeholder — final link to be updated.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
