'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser } from 'aws-amplify/auth';
import { hasPortalAccess } from '@/lib/portal-auth';

interface ProtectedRouteProps {
    children: React.ReactNode;
    requireRole?: boolean;
}

export function ProtectedRoute({ children, requireRole = true }: ProtectedRouteProps) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [hasAccess, setHasAccess] = useState(false);

    useEffect(() => {
        async function checkAuth() {
            try {
                // Check if user is authenticated
                await getCurrentUser();

                // Check if user has portal access (verified AWS employee with role)
                if (requireRole) {
                    const access = await hasPortalAccess();
                    if (!access) {
                        router.push('/aws-portal');
                        return;
                    }
                }

                setHasAccess(true);
            } catch (error) {
                // User is not authenticated
                router.push('/aws-portal');
            } finally {
                setIsLoading(false);
            }
        }

        checkAuth();
    }, [requireRole, router]);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-slate-400">Verifying access...</p>
                </div>
            </div>
        );
    }

    if (!hasAccess) {
        return null;
    }

    return <>{children}</>;
}
