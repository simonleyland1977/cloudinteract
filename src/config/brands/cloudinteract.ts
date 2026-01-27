import { SiteConfig } from "../types";

export const cloudInteractConfig: SiteConfig = {
    name: "cloudinteract.io",
    shortName: "CI",
    description: "Leading AI Contact Center Solutions Partner.",
    url: "https://cloudinteract.io",
    links: {
        linkedin: "https://www.linkedin.com/company/cloudinteract",
    },
    contact: {
        email: "hello@cloudinteract.io",
    },
    mainNav: [
        {
            label: "What We Do",
            href: "/what-we-do",
            children: [
                { label: "Our Services", href: "/services" },
                { label: "AI Implementations", href: "/services/ai-implementation" },
                { label: "Managed Services", href: "/services/managed-services" },
                { label: "Amazon Connect", href: "/solutions/amazon-connect" },
                { label: "Generative AI", href: "/solutions/genai" },
            ]
        },
        {
            label: "Who We Serve",
            href: "/industries",
            children: [
                { label: "Healthcare", href: "/healthcare" },
                { label: "Public Sector", href: "/public-sector" },
                { label: "Financial Services", href: "/industries/finance" },
                { label: "Retail", href: "/industries/retail" },
                { label: "Edtech", href: "/industries/edtech" },
                { label: "Utilities", href: "/industries/utilities" },
            ]
        },
        {
            label: "Resources",
            href: "/resources",
            children: [
                { label: "Blog", href: "/resources" }, // Reusing existing resources page
                { label: "Case Studies", href: "/resources/case-studies" },
                { label: "Webinars", href: "/resources/webinars" },
            ]
        },
        {
            label: "Company",
            href: "/company",
            children: [
                { label: "About Us", href: "/about" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
            ]
        }
    ],
    landingPage: {
        layout: "split",
        splitHero: {
            left: {
                title: "Modernize Core Infrastructure",
                description: "World-class Amazon Connect Migrations & Integrations. Zero downtime, zero risk.",
                cta: "Migrate to Cloud",
                href: "/services/migration"
            },
            right: {
                title: "Revolutionize Customer Access",
                description: "AI-Powered Digital Front Door solutions that resolve 40% of inquiries instantly.",
                cta: "Deploy AI Agents",
                href: "/solutions/digital-front-door"
            }
        },
        features: {
            title: "Two Pillars of Excellence",
            description: "We combine deep infrastructure expertise with cutting-edge AI innovation.",
            items: [
                { title: "World-Class Migrations", description: "Zero-downtime migrations from Avaya, Genesys, and Cisco to Amazon Connect." },
                { title: "Digital Front Door", description: "Intelligent AI entry points that resolve 40%+ of inquiries without human intervention." },
                { title: "Enterprise Integration", description: "Seamless data flow with Salesforce, ServiceNow, and custom CRMs." }
            ]
        },
        solutions: {
            title: "Industry Solutions",
            description: "Strategies and solutions tailored to your sector.",
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
                },
                {
                    title: "Retail",
                    description: "Personalized shopping experiences and support.",
                    icon: "🛍️",
                    href: "/industries/retail",
                    cta: "Learn more"
                },
                {
                    title: "Financial Services",
                    description: "Secure, compliant banking and insurance support.",
                    icon: "🏦",
                    href: "/industries/finance",
                    cta: "Learn more"
                },
                {
                    title: "Edtech",
                    description: "Enhancing learning experiences with AI tutors.",
                    icon: "🎓",
                    href: "/industries/edtech",
                    cta: "Learn more"
                },
                {
                    title: "Utilities",
                    description: "Efficient outage management and customer service.",
                    icon: "⚡",
                    href: "/industries/utilities",
                    cta: "Learn more"
                }
            ]
        }
    }
};
