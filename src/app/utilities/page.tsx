"use client"

import { MarketingHeader } from "@/components/MarketingHeader"
import { MarketingFooter } from "@/components/MarketingFooter"
import { RegionalSwitcher } from "@/components/RegionalSwitcher"
import { useRegionalContent } from "@/hooks/useRegionalContent"
import { Zap, Phone, AlertTriangle, Users, TrendingUp, Shield, Check } from "lucide-react"
import Link from "next/link"

export default function UtilitiesPage() {
    const { selectedRegion, isClient, handleRegionChange } = useRegionalContent('utilities-region')

    const content = {
        uk: {
            color: 'blue',
            title: 'UK Utilities & Energy',
            subtitle: 'Smart meter support, outage management, and customer service for UK energy, water, and broadband providers',
            compliance: 'Ofgem & UK Energy Market Compliant',
            features: [
                {
                    icon: Zap,
                    title: 'Smart Meter Integration',
                    description: 'DCC (Data Communications Company) integration for SMETS2 smart meter readings and tariff management'
                },
                {
                    icon: AlertTriangle,
                    title: 'National Grid Outages',
                    description: 'Real-time outage updates coordinated with National Grid and Distribution Network Operators (DNOs)'
                },
                {
                    icon: Shield,
                    title: 'Ofgem Compliance',
                    description: 'Standards of Conduct (SoC) and Priority Services Register (PSR) compliance for vulnerable customers'
                },
                {
                    icon: Users,
                    title: 'Switching Support',
                    description: 'Energy switching guidance with price comparison and automatic supplier change coordination'
                },
                {
                    icon: TrendingUp,
                    title: 'Energy Efficiency Advice',
                    description: 'ECO4 (Energy Company Obligation) scheme support and energy-saving recommendations'
                },
                {
                    icon: Phone,
                    title: 'Priority Services',
                    description: 'PSR (Priority Services Register) support for elderly, disabled, and vulnerable customers'
                }
            ],
            specific: {
                title: 'Built for UK Utilities Market',
                points: [
                    'DCC smart meter integration for SMETS2 gas and electricity meters',
                    'National Grid and DNO (Distribution Network Operator) outage coordination',
                    'Ofgem Standards of Conduct and guaranteed standards compliance',
                    'Priority Services Register (PSR) support for vulnerable customers',
                    'Energy switching with automatic supplier changeover via central switching service',
                    'ECO4, Warm Home Discount, and UK government energy assistance schemes'
                ]
            }
        },
        us: {
            color: 'purple',
            title: 'US Utilities & Energy',
            subtitle: 'Outage management, smart grid support, and customer service for US electric, gas, and water utilities',
            compliance: 'FERC & State PUC Compliant',
            features: [
                {
                    icon: Zap,
                    title: 'Smart Grid Integration',
                    description: 'AMI (Advanced Metering Infrastructure) integration for real-time usage monitoring and demand response'
                },
                {
                    icon: AlertTriangle,
                    title: 'Outage Management',
                    description: 'OMS (Outage Management System) integration with automated restoration updates and crew dispatch'
                },
                {
                    icon: Shield,
                    title: 'FERC & PUC Compliance',
                    description: 'Federal Energy Regulatory Commission and state Public Utility Commission compliance for service standards'
                },
                {
                    icon: Users,
                    title: 'Payment Assistance',
                    description: 'LIHEAP (Low Income Home Energy Assistance Program) enrollment and payment plan automation'
                },
                {
                    icon: TrendingUp,
                    title: 'Energy Efficiency',
                    description: 'Demand response programs, time-of-use rates, and energy-saving rebate information'
                },
                {
                    icon: Phone,
                    title: 'Medical Baseline',
                    description: 'Medical baseline program support for customers with life-sustaining equipment'
                }
            ],
            specific: {
                title: 'Built for US Utilities Market',
                points: [
                    'AMI (Advanced Metering Infrastructure) and smart meter integration',
                    'OMS (Outage Management System) with automatic restoration ETAs',
                    'FERC and state PUC (Public Utility Commission) regulatory compliance',
                    'Integration with major utility billing systems (Oracle CC&B, SAP, Vertex)',
                    'LIHEAP, weatherization, and low-income assistance program enrollment',
                    'Medical baseline and life support protection for critical customers'
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
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-slate-950 to-orange-900/20" />

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
