import { MarketingHeader } from "@/components/MarketingHeader";
import { MarketingFooter } from "@/components/MarketingFooter";
import { MarketplaceCard } from "@/components/MarketplaceCard";
import { marketplaceOffers } from "@/lib/marketplace";

export const metadata = {
    title: 'AWS Marketplace Offers | CloudInteract',
    description: 'Explore our AWS-validated solutions and services available directly through AWS Marketplace.',
};

export default function MarketplacePage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-950">
            <MarketingHeader />
            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                            AWS <span className="text-[#F90]">Marketplace</span> Offers
                        </h1>
                        <p className="text-xl text-slate-400">
                            Partnered solutions available directly through your AWS bill.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {marketplaceOffers.map((offer) => (
                            <MarketplaceCard key={offer.id} offer={offer} />
                        ))}
                    </div>

                </div>
            </main>
            <MarketingFooter />
        </div>
    );
}
