"use client"

import { Shield, Briefcase, LineChart, Code, Sparkles, Zap, Network, Globe, Mail, Server, Cloud, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AWSPortalPage() {
    return (
        <div className="min-h-screen bg-slate-950">
            {/* Background gradient */}
            <div className="fixed inset-0 bg-gradient-to-br from-orange-900/20 via-slate-950 to-slate-950" />

            <div className="relative z-10">
                {/* Header */}
                <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center space-x-3">
                                <Image
                                    src="/logos/logo-white.png"
                                    alt="CloudInteract"
                                    width={32}
                                    height={32}
                                    className="w-8 h-8"
                                />
                                <div className="flex items-center space-x-2">
                                    <span className="text-white font-semibold">CloudInteract</span>
                                    <span className="text-slate-500">|</span>
                                    <span className="text-slate-400 text-sm">AWS Partner Portal</span>
                                </div>
                            </div>
                            <Link
                                href="mailto:contact@cloudinteract.ai"
                                className="flex items-center space-x-2 px-4 py-2 bg-orange-600/10 hover:bg-orange-600/20 border border-orange-600/30 rounded-lg text-orange-400 hover:text-orange-300 transition-colors"
                            >
                                <Mail size={16} />
                                <span className="font-medium">Contact Alliances</span>
                            </Link>
                        </div>
                    </div>
                </header>

                <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="max-w-6xl mx-auto space-y-20">
                        {/* Hero Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left Column - Information */}
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-600/10 border border-orange-600/20 rounded-full text-orange-400 text-sm font-medium">
                                        <Sparkles size={14} />
                                        <span>Official AWS Advanced Partner</span>
                                    </div>
                                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                        Sell Amazon Connect & <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                                            Agentic AI Solutions
                                        </span>
                                    </h1>

                                    <p className="text-xl text-slate-300 leading-relaxed">
                                        We help you retire quota by delivering turnkey Contact Center Migrations, Managed Services, and AI Overlay solutions.
                                    </p>
                                </div>
                            </div>

                            {/* Right Column - CTA */}
                            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 shadow-2xl">
                                <div className="mb-8">
                                    <h2 className="text-xl font-bold text-white mb-2">Partner Resources</h2>
                                    <p className="text-slate-400 text-sm">
                                        Access cheat sheets, battle cards, and pricing calculators.
                                    </p>
                                </div>

                                <div className="grid gap-4">
                                    <Link
                                        href="/aws-portal/dashboard"
                                        className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-orange-600 transition-all flex items-center justify-between"
                                    >
                                        <span>View Partner Dashboard</span>
                                        <ArrowRight size={20} />
                                    </Link>
                                    <div className="grid grid-cols-2 gap-4">
                                        <Link href="/aws-portal/product-managers" className="p-4 bg-slate-800 hover:bg-slate-700 rounded-lg text-center transition-colors">
                                            <div className="text-orange-400 font-bold mb-1">Product</div>
                                            <div className="text-xs text-slate-400">Deep Dives</div>
                                        </Link>
                                        <Link href="/aws-portal/account-executives" className="p-4 bg-slate-800 hover:bg-slate-700 rounded-lg text-center transition-colors">
                                            <div className="text-orange-400 font-bold mb-1">Sales</div>
                                            <div className="text-xs text-slate-400">Battle Cards</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3 Sales Motions - Aligned with Homepage */}
                        <div className="border-t border-slate-800 pt-16">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-white mb-4">
                                    3 Ways to Engage Us
                                </h2>
                                <p className="text-slate-400 max-w-2xl mx-auto">
                                    We align with your customers' journey stage, from fresh migrations to AI innovation. All transacted via AWS Marketplace.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                {/* Motion 1: Migration */}
                                <div className="group bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 rounded-xl p-8 transition-all">
                                    <div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center mb-6 text-blue-400">
                                        <Server className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">1. Deploy & Migrate</h3>
                                    <p className="text-slate-400 mb-6 text-sm leading-relaxed min-h-[60px]">
                                        For customers who want to own their environment. We provide Professional Services for lift-and-shift or re-platforming from Avaya/Cisco.
                                    </p>
                                    <div className="text-xs font-mono text-slate-500 bg-slate-950 p-3 rounded border border-slate-800">
                                        Ideal for: IT-led transformations, Regulatory Control Needs
                                    </div>
                                </div>

                                {/* Motion 2: Managed Service */}
                                <div className="group bg-slate-900/40 border border-slate-800 hover:border-purple-500/50 rounded-xl p-8 transition-all relative">
                                    <div className="absolute top-0 right-0 bg-purple-600/20 text-purple-300 text-[10px] font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg border-l border-b border-purple-500/30 uppercase">
                                        High MRR
                                    </div>
                                    <div className="w-12 h-12 bg-purple-900/20 rounded-lg flex items-center justify-center mb-6 text-purple-400">
                                        <Cloud className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">2. Managed Service</h3>
                                    <p className="text-slate-400 mb-6 text-sm leading-relaxed min-h-[60px]">
                                        Zero-touch for the customer. We host, manage, and optimize the Connect instance. Simplified per-agent/month pricing.
                                    </p>
                                    <div className="text-xs font-mono text-slate-500 bg-slate-950 p-3 rounded border border-slate-800">
                                        Ideal for: LoB Buyers, Speed to Market, OpEx Preference
                                    </div>
                                </div>

                                {/* Motion 3: AI Overlay */}
                                <div className="group bg-slate-900/40 border border-slate-800 hover:border-orange-500/50 rounded-xl p-8 transition-all">
                                    <div className="w-12 h-12 bg-orange-900/20 rounded-lg flex items-center justify-center mb-6 text-orange-400">
                                        <Sparkles className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">3. AI Innovation</h3>
                                    <p className="text-slate-400 mb-6 text-sm leading-relaxed min-h-[60px]">
                                        "Digital Front Door" overlay. We add Bedrock/Lex functionality to <strong>existing</strong> Connect instances without ripping and replacing.
                                    </p>
                                    <div className="text-xs font-mono text-slate-500 bg-slate-950 p-3 rounded border border-slate-800">
                                        Ideal for: Innovation Pilots, Deflection Targets, Quick Wins
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Marketplace Banner */}
                        <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 rounded-xl p-8 md:p-12 text-center">
                            <h2 className="text-2xl font-bold text-white mb-4">
                                Transact via AWS Marketplace
                            </h2>
                            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                                All our services are listed on AWS Marketplace, allowing you to retire customer commit (EDP) and accelerate procurement.
                            </p>
                            <Link href="/marketplace" className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors">
                                View Marketplace Listings <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
