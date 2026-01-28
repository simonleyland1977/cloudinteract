import { MarketingHeader } from "@/components/MarketingHeader";
import { MarketingFooter } from "@/components/MarketingFooter";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: 'Careers | CloudInteract',
    description: 'Join the team building the future of customer experience.',
};

export default function CareersPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-950 text-slate-50">
            <MarketingHeader />

            <main className="flex-grow pt-32 pb-20 px-6 flex items-center justify-center">
                <div className="container mx-auto max-w-4xl text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-full mb-8">
                        <Sparkles className="w-8 h-8 text-blue-400" />
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8">
                        Join Our Team
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12">
                        We're always looking for talented individuals who are passionate about AI, customer experience, and cloud technology.
                    </p>

                    <div className="bg-slate-900/50 rounded-2xl border border-slate-800 p-12 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-4">No open roles right now?</h3>
                        <p className="text-slate-400 mb-8">
                            We are growing fast. Send us your CV and tell us why you'd be a great fit for CloudInteract.
                        </p>

                        <a
                            href="mailto:careers@cloudinteract.io"
                            className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-blue-600 font-bold text-white transition-all hover:bg-blue-500 hover:scale-105"
                        >
                            Email Your CV
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                    </div>
                </div>
            </main>

            <MarketingFooter />
        </div>
    );
}
