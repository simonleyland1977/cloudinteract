
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Globe, Menu, X } from "lucide-react";
import { type Region } from "../RegionalSwitcher";

const navLinks = [
    { label: "AI Showcase", href: "#ai-showcase" },
    { label: "Industry Solutions", href: "#industry-solutions" },
    { label: "Regional Pricing", href: "#regional-pricing" },
    { label: "Calculator", href: "#calculator" },
];

interface AnchorNavProps {
    selectedRegion?: Region;
    onRegionChange?: (region: Region) => void;
}

export function AnchorNav({ selectedRegion = 'us', onRegionChange }: AnchorNavProps) {
    // For demo purposes, we want this visible immediately when selected
    const [isVisible] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

                        <div className="flex items-center flex-1 justify-end gap-4 lg:gap-6">
                            {/* Desktop Links */}
                            <div className="hidden lg:flex items-center gap-6">
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

                            {/* Regional Switcher (Desktop/Tablet) */}
                            {onRegionChange && (
                                <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-white/5 rounded-lg border border-white/10">
                                    <Globe className="w-3 h-3 text-slate-400" />
                                    <div className="flex gap-1">
                                        <button
                                            onClick={() => onRegionChange('uk')}
                                            className={`px-2 py-0.5 rounded text-xs font-medium transition-all ${selectedRegion === 'uk'
                                                ? 'bg-blue-600 text-white'
                                                : 'text-slate-400 hover:text-white'
                                                }`}
                                        >
                                            UK
                                        </button>
                                        <div className="w-px h-3 bg-white/10 my-auto" />
                                        <button
                                            onClick={() => onRegionChange('us')}
                                            className={`px-2 py-0.5 rounded text-xs font-medium transition-all ${selectedRegion === 'us'
                                                ? 'bg-purple-600 text-white'
                                                : 'text-slate-400 hover:text-white'
                                                }`}
                                        >
                                            US
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* CTA Button */}
                            <a
                                href="#calculator"
                                className="hidden sm:block bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold px-4 py-2 rounded-full transition-all"
                            >
                                Get Started
                            </a>

                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="lg:hidden p-2 text-slate-300 hover:text-white"
                            >
                                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Overlay */}
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="lg:hidden border-t border-white/10 bg-slate-900 overflow-hidden"
                            >
                                <div className="px-6 py-4 space-y-4">
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block text-sm font-medium text-slate-300 hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    ))}

                                    {/* Mobile Regional Switcher */}
                                    {onRegionChange && (
                                        <div className="flex items-center justify-between py-2 border-t border-white/10 mt-2">
                                            <span className="text-sm text-slate-400 flex items-center gap-2">
                                                <Globe className="w-4 h-4" /> Region
                                            </span>
                                            <div className="flex items-center gap-2 bg-white/5 rounded-lg p-1">
                                                <button
                                                    onClick={() => onRegionChange('uk')}
                                                    className={`px-3 py-1 rounded text-xs font-medium transition-all ${selectedRegion === 'uk'
                                                        ? 'bg-blue-600 text-white'
                                                        : 'text-slate-400'
                                                        }`}
                                                >
                                                    UK
                                                </button>
                                                <button
                                                    onClick={() => onRegionChange('us')}
                                                    className={`px-3 py-1 rounded text-xs font-medium transition-all ${selectedRegion === 'us'
                                                        ? 'bg-purple-600 text-white'
                                                        : 'text-slate-400'
                                                        }`}
                                                >
                                                    US
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    <a
                                        href="#calculator"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block text-center w-full bg-purple-600 hover:bg-purple-500 text-white text-sm font-bold px-4 py-3 rounded-xl transition-all"
                                    >
                                        Get Started
                                    </a>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
