"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import type { Schema } from '../../../amplify/data/resource'

type Account = Schema['Account']['type']

interface AccountListProps {
    accounts?: Account[]
    loading?: boolean
    onEdit?: (account: Account) => void
    onDelete?: (id: string) => void
}

export function AccountList({ accounts = [], loading, onEdit, onDelete }: AccountListProps) {
    if (loading) {
        return (
            <div className="space-y-4">
                {[1, 2, 3].map(i => (
                    <div key={i} className="h-20 bg-white/5 rounded-xl animate-pulse" />
                ))}
            </div>
        )
    }

    if (!accounts.length) {
        return (
            <div className="text-center py-20 bg-slate-900/50 rounded-2xl border border-white/5">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold text-white mb-2">No Accounts Yet</h3>
                <p className="text-slate-400 max-w-sm mx-auto mb-6">
                    Add companies to track their details and opportunities.
                </p>
                <Button variant="outline">Create Account</Button>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accounts.map((account) => (
                <motion.div
                    key={account.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="group bg-slate-900/50 border border-white/10 rounded-xl p-6 hover:border-indigo-500/30 hover:bg-slate-900/80 transition-all cursor-pointer relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                        <button
                            className="p-2 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white"
                            onClick={(e) => { e.stopPropagation(); onEdit?.(account) }}
                        >
                            ✎
                        </button>
                    </div>

                    <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-xl border border-indigo-500/20">
                            🏢
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white">{account.name}</h3>
                            <a href={account.website || '#'} target="_blank" className="text-sm text-indigo-400 hover:underline">
                                {account.website?.replace(/^https?:\/\//, '') || 'No website'}
                            </a>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-500">Industry</span>
                            <span className="text-slate-300">{account.industry || 'N/A'}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-500">Revenue</span>
                            <span className="text-slate-300">{account.annualRevenue ? `$${account.annualRevenue.toLocaleString()}` : 'N/A'}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-500">Tier</span>
                            <span className={`px-2 py-0.5 rounded text-xs font-medium border ${account.tier === 'Enterprise' ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' :
                                account.tier === 'MidMarket' ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' :
                                    'bg-slate-500/20 text-slate-300 border-slate-500/30'
                                }`}>
                                {account.tier || 'SMB'}
                            </span>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}
