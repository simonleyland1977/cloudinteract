"use client"

import { motion } from "framer-motion"

export function WhyConnectSection() {
    const reasons = [
        {
            title: "Native AI Foundation",
            description: "Built directly on AWS Bedrock. No wrappers, no latency, just pure, scalable generative AI integrated into the core contact flow.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            title: "True Agentic Capabilities",
            description: "Move beyond simple chatbots to autonomous agents that can query databases, process transactions, and resolve complex issues without human intervention.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            title: "Pay-Per-Use consumption",
            description: "Stop paying for empty seats. Save 30-50% compared to legacy CCaaS vendors with a model that scales perfectly with your traffic.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "The Power of AWS",
            description: "Leverage the $100B+ investment in cloud infrastructure. Unmatched security, 99.999% reliability, and instant access to new innovations.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            )
        }
    ]

    return (
        <section className="py-24 bg-slate-900 border-t border-slate-800">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row gap-16">
                    {/* Header Block */}
                    <div className="md:w-1/3">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-white mb-6">Why Amazon Connect?</h2>
                            <p className="text-lg text-slate-400 mb-8">
                                Traditional contact centers are struggling to keep up.
                                We partner with AWS because they aren't just building software; they are building the future of intelligence.
                            </p>
                            <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
                        </motion.div>
                    </div>

                    {/* Features Grid */}
                    <div className="md:w-2/3 grid sm:grid-cols-2 gap-8">
                        {reasons.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-colors group"
                            >
                                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
