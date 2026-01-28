import { MarketingHeader } from "@/components/MarketingHeader";
import { MarketingFooter } from "@/components/MarketingFooter";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const metadata = {
    title: 'Contact Us | CloudInteract',
    description: 'Get in touch with CloudInteract to transform your contact center with AI-powered solutions.',
};

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-950 text-slate-50">
            <MarketingHeader />

            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
                            Let's Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400">Contact Center</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            Ready to deploy AI agents or migrate to Amazon Connect? Our team is here to help you every step of the way.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
                                <p className="text-slate-400 mb-8">
                                    Whether you're looking to migrate from legacy systems, deploy AI agents, or explore our AWS Marketplace offers, we're here to help.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-500/10 rounded-lg">
                                        <Mail className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                                        <a href="mailto:hello@cloudinteract.io" className="text-slate-400 hover:text-blue-400 transition-colors">
                                            hello@cloudinteract.io
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-purple-500/10 rounded-lg">
                                        <Phone className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-1">Schedule a Call</h3>
                                        <p className="text-slate-400">
                                            Book a 30-minute discovery call to discuss your needs
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-orange-500/10 rounded-lg">
                                        <MapPin className="w-6 h-6 text-orange-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-1">Locations</h3>
                                        <p className="text-slate-400">
                                            UK: Lichfield, Staffordshire<br />
                                            US: North America
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-slate-800 rounded-2xl p-6">
                                <h3 className="text-lg font-bold text-white mb-2">AWS Marketplace</h3>
                                <p className="text-slate-400 text-sm mb-4">
                                    Browse our offers and get started with pre-configured solutions.
                                </p>
                                <a
                                    href="/marketplace"
                                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm"
                                >
                                    View Marketplace Offers →
                                </a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-slate-900/50 rounded-2xl border border-slate-800 p-8">
                            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-2">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="john@company.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Your Company"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="interest" className="block text-sm font-medium text-slate-300 mb-2">
                                        I'm interested in
                                    </label>
                                    <select
                                        id="interest"
                                        name="interest"
                                        className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="">Select an option</option>
                                        <option value="migration">Migration and Integration</option>
                                        <option value="ai-agents">Deploy AI Agents</option>
                                        <option value="marketplace">AWS Marketplace Offers</option>
                                        <option value="consultation">General Consultation</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                        placeholder="Tell us about your contact center needs..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full inline-flex items-center justify-center h-12 px-6 rounded-lg bg-blue-600 font-semibold text-white transition-all hover:bg-blue-500 hover:scale-105"
                                >
                                    Send Message
                                    <Send className="ml-2 h-4 w-4" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            <MarketingFooter />
        </div>
    );
}
