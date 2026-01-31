
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/ThemeToggle";

export function FloatingGlassHeader() {
    return (
        <div className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-6">
            <motion.header
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="w-full max-w-4xl bg-slate-950/40 backdrop-blur-2xl border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl"
            >
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logos/logo-icon-color.png"
                        alt="CloudInteract"
                        width={32}
                        height={32}
                        className="h-8 w-auto"
                    />
                    <span className="text-lg font-bold text-white tracking-tight hidden sm:block">
                        CloudInteract<span className="text-purple-400">.io</span>
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/managed-amazon-connect" className="text-sm font-medium text-white">Connect</Link>
                    <Link href="/solutions/digital-front-door" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">AI Agents</Link>
                    <Link href="/healthcare" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Industries</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <Link
                        href="/contact"
                        className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-sm font-bold px-5 py-2 rounded-full transition-all shadow-lg shadow-purple-500/20"
                    >
                        Book Demo
                    </Link>
                </div>
            </motion.header>
        </div>
    );
}
