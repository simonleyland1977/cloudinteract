import { type Metadata } from 'next';
import { ManagedConnectContent } from '../ManagedConnectContent';

export const metadata: Metadata = {
    title: "Managed Amazon Connect Service | Zero AWS Hassle | UK",
    description: "Fully managed Amazon Connect. No AWS expertise needed. 30-day migration to an AI-powered contact centre.",
};

export default function ManagedConnectUK() {
    return <ManagedConnectContent region="UK" />;
}
