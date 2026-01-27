"use client"

import { IndustryPageLayout } from "@/components/IndustryPageLayout"

export default function FinancePage() {
    return (
        <IndustryPageLayout
            title="Financial Services"
            subtitle="Secured"
            heroTag="Banking & Insurance"
            description="Deliver secure, personalized banking experiences that build trust. Detect fraud instantly while offering seamless support across every channel."
            gradient="from-emerald-500 to-teal-600"
            trio={{
                demoTitle: "Secure Banking Assistant",
                tryUrl: "/contact"
            }}
            challenges={[
                {
                    title: "Bank-Grade Security",
                    description: "PCI-DSS compliant payments and biometric authentication ensuring customer assets are always protected.",
                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                },
                {
                    title: "Fraud Prevention",
                    description: "Real-time voice ID and analysis to detect fraudsters before they access sensitive account information.",
                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                },
                {
                    title: "Compliance Automation",
                    description: "Automatic redaction of sensitive data (PII) and automated call summaries for audit trails.",
                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                }
            ]}
            caseStudy={{
                title: "Use Case: Loan Application Status",
                description: "Deflect 70% of 'What is the status of my loan?' calls. Authenticated users get instant updates without waiting in queue.",
                metrics: ["70% Inquiry Automation", "15% Higher Conversion"],
                quote: "Our loan officers used to spend half their day answering status checks. Now they spend that time closing new business."
            }}
            cta={{
                title: "Secure your customer experience.",
                href: "/contact"
            }}
        />
    )
}
