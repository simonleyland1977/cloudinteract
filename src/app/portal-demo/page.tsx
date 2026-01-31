"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    LayoutDashboard,
    MessageSquare,
    CreditCard,
    Users,
    Settings,
    Bell,
    Search,
    ChevronDown,
    Activity,
    Brain,
    Phone,
    Clock,
    TrendingUp,
    TrendingDown,
    LogOut,
    CheckCircle2,
    XCircle,
    Sparkles
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

type NavItem = 'overview' | 'analytics' | 'ai-agents' | 'billing' | 'settings'

export default function PortalDemoPage() {
    const [activeTab, setActiveTab] = useState<NavItem>('overview')
    const [isLoaded, setIsLoaded] = useState(false)

    // Simulate data loading
    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 1000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="flex h-screen bg-slate-950 text-slate-200 overflow-hidden font-sans">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col">
                <div className="h-16 flex items-center px-6 border-b border-slate-800">
                    <div className="flex items-center gap-2 text-white font-bold text-lg">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold">CI</span>
                        </div>
                        CloudInteract
                    </div>
                </div>

                <div className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
                    <NavButton
                        icon={LayoutDashboard}
                        label="Overview"
                        active={activeTab === 'overview'}
                        onClick={() => setActiveTab('overview')}
                    />
                    <NavButton
                        icon={Activity}
                        label="Analytics"
                        active={activeTab === 'analytics'}
                        onClick={() => setActiveTab('analytics')}
                    />
                    <NavButton
                        icon={Brain}
                        label="AI Agents"
                        active={activeTab === 'ai-agents'}
                        onClick={() => setActiveTab('ai-agents')}
                    />
                    <NavButton
                        icon={CreditCard}
                        label="Billing & Usage"
                        active={activeTab === 'billing'}
                        onClick={() => setActiveTab('billing')}
                    />
                    <NavButton
                        icon={Users}
                        label="Team Members"
                        active={activeTab === 'settings'}
                        onClick={() => setActiveTab('settings')}
                    />
                </div>

                <div className="p-4 border-t border-slate-800">
                    <button className="flex items-center gap-3 w-full px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                        <LogOut size={18} />
                        <span className="text-sm font-medium">Sign Out</span>
                    </button>
                    <div className="mt-4 pt-4 border-t border-slate-800/50 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white">
                            JS
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-white truncate">John Smith</div>
                            <div className="text-xs text-slate-500 truncate">Acme Corp</div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden relative">
                {/* Header */}
                <header className="h-16 bg-slate-900/50 backdrop-blur-sm border-b border-slate-800 flex items-center justify-between px-8">
                    <div className="flex items-center gap-4">
                        <h1 className="text-xl font-bold text-white">
                            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1).replace('-', ' ')}
                        </h1>
                        <span className="px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            System Healthy
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="bg-slate-800 border border-slate-700 rounded-lg pl-9 pr-4 py-1.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 w-64 transition-all"
                            />
                        </div>
                        <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
                            <Bell size={20} />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 border border-slate-900" />
                        </button>
                    </div>
                </header>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto p-8">
                    {!isLoaded ? (
                        <div className="h-full flex items-center justify-center">
                            <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
                        </div>
                    ) : (
                        <div className="max-w-7xl mx-auto space-y-8">
                            {/* Stats Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <StatCard
                                    label="Active Calls"
                                    value="42"
                                    trend="+12%"
                                    trendUp={true}
                                    icon={Phone}
                                    color="blue"
                                />
                                <StatCard
                                    label="AI Deflection Rate"
                                    value="68.5%"
                                    trend="+5.2%"
                                    trendUp={true}
                                    icon={Brain}
                                    color="purple"
                                />
                                <StatCard
                                    label="Avg Handle Time"
                                    value="4m 12s"
                                    trend="-30s"
                                    trendUp={true}
                                    icon={Clock}
                                    color="green"
                                />
                                <StatCard
                                    label="Spend MTD"
                                    value="$1,240"
                                    trend="+2%"
                                    trendUp={false}
                                    icon={CreditCard}
                                    color="orange"
                                />
                            </div>

                            {/* Main Content Split */}
                            <div className="grid lg:grid-cols-3 gap-8">
                                {/* Left Col - activity feed - spans 2 cols */}
                                <div className="lg:col-span-2 space-y-8">
                                    {/* Real-time Monitor */}
                                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                                        <div className="flex items-center justify-between mb-6">
                                            <h3 className="text-lg font-bold text-white">Live Activity Feed</h3>
                                            <button className="text-xs text-purple-400 hover:text-purple-300 font-medium">View All</button>
                                        </div>
                                        <div className="space-y-4">
                                            <ActivityItem
                                                type="Call"
                                                status="Resolved"
                                                agent="AI Agent"
                                                time="Just now"
                                                description="Order status inquiry resolved automatically"
                                            />
                                            <ActivityItem
                                                type="Chat"
                                                status="Live"
                                                agent="Sarah J."
                                                time="2m ago"
                                                description="Complex billing dispute - escalated from AI"
                                            />
                                            <ActivityItem
                                                type="Call"
                                                status="Queued"
                                                agent="Waiting"
                                                time="3m ago"
                                                description="Technical support queue #1"
                                            />
                                            <ActivityItem
                                                type="SMS"
                                                status="Sent"
                                                agent="System"
                                                time="5m ago"
                                                description="Outage notification sent to 450 customers"
                                            />
                                        </div>
                                    </div>

                                    {/* Usage/Billing Graph Placeholder */}
                                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                                        <div className="flex items-center justify-between mb-6">
                                            <h3 className="text-lg font-bold text-white">Cost & Usage Trends</h3>
                                            <select className="bg-slate-800 border border-slate-700 rounded text-xs text-slate-300 px-2 py-1">
                                                <option>Last 7 Days</option>
                                                <option>Last 30 Days</option>
                                            </select>
                                        </div>
                                        <div className="h-64 flex items-end justify-between gap-2 px-2">
                                            {[35, 42, 38, 55, 48, 60, 52].map((h, i) => (
                                                <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                                                    <div className="relative w-full bg-slate-800 rounded-t-sm h-full overflow-hidden">
                                                        <motion.div
                                                            initial={{ height: 0 }}
                                                            animate={{ height: `${h}%` }}
                                                            transition={{ duration: 0.5, delay: i * 0.1 }}
                                                            className="absolute bottom-0 w-full bg-purple-600/50 group-hover:bg-purple-500 transition-colors"
                                                        />
                                                    </div>
                                                    <span className="text-xs text-slate-500">
                                                        {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Right Col - Queues */}
                                <div className="space-y-8">
                                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                                        <h3 className="text-lg font-bold text-white mb-6">Queue Status</h3>
                                        <div className="space-y-5">
                                            <QueueItem name="Sales Support" count={4} color="green" />
                                            <QueueItem name="Technical Help" count={12} color="yellow" />
                                            <QueueItem name="Returns" count={2} color="green" />
                                            <QueueItem name="VIP Priority" count={0} color="blue" />
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-indigo-500/30 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Sparkles className="text-indigo-400" size={20} />
                                            <h3 className="text-lg font-bold text-white">AI Insights</h3>
                                        </div>
                                        <p className="text-sm text-slate-300 mb-4">
                                            Sentiment analysis detects rising frustration regarding <span className="font-semibold text-white">"Delivery Delays"</span> in the Northeast region.
                                        </p>
                                        <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium transition-colors">
                                            View Report
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
}

function NavButton({ icon: Icon, label, active, onClick }: { icon: any, label: string, active: boolean, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-lg transition-all ${active
                ? 'bg-purple-600/10 text-purple-400 font-medium'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
        >
            <Icon size={20} className={active ? "text-purple-400" : "text-slate-500"} />
            <span className="text-sm">{label}</span>
            {active && <motion.div layoutId="active-nav" className="ml-auto w-1.5 h-1.5 rounded-full bg-purple-400" />}
        </button>
    )
}

function StatCard({ label, value, trend, trendUp, icon: Icon, color }: any) {
    const colorMap: any = {
        blue: 'text-blue-400 bg-blue-400/10',
        purple: 'text-purple-400 bg-purple-400/10',
        green: 'text-green-400 bg-green-400/10',
        orange: 'text-orange-400 bg-orange-400/10',
    }

    return (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
            <div className="flex items-start justify-between mb-4">
                <div className={`p-2 rounded-lg ${colorMap[color]}`}>
                    <Icon size={20} />
                </div>
                <div className={`flex items-center gap-1 text-xs font-bold ${trendUp ? 'text-green-400' : 'text-red-400'}`}>
                    {trendUp ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                    {trend}
                </div>
            </div>
            <div className="text-2xl font-bold text-white mb-1">{value}</div>
            <div className="text-xs text-slate-500">{label}</div>
        </div>
    )
}

function ActivityItem({ type, status, agent, time, description }: any) {
    return (
        <div className="flex items-center gap-4 p-3 hover:bg-slate-800/50 rounded-lg transition-colors border border-transparent hover:border-slate-800">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${type === 'Call' ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' :
                type === 'Chat' ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' :
                    'bg-orange-500/10 border-orange-500/20 text-orange-400'
                }`}>
                {type === 'Call' ? <Phone size={16} /> : type === 'Chat' ? <MessageSquare size={16} /> : <Activity size={16} />}
            </div>
            <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-white">{description}</span>
                    <span className="text-xs text-slate-500">{time}</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                    <span className="text-slate-400">{agent}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-600" />
                    <span className={status === 'Resolved' ? 'text-green-400' : status === 'Live' ? 'text-blue-400' : 'text-slate-400'}>
                        {status}
                    </span>
                </div>
            </div>
        </div>
    )
}

function QueueItem({ name, count, color }: any) {
    const getStatusColor = (c: number) => {
        if (c > 10) return 'bg-red-500 text-white'
        if (c > 5) return 'bg-yellow-500 text-white'
        return 'bg-slate-800 text-slate-300'
    }

    return (
        <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-slate-300">{name}</div>
            <div className={`px-2.5 py-1 rounded text-xs font-bold ${getStatusColor(count)}`}>
                {count} Waiting
            </div>
        </div>
    )
}
