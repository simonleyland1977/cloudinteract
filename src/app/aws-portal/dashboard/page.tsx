'use client';

import { useState } from 'react';
import { PortalHeader } from '@/components/portal/PortalHeader';
import { type EmployeeRole } from '@/lib/portal-auth';
import { Sparkles, TrendingUp, BookOpen, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {

    const quickLinks = [
        {
            title: 'Account Executives',
            description: 'Sales strategies and key messages',
            href: '/aws-portal/account-executives',
            icon: TrendingUp,
            color: 'from-blue-600 to-blue-500',
        },
        {
            title: 'Product Managers',
            description: 'Vertical packages and positioning',
            href: '/aws-portal/product-managers',
            icon: Sparkles,
            color: 'from-purple-600 to-purple-500',
        },
        {
            title: 'Solution Architects',
            description: 'Technical architecture and guides',
            href: '/aws-portal/solution-architects',
            icon: BookOpen,
            color: 'from-orange-600 to-orange-500',
        },
    ];

    return (
        <div className="min-h-screen bg-slate-950">
            <PortalHeader />

            <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">
                    <div className="max-w-7xl mx-auto">
                        {/* Header */}
                        <div className="mb-12">
                            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                AWS Partner Resources
                            </h1>
                            <p className="text-slate-400 text-lg">
                                Select a role below to access specialized content and resources
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-6">Quick Access</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {quickLinks.map((link) => {
                                const Icon = link.icon;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-orange-600/50 transition-all hover:shadow-lg hover:shadow-orange-600/10"
                                    >
                                        <div className={`inline-flex p-3 bg-gradient-to-br ${link.color} rounded-lg mb-4`}>
                                            <Icon size={24} className="text-white" />
                                        </div>
                                        <h3 className="text-white font-semibold mb-2 group-hover:text-orange-400 transition-colors">
                                            {link.title}
                                        </h3>
                                        <p className="text-slate-400 text-sm mb-4">{link.description}</p>
                                        <div className="flex items-center text-orange-400 text-sm font-medium">
                                            <span>View Resources</span>
                                            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Recent Updates */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6">Recent Updates</h2>
                        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4 pb-4 border-b border-slate-800 last:border-0 last:pb-0">
                                    <div className="mt-1 w-2 h-2 bg-orange-500 rounded-full"></div>
                                    <div className="flex-1">
                                        <div className="text-white font-medium mb-1">Portal Launched</div>
                                        <div className="text-slate-400 text-sm">
                                            Welcome to the new AWS Partner Portal for Amazon Connect and Agentic AI resources.
                                        </div>
                                        <div className="text-slate-500 text-xs mt-2">Just now</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
