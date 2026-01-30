import { getCurrentUser, fetchUserAttributes, updateUserAttributes } from 'aws-amplify/auth';

export type EmployeeRole = 'account-executive' | 'product-manager' | 'solution-architect';

/**
 * Validates if an email belongs to AWS
 * NOTE: Temporarily accepting ANY email for testing purposes
 */
export function isAwsEmployee(email: string): boolean {
    // TESTING MODE: Accept any valid email
    // In production, uncomment the lines below to restrict to AWS emails only
    // const awsDomains = ['@amazon.com', '@aws.amazon.com'];
    // const normalizedEmail = email.toLowerCase().trim();
    // return awsDomains.some(domain => normalizedEmail.endsWith(domain));

    // For testing: accept any email with basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.toLowerCase().trim());
}

/**
 * Get the current user's employee role
 */
export async function getUserRole(): Promise<EmployeeRole | null> {
    try {
        const attributes = await fetchUserAttributes();
        const role = attributes['custom:employeeRole'] as EmployeeRole;
        return role || null;
    } catch (error) {
        console.error('Error fetching user role:', error);
        return null;
    }
}

/**
 * Set the user's employee role
 */
export async function setUserRole(role: EmployeeRole): Promise<void> {
    try {
        await updateUserAttributes({
            userAttributes: {
                'custom:employeeRole': role,
            },
        });
    } catch (error) {
        console.error('Error updating user role:', error);
        throw error;
    }
}

/**
 * Check if the current user has portal access
 */
export async function hasPortalAccess(): Promise<boolean> {
    try {
        const user = await getCurrentUser();
        const attributes = await fetchUserAttributes();

        const isVerified = attributes['custom:isAwsEmployee'] === 'true';
        const hasRole = !!attributes['custom:employeeRole'];

        return !!user && isVerified && hasRole;
    } catch (error) {
        console.error('Error checking portal access:', error);
        return false;
    }
}

/**
 * Mark user as verified AWS employee
 */
export async function markAsVerified(): Promise<void> {
    try {
        const now = new Date().toISOString();
        await updateUserAttributes({
            userAttributes: {
                'custom:isAwsEmployee': 'true',
                'custom:verifiedAt': now,
            },
        });
    } catch (error) {
        console.error('Error marking user as verified:', error);
        throw error;
    }
}

/**
 * Get role display name
 */
export function getRoleDisplayName(role: EmployeeRole): string {
    const roleNames: Record<EmployeeRole, string> = {
        'account-executive': 'Account Executive',
        'product-manager': 'Product Manager',
        'solution-architect': 'Solution Architect',
    };
    return roleNames[role];
}

/**
 * Get all available roles
 */
export function getAllRoles(): EmployeeRole[] {
    return ['account-executive', 'product-manager', 'solution-architect'];
}
