"use client"

import { useState, useEffect, useCallback } from 'react'
import { signIn, getCurrentUser, signOut } from 'aws-amplify/auth'
import { generateClient } from '@/lib/amplify'
import type { Schema } from '../../../amplify/data/resource'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { siteConfig } from '@/config/site'

// Components
import { StatsOverview } from '@/components/crm/StatsOverview'
import { ContactList } from '@/components/crm/ContactList'
import { ContactForm } from '@/components/crm/ContactForm'
import { ContactDetails } from '@/components/crm/ContactDetails'
import { AccountList } from '@/components/crm/AccountList'
import { PipelineBoard } from '@/components/crm/PipelineBoard'

const client = generateClient<Schema>()

// Types
type Contact = Schema['Contact']['type']
type Account = Schema['Account']['type']
type Opportunity = Schema['Opportunity']['type']

export default function CRMDashboard() {
    // Auth state
    const [user, setUser] = useState<any>(null)
    const [authLoading, setAuthLoading] = useState(true)
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    // Data state
    const [contacts, setContacts] = useState<Contact[]>([])
    const [accounts, setAccounts] = useState<Account[]>([])
    const [opportunities, setOpportunities] = useState<Opportunity[]>([])

    const [view, setView] = useState<'contacts' | 'accounts' | 'pipeline'>('contacts')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    // UI State
    const [showAddModal, setShowAddModal] = useState(false)
    const [editingContact, setEditingContact] = useState<Contact | null>(null)
    const [selectedContact, setSelectedContact] = useState<Contact | null>(null)

    const checkUser = useCallback(async () => {
        try {
            const currentUser = await getCurrentUser()
            setUser(currentUser)
        } catch {
            setUser(null)
        } finally {
            setAuthLoading(false)
        }
    }, [])

    useEffect(() => {
        checkUser()
    }, [checkUser])

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setAuthLoading(true)
        setError(null)
        try {
            await signIn({ username: loginEmail, password: loginPassword })
            await checkUser()
        } catch (err) {
            console.error('Login failed:', err)
            setError('Invalid email or password')
            setAuthLoading(false)
        }
    }

    const handleSignOut = async () => {
        await signOut()
        setUser(null)
        setContacts([])
        setAccounts([])
        setOpportunities([])
    }

    const fetchData = useCallback(async () => {
        if (!user) return
        setLoading(true)
        setError(null)
        try {
            // 1. Fetch Contacts (Always works)
            const contactsParams = await client.models.Contact.list({
                selectionSet: ['id', 'email', 'name', 'phone', 'company', 'status', 'source', 'createdAt', 'insights.*']
            })

            // 2. Try Fetch Accounts & Opportunities (Might fail if schema not updated)
            let accountsData: Account[] = []
            let opportunitiesData: Opportunity[] = []

            try {
                // @ts-ignore - bypassing potential type error if models missing
                if (client.models.Account && client.models.Opportunity) {
                    const [accountsParams, opportunitiesParams] = await Promise.all([
                        client.models.Account.list(),
                        client.models.Opportunity.list({
                            selectionSet: ['id', 'title', 'amount', 'stage', 'probability', 'accountId', 'account.*']
                        })
                    ])
                    accountsData = accountsParams.data as unknown as Account[]
                    opportunitiesData = opportunitiesParams.data as unknown as Opportunity[]
                }
            } catch (e) {
                console.warn('Pipeline features not ready:', e)
            }

            if (contactsParams.errors) throw new Error(contactsParams.errors[0].message)

            // Sort Contacts
            const sortedContacts = (contactsParams.data || []).sort((a: any, b: any) =>
                new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()
            )
            setContacts(sortedContacts as unknown as Contact[])
            setAccounts(accountsData)
            setOpportunities(opportunitiesData)

        } catch (err) {
            console.error('Error fetching data:', err)
            setError(err instanceof Error ? err.message : 'Failed to load data')
        } finally {
            setLoading(false)
        }
    }, [user])

    useEffect(() => {
        if (user) {
            fetchData()
        }
    }, [fetchData, user])

    const handleSaveContact = async (formData: any) => {
        setError(null)
        try {
            if (editingContact) {
                const { errors } = await client.models.Contact.update({
                    id: editingContact.id,
                    ...formData
                })
                if (errors) throw new Error(errors[0]?.message || 'Failed to update contact')
            } else {
                const { errors } = await client.models.Contact.create({
                    ...formData,
                    createdAt: new Date().toISOString()
                })
                if (errors) throw new Error(errors[0]?.message || 'Failed to create contact')
            }

            await fetchData()
            setShowAddModal(false)
            setEditingContact(null)
        } catch (err) {
            console.error('Error saving contact:', err)
            setError(err instanceof Error ? err.message : 'Failed to save contact')
        }
    }

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this?')) return

        try {
            const { errors } = await client.models.Contact.delete({ id })
            if (errors) throw new Error(errors[0]?.message || 'Failed to delete contact')
            await fetchData()
            if (selectedContact?.id === id) setSelectedContact(null)
        } catch (err) {
            console.error('Error deleting contact:', err)
            setError(err instanceof Error ? err.message : 'Failed to delete contact')
        }
    }

    const handleMoveStage = async (id: string, newStage: string) => {
        // Optimistic update
        setOpportunities(prev => prev.map(o => o.id === id ? { ...o, stage: newStage as any } : o))

        try {
            await client.models.Opportunity.update({ id, stage: newStage as any })
        } catch (err) {
            console.error('Failed to update stage', err)
            fetchData() // Revert on error
        }
    }

    if (authLoading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
            </div>
        )
    }

    if (!user) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md bg-slate-900/50 border border-white/10 rounded-2xl p-8 backdrop-blur-xl"
                >
                    <div className="text-center mb-8">
                        <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30 text-indigo-400 font-bold mx-auto mb-4">
                            {siteConfig.shortName}
                        </div>
                        <h1 className="text-2xl font-bold text-white mb-2">CRM Login</h1>
                        <p className="text-slate-400">Sign in to manage your contacts</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        {error && (
                            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                                {error}
                            </div>
                        )}
                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                            <input
                                type="email"
                                value={loginEmail}
                                onChange={e => setLoginEmail(e.target.value)}
                                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-1 focus:ring-indigo-500/50"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-1">Password</label>
                            <input
                                type="password"
                                value={loginPassword}
                                onChange={e => setLoginPassword(e.target.value)}
                                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-1 focus:ring-indigo-500/50"
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full">Sign In</Button>
                    </form>
                    <div className="mt-8 text-center">
                        <Link href="/" className="text-sm text-slate-500 hover:text-slate-400 transition-colors">
                            ← Back to Home
                        </Link>
                    </div>
                </motion.div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-slate-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
            {/* Header */}
            <header className="fixed w-full z-50 top-0 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30 text-indigo-400 text-sm">
                            {siteConfig.shortName}
                        </span>
                        CRM
                    </Link>
                    <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-lg">
                        <button
                            onClick={() => setView('contacts')}
                            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${view === 'contacts' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                        >
                            Contacts
                        </button>
                        <button
                            onClick={() => setView('accounts')}
                            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${view === 'accounts' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                        >
                            Companies
                        </button>
                        <button
                            onClick={() => setView('pipeline')}
                            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${view === 'pipeline' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                        >
                            Pipeline
                        </button>
                    </nav>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-slate-500">{user.username || user.signInDetails?.loginId}</span>
                        <Button variant="ghost" size="sm" onClick={handleSignOut}>Sign Out</Button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="pt-24 pb-12 px-6">
                <div className="container mx-auto max-w-7xl">
                    {/* Page Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-white mb-2">
                                {view === 'contacts' ? 'Contacts' : view === 'accounts' ? 'Companies' : 'Sales Pipeline'}
                            </h1>
                            <p className="text-slate-400">
                                {view === 'contacts' ? 'Manage your leads and customer relationships' :
                                    view === 'accounts' ? 'Track your target accounts and revenue' :
                                        'Visualize and manage your deals'}
                            </p>
                        </div>
                        <Button onClick={() => {
                            if (view === 'contacts') { setEditingContact(null); setShowAddModal(true) }
                            else alert('Feature coming soon!')
                        }}>
                            + Add {view === 'contacts' ? 'Contact' : view === 'accounts' ? 'Account' : 'Deal'}
                        </Button>
                    </div>

                    {/* Error Banner */}
                    <AnimatePresence>
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-between"
                            >
                                <span>{error}</span>
                                <button onClick={() => setError(null)} className="text-red-400 hover:text-red-300">
                                    ✕
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {view === 'contacts' && (
                        <>
                            <StatsOverview contacts={contacts} />
                            <ContactList
                                contacts={contacts}
                                loading={loading}
                                onEdit={(contact) => {
                                    setEditingContact(contact)
                                    setShowAddModal(true)
                                }}
                                onDelete={handleDelete}
                                onView={(contact) => setSelectedContact(contact)}
                            />
                        </>
                    )}

                    {view === 'accounts' && (
                        <AccountList
                            accounts={accounts}
                            loading={loading}
                            onEdit={(acc) => console.log('Edit', acc)}
                        />
                    )}

                    {view === 'pipeline' && (
                        <PipelineBoard
                            opportunities={opportunities}
                            loading={loading}
                            onMoveStage={handleMoveStage}
                        />
                    )}
                </div>
            </main>

            {/* Modals & Drawers */}
            <ContactForm
                isOpen={showAddModal}
                onClose={() => { setShowAddModal(false); setEditingContact(null) }}
                onSubmit={handleSaveContact}
                initialData={editingContact}
            />

            <ContactDetails
                contact={selectedContact}
                onClose={() => setSelectedContact(null)}
                onEdit={(contact) => {
                    setSelectedContact(null)
                    setEditingContact(contact)
                    setShowAddModal(true)
                }}
                onRefresh={fetchData}
            />
        </div>
    )
}
