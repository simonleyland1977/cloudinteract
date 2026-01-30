"use client"

import { MarketingHeader } from "@/components/MarketingHeader"
import { MarketingFooter } from "@/components/MarketingFooter"
import { RegionalSwitcher } from "@/components/RegionalSwitcher"
import { useRegionalContent } from "@/hooks/useRegionalContent"
import { Shield, Building2, FileText, Users, Zap, TrendingUp, Check } from "lucide-react"
import Link from "next/link"

export default function FinancePage() {
    const { selectedRegion, isClient, handleRegionChange } = useRegionalContent('finance-region')

    const content = {
        uk: {
            color: 'blue',
            title: 'UK Financial Services & Banking',
            subtitle: 'FCA-regulated financial institutions with Open Banking, Strong Customer Authentication, and UK compliance',
            compliance: 'FCA, PSD2 & Open Banking Compliant',
            features: [
                {
                    icon: Shield,
                    title: 'FCA Compliance',
                    description: 'Full Financial Conduct Authority (FCA) compliance with regulated financial promotions and conduct standards'
                },
                {
                    icon: Building2,
                    title: 'Open Banking Integration',
                    description: 'CMA9 Open Banking APIs for account aggregation, payment initiation, and financial data sharing'
                },
                {
                    icon: FileText,
                    title: 'PSD2 & SCA Ready',
                    description: 'Strong Customer Authentication (SCA) compliant with 3D Secure 2.0 and biometric verification'
                },
                {
                    icon: Users,
                    title: 'UK Banking Systems',
                    description: 'Integration with Faster Payments, BACS, CHAPS, and UK clearing systems'
                },
                {
                    icon: Zap,
                    title: 'Financial Ombudsman Ready',
                    description: 'Complaint handling and resolution tracking aligned with FOS (Financial Ombudsman Service) requirements'
                },
                {
                    icon: TrendingUp,
                    title: 'Fraud Prevention',
                    description: 'AI-powered voice biometrics and fraud detection with UK Finance intelligence sharing'
                }
            ],
            specific: {
                title: 'Built for UK Financial Services',
                points: [
                    'FCA-regulated communications and financial promotions compliance',
                    'Open Banking (CMA9) integration with major UK banks',
                    'PSD2 Strong Customer Authentication (SCA) with 3D Secure 2.0',
                    'Integration with Faster Payments, BACS, CHAPS clearing systems',
                    'Financial Ombudsman Service (FOS) complaint tracking',
                    'UK GDPR data protection with right to be forgotten'
                ]
            }
        },
        us: {
            color: 'purple',
            title: 'US Financial Services & Banking',
            subtitle: 'SEC and FINRA regulated institutions with ACH, wire transfers, and comprehensive US banking compliance',
            compliance: 'SEC, FINRA & Dodd-Frank Compliant',
            features: [
                {
                    icon: Shield,
                    title: 'SEC & FINRA Compliance',
                    description: 'Securities and Exchange Commission and Financial Industry Regulatory Authority compliant communications'
                },
                {
                    icon: Building2,
                    title: 'Core Banking Integration',
                    description: 'Connect with Jack Henry, Fiserv, FIS, and major US core banking platforms'
                },
                {
                    icon: FileText,
                    title: 'Dodd-Frank & GLBA',
                    description: 'Gramm-Leach-Bliley Act privacy compliance with consumer financial information protection'
                },
                {
                    icon: Users,
                    title: 'ACH & Wire Transfers',
                    description: 'Automated Clearing House and Fedwire integration for payment processing and verification'
                },
                {
                    icon: Zap,
                    title: 'AML & KYC Automation',
                    description: 'Anti-Money Laundering and Know Your Customer verification with OFAC screening'
                },
                {
                    icon: TrendingUp,
                    title: 'Credit Bureau Integration',
                    description: 'Real-time credit checks with Equifax, Experian, and TransUnion for loan decisioning'
                }
            ],
            specific: {
                title: 'Built for US Financial Services',
                points: [
                    'SEC, FINRA, and CFPB regulatory compliance for all communications',
                    'Integration with Jack Henry, Fiserv, FIS, and Temenos core banking',
                    'ACH (NACHA), Fedwire, and SWIFT payment network integration',
                    'Dodd-Frank Act and GLBA privacy compliance',
                    'AML/KYC automation with OFAC and FinCEN reporting',
                    'Credit bureau integration (Equifax, Experian, TransUnion)'
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
            icon: 'bg-blue-500/10 text-blue-400',
            border: 'border-blue-500/50',
            check: 'text-blue-400'
        },
        us: {
            badge: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
            gradient: 'from-purple-400 to-pink-400',
            button: 'bg-purple-600 hover:bg-purple-700 text-white',
            icon: 'bg-purple-500/10 text-purple-400',
            border: 'border-purple-500/50',
            check: 'text-purple-400'
        }
    }

    const colors = colorClasses[selectedRegion]

    return (
        <div className="flex flex-col min-h-screen bg-slate-950">
            <MarketingHeader />

            {isClient && (
                <RegionalSwitcher
                    selectedRegion={selectedRegion}
                    onRegionChange={handleRegionChange}
                />
            )}

            <main className="flex-grow pt-20">
                <section className="relative py-24 md:py-32 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-slate-950 to-teal-900/20" />

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
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
                                <Link
                                    href="/contact"
                                    className={`px-8 py-4 rounded-lg font-semibold transition-all ${colors.button}`}
                                >
                                    Request a Demo
                                </Link>
                                <Link
                                    href="/resources"
                                    className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-all"
                                >
                                    View Case Studies
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-slate-900/30">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                                Key Capabilities
                            </h2>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {current.features.map((feature, index) => {
                                    const Icon = feature.icon
                                    return (
                                        <div key={index} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all">
                                            <div className={`p-3 rounded-lg w-fit mb-4 ${colors.icon}`}>
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-3">
                                                {feature.title}
                                            </h3>
                                            <p className="text-slate-400">
                                                {feature.description}
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <div className={`bg-slate-900/50 border rounded-2xl p-8 md:p-10 ${colors.border}`}>
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                                    {current.specific.title}
                                </h2>

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
