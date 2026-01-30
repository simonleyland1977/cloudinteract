'use client';

import { Shield, Briefcase, LineChart, Code, Sparkles, Zap, Network, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AWSPortalPage() {

    return (
        <div className="min-h-screen bg-slate-950">
            {/* Background gradient */}
            <div className="fixed inset-0 bg-gradient-to-br from-orange-900/20 via-slate-950 to-slate-950" />

            <div className="relative z-10">
                {/* Header */}
                <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center space-x-3">
                                <Image
                                    src="/logos/logo-white.png"
                                    alt="CloudInteract"
                                    width={32}
                                    height={32}
                                    className="w-8 h-8"
                                />
                                <div className="flex items-center space-x-2">
                                    <span className="text-white font-semibold">CloudInteract</span>
                                    <span className="text-slate-500">|</span>
                                    <span className="text-slate-400 text-sm">AWS Partner Portal</span>
                                </div>
                            </div>
                            <Link
                                href="mailto:contact@cloudinteract.ai"
                                className="flex items-center space-x-2 px-4 py-2 bg-orange-600/10 hover:bg-orange-600/20 border border-orange-600/30 rounded-lg text-orange-400 hover:text-orange-300 transition-colors"
                            >
                                <Mail size={16} />
                                <span className="font-medium">Contact Us</span>
                            </Link>
                        </div>
                    </div>
                </header>

                <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="max-w-6xl mx-auto space-y-16">
                        {/* Hero Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left Column - Information */}
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                        Amazon Connect & Agentic AI{' '}
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">
                                            Partner Portal
                                        </span>
                                    </h1>

                                    <p className="text-xl text-slate-300">
                                        Access exclusive resources, technical documentation, and strategic guidance for selling Amazon Connect and AI agent solutions.
                                    </p>
                                </div>
                            </div>

                            {/* Right Column - CTA */}
                            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 shadow-2xl">
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold text-white mb-2">Explore Resources</h2>
                                    <p className="text-slate-400">
                                        Access role-specific content for AWS partners
                                    </p>
                                </div>

                                <Link
                                    href="/aws-portal/dashboard"
                                    className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-orange-600 transition-all flex items-center justify-center gap-2"
                                >
                                    View Dashboard
                                    <Sparkles size={20} />
                                </Link>
                            </div>
                        </div>

                        {/* Why Connect is Critical for Agentic AI */}
                        <div className="border-t border-slate-800 pt-16">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    Why Amazon Connect is{' '}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">
                                        Critical
                                    </span>
                                    {' '}for Agentic AI
                                </h2>
                                <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                                    The foundation for intelligent, autonomous customer experiences
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-600/30 rounded-xl p-6">
                                    <div className="mb-4 p-3 bg-blue-600/20 rounded-lg w-fit">
                                        <Network size={24} className="text-blue-400" />
                                    </div>
                                    <h3 className="text-white font-bold mb-3">Native Integration Layer</h3>
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        Amazon Connect is the <strong>only contact center</strong> with native, pre-built integrations to Amazon Bedrock, enabling seamless AI agent coordination without complex middleware.
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-600/30 rounded-xl p-6">
                                    <div className="mb-4 p-3 bg-purple-600/20 rounded-lg w-fit">
                                        <Sparkles size={24} className="text-purple-400" />
                                    </div>
                                    <h3 className="text-white font-bold mb-3">Real-Time Context Flow</h3>
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        Passing conversation context, customer history, and sentiment <strong>in real-time</strong> between human agents and AI agents—something legacy systems struggle to achieve.
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/10 border border-orange-600/30 rounded-xl p-6">
                                    <div className="mb-4 p-3 bg-orange-600/20 rounded-lg w-fit">
                                        <Zap size={24} className="text-orange-400" />
                                    </div>
                                    <h3 className="text-white font-bold mb-3">Orchestration Engine</h3>
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        Contact Flows act as the <strong>orchestration layer</strong> for agentic workflows, routing between AI agents, human agents, and backend systems based on intent and complexity.
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 border border-green-600/30 rounded-xl p-6">
                                    <div className="mb-4 p-3 bg-green-600/20 rounded-lg w-fit">
                                        <Globe size={24} className="text-green-400" />
                                    </div>
                                    <h3 className="text-white font-bold mb-3">Omnichannel AI</h3>
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        Deploy the <strong>same AI agent</strong> across voice, chat, SMS, and email with unified training—Connect handles channel-specific nuances automatically.
                                    </p>
                                </div>
                            </div>

                            {/* Key Insight Box */}
                            <div className="mt-8 bg-gradient-to-br from-orange-600/10 to-orange-500/5 border border-orange-600/30 rounded-xl p-8">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-orange-600/20 rounded-lg">
                                        <Sparkles size={28} className="text-orange-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-3">The Agentic AI Advantage</h3>
                                        <p className="text-slate-300 leading-relaxed mb-4">
                                            Unlike traditional chatbots that follow rigid scripts, agentic AI systems powered by Amazon Bedrock can <strong>reason, plan, and take action</strong> autonomously. Amazon Connect provides the critical infrastructure to:
                                        </p>
                                        <ul className="space-y-2 text-slate-300">
                                            <li className="flex items-start">
                                                <span className="text-orange-400 mr-2">•</span>
                                                <span><strong>Monitor and intercept</strong> when AI agents need human assistance</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-orange-400 mr-2">•</span>
                                                <span><strong>Maintain compliance</strong> in regulated industries with built-in recording and analytics</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-orange-400 mr-2">•</span>
                                                <span><strong>Scale instantly</strong> from 10 to 10,000 AI agents during demand spikes</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-orange-400 mr-2">•</span>
                                                <span><strong>Learn continuously</strong> from every interaction to improve agent performance</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
