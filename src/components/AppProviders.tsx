"use client";

import { ThemeProvider } from "./ThemeProvider";
import { RegionProvider } from "@/context/RegionContext";
import { CookieConsent } from "@/components/CookieConsent";
import ConfigureAmplify from "@/components/ConfigureAmplify";

export function AppProviders({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <RegionProvider>
                <ConfigureAmplify />
                {children}
                <CookieConsent />
            </RegionProvider>
        </ThemeProvider>
    );
}
