"use client"

import { MarketingHeader } from "@/components/MarketingHeader"
import { MarketingFooter } from "@/components/MarketingFooter"
import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"

export default function HealthcarePage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-950">
            <MarketingHeader />
            <main className="flex-grow pt-20">
                {/* Hero Section */}
                <section className="relative py-24 md:py-32 overflow-hidden">
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-950 to-purple-900/20" />

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
                                Patient Experience Reimagined
                            </div>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                                Healthcare Solutions
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                    Built for Your Region
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                                Choose your region to explore AI-powered contact center solutions tailored to your healthcare system's unique requirements and compliance needs.
                            </p>
                        </div>

                        {/* Regional Cards */}
                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16">
                            {/* UK Card */}
                            <Link href="/healthcare/uk" className="group">
                                <div className="relative bg-slate-900/50 border border-slate-800 rounded-2xl p-8 md:p-10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 h-full">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="p-3 bg-blue-500/10 rounded-lg">
                                            <MapPin className="w-8 h-8 text-blue-400" />
                                        </div>
                                        <ArrowRight className="w-6 h-6 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                                    </div>

                                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                        United Kingdom
                                    </h2>

                                    <p className="text-slate-400 mb-6">
                                        NHS & Private Care solutions with GDPR compliance, NHS Digital integration, and UK-specific healthcare system support.
                                    </p>

                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-sm text-slate-500">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                            <span>NHS System Integration</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-slate-500">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                            <span>GDPR & Data Protection</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-slate-500">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                            <span>24/7 NHS 111 Support</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            {/* US Card */}
                            <Link href="/healthcare/us" className="group">
                                <div className="relative bg-slate-900/50 border border-slate-800 rounded-2xl p-8 md:p-10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 h-full">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="p-3 bg-purple-500/10 rounded-lg">
                                            <MapPin className="w-8 h-8 text-purple-400" />
                                        </div>
                                        <ArrowRight className="w-6 h-6 text-slate-600 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                                    </div>

                                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                        United States
                                    </h2>

                                    <p className="text-slate-400 mb-6">
                                        HIPAA-compliant solutions with Epic, Cerner, and major EHR integration, plus insurance verification and billing support.
                                    </p>

                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-sm text-slate-500">
                                            <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                                            <span>HIPAA Compliance</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-slate-500">
                                            <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                                            <span>Epic & Cerner Integration</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-slate-500">
                                            <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                                            <span>Insurance Verification</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Bottom CTA */}
                        <div className="text-center mt-16">
                            <p className="text-slate-400 mb-4">
                                Need a custom solution or covering multiple regions?
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
                            >
                                Contact our team
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <MarketingFooter />
        </div>
    )
}
