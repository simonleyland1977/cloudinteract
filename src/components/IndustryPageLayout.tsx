"use client"

import { MarketingHeader } from "@/components/MarketingHeader"
import { MarketingFooter } from "@/components/MarketingFooter"
import { Button } from "@/components/ui/button"
import { AudioVisualizer } from "@/components/ui/audio-visualizer"
import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"

export interface IndustryPageProps {
    title: string
    subtitle: string
    description: string
    heroTag: string
    gradient: string // e.g., "from-blue-500 to-cyan-500"
    challenges: {
        title: string
        description: string
        icon: React.ReactNode
    }[]
    trio: {
        videoUrl?: string // Placeholder
        demoTitle: string
        tryUrl: string
    }
    caseStudy: {
        title: string
        description: string
        metrics: string[]
        quote?: string
    }
}

export function IndustryPageLayout(props: IndustryPageProps) {
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
                    onClick={() => setShowDemo(false)}
                >
                    <div className="w-full max-w-2xl aspect-square md:aspect-video bg-slate-900 rounded-2xl border border-white/10 p-4 relative" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => setShowDemo(false)}
                            className="absolute top-4 right-4 text-white hover:text-red-400 z-10"
                        >
                            Close
                        </button>
                        <AudioVisualizer isListening={showDemo} onStop={() => setShowDemo(false)} />
                        <div className="absolute bottom-4 left-0 right-0 text-center text-slate-400 text-sm">
                            Microphone Active - Speak to test
                        </div>
                    </div>
                </motion.div>
            )}

            <MarketingHeader />

            <main className="flex-1 pt-16">
                {/* Hero Section */}
                <section className="w-full py-24 md:py-32 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${props.gradient} opacity-5`} />

                    <div className="container px-6 mx-auto relative">
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300 mx-auto"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-current`}></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
                                </span>
                                {props.heroTag}
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-[var(--foreground)] leading-[1.1]"
                            >
                                {props.title}
                                <span className={`block text-transparent bg-clip-text bg-gradient-to-r ${props.gradient}`}>
                                    {props.subtitle}
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-xl text-[var(--foreground)]/60 max-w-2xl mx-auto leading-relaxed"
                            >
                                {props.description}
                            </motion.p>
                        </div>
                    </div>
                </section>

                {/* Challenges Section - MOVED UP */}
                <section className="w-full py-24">
                    <div className="container px-6 mx-auto">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">Solves Critical Challenges</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {props.challenges.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* The "Trio" Section (Video, Demo, Link) - MOVED DOWN */}
                <section className="w-full py-24 bg-slate-900/50 border-y border-white/5">
                    <div className="container px-6 mx-auto">
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* 1. Video */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative aspect-video rounded-2xl bg-black border border-white/10 overflow-hidden flex items-center justify-center cursor-pointer hover:border-blue-500/50 transition-colors"
                            >
                                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                                <div className="z-10 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                </div>
                                <div className="absolute bottom-4 left-4 font-semibold text-white">Watch Overview</div>
                            </motion.div>

                            {/* 2. Interactive Demo */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                viewport={{ once: true }}
                                onClick={() => setShowDemo(true)}
                                className="group relative aspect-video rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 overflow-hidden flex items-center justify-center cursor-pointer hover:border-blue-500/50 transition-colors"
                            >
                                <div className="z-10 flex flex-col items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-2xl border border-blue-500/30 group-hover:animate-pulse">
                                        🎙️
                                    </div>
                                    <div className="font-semibold text-white">{props.trio.demoTitle}</div>
                                    <div className="text-xs text-slate-400 bg-white/5 px-2 py-1 rounded-full border border-white/10">Interactive Demo</div>
                                </div>
                            </motion.div>

                            {/* 3. Try It Link */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                viewport={{ once: true }}
                                className="group relative aspect-video rounded-2xl bg-slate-900 border border-white/10 overflow-hidden flex flex-col items-center justify-center p-8 text-center hover:border-blue-500/50 transition-colors"
                            >
                                <h3 className="text-xl font-bold text-white mb-2">Try for Yourself</h3>
                                <p className="text-sm text-slate-400 mb-6">This will take you to a demo site</p>
                                <Link
                                    href={props.trio.tryUrl}
                                    className="px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-slate-200 transition-colors"
                                >
                                    Try it Now &rarr;
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Case Study Section */}
                <section className="w-full py-24 bg-gradient-to-b from-slate-900/0 to-slate-900/50">
                    <div className="container px-6 mx-auto">
                        <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${props.gradient} opacity-10 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3`} />

                            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold mb-6">SUCCESS STORY</div>
                                    <h2 className="text-3xl font-bold text-white mb-4">{props.caseStudy.title}</h2>
                                    <p className="text-lg text-slate-400 mb-8">{props.caseStudy.description}</p>

                                    <div className="grid grid-cols-2 gap-6">
                                        {props.caseStudy.metrics.map((metric, i) => (
                                            <div key={i} className="border-l-2 border-white/10 pl-4">
                                                <div className="text-white font-bold">{metric}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-white/5 rounded-2xl p-8 border border-white/5">
                                    <svg className="w-8 h-8 text-blue-500 mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.01703C7.91246 16 7.01703 16.8954 7.01703 18V21H2.01703V18C2.01703 14.134 5.15104 11 9.01703 11H12.017C15.883 11 19.017 14.134 19.017 18V21H14.017ZM12.017 9C9.80789 9 8.01703 7.20914 8.01703 5C8.01703 2.79086 9.80789 1 12.017 1C14.2262 1 16.017 2.79086 16.017 5C16.017 7.20914 14.2262 9 12.017 9Z" /></svg>
                                    <blockquote className="text-xl text-slate-300 italic mb-6">
                                        "{props.caseStudy.quote || "This solution completely transformed how we interact with our customers. The AI handles the routine, our team handles the complex."}"
                                    </blockquote>
                                    <div>
                                        <div className="font-bold text-white">Director of CX</div>
                                        <div className="text-sm text-slate-500">Leading Organization</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer CTA */}
                <section className="w-full py-24 text-center">
                    <div className="container px-6 mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to transform your {props.title}?</h2>
                        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
                            <div className="flex-1 max-w-sm p-6 bg-slate-900/50 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors">
                                <h3 className="text-xl font-semibold text-white mb-2">Modernize Infrastructure</h3>
                                <p className="text-sm text-slate-400 mb-6">Move your contact center to the cloud with zero risk.</p>
                                <Link href="/services/migration">
                                    <Button size="lg" className="w-full bg-slate-800 hover:bg-slate-700 text-white border border-slate-700">
                                        Start Migration Journey
                                    </Button>
                                </Link>
                            </div>

                            <div className="flex-1 max-w-sm p-6 bg-blue-900/20 rounded-2xl border border-blue-500/20 hover:border-blue-500/50 transition-colors">
                                <h3 className="text-xl font-semibold text-white mb-2">Deploy AI Agents</h3>
                                <p className="text-sm text-slate-400 mb-6">Automate calls and chats with next-gen intelligence.</p>
                                <Link href="/solutions/digital-front-door">
                                    <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-500 text-white">
                                        Deploy AI Solutions
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <MarketingFooter />
        </div>
    )
}
