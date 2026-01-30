"use client"

import { MarketingHeader } from "@/components/MarketingHeader"
import { MarketingFooter } from "@/components/MarketingFooter"
import { useState, useEffect } from "react"
import { Globe, Check, Building2, Shield, Activity, FileText, Users, Zap, Clock, Phone } from "lucide-react"

type Region = 'uk' | 'us'

export default function HealthcarePage() {
    const [selectedRegion, setSelectedRegion] = useState<Region>('us')
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)

        // Try to get saved preference first
        const savedRegion = localStorage.getItem('healthcare-region') as Region | null
        if (savedRegion) {
            setSelectedRegion(savedRegion)
            return
        }

        // Auto-detect timezone-based region as fallback
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
        const isUK = timezone.includes('Europe/London') || timezone.includes('Europe/')
        setSelectedRegion(isUK ? 'uk' : 'us')
    }, [])

    const handleRegionChange = (region: Region) => {
        setSelectedRegion(region)
        if (isClient) {
            localStorage.setItem('healthcare-region', region)
        }
    }

    const content = {
        uk: {
            color: 'blue',
            title: 'NHS & UK Private Healthcare',
            subtitle: 'Transforming patient access with AI-powered contact centers designed for the NHS and UK private care providers',
            compliance: 'GDPR & NHS Digital Compliant',
            features: [
                {
                    icon: Building2,
                    title: 'NHS System Integration',
                    description: 'Seamless integration with NHS Spine, GP Connect, and NHS App for unified patient records and appointment management'
                },
                {
                    icon: Shield,
                    title: 'GDPR & Data Protection',
                    description: 'Full GDPR compliance with NHS Data Security and Protection Toolkit (DSPT) certification and UK data residency'
                },
                {
                    icon: Phone,
                    title: '24/7 NHS 111 Support',
                    description: 'AI triage aligned with NHS 111 pathways, reducing wait times and ensuring appropriate care escalation'
                },
                {
                    icon: Users,
                    title: 'Patient Self-Service',
                    description: 'Automated appointment booking, prescription refills, and test results via voice, SMS, and web chat'
                },
                {
                    icon: Activity,
                    title: 'Clinical Safety',
                    description: 'DCB0129 and DCB0160 compliant with built-in clinical safety management system (CSMS)'
                },
                {
                    icon: Clock,
                    title: 'Reduce A&E Burden',
                    description: 'Intelligent routing to minor injury units, urgent treatment centers, or pharmacies to reduce A&E overcrowding'
                }
            ],
            specific: {
                title: 'Built for the UK Healthcare System',
                points: [
                    'Integration with NHS Spine, GP Connect, and e-Referral Service (e-RS)',
                    'Support for NHS 111, 999, and out-of-hours (OOH) services',
                    'GDPR-compliant call recording with NHS data residency (UK regions only)',
                    'Automated clinical correspondence to GP systems via GP2GP',
                    'Real-time bed availability and waiting time updates',
                    'Multi-language support for diverse UK patient populations'
                ]
            }
        },
        us: {
            color: 'purple',
            title: 'US Healthcare & Hospital Systems',
            subtitle: 'HIPAA-compliant AI contact center solutions for US hospitals, clinics, and health systems',
            compliance: 'HIPAA & HITECH Compliant',
            features: [
                {
                    icon: Shield,
                    title: 'HIPAA Compliance',
                    description: 'Full HIPAA and HITECH compliance with BAA (Business Associate Agreement), encrypted PHI handling, and audit logging'
                },
                {
                    icon: Building2,
                    title: 'EHR Integration',
                    description: 'Native integrations with Epic, Cerner, Allscripts, Athenahealth, and other major EHR/EMR systems'
                },
                {
                    icon: FileText,
                    title: 'Insurance Verification',
                    description: 'Automated insurance eligibility checks, prior authorization, and benefits verification in real-time'
                },
                {
                    icon: Users,
                    title: 'Patient Engagement',
                    description: 'Appointment scheduling, billing inquiries, telehealth coordination, and prescription refills via omnichannel AI'
                },
                {
                    icon: Zap,
                    title: 'Revenue Cycle Automation',
                    description: 'Payment collection, billing support, and automated claim status updates to reduce DSO (Days Sales Outstanding)'
                },
                {
                    icon: Phone,
                    title: 'Nurse Triage Lines',
                    description: 'AI-powered symptom assessment with seamless handoff to registered nurses for clinical escalation'
                }
            ],
            specific: {
                title: 'Built for the US Healthcare Market',
                points: [
                    'HL7 FHIR and API integrations with Epic, Cerner, Meditech, and Athenahealth',
                    'Real-time insurance verification via Availity, Change Healthcare, and Waystar',
                    'Support for Medicare, Medicaid, and private insurance workflows',
                    'Automated appointment reminders with SMS, email, and voice calls',
                    'Price transparency and cost estimator tools for self-pay patients',
                    'Telehealth scheduling and virtual visit coordination'
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
            toggle: 'bg-blue-600',
            border: 'border-blue-500/50',
            icon: 'bg-blue-500/10 text-blue-400'
        },
        us: {
            badge: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
            gradient: 'from-purple-400 to-pink-400',
            button: 'bg-purple-600 hover:bg-purple-700 text-white',
            toggle: 'bg-purple-600',
            border: 'border-purple-500/50',
            icon: 'bg-purple-500/10 text-purple-400'
        }
    }

    const colors = colorClasses[selectedRegion]

    return (
        <div className="flex flex-col min-h-screen bg-slate-950">
            <MarketingHeader />

            {/* Floating Region Switcher */}
            {isClient && (
                <div className="fixed top-24 right-6 z-40 bg-slate-900/90 backdrop-blur-sm border border-slate-800 rounded-xl p-2 shadow-xl">
                    <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-slate-400" />
                        <div className="flex gap-1">
                            <button
                                onClick={() => handleRegionChange('uk')}
                                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${selectedRegion === 'uk'
                                        ? 'bg-blue-600 text-white'
                                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                                    }`}
                            >
                                UK
                            </button>
                            <button
                                onClick={() => handleRegionChange('us')}
                                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${selectedRegion === 'us'
                                        ? 'bg-purple-600 text-white'
                                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                                    }`}
                            >
                                US
                            </button>
                        </div>
                    </div>
                </div>
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
                                <a
                                    href="/contact"
                                    className={`px-8 py-4 rounded-lg font-semibold transition-all ${colors.button}`}
                                >
                                    Request a Demo
                                </a>
                                <a
                                    href="/resources"
                                    className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-all"
                                >
                                    View Case Studies
                                </a>
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
                                            <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${selectedRegion === 'uk' ? 'text-blue-400' : 'text-purple-400'}`} />
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
