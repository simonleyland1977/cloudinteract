
"use client";

import { ArrowRight, Stethoscope, Building2, Landmark, ShoppingBag, GraduationCap, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const industries = [
    {
        title: "Healthcare",
        description: "HIPAA-compliant patient experiences that reduce no-shows and improve care coordination.",
        icon: Stethoscope,
        href: "/healthcare",
        color: "text-blue-400",
        bg: "bg-blue-500/10",
    },
    {
        title: "Public Sector",
        description: "Accessible, secure citizen services that streamline inquiries and reduce wait times.",
        icon: Building2,
        href: "/public-sector",
        color: "text-purple-400",
        bg: "bg-purple-500/10",
    },
    {
        title: "Financial Services",
        description: "Secure banking and insurance support with strict compliance and fraud detection.",
        icon: Landmark,
        href: "/finance",
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
    },
    {
        title: "Retail",
        description: "Personalized shopping experiences that drive sales and loyalty across all channels.",
        icon: ShoppingBag,
        href: "/retail",
        color: "text-orange-400",
        bg: "bg-orange-500/10",
    },
    {
        title: "Edtech",
        description: "Scalable student support and personalized learning assistance available 24/7.",
        icon: GraduationCap,
        href: "/edtech",
        color: "text-pink-400",
        bg: "bg-pink-500/10",
    },
    {
        title: "Utilities",
        description: "Reliable outage management and customer service during high-volume events.",
        icon: Zap,
        href: "/utilities",
        color: "text-yellow-400",
        bg: "bg-yellow-500/10",
    },
];

export function IndustrySolutions() {
    return (
        <section className="py-24 bg-slate-900/50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 mb-6 font-display">
                        Tailored for Your Industry
                    </h2>
                    <p className="text-lg text-slate-400">
                        We've customized Amazon Connect for specific vertical challenges, pre-packaging integrations, compliance controls, and workflows.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((industry, index) => (
                        <Link key={index} href={industry.href} className="group cursor-pointer">
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="h-full p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-slate-600 transition-colors relative overflow-hidden"
                            >
                                {/* Background Glow */}
                                <div className={`absolute top-0 right-0 w-32 h-32 ${industry.bg} blur-3xl rounded-full opacity-20 group-hover:opacity-40 transition-opacity`} />

                                <div className={`w-12 h-12 rounded-xl ${industry.bg} flex items-center justify-center mb-6`}>
                                    <industry.icon className={`w-6 h-6 ${industry.color}`} />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    {industry.title}
                                </h3>

                                <p className="text-slate-400 mb-6 leading-relaxed">
                                    {industry.description}
                                </p>

                                <div className="flex items-center gap-2 text-sm font-medium text-white group-hover:gap-3 transition-all">
                                    Learn more <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
