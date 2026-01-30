'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { type EmployeeRole, getRoleDisplayName } from '@/lib/portal-auth';
import { Briefcase, LineChart, Code } from 'lucide-react';

interface RoleSwitcherProps {
    currentRole?: EmployeeRole;
}

export function RoleSwitcher({ currentRole }: RoleSwitcherProps) {
    const router = useRouter();
    const [selectedRole, setSelectedRole] = useState<EmployeeRole>(currentRole || 'account-executive');

    const roles: { value: EmployeeRole; label: string; icon: any; href: string }[] = [
        {
            value: 'account-executive',
            label: 'Account Executive',
            icon: Briefcase,
            href: '/aws-portal/account-executives',
        },
        {
            value: 'product-manager',
            label: 'Product Manager',
            icon: LineChart,
            href: '/aws-portal/product-managers',
        },
        {
            value: 'solution-architect',
            label: 'Solution Architect',
            icon: Code,
            href: '/aws-portal/solution-architects',
        },
    ];

    const handleRoleChange = (role: EmployeeRole, href: string) => {
        setSelectedRole(role);
        router.push(href);
    };

    return (
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {roles.map((role) => {
                    const Icon = role.icon;
                    const isSelected = selectedRole === role.value;

                    return (
                        <button
                            key={role.value}
                            onClick={() => handleRoleChange(role.value, role.href)}
                            className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${isSelected
                                    ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg shadow-orange-500/20'
                                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white'
                                }`}
                        >
                            <Icon size={20} />
                            <span className="font-medium text-sm">{role.label}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
