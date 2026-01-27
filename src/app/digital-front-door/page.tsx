"use client"

import { useState } from 'react'
import Link from 'next/link'
import { MarketingHeader } from '@/components/MarketingHeader'
import { MarketingFooter } from '@/components/MarketingFooter'

// Phase data
const phases = [
    {
        id: 'challenges',
        title: 'CHALLENGES',
        subtitle: 'Current State',
        color: '#EE5340',
        capabilities: [
            {
                icon: '🏚️',
                title: 'Legacy Contact Center',
                description: 'On-premise systems with limited scalability',
                details: ['Outdated infrastructure', 'High maintenance costs', 'Limited remote capabilities', 'Poor disaster recovery'],
                isChallenge: true
            },
            {
                icon: '🧩',
                title: 'Point AI Solutions',
                description: 'Fragmented AI tools without unified strategy',
                details: ['Siloed AI implementations', 'Inconsistent experiences', 'Duplicate vendor costs', 'No unified data layer'],
                isChallenge: true
            },
            {
                icon: '🔌',
                title: 'No Integration',
                description: 'Disconnected systems and manual processes',
                details: ['Manual data entry', 'Context switching', 'Incomplete customer view', 'Slow resolution times'],
                isChallenge: true
            }
        ]
    },
    {
        id: 'migrate',
        title: 'MIGRATE',
        subtitle: 'Cloud Foundation',
        color: '#7D55C7',
        capabilities: [
            {
                icon: '☁️',
                title: 'AWS Connect',
                description: 'Cloud-native contact center platform',
                details: ['Pay-per-use pricing', 'Instant scalability', 'Built-in redundancy', 'Global availability']
            },
            {
                icon: '📞',
                title: 'Telephony Migration',
                description: 'Move voice services to the cloud',
                details: ['Number porting', 'IVR migration', 'Call flows redesign', 'Quality assurance']
            },
            {
                icon: '👥',
                title: 'Agent Desktop',
                description: 'Modern unified agent experience',
                details: ['Single pane of glass', 'Softphone capabilities', 'Real-time guidance', 'Customizable workspace']
            }
        ]
    },
    {
        id: 'integrate',
        title: 'INTEGRATE',
        subtitle: 'Connect Systems',
        color: '#B595D8',
        capabilities: [
            {
                icon: '💼',
                title: 'CRM Integration',
                description: 'Salesforce, Dynamics, ServiceNow',
                details: ['Customer 360 view', 'Screen pops', 'Case management', 'Interaction logging']
            },
            {
                icon: '📊',
                title: 'ERP & Backend',
                description: 'SAP, Oracle, order & billing systems',
                details: ['Order status lookup', 'Account information', 'Billing inquiries', 'Inventory checks']
            },
            {
                icon: '👤',
                title: 'HR & Workforce',
                description: 'Workday, scheduling, WFM tools',
                details: ['Agent scheduling', 'Skills management', 'Performance data', 'Training integration']
            }
        ]
    },
    {
        id: 'accelerate',
        title: 'ACCELERATE',
        subtitle: 'AI Services',
        color: '#FF8A3D',
        capabilities: [
            {
                icon: '🧠',
                title: 'Amazon Bedrock',
                description: 'Foundation models for generative AI',
                details: ['Agent assist summaries', 'Knowledge base Q&A', 'Content generation', 'Sentiment analysis']
            },
            {
                icon: '🎙️',
                title: 'Nova Sonic',
                description: 'Real-time voice AI capabilities',
                details: ['Speech-to-text', 'Text-to-speech', 'Voice biometrics', 'Real-time translation']
            },
            {
                icon: '🤖',
                title: 'AI Agents',
                description: 'Autonomous task completion',
                details: ['Intent recognition', 'Multi-turn conversations', 'Action execution', 'Handoff to humans']
            }
        ]
    },
    {
        id: 'dfd',
        title: 'DIGITAL FRONT DOOR',
        subtitle: 'Outcome',
        color: '#FFC84D',
        capabilities: [
            {
                icon: '🌐',
                title: 'Omnichannel Experience',
                description: 'Seamless journey across all channels',
                details: ['Voice, chat, email, social', 'Consistent context', 'Channel switching', 'Unified history']
            },
            {
                icon: '⚡',
                title: 'Instant Resolution',
                description: 'AI-powered self-service at scale',
                details: ['24/7 availability', 'Personalized responses', 'Complex task handling', 'Continuous learning']
            },
            {
                icon: '📈',
                title: 'Business Outcomes',
                description: 'Measurable improvements',
                details: ['40% cost reduction', '90% first contact resolution', 'NPS improvement', 'Agent satisfaction']
            }
        ]
    }
]

