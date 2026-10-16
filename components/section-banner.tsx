import Image from "next/image"

export function SectionBanner() {
  return (
    <section aria-label="Infrastructure network illustration" className="relative overflow-hidden bg-navy">
      <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Image
          src="/banner-network.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom opacity-70"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-navy/70 via-transparent to-navy/30"
        />
        <blockquote className="relative mx-auto max-w-3xl text-center">
          <p className="text-balance font-heading text-2xl font-semibold leading-snug text-navy-foreground md:text-3xl">
            {"From bid readiness to financial closure — one connected network of capital, capacity, and conviction."}
          </p>
          <footer className="mt-5 font-mono text-xs uppercase tracking-[0.25em] text-emerald">
            Aegle Marmelos
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
