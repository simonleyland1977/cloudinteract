"use client"

import { Button } from "@/components/ui/button"
import { AudioVisualizer } from "@/components/ui/audio-visualizer"
import { motion } from "framer-motion"
import { useState } from "react"
import { siteConfig } from "@/config/site"
import { MarketingHeader } from "@/components/MarketingHeader"
import { MarketingFooter } from "@/components/MarketingFooter"

import { FeaturesSection } from "@/components/FeaturesSection"
import { SolutionsSection } from "@/components/SolutionsSection"

export function StandardHero() {
    const [showDemo, setShowDemo] = useState(false)

    // Safety check
    if (!siteConfig.landingPage.hero) return null;

    return (
        <div className="flex flex-col min-h-screen bg-background overflow-x-hidden relative">
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

            {/* Unified Header */}
            <MarketingHeader />

            {/* Hero Section */}
            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#B595D8]">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7D55C7] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7D55C7]"></span>
                                </span>
                                {siteConfig.landingPage.hero.badge || "AI Powered"}
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[var(--foreground)] leading-[1.1]">
                                {siteConfig.landingPage.hero.title}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7D55C7] via-[#B595D8] to-[#FFC84D]">
                                    {siteConfig.landingPage.hero.titleGradient}
                                </span>
                            </h1>

                            <p className="text-lg text-[var(--foreground)]/60 max-w-xl leading-relaxed">
                                {siteConfig.landingPage.hero.description}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button
                                    size="lg"
                                    className="h-14 px-8 text-lg"
                                    onClick={() => setShowDemo(true)}
                                >
                                    {siteConfig.landingPage.hero.cta}
                                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                    </svg>
                                </Button>
                                <Button size="lg" variant="outline" className="h-14 px-8 text-lg">
                                    {siteConfig.landingPage.hero.secondaryCta}
                                </Button>
                            </div>

                            <div className="pt-8 flex items-center gap-6 text-[var(--foreground)]/50">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded bg-[#FF9900]/20 flex items-center justify-center">
                                        <span className="text-[10px] font-bold text-[#FF9900]">AWS</span>
                                    </div>
                                    <span className="text-xs text-slate-500">Connect</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded bg-[#FF9900]/20 flex items-center justify-center">
                                        <span className="text-[10px] font-bold text-[#FF9900]">AWS</span>
                                    </div>
                                    <span className="text-xs text-slate-500">Bedrock</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded bg-[#7D55C7]/20 flex items-center justify-center">
                                        <span className="text-[10px] font-bold text-[#B595D8]">NS</span>
                                    </div>
                                    <span className="text-xs text-slate-500">Nova Sonic</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Visual (Abstract Interface) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#7D55C7] to-[#FFC84D] rounded-2xl blur opacity-30"></div>
                            <div className="relative aspect-square rounded-2xl bg-slate-900 border border-white/10 p-8 shadow-2xl flex flex-col items-center justify-center overflow-hidden">
                                {/* Abstract Voice Waves */}
                                <div className="absolute inset-0 bg-[#020617] opacity-90 z-0"></div>
                                <div className="relative z-10 w-full h-full flex items-center justify-center">
                                    <div className="w-64 h-64 rounded-full border border-[#7D55C7]/20 flex items-center justify-center relative">
                                        <div className="absolute inset-0 border border-[#7D55C7]/10 rounded-full animate-[spin_8s_linear_infinite]"></div>
                                        <div className="w-48 h-48 rounded-full border border-[#FFC84D]/20 flex items-center justify-center">
                                            <div className="w-32 h-32 rounded-full bg-[#7D55C7]/10 backdrop-blur-3xl flex items-center justify-center animate-pulse">
                                                <div className="w-16 h-16 rounded-full bg-[#7D55C7] shadow-[0_0_40px_rgba(125,85,199,0.5)]"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating UI Card */}
                                <div className="absolute bottom-8 left-8 right-8 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-4 flex items-center gap-4 z-20">
                                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-white">Intent Detected</div>
                                        <div className="text-xs text-slate-400">Reservation Modification</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </main>

            <FeaturesSection />
            <SolutionsSection />

            {/* Unified Footer */}
            <MarketingFooter />
        </div>
    )
}
