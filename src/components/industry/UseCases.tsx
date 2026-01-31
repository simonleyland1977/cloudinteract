"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export interface UseCase {
    title: string
    description: string
    outcome: string
    stats?: string
}

interface UseCasesProps {
    title?: string
    subtitle?: string
    cases: UseCase[]
}

export function UseCases({ title = "Real World Impact", subtitle = "See the results", cases }: UseCasesProps) {
    return (
        <section className="py-24 bg-slate-950">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                            {title}
                        </h2>
                        <p className="text-lg text-slate-400">
                            {subtitle}
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cases.map((useCase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-slate-900 border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300"
                        >
                            <div className="absolute top-8 right-8 text-slate-600 group-hover:text-blue-400 transition-colors">
                                <ArrowUpRight className="w-6 h-6" />
                            </div>

                            <div className="h-full flex flex-col justify-between space-y-8">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4 pr-12">
                                        {useCase.title}
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        {useCase.description}
                                    </p>
                                </div>

                                <div className="pt-8 border-t border-white/5">
                                    <span className="text-sm font-mono text-blue-400 uppercase tracking-wider block mb-2">Outcome</span>
                                    <p className="text-white font-medium">
                                        {useCase.outcome}
                                    </p>
                                    {useCase.stats && (
                                        <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mt-2">
                                            {useCase.stats}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
