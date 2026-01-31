"use client"

import { MarketingHeader } from "@/components/MarketingHeader"
import { MarketingFooter } from "@/components/MarketingFooter"
import { useState, useEffect } from "react"
import { GraduationCap, BookOpen, Users, Shield, Zap, Award, Check, Globe, Laptop, Heart } from "lucide-react"
import Link from "next/link"
import { ChallengeSolution, type Challenge } from "@/components/industry/ChallengeSolution"
import { UseCases, type UseCase } from "@/components/industry/UseCases"
import { IndustryStats, type Stat } from "@/components/industry/IndustryStats"

type Region = 'uk' | 'us'

export default function EdtechPage() {
    const [selectedRegion, setSelectedRegion] = useState<Region>('uk')
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
        const savedRegion = localStorage.getItem('edtech-region') as Region | null
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
            localStorage.setItem('edtech-region', region)
        }
    }

    const content = {
        uk: {
            color: 'blue',
            title: 'UK Education Technology',
            subtitle: 'Enhance student experience and safeguarding in schools, colleges, and universities.',
            compliance: 'KCSIE & GDPR Compliant',
            stats: [
                { label: "Enrollment", value: "90", suffix: "%", description: "Completion rate" },
                { label: "Admin Time", value: "50", suffix: "%", description: "Reduction in paperwork" },
                { label: "Support", value: "24/7", suffix: "", description: "Student wellbeing" },
                { label: "Retention", value: "15", suffix: "%", description: "Improved continuation" }
            ] as Stat[],
            challenges: [
                {
                    title: "Clearing Peaks",
                    problem: "Universities face massive call volumes during A-Level results day and Clearing.",
                    solution: "AI Voice Agents handle thousands of concurrent calls, qualifying students and offering places instantly.",
                    icon: Zap
                },
                {
                    title: "Student Wellbeing",
                    problem: "Mental health services are overwhelmed, leaving vulnerable students without support.",
                    solution: "Empathetic AI triage identifies at-risk students 24/7 and escalates to safeguarding teams.",
                    icon: Heart
                },
                {
                    title: "Global Recruitment",
                    problem: "International students struggle with language barriers and time zone differences.",
                    solution: "Multilingual AI assistants support applicants in 50+ languages, anytime, anywhere.",
                    icon: Globe
                }
            ] as Challenge[],
            useCases: [
                {
                    title: "Russell Group Uni",
                    description: "Automated the entire Clearing hotline process.",
                    outcome: "Offered 500+ places autonomously in the first hour of results day.",
                    stats: "500+"
                },
                {
                    title: "Multi-Academy Trust",
                    description: "Centralized attendance reporting and parent communication.",
                    outcome: "Saved 200 admin hours per week across 15 schools.",
                    stats: "200h"
                },
                {
                    title: "EdTech Platform",
                    description: "In-app voice support for technical issues during exams.",
                    outcome: "Reduced exam disruption time by 80%.",
                    stats: "80%"
                }
            ] as UseCase[],
            features: [
                { icon: GraduationCap, title: 'Curriculum', description: 'Aligned with UK National Curriculum & GCSEs/A-Levels' },
                { icon: Shield, title: 'Safeguarding', description: 'KCSIE-compliant monitoring and escalation' },
                { icon: BookOpen, title: 'Admissions', description: 'UCAS tracking and integration' },
                { icon: Users, title: 'MIS Sync', description: 'SIMS, Arbor, and Bromcom write-back integration' },
                { icon: Laptop, title: 'Remote Learning', description: 'Automated technical support for hybrid classrooms' },
                { icon: Award, title: 'Ofsted', description: 'Inspection-ready safeguarding logs and evidence' }
            ],
            specific: {
                title: 'Built for UK Education',
                points: [
                    'UK Data Residency (London Regions)',
                    'Student Finance England integration',
                    'Attendance monitoring (DfE compliant)',
                    'GDPR consent management for minors',
                    'Prevent Duty awareness features',
                    'Mental health signposting (CAMHS/NHS)'
                ]
            }
        },
        us: {
            color: 'purple',
            title: 'US Education Technology',
            subtitle: 'Scale student success and operational efficiency for K-12 and Higher Ed.',
            compliance: 'FERPA & COPPA Compliant',
            stats: [
                { label: "FAFSA", value: "30", suffix: "%", description: "Increase in submissions" },
                { label: "Alumni Giving", value: "2x", suffix: "", description: "Donation conversion" },
                { label: "Wait Times", value: "Zero", suffix: "", description: "During registration" },
                { label: "Savings", value: "1M", suffix: "+", description: "Operational savings" }
            ] as Stat[],
            challenges: [
                {
                    title: "Summer Melt",
                    problem: "Accepted students failing to enroll due to lack of engagement over summer.",
                    solution: "Proactive AI SMS campaigns nudge students to complete forms and deposits.",
                    icon: Users
                },
                {
                    title: "IT Support",
                    problem: "Help desks swamped with password resets during finals week.",
                    solution: "Visual AI guides students through password resets and LMS issues automatically.",
                    icon: Laptop
                },
                {
                    title: "Campus Safety",
                    problem: "Need for rapid mass notification and emergency response coordination.",
                    solution: "AI mass-dialing and text alerts instantly notify campus of safety threats.",
                    icon: Shield
                }
            ] as Challenge[],
            useCases: [
                {
                    title: "State University",
                    description: "AI chatbot for financial aid and FAFSA questions.",
                    outcome: "Reduced financial aid office foot traffic by 40%.",
                    stats: "40%"
                },
                {
                    title: "K-12 District",
                    description: "Automated absenteeism calls to parents in multiple languages.",
                    outcome: "Improved attendance reporting accuracy by 95%.",
                    stats: "95%"
                },
                {
                    title: "Online College",
                    description: "24/7 academic advising assistant for adult learners.",
                    outcome: "Increased course completion rates by 12%.",
                    stats: "12%"
                }
            ] as UseCase[],
            features: [
                { icon: Shield, title: 'FERPA', description: 'Full compliance for student record privacy' },
                { icon: Users, title: 'SIS Connect', description: 'PowerSchool, Canvas, and Blackboard integration' },
                { icon: BookOpen, title: 'Financial Aid', description: 'FAFSA and scholarship application support' },
                { icon: Award, title: 'Accreditation', description: 'Data gathering for state and regional reporting' },
                { icon: Zap, title: 'Title IX', description: 'Confidential reporting channels for safety' },
                { icon: Laptop, title: '1:1 Programs', description: 'Device management and insurance claim automation' }
            ],
            specific: {
                title: 'Built for US Education',
                points: [
                    'Common Core alignment features',
                    'State-level reporting automation',
                    'Alumni fundraising campaign automation',
                    'Emergency notification system (E911)',
                    'Special Education (IEP) meeting scheduling',
                    'Athletics ticketing and support'
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
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-slate-950 to-purple-900/20" />

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
                                <Link href="/contact" className={`px-8 py-4 rounded-lg font-semibold transition-all ${colors.button}`}>Request a Demo</Link>
                                <Link href="/resources" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-all">View Case Studies</Link>
                            </div>
                        </div>
                    </div>
                </section>

                <IndustryStats stats={current.stats} />

                <ChallengeSolution
                    title="Future-Ready Education"
                    subtitle="Empower students and staff with intelligent automation"
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
                    title="Campus Success"
                    subtitle="Institutions leading the way with AI-driven student services"
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
