'use client';

import { useState, useEffect } from 'react';
import { Calculator, TrendingDown, Zap, Sparkles } from 'lucide-react';

interface CalculatorInputs {
    agents: number;
    monthlyMinutes: number;
    chatMessages: number;
    smsMessages: number;
}

interface CostBreakdown {
    quickStart: number;
    monthlyAssurance: number;
    voiceCosts: number;
    chatCosts: number;
    smsCosts: number;
    monthlyTotal: number;
}

interface PricingCalculatorProps {
    region?: 'UK' | 'US';
}

export function PricingCalculator({ region = 'US' }: PricingCalculatorProps) {
    const isUK = region === 'UK';
    const currency = isUK ? 'GBP' : 'USD';
    const rate = isUK ? 0.8 : 1; // Approximate conversion for GBP

    const [inputs, setInputs] = useState<CalculatorInputs>({
        agents: 50,
        monthlyMinutes: 50000,
        chatMessages: 10000,
        smsMessages: 2000,
    });

    const [costs, setCosts] = useState<CostBreakdown>({
        quickStart: 0,
        monthlyAssurance: 0,
        voiceCosts: 0,
        chatCosts: 0,
        smsCosts: 0,
        monthlyTotal: 0,
    });

    const calculateCosts = (inputs: CalculatorInputs): CostBreakdown => {
        // Quick start: sliding scale $20k (20 agents) to $100k (100 agents)
        // Converted to GBP if UK
        const baseQuickStart = 20000 + ((inputs.agents - 20) / 80) * 80000;
        const quickStart = baseQuickStart * rate;

        // Monthly assurance: $1k-$2k based on agent count
        const baseMonthlyAssurance = inputs.agents <= 50 ? 1000 : 2000;
        const monthlyAssurance = baseMonthlyAssurance * rate;

        // Voice: $0.018 service + $0.03/day DID + $0.0022/min telephony
        const baseVoiceCosts = (inputs.monthlyMinutes * 0.018) +
            (30 * 0.03) +
            (inputs.monthlyMinutes * 0.0022);
        const voiceCosts = baseVoiceCosts * rate;

        // Chat: $0.004/message
        const chatCosts = (inputs.chatMessages * 0.004) * rate;

        // SMS: $0.01/message + $0.00883 carrier fee
        const smsCosts = (inputs.smsMessages * (0.01 + 0.00883)) * rate;

        const monthlyTotal = monthlyAssurance + voiceCosts + chatCosts + smsCosts;

        return { quickStart, monthlyAssurance, voiceCosts, chatCosts, smsCosts, monthlyTotal };
    };

    const calculateLegacyCost = (inputs: CalculatorInputs): number => {
        // Legacy Cost = Agents * $125
        const baseLegacy = inputs.agents * 125;

        // ADDED: Standard Amazon Connect would usually charge extra for AI
        // Contact Lens ($0.015/min) + Generative AI ($0.004/req)
        // We estimate "AI Value" at approx $0.015 per minute of logic
        const aiValue = inputs.monthlyMinutes * 0.015;

        // Legacy systems often charge huge add-ons for "Advanced Analytics/AI", 
        // effectively making the "Apples to Apples" comparison value much higher.
        // We add this AI Value to the "Legacy/Standard" cost to show what they WOULD pay elsewhere.
        return (baseLegacy + aiValue) * rate;
    };

    // Calculate AI Value to display as "Included"
    const aiIncludedValue = (inputs.monthlyMinutes * 0.015) * rate;

    useEffect(() => {
        setCosts(calculateCosts(inputs));
    }, [inputs, region]); // Recalculate when region changes

    const legacyCost = calculateLegacyCost(inputs);
    const monthlySavings = legacyCost - costs.monthlyTotal;
    const annualSavings = monthlySavings * 12;
    const savingsPercentage = ((monthlySavings / legacyCost) * 100).toFixed(0);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat(isUK ? 'en-GB' : 'en-US', {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <div className="w-full max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl border border-slate-700 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <Calculator className="w-6 h-6 text-white" />
                        <h3 className="text-2xl font-bold text-white">Interactive Pricing Calculator</h3>
                    </div>
                    <p className="text-purple-100">
                        Customize your contact center needs and see real-time pricing ({region})
                    </p>
                </div>

                <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Left Column - Inputs */}
                        <div className="space-y-6">
                            <h4 className="text-xl font-semibold text-white mb-4">Your Requirements</h4>

                            {/* Agents */}
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm font-medium text-slate-300">Number of Agents</label>
                                    <span className="text-lg font-bold text-purple-400">{inputs.agents}</span>
                                </div>
                                <input
                                    type="range"
                                    min="20"
                                    max="100"
                                    value={inputs.agents}
                                    onChange={(e) => setInputs({ ...inputs, agents: parseInt(e.target.value) })}
                                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
                                />
                                <div className="flex justify-between text-xs text-slate-500 mt-1">
                                    <span>20</span>
                                    <span>100</span>
                                </div>
                            </div>

                            {/* Monthly Minutes */}
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm font-medium text-slate-300">Monthly Call Minutes</label>
                                    <span className="text-lg font-bold text-purple-400">{inputs.monthlyMinutes.toLocaleString()}</span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="500000"
                                    step="5000"
                                    value={inputs.monthlyMinutes}
                                    onChange={(e) => setInputs({ ...inputs, monthlyMinutes: parseInt(e.target.value) })}
                                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
                                />
                                <div className="flex justify-between text-xs text-slate-500 mt-1">
                                    <span>0</span>
                                    <span>500k</span>
                                </div>
                            </div>

                            {/* Chat Messages */}
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm font-medium text-slate-300">Monthly Chat Messages</label>
                                    <span className="text-lg font-bold text-purple-400">{inputs.chatMessages.toLocaleString()}</span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="100000"
                                    step="1000"
                                    value={inputs.chatMessages}
                                    onChange={(e) => setInputs({ ...inputs, chatMessages: parseInt(e.target.value) })}
                                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
                                />
                                <div className="flex justify-between text-xs text-slate-500 mt-1">
                                    <span>0</span>
                                    <span>100k</span>
                                </div>
                            </div>

                            {/* SMS Messages */}
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm font-medium text-slate-300">Monthly SMS Messages</label>
                                    <span className="text-lg font-bold text-purple-400">{inputs.smsMessages.toLocaleString()}</span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="50000"
                                    step="500"
                                    value={inputs.smsMessages}
                                    onChange={(e) => setInputs({ ...inputs, smsMessages: parseInt(e.target.value) })}
                                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
                                />
                                <div className="flex justify-between text-xs text-slate-500 mt-1">
                                    <span>0</span>
                                    <span>50k</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Results */}
                        <div className="space-y-6">
                            <h4 className="text-xl font-semibold text-white mb-4">Your Investment ({currency})</h4>

                            {/* Quick Start */}
                            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm text-slate-400">One-Time Quick Start</span>
                                    <Zap className="w-4 h-4 text-yellow-500" />
                                </div>
                                <div className="text-3xl font-bold text-white">{formatCurrency(costs.quickStart)}</div>
                                <p className="text-xs text-slate-500 mt-1">Includes migration, setup, training & go-live</p>
                            </div>

                            {/* Monthly Breakdown */}
                            <div className="space-y-3">
                                <div className="flex justify-between items-center py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Monthly Assurance</span>
                                    <span className="font-semibold text-white">{formatCurrency(costs.monthlyAssurance)}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-slate-700">
                                    <div className="flex flex-col">
                                        <span className="text-pink-400 font-medium flex items-center gap-2">
                                            <Sparkles className="w-3 h-3" />
                                            Unlimited AI & Analytics
                                        </span>
                                        <span className="text-xs text-slate-500">Normal value: {formatCurrency(aiIncludedValue)}</span>
                                    </div>
                                    <span className="font-bold text-green-400">INCLUDED ($0.00)</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Voice Usage</span>
                                    <span className="font-semibold text-white">{formatCurrency(costs.voiceCosts)}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Chat Messages</span>
                                    <span className="font-semibold text-white">{formatCurrency(costs.chatCosts)}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-slate-700">
                                    <span className="text-slate-300">SMS Messages</span>
                                    <span className="font-semibold text-white">{formatCurrency(costs.smsCosts)}</span>
                                </div>
                            </div>

                            {/* Total */}
                            <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-lg p-4 border border-purple-500/30">
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-300">Monthly Total</span>
                                    <div className="text-right">
                                        <div className="text-3xl font-bold text-white">{formatCurrency(costs.monthlyTotal)}</div>
                                        <div className="text-sm text-purple-300">+ one-time quick start</div>
                                    </div>
                                </div>
                            </div>

                            {/* Savings Comparison */}
                            {monthlySavings > 0 && (
                                <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/30">
                                    <div className="flex items-center gap-2 mb-2">
                                        <TrendingDown className="w-5 h-5 text-green-400" />
                                        <span className="text-sm font-semibold text-green-400">vs. Standard Contact Center</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <div className="text-xs text-slate-400">Monthly Savings</div>
                                            <div className="text-xl font-bold text-green-400">{formatCurrency(monthlySavings)}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-slate-400">Annual Savings</div>
                                            <div className="text-xl font-bold text-green-400">{formatCurrency(annualSavings)}</div>
                                        </div>
                                    </div>
                                    <div className="mt-2 text-sm text-green-300">
                                        Save up to {savingsPercentage}% by including Unlimited AI
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-8 pt-8 border-t border-slate-700 text-center">
                        <p className="text-slate-300 mb-4">Ready to see a detailed breakdown for your specific needs?</p>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold rounded-lg hover:from-orange-500 hover:to-orange-400 transition-all duration-300 shadow-lg hover:shadow-orange-500/50"
                        >
                            Get Custom Quote
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
