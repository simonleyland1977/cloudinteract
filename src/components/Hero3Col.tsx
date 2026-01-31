"use client"

import { motion } from "framer-motion"
import { ArrowRight, Cloud, Server, Sparkles } from "lucide-react"
import Link from "next/link"

export function Hero3Col() {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden py-20">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-slate-950">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-slate-950 to-slate-950" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                            Agentic AI Contact Center Solutions
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                            Transform Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400">
                                Customer Experience
                            </span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            Whether you need a full migration, a managed service, or an AI upgrade—we have the perfect path for your journey.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {/* Card 1: Migration */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative h-full bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-blue-500/50 rounded-2xl p-8 transition-all duration-300 group-hover:-translate-y-1">
                            <div className="w-14 h-14 bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:text-blue-300 transition-colors">
                                <Server className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Deploy & Migrate</h3>
                            <p className="text-slate-400 mb-8 min-h-[80px]">
                                Expert migration services to move your legacy contact center to Amazon Connect in your own environment.
                            </p>
                            <ul className="space-y-3 mb-8 text-slate-300 text-sm">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Secure Migration</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Custom Integration</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Your AWS Account</li>
                            </ul>
                            <Link href="/services/migration" className="flex items-center gap-2 text-blue-400 font-semibold group-hover:gap-3 transition-all">
                                Start Migration <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Card 2: Managed Service */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative h-full bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-purple-500/50 rounded-2xl p-8 transition-all duration-300 group-hover:-translate-y-1">
                            <div className="absolute top-4 right-4 text-xs font-bold px-2 py-1 bg-purple-500/20 text-purple-300 rounded uppercase tracking-wide">
                                Popular
                            </div>
                            <div className="w-14 h-14 bg-purple-900/30 rounded-xl flex items-center justify-center mb-6 text-purple-400 group-hover:text-purple-300 transition-colors">
                                <Cloud className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Managed Service</h3>
                            <p className="text-slate-400 mb-8 min-h-[80px]">
                                We host and manage Amazon Connect for you. Zero complexity, simple monthly pricing, and 24/7 support.
                            </p>
                            <ul className="space-y-3 mb-8 text-slate-300 text-sm">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500" /> No AWS Skills Needed</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500" /> 30-Day Go Live</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Included Customer Portal</li>
                            </ul>
                            <Link href="/managed-amazon-connect" className="flex items-center gap-2 text-purple-400 font-semibold group-hover:gap-3 transition-all">
                                View Managed Plans <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Card 3: AI Solutions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-yellow-600/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative h-full bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-orange-500/50 rounded-2xl p-8 transition-all duration-300 group-hover:-translate-y-1">
                            <div className="w-14 h-14 bg-orange-900/30 rounded-xl flex items-center justify-center mb-6 text-orange-400 group-hover:text-orange-300 transition-colors">
                                <Sparkles className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">AI Innovation</h3>
                            <p className="text-slate-400 mb-8 min-h-[80px]">
                                Add Agentic AI, Voice Agents, and Automation to your existing contact center without replacing it.
                            </p>
                            <ul className="space-y-3 mb-8 text-slate-300 text-sm">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Digital Front Door</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Voice & Chat Agents</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Amazon Bedrock Powered</li>
                            </ul>
                            <Link href="/solutions/digital-front-door" className="flex items-center gap-2 text-orange-400 font-semibold group-hover:gap-3 transition-all">
                                Explore AI Agents <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
