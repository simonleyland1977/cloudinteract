"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { type LucideIcon, ArrowRight, CheckCircle2 } from "lucide-react"

export interface Challenge {
    title: string
    problem: string
    solution: string
    icon: LucideIcon
}

interface ChallengeSolutionProps {
    title?: string
    subtitle?: string
    challenges: Challenge[]
}

export function ChallengeSolution({
    title = "Common Challenges Solved",
    subtitle = "See how AI transforms obstacles into opportunities",
    challenges
}: ChallengeSolutionProps) {
    const [active, setActive] = useState(0)
    const ActiveIcon = challenges[active].icon

    return (
        <section className="py-24 bg-slate-900/50 border-y border-white/5">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        {title}
                    </h2>
                    <p className="text-lg text-slate-400">
                        {subtitle}
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Tabs / Menu */}
                    <div className="lg:col-span-4 space-y-2">
                        {challenges.map((challenge, index) => (
                            <button
                                key={index}
                                onClick={() => setActive(index)}
                                className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 border flex items-center justify-between group ${active === index
                                        ? "bg-blue-600/10 border-blue-500/50 shadow-[0_0_30px_-10px_rgba(37,99,235,0.3)]"
                                        : "bg-white/5 border-transparent hover:bg-white/10 hover:border-white/10"
                                    }`}
                            >
                                <span className={`font-semibold text-lg ${active === index ? "text-blue-400" : "text-slate-400 group-hover:text-slate-200"
                                    }`}>
                                    {challenge.title}
                                </span>
                                {active === index && (
                                    <motion.div
                                        layoutId="active-arrow"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                    >
                                        <ArrowRight className="w-5 h-5 text-blue-400" />
                                    </motion.div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Content Display */}
                    <div className="lg:col-span-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-8 md:p-10 relative overflow-hidden"
                            >
                                {/* Background glow effect */}
                                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                                    <ActiveIcon size={300} />
                                </div>

                                <div className="grid md:grid-cols-2 gap-12 relative z-10">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-2 bg-red-500/10 rounded-lg text-red-400 border border-red-500/20">
                                                <ActiveIcon size={24} />
                                            </div>
                                            <span className="text-red-400 font-mono text-sm uppercase tracking-wider">The Challenge</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white leading-tight">
                                            {challenges[active].problem}
                                        </h3>
                                        <div className="w-full h-px bg-gradient-to-r from-red-500/50 to-transparent my-6" />
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 border border-emerald-500/20">
                                                <CheckCircle2 size={24} />
                                            </div>
                                            <span className="text-emerald-400 font-mono text-sm uppercase tracking-wider">The Solution</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white leading-tight">
                                            {challenges[active].solution}
                                        </h3>
                                        <div className="w-full h-px bg-gradient-to-r from-emerald-500/50 to-transparent my-6" />
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}
