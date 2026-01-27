"use client"

import { siteConfig } from "@/config/site"
import { StandardHero } from "@/components/StandardHero"
import { SplitHero } from "@/components/SplitHero"
import { FeaturesSection } from "@/components/FeaturesSection"
import { SolutionsSection } from "@/components/SolutionsSection"
import { MarketingHeader } from "@/components/MarketingHeader"
import { MarketingFooter } from "@/components/MarketingFooter"

export default function Home() {
  // Split Layout (CloudInteract)
  if (siteConfig.landingPage.layout === "split") {
    return (
      <div className="flex flex-col min-h-screen bg-slate-950">
        <div className="bg-red-600 text-white text-center font-bold p-2">DEBUG: FROM CLOUDINTERACT FOLDER</div>
        <MarketingHeader />
        <main className="flex-grow">
          <SplitHero />
          <SolutionsSection />
        </main>
        <MarketingFooter />
      </div>
    )
  }

  // Standard Layout (Fiftysix)
  return <StandardHero />
}
