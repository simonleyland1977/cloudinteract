'use client';

import { useState } from 'react';
import { signUp, confirmSignUp, signIn } from 'aws-amplify/auth';
import { isAwsEmployee, markAsVerified, setUserRole, type EmployeeRole } from '@/lib/portal-auth';

interface EmailVerificationFormProps {
    onSuccess: () => void;
}

export function EmailVerificationForm({ onSuccess }: EmailVerificationFormProps) {
    const [mode, setMode] = useState<'signup' | 'confirm' | 'signin'>('signup');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmationCode, setConfirmationCode] = useState('');
    const [selectedRole, setSelectedRole] = useState<EmployeeRole>('account-executive');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // Validate email format
            if (!isAwsEmployee(email)) {
                setError('Please enter a valid email address');
                setLoading(false);
                return;
            }

            // Sign up the user
            await signUp({
                username: email,
                password,
                options: {
                    userAttributes: {
                        email,
                    },
                },
            });

            setMode('confirm');
        } catch (err: any) {
            setError(err.message || 'Failed to sign up');
        } finally {
            setLoading(false);
        }
    };

    const handleConfirm = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // Confirm the sign up
            await confirmSignUp({
                username: email,
                confirmationCode,
            });

            // Sign in the user
            await signIn({
                username: email,
                password,
            });

            // Mark as verified and set role
            await markAsVerified();
            await setUserRole(selectedRole);

            onSuccess();
        } catch (err: any) {
            setError(err.message || 'Failed to confirm email');
        } finally {
            setLoading(false);
        }
    };

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await signIn({
                username: email,
                password,
            });

            onSuccess();
        } catch (err: any) {
            setError(err.message || 'Failed to sign in');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto">
            {mode === 'signup' && (
                <form onSubmit={handleSignUp} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your.email@example.com"
                            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            required
                        />
                        <p className="mt-1 text-xs text-slate-500">
                            Must be at least 8 characters with uppercase, lowercase, numbers, and symbols
                        </p>
                    </div>

                    <div>
                        <label htmlFor="role" className="block text-sm font-medium text-slate-300 mb-2">
                            Your Role
                        </label>
                        <select
                            id="role"
                            value={selectedRole}
                            onChange={(e) => setSelectedRole(e.target.value as EmployeeRole)}
                            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        >
                            <option value="account-executive">Account Executive</option>
                            <option value="product-manager">Product Manager</option>
                            <option value="solution-architect">Solution Architect</option>
                        </select>
                    </div>

                    {error && (
                        <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-medium rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Creating Account...' : 'Create Account'}
                    </button>

                    <p className="text-center text-sm text-slate-400">
                        Already have an account?{' '}
                        <button
                            type="button"
                            onClick={() => setMode('signin')}
                            className="text-orange-400 hover:text-orange-300"
                        >
                            Sign In
                        </button>
                    </p>
                </form>
            )}

            {mode === 'confirm' && (
                <form onSubmit={handleConfirm} className="space-y-6">
                    <div>
                        <p className="text-slate-300 mb-4">
                            We've sent a confirmation code to <strong>{email}</strong>
                        </p>
                        <label htmlFor="code" className="block text-sm font-medium text-slate-300 mb-2">
                            Confirmation Code
                        </label>
                        <input
                            id="code"
                            type="text"
                            value={confirmationCode}
                            onChange={(e) => setConfirmationCode(e.target.value)}
                            placeholder="123456"
                            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {error && (
                        <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-medium rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Verifying...' : 'Verify Email'}
                    </button>
                </form>
            )}

            {mode === 'signin' && (
                <form onSubmit={handleSignIn} className="space-y-6">
                    <div>
                        <label htmlFor="signin-email" className="block text-sm font-medium text-slate-300 mb-2">
                            Email Address
                        </label>
                        <input
                            id="signin-email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your.name@amazon.com"
                            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="signin-password" className="block text-sm font-medium text-slate-300 mb-2">
                            Password
                        </label>
                        <input
                            id="signin-password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {error && (
                        <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-medium rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Signing In...' : 'Sign In'}
                    </button>

                    <p className="text-center text-sm text-slate-400">
                        Don't have an account?{' '}
                        <button
                            type="button"
                            onClick={() => setMode('signup')}
                            className="text-orange-400 hover:text-orange-300"
                        >
                            Sign Up
                        </button>
                    </p>
                </form>
            )}
        </div>
    );
}
