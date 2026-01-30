'use client';

import { Check, X, Minus } from 'lucide-react';

interface ComparisonFeature {
    feature: string;
    legacy: boolean | string;
    diy: boolean | string;
    managed: boolean | string;
}

const features: ComparisonFeature[] = [
    {
        feature: 'Setup Complexity',
        legacy: 'High - 6+ months',
        diy: 'High - 3-6 months',
        managed: 'Low - 30 days',
    },
    {
        feature: 'AWS Expertise Required',
        legacy: false,
        diy: 'Yes - Extensive',
        managed: false,
    },
    {
        feature: 'Upfront Capital Investment',
        legacy: 'High - Hardware costs',
        diy: 'Low - Cloud only',
        managed: 'Low - Cloud only',
    },
    {
        feature: 'Monthly Cost Model',
        legacy: 'Per-seat licensing',
        diy: 'Consumption-based',
        managed: 'Consumption + flat fee',
    },
    {
        feature: 'Billing Management',
        legacy: 'Multiple vendors',
        diy: 'Complex AWS billing',
        managed: 'Single invoice',
    },
    {
        feature: 'AI Capabilities',
        legacy: false,
        diy: true,
        managed: true,
    },
    {
        feature: 'Generative AI Integration',
        legacy: false,
        diy: 'Complex setup',
        managed: 'Built-in',
    },
    {
        feature: 'Scalability',
        legacy: 'Hardware limited',
        diy: 'Unlimited',
        managed: 'Unlimited',
    },
    {
        feature: 'Support Level',
        legacy: 'Vendor dependent',
        diy: 'AWS support only',
        managed: '24/7 dedicated team',
    },
    {
        feature: 'Ongoing Maintenance',
        legacy: 'Your responsibility',
        diy: 'Your responsibility',
        managed: 'Fully managed',
    },
    {
        feature: 'Upgrades & Updates',
        legacy: 'Manual, costly',
        diy: 'Manual configuration',
        managed: 'Automatic',
    },
    {
        feature: 'Monitoring & Optimization',
        legacy: 'Your responsibility',
        diy: 'Your responsibility',
        managed: 'Included',
    },
];

export function ServiceComparisonTable() {
    const renderCell = (value: boolean | string) => {
        if (typeof value === 'boolean') {
            return value ? (
                <Check className="w-5 h-5 text-green-400 mx-auto" />
            ) : (
                <X className="w-5 h-5 text-red-400 mx-auto" />
            );
        }
        return <span className="text-sm text-slate-300">{value}</span>;
    };

    return (
        <div className="w-full max-w-6xl mx-auto">
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    How We Compare
                </h2>
                <p className="text-xl text-slate-300">
                    See why CloudInteract Managed is the smart choice
                </p>
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-700">
                <table className="w-full">
                    <thead>
                        <tr className="bg-gradient-to-r from-slate-900 to-slate-800">
                            <th className="text-left p-4 text-slate-300 font-semibold">Feature</th>
                            <th className="text-center p-4">
                                <div className="text-slate-400 font-semibold">Legacy Systems</div>
                                <div className="text-xs text-slate-500 mt-1">Avaya, Cisco, Mitel</div>
                            </th>
                            <th className="text-center p-4">
                                <div className="text-slate-400 font-semibold">DIY Amazon Connect</div>
                                <div className="text-xs text-slate-500 mt-1">Self-managed</div>
                            </th>
                            <th className="text-center p-4 bg-gradient-to-r from-purple-600/20 to-indigo-600/20">
                                <div className="text-white font-bold">CloudInteract Managed</div>
                                <div className="text-xs text-purple-300 mt-1">Recommended</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {features.map((item, index) => (
                            <tr
                                key={index}
                                className={`${index % 2 === 0 ? 'bg-slate-900/50' : 'bg-slate-800/50'
                                    } border-t border-slate-700 hover:bg-slate-800/70 transition-colors`}
                            >
                                <td className="p-4 text-slate-200 font-medium">{item.feature}</td>
                                <td className="p-4 text-center">{renderCell(item.legacy)}</td>
                                <td className="p-4 text-center">{renderCell(item.diy)}</td>
                                <td className="p-4 text-center bg-gradient-to-r from-purple-900/10 to-indigo-900/10">
                                    {renderCell(item.managed)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-6">
                {features.map((item, index) => (
                    <div
                        key={index}
                        className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border border-slate-700 p-4"
                    >
                        <div className="font-semibold text-white mb-4 pb-3 border-b border-slate-700">
                            {item.feature}
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-slate-400">Legacy</span>
                                <div className="flex items-center">{renderCell(item.legacy)}</div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-slate-400">DIY Connect</span>
                                <div className="flex items-center">{renderCell(item.diy)}</div>
                            </div>
                            <div className="flex justify-between items-center bg-purple-900/20 rounded-lg p-2 border border-purple-500/30">
                                <span className="text-sm font-semibold text-purple-300">Managed</span>
                                <div className="flex items-center">{renderCell(item.managed)}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Winner Badge */}
            <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full">
                    <span className="text-2xl">🏆</span>
                    <span className="text-white font-semibold">CloudInteract Managed wins on all key metrics</span>
                </div>
            </div>
        </div>
    );
}
