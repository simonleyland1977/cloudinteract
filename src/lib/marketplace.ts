export interface MarketplaceOffer {
    id: string;
    title: string;
    description: string;
    category: string;
    href: string;
}

export const marketplaceOffers: MarketplaceOffer[] = [
    {
        id: "teams-integration",
        title: "Microsoft Teams Integration for Amazon Connect",
        description: "Connect your back office with your front line for seamless collaboration.",
        category: "Integration",
        href: "https://aws.amazon.com/marketplace/seller-profile?id=seller-ln32jqpczdok4"
    },
    {
        id: "connect-quickstart",
        title: "Amazon Connect Quickstart",
        description: "Get your contact center up and running on Amazon Connect in just 3 weeks.",
        category: "Migration",
        href: "https://aws.amazon.com/marketplace/seller-profile?id=seller-ln32jqpczdok4" // Linking to profile as generic destination for now
    },
    {
        id: "ai-accelerator",
        title: "Accelerator: Proof of Value for Unlimited AI",
        description: "Rapidly prototype and validate AI use cases within Amazon Connect.",
        category: "AI & Innovation",
        href: "https://aws.amazon.com/marketplace/seller-profile?id=seller-ln32jqpczdok4"
    },
    {
        id: "custom-video",
        title: "Amazon Connect Custom Video Solution",
        description: "Seamlessly integrate video interactions into your Amazon Connect workflows.",
        category: "Omnichannel",
        href: "https://aws.amazon.com/marketplace/seller-profile?id=seller-ln32jqpczdok4"
    },
    {
        id: "apollo",
        title: "CloudInteract’s Apollo",
        description: "Advanced agent desktop utility to ensure every contact counts.",
        category: "Productivity",
        href: "https://aws.amazon.com/marketplace/seller-profile?id=seller-ln32jqpczdok4"
    },
    {
        id: "cx-assessment",
        title: "CX Maturity Assessment",
        description: "Evaluate your current customer experience capabilities and identify growth areas.",
        category: "Consulting",
        href: "https://aws.amazon.com/marketplace/seller-profile?id=seller-ln32jqpczdok4"
    },
    {
        id: "managed-services",
        title: "Managed Services: Service Assurance",
        description: "Ongoing support and optimization for your Amazon Connect environment.",
        category: "Managed Services",
        href: "https://aws.amazon.com/marketplace/seller-profile?id=seller-ln32jqpczdok4"
    }
];
