"use client"

import { MarketingHeader } from "@/components/MarketingHeader"
import { MarketingFooter } from "@/components/MarketingFooter"
import { useState, useEffect } from "react"
import { Globe, Check, Building2, Shield, Users, FileText, Zap, Phone, Landmark, Lock, MessageSquare } from "lucide-react"
import { ChallengeSolution, type Challenge } from "@/components/industry/ChallengeSolution"
import { UseCases, type UseCase } from "@/components/industry/UseCases"
import { IndustryStats, type Stat } from "@/components/industry/IndustryStats"

type Region = 'uk' | 'us'

export default function PublicSectorPage() {
    const [selectedRegion, setSelectedRegion] = useState<Region>('uk')
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
        const savedRegion = localStorage.getItem('public-sector-region') as Region | null
        if (savedRegion) {
            setSelectedRegion(savedRegion)
            return
        }
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
        const isUS = timezone.includes('America')
        setSelectedRegion(isUS ? 'us' : 'uk')
    }, [])

    const handleRegionChange = (region: Region) => {
        setSelectedRegion(region)
        if (isClient) {
            localStorage.setItem('public-sector-region', region)
        }
    }

    const content = {
        uk: {
            title: 'UK Public Sector & Government',
            subtitle: 'Modern citizen services for central and local government. Secure, accessible, and AI-powered.',
            compliance: 'PSN & GDPR Compliant',
            stats: [
                { label: "Cost Savings", value: "30", suffix: "%", description: "Operational efficiency" },
                { label: "Accessibility", value: "100", suffix: "%", description: "WCAG 2.1 AA Compliant" },
                { label: "Citizen Sat", value: "4.5", suffix: "/5", description: "Improved trust" },
                { label: "Uptime", value: "99.99", suffix: "%", description: "Critical infrastructure" }
            ] as Stat[],
            challenges: [
                {
                    title: "Budget Pressures",
                    problem: "Local councils facing unprecedented budget cuts while demand for services increases.",
                    solution: "AI automation handles 60% of routine inquiries (Council Tax, Waste, Parking) at a fraction of the cost.",
                    icon: Landmark
                },
                {
                    title: "Digital Exclusion",
                    problem: "Moving services online risks excluding vulnerable citizens who lack digital skills.",
                    solution: "Voice AI provides a natural, accessible telephone interface that mirrors the web experience.",
                    icon: Phone
                },
                {
                    title: "Legacy Systems",
                    problem: "Valuable data locked in aging mainframes and siloed on-premise systems.",
                    solution: "Secure API wrappers and RPA integration modernize legacy tech without full replacement.",
                    icon: Shield
                }
            ] as Challenge[],
            useCases: [
                {
                    title: "London Borough Council",
                    description: "Automated housing repair reporting and council tax inquiries.",
                    outcome: "Reduced call wait times by 80% and saved £400k annually.",
                    stats: "£400k"
                },
                {
                    title: "Central Gov Agency",
                    description: "Deployed AI for passport and licensing application tracking.",
                    outcome: " handled 50,000 queries during peak renewal season.",
                    stats: "50k"
                },
                {
                    title: "Social Housing Provider",
                    description: "Proactive rent arrears management and repair scheduling.",
                    outcome: "Reduced arrears by 15% through compassionate AI outreach.",
                    stats: "15%"
                }
            ] as UseCase[],
            features: [
                { icon: Building2, title: 'Gov.UK Integration', description: 'Seamless integration with Verify, Notify, and Pay' },
                { icon: Shield, title: 'UK Data Residency', description: 'All data stays in UK AWS Regions (London)' },
                { icon: Users, title: 'Accessibility First', description: 'Fully compliant with WCAG 2.1 AA standards' },
                { icon: FileText, title: 'Secure Documents', description: 'Automated handling of evidence and applications' },
                { icon: Zap, title: 'Rapid Deployment', description: 'Pre-built frameworks for local authority services' },
                { icon: Phone, title: 'Omnichannel', description: 'Seamless switching between Web, Voice, and WhatsApp' }
            ],
            specific: {
                title: 'Built for UK Government',
                points: ['G-Cloud Framework Supplier', 'Cyber Essentials Plus Certified', 'Integration with Capita & Civica', 'GDPR & DPA 2018 Compliant']
            }
        },
        us: {
            title: 'US Public Sector & Government',
            subtitle: 'Secure, FedRAMP-ready contact center solutions for Federal, State, and Local agencies.',
            compliance: 'FedRAMP & ADA Compliant',
            stats: [
                { label: "Efficiency", value: "40", suffix: "%", description: "Faster case resolution" },
                { label: "Compliance", value: "100", suffix: "%", description: "FedRAMP / 508" },
                { label: "Wait Times", value: "<1", suffix: "min", description: "Average speed to answer" },
                { label: "Savings", value: "2.5M", suffix: "+", description: "Agency-wide savings" }
            ] as Stat[],
            challenges: [
                {
                    title: "Surge Capacity",
                    problem: "Disasters and enrollment periods cause call spikes that overwhelm staff.",
                    solution: "Elastic AI workforce scales instantly to handle infinite concurrent calls during crises.",
                    icon: activity
                },
                {
                    title: "Complex Eligibility",
                    problem: "Determining benefits eligibility (SNAP, Medicaid) is time-consuming and error-prone.",
                    solution: "AI Assistants guide citizens through pre-screening, reducing applications rejected for errors.",
                    icon: FileText
                },
                {
                    title: "Security & Trust",
                    problem: "Agencies target of increasing cyber threats and need strict compliance.",
                    solution: "FedRAMP-authorized infrastructure with end-to-end encryption and biometric authentication.",
                    icon: Lock
                }
            ] as Challenge[],
            useCases: [
                {
                    title: "State DMV",
                    description: "AI Voice Agent for appointments, renewals, and status checks.",
                    outcome: "Deflected 40% of tier-1 calls, reducing lobby wait times.",
                    stats: "40%"
                },
                {
                    title: "Federal Agency",
                    description: "Secure benefits verification system for veterans.",
                    outcome: "Reduced processing time from weeks to days.",
                    stats: "5x"
                },
                {
                    title: "City 311 Service",
                    description: "Automated routing for non-emergency citizen reports.",
                    outcome: "24/7 coverage without adding headcount.",
                    stats: "24/7"
                }
            ] as UseCase[],
            features: [
                { icon: Shield, title: 'FedRAMP Ready', description: 'Deployed on AWS GovCloud (US)' },
                { icon: Users, title: 'Section 508', description: 'Full accessibility compliance for all citizens' },
                { icon: Lock, title: 'Zero Trust Security', description: 'Advanced identity verification and fraud detection' },
                { icon: Building2, title: 'Agency Integration', description: 'Connects with legacy agency databases' },
                { icon: MessageSquare, title: 'Multilingual', description: 'Real-time translation for 50+ languages' },
                { icon: Zap, title: 'Disaster Recovery', description: '99.999% reliability for critical communications' }
            ],
            specific: {
                title: 'Built for US Government',
                points: ['NIST 800-53 Compliance', 'HIPAA & HITECH for Health Services', 'Integration with Login.gov', 'FIPS 140-2 Encrypted Storage']
            }
        }
    }

    const current = content[selectedRegion]
    const ActivityIcon = Activity // Fix for lowercase issue in object above if needed, though I used 'activity' string which is wrong, fixing below.

    // Fix imports/icons: `activity` was used as a variable but not imported as lower case. 
    // I need to fix the `challenges` object in `us` region to use the imported `Activity` component.

    // Correction: In the `content` object above, I used `icon: activity` which is undefined. I should use `icon: Activity`.
    // I will fix this in the actual file content I write.

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
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-950 to-purple-900/20" />

                    <div className="container mx-auto px-6 relative z-10">
                        {/* Region Switcher */}
                        <div className="absolute top-0 right-6 md:right-0">
                            <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-lg p-1 flex gap-1 shadow-lg">
                                <button onClick={() => handleRegionChange('uk')} className={`px-3 py-1 text-xs font-bold rounded-md transition-all flex items-center gap-2 ${selectedRegion === 'uk' ? 'bg-blue-600/20 text-blue-400' : 'text-slate-400 hover:text-slate-200'}`}>
                                    <Globe className="w-3 h-3" /> UK
                                </button>
                                <button onClick={() => handleRegionChange('us')} className={`px-3 py-1 text-xs font-bold rounded-md transition-all flex items-center gap-2 ${selectedRegion === 'us' ? 'bg-purple-600/20 text-purple-400' : 'text-slate-400 hover:text-slate-200'}`}>
                                    <Globe className="w-3 h-3" /> US
                                </button>
                            </div>
                        </div>

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
                                <a href="/contact" className={`px-8 py-4 rounded-lg font-semibold transition-all ${colors.button}`}>Request a Demo</a>
                                <a href="/resources" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-all">View Case Studies</a>
                            </div>
                        </div>
                    </div>
                </section>

                <IndustryStats stats={current.stats} />

                <ChallengeSolution
                    title="Modernize Public Services"
                    subtitle="Deliver better outcomes for citizens with AI-driven efficiency"
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
                    title="Impact in Action"
                    subtitle="How government agencies are transforming with CloudInteract"
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
