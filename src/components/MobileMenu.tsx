"use client"

import { useState } from 'react';
import Link from 'next/link';
import { X, Menu, ChevronDown } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [expandedItem, setExpandedItem] = useState<string | null>(null);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => {
        setIsOpen(false);
        setExpandedItem(null);
    };

    const toggleExpanded = (label: string) => {
        setExpandedItem(expandedItem === label ? null : label);
    };

    return (
        <>
            {/* Hamburger Button - Only visible on mobile */}
            <button
                onClick={toggleMenu}
                className="md:hidden p-2 text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-colors"
                aria-label="Toggle menu"
            >
                <Menu className="w-6 h-6" />
            </button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/50 z-[150] md:hidden"
                        onClick={closeMenu}
                    />

                    {/* Menu Panel */}
                    <div className="fixed inset-y-0 right-0 w-[280px] bg-[var(--background)] border-l border-[var(--border)] z-[200] md:hidden overflow-y-auto">
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-[var(--border)]">
                            <span className="text-lg font-bold text-[var(--foreground)]">Menu</span>
                            <button
                                onClick={closeMenu}
                                className="p-2 text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-colors"
                                aria-label="Close menu"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <nav className="p-4">
                            <div className="flex flex-col gap-1">
                                {siteConfig.mainNav.map((item) => (
                                    <div key={item.label}>
                                        {item.children ? (
                                            <>
                                                {/* Parent with children */}
                                                <button
                                                    onClick={() => toggleExpanded(item.label)}
                                                    className="w-full flex items-center justify-between px-4 py-3 text-[var(--foreground)]/80 hover:text-[var(--foreground)] hover:bg-[var(--foreground)]/5 rounded-lg transition-colors text-left"
                                                >
                                                    <span className="font-medium">{item.label}</span>
                                                    <ChevronDown
                                                        className={`w-4 h-4 transition-transform ${expandedItem === item.label ? 'rotate-180' : ''
                                                            }`}
                                                    />
                                                </button>

                                                {/* Children */}
                                                {expandedItem === item.label && (
                                                    <div className="pl-4 mt-1 space-y-1">
                                                        {item.children.map((child) => (
                                                            <Link
                                                                key={child.href}
                                                                href={child.href}
                                                                onClick={closeMenu}
                                                                className="block px-4 py-2 text-sm text-[var(--foreground)]/60 hover:text-[var(--foreground)] hover:bg-[var(--foreground)]/5 rounded-lg transition-colors"
                                                            >
                                                                {child.label}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                )}
                                            </>
                                        ) : (
                                            /* Direct link */
                                            <Link
                                                href={item.href}
                                                onClick={closeMenu}
                                                className="block px-4 py-3 text-[var(--foreground)]/80 hover:text-[var(--foreground)] hover:bg-[var(--foreground)]/5 rounded-lg transition-colors font-medium"
                                            >
                                                {item.label}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </nav>

                        {/* Footer CTA */}
                        <div className="p-4 border-t border-[var(--border)] mt-auto">
                            <Link
                                href="/contact"
                                onClick={closeMenu}
                                className="block w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-center font-medium rounded-lg transition-colors"
                            >
                                Book Demo
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
