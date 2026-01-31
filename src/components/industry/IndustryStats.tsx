"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export interface Stat {
    label: string
    value: string
    suffix?: string
    description?: string
}

interface IndustryStatsProps {
    stats: Stat[]
}

export function IndustryStats({ stats }: IndustryStatsProps) {
    return (
        <section className="py-12 bg-slate-900 border-y border-white/5 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center px-4"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
                                    {stat.value}
                                </span>
                                <span className="text-blue-500">{stat.suffix}</span>
                            </div>
                            <div className="text-sm font-semibold text-white uppercase tracking-wider mb-1">
                                {stat.label}
                            </div>
                            {stat.description && (
                                <p className="text-xs text-slate-500 max-w-[150px] mx-auto">
                                    {stat.description}
                                </p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
