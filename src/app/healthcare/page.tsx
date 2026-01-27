"use client"

import { IndustryPageLayout } from "@/components/IndustryPageLayout"

export default function HealthcarePage() {
    return (
        <IndustryPageLayout
            title="Healthcare"
            subtitle="Reimagined"
            heroTag="Patient Experience"
            description="Empower patients with instant, empathetic answers. Reduce anxiety and improve health outcomes with AI-driven triage and scheduling that never sleeps."
            gradient="from-blue-500 to-cyan-500"
            trio={{
                demoTitle: "Patient Triage Demo",
                tryUrl: "/contact"
            }}
            challenges={[
                {
                    title: "24/7 Availability",
                    description: "Immediate responses to common queries like visiting hours, prep instructions, and location, any time of day.",
                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                },
                {
                    title: "Empathy & Tone Analysis",
                    description: "Detect patient distress and adjust response tone or escalate to a human nurse immediately.",
                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                },
                {
                    title: "HIPAA Compliant",
                    description: "Built on AWS HIPAA-eligible services with strict data encryption and access controls.",
                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                }
            ]}
            caseStudy={{
                title: "Use Case: Appointment Scheduling",
                description: "Reduce no-shows and administrative burden. Our conversational agent can book, reschedule, and cancel appointments directly into your EHR system.",
                metrics: ["40% Reduction in No-Shows", "2.5hr Admin Time Saved/Day"],
                quote: "The ability to handle rescheduling automatically has freed our front desk to focus on patients actually in the waiting room."
            }}
        />
    )
}
