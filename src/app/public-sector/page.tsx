"use client"

import { IndustryPageLayout } from "@/components/IndustryPageLayout"

export default function PublicSectorPage() {
    return (
        <IndustryPageLayout
            title="Public Sector"
            subtitle="Modernized"
            heroTag="Citizen Services"
            description="Transform how citizens interact with government. Deliver accessible, secure, and efficient services that build trust and reduce backlog."
            gradient="from-slate-500 to-blue-600"
            trio={{
                demoTitle: "Citizen Services Portal",
                tryUrl: "/contact"
            }}
            challenges={[
                {
                    title: "Accessibility First",
                    description: "Compliant with WCAG 2.1 and Section 508. Voice and chat interfaces that work for everyone, including those with disabilities.",
                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                },
                {
                    title: "Secure & Compliant",
                    description: "Ready for FedRAMP and GovCloud deployment. Keep citizen data safe while maintaining transparency.",
                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                },
                {
                    title: "Scales with Demand",
                    description: "Handle tax season spikes or emergency response surges without infrastructure collapse or wait times.",
                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" /></svg>
                }
            ]}
            caseStudy={{
                title: "Use Case: DMV & Permitting",
                description: "Automate 60% of routine inquiries about license renewals, permit status, and office hours. Let staff focus on complex cases.",
                metrics: ["60% Call Deflection", "90% Citizen Satisfaction"],
                quote: "Citizens just want answers. By giving them instant answers via AI, we reduced anger at the counter significantly."
            }}
            cta={{
                title: "Modernize your agency today.",
                href: "/contact"
            }}
        />
    )
}
