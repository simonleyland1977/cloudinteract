"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { siteConfig } from "@/config/site"

export function SplitHero() {
    const config = siteConfig.landingPage.splitHero;

    if (!config) return null;

    return (
        <div className="h-screen w-full flex flex-col md:flex-row relative overflow-hidden">
            {/* Left Side - Migrations */}
            <motion.div
                className="flex-1 relative group h-1/2 md:h-full border-b md:border-b-0 md:border-r border-white/10"
                initial={{ flex: 1 }}
                whileHover={{ flex: 1.5 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <div className="absolute inset-0 bg-slate-950">
                    <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-500" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                </div>

                <div className="relative z-10 h-full flex flex-col justify-center p-12 md:p-24">
                    <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-400 w-fit">
                        Infrastructure
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        {config.left.title}
                    </h2>
                    <p className="text-lg text-slate-400 mb-8 max-w-md">
                        {config.left.description}
                    </p>
                    <Link
                        href={config.left.href}
                        className="inline-flex items-center justify-center h-11 px-8 text-base font-medium rounded-md bg-blue-600 hover:bg-blue-500 text-white w-fit transition-colors"
                    >
                        {config.left.cta} →
                    </Link>
                </div>
            </motion.div>

            {/* Right Side - Digital Front Door */}
            <motion.div
                className="flex-1 relative group h-1/2 md:h-full"
                initial={{ flex: 1 }}
                whileHover={{ flex: 1.5 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <div className="absolute inset-0 bg-slate-950">
                    <div className="absolute inset-0 bg-purple-500/5 group-hover:bg-purple-500/10 transition-colors duration-500" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
                </div>

                <div className="relative z-10 h-full flex flex-col justify-center p-12 md:p-24">
                    <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-medium text-purple-400 w-fit">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                        </span>
                        Innovation
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        {config.right.title}
                    </h2>
                    <p className="text-lg text-slate-400 mb-8 max-w-md">
                        {config.right.description}
                    </p>
                    <Link
                        href={config.right.href}
                        className="inline-flex items-center justify-center h-11 px-8 text-base font-medium rounded-md bg-purple-600 hover:bg-purple-500 text-white w-fit transition-colors"
                    >
                        {config.right.cta} →
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}
