"use client"

import { IndustryPageLayout } from "@/components/IndustryPageLayout"

export default function RetailPage() {
    return (
        <IndustryPageLayout
            title="Retail"
            subtitle="Personalized"
            heroTag="Commerce & Support"
            description="Turn support into sales. Offer instant order tracking, seamless returns, and personalized product recommendations across voice, chat, and SMS."
            gradient="from-purple-500 to-pink-500"
            trio={{
                demoTitle: "Order Status Bot",
                tryUrl: "/contact"
            }}
            challenges={[
                {
                    title: "Where is my Order? (WISMO)",
                    description: "Automate the #1 retail query. Connect to Shopify/Magento/Salesforce to give instant shipping updates.",
                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                },
                {
                    title: "Seasonal Scalability",
                    description: "Scale from 100 to 100,000 agents for Black Friday instantly. Pay only for what you use.",
                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                },
                {
                    title: "Omnichannel Returns",
                    description: "Allow customers to start a return via chat and finish it in-store, with context preserved perfectly.",
                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                }
            ]}
            caseStudy={{
                title: "Use Case: Automated Returns",
                description: "Reduce return processing costs by 80%. AI validates the return policy, generates a label, and schedules pickup automatically.",
                metrics: ["80% Lower Processing Cost", "4.8/5 CSAT Score"],
                quote: "Returns used to be a pain point. Now they are so easy that customers actually buy more because they trust the process."
            }}
        />
    )
}
