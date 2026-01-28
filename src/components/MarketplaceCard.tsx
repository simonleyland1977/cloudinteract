import Link from 'next/link';
import { MarketplaceOffer } from '@/lib/marketplace';
import { ArrowRight, ExternalLink, BadgeCheck } from 'lucide-react';

interface MarketplaceCardProps {
    offer: MarketplaceOffer;
}

export function MarketplaceCard({ offer }: MarketplaceCardProps) {
    return (
        <article className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-[#F90]/50 hover:bg-white/10">
            <div>
                <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full bg-[#F90]/10 px-3 py-1 text-xs font-semibold text-[#F90]">
                        {offer.category}
                    </span>
                    <BadgeCheck className="h-5 w-5 text-[#F90]" />
                </div>

                <h3 className="mb-3 text-xl font-bold text-white group-hover:text-[#F90] transition-colors">
                    <Link href={offer.href} target="_blank" rel="noopener noreferrer" className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        {offer.title}
                    </Link>
                </h3>

                <p className="mb-6 text-slate-400 line-clamp-3">
                    {offer.description}
                </p>
            </div>

            <div className="flex items-center text-sm font-medium text-[#F90] group-hover:text-amber-400">
                View on AWS Marketplace
                <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
        </article>
    );
}
