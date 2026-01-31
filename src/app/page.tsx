import { siteConfig } from "@/config/site"
import { StandardHero } from "@/components/StandardHero"
import { Hero3Col } from "@/components/Hero3Col"
import { FeaturesSection } from "@/components/FeaturesSection"
import { SolutionsSection } from "@/components/SolutionsSection"
import { WhyConnectSection } from "@/components/WhyConnectSection"
import { MarketplaceShowcase } from "@/components/MarketplaceShowcase"
import { LatestBlogPosts } from "@/components/LatestBlogPosts"
import { MarketingHeader } from "@/components/MarketingHeader"
import { MarketingFooter } from "@/components/MarketingFooter"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "CloudInteract | Agentic AI & Amazon Connect Solutions",
  description: "Transform CX with CloudInteract. We provide managed Amazon Connect services, migration expertise, and Agentic AI solutions powered by Amazon Bedrock.",
}

export default async function Home() {
  // CloudInteract Layout with 3 Pillars
  if (siteConfig.landingPage.layout === "split") {
    return (
      <div className="flex flex-col min-h-screen bg-slate-950">
        <MarketingHeader />
        <main className="flex-grow">
          <Hero3Col />
          <WhyConnectSection />
          <MarketplaceShowcase />
          <SolutionsSection />
          <LatestBlogPosts />
        </main>
        <MarketingFooter />
      </div>
    )
  }

  // Standard Layout (Fiftysix)
  return <StandardHero />
}
