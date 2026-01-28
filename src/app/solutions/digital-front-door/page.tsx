import { MarketingHeader } from "@/components/MarketingHeader";
import { MarketingFooter } from "@/components/MarketingFooter";
import { ArrowRight, Bot, BarChart3, ShieldCheck, Clock, CheckCircle2, Server, Users } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: 'Digital Front Door | CloudInteract',
    description: 'Transform your contact center with simple, scalable, and secure AI agents powered by Amazon Connect and AWS Bedrock.',
};

export default function DigitalFrontDoorPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-950 text-slate-50">
            <MarketingHeader />

            <main className="flex-grow">
                {/* 1. Hero Section */}
                <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950" />
                    <div className="container mx-auto max-w-6xl relative z-10 text-center">
                        <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 mb-8 backdrop-blur-md">
                            <Bot className="mr-2 h-4 w-4" />
                            AI-First Contact Center Solutions
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8">
                            From Call Queues to <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400">
                                Instant Resolution
                            </span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                            Stop forcing customers to wait. Resolve 40% of inquiries instantly with Amazon Connect and AWS Bedrock.
                            Reduce costs, empower your human agents, and deliver the zero-wait experience your customers demand.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-blue-600 font-semibold text-white transition-all hover:bg-blue-500 hover:scale-105"
                            >
                                Book a Demo
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                            <Link
                                href="#roi-calculator"
                                className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-slate-800 border border-slate-700 font-semibold text-white transition-all hover:bg-slate-700"
                            >
                                Calculate ROI
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 2. Social Proof / Case Study */}
                <section className="py-24 bg-slate-900/50 border-y border-slate-800">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">Case Study: Healthcare</h3>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                    Scaling Compassion at 15,000 Calls/Month
                                </h2>
                                <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                                    A leading regional healthcare provider was drowning in 15,000 monthly calls. Patients faced 8-minute wait times just to schedule appointments, leading to frustration and high agent burnout.
                                </p>
                                <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                                    By deploying CloudInteract's Digital Front Door on Amazon Connect, they transformed their patient access model without compromising HIPAA compliance.
                                </p>
                                <blockquote className="border-l-4 border-blue-500 pl-6 italic text-slate-300 mb-8">
                                    "We worried AI would feel impersonal. Instead, it solved the routine tasks so our team could focus on complex care coordination. It didn't replace our agents; it unleashed them."
                                    <footer className="text-sm text-slate-500 mt-2 not-italic font-semibold">— VP of Operations</footer>
                                </blockquote>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                                    <div className="text-4xl font-bold text-green-400 mb-2">65%</div>
                                    <div className="text-slate-400 text-sm">Routine Inquiries<br />Resolved Instantly</div>
                                </div>
                                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                                    <div className="text-4xl font-bold text-blue-400 mb-2">90s</div>
                                    <div className="text-slate-400 text-sm">Avg Wait Time<br />(from 8 minutes)</div>
                                </div>
                                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 sm:col-span-2">
                                    <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                                    <div className="text-slate-400 text-sm">Availability for Scheduling & FAQs</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Competitive Differentiation */}
                <section className="py-24 bg-slate-950">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Amazon Connect Agents Outperform Legacy IVR</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto">Move beyond rigid menu trees ("Press 1 for Sales") to natural, intelligent conversations.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Natural Conversation",
                                    legacy: "Rigid 'Press 1' menus that frustrate users.",
                                    modern: "Natural Language Understanding (NLU) allows customers to speak freely.",
                                    icon: <Bot className="w-8 h-8 text-blue-400" />
                                },
                                {
                                    title: "Context Retention",
                                    legacy: "Repeat information at every transfer.",
                                    modern: "Context follows the customer from AI to human agent seamlessly.",
                                    icon: <Server className="w-8 h-8 text-purple-400" />
                                },
                                {
                                    title: "Continuous Learning",
                                    legacy: "Static scripts updated once a year.",
                                    modern: "Self-improving models that get smarter with every interaction.",
                                    icon: <BarChart3 className="w-8 h-8 text-orange-400" />
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
                                    <div className="mb-6">{item.icon}</div>
                                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                                    <div className="space-y-4">
                                        <div className="flex gap-3">
                                            <div className="text-red-400 text-xs font-bold uppercase mt-1">Old</div>
                                            <p className="text-sm text-slate-500">{item.legacy}</p>
                                        </div>
                                        <div className="flex gap-3">
                                            <div className="text-green-400 text-xs font-bold uppercase mt-1">New</div>
                                            <p className="text-sm text-slate-300">{item.modern}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Technical Overview */}
                <section className="py-24 bg-slate-900 border-y border-slate-800">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1 relative">
                                {/* Diagram representation */}
                                <div className="aspect-video bg-slate-950 rounded-2xl border border-slate-800 p-8 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-grid-slate-800/20" />
                                    <div className="relative z-10 flex flex-col justify-between h-full">
                                        <div className="flex justify-between items-center">
                                            <div className="p-4 bg-blue-900/30 border border-blue-500/30 rounded-lg text-blue-300 text-sm font-mono">Customer Call</div>
                                            <ArrowRight className="text-slate-600" />
                                            <div className="p-4 bg-orange-900/30 border border-orange-500/30 rounded-lg text-orange-300 text-sm font-mono">Amazon Connect</div>
                                        </div>
                                        <div className="flex justify-center my-4">
                                            <div className="h-12 w-0.5 bg-slate-700"></div>
                                        </div>
                                        <div className="p-6 bg-purple-900/20 border border-purple-500/30 rounded-lg text-center">
                                            <div className="text-purple-300 font-bold mb-2">AWS Bedrock & Knowledge Base</div>
                                            <div className="text-xs text-purple-400">RAG (Retrieval Augmented Generation) on CRM & Policies</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Engine: <br />AWS Bedrock + Connect</h2>
                                <p className="text-lg text-slate-400 mb-6">
                                    Built for the technical buyer who demands security and scalability. Our solution leverages Amazon Connect's native integration with AWS Bedrock foundation models.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Seamlessly accesses Knowledge Bases (RAG) for accurate answers.",
                                        "Real-time sentiment analysis to detect frustration.",
                                        "Intelligent routing: Escalate to humans with full context.",
                                        "Serverless architecture: Auto-scales to meet demand spikes."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                            <span className="text-slate-300">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. ROI Context */}
                <section id="roi-calculator" className="py-24 bg-slate-950">
                    <div className="container mx-auto px-6 max-w-4xl text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Economics of AI Agents</h2>
                        <p className="text-xl text-slate-400 mb-12">
                            Understanding the potential savings isn't just about cutting costs—it's about reallocating resources to high-value interactions.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 text-left mb-12">
                            <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
                                <div className="text-sm text-slate-500 mb-2">Cost Per Contact</div>
                                <div className="flex items-end gap-2 mb-2">
                                    <span className="text-3xl font-bold text-white">$6-8</span>
                                    <span className="text-sm text-red-400">Human</span>
                                </div>
                                <div className="flex items-end gap-2">
                                    <span className="text-3xl font-bold text-green-400">$1</span>
                                    <span className="text-sm text-green-400">AI Agent</span>
                                </div>
                            </div>
                            <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
                                <div className="text-sm text-slate-500 mb-2">Deflection Rate</div>
                                <div className="text-3xl font-bold text-blue-400 mb-2">40-75%</div>
                                <p className="text-xs text-slate-400">Of routine inquiries can be fully resolved without human intervention.</p>
                            </div>
                            <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
                                <div className="text-sm text-slate-500 mb-2">Handle Time</div>
                                <div className="text-3xl font-bold text-purple-400 mb-2">-25%</div>
                                <p className="text-xs text-slate-400">Reduction in human handle time due to better context and pre-collection.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Implementation Journey */}
                <section className="py-24 bg-slate-900/50 border-t border-slate-800">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Your Journey to an AI-First Center</h2>
                            <p className="text-slate-400">We don't "rip and replace." We iterate.</p>
                        </div>

                        <div className="relative">
                            {/* Central Line */}
                            <div className="absolute left-[28px] md:left-1/2 top-4 bottom-12 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent md:-ml-px opacity-30"></div>

                            {[
                                { title: "Assessment", time: "Weeks 1-3", desc: "We identify high-volume, low-complexity intents suitable for automation.", icon: <BarChart3 className="w-5 h-5 text-blue-400" /> },
                                { title: "Sandbox & Build", time: "Weeks 4-7", desc: "Developing the flows and connecting to your knowledge base in a secure environment.", icon: <Server className="w-5 h-5 text-purple-400" /> },
                                { title: "Pilot Launch", time: "Weeks 8-10", desc: "Live traffic on limited lines. Collecting real data and tuning the NLU models.", icon: <CheckCircle2 className="w-5 h-5 text-green-400" /> },
                                { title: "Full Scale", time: "Week 12+", desc: "Gradual rollout to 100% of traffic with continuous optimization.", icon: <ShieldCheck className="w-5 h-5 text-orange-400" /> }
                            ].map((step, i) => (
                                <div
                                    key={i}
                                    className={`relative flex items-start mb-16 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Empty Half for Desktop Layout */}
                                    <div className="hidden md:block flex-1"></div>

                                    {/* Central Icon */}
                                    <div className="absolute left-0 md:left-1/2 -ml-[1px] md:-ml-[20px] w-14 h-14 md:w-10 md:h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center z-10 shadow-xl shadow-blue-900/10">
                                        {step.icon}
                                    </div>

                                    {/* Content Card */}
                                    <div className={`flex-1 pl-20 md:pl-0 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                        <div className={`p-6 bg-slate-950 rounded-2xl border border-slate-800 hover:border-slate-600 transition-all duration-300 relative group ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                            {/* Connector Line (Mobile) */}
                                            <div className="md:hidden absolute left-[-32px] top-7 w-8 h-px bg-slate-700"></div>

                                            <div className={`text-xs font-bold uppercase tracking-wider mb-2 text-transparent bg-clip-text bg-gradient-to-r ${i % 2 === 0 ? 'from-blue-400 to-blue-200' : 'from-purple-400 to-purple-200'}`}>
                                                {step.time}
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{step.title}</h3>
                                            <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 7. Human Element */}
                <section className="py-24 bg-slate-950">
                    <div className="container mx-auto px-6 max-w-4xl text-center">
                        <div className="inline-flex items-center justify-center p-3 bg-purple-500/10 rounded-full mb-6">
                            <Users className="w-8 h-8 text-purple-400" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Empowering, Not Replacing</h2>
                        <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                            "AI Agents" doesn't mean "No Humans." It means "Better Humans."
                        </p>
                        <p className="text-lg text-slate-500 max-w-3xl mx-auto">
                            When AI handles the "Where is my order?" calls, your agents stop burning out on repetition.
                            They transition to high-value roles: handling sensitive escalations, training the AI models,
                            and providing the white-glove service that builds brand loyalty.
                        </p>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 bg-gradient-to-br from-blue-900 to-slate-900 border-t border-slate-800 text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to modernize your contact center?</h2>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-white text-slate-900 font-bold text-lg transition-all hover:bg-blue-50 hover:scale-105"
                        >
                            Start Your Assessment
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </section>
            </main>

            <MarketingFooter />
        </div>
    );
}
