"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/config/site"

export function FeaturesSection() {
    return (
        <section id="platform" className="py-24 bg-[var(--card)] border-t border-[var(--border)]">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">{siteConfig.landingPage.features.title}</h2>
                    <p className="text-[var(--foreground)]/60">
                        {siteConfig.landingPage.features.description}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {siteConfig.landingPage.features.items.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#7D55C7]/50 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-[#7D55C7]/10 flex items-center justify-center mb-4 group-hover:bg-[#7D55C7]/20 transition-colors">
                                <div className="w-6 h-6 bg-[#7D55C7]/50 rounded-sm"></div>
                            </div>
                            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">{feature.title}</h3>
                            <p className="text-sm text-[var(--foreground)]/60">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
