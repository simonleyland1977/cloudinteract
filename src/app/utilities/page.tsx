"use client"

import { useRegion } from "@/context/RegionContext"
import { MarketingHeader } from "@/components/MarketingHeader"
import { MarketingFooter } from "@/components/MarketingFooter"
import { useState, useEffect } from "react"
import { Zap, Phone, AlertTriangle, Users, TrendingUp, Shield, Check, Globe, Droplets, BatteryCharging, Power } from "lucide-react"
import Link from "next/link"
import { ChallengeSolution, type Challenge } from "@/components/industry/ChallengeSolution"
import { UseCases, type UseCase } from "@/components/industry/UseCases"
import { IndustryStats, type Stat } from "@/components/industry/IndustryStats"

type Region = 'uk' | 'us'

export default function UtilitiesPage() {
    const { region: selectedRegion } = useRegion()

    const content = {
        uk: {
            color: 'blue',
            title: 'UK Utilities & Energy',
            subtitle: 'Keep the lights on and customers happy with AI for Energy, Water, and Broadband.',
            compliance: 'Ofgem & PSR Compliant',
            stats: [
                { label: "Availability", value: "100", suffix: "%", description: "Critical infrastructure" },
                { label: "Outage Deflection", value: "60", suffix: "%", description: "During storm surges" },
                { label: "Cost to Serve", value: "30", suffix: "%", description: "Reduction in opex" },
                { label: "Smart Meter", value: "90", suffix: "%", description: "Install booking rate" }
            ] as Stat[],
            challenges: [
                {
                    title: "Storm Surge",
                    problem: "Extreme weather events trigger thousands of calls in minutes, overwhelming lines.",
                    solution: "AI Voice Agents scale instantly to triage emergencies and provide automated ETA updates.",
                    icon: AlertTriangle
                },
                {
                    title: "Bill Shock",
                    problem: "Complex tariffs and estimated bills lead to angry customers and disputes.",
                    solution: "Visual AI analyzes meter photos to correct readings instantly, resolving 80% of disputes.",
                    icon: TrendingUp
                },
                {
                    title: "Vulnerable Customers",
                    problem: "Identifying Priority Services Register (PSR) customers during interactions is difficult.",
                    solution: "Real-time voice analysis flags vulnerability keywords to prioritize routing to specialist teams.",
                    icon: Users
                }
            ] as Challenge[],
            useCases: [
                {
                    title: "Regional Water Co",
                    description: "Automated leak reporting via WhatsApp with geo-location.",
                    outcome: "Reduced engineer dispatch time by 45 minutes.",
                    stats: "45min"
                },
                {
                    title: "Energy Supplier",
                    description: "AI booking agent for Smart Meter installation campaigns.",
                    outcome: "Increased booking conversion by 35% compared to cold calling.",
                    stats: "35%"
                },
                {
                    title: "Broadband Provider",
                    description: "Self-service router diagnostics via mobile app voice bot.",
                    outcome: "Deflected 50% of technical support calls to self-resolution.",
                    stats: "50%"
                }
            ] as UseCase[],
            features: [
                { icon: Zap, title: 'Smart Metering', description: 'DCC integration for real-time SMETS2 data access' },
                { icon: AlertTriangle, title: 'Outage Mgmt', description: 'Integration with National Grid & DNO systems' },
                { icon: Shield, title: 'Ofgem Ready', description: 'Compliance with Standards of Conduct & licensing' },
                { icon: Users, title: 'PSR Support', description: 'Automatic identification of vulnerable households' },
                { icon: TrendingUp, title: 'Switching', description: 'Faster Switching Service (CSS) integration' },
                { icon: Droplets, title: 'Multi-Utility', description: 'Unified billing for dual-fuel and water bundles' }
            ],
            specific: {
                title: 'Built for UK Utilities',
                points: [
                    'Integration with top billing engines (Gentrack, SAP, Oracle)',
                    'Automated Warm Home Discount eligibility checks',
                    'Prepayment meter (PPM) top-up automation',
                    'Debt management pathways aligned with Ofgem rules',
                    'Emergency disconnect handling for gas leaks (0800...)',
                    'GDPR-compliant call recording for regulatory audits'
                ]
            }
        },
        us: {
            color: 'purple',
            title: 'US Utilities & Energy',
            subtitle: 'Modernize grid operations and customer service. IOUs, Munis, and Co-ops.',
            compliance: 'FERC & NERC CIP Compliant',
            stats: [
                { label: "Restoration", value: "20", suffix: "%", description: "Faster crew dispatch" },
                { label: "Enrollment", value: "40", suffix: "%", description: "Paperless adoption" },
                { label: "CSAT", value: "4.8", suffix: "/5", description: "J.D. Power improvement" },
                { label: "Savings", value: "5M", suffix: "+", description: "Annual operational savings" }
            ] as Stat[],
            challenges: [
                {
                    title: "Rolling Blackouts",
                    problem: "Grid instability requires rapid communication to millions to reduce load.",
                    solution: "Proactive AI outreach notifies customers to conserve energy, preventing total grid failure.",
                    icon: Power
                },
                {
                    title: "Vegetation Mgmt",
                    problem: "Coordinating tree trimming is manual and prone to customer complaints.",
                    solution: "Automated scheduling agents coordinate access with homeowners, reducing refusals.",
                    icon: Droplets // Using Droplets generic nature or maybe 'Leaf' if available, sticking to generic 'Power' or 'Zap'
                },
                {
                    title: "Payment Delinquency",
                    problem: "Disconnecting service is costly and regulates strictly.",
                    solution: "Empathetic AI negotiates payment plans based on LIHEAP eligibility and history.",
                    icon: TrendingUp
                }
            ] as Challenge[],
            useCases: [
                {
                    title: "Large IOU",
                    description: "Outage reporting and status checks via SMS and Voice.",
                    outcome: "Handled 150,000 calls during hurricane season with zero hold time.",
                    stats: "150k"
                },
                {
                    title: "Municipal Water",
                    description: "Start/Stop service automation for movers.",
                    outcome: "Reduced back-office processing time by 70%.",
                    stats: "70%"
                },
                {
                    title: "Electric Co-op",
                    description: "Demand Response program enrollment drive.",
                    outcome: "Signed up 15% of membership in 2 weeks via automated voice.",
                    stats: "15%"
                }
            ] as UseCase[],
            features: [
                { icon: Zap, title: 'AMI Integration', description: 'Real-time usage data from Smart Meters' },
                { icon: AlertTriangle, title: 'OMS Connect', description: 'Bi-directional link with Outage Management Systems' },
                { icon: Shield, title: 'Regulatory', description: 'FERC, NERC CIP, and state PUC compliance tools' },
                { icon: Users, title: 'Assistance', description: 'LIHEAP and low-income program automation' },
                { icon: BatteryCharging, title: 'EV Programs', description: 'Managed charging and rebate processing' },
                { icon: Phone, title: 'IVR Deflection', description: 'Visual IVR for rapid self-service' }
            ],
            specific: {
                title: 'Built for US Utilities',
                points: [
                    'CIS integration (Oracle CC&B, SAP IS-U, Vertex)',
                    'TCPA-compliant outage notifications',
                    'Time-of-Use (TOU) rate education and comparison',
                    'Solar net metering application tracking',
                    'Gas leak emergency routing (911 integration)',
                    'Field workforce management updates (ServiceMax/Salesforce)'
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
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-slate-950 to-orange-900/20" />

                    <div className="container mx-auto px-6 relative z-10">
                        {/* Region Switcher Moved to Header */}

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
                    title="Powering the Future"
                    subtitle="Reliable, efficient, and customer-centric utility operations"
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
                    title="Utility Innovation"
                    subtitle="How leading providers are transforming with CloudInteract"
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
