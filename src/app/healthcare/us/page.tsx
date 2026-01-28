"use client"

import { IndustryPageLayout } from "@/components/IndustryPageLayout"

export default function HealthcareUSPage() {
    return (
        <IndustryPageLayout
            title="Healthcare US"
            subtitle="HIPAA-Compliant Solutions"
            heroTag="Patient Experience"
            description="Empower patients and reduce operational costs with HIPAA-compliant AI solutions designed for US healthcare providers. Integrate with Epic, Cerner, and major insurance systems while maintaining the highest security standards."
            gradient="from-blue-500 to-cyan-500"
            trio={{
                demoTitle: "Patient Triage Demo",
                tryUrl: "/contact"
            }}
            challenges={[
                {
                    title: "HIPAA Compliance",
                    description: "Built on AWS HIPAA-eligible services with BAA agreements, end-to-end encryption, audit logging, and strict access controls to protect patient PHI.",
                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                },
                {
                    title: "EHR Integration",
                    description: "Native integration with Epic, Cerner, Meditech, and Allscripts for real-time appointment scheduling, patient data access, and automated documentation.",
                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                },
                {
                    title: "Insurance Verification",
                    description: "Automated insurance eligibility checks, co-pay calculations, and pre-authorization support integrated with major US payers (UHC, Aetna, BCBS).",
                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                }
            ]}
            caseStudy={{
                title: "Use Case: Hospital System Appointment & Billing",
                description: "Reduce no-shows, streamline insurance verification, and cut administrative costs. Our conversational AI handles appointment scheduling, insurance verification, payment collection, and patient reminders across your entire health system.",
                metrics: ["40% Reduction in No-Shows", "60% Fewer Insurance Denials", "$2.1M Annual Cost Savings"],
                quote: "The automated insurance verification alone has saved us millions in denied claims. Patients get real-time eligibility information, and our billing team can focus on complex cases instead of routine verification calls."
            }}
        />
    )
}
