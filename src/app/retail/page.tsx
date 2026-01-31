"use client"

import { useRegion } from "@/context/RegionContext"
import { MarketingHeader } from "@/components/MarketingHeader"
import { MarketingFooter } from "@/components/MarketingFooter"
import { useState, useEffect } from "react"
import { ShoppingCart, Package, TrendingUp, Users, Zap, CreditCard, Check, Globe, Tag, Truck, Store } from "lucide-react"
import Link from "next/link"
import { ChallengeSolution, type Challenge } from "@/components/industry/ChallengeSolution"
import { UseCases, type UseCase } from "@/components/industry/UseCases"
import { IndustryStats, type Stat } from "@/components/industry/IndustryStats"

type Region = 'uk' | 'us'

export default function RetailPage() {
    const { region: selectedRegion } = useRegion()

    const content = {
        uk: {
            color: 'blue',
            title: 'UK Retail & E-Commerce',
            subtitle: 'Unified commerce experiences with Click & Collect, next-day delivery, and post-Brexit compliance.',
            compliance: 'GDPR & Consumer Rights Act',
            stats: [
                { label: "Sales Uplift", value: "20", suffix: "%", description: "Higher conversion rate" },
                { label: "Call Deflection", value: "50", suffix: "%", description: "Automated WISMO checks" },
                { label: "CSAT Score", value: "4.9", suffix: "/5", description: "Customer satisfaction" },
                { label: "Availability", value: "24/7", suffix: "", description: "Style advice & support" }
            ] as Stat[],
            challenges: [
                {
                    title: "Returns Management",
                    problem: "Processing returns is costly and frustrates customers with long wait times.",
                    solution: "AI automates the entire RMA process, generating labels and scheduling pickups instantly.",
                    icon: Package
                },
                {
                    title: "Seasonal Spikes",
                    problem: "Black Friday and Christmas traffic crashes traditional contact centers.",
                    solution: "Elastic AI workforce scales indefinitely to handle 100x traffic surges without hiring.",
                    icon: TrendingUp
                },
                {
                    title: "Personalization",
                    problem: "Online shoppers miss the guidance of in-store assistants.",
                    solution: "AI Style Advisors recommend products based on purchase history and browsing behavior.",
                    icon: Tag
                }
            ] as Challenge[],
            useCases: [
                {
                    title: "High Street Fashion",
                    description: "Deployed AI 'Style Advisor' on WhatsApp and Web.",
                    outcome: "Increased average order value by 15% through personalized cross-selling.",
                    stats: "15%"
                },
                {
                    title: "Electronics Retailer",
                    description: "Automated 'Where is my order?' (WISMO) calls.",
                    outcome: "Deflected 70% of support volume allowing staff to focus on complex tech queries.",
                    stats: "70%"
                },
                {
                    title: "Luxury Brand",
                    description: "VIP concierge for top-tier loyalty members.",
                    outcome: "Zero wait times and 98% satisfaction for premium customers.",
                    stats: "98%"
                }
            ] as UseCase[],
            features: [
                { icon: ShoppingCart, title: 'Click & Collect', description: 'Seamless store inventory checks and pickup coordination' },
                { icon: Package, title: 'UK Fulfillment', description: 'Integration with Royal Mail, DPD, Yodel tracking APIs' },
                { icon: CreditCard, title: 'Secure Payments', description: 'Stripe, PayPal, and Klarna integration' },
                { icon: Users, title: 'Consumer Rights', description: 'Automated 14-day cooling-off processing compliant with UK law' },
                { icon: Zap, title: 'Store Locator', description: 'AI-driven directional guidance to nearest stockist' },
                { icon: TrendingUp, title: 'Loyalty', description: 'Integration with Nectar, Tesco Clubcard, and brand loyalty apps' }
            ],
            specific: {
                title: 'Built for UK Retail',
                points: [
                    'Post-Brexit VAT and customs automation',
                    'GDPR compliant customer data handling',
                    'Integration with Shopify, Magento, and Salesforce Commerce Cloud',
                    'Multi-currency support (GBP, EUR, USD)',
                    'Automated Trustpilot review collection',
                    'Next-day delivery cut-off reminders'
                ]
            }
        },
        us: {
            color: 'purple',
            title: 'US Retail & E-Commerce',
            subtitle: 'Scale your brand with AI-powered BOPIS, curbside pickup, and 50-state tax compliance.',
            compliance: 'PCI-DSS & CCPA Compliant',
            stats: [
                { label: "Conversion", value: "25", suffix: "%", description: "Cart abandonment recovery" },
                { label: "Efficiency", value: "60", suffix: "%", description: "Faster checkout support" },
                { label: "Loyalty", value: "3x", suffix: "", description: "Repeat purchase rate" },
                { label: "Scale", value: "Infinite", suffix: "", description: "Cyber Monday ready" }
            ] as Stat[],
            challenges: [
                {
                    title: "Shipping Anxiety",
                    problem: "Customers flooding lines to ask 'Where is my package?'.",
                    solution: "Proactive SMS/WhatsApp updates preventing inbound queries before they happen.",
                    icon: Truck
                },
                {
                    title: "State Tax Nexus",
                    problem: "Complex tax rules across 50 states confuse customers at checkout.",
                    solution: "AI assistants answer tax and duty questions in real-time based on ZIP code.",
                    icon: Building2 // Using generic Building icon as replacement for 'Map' if needed
                },
                {
                    title: "Cart Abandonment",
                    problem: "60% of shoppers leave at checkout due to unanswered questions.",
                    solution: "Exit-intent AI chat offers instant help or limited-time discounts to save the sale.",
                    icon: ShoppingCart
                }
            ] as Challenge[],
            useCases: [
                {
                    title: "Big Box Retailer",
                    description: "Automated curbside pickup coordination via SMS.",
                    outcome: "Reduced average wait time by 8 minutes per car.",
                    stats: "8 min"
                },
                {
                    title: "DTC Brand",
                    description: "Instagram & TikTok DM automation for product FAQs.",
                    outcome: "Doubled social commerce revenue in 3 months.",
                    stats: "2x"
                },
                {
                    title: "Auto Parts Chain",
                    description: "Visual AI search for part compatibility.",
                    outcome: "Reduced returns due to incompatible parts by 40%.",
                    stats: "40%"
                }
            ] as UseCase[],
            features: [
                { icon: Store, title: 'BOPIS Ready', description: 'Buy Online, Pickup In-Store workflow automation' },
                { icon: Package, title: 'US Carriers', description: 'Native FedEx, UPS, and USPS integration' },
                { icon: CreditCard, title: 'Digital Wallets', description: 'Apple Pay, Google Pay, and Affirm support' },
                { icon: Users, title: 'Returns Mgmt', description: 'Automated RMA generation and restocking fees' },
                { icon: Zap, title: 'Inventory Sync', description: 'Real-time stock checks across all US warehouses' },
                { icon: TrendingUp, title: 'Rewards', description: 'Points redemption and loyalty tier management' }
            ],
            specific: {
                title: 'Built for US Retail',
                points: [
                    'Sales tax calculation (Avalara/Vertex integration)',
                    'CCPA and state privacy compliance',
                    'Integration with Amazon FBA and Shopify Plus',
                    'Holiday surge protection (Black Friday/Cyber Monday)',
                    'Gift receipt and registry management',
                    'Curbside pickup coordination tools'
                ]
            }
        }
    }

    const current = content[selectedRegion]
    const colorClasses = {
        uk: {
            badge: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
            gradient: 'from-blue-400 to-cyan-400',
            button: 'bg-blue-600 hover:bg-blue-700 text-white',
            border: 'border-blue-500/50',
            icon: 'bg-blue-500/10 text-blue-400',
            check: 'text-blue-400'
        },
        us: {
            badge: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
            gradient: 'from-purple-400 to-pink-400',
            button: 'bg-purple-600 hover:bg-purple-700 text-white',
            border: 'border-purple-500/50',
            icon: 'bg-purple-500/10 text-purple-400',
            check: 'text-purple-400'
        }
    }

    const colors = colorClasses[selectedRegion]

    return (
        <div className="flex flex-col min-h-screen bg-slate-950">
            <MarketingHeader />

            <main className="flex-grow pt-20">
                <section className="relative py-24 md:py-32 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-slate-950 to-orange-900/20" />

                    <div className="container mx-auto px-6 relative z-10">
                        {/* Region Switcher Moved to Header */}

                        <div className="max-w-4xl mx-auto text-center mt-8 md:mt-0">
                            <div className={`inline-block px-4 py-2 border rounded-full text-sm font-medium mb-6 ${colors.badge}`}>
                                {current.compliance}
                            </div>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                                {current.title}
                                <span className={`block text-transparent bg-clip-text bg-gradient-to-r ${colors.gradient}`}>
                                    Powered by Agentic AI
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                                {current.subtitle}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact" className={`px-8 py-4 rounded-lg font-semibold transition-all ${colors.button}`}>Request a Demo</Link>
                                <Link href="/resources" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-all">View Case Studies</Link>
                            </div>
                        </div>
                    </div>
                </section>

                <IndustryStats stats={current.stats} />

                <ChallengeSolution
                    title="Retail Reimagined"
                    subtitle="Create seamless shopping journeys from click to doorstep"
                    challenges={current.challenges}
                />

                <section className="py-20 bg-slate-900/30">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Key Capabilities</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {current.features.map((feature, index) => {
                                    const Icon = feature.icon
                                    return (
                                        <div key={index} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all">
                                            <div className={`p-3 rounded-lg w-fit mb-4 ${colors.icon}`}>
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                            <p className="text-slate-400">{feature.description}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                <UseCases
                    title="Customer Success Stories"
                    subtitle="Leading brands delivering superior CX with CloudInteract"
                    cases={current.useCases}
                />

                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <div className={`bg-slate-900/50 border rounded-2xl p-8 md:p-10 ${colors.border}`}>
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{current.specific.title}</h2>
                                <div className="space-y-4">
                                    {current.specific.points.map((point, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${colors.check}`} />
                                            <span className="text-slate-300">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <MarketingFooter />
        </div>
    )
}
