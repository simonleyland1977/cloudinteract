"use client"

import { IndustryPageLayout } from "@/components/IndustryPageLayout"

export default function HealthcareUKPage() {
    return (
        <IndustryPageLayout
            title="Healthcare UK"
            subtitle="NHS & Private Care"
            heroTag="Patient Experience"
            description="Transform patient care with AI-driven solutions tailored for the NHS and UK private healthcare providers. GDPR-compliant, integrated with NHS systems, and designed for the unique challenges of the UK healthcare landscape."
            gradient="from-blue-500 to-cyan-500"
            trio={{
                demoTitle: "Patient Triage Demo",
                tryUrl: "/contact"
            }}
            challenges={[
                {
                    title: "NHS Integration",
                    description: "Seamless integration with NHS Digital, SystmOne, EMIS, and other UK-specific healthcare systems for automated appointment booking and patient record access.",
                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                },
                {
                    title: "GDPR & Data Protection",
                    description: "Built-in GDPR compliance with UK data residency, patient consent management, and adherence to NHS Digital security standards.",
                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                },
                {
                    title: "24/7 NHS 111 Support",
                    description: "Reduce pressure on NHS 111 services with AI triage that handles common queries, symptom checking, and urgent vs non-urgent routing.",
                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                }
            ]}
            caseStudy={{
                title: "Use Case: GP Surgery Appointment Management",
                description: "Reduce administrative burden on GP receptionists. Our AI handles appointment booking, cancellations, prescription renewals, and patient queries, freeing staff to focus on in-person patient care.",
                metrics: ["45% Reduction in Reception Calls", "3.2hr Admin Time Saved/Day", "92% Patient Satisfaction"],
                quote: "The AI has transformed how we manage our appointment book. Patients can book, reschedule, or cancel 24/7, and our reception staff can focus on patients in the waiting room instead of being on the phone constantly."
            }}
        />
    )
}
