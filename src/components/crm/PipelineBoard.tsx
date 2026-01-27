"use client"

import { useState } from 'react'
import { motion, Reorder } from 'framer-motion'
import { Button } from '@/components/ui/button'
import type { Schema } from '../../../amplify/data/resource'

type Opportunity = Schema['Opportunity']['type']

interface PipelineBoardProps {
    opportunities?: Opportunity[]
    loading?: boolean
    onMoveStage?: (id: string, newStage: string) => void
    onEdit?: (opp: Opportunity) => void
}

const STAGES = ['New', 'Qualification', 'Proposal', 'Negotiation', 'ClosedWon'] // Simplified

export function PipelineBoard({ opportunities = [], loading, onMoveStage, onEdit }: PipelineBoardProps) {
    if (loading) return <div className="text-center text-slate-500">Loading pipeline...</div>

    // Group by stage
    const grouped = STAGES.reduce((acc, stage) => {
        acc[stage] = opportunities.filter(o => o.stage === stage)
        return acc
    }, {} as Record<string, Opportunity[]>)

    return (
        <div className="flex gap-4 overflow-x-auto pb-8 h-[calc(100vh-250px)]">
            {STAGES.map(stage => (
                <div key={stage} className="min-w-[300px] flex flex-col h-full rounded-xl bg-slate-900/40 border border-white/5">
                    {/* Column Header */}
                    <div className="p-4 border-b border-white/5 flex justify-between items-center sticky top-0 bg-slate-900/90 backdrop-blur z-10 rounded-t-xl">
                        <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-full ${stage === 'New' ? 'bg-blue-500' :
                                stage === 'ClosedWon' ? 'bg-emerald-500' :
                                    'bg-indigo-500'
                                }`} />
                            <h3 className="font-bold text-slate-200 text-sm">{stage}</h3>
                        </div>
                        <span className="text-xs text-slate-500 font-mono">
                            {grouped[stage]?.length || 0}
                        </span>
                    </div>

                    {/* Column Content */}
                    <div className="p-3 flex-1 overflow-y-auto space-y-3">
                        {grouped[stage]?.map(opp => (
                            <motion.div
                                key={opp.id}
                                layoutId={opp.id}
                                className="p-4 rounded-lg bg-slate-800 border border-white/5 hover:border-indigo-500/50 cursor-grab active:cursor-grabbing shadow-lg group relative"
                                onClick={() => onEdit?.(opp)}
                                whileHover={{ y: -2 }}
                            >
                                <h4 className="font-bold text-white text-sm mb-1">{opp.title}</h4>
                                <p className="text-xs text-slate-400 mb-3">{opp.account?.name || 'No Account'}</p>

                                <div className="flex justify-between items-center">
                                    <span className="text-emerald-400 text-sm font-mono font-medium">
                                        ${opp.amount?.toLocaleString() || '0'}
                                    </span>
                                    {opp.probability && (
                                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                                            {opp.probability}%
                                        </span>
                                    )}
                                </div>

                                {/* Quick Move Buttons (Simple implementation instead of full drag-drop for now) */}
                                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 flex gap-1">
                                    {stage !== 'New' && (
                                        <button
                                            className="w-6 h-6 rounded bg-slate-700 hover:bg-slate-600 text-white flex items-center justify-center text-xs"
                                            onClick={(e) => { e.stopPropagation(); onMoveStage?.(opp.id, STAGES[STAGES.indexOf(stage) - 1]) }}
                                            title="Move Back"
                                        >
                                            ←
                                        </button>
                                    )}
                                    {stage !== 'ClosedWon' && (
                                        <button
                                            className="w-6 h-6 rounded bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center text-xs"
                                            onClick={(e) => { e.stopPropagation(); onMoveStage?.(opp.id, STAGES[STAGES.indexOf(stage) + 1]) }}
                                            title="Move Forward"
                                        >
                                            →
                                        </button>
                                    )}
                                </div>
                            </motion.div>
                        ))}

                        <Button
                            variant="ghost"
                            className="w-full border border-dashed border-white/10 text-slate-500 hover:text-white hover:bg-white/5 hover:border-white/20"
                            size="sm"
                        >
                            + New Deal
                        </Button>
                    </div>

                    {/* Column Footer Total */}
                    <div className="p-3 border-t border-white/5 bg-slate-900/50 rounded-b-xl">
                        <p className="text-right text-xs text-slate-500">
                            Total: <span className="text-slate-300">${grouped[stage]?.reduce((sum, o) => sum + (o.amount || 0), 0).toLocaleString()}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}
