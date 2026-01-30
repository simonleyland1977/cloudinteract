"use client"

import { MarketingHeader } from "@/components/MarketingHeader"
import { MarketingFooter } from "@/components/MarketingFooter"
import { RegionalSwitcher } from "@/components/RegionalSwitcher"
import { useRegionalContent } from "@/hooks/useRegionalContent"
import { ShoppingCart, Package, TrendingUp, Users, Zap, CreditCard, Check } from "lucide-react"
import Link from "next/link"

export default function RetailPage() {
    const { selectedRegion, isClient, handleRegionChange } = useRegionalContent('retail-region')

    const content = {
        uk: {
            color: 'blue',
            title: 'UK Retail & E-Commerce',
            subtitle: 'Omnichannel retail experiences with Click & Collect, UK payment systems, and post-Brexit compliance',
            compliance: 'UK GDPR & Consumer Rights Compliant',
            features: [
                {
                    icon: ShoppingCart,
                    title: 'Click & Collect Integration',
                    description: 'Seamless coordination between online orders and in-store pickup with UK courier and Royal Mail integration'
                },
                {
                    icon: Package,
                    title: 'UK Fulfillment Networks',
                    description: 'Integration with Royal Mail, DPD, Yodel, and UK-based fulfillment centers for delivery tracking'
                },
                {
                    icon: CreditCard,
                    title: 'UK Payment Systems',
                    description: 'Stripe UK, Worldpay, Barclaycard integration with contactless, Apple Pay, and Google Pay support'
                },
                {
                    icon: Users,
                    title: 'Consumer Rights Act',
                    description: '14-day return policy automation and Consumer Rights Act 2015 compliance for refunds and exchanges'
                },
                {
                    icon: Zap,
                    title: 'Store Locator',
                    description: 'AI-powered store finder for UK high street locations with real-time inventory availability'
                },
                {
                    icon: TrendingUp,
                    title: 'Loyalty & Clubcard',
                    description: 'Integration with UK loyalty schemes like Nectar, Clubcard, and Boots Advantage'
                }
            ],
            specific: {
                title: 'Built for UK Retail Market',
                points: [
                    'Click & Collect coordination with UK store networks',
                    'Royal Mail, DPD, Hermes, Yodel delivery tracking integration',
                    'UK payment processing with Stripe, Worldpay, Barclaycard',
                    'Consumer Rights Act 2015 compliance for returns and refunds',
                    'VAT calculation for UK, EU, and international orders post-Brexit',
                    'Integration with UK loyalty schemes and gift card systems'
                ]
            }
        },
        us: {
            color: 'purple',
            title: 'US Retail & E-Commerce',
            subtitle: 'Omnichannel retail with BOPIS, US fulfillment centers, and state-specific tax compliance',
            compliance: 'PCI-DSS & State Tax Compliant',
            features: [
                {
                    icon: ShoppingCart,
                    title: 'BOPIS & Curbside Pickup',
                    description: 'Buy Online Pickup In Store (BOPIS) with curbside, locker, and in-store coordination'
                },
                {
                    icon: Package,
                    title: 'US Fulfillment Networks',
                    description: 'UPS, FedEx, USPS integration with Amazon FBA and Shopify Fulfillment Network'
                },
                {
                    icon: CreditCard,
                    title: 'US Payment Processing',
                    description: 'Stripe, Square, PayPal integration with EMV chip, NFC, and digital wallet support'
                },
                {
                    icon: Users,
                    title: 'Return & Exchange',
                    description: 'Automated RMA (Return Merchandise Authorization) with prepaid shipping labels and restocking'
                },
                {
                    icon: Zap,
                    title: 'Store Locator & Inventory',
                    description: 'Real-time in-store inventory across all 50 states with ZIP code-based search'
                },
                {
                    icon: TrendingUp,
                    title: 'Loyalty Programs',
                    description: 'Points, rewards, and cashback integration with major US loyalty platforms'
                }
            ],
            specific: {
                title: 'Built for US Retail Market',
                points: [
                    'BOPIS (Buy Online Pickup In Store) and curbside pickup coordination',
                    'UPS, FedEx, USPS shipping with Amazon FBA integration',
                    'State sales tax calculation across all 50 states + territories',
                    'PCI-DSS Level 1 payment security with EMV and contactless',
                    'Integration with Shopify, BigCommerce, Magento, WooCommerce',
                    'US loyalty programs and gift card processing'
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
            icon: 'bg-blue-500/10 text-blue-400',
            border: 'border-blue-500/50',
            check: 'text-blue-400'
        },
        us: {
            badge: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
            gradient: 'from-purple-400 to-pink-400',
            button: 'bg-purple-600 hover:bg-purple-700 text-white',
            icon: 'bg-purple-500/10 text-purple-400',
            border: 'border-purple-500/50',
            check: 'text-purple-400'
        }
    }

    const colors = colorClasses[selectedRegion]

    return (
        <div className="flex flex-col min-h-screen bg-slate-950">
            <MarketingHeader />

            {isClient && (
                <RegionalSwitcher
                    selectedRegion={selectedRegion}
                    onRegionChange={handleRegionChange}
                />
            )}

            <main className="flex-grow pt-20">
                <section className="relative py-24 md:py-32 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-slate-950 to-orange-900/20" />

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
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
                                <Link
                                    href="/contact"
                                    className={`px-8 py-4 rounded-lg font-semibold transition-all ${colors.button}`}
                                >
                                    Request a Demo
                                </Link>
                                <Link
                                    href="/resources"
                                    className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-all"
                                >
                                    View Case Studies
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-slate-900/30">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                                Key Capabilities
                            </h2>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {current.features.map((feature, index) => {
                                    const Icon = feature.icon
                                    return (
                                        <div key={index} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all">
                                            <div className={`p-3 rounded-lg w-fit mb-4 ${colors.icon}`}>
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-3">
                                                {feature.title}
                                            </h3>
                                            <p className="text-slate-400">
                                                {feature.description}
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <div className={`bg-slate-900/50 border rounded-2xl p-8 md:p-10 ${colors.border}`}>
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                                    {current.specific.title}
                                </h2>

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
