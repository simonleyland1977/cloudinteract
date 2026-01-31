
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
    { label: "AI Showcase", href: "#ai-showcase" },
    { label: "Industry Solutions", href: "#industry-solutions" },
    { label: "Regional Pricing", href: "#regional-pricing" },
    { label: "Calculator", href: "#calculator" },
];

export function AnchorNav() {
    // For demo purposes, we want this visible immediately when selected
    const [isVisible] = useState(true);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10"
                >
                    <div className="container mx-auto px-6 h-14 flex items-center justify-between">
                        {/* Branding */}
                        <Link href="/" className="flex items-center gap-2 mr-8">
                            <Image
                                src="/logos/logo-icon-color.png"
                                alt="CloudInteract"
                                width={32}
                                height={32}
                                className="h-8 w-auto"
                            />
                            <div className="hidden md:flex items-baseline">
                                <span className="text-lg font-bold tracking-tight text-white">
                                    CloudInteract
                                </span>
                                <span className="text-lg font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400">
                                    .io
                                </span>
                            </div>
                        </Link>

                        <div className="flex items-center gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                        <a
                            href="#calculator"
                            className="bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold px-4 py-2 rounded-full transition-all"
                        >
                            Get Started
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
