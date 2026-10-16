import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { CoreThesis } from "@/components/core-thesis"
import { Strength } from "@/components/strength"
import { SectionBanner } from "@/components/section-banner"
import { Leadership } from "@/components/leadership"
import { ExecutionTeam } from "@/components/execution-team"
import { Verticals } from "@/components/verticals"
import { Sectors } from "@/components/sectors"
import { EngagementFlow } from "@/components/engagement-flow"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <CoreThesis />
        <Strength />
        <SectionBanner />
        <Leadership />
        <ExecutionTeam />
        <Verticals />
        <Sectors />
        <EngagementFlow />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
