import { type Metadata } from 'next';
import { ManagedConnectContent } from '../ManagedConnectContent';

export const metadata: Metadata = {
    title: "Managed Amazon Connect | Agentic AI Contact Center | CloudInteract US",
    description: "Enterprise Amazon Connect service. Deliver world-class customer experiences with zero complexity. 30-day migration to an Agentic AI-powered contact center.",
};

export default function ManagedConnectUS() {
    return <ManagedConnectContent region="US" />;
}
