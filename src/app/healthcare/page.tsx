"use client"

import { MarketingHeader } from "@/components/MarketingHeader";
import { MarketingFooter } from "@/components/MarketingFooter";
import { Button } from "@/components/ui/button";
import { AudioVisualizer } from "@/components/ui/audio-visualizer";
import { motion } from "framer-motion";
import { useState } from "react";

export default function HealthcarePage() {
    const [showDemo, setShowDemo] = useState(false)

    return (
        <div className="flex flex-col min-h-screen bg-background">
            {/* Demo Overlay */}
            {showDemo && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
                >
                    <div className="w-full max-w-2xl aspect-square md:aspect-video">
                        <AudioVisualizer isListening={showDemo} onStop={() => setShowDemo(false)} />
                    </div>
                </motion.div>
            )}

            <MarketingHeader />

            <main className="flex-1 pt-16">
                {/* Hero Section */}
                <section className="w-full py-24 md:py-32 relative overflow-hidden">
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/5" />

                    <div className="container px-6 mx-auto relative">
                        <div className="grid gap-12 lg:grid-cols-2 items-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="space-y-6"
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-300">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                    </span>
                                    Patient Experience
                                </div>
                                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-[var(--foreground)] leading-[1.1]">
                                    Patient-Centric{" "}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                        Automation.
                                    </span>
                                </h1>
                                <p className="text-xl text-blue-300 font-medium">
                                    &quot;Care that never sleeps.&quot;
                                </p>
                                <p className="max-w-[600px] text-[var(--foreground)]/60 md:text-lg leading-relaxed">
                                    Empower patients with instant, empathetic answers. Reduce anxiety and improve health outcomes with AI-driven triage and scheduling.
                                </p>
                                <div className="flex gap-4 pt-4">
                                    <Button size="lg" className="h-14 px-8">
                                        Request Healthcare Demo
                                    </Button>
                                    <Button size="lg" variant="outline" className="h-14 px-8">
                                        View Case Studies
                                    </Button>
                                </div>
                            </motion.div>

                            {/* Visual Demo Card - Clickable */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative cursor-pointer group"
                                onClick={() => setShowDemo(true)}
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <div className="relative aspect-video rounded-2xl bg-slate-900 border border-white/10 p-8 shadow-2xl flex flex-col items-center justify-center overflow-hidden group-hover:border-blue-500/30 transition-colors">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent" />
                                    <div className="relative z-10 text-center">
                                        <div className="mx-auto bg-blue-500/20 p-4 rounded-full w-20 h-20 flex items-center justify-center text-4xl mb-4 border border-blue-500/30 group-hover:scale-110 transition-transform">
                                            🩺
                                        </div>
                                        <p className="font-semibold text-[var(--foreground)]">Try Patient Triage Demo</p>
                                        <p className="text-sm text-[var(--foreground)]/50 mt-2">Click to speak with Nova</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Benefits Grid */}
                <section className="w-full py-24 bg-[var(--card)] border-y border-[var(--border)]">
                    <div className="container px-6 mx-auto">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">Healthcare-Grade AI</h2>
                            <p className="text-[var(--foreground)]/60">
                                Purpose-built for the unique challenges of patient communication.
                            </p>
                        </div>
                        <div className="grid gap-8 md:grid-cols-3">
                            {[
                                {
                                    icon: (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10" />
                                            <polyline points="12 6 12 12 16 14" />
                                        </svg>
                                    ),
                                    title: "24/7 Availability",
                                    desc: "Immediate responses to common queries like visiting hours, prep instructions, and location, any time of day.",
                                    color: "blue"
                                },
                                {
                                    icon: (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                                        </svg>
                                    ),
                                    title: "Empathy & Tone Analysis",
                                    desc: "Use Amazon Bedrock to detect patient distress and adjust response tone or escalate to a human nurse immediately.",
                                    color: "rose"
                                },
                                {
                                    icon: (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                                        </svg>
                                    ),
                                    title: "HIPAA Compliant",
                                    desc: "Built on AWS HIPAA-eligible services with strict data encryption and access controls.",
                                    color: "emerald"
                                }
                            ].map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors group"
                                >
                                    <div className={`w-12 h-12 rounded-lg bg-${feature.color}-500/10 flex items-center justify-center mb-4 text-${feature.color}-400 group-hover:bg-${feature.color}-500/20 transition-colors`}>
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">{feature.title}</h3>
                                    <p className="text-sm text-[var(--foreground)]/60">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Use Case Spotlight */}
                <section className="w-full py-24">
                    <div className="container px-6 mx-auto">
                        <div className="flex flex-col lg:flex-row gap-12 items-center">
                            <div className="flex-1 space-y-6">
                                <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)]">
                                    Use Case: Appointment Scheduling
                                </h2>
                                <p className="text-[var(--foreground)]/60 text-lg">
                                    Reduce no-shows and administrative burden. Our conversational agent can book, reschedule, and cancel appointments directly into your EHR system.
                                </p>
                                <ul className="space-y-3 text-[var(--foreground)]/60">
                                    <li className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Natural Language Understanding of dates/times
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Automated reminders via SMS/Voice
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        EHR system integration
                                    </li>
                                </ul>
                            </div>
                            <div className="flex-1 max-w-md w-full">
                                <div className="border border-white/10 rounded-2xl bg-slate-900/50 p-6 shadow-xl backdrop-blur-sm">
                                    <div className="space-y-4 text-sm">
                                        <div className="flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-xs border border-blue-500/30">🤖</div>
                                            <div className="bg-white/5 border border-white/10 p-3 rounded-2xl rounded-tl-none text-slate-300">
                                                Hello, welcome to HealthPlus. How can I help you today?
                                            </div>
                                        </div>
                                        <div className="flex gap-3 flex-row-reverse">
                                            <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-xs border border-emerald-500/30">👤</div>
                                            <div className="bg-blue-500 text-white p-3 rounded-2xl rounded-tr-none">
                                                I need to see Dr. Smith next week.
                                            </div>
                                        </div>
                                        <div className="flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-xs border border-blue-500/30">🤖</div>
                                            <div className="bg-white/5 border border-white/10 p-3 rounded-2xl rounded-tl-none text-slate-300">
                                                Dr. Smith has openings on Tuesday at 10 AM or Thursday at 2 PM. Which works for you?
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <MarketingFooter />
        </div>
    );
}
