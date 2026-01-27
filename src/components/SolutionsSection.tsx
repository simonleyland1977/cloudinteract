"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/config/site"

export function SolutionsSection() {
    const solutions = siteConfig.landingPage.solutions;

    if (!solutions) return null;

    return (
        <section id="solutions" className="py-24 border-t border-[var(--border)]">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">{solutions.title}</h2>
                    <p className="text-[var(--foreground)]/60">
                        {solutions.description}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.items.map((item, index) => (
                        <motion.a
                            key={item.title}
                            href={item.href}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-8 rounded-2xl bg-gradient-to-br from-[var(--card)] to-transparent border border-[var(--border)] hover:border-[var(--primary)] transition-all"
                        >
                            <div className="w-16 h-16 rounded-xl bg-[var(--primary)]/20 flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2">{item.title}</h3>
                            <p className="text-[var(--foreground)]/60 mb-4">{item.description}</p>
                            <span className="text-[var(--accent)] text-sm font-medium group-hover:underline">
                                {item.cta} →
                            </span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    )
}
