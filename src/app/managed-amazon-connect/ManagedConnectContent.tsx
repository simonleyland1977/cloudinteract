'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
    Cloud, Shield, Zap, TrendingUp, Users, DollarSign,
    Brain, Award, CheckCircle2, ArrowRight, Sparkles,
    Database, Lock, BarChart3, Headphones, Clock
} from 'lucide-react';
import { PricingCalculator } from '@/components/PricingCalculator';
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable';
import { HowItWorksTimeline } from '@/components/HowItWorksTimeline';
import { MarketplaceShowcase } from '@/components/MarketplaceShowcase';
import { RegionalSwitcher, type Region } from '@/components/RegionalSwitcher';

interface ManagedConnectContentProps {
    region?: 'UK' | 'US';
}

export function ManagedConnectContent({ region = 'US' }: ManagedConnectContentProps) {
    const router = useRouter();
    const isUK = region === 'UK';
    const currencySymbol = isUK ? '£' : '$';
    const centerSpelling = isUK ? 'Centre' : 'Center';

    const handleRegionChange = (newRegion: Region) => {
        router.push(`/managed-amazon-connect/${newRegion}`);
    };

    // Pricing values
    const pricing = {
        quickStart20: isUK ? '16,000' : '20,000',
        quickStart50: isUK ? '40,000' : '50,000',
        assurance: isUK ? '800-1,600' : '1k-2k',
        voice: isUK ? '0.016' : '0.02',
        chat: isUK ? '0.003' : '0.004',
        sms: isUK ? '0.008' : '0.01',
    };

    return (
        <div className="min-h-screen bg-slate-950">
            <RegionalSwitcher
                selectedRegion={region.toLowerCase() as Region}
                onRegionChange={handleRegionChange}
            />

            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-950 to-indigo-900/20" />
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse delay-700" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/10 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-8">
                            <Sparkles className="w-4 h-4" />
                            <span>Managed Amazon Connect Service</span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            World-Class Contact {centerSpelling},
                            <span className="block mt-2 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                                Zero AWS Hassle
                            </span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
                            CloudInteract manages your Amazon Connect environment from migration to ongoing operations.
                            You focus on customers, we handle everything else.
                        </p>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
                            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 border border-slate-800">
                                <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-1">30 Days</div>
                                <div className="text-sm text-slate-400">Go-Live</div>
                            </div>
                            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 border border-slate-800">
                                <div className="text-2xl md:text-3xl font-bold text-indigo-400 mb-1">20-100</div>
                                <div className="text-sm text-slate-400">Agents</div>
                            </div>
                            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 border border-slate-800">
                                <div className="text-2xl md:text-3xl font-bold text-green-400 mb-1">30%+</div>
                                <div className="text-sm text-slate-400">Cost Savings</div>
                            </div>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold rounded-lg hover:from-orange-500 hover:to-orange-400 transition-all duration-300 shadow-lg hover:shadow-orange-500/50 hover:-translate-y-1"
                            >
                                Get Custom Quote
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <a
                                href="#calculator"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-all duration-300 border border-slate-700"
                            >
                                See Pricing Calculator
                                <BarChart3 className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem/Solution Section - Three Positioning Angles */}
            <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Why Choose Managed Amazon Connect?
                        </h2>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            Three powerful reasons to let us handle your contact {centerSpelling.toLowerCase()}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {/* Position 1: Amazon Connect as a Service */}
                        <div className="bg-gradient-to-br from-purple-900/20 to-slate-900 rounded-2xl border border-purple-500/30 p-8 hover:border-purple-500/50 transition-all duration-300">
                            <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                                <Cloud className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">No AWS Expertise Needed</h3>
                            <ul className="space-y-3 text-slate-300">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    <span>Skip the 6-month learning curve</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    <span>We handle all AWS complexity</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    <span>No need to hire AWS specialists</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    <span>Focus on customers, not infrastructure</span>
                                </li>
                            </ul>
                        </div>

                        {/* Position 2: Legacy Migration */}
                        <div className="bg-gradient-to-br from-indigo-900/20 to-slate-900 rounded-2xl border border-indigo-500/30 p-8 hover:border-indigo-500/50 transition-all duration-300">
                            <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                                <TrendingUp className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Escape Legacy Systems</h3>
                            <ul className="space-y-3 text-slate-300">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    <span>Migrate from Avaya, Cisco, Mitel</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    <span>No more per-seat licensing fees</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    <span>Zero business disruption</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    <span>Save 30-50% vs. traditional CCaaS</span>
                                </li>
                            </ul>
                        </div>

                        {/* Position 3: AI-Ready */}
                        <div className="bg-gradient-to-br from-orange-900/20 to-slate-900 rounded-2xl border border-orange-500/30 p-8 hover:border-orange-500/50 transition-all duration-300">
                            <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center mb-6">
                                <Brain className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Built for AI from Day One</h3>
                            <ul className="space-y-3 text-slate-300">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    <span>Generative AI ready out-of-the-box</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    <span>Amazon Bedrock integration included</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    <span>Unlimited AI in voice charges</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    <span>Move at your own pace</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Everything You Need, Nothing You Don't
                        </h2>
                        <p className="text-xl text-slate-300">
                            A complete managed service that scales with your business
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Benefit 1 */}
                        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                                <Cloud className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">No AWS Environment Needed</h3>
                            <p className="text-slate-300">
                                We host and manage everything on your behalf. You get all the benefits of Amazon Connect without touching AWS.
                            </p>
                        </div>

                        {/* Benefit 2 */}
                        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                                <DollarSign className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Consumption-Based Pricing</h3>
                            <p className="text-slate-300">
                                No fixed agent fees or seat licenses. Pay only for actual usage with transparent, predictable costs.
                            </p>
                        </div>

                        {/* Benefit 3 */}
                        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center mb-4">
                                <Brain className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">AI-Ready Platform</h3>
                            <p className="text-slate-300">
                                Unlimited AI capabilities included. Leverage Amazon Nova, Bedrock, and generative AI without extra charges.
                            </p>
                        </div>

                        {/* Benefit 4 */}
                        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                                <Award className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Expert Engineering</h3>
                            <p className="text-slate-300">
                                World-class AWS Connect specialists handle your implementation, optimization, and support 24/7.
                            </p>
                        </div>

                        {/* Benefit 5 */}
                        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                            <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                                <DollarSign className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Hassle-Free Billing</h3>
                            <p className="text-slate-300">
                                Single monthly invoice with complete transparency. No surprise AWS bills or hidden costs.
                            </p>
                        </div>

                        {/* Benefit 6 */}
                        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                            <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-rose-600 rounded-lg flex items-center justify-center mb-4">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Scale On Demand</h3>
                            <p className="text-slate-300">
                                From 20 to 100+ agents on demand. No hardware constraints, no capacity planning headaches.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Calculator */}
            <section id="calculator" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <PricingCalculator region={region} />
                </div>
            </section>

            {/* How It Works Timeline */}
            <section className="py-20 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <HowItWorksTimeline />
                </div>
            </section>

            {/* Service Comparison Table */}
            <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ServiceComparisonTable />
                </div>
            </section>

            {/* What's Included Section */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            What's Included in Your Managed Service
                        </h2>
                        <p className="text-xl text-slate-300">
                            Comprehensive management from setup to ongoing optimization
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Platform Management */}
                        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                                    <Database className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Platform Management</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <div className="text-white font-semibold">Amazon Connect Configuration</div>
                                        <div className="text-sm text-slate-400">Complete setup and optimization</div>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <div className="text-white font-semibold">Flow Design & Optimization</div>
                                        <div className="text-sm text-slate-400">Custom IVR and routing logic</div>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <div className="text-white font-semibold">Queue Management</div>
                                        <div className="text-sm text-slate-400">Intelligent routing and distribution</div>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <div className="text-white font-semibold">Integration Implementation</div>
                                        <div className="text-sm text-slate-400">CRM, ITSM, and custom systems</div>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <div className="text-white font-semibold">Analytics & Reporting</div>
                                        <div className="text-sm text-slate-400">Real-time dashboards and insights</div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Ongoing Support */}
                        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-lg flex items-center justify-center">
                                    <Headphones className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Ongoing Support</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <div className="text-white font-semibold">24/7 Monitoring</div>
                                        <div className="text-sm text-slate-400">Proactive issue detection and resolution</div>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <div className="text-white font-semibold">Incident Response</div>
                                        <div className="text-sm text-slate-400">Rapid resolution by AWS experts</div>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <div className="text-white font-semibold">Feature Updates</div>
                                        <div className="text-sm text-slate-400">Automatic Amazon Connect enhancements</div>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <div className="text-white font-semibold">Capacity Planning</div>
                                        <div className="text-sm text-slate-400">Forecasting and scaling recommendations</div>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <div className="text-white font-semibold">Monthly Reviews</div>
                                        <div className="text-sm text-slate-400">Performance optimization sessions</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Integrations Showcase */}
            <section className="py-20 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Integrates with Your Existing Stack
                        </h2>
                        <p className="text-xl text-slate-300">
                            Connect seamlessly to the tools you already use
                        </p>
                    </div>
                    <MarketplaceShowcase />
                </div>
            </section>

            {/* Pricing Details Section */}
            <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Transparent, Predictable Pricing
                        </h2>
                        <p className="text-xl text-slate-300">
                            No hidden fees, no surprises
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {/* Quick Start */}
                        <div className="bg-gradient-to-br from-purple-900/20 to-slate-900 rounded-2xl border border-purple-500/30 p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <Zap className="w-6 h-6 text-yellow-500" />
                                <h3 className="text-2xl font-bold text-white">Quick Start Investment</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex justify-between items-baseline">
                                    <span className="text-slate-300">20 agents</span>
                                    <span className="text-2xl font-bold text-white">{currencySymbol}{pricing.quickStart20}</span>
                                </li>
                                <li className="flex justify-between items-baseline">
                                    <span className="text-slate-300">50 agents</span>
                                    <span className="text-2xl font-bold text-white">{currencySymbol}{pricing.quickStart50}</span>
                                </li>
                            </ul>
                            <div className="mt-6 pt-6 border-t border-slate-700">
                                <p className="text-sm text-slate-400">One-time fee includes:</p>
                                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                                        Discovery & assessment
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                                        Migration & setup
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                                        Configuration & testing
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                                        Training & go-live support
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Ongoing Costs */}
                        <div className="bg-gradient-to-br from-indigo-900/20 to-slate-900 rounded-2xl border border-indigo-500/30 p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <Clock className="w-6 h-6 text-indigo-400" />
                                <h3 className="text-2xl font-bold text-white">Ongoing Costs</h3>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between items-baseline mb-2">
                                        <span className="text-slate-300">Monthly Assurance</span>
                                        <span className="text-2xl font-bold text-white">{currencySymbol}{pricing.assurance}</span>
                                    </div>
                                    <p className="text-sm text-slate-400">Based on agent count</p>
                                </div>
                                <div className="pt-4 border-t border-slate-700">
                                    <p className="text-sm font-semibold text-slate-300 mb-3">AWS Usage (pass-through at cost):</p>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex justify-between">
                                            <span className="text-slate-400">Voice</span>
                                            <span className="text-white">~{currencySymbol}{pricing.voice}/min</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span className="text-slate-400">Chat</span>
                                            <span className="text-white">{currencySymbol}{pricing.chat}/msg</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span className="text-slate-400">SMS</span>
                                            <span className="text-white">{currencySymbol}{pricing.sms}/msg +fees</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* No Hidden Fees */}
                    <div className="bg-green-900/20 rounded-2xl border border-green-500/30 p-8 text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">No Hidden Fees</h3>
                        <div className="grid md:grid-cols-3 gap-6 text-left">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <div className="font-semibold text-white">No AWS Account Fees</div>
                                    <div className="text-sm text-green-200">We handle all AWS management</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <div className="font-semibold text-white">No Surprise Bills</div>
                                    <div className="text-sm text-green-200">Transparent monthly reporting</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <div className="font-semibold text-white">No Hidden Charges</div>
                                    <div className="text-sm text-green-200">All costs clearly itemized</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Signals */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Trusted by Organizations Worldwide
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
                            <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">AWS Advanced Partner</h3>
                            <p className="text-slate-400">Recognized expertise in Amazon Connect</p>
                        </div>
                        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
                            <Lock className="w-12 h-12 text-green-400 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
                            <p className="text-slate-400">ISO 27001 & SOC 2 certified</p>
                        </div>
                        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
                            <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Data Residency</h3>
                            <p className="text-slate-400">UK, US, and global compliance</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {/* FAQ 1 */}
                        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 className="text-xl font-bold text-white mb-3">Do I need my own AWS account?</h3>
                            <p className="text-slate-300">
                                No. We host and manage everything on your behalf in our AWS environment. You get all the benefits of Amazon Connect
                                without needing AWS expertise, account management, or infrastructure knowledge.
                            </p>
                        </div>

                        {/* FAQ 2 */}
                        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 className="text-xl font-bold text-white mb-3">What happens to my data?</h3>
                            <p className="text-slate-300">
                                Your data is stored securely in AWS with full encryption at rest and in transit. We comply with GDPR, HIPAA, and other
                                regulations. You maintain full data ownership and can export your data at any time.
                            </p>
                        </div>

                        {/* FAQ 3 */}
                        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 className="text-xl font-bold text-white mb-3">Can I move back to on-premise?</h3>
                            <p className="text-slate-300">
                                Yes. Amazon Connect is cloud-native, but we ensure zero lock-in. You can migrate to your own AWS account or another
                                provider. We provide full documentation and transition support.
                            </p>
                        </div>

                        {/* FAQ 4 */}
                        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 className="text-xl font-bold text-white mb-3">What's included in support?</h3>
                            <p className="text-slate-300">
                                24/7 monitoring, incident response, monthly optimization reviews, feature updates, capacity planning, and a dedicated
                                support team. Our monthly assurance fee covers all ongoing management and support.
                            </p>
                        </div>

                        {/* FAQ 5 */}
                        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 className="text-xl font-bold text-white mb-3">How long does migration take?</h3>
                            <p className="text-slate-300">
                                Most migrations complete in 30 days from discovery to go-live. Complex migrations with multiple integrations may take
                                6-8 weeks. We provide a detailed timeline during the discovery phase.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-gradient-to-br from-purple-900/20 via-slate-950 to-indigo-900/20 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Transform Your Contact {centerSpelling}?
                    </h2>
                    <p className="text-xl text-slate-300 mb-10">
                        Schedule a discovery call and see how we can get you live in 30 days
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-orange-600 to-orange-500 text-white text-lg font-semibold rounded-lg hover:from-orange-500 hover:to-orange-400 transition-all duration-300 shadow-lg hover:shadow-orange-500/50 hover:-translate-y-1"
                        >
                            Schedule Discovery Call
                            <ArrowRight className="w-6 h-6" />
                        </Link>
                        <a
                            href="#calculator"
                            className="inline-flex items-center gap-2 px-10 py-5 bg-slate-800 text-white text-lg font-semibold rounded-lg hover:bg-slate-700 transition-all duration-300 border border-slate-700"
                        >
                            Review Pricing Again
                            <BarChart3 className="w-6 h-6" />
                        </a>
                    </div>

                    <p className="mt-8 text-sm text-slate-400">
                        Questions? Email us at <a href="mailto:hello@cloudinteract.io" className="text-purple-400 hover:text-purple-300">hello@cloudinteract.io</a>
                    </p>
                </div>
            </section>
        </div>
    );
}
