'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'aws-amplify/auth';
import { LogOut, Menu, X } from 'lucide-react';

export function PortalHeader() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleSignOut = async () => {
        try {
            await signOut();
            window.location.href = '/aws-portal';
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    const navItems = [
        { href: '/aws-portal/dashboard', label: 'Dashboard' },
        { href: '/aws-portal/account-executives', label: 'Account Executives' },
        { href: '/aws-portal/product-managers', label: 'Product Managers' },
        { href: '/aws-portal/solution-architects', label: 'Solution Architects' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/aws-portal/dashboard" className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-600 to-orange-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">AWS</span>
                        </div>
                        <span className="text-white font-semibold">Partner Portal</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${pathname === item.href
                                        ? 'bg-orange-600/20 text-orange-400'
                                        : 'text-slate-300 hover:text-white hover:bg-slate-800'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Sign Out Button */}
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={handleSignOut}
                            className="hidden md:flex items-center space-x-2 px-4 py-2 text-slate-300 hover:text-white transition-colors"
                        >
                            <LogOut size={18} />
                            <span className="text-sm">Sign Out</span>
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 text-slate-400 hover:text-white"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-slate-800">
                        <nav className="flex flex-col space-y-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${pathname === item.href
                                            ? 'bg-orange-600/20 text-orange-400'
                                            : 'text-slate-300 hover:text-white hover:bg-slate-800'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <button
                                onClick={handleSignOut}
                                className="flex items-center space-x-2 px-4 py-3 text-slate-300 hover:text-white text-sm"
                            >
                                <LogOut size={18} />
                                <span>Sign Out</span>
                            </button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
