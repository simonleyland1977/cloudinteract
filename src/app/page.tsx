"use client"

import { siteConfig } from "@/config/site"
import { StandardHero } from "@/components/StandardHero"
import { SplitHero } from "@/components/SplitHero"
import { FeaturesSection } from "@/components/FeaturesSection"
import { SolutionsSection } from "@/components/SolutionsSection"
import { WhyConnectSection } from "@/components/WhyConnectSection"
import { MarketingHeader } from "@/components/MarketingHeader"
import { MarketingFooter } from "@/components/MarketingFooter"

export default function Home() {
  // Split Layout (CloudInteract)
  if (siteConfig.landingPage.layout === "split") {
    return (
      <div className="flex flex-col min-h-screen bg-slate-950">
        <MarketingHeader />
        <main className="flex-grow">
          <SplitHero />
          <WhyConnectSection />
          <SolutionsSection />
        </main>
        <MarketingFooter />
      </div>
    )
  }

  // Standard Layout (Fiftysix)
  return <StandardHero />
}
