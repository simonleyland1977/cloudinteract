import { SiteConfig } from "../types";

export const fiftySixConfig: SiteConfig = {
    name: "fiftysix.ai",
    shortName: "56",
    description: "Transform your contact center with conversational AI that understands context, emotion, and intent.",
    url: "https://fiftysix.ai",
    links: {
        linkedin: "https://www.linkedin.com/company/fiftysixai",
    },
    contact: {
        email: "hello@fiftysix.ai",
    },
    mainNav: [
        { label: "Platform", href: "/#platform" },
        { label: "Healthcare", href: "/healthcare" },
        { label: "Public Sector", href: "/public-sector" },
        { label: "Digital Front Door", href: "/digital-front-door" },
        { label: "Resources", href: "/resources" },
    ],
    landingPage: {
        layout: "standard",
        hero: {
            badge: "Now available: Nova Sonic Integration",
            title: "Voice AI that \n",
            titleGradient: "actually listens.",
            description: "Transform your contact center with conversational AI that understands context, emotion, and intent. Powered by AWS Connect & Bedrock.",
            cta: "Talk to Nova",
            ctaLink: "#demo",
            secondaryCta: "View Architecture"
        },
        features: {
            title: "Built on the Modern AWS Stack",
            description: "We leverage the raw power of Amazon Nova Sonic and Bedrock to deliver sub-second latency responses.",
            items: [
                { title: "Real-time Latency", description: "< 600ms turn-taking speed for natural flow." },
                { title: "Context Aware", description: "Remembers previous calls and CRM history." },
                { title: "Infinite Scale", description: "Serverless architecture that scales from 1 to 10k calls." }
            ]
        },
        solutions: {
            title: "Industry Solutions",
            description: "Purpose-built AI for your vertical, designed with domain expertise.",
            items: [
                {
                    title: "Healthcare",
                    description: "Patient-centric automation with HIPAA compliance.",
                    icon: "🩺",
                    href: "/healthcare",
                    cta: "Learn more"
                },
                {
                    title: "Public Sector",
                    description: "Modernizing citizen services with accessibility.",
                    icon: "🏛️",
                    href: "/public-sector",
                    cta: "Learn more"
                }
            ]
        }
    }
};
