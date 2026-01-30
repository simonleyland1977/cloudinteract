"use client"

import { MarketingHeader } from "@/components/MarketingHeader"
import { MarketingFooter } from "@/components/MarketingFooter"
import { RegionalSwitcher } from "@/components/RegionalSwitcher"
import { useRegionalContent } from "@/hooks/useRegionalContent"
import { GraduationCap, BookOpen, Users, Shield, Zap, Award, Check } from "lucide-react"
import Link from "next/link"

export default function EdtechPage() {
    const { selectedRegion, isClient, handleRegionChange } = useRegionalContent('edtech-region')

    const content = {
        uk: {
            color: 'blue',
            title: 'UK Education Technology',
            subtitle: 'Student support services for UK schools, colleges, and universities with GDPR and safeguarding compliance',
            compliance: 'UK GDPR & Safeguarding Compliant',
            features: [
                {
                    icon: GraduationCap,
                    title: 'UK Curriculum Aligned',
                    description: 'Content and support aligned with National Curriculum, GCSEs, A-Levels, and Scottish Qualifications'
                },
                {
                    icon: Shield,
                    title: 'Safeguarding & DBS',
                    description: 'Keeping Children Safe in Education (KCSIE) compliance with DBS-checked staff escalation protocols'
                },
                {
                    icon: BookOpen,
                    title: 'UCAS & Admissions',
                    description: 'University admissions support with UCAS application tracking and student loan information'
                },
                {
                    icon: Users,
                    title: 'Parent Portal Integration',
                    description: 'Integration with UK school MIS systems like SIMS, Arbor, and Bromcom for attendance and grades'
                },
                {
                    icon: Zap,
                    title: 'Student Mental Health',
                    description: 'AI triage for wellbeing support with escalation to counselors and external services like CAMHS'
                },
                {
                    icon: Award,
                    title: 'Ofsted Readiness',
                    description: 'Communication logs and safeguarding records aligned with Ofsted inspection requirements'
                }
            ],
            specific: {
                title: 'Built for UK Education System',
                points: [
                    'UK National Curriculum, GCSE, A-Level, and Scottish Qualifications alignment',
                    'GDPR compliance for student data with parental consent management',
                    'Integration with SIMS, Arbor, Bromcom, and UK school MIS platforms',
                    'Safeguarding protocols compliant with KCSIE (Keeping Children Safe in Education)',
                    'UCAS university admissions and Student Finance England support',
                    'Ofsted inspection-ready communication and safeguarding logs'
                ]
            }
        },
        us: {
            color: 'purple',
            title: 'US Education Technology',
            subtitle: 'Student services for K-12 schools, colleges, and universities with FERPA and Title IX compliance',
            compliance: 'FERPA & COPPA Compliant',
            features: [
                {
                    icon: GraduationCap,
                    title: 'State Standards Aligned',
                    description: 'Content aligned with Common Core, state-specific standards, and AP/IB curricula across all 50 states'
                },
                {
                    icon: Shield,
                    title: 'FERPA & Title IX',
                    description: 'Family Educational Rights and Privacy Act compliance with mandatory Title IX reporting protocols'
                },
                {
                    icon: BookOpen,
                    title: 'Admissions & FAFSA',
                    description: 'College application support with Common App, FAFSA, and financial aid guidance'
                },
                {
                    icon: Users,
                    title: 'SIS Integration',
                    description: 'Integration with PowerSchool, Infinite Campus, Blackboard, and Canvas for grades and attendance'
                },
                {
                    icon: Zap,
                    title: 'Crisis Intervention',
                    description: 'AI-powered mental health screening with escalation to counselors and crisis hotlines like 988'
                },
                {
                    icon: Award,
                    title: 'Accreditation Support',
                    description: 'Documentation and reporting aligned with regional accreditation bodies and state DOE requirements'
                }
            ],
            specific: {
                title: 'Built for US Education System',
                points: [
                    'Common Core and state-specific curriculum standards across all 50 states',
                    'FERPA compliance for student records with parental notification',
                    'Integration with PowerSchool, Canvas, Blackboard, Infinite Campus SIS',
                    'Title IX compliance for sexual harassment and discrimination reporting',
                    'FAFSA, Common App, and state financial aid program support',
                    'COPPA (Children\'s Online Privacy Protection Act) for K-12 students'
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
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-slate-950 to-purple-900/20" />

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
