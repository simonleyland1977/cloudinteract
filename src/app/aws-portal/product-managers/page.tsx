'use client';

import { PortalHeader } from '@/components/portal/PortalHeader';
import { RoleSwitcher } from '@/components/portal/RoleSwitcher';
import { Package, Building2, HeartPulse, GraduationCap, ShoppingCart, Landmark, DollarSign, Award } from 'lucide-react';

export default function ProductManagersPage() {
    return (
        <div className="min-h-screen bg-slate-950">
            <PortalHeader />

            <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Product Manager Resources
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl">
                            Vertical-specific packages, competitive positioning, and go-to-market strategies for Amazon Connect and Agentic AI solutions.
                        </p>
                    </div>

                    {/* Role Switcher */}
                    <div className="mb-12">
                        <RoleSwitcher currentRole="product-manager" />
                    </div>

                    {/* Vertical Solutions */}
                    <section className="mb-12">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="p-2 bg-purple-600/20 rounded-lg">
                                <Package size={24} className="text-purple-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Vertical Solutions & Packages</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Healthcare */}
                            <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-600/30 rounded-xl p-6">
                                <div className="flex items-center space-x-3 mb-4">
                                    <HeartPulse size={28} className="text-blue-400" />
                                    <h3 className="text-xl font-bold text-white">Healthcare</h3>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <div className="text-blue-400 font-semibold mb-2 text-sm">Core Package</div>
                                        <ul className="space-y-1 text-slate-300 text-sm">
                                            <li>• Amazon Connect for patient engagement</li>
                                            <li>• AI agents for appointment scheduling & prescription refills</li>
                                            <li>• HIPAA-compliant voice & chat</li>
                                            <li>• Contact Lens for quality assurance</li>
                                            <li>• EHR system integration (Epic, Cerner)</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <div className="text-blue-400 font-semibold mb-2 text-sm">Key Use Cases</div>
                                        <ul className="space-y-1 text-slate-300 text-sm">
                                            <li>• Appointment scheduling & reminders</li>
                                            <li>• Patient triage & symptom assessment</li>
                                            <li>• Post-discharge follow-ups</li>
                                            <li>• Billing & insurance inquiries</li>
                                        </ul>
                                    </div>

                                    <div className="pt-3 border-t border-blue-600/20">
                                        <div className="text-blue-400 font-semibold text-sm">Typical ROI</div>
                                        <div className="text-white text-2xl font-bold mt-1">40% cost reduction</div>
                                        <div className="text-slate-400 text-xs">+ 25% patient satisfaction increase</div>
                                    </div>
                                </div>
                            </div>

                            {/* Financial Services */}
                            <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 border border-green-600/30 rounded-xl p-6">
                                <div className="flex items-center space-x-3 mb-4">
                                    <Landmark size={28} className="text-green-400" />
                                    <h3 className="text-xl font-bold text-white">Financial Services</h3>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <div className="text-green-400 font-semibold mb-2 text-sm">Core Package</div>
                                        <ul className="space-y-1 text-slate-300 text-sm">
                                            <li>• Amazon Connect for customer service</li>
                                            <li>• AI agents for account inquiries & fraud alerts</li>
                                            <li>• PCI DSS compliant payment processing</li>
                                            <li>• Real-time fraud detection</li>
                                            <li>• Banking system integration</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <div className="text-green-400 font-semibold mb-2 text-sm">Key Use Cases</div>
                                        <ul className="space-y-1 text-slate-300 text-sm">
                                            <li>• Account balance & transaction history</li>
                                            <li>• Card activation & fraud reporting</li>
                                            <li>• Loan application status</li>
                                            <li>• Payment processing & transfers</li>
                                        </ul>
                                    </div>

                                    <div className="pt-3 border-t border-green-600/20">
                                        <div className="text-green-400 font-semibold text-sm">Typical ROI</div>
                                        <div className="text-white text-2xl font-bold mt-1">50% cost reduction</div>
                                        <div className="text-slate-400 text-xs">+ 30% faster resolution times</div>
                                    </div>
                                </div>
                            </div>

                            {/* Retail & E-commerce */}
                            <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/10 border border-orange-600/30 rounded-xl p-6">
                                <div className="flex items-center space-x-3 mb-4">
                                    <ShoppingCart size={28} className="text-orange-400" />
                                    <h3 className="text-xl font-bold text-white">Retail & E-commerce</h3>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <div className="text-orange-400 font-semibold mb-2 text-sm">Core Package</div>
                                        <ul className="space-y-1 text-slate-300 text-sm">
                                            <li>• Amazon Connect for omnichannel support</li>
                                            <li>• AI agents for order tracking & returns</li>
                                            <li>• Chat, SMS, and social media integration</li>
                                            <li>• Personalized recommendations engine</li>
                                            <li>• E-commerce platform integration</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <div className="text-orange-400 font-semibold mb-2 text-sm">Key Use Cases</div>
                                        <ul className="space-y-1 text-slate-300 text-sm">
                                            <li>• Order status & tracking</li>
                                            <li>• Product information & recommendations</li>
                                            <li>• Returns & refunds processing</li>
                                            <li>• Peak season overflow handling</li>
                                        </ul>
                                    </div>

                                    <div className="pt-3 border-t border-orange-600/20">
                                        <div className="text-orange-400 font-semibold text-sm">Typical ROI</div>
                                        <div className="text-white text-2xl font-bold mt-1">60% cost reduction</div>
                                        <div className="text-slate-400 text-xs">+ 3x capacity during peak season</div>
                                    </div>
                                </div>
                            </div>

                            {/* Education */}
                            <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-600/30 rounded-xl p-6">
                                <div className="flex items-center space-x-3 mb-4">
                                    <GraduationCap size={28} className="text-purple-400" />
                                    <h3 className="text-xl font-bold text-white">Education</h3>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <div className="text-purple-400 font-semibold mb-2 text-sm">Core Package</div>
                                        <ul className="space-y-1 text-slate-300 text-sm">
                                            <li>• Amazon Connect for student services</li>
                                            <li>• AI agents for admissions & enrollment</li>
                                            <li>• Multi-language support</li>
                                            <li>• Student information system integration</li>
                                            <li>• After-hours virtual assistant</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <div className="text-purple-400 font-semibold mb-2 text-sm">Key Use Cases</div>
                                        <ul className="space-y-1 text-slate-300 text-sm">
                                            <li>• Admissions inquiries & application status</li>
                                            <li>• Course registration support</li>
                                            <li>• Financial aid information</li>
                                            <li>• Campus services & IT help desk</li>
                                        </ul>
                                    </div>

                                    <div className="pt-3 border-t border-purple-600/20">
                                        <div className="text-purple-400 font-semibold text-sm">Typical ROI</div>
                                        <div className="text-white text-2xl font-bold mt-1">45% cost reduction</div>
                                        <div className="text-slate-400 text-xs">+ 90% after-hours coverage</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Technology Stack */}
                    <section className="mb-12">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="p-2 bg-blue-600/20 rounded-lg">
                                <Building2 size={24} className="text-blue-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Technology Stack Combinations</h2>
                        </div>

                        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div>
                                    <div className="text-orange-400 font-semibold mb-4">Essential Stack</div>
                                    <ul className="space-y-2 text-slate-300 text-sm">
                                        <li className="flex items-start">
                                            <span className="text-orange-400 mr-2 font-bold">→</span>
                                            <span><strong>Amazon Connect:</strong> Cloud contact center platform</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-orange-400 mr-2 font-bold">→</span>
                                            <span><strong>Amazon Bedrock:</strong> Foundation models for AI agents</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-orange-400 mr-2 font-bold">→</span>
                                            <span><strong>Amazon Lex:</strong> Conversational interfaces</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <div className="text-orange-400 font-semibold mb-4">Enhanced Stack</div>
                                    <ul className="space-y-2 text-slate-300 text-sm">
                                        <li className="flex items-start">
                                            <span className="text-orange-400 mr-2 font-bold">+</span>
                                            <span><strong>Contact Lens:</strong> Real-time analytics & sentiment</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-orange-400 mr-2 font-bold">+</span>
                                            <span><strong>Amazon Polly:</strong> Natural-sounding text-to-speech</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-orange-400 mr-2 font-bold">+</span>
                                            <span><strong>Amazon Transcribe:</strong> Speech-to-text with accuracy</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <div className="text-orange-400 font-semibold mb-4">Enterprise Stack</div>
                                    <ul className="space-y-2 text-slate-300 text-sm">
                                        <li className="flex items-start">
                                            <span className="text-orange-400 mr-2 font-bold">++</span>
                                            <span><strong>Amazon Pinpoint:</strong> Multi-channel engagement</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-orange-400 mr-2 font-bold">++</span>
                                            <span><strong>Amazon Comprehend:</strong> NLP insights</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-orange-400 mr-2 font-bold">++</span>
                                            <span><strong>Amazon Kendra:</strong> Intelligent search</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Pricing Models */}
                    <section className="mb-12">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="p-2 bg-green-600/20 rounded-lg">
                                <DollarSign size={24} className="text-green-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Pricing & Bundle Configurations</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                                <div className="text-center mb-4">
                                    <div className="text-green-400 font-semibold mb-2">Starter Bundle</div>
                                    <div className="text-white text-3xl font-bold">~$5K</div>
                                    <div className="text-slate-400 text-sm">/ month</div>
                                </div>
                                <ul className="space-y-2 text-slate-300 text-sm mb-6">
                                    <li>✓ Amazon Connect (up to 50 agents)</li>
                                    <li>✓ Basic AI agent (FAQ automation)</li>
                                    <li>✓ Voice & chat channels</li>
                                    <li>✓ Standard support</li>
                                </ul>
                                <div className="text-center text-slate-500 text-xs">Best for: SMB, pilot programs</div>
                            </div>

                            <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/20 border-2 border-orange-600/50 rounded-xl p-6 relative">
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                    <span className="px-3 py-1 bg-orange-600 text-white text-xs font-semibold rounded-full">
                                        Most Popular
                                    </span>
                                </div>
                                <div className="text-center mb-4">
                                    <div className="text-orange-400 font-semibold mb-2">Professional Bundle</div>
                                    <div className="text-white text-3xl font-bold">~$25K</div>
                                    <div className="text-slate-400 text-sm">/ month</div>
                                </div>
                                <ul className="space-y-2 text-slate-300 text-sm mb-6">
                                    <li>✓ Amazon Connect (up to 250 agents)</li>
                                    <li>✓ Advanced AI agents (multi-intent)</li>
                                    <li>✓ Omnichannel (voice, chat, SMS, social)</li>
                                    <li>✓ Contact Lens analytics</li>
                                    <li>✓ CRM integrations</li>
                                    <li>✓ Priority support</li>
                                </ul>
                                <div className="text-center text-slate-500 text-xs">Best for: Mid-market, enterprise pilots</div>
                            </div>

                            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                                <div className="text-center mb-4">
                                    <div className="text-purple-400 font-semibold mb-2">Enterprise Bundle</div>
                                    <div className="text-white text-3xl font-bold">Custom</div>
                                    <div className="text-slate-400 text-sm">pricing</div>
                                </div>
                                <ul className="space-y-2 text-slate-300 text-sm mb-6">
                                    <li>✓ Unlimited agents</li>
                                    <li>✓ Custom AI agent development</li>
                                    <li>✓ Full AWS integration suite</li>
                                    <li>✓ Advanced analytics & ML</li>
                                    <li>✓ Dedicated support & TAM</li>
                                    <li>✓ SLA guarantees</li>
                                </ul>
                                <div className="text-center text-slate-500 text-xs">Best for: Large enterprise deployments</div>
                            </div>
                        </div>
                    </section>

                    {/* Competitive Positioning */}
                    <section className="mb-12">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="p-2 bg-red-600/20 rounded-lg">
                                <Award size={24} className="text-red-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Competitive Positioning</h2>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <div className="text-orange-400 font-semibold mb-3">vs. Genesys Cloud</div>
                                        <ul className="space-y-2 text-slate-300 text-sm">
                                            <li>• <strong>Pricing:</strong> 40-60% lower TCO with pay-as-you-go</li>
                                            <li>• <strong>AI:</strong> Native Bedrock integration vs. third-party AI</li>
                                            <li>• <strong>Scale:</strong> Instant elastic scaling vs. capacity planning</li>
                                            <li>• <strong>Innovation:</strong> Faster feature releases leveraging AWS ecosystem</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="text-orange-400 font-semibold mb-3">vs. Five9</div>
                                        <ul className="space-y-2 text-slate-300 text-sm">
                                            <li>• <strong>Infrastructure:</strong> AWS global reach vs. limited regions</li>
                                            <li>• <strong>Integration:</strong> 90+ AWS services vs. limited connectors</li>
                                            <li>• <strong>AI Maturity:</strong> Amazon Bedrock vs. early-stage AI</li>
                                            <li>• <strong>Reliability:</strong> AWS SLA guarantees vs. downtime history</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/10 border border-orange-600/30 rounded-xl p-6">
                                <div className="text-orange-400 font-semibold mb-3">Amazon Connect Differentiation</div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <div className="text-white font-medium mb-2">True Cloud-Native</div>
                                        <div className="text-slate-300 text-sm">Built on AWS from day one, not cloud-washed legacy</div>
                                    </div>
                                    <div>
                                        <div className="text-white font-medium mb-2">Pay-as-You-Go</div>
                                        <div className="text-slate-300 text-sm">No upfront costs, contracts, or seat licenses</div>
                                    </div>
                                    <div>
                                        <div className="text-white font-medium mb-2">AI-First Platform</div>
                                        <div className="text-slate-300 text-sm">Amazon Bedrock powers genuine generative AI capabilities</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Partner Ecosystem */}
                    <section>
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="p-2 bg-yellow-600/20 rounded-lg">
                                <Award size={24} className="text-yellow-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Partner Ecosystem & Integrations</h2>
                        </div>

                        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div>
                                    <div className="text-yellow-400 font-semibold mb-3">CRM Integration</div>
                                    <ul className="space-y-1 text-slate-300 text-sm">
                                        <li>• Salesforce Service Cloud</li>
                                        <li>• Microsoft Dynamics 365</li>
                                        <li>• Zendesk</li>
                                        <li>• ServiceNow</li>
                                    </ul>
                                </div>
                                <div>
                                    <div className="text-yellow-400 font-semibold mb-3">Workforce Management</div>
                                    <ul className="space-y-1 text-slate-300 text-sm">
                                        <li>• NICE WFM</li>
                                        <li>• Verint</li>
                                        <li>• Assembled</li>
                                        <li>• Calabrio</li>
                                    </ul>
                                </div>
                                <div>
                                    <div className="text-yellow-400 font-semibold mb-3">Quality Monitoring</div>
                                    <ul className="space-y-1 text-slate-300 text-sm">
                                        <li>• Native Contact Lens</li>
                                        <li>• CallMiner</li>
                                        <li>• Observe.AI</li>
                                        <li>• MaestroQA</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