function CapabilityCard({ capability, phaseColor }: { capability: { icon: string; title: string; description: string; details: string[]; isChallenge?: boolean }, phaseColor: string }) {
    const [expanded, setExpanded] = useState(false)

    return (
        <div
            className={`rounded-xl p-4 cursor-pointer transition-all duration-300 border-l-4 border-transparent hover:border-l-[${phaseColor}] ${capability.isChallenge ? 'bg-red-500/10 border border-dashed border-red-500/30 hover:bg-red-500/15' : 'bg-black/20 dark:bg-black/20 hover:bg-black/30'}`}
            style={{ borderLeftColor: expanded ? phaseColor : 'transparent' }}
            onClick={() => setExpanded(!expanded)}
        >
            <h4 className="text-sm font-semibold mb-1 flex items-center gap-2">
                <span className="text-base">{capability.icon}</span>
                <span className="text-[var(--foreground)]">{capability.title}</span>
            </h4>
            <p className="text-[var(--foreground)]/60 text-xs leading-relaxed">{capability.description}</p>

            <div className={`overflow-hidden transition-all duration-300 ${expanded ? 'max-h-48 mt-3' : 'max-h-0'}`}>
                <ul className="space-y-1">
                    {capability.details.map((detail, i) => (
                        <li key={i} className="text-xs text-[var(--foreground)]/50 flex items-center gap-2 py-1 border-b border-white/5 last:border-0">
                            <span style={{ color: phaseColor }}>→</span>
                            {detail}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

// Assessment data
const assessmentQuestions = [
    { id: 'challenges', title: 'Challenges', question: 'Current pain level?', color: '#EE5340', options: ['Minimal', 'Manageable', 'Moderate', 'Significant', 'Critical'] },
    { id: 'migrate', title: 'Migrate', question: 'Cloud migration status?', color: '#7D55C7', options: ['Not Started', 'Planning', 'In Progress', 'Mostly Done', 'Complete'] },
    { id: 'integrate', title: 'Integrate', question: 'Systems connected?', color: '#B595D8', options: ['None', 'CRM Only', 'CRM + ERP', 'Most Systems', 'Fully Unified'] },
    { id: 'accelerate', title: 'Accelerate', question: 'AI adoption level?', color: '#FF8A3D', options: ['No AI', 'Basic Bots', 'Analytics', 'Gen AI Pilot', 'AI-First'] },
    { id: 'dfd', title: 'Digital Front Door', question: 'Customer experience?', color: '#FFC84D', options: ['Phone Only', 'Multi-channel', 'Omnichannel', 'Seamless', 'Exceptional'] },
]

const recommendations: Record<string, string> = {
    migrate: 'Start your cloud journey with AWS Connect. Migrate telephony and agent desktop to establish a modern foundation.',
    integrate: 'Connect your CRM and ERP systems to provide agents with unified customer context and improve resolution times.',
    accelerate: 'Deploy Amazon Bedrock and Nova Sonic to enable AI-powered agent assist, transcription, and intelligent routing.',
    dfd: 'Enable omnichannel engagement with webchat, voice, and video to create a seamless Digital Front Door experience.'
}

function AssessmentGrid() {
    const [scores, setScores] = useState<Record<string, number>>({})

    const handleSelect = (phaseId: string, value: number) => {
        setScores(prev => ({ ...prev, [phaseId]: value }))
    }

    // Find lowest scoring phase (excluding challenges)
    const getRecommendation = () => {
        const progressPhases = ['migrate', 'integrate', 'accelerate', 'dfd']
        let lowest: { phase: string; score: number } | null = null

        for (const phase of progressPhases) {
            if (scores[phase] !== undefined) {
                if (!lowest || scores[phase] < lowest.score) {
                    lowest = { phase, score: scores[phase] }
                }
            }
        }

        return lowest
    }

    const recommendation = getRecommendation()

    return (
        <>
            {/* Assessment Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
                {assessmentQuestions.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5"
                        style={{ borderTopColor: item.color, borderTopWidth: '3px' }}
                    >
                        <h4 className="text-sm font-semibold text-center mb-4" style={{ color: item.color }}>{item.title}</h4>
                        <p className="text-xs text-[var(--foreground)]/50 text-center mb-4">{item.question}</p>
                        <div className="flex flex-col gap-2">
                            {item.options.map((option, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleSelect(item.id, i + 1)}
                                    className={`w-full py-2 px-3 rounded-lg text-xs text-left transition-all ${scores[item.id] === i + 1
                                            ? 'text-white'
                                            : 'bg-black/20 text-[var(--foreground)]/60 hover:bg-black/30 border border-white/10'
                                        }`}
                                    style={scores[item.id] === i + 1 ? { backgroundColor: item.color } : {}}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Results Summary */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-center mb-8 text-[var(--foreground)]">📊 Your Journey Progress</h3>

                {/* Maturity Bars */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
                    {assessmentQuestions.map((item) => {
                        const score = scores[item.id] || 0
                        const percentage = (score / 5) * 100
                        return (
                            <div key={item.id} className="text-center">
                                <p className="text-xs font-semibold mb-2" style={{ color: item.color }}>{item.title}</p>
                                <div className="h-24 bg-black/20 rounded-lg overflow-hidden flex items-end">
                                    <div
                                        className="w-full rounded-t-lg transition-all duration-500 flex items-start justify-center pt-2"
                                        style={{
                                            height: `${percentage}%`,
                                            backgroundColor: item.color,
                                            minHeight: score > 0 ? '20%' : '0%'
                                        }}
                                    >
                                        {score > 0 && <span className="text-xs font-bold text-white">{percentage}%</span>}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Recommendation */}
                <div className="bg-black/20 rounded-xl p-6 text-center">
                    <h4 className="text-sm font-semibold mb-2 text-[var(--foreground)]">📋 Next Steps</h4>
                    {recommendation ? (
                        <p className="text-sm text-[var(--foreground)]/60">
                            <strong style={{ color: assessmentQuestions.find(q => q.id === recommendation.phase)?.color }}>
                                {assessmentQuestions.find(q => q.id === recommendation.phase)?.title}
                            </strong> needs attention. {recommendations[recommendation.phase]}
                        </p>
                    ) : (
                        <p className="text-sm text-[var(--foreground)]/60">
                            Select your status for each phase to see personalized recommendations.
                        </p>
                    )}
                </div>
            </div>
        </>
    )
}

export default function DigitalFrontDoorPage() {
    return (
        <div className="min-h-screen bg-[var(--background)]">
            <MarketingHeader />

            {/* Background gradient */}
            <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_10%_30%,rgba(238,83,64,0.08)_0%,transparent_40%),radial-gradient(ellipse_at_30%_60%,rgba(125,85,199,0.08)_0%,transparent_40%),radial-gradient(ellipse_at_50%_40%,rgba(181,149,216,0.06)_0%,transparent_40%),radial-gradient(ellipse_at_70%_70%,rgba(255,138,61,0.08)_0%,transparent_40%),radial-gradient(ellipse_at_90%_30%,rgba(255,200,77,0.08)_0%,transparent_40%)]" />

            {/* Header */}
            <header className="text-center pt-32 pb-12 px-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[var(--foreground)] to-[var(--foreground)]/60 bg-clip-text text-transparent">
                    Journey to the Digital Front Door
                </h1>
                <p className="text-lg text-[var(--foreground)]/60 max-w-2xl mx-auto">
                    Transform your contact center from legacy challenges to seamless, AI-powered customer experiences.
                </p>
            </header>

            {/* Progress Arrow */}
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <div className="hidden lg:flex items-center justify-center gap-0">
                    {phases.map((phase, index) => (
                        <div key={phase.id} className="flex items-center">
                            <div
                                className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-center min-w-[140px]"
                                style={{ borderBottomColor: phase.color, borderBottomWidth: '3px' }}
                            >
                                <h3 className="text-xs font-bold" style={{ color: phase.color }}>{phase.title}</h3>
                                <span className="text-[10px] text-[var(--foreground)]/50">{phase.subtitle}</span>
                            </div>
                            {index < phases.length - 1 && (
                                <div className="w-8 h-0.5 relative" style={{ background: `linear-gradient(to right, ${phase.color}, ${phases[index + 1].color})` }}>
                                    <span className="absolute -right-1 -top-2 text-sm" style={{ color: phases[index + 1].color }}>→</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Phases Grid */}
            <div className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {phases.map((phase) => (
                        <div key={phase.id} className="flex flex-col">
                            {/* Phase Header */}
                            <div
                                className="text-center p-5 bg-white/5 backdrop-blur-lg border border-white/10 rounded-t-2xl"
                                style={{ borderBottomColor: phase.color, borderBottomWidth: '3px' }}
                            >
                                <h2 className="text-sm font-bold mb-1" style={{ color: phase.color }}>{phase.title}</h2>
                                <span className="text-xs text-[var(--foreground)]/50">{phase.subtitle}</span>
                            </div>

                            {/* Capabilities */}
                            <div className="flex-1 bg-white/5 backdrop-blur-lg border border-white/10 border-t-0 rounded-b-2xl p-4 space-y-3">
                                {phase.capabilities.map((cap, i) => (
                                    <CapabilityCard key={i} capability={cap} phaseColor={phase.color} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Assessment Section */}
            <div className="max-w-7xl mx-auto px-6 pb-16">
                <div className="flex items-center gap-4 mb-8">
                    <h3 className="text-xl font-semibold text-[var(--foreground)] whitespace-nowrap">📍 Where are you on the journey?</h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
                </div>

                <AssessmentGrid />
            </div>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-gradient-to-b from-transparent to-[#7D55C7]/10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">Ready to Start Your Journey?</h2>
                    <p className="text-[var(--foreground)]/60 mb-8 max-w-xl mx-auto">
                        Let us help you transform your contact center with AWS Connect and AI-powered capabilities.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/#contact"
                            className="px-8 py-3 rounded-lg bg-[#7D55C7] text-white font-medium hover:bg-[#6a48ab] transition-colors"
                        >
                            Book a Consultation
                        </Link>
                        <Link
                            href="/resources"
                            className="px-8 py-3 rounded-lg border border-white/20 text-[var(--foreground)] font-medium hover:bg-white/5 transition-colors"
                        >
                            View Resources
                        </Link>
                    </div>
                </div>
            </section>

            <MarketingFooter />
        </div>
    )
}
