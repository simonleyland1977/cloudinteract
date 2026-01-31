import { type Metadata } from 'next';
import { ManagedConnectContent } from '../ManagedConnectContent';

export const metadata: Metadata = {
    title: "Managed Amazon Connect Service | Zero AWS Hassle | US",
    description: "Fully managed Amazon Connect. No AWS expertise needed. 30-day migration to an AI-powered contact center.",
};

export default function ManagedConnectUS() {
    return <ManagedConnectContent region="US" />;
}
