"use client"

import { MarketingHeader } from "@/components/MarketingHeader"
import { MarketingFooter } from "@/components/MarketingFooter"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export default function MigrationPage() {
    const integrations = [
        { name: "Salesforce Service Cloud", category: "CRM", color: "from-blue-500 to-cyan-500" },
        { name: "Microsoft Dynamics", category: "CRM", color: "from-blue-600 to-indigo-500" },
        { name: "ServiceNow", category: "Service Management", color: "from-green-500 to-emerald-500" },
        { name: "Zendesk", category: "Customer Service", color: "from-green-600 to-teal-500" },
        { name: "Freshdesk", category: "Customer Service", color: "from-orange-500 to-red-500" },
        { name: "Pega", category: "Process Automation", color: "from-red-500 to-pink-500" },
        { name: "UKG", category: "Workforce Management", color: "from-purple-500 to-pink-500" },
        { name: "Oracle", category: "Enterprise", color: "from-red-600 to-orange-500" },
        { name: "Microsoft Teams", category: "Collaboration", color: "from-indigo-500 to-purple-500" }
    ]

    const capabilities = [
        "Cases & Profiles",
        "Unlimited AI",
        "Amazon Nova Sonic",
        "Forecasting & Scheduling",
        "Contact Lens Analytics",
        "Amazon Q in Connect",
        "Omnichannel Routing",
        "Agent Workspace"
    ]

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <MarketingHeader />

            <main className="flex-1 pt-16">
                {/* Hero Section */}
                <section className="w-full py-24 md:py-32 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/5" />

                    <div className="container px-6 mx-auto relative">
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-300"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                Migration Services
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white leading-[1.1]"
                            >
                                Your Journey to{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                    Amazon Connect
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
                            >
                                We know change is hard. That's why we combine world-class Amazon Connect expertise with change management and comprehensive training for agents and supervisors.
                            </motion.p>
                        </div>
                    </div>
                </section>

                {/* Support Model - MOVED UP */}
                <section className="w-full py-24">
                    <div className="container px-6 mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl font-bold text-white mb-6">We Guide You Every Step</h2>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white mb-2">Financial Model Transition</h3>
                                            <p className="text-slate-400">
                                                Moving from seat-based to consumption pricing can be confusing. We walk you through the entire process and help optimize costs.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white mb-2">Post-Implementation Support</h3>
                                            <p className="text-slate-400">
                                                Worried about managing the platform? We offer upskilling for your team and 24/5 assurance services with world-class Amazon Connect engineers.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white mb-2">Business Case Development</h3>
                                            <p className="text-slate-400">
                                                Need help building the business case? We have extensive experience optimizing estates and demonstrating ROI to executives.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-blue-900/20 to-slate-900/50 p-8 rounded-3xl border border-blue-500/20"
                            >
                                <div className="space-y-6">
                                    <div>
                                        <div className="text-sm font-semibold text-blue-300 mb-2">AWS Partnership</div>
                                        <h3 className="text-2xl font-bold text-white mb-4">Funding & Support</h3>
                                        <p className="text-slate-300 mb-6">
                                            We work directly with your AWS account team to ensure you have access to migration funding programs and technical support.
                                        </p>
                                    </div>

                                    <div className="border-t border-white/10 pt-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                                                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span className="text-white font-medium">Migration Acceleration Program (MAP)</span>
                                        </div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                                                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span className="text-white font-medium">AWS Credits & Discounts</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                                                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span className="text-white font-medium">Dedicated Solutions Architect</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Integration Partners - MOVED DOWN */}
                <section className="w-full py-24 bg-slate-900/50 border-y border-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

                    <div className="container px-6 mx-auto relative">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-300 mb-4">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                Pre-Built Connectors
                            </div>
                            <h2 className="text-4xl font-bold text-white mb-4">Seamless Integrations</h2>
                            <p className="text-xl text-slate-400">
                                We ensure your existing systems integrate perfectly into Amazon Connect. Our experience spans the industry's leading platforms.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {integrations.map((platform, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    viewport={{ once: true }}
                                    className="group relative p-8 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 hover:border-white/30 transition-all"
                                >
                                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity rounded-full`} />

                                    <div className="relative">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${platform.color} opacity-20 flex items-center justify-center`}>
                                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400">
                                                {platform.category}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-2">{platform.name}</h3>
                                        <div className="flex items-center gap-2 text-sm text-slate-400">
                                            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span>Production Ready</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-blue-500/20 text-center">
                            <p className="text-white text-lg">
                                <span className="font-semibold">Don't see your platform?</span> We build custom integrations using Amazon Connect APIs, AWS Lambda, and EventBridge.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Amazon Connect Capabilities */}
                <section className="w-full py-24 bg-slate-900/30 border-y border-white/5">
                    <div className="container px-6 mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl font-bold text-white mb-4">Full Amazon Connect Capabilities</h2>
                            <p className="text-lg text-slate-400">
                                We deploy the complete suite of Amazon Connect features to maximize your investment.
                            </p>
                        </div>

                        {/* Featured Capabilities */}
                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-blue-900/30 to-purple-900/20 p-8 rounded-2xl border border-blue-500/20"
                            >
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6">
                                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">Unlimited AI</h3>
                                <p className="text-slate-300">
                                    No per-conversation AI fees. Use Amazon Q, Contact Lens, and Nova Sonic without worrying about usage limits.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-emerald-900/30 to-teal-900/20 p-8 rounded-2xl border border-emerald-500/20"
                            >
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6">
                                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">Amazon Nova Sonic</h3>
                                <p className="text-slate-300">
                                    State-of-the-art voice AI with natural conversations, interruption handling, and multi-language support.
                                </p>
                            </motion.div>
                        </div>

                        {/* Comprehensive Feature List */}
                        <div className="bg-slate-900/50 rounded-2xl border border-white/10 p-8 md:p-12">
                            <h3 className="text-xl font-bold text-white mb-8">Complete Platform Features</h3>
                            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                                {[
                                    { name: "Cases & Customer Profiles", desc: "360° customer view with context" },
                                    { name: "Contact Lens Analytics", desc: "Real-time sentiment and insights" },
                                    { name: "Amazon Q in Connect", desc: "Agent assist with generative AI" },
                                    { name: "Forecasting & Scheduling", desc: "AI-powered WFM optimization" },
                                    { name: "Omnichannel Routing", desc: "Voice, chat, SMS, and tasks unified" },
                                    { name: "Agent Workspace", desc: "Single pane of glass for agents" }
                                ].map((feature, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        viewport={{ once: true }}
                                        className="flex gap-4 items-start group"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-blue-500/30 transition-colors">
                                            <svg className="w-3.5 h-3.5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-white mb-1">{feature.name}</div>
                                            <div className="text-sm text-slate-400">{feature.desc}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="w-full py-24">
                    <div className="container px-6 mx-auto">
                        <div className="bg-gradient-to-br from-blue-900/30 to-slate-900/50 rounded-3xl p-12 border border-blue-500/20 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />

                            <div className="relative z-10 max-w-3xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                    Ready to Start Your Journey?
                                </h2>
                                <p className="text-xl text-slate-300 mb-10">
                                    We're always happy to schedule a call to answer your questions or show you a demo of the platform.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link href="/contact">
                                        <Button size="lg" className="h-14 px-8 text-lg bg-blue-600 hover:bg-blue-500 text-white">
                                            Schedule a Call
                                        </Button>
                                    </Link>
                                    <Link href="/contact">
                                        <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-white/20 text-white hover:bg-white/10">
                                            Request a Demo
                                        </Button>
                                    </Link>
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
