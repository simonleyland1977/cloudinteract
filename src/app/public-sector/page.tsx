"use client"

import { MarketingHeader } from "@/components/MarketingHeader";
import { MarketingFooter } from "@/components/MarketingFooter";
import { Button } from "@/components/ui/button";
import { AudioVisualizer } from "@/components/ui/audio-visualizer";
import { motion } from "framer-motion";
import { useState } from "react";

export default function PublicSectorPage() {
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
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/5" />

                    <div className="container px-6 mx-auto relative">
                        <div className="grid gap-12 lg:grid-cols-2 items-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="space-y-6"
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-300">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                                    </span>
                                    Citizen Experience
                                </div>
                                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white leading-[1.1]">
                                    Modernizing{" "}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                                        Public Service.
                                    </span>
                                </h1>
                                <p className="text-xl text-indigo-300 font-medium">
                                    &quot;Government at the speed of life.&quot;
                                </p>
                                <p className="max-w-[600px] text-slate-400 md:text-lg leading-relaxed">
                                    Streamline public services. Cut red tape and waiting times with intelligent automation that respects every citizen&apos;s time.
                                </p>
                                <div className="flex gap-4 pt-4">
                                    <Button size="lg" className="h-14 px-8">
                                        Request Government Demo
                                    </Button>
                                    <Button size="lg" variant="outline" className="h-14 px-8">
                                        See Case Studies
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
                                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <div className="relative aspect-video rounded-2xl bg-slate-900 border border-white/10 p-8 shadow-2xl flex flex-col items-center justify-center overflow-hidden group-hover:border-indigo-500/30 transition-colors">
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent" />
                                    <div className="relative z-10 text-center">
                                        <div className="mx-auto bg-indigo-500/20 p-4 rounded-full w-20 h-20 flex items-center justify-center text-4xl mb-4 border border-indigo-500/30 group-hover:scale-110 transition-transform">
                                            🏛️
                                        </div>
                                        <p className="font-semibold text-white">Try License Renewal Demo</p>
                                        <p className="text-sm text-slate-500 mt-2">Click to speak with Nova</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Benefits Grid */}
                <section className="w-full py-24 bg-slate-900/50 border-y border-white/5">
                    <div className="container px-6 mx-auto">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <h2 className="text-3xl font-bold text-white mb-4">Built for Government</h2>
                            <p className="text-slate-400">
                                Designed to meet the unique requirements of public sector agencies.
                            </p>
                        </div>
                        <div className="grid gap-8 md:grid-cols-3">
                            {[
                                {
                                    icon: (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10" />
                                            <line x1="2" x2="22" y1="12" y2="12" />
                                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                        </svg>
                                    ),
                                    title: "Multilingual Support",
                                    desc: "Real-time translation breaking down language barriers, ensuring equitable access for all residents.",
                                    color: "indigo"
                                },
                                {
                                    icon: (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M12 6v6l4 2" />
                                        </svg>
                                    ),
                                    title: "Accessibility First",
                                    desc: "WCAG compliant interfaces across voice and chat, making services accessible to citizens with disabilities.",
                                    color: "purple"
                                },
                                {
                                    icon: (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="12" x2="12" y1="2" y2="22" />
                                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                        </svg>
                                    ),
                                    title: "Cost Efficiency",
                                    desc: "Handle high volumes of tax, permit, and utility inquiries automatically, saving taxpayer money.",
                                    color: "teal"
                                }
                            ].map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-colors group"
                                >
                                    <div className={`w-12 h-12 rounded-lg bg-${feature.color}-500/10 flex items-center justify-center mb-4 text-${feature.color}-400 group-hover:bg-${feature.color}-500/20 transition-colors`}>
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                                    <p className="text-sm text-slate-400">{feature.desc}</p>
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
                                <h2 className="text-3xl font-bold tracking-tight text-white">
                                    Use Case: License Renewal
                                </h2>
                                <p className="text-slate-400 text-lg">
                                    Eliminate long lines at the DMV. Citizens can renew licenses, pay fines, and request permits through a simple conversation.
                                </p>
                                <ul className="space-y-3 text-slate-400">
                                    <li className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Secure Identity Verification
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Instant Payment Processing
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Digital document delivery
                                    </li>
                                </ul>
                            </div>
                            <div className="flex-1 max-w-md w-full">
                                <div className="border border-white/10 rounded-2xl bg-slate-900/50 p-6 shadow-xl backdrop-blur-sm">
                                    <div className="space-y-4 text-sm">
                                        <div className="flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-xs border border-indigo-500/30">🏛️</div>
                                            <div className="bg-white/5 border border-white/10 p-3 rounded-2xl rounded-tl-none text-slate-300">
                                                Welcome to City Services. Are you calling about a renewal or a new application?
                                            </div>
                                        </div>
                                        <div className="flex gap-3 flex-row-reverse">
                                            <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-xs border border-emerald-500/30">👤</div>
                                            <div className="bg-indigo-500 text-white p-3 rounded-2xl rounded-tr-none">
                                                I need to renew my business license.
                                            </div>
                                        </div>
                                        <div className="flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-xs border border-indigo-500/30">🏛️</div>
                                            <div className="bg-white/5 border border-white/10 p-3 rounded-2xl rounded-tl-none text-slate-300">
                                                I can help with that. Please state your license number or business name.
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
