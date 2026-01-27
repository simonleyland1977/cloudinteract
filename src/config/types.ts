export interface MenuItem {
    label: string;
    href: string;
    children?: MenuItem[];
    description?: string;
}

export interface LandingPageConfig {
    layout: "standard" | "split";
    hero?: { // For standard layout
        badge?: string;
        title: string;
        titleGradient: string;
        description: string;
        cta: string;
        ctaLink: string;
        secondaryCta?: string;
    };
    splitHero?: { // For split layout
        left: {
            title: string;
            description: string;
            cta: string;
            href: string;
        };
        right: {
            title: string;
            description: string;
            cta: string;
            href: string;
        };
    };
    features: {
        title: string;
        description: string;
        items: {
            title: string;
            description: string;
        }[];
    };
    solutions?: {
        title: string;
        description: string;
        items: {
            title: string;
            description: string;
            icon: string;
            href: string;
            cta: string;
        }[];
    };
}

export interface SiteConfig {
    name: string;
    shortName: string;
    description: string;
    url: string;
    links: {
        linkedin: string;
        github?: string;
    };
    contact: {
        email: string;
    };
    mainNav: MenuItem[];
    landingPage: LandingPageConfig;
}
