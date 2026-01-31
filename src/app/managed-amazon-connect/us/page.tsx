import { type Metadata } from 'next';
import { ManagedConnectContent } from '../ManagedConnectContent';

export const metadata: Metadata = {
    title: "Managed Amazon Connect | Deliver Next Generation Customer Experience | US",
    description: "Enterprise Amazon Connect service. Deliver world-class customer experiences with zero complexity. 30-day migration to an AI-powered contact center.",
};

export default function ManagedConnectUS() {
    return <ManagedConnectContent region="US" />;
}
