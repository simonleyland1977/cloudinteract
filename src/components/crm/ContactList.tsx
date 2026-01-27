import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface ContactListProps {
    contacts: any[]
    loading: boolean
    onEdit: (contact: any) => void
    onDelete: (id: string) => void
    onView?: (contact: any) => void
}

export function ContactList({ contacts, loading, onEdit, onDelete, onView }: ContactListProps) {
    const [searchTerm, setSearchTerm] = useState('')
    const [statusFilter, setStatusFilter] = useState<string>('all')

    const getStatusColor = (status: string | null | undefined) => {
        switch (status) {
            case 'new': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
            case 'qualified': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
            case 'engaged': return 'bg-purple-500/20 text-purple-400 border-purple-500/30'
            case 'converted': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
            default: return 'bg-slate-500/20 text-slate-400 border-slate-500/30'
        }
    }

    const filteredContacts = contacts.filter(contact => {
        const matchesSearch = (
            (contact.name?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
            (contact.email?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
            (contact.company?.toLowerCase() || '').includes(searchTerm.toLowerCase())
        )
        const matchesStatus = statusFilter === 'all' || contact.status === statusFilter
        return matchesSearch && matchesStatus
    })

    if (loading) {
        return (
            <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm p-12 text-center">
                <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="text-slate-400">Loading contacts...</p>
            </div>
        )
    }

    return (
        <div className="space-y-4">
            {/* Search and Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search contacts..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50"
                    />
                </div>
                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50"
                >
                    <option value="all">All Statuses</option>
                    <option value="new">New</option>
                    <option value="qualified">Qualified</option>
                    <option value="engaged">Engaged</option>
                    <option value="converted">Converted</option>
                </select>
            </div>

            {/* List */}
            <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm">
                {filteredContacts.length === 0 ? (
                    <div className="p-12 text-center">
                        <div className="w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">🔍</span>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">No contacts found</h3>
                        <p className="text-slate-400">Try adjusting your search or filters</p>
                    </div>
                ) : (
                    <div className="divide-y divide-white/5">
                        {filteredContacts.map((contact, i) => (
                            <motion.div
                                key={contact.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.03 }}
                                className="p-4 hover:bg-white/5 transition-colors group cursor-pointer"
                                onClick={() => onView?.(contact)}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-semibold text-sm border border-indigo-500/30">
                                            {(contact.name || contact.email)[0]?.toUpperCase() || '?'}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white">
                                                {contact.name || contact.email}
                                            </h3>
                                            <div className="flex items-center gap-2 text-sm text-slate-400">
                                                {contact.company && <span>{contact.company}</span>}
                                                {contact.company && contact.email && <span>•</span>}
                                                <span>{contact.email}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        {contact.insights && contact.insights.length > 0 && (
                                            <span className="px-2 py-0.5 text-xs rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 hidden sm:inline-block">
                                                AI Insights
                                            </span>
                                        )}
                                        <span className={`px-3 py-1 text-xs rounded-full border ${getStatusColor(contact.status)}`}>
                                            {contact.status || 'new'}
                                        </span>
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2" onClick={e => e.stopPropagation()}>
                                            <button
                                                onClick={() => onEdit(contact)}
                                                className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                                                title="Edit"
                                            >
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={() => onDelete(contact.id)}
                                                className="p-2 rounded-lg hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition-colors"
                                                title="Delete"
                                            >
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
