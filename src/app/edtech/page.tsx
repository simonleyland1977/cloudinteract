"use client"

import { IndustryPageLayout } from "@/components/IndustryPageLayout"

export default function EdtechPage() {
    return (
        <IndustryPageLayout
            title="Edtech & Education"
            subtitle="Accessible"
            heroTag="Student Success"
            description="Support students and faculty 24/7. Handle enrollment spikes and provide multilingual AI tutoring support without burning out staff."
            gradient="from-orange-400 to-amber-500"
            trio={{
                demoTitle: "Student Support Bot",
                tryUrl: "/contact"
            }}
            challenges={[
                {
                    title: "Enrollment Spikes",
                    description: "Handle 10x traffic volume during enrollment weeks without hiring temporary staff.",
                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                },
                {
                    title: "Multilingual Support",
                    description: "Instantly translate calls and chats into 30+ languages to support international students.",
                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
                },
                {
                    title: "IT Helpdesk",
                    description: "Resolve password resets and LMS login issues instantly via AI, viewing screens securely.",
                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                }
            ]}
            caseStudy={{
                title: "Use Case: Enrollment FAQ",
                description: "Answer thousands of repetitive questions about deadlines, fees, and course prerequisites instantly.",
                metrics: ["95% Answer Accuracy", "Zero Wait Times"],
                quote: "Students expect answers now, at 2 AM. With our AI agent, they get them, and our staff gets to sleep."
            }}
        />
    )
}
