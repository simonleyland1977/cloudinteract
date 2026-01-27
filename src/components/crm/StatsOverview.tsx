import { motion } from 'framer-motion'

interface StatsOverviewProps {
    contacts: any[]
}

export function StatsOverview({ contacts }: StatsOverviewProps) {
    const stats = [
        { label: 'Total Contacts', value: contacts.length, color: 'indigo' },
        { label: 'New Leads', value: contacts.filter(c => c.status === 'new').length, color: 'blue' },
        { label: 'Engaged', value: contacts.filter(c => c.status === 'engaged').length, color: 'purple' },
        { label: 'Converted', value: contacts.filter(c => c.status === 'converted').length, color: 'emerald' }
    ]

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`p-4 rounded-xl bg-${stat.color}-500/5 border border-${stat.color}-500/20`}
                >
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-sm text-slate-400">{stat.label}</p>
                </motion.div>
            ))}
        </div>
    )
}
