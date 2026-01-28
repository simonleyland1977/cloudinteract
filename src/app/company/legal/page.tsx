import { MarketingHeader } from "@/components/MarketingHeader";
import { MarketingFooter } from "@/components/MarketingFooter";
import { Building2, FileText, MapPin } from "lucide-react";

export const metadata = {
    title: 'Company Legal Details | CloudInteract',
    description: 'Legal information for CloudInteract Limited.',
};

export default function LegalPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-950 text-slate-50">
            <MarketingHeader />

            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-12">
                        Company Legal Details
                    </h1>

                    <div className="bg-slate-900/50 rounded-2xl border border-slate-800 p-8 space-y-8">

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-blue-500/10 rounded-lg">
                                <Building2 className="w-6 h-6 text-blue-400" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">Company Name</h3>
                                <p className="text-slate-400">CLOUDINTERACT LIMITED</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-purple-500/10 rounded-lg">
                                <MapPin className="w-6 h-6 text-purple-400" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">Registered Office</h3>
                                <address className="text-slate-400 not-italic">
                                    4 Parkside Court<br />
                                    Greenhough Road<br />
                                    Lichfield WS13 7AU<br />
                                    United Kingdom
                                </address>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-orange-500/10 rounded-lg">
                                <FileText className="w-6 h-6 text-orange-400" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">Registration Details</h3>
                                <p className="text-slate-400 mb-2">Registration No: 14001712</p>
                                <p className="text-slate-400">VAT No: 407116332</p>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <MarketingFooter />
        </div>
    );
}
