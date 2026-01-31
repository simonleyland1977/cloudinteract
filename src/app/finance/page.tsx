"use client"

import { MarketingHeader } from "@/components/MarketingHeader"
import { MarketingFooter } from "@/components/MarketingFooter"
import { useState, useEffect } from "react"
import { Shield, Building2, FileText, Users, Zap, TrendingUp, Check, Globe, Lock, CreditCard, Banknote } from "lucide-react"
import Link from "next/link"
import { ChallengeSolution, type Challenge } from "@/components/industry/ChallengeSolution"
import { UseCases, type UseCase } from "@/components/industry/UseCases"
import { IndustryStats, type Stat } from "@/components/industry/IndustryStats"

type Region = 'uk' | 'us'


import { useRegion } from "@/context/RegionContext"

export default function FinancePage() {
    const { region: selectedRegion } = useRegion()
    // Content definition follows...

    const content = {
        uk: {
            color: 'blue',
            title: 'UK Financial Services & Banking',
            subtitle: 'Secure, compliant, and AI-driven CX for FCA-regulated institutions. Banking, Wealth, and Insurance.',
            compliance: 'FCA & PSD2 Compliant',
            stats: [
                { label: "Fraud Prevention", value: "40", suffix: "%", description: "Reduction in fraud losses" },
                { label: "Compliance", value: "100", suffix: "%", description: "FCA & PCI DSS" },
                { label: "Authentication", value: "<10", suffix: "s", description: "Voice Biometric Speed" },
                { label: "Cost Efficiency", value: "35", suffix: "%", description: "Lower cost to serve" }
            ] as Stat[],
            challenges: [
                {
                    title: "Identity Theft",
                    problem: "Traditional KBA (Knowledge Based Auth) is insecure and frustrates customers.",
                    solution: "Voice Biometrics authenticates users passively within seconds, preventing account takeovers.",
                    icon: Shield
                },
                {
                    title: "Regulatory Burden",
                    problem: "Strict FCA rules on call recording, retention, and script adherence create compliance risks.",
                    solution: "Real-time AI monitoring ensures 100% script adherence and automated redaction of PCI data.",
                    icon: FileText
                },
                {
                    title: "Legacy Core",
                    problem: "Customer data trapped in ancient mainframe banking cores limits digital innovation.",
                    solution: "CloudInteract overlays modern AI channels while securely fetching data from legacy systems.",
                    icon: Building2
                }
            ] as Challenge[],
            useCases: [
                {
                    title: "High Street Bank",
                    description: "Voice-first mobile app integration for balance checks and transfers.",
                    outcome: "Deflected 60% of routine balance inquiries from the contact center.",
                    stats: "60%"
                },
                {
                    title: "Wealth Manager",
                    description: "Hyper-personalized concierge service for high-net-worth clients.",
                    outcome: "Increased client retention by 15% via proactive portfolio updates.",
                    stats: "15%"
                },
                {
                    title: "Auto Insurer",
                    description: "AI-driven First Notice of Loss (FNOL) automation via WhatsApp.",
                    outcome: "Reduced claim processing time from 5 days to 24 hours.",
                    stats: "5x"
                }
            ] as UseCase[],
            features: [
                { icon: Shield, title: 'FCA Compliance', description: 'Full compliance with Conduct Rules and financial promo standards' },
                { icon: Building2, title: 'Open Banking', description: 'CMA9 API integration for account aggregation' },
                { icon: Lock, title: 'PSD2 & SCA', description: 'Strong Customer Authentication with 3D Secure 2.0' },
                { icon: Users, title: 'Faster Payments', description: 'Integration with BACS, CHAPS, and Faster Payments' },
                { icon: Zap, title: 'FOS Ready', description: 'Audit trails aligned with Financial Ombudsman Service' },
                { icon: TrendingUp, title: 'Fraud Detection', description: 'Real-time AI analysis of transaction patterns' }
            ],
            specific: {
                title: 'Built for UK Finance',
                points: [
                    'UK GDPR & Data Residency (London Regions)',
                    'Integration with Equifax, Experian, and TransUnion UK',
                    'Automated affordability checks for lending',
                    'PCI-DSS Level 1 secure payment processing',
                    'Vulnerable customer detection (Consumer Duty compliant)',
                    'Multi-currency support for international banking'
                ]
            }
        },
        us: {
            color: 'purple',
            title: 'US Financial Services & Banking',
            subtitle: 'SEC and FINRA compliant AI solutions for US Banks, Credit Unions, and FinTechs.',
            compliance: 'SEC, FINRA & GLBA Compliant',
            stats: [
                { label: "Verification", value: "99", suffix: "%", description: "Identity accuracy" },
                { label: "Loan Growth", value: "20", suffix: "%", description: "Faster originations" },
                { label: "Security", value: "Zero", suffix: "", description: "Data breaches" },
                { label: "Efficiency", value: "50", suffix: "%", description: "Faster resolutions" }
            ] as Stat[],
            challenges: [
                {
                    title: "Wire Fraud",
                    problem: "Sophisticated phishing attacks targeting wire transfers and account access.",
                    solution: "AI analyzes voice patterns and sentiment to flag coercion or deepfake attempts in real-time.",
                    icon: Lock
                },
                {
                    title: "Compliance Costs",
                    problem: "Massive overhead monitoring calls for SEC/FINRA/Dodd-Frank compliance.",
                    solution: "Automated QA reviews 100% of calls for compliance violations instantly.",
                    icon: FileText
                },
                {
                    title: "Customer Churn",
                    problem: "FinTech competitors poaching customers with better digital experiences.",
                    solution: "Offer a 'Neobank-like' experience with 24/7 AI banking assistants on any channel.",
                    icon: Users
                }
            ] as Challenge[],
            useCases: [
                {
                    title: "Regional Credit Union",
                    description: "Automated loan application status checks and pre-approvals.",
                    outcome: "Increased loan origination volume by 22% in 6 months.",
                    stats: "22%"
                },
                {
                    title: "Investment Firm",
                    description: "Secure trade execution via voice authentication.",
                    outcome: "Reduced trade verification time by 90 seconds per call.",
                    stats: "90s"
                },
                {
                    title: "Mortgage Lender",
                    description: "Proactive document collection reminders via SMS.",
                    outcome: "Shortened closing interaction timelines by 7 days.",
                    stats: "7 days"
                }
            ] as UseCase[],
            features: [
                { icon: Shield, title: 'SEC & FINRA', description: 'WORM storage compliance for all communications' },
                { icon: Building2, title: 'Core Integration', description: 'Jack Henry, Fiserv, FIS, and Temenos connectors' },
                { icon: Lock, title: 'GLBA Privacy', description: 'Strict protection of Non-public Personal Information (NPI)' },
                { icon: CreditCard, title: 'ACH & Wires', description: 'Automated NACHA and Fedwire payment verification' },
                { icon: Zap, title: 'AML / KYC', description: 'Automated OFAC screening and identity verification' },
                { icon: TrendingUp, title: 'Credit Checks', description: 'Real-time pull from US Credit Bureaus' }
            ],
            specific: {
                title: 'Built for US Finance',
                points: [
                    'Dodd-Frank and SOX compliance features',
                    'FIPS 140-2 Validated Encryption',
                    'Biometric Multi-Factor Authentication (MFA)',
                    'Integration with Zelle and Real-Time Payments (RTP)',
                    'Automated Suspicious Activity Report (SAR) tagging',
                    'State-level regulatory compliance monitoring'
                ]
            }
        }
    }

    const current = content[selectedRegion]
    const colorClasses = {
        uk: {
            badge: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
            gradient: 'from-blue-400 to-cyan-400',
            button: 'bg-blue-600 hover:bg-blue-700 text-white',
            border: 'border-blue-500/50',
            icon: 'bg-blue-500/10 text-blue-400',
            check: 'text-blue-400'
        },
        us: {
            badge: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
            gradient: 'from-purple-400 to-pink-400',
            button: 'bg-purple-600 hover:bg-purple-700 text-white',
            border: 'border-purple-500/50',
            icon: 'bg-purple-500/10 text-purple-400',
            check: 'text-purple-400'
        }
    }

    const colors = colorClasses[selectedRegion]

    return (
        <div className="flex flex-col min-h-screen bg-slate-950">
            <MarketingHeader />

            <main className="flex-grow pt-20">
                <section className="relative py-24 md:py-32 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-slate-950 to-teal-900/20" />

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl mx-auto text-center mt-8 md:mt-0">
                            <div className={`inline-block px-4 py-2 border rounded-full text-sm font-medium mb-6 ${colors.badge}`}>
                                {current.compliance}
                            </div>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                                {current.title}
                                <span className={`block text-transparent bg-clip-text bg-gradient-to-r ${colors.gradient}`}>
                                    Powered by Agentic AI
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                                {current.subtitle}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact" className={`px-8 py-4 rounded-lg font-semibold transition-all ${colors.button}`}>Request a Demo</Link>
                                <Link href="/resources" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-all">View Case Studies</Link>
                            </div>
                        </div>
                    </div>
                </section>

                <IndustryStats stats={current.stats} />

                <ChallengeSolution
                    title="Secure Financial Operations"
                    subtitle="Protect assets and build trust with military-grade AI security"
                    challenges={current.challenges}
                />

                <section className="py-20 bg-slate-900/30">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Key Capabilities</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {current.features.map((feature, index) => {
                                    const Icon = feature.icon
                                    return (
                                        <div key={index} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all">
                                            <div className={`p-3 rounded-lg w-fit mb-4 ${colors.icon}`}>
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                            <p className="text-slate-400">{feature.description}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                <UseCases
                    title="Banking on AI"
                    subtitle="How financial leaders are redefining the customer experience"
                    cases={current.useCases}
                />

                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <div className={`bg-slate-900/50 border rounded-2xl p-8 md:p-10 ${colors.border}`}>
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{current.specific.title}</h2>
                                <div className="space-y-4">
                                    {current.specific.points.map((point, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${colors.check}`} />
                                            <span className="text-slate-300">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <MarketingFooter />
        </div>
    )
}
