
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MobileMenu } from "@/components/MobileMenu";
import { siteConfig } from "@/config/site";

export function HybridHeader() {
    return (
        <header className="fixed w-full z-[100] top-0 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/logos/logo-icon-color.png"
                        alt="CloudInteract"
                        width={48}
                        height={48}
                        className="h-10 w-auto"
                        priority
                    />
                    <div className="flex items-baseline">
                        <span className="text-2xl font-bold tracking-tight text-white">
                            CloudInteract
                        </span>
                        <span className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400">
                            .io
                        </span>
                    </div>
                </Link>
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                    {siteConfig.mainNav.map((item) => (
                        <Link key={item.label} href={item.href} className="hover:text-white transition-colors">
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <Link href="#calculator" className="hidden md:inline-block">
                        <Button size="sm" className="bg-orange-600 hover:bg-orange-500 text-white border-none">
                            Build Your Quote
                        </Button>
                    </Link>
                    <MobileMenu />
                </div>
            </div>
        </header>
    );
}
