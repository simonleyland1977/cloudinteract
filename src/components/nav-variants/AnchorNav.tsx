
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = [
    { label: "AI Showcase", href: "#ai-showcase" },
    { label: "Industry Solutions", href: "#industry-solutions" },
    { label: "Regional Pricing", href: "#regional-pricing" },
    { label: "Calculator", href: "#calculator" },
];

export function AnchorNav() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show anchor nav after hero section (roughly 600px)
            setIsVisible(window.scrollY > 600);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
                        <div className="flex items-center gap-8">
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
