import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { generateClient } from '@/lib/amplify'
import type { Schema } from '../../../amplify/data/resource'

const client = generateClient<Schema>()

interface ContactDetailsProps {
    contact: any | null
    onClose: () => void
    onEdit: (contact: any) => void
    onRefresh?: () => void
}

export function ContactDetails({ contact, onClose, onEdit, onRefresh }: ContactDetailsProps) {
    const [generating, setGenerating] = useState(false)

    if (!contact) return null

    const handleGenerateInsight = async () => {
        setGenerating(true)
        try {
            // 1. Generate insight using Bedrock
            const { data: insight, errors } = await client.queries.generateInsight({
                contactId: contact.id,
                name: contact.name,
                company: contact.company,
                interactions: JSON.stringify([])
            })

            if (errors) throw new Error(errors[0].message)

            if (insight) {
                // 2. Save to database
                await client.models.Insight.create({
                    contactId: contact.id,
                    summary: insight.summary,
                    sentiment: insight.sentiment,
                    score: insight.score,
                    nextAction: insight.nextAction,
                    generatedAt: new Date().toISOString() // Ensure date is string
                })

                // 3. Refresh parent data
                if (onRefresh) onRefresh()
            }
        } catch (err) {
            console.error('Failed to generate insight:', err)
            alert('Failed to generate insight. Please check the console.')
        } finally {
            setGenerating(false)
        }
    }

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex justify-end bg-slate-950/50 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'spring', damping: 20 }}
                    className="w-full max-w-xl h-full bg-slate-900 border-l border-white/10 p-6 shadow-2xl overflow-y-auto"
                    onClick={e => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-8">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-2xl font-bold border border-indigo-500/30">
                                {(contact.name || contact.email)[0]?.toUpperCase()}
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-white">{contact.name}</h2>
                                <p className="text-slate-400">{contact.email}</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Button size="sm" variant="outline" onClick={() => onEdit(contact)}>
                                Edit
                            </Button>
                            <Button size="sm" variant="ghost" onClick={onClose}>
                                ✕
                            </Button>
                        </div>
                    </div>

                    {/* Quick Info Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                            <p className="text-sm text-slate-400 mb-1">Status</p>
                            <span className="capitalize text-white font-medium">{contact.status}</span>
                        </div>
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                            <p className="text-sm text-slate-400 mb-1">Company</p>
                            <p className="text-white font-medium">{contact.company || 'N/A'}</p>
                        </div>
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                            <p className="text-sm text-slate-400 mb-1">Phone</p>
                            <p className="text-white font-medium">{contact.phone || 'N/A'}</p>
                        </div>
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                            <p className="text-sm text-slate-400 mb-1">Source</p>
                            <p className="text-white font-medium">{contact.source || 'N/A'}</p>
                        </div>
                    </div>

                    {/* AI Insights Section */}
                    <div className="mb-8">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <span className="text-xl">🤖</span> AI Insights
                        </h3>
                        {!contact.insights?.length ? (
                            <div className="p-6 rounded-xl bg-slate-950/50 border border-white/5 text-center">
                                <p className="text-slate-400 text-sm">No AI insights generated yet.</p>
                                <Button
                                    variant="ghost"
                                    className="text-indigo-400 text-xs mt-1"
                                    onClick={handleGenerateInsight}
                                    disabled={generating}
                                >
                                    {generating ? 'Generating...' : 'Generate Insight'}
                                </Button>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {contact.insights.map((insight: any, i: number) => (
                                    <div key={i} className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className={`px-2 py-0.5 rounded text-xs border ${insight.sentiment === 'positive' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' :
                                                insight.sentiment === 'negative' ? 'bg-red-500/20 text-red-300 border-red-500/30' :
                                                    'bg-slate-500/20 text-slate-300 border-slate-500/30'
                                                }`}>
                                                {insight.sentiment}
                                            </span>
                                            <span className="text-xs text-slate-500">
                                                {new Date(insight.generatedAt).toLocaleDateString()}
                                            </span>
                                        </div>
                                        <p className="text-slate-300 text-sm mb-2">{insight.summary}</p>
                                        <div className="text-xs text-indigo-300 flex items-center gap-1">
                                            <span>👉 Next Action:</span>
                                            <span>{insight.nextAction}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Recent Interactions */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Recent Activity</h3>
                        <div className="space-y-4">
                            {/* Placeholder timeline items since we aren't fetching interactions yet */}
                            <div className="pl-4 border-l-2 border-white/10 relative">
                                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                                <p className="text-slate-500 text-xs mb-1">Today</p>
                                <p className="text-white text-sm">Contact created</p>
                            </div>
                        </div>
                    </div>

                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}
