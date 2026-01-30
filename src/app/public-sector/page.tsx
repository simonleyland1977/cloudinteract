"use client"

import { MarketingHeader } from "@/components/MarketingHeader"
import { MarketingFooter } from "@/components/MarketingFooter"
import { RegionalSwitcher } from "@/components/RegionalSwitcher"
import { useRegionalContent } from "@/hooks/useRegionalContent"
import { Building2, Shield, Users, FileText, Zap, Phone, Check, Globe } from "lucide-react"
import Link from "next/link"

export default function PublicSectorPage() {
    const { selectedRegion, isClient, handleRegionChange } = useRegionalContent('public-sector-region')

    const content = {
        uk: {
            color: 'blue',
            title: 'UK Public Sector & Government',
            subtitle: 'Modern citizen services for central and local government, compliant with UK public sector standards',
            compliance: 'GDPR, accessibility & PSN Compliant',
            features: [
                {
                    icon: Building2,
                    title: 'Gov.UK Integration',
                    description: 'Seamless integration with Gov.UK Notify, Verify, and Pay services for unified citizen experience'
                },
                {
                    icon: Shield,
                    title: 'UK Data Residency',
                    description: 'All data stored in UK (London) AWS regions with GDPR compliance and Public Services Network (PSN) certification'
                },
                {
                    icon: Users,
                    title: 'WCAG 2.1 AAA Accessibility',
                    description: 'Exceeding UK government accessibility requirements for voice, chat, and web interfaces'
                },
                {
                    icon: FileText,
                    title: 'Local Authority Support',
                    description: 'Council tax, housing, benefits, and waste collection inquiries automated with local system integration'
                },
                {
                    icon: Zap,
                    title: 'NHS 111 Integration',
                    description: 'Coordinated health and social care services with NHS systems for vulnerable citizens'
                },
                {
                    icon: Phone,
                    title: 'Emergency Services Ready',
                    description: 'High-availability infrastructure for 999, 101, and emergency response coordination'
                }
            ],
            specific: {
                title: 'Built for UK Government',
                points: [
                    'Integration with Gov.UK services: Notify (messaging), Verify (identity), Pay (payments)',
                    'PSN (Public Services Network) accredited infrastructure',
                    'Cabinet Office and GDS (Government Digital Service) aligned',
                    'Local authority integrations: council tax, planning, social care systems',
                    'Support for English, Welsh, Scottish Gaelic, and 100+ languages',
                    'Emergency services coordination with blue light networks'
                ]
            }
        },
        us: {
            color: 'purple',
            title: 'US Public Sector & Government',
            subtitle: 'Citizen services for federal, state, and local government compliant with US regulatory standards',
            compliance: 'FedRAMP & Section 508 Compliant',
            features: [
                {
                    icon: Shield,
                    title: 'FedRAMP Authorized',
                    description: 'Built on AWS GovCloud with FedRAMP High authorization for federal agency deployment'
                },
                {
                    icon: Building2,
                    title: 'Federal Integration',
                    description: 'Connect with USA.gov, Login.gov, and federal payment systems for unified services'
                },
                {
                    icon: Users,
                    title: 'Section 508 Compliance',
                    description: 'Full compliance with Americans with Disabilities Act (ADA) and Section 508 accessibility requirements'
                },
                {
                    icon: FileText,
                    title: 'State & Local Services',
                    description: 'DMV, permitting, tax inquiries, and benefits verification automated across all 50 states'
                },
                {
                    icon: Zap,
                    title: 'Veterans Affairs Ready',
                    description: 'Specialized support for VA benefits, healthcare, and disability claims processing'
                },
                {
                    icon: Phone,
                    title: '911 Emergency Integration',
                    description: 'Next Generation 911 (NG911) compatible for emergency call routing and response'
                }
            ],
            specific: {
                title: 'Built for US Government',
                points: [
                    'AWS GovCloud deployment with FedRAMP High authorization',
                    'Integration with Login.gov, USA.gov, and Pay.gov federal services',
                    'NIST 800-53 security controls and FIPS 140-2 encryption',
                    'State-specific integrations: DMV, tax systems, permitting databases',
                    'Veterans Affairs (VA) and Social Security Administration (SSA) ready',
                    'Support for federal, state, county, and municipal deployments'
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
                {/* Hero Section */}
                <section className="relative py-24 md:py-32 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-950 to-purple-900/20" />

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

                {/* Features Grid */}
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

                {/* Regional Specifics */}
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
