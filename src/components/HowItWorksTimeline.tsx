'use client';

import { CheckCircle2, Clock, Rocket, TrendingUp } from 'lucide-react';

interface TimelineStep {
    number: number;
    title: string;
    duration: string;
    description: string;
    icon: React.ReactNode;
    details: string[];
}

const steps: TimelineStep[] = [
    {
        number: 1,
        title: 'Discovery & Assessment',
        duration: 'Week 1',
        description: 'We analyze your current setup and design your ideal contact center',
        icon: <Clock className="w-6 h-6" />,
        details: [
            'Current system audit',
            'Requirements gathering',
            'Integration mapping',
            'Migration strategy document',
        ],
    },
    {
        number: 2,
        title: 'Migration & Configuration',
        duration: 'Weeks 2-3',
        description: 'We build and configure your Amazon Connect environment',
        icon: <Rocket className="w-6 h-6" />,
        details: [
            'AWS environment setup',
            'Connect instance configuration',
            'Call flows development',
            'Integration implementation',
            'Testing & quality assurance',
        ],
    },
    {
        number: 3,
        title: 'Training & Go-Live',
        duration: 'Week 4',
        description: 'We train your team and ensure a smooth transition',
        icon: <TrendingUp className="w-6 h-6" />,
        details: [
            'Agent training sessions',
            'Admin training',
            'Soft launch with pilot group',
            'Full production cutover',
        ],
    },
    {
        number: 4,
        title: 'Ongoing Optimization',
        duration: 'Continuous',
        description: 'We monitor, maintain, and optimize your contact center',
        icon: <CheckCircle2 className="w-6 h-6" />,
        details: [
            '24/7 monitoring & support',
            'Monthly performance reviews',
            'Continuous optimization',
            'Feature updates & enhancements',
        ],
    },
];

export function HowItWorksTimeline() {
    return (
        <div className="w-full max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    From Decision to Live in 30 Days
                </h2>
                <p className="text-xl text-slate-300">
                    Our proven process gets you up and running fast
                </p>
            </div>

            {/* Timeline */}
            <div className="relative">
                {/* Vertical Line (Desktop) */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-indigo-600 to-purple-600" />

                {/* Steps */}
                <div className="space-y-12">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                        >
                            {/* Content Card */}
                            <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
                                            {step.icon}
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-sm font-semibold text-purple-400">{step.duration}</div>
                                            <h3 className="text-xl font-bold text-white">{step.title}</h3>
                                        </div>
                                    </div>
                                    <p className="text-slate-300 mb-4">{step.description}</p>
                                    <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        {step.details.map((detail, detailIndex) => (
                                            <li key={detailIndex} className="flex items-start gap-2 text-sm text-slate-400">
                                                <CheckCircle2 className={`w-4 h-4 text-green-400 flex-shrink-0 mt-0.5 ${index % 2 === 0 ? 'md:order-2' : ''}`} />
                                                <span className={index % 2 === 0 ? 'md:order-1' : ''}>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Center Circle (Desktop) */}
                            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center border-4 border-slate-950 shadow-lg shadow-purple-500/50">
                                    <span className="text-2xl font-bold text-white">{step.number}</span>
                                </div>
                            </div>

                            {/* Mobile Number Badge */}
                            <div className="md:hidden absolute top-0 left-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center border-2 border-slate-950 shadow-lg">
                                <span className="text-lg font-bold text-white">{step.number}</span>
                            </div>

                            {/* Spacer for opposite side */}
                            <div className="hidden md:block w-5/12" />
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
                <div className="inline-block bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl border border-slate-700 p-8">
                    <h3 className="text-2xl font-bold text-white mb-3">
                        Ready to Get Started?
                    </h3>
                    <p className="text-slate-300 mb-6">
                        Schedule a discovery call and we'll have you live in 30 days
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
                    >
                        Schedule Discovery Call
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}
