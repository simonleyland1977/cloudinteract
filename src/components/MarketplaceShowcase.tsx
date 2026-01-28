"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { marketplaceOffers } from "@/lib/marketplace";
import { MarketplaceCard } from "@/components/MarketplaceCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function MarketplaceShowcase() {
    const [width, setWidth] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (carouselRef.current) {
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
    }, []);

    return (
        <section className="py-24 bg-slate-950 border-t border-slate-900 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-white mb-4"
                        >
                            Available on <span className="text-[#F90]">AWS Marketplace</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-lg text-slate-400 max-w-2xl"
                        >
                            Accelerate functionality with our pre-packaged, AWS-validated solutions.
                            Deploy directly through your AWS bill.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            href="/marketplace"
                            className="inline-flex items-center text-[#F90] font-semibold hover:text-amber-400 transition-colors"
                        >
                            View All Offers
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </motion.div>
                </div>

                {/* Carousel Container */}
                <motion.div
                    ref={carouselRef}
                    className="cursor-grab active:cursor-grabbing overflow-hidden"
                    whileTap={{ cursor: "grabbing" }}
                >
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className="flex gap-6 pb-8"
                    >
                        {marketplaceOffers.map((offer) => (
                            <div key={offer.id} className="min-w-[350px] md:min-w-[400px]">
                                <MarketplaceCard offer={offer} />
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator (Mobile only mostly) */}
                <div className="flex justify-center mt-4 md:hidden">
                    <div className="text-sm text-slate-500 flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 rotate-180" />
                        Swipe to explore
                        <ArrowRight className="h-4 w-4" />
                    </div>
                </div>
            </div>
        </section>
    );
}
