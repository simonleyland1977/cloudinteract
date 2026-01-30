
"use client";

import { motion } from "framer-motion";
import { Sparkles, Brain, MessageSquareText, ShieldCheck, BarChart4, Bot } from "lucide-react";

const features = [
    {
        title: "Amazon Q in Connect",
        description: "Real-time generative AI assistant that suggests responses, actions, and links to agents during calls.",
        icon: Sparkles,
        color: "from-purple-500 to-indigo-500",
        size: "col-span-1 md:col-span-2 row-span-2",
        delay: 0,
    },
    {
        title: "Contact Lens",
        description: "Real-time conversational analytics, sentiment analysis, and automated categorization.",
        icon: BarChart4,
        color: "from-blue-500 to-cyan-500",
        size: "col-span-1",
        delay: 0.1,
    },
    {
        title: "Voice ID",
        description: "Biometric voice authentication for secure, password-free caller verification.",
        icon: ShieldCheck,
        color: "from-emerald-500 to-green-500",
        size: "col-span-1",
        delay: 0.2,
    },
    {
        title: "Generative IVR",
        description: "Dynamic self-service experiences powered by Amazon Bedrock foundation models.",
        icon: Bot,
        color: "from-orange-500 to-red-500",
        size: "col-span-1 md:col-span-2",
        delay: 0.3,
    },
    {
        title: "Automated QA",
        description: "AI-driven scoring of 100% of interactions against quality guidelines.",
        icon: MessageSquareText,
        color: "from-pink-500 to-rose-500",
        size: "col-span-1",
        delay: 0.4,
    },
    {
        title: "Predictive Forecasting",
        description: "ML-powered volume forecasting and capacity planning.",
        icon: Brain,
        color: "from-yellow-400 to-orange-400",
        size: "col-span-1",
        delay: 0.5,
    },
];

export function UnlimitedAIShowcase() {
    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] opacity-30" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] opacity-30" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            Unlimited AI. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
                                Zero Extra Cost.
                            </span>
                        </h2>
                        <p className="text-lg text-slate-300">
                            Access the full suite of Amazon Connect AI capabilities. No tokens, no per-call AI licensing fees—just results.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: feature.delay }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className={`relative group overflow-hidden rounded-3xl border border-white/10 p-8 ${feature.size} bg-slate-900/40 backdrop-blur-md`}
                        >
                            {/* Hover Gradient */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                            />

                            <div className="relative z-10 h-full flex flex-col">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}>
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3">
                                    {feature.title}
                                </h3>

                                <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                                    {feature.description}
                                </p>

                                {/* Decorative Pill */}
                                <div className="mt-auto pt-6 flex justify-start">
                                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-white/70 group-hover:text-white group-hover:border-white/20 transition-all">
                                        Included
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
