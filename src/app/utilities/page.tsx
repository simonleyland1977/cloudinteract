"use client"

import { IndustryPageLayout } from "@/components/IndustryPageLayout"

export default function UtilitiesPage() {
    return (
        <IndustryPageLayout
            title="Utilities"
            subtitle="Resilient"
            heroTag="Energy & Water"
            description="Be there when customers need you most. Handle massive outage spikes with grace and provide proactive alerts that reduce inbound call volume."
            gradient="from-yellow-500 to-red-500"
            trio={{
                demoTitle: "Outage Reporter",
                tryUrl: "/contact"
            }}
            challenges={[
                {
                    title: "Storm Surge Handling",
                    description: "When the power goes out, calls spike 1000x. AI handles the surge, logging reports and giving estimates without human agents.",
                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                },
                {
                    title: "Proactive Notifications",
                    description: "Send SMS and voice alerts about planned maintenance or restoration times, stopping calls before they happen.",
                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                },
                {
                    title: "Bill Pay Automation",
                    description: "Secure, PCI-compliant IVR payments that let customers pay bills or set up payment plans 24/7.",
                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                }
            ]}
            caseStudy={{
                title: "Use Case: Outage Management",
                description: "During major storms, our AI manages 100% of outage reports, integrating with the grid management system to map faults automatically.",
                metrics: ["10,000 Concurrent Calls Processed", "0 Dropped Calls"],
                quote: "In a crisis, reliable information is safety. CloudInteract ensures every customer gets heard, even when our lines are melted."
            }}
            cta={{
                title: "Build resilience into your service.",
                href: "/contact"
            }}
        />
    )
}
