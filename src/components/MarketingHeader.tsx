"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MobileMenu } from "@/components/MobileMenu";
import { siteConfig } from "@/config/site";

export function MarketingHeader() {
    return (
        <header className="fixed w-full z-[100] top-0 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-xl">
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
                        <span className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
                            CloudInteract
                        </span>
                        <span className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400">
                            .io
                        </span>
                    </div>
                </Link>
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--foreground)]/60">
                    {siteConfig.mainNav.map((item) => (
                        item.children ? (
                            <div key={item.label} className="relative group">
                                <button className="hover:text-[var(--foreground)] transition-colors flex items-center gap-1">
                                    {item.label}
                                    <svg className="w-4 h-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div className="absolute left-0 top-full pt-2 w-48 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-[100]">
                                    <div className="bg-[var(--menu-bg)] border border-[var(--border)] rounded-lg shadow-xl p-2 flex flex-col gap-1">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.href}
                                                href={child.href}
                                                className="px-3 py-2 rounded-md hover:bg-[var(--foreground)]/5 text-sm transition-colors whitespace-nowrap"
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Link key={item.href} href={item.href} className="hover:text-[var(--foreground)] transition-colors">
                                {item.label}
                            </Link>
                        )
                    ))}
                </nav>
                <div className="flex items-center gap-4">
                    <a
                        href={siteConfig.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--foreground)]/60 hover:text-[#0A66C2] transition-colors"
                        aria-label="Follow us on LinkedIn"
                    >
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </a>
                    <ThemeToggle />
                    <Link href="/contact" className="hidden md:inline-block">
                        <Button size="sm" variant="primary">
                            Book Demo
                        </Button>
                    </Link>
                    <MobileMenu />
                </div>
            </div>
        </header>
    );
}
