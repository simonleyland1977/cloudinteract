'use client';

import { PortalHeader } from '@/components/portal/PortalHeader';
import { RoleSwitcher } from '@/components/portal/RoleSwitcher';
import { Target, TrendingUp, MessageCircle, Award, Lightbulb, Users, DollarSign, CheckCircle2 } from 'lucide-react';

export default function AccountExecutivesPage() {
    return (
        <div className="min-h-screen bg-slate-950">
            <PortalHeader />

            <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Account Executive Resources
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl">
                            Strategic guidance, key messages, and proven techniques for selling Amazon Connect and AI agent solutions.
                        </p>
                    </div>

                    {/* Role Switcher */}
                    <div className="mb-12">
                        <RoleSwitcher currentRole="account-executive" />
                    </div>

                    {/* Key Messages Section */}
                    <section className="mb-12">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="p-2 bg-orange-600/20 rounded-lg">
                                <Target size={24} className="text-orange-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Key Messages</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                                <h3 className="text-white font-semibold mb-4 flex items-center">
                                    <CheckCircle2 size={20} className="text-green-400 mr-2" />
                                    Why Amazon Connect?
                                </h3>
                                <ul className="space-y-3 text-slate-300">
                                    <li className="flex items-start">
                                        <span className="text-orange-400 mr-2">•</span>
                                        <span><strong>Cloud-native scalability:</strong> Scale from 10 to 10,000 agents instantly without infrastructure overhead</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-orange-400 mr-2">•</span>
                                        <span><strong>Pay-as-you-go:</strong> No long-term contracts or upfront fees - reduce costs by up to 80%</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-orange-400 mr-2">•</span>
                                        <span><strong>Omnichannel:</strong> Voice, chat, email, and SMS in one unified platform</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-orange-400 mr-2">•</span>
                                        <span><strong>AWS Integration:</strong> Native integration with 90+ AWS services including AI/ML</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                                <h3 className="text-white font-semibold mb-4 flex items-center">
                                    <CheckCircle2 size={20} className="text-green-400 mr-2" />
                                    Why AI Agents?
                                </h3>
                                <ul className="space-y-3 text-slate-300">
                                    <li className="flex items-start">
                                        <span className="text-orange-400 mr-2">•</span>
                                        <span><strong>24/7 availability:</strong> Handle customer inquiries round the clock without additional staffing</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-orange-400 mr-2">•</span>
                                        <span><strong>Intelligent automation:</strong> Resolve 70-80% of routine inquiries without human intervention</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-orange-400 mr-2">•</span>
                                        <span><strong>Context-aware:</strong> Understand customer intent, emotion, and sentiment in real-time</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-orange-400 mr-2">•</span>
                                        <span><strong>Continuous learning:</strong> Get smarter with every interaction using Amazon Bedrock</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* New Accounts Strategy */}
                    <section className="mb-12">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="p-2 bg-blue-600/20 rounded-lg">
                                <Users size={24} className="text-blue-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">New Account Strategy</h2>
                        </div>

                        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-orange-400 font-semibold mb-3 text-lg">Discovery Questions</h3>
                                    <ul className="space-y-2 text-slate-300">
                                        <li>• What's your current contact center platform and what challenges are you facing?</li>
                                        <li>• How many agents do you have, and what are your peak vs. off-peak volumes?</li>
                                        <li>• What percentage of inquiries could be automated with the right technology?</li>
                                        <li>• Are you looking to improve CX, reduce costs, or both?</li>
                                        <li>• What's your timeline for modernization?</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-orange-400 font-semibold mb-3 text-lg">Pain Points We Solve</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex items-start space-x-3">
                                            <div className="mt-1 w-2 h-2 bg-orange-500 rounded-full"></div>
                                            <div>
                                                <div className="text-white font-medium">High operational costs</div>
                                                <div className="text-slate-400 text-sm">Legacy systems with expensive licensing and maintenance</div>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <div className="mt-1 w-2 h-2 bg-orange-500 rounded-full"></div>
                                            <div>
                                                <div className="text-white font-medium">Poor customer experience</div>
                                                <div className="text-slate-400 text-sm">Long wait times and repetitive interactions</div>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <div className="mt-1 w-2 h-2 bg-orange-500 rounded-full"></div>
                                            <div>
                                                <div className="text-white font-medium">Scalability issues</div>
                                                <div className="text-slate-400 text-sm">Can't handle seasonal spikes without over-provisioning</div>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <div className="mt-1 w-2 h-2 bg-orange-500 rounded-full"></div>
                                            <div>
                                                <div className="text-white font-medium">Limited insights</div>
                                                <div className="text-slate-400 text-sm">No real-time analytics or actionable intelligence</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Getting Customers Interested */}
                    <section className="mb-12">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="p-2 bg-purple-600/20 rounded-lg">
                                <MessageCircle size={24} className="text-purple-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Getting Customers Interested</h2>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-600/30 rounded-xl p-6">
                                <h3 className="text-purple-400 font-semibold mb-4 text-lg">Conversation Starters</h3>
                                <div className="space-y-4">
                                    <div className="bg-slate-900/50 rounded-lg p-4">
                                        <div className="text-white font-medium mb-2">"What if your contact center could scale instantly?"</div>
                                        <div className="text-slate-400 text-sm">
                                            Position Amazon Connect as the solution to handle Black Friday, product launches, or unexpected call spikes without advance planning
                                        </div>
                                    </div>
                                    <div className="bg-slate-900/50 rounded-lg p-4">
                                        <div className="text-white font-medium mb-2">"Are you paying for agents to do repetitive tasks?"</div>
                                        <div className="text-slate-400 text-sm">
                                            Introduce AI agents that can handle password resets, order status, and FAQs - freeing your team for complex issues
                                        </div>
                                    </div>
                                    <div className="bg-slate-900/50 rounded-lg p-4">
                                        <div className="text-white font-medium mb-2">"What's your current contact center costing you?"</div>
                                        <div className="text-slate-400 text-sm">
                                            Lead with ROI calculator showing 60-80% cost reduction with pay-as-you-go pricing
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                                <h3 className="text-orange-400 font-semibold mb-4 text-lg">Demo Script - "Talk to Nova"</h3>
                                <div className="space-y-3 text-slate-300">
                                    <p><strong>Setup:</strong> "Let me show you a real AI agent powered by Amazon Bedrock and Amazon Connect..."</p>
                                    <p><strong>Demo:</strong> Navigate to CloudInteract's Talk to Nova demo on homepage</p>
                                    <p><strong>Highlight:</strong> Point out natural conversation, context awareness, and seamless handoff capabilities</p>
                                    <p><strong>Close:</strong> "This is just the beginning - imagine this handling your most common customer inquiries 24/7"</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Existing Account Expansion */}
                    <section className="mb-12">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="p-2 bg-green-600/20 rounded-lg">
                                <TrendingUp size={24} className="text-green-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Existing Account Expansion</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                                <div className="text-green-400 font-semibold mb-3">Cross-Sell AI Agents</div>
                                <p className="text-slate-300 text-sm mb-4">
                                    If they're already using Amazon Connect, introduce AI agents to automate routine tasks
                                </p>
                                <div className="text-xs text-slate-500">Typical uplift: 30-40%</div>
                            </div>

                            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                                <div className="text-green-400 font-semibold mb-3">Expand to New Channels</div>
                                <p className="text-slate-300 text-sm mb-4">
                                    Add chat, SMS, or social media channels to existing voice deployments
                                </p>
                                <div className="text-xs text-slate-500">Typical uplift: 20-30%</div>
                            </div>

                            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                                <div className="text-green-400 font-semibold mb-3">Add Advanced Analytics</div>
                                <p className="text-slate-300 text-sm mb-4">
                                    Integrate Contact Lens for real-time sentiment and conversation analytics
                                </p>
                                <div className="text-xs text-slate-500">Typical uplift: 15-25%</div>
                            </div>
                        </div>
                    </section>

                    {/* Objection Handling */}
                    <section className="mb-12">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="p-2 bg-red-600/20 rounded-lg">
                                <Lightbulb size={24} className="text-red-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Objection Handling</h2>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                                <div className="font-semibold text-white mb-2">
                                    "We're locked into a long-term contract with [competitor]"
                                </div>
                                <div className="text-slate-300 text-sm">
                                    <strong className="text-orange-400">Response:</strong> "I understand. Many of our customers ran hybrid during their transition period - starting with a pilot for new use cases or overflow, then migrating fully when their contract is up. This approach actually de-risks the migration and builds confidence."
                                </div>
                            </div>

                            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                                <div className="font-semibold text-white mb-2">
                                    "We've tried AI chatbots before and they didn't work"
                                </div>
                                <div className="text-slate-300 text-sm">
                                    <strong className="text-orange-400">Response:</strong> "That's a common experience with rules-based bots. Amazon Bedrock uses foundation models that understand context and intent - not just keywords. Let me show you a live demo so you can see the difference yourself."
                                </div>
                            </div>

                            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                                <div className="font-semibold text-white mb-2">
                                    "Our industry is too complex for AI"
                                </div>
                                <div className="text-slate-300 text-sm">
                                    <strong className="text-orange-400">Response:</strong> "We hear that a lot in [healthcare/finance/etc]. The beauty of Amazon Bedrock is that it learns from YOUR data and YOUR workflows. We've seen success in highly regulated industries like healthcare and financial services - in fact, those are some of our strongest use cases."
                                </div>
                            </div>

                            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                                <div className="font-semibold text-white mb-2">
                                    "What about data security and compliance?"
                                </div>
                                <div className="text-slate-300 text-sm">
                                    <strong className="text-orange-400">Response:</strong> "Amazon Connect is HIPAA eligible, PCI DSS compliant, and meets SOC, ISO, and FedRAMP requirements. Your data never leaves your AWS environment, and we have customers in heavily regulated industries. Security is built-in, not bolted on."
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Success Metrics */}
                    <section>
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="p-2 bg-yellow-600/20 rounded-lg">
                                <Award size={24} className="text-yellow-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Success Stories & Metrics</h2>
                        </div>

                        <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/10 border border-yellow-600/30 rounded-xl p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-yellow-400 mb-2">80%</div>
                                    <div className="text-slate-300 text-sm">Cost Reduction</div>
                                    <div className="text-slate-500 text-xs mt-1">vs. legacy systems</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-yellow-400 mb-2">70%</div>
                                    <div className="text-slate-300 text-sm">Automation Rate</div>
                                    <div className="text-slate-500 text-xs mt-1">with AI agents</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-yellow-400 mb-2">35%</div>
                                    <div className="text-slate-300 text-sm">CSAT Increase</div>
                                    <div className="text-slate-500 text-xs mt-1">customer satisfaction</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                                    <div className="text-slate-300 text-sm">Availability</div>
                                    <div className="text-slate-500 text-xs mt-1">no downtime</div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-yellow-600/30">
                                <div className="text-white font-semibold mb-3">Notable Customer Wins:</div>
                                <ul className="space-y-2 text-slate-300 text-sm">
                                    <li>• <strong>Healthcare Provider:</strong> Reduced wait times by 60% with AI triage</li>
                                    <li>• <strong>E-commerce Retailer:</strong> Handled 3x Black Friday volume without adding agents</li>
                                    <li>• <strong>Financial Services:</strong> Automated 75% of account inquiries while maintaining compliance</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
