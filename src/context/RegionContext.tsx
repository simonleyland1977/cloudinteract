"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Region = "us" | "uk";

interface RegionContextType {
    region: Region;
    setRegion: (region: Region) => void;
}

const RegionContext = createContext<RegionContextType | undefined>(undefined);

export function RegionProvider({ children }: { children: React.ReactNode }) {
    const [region, setRegion] = useState<Region>("us");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const stored = localStorage.getItem("region") as Region | null;
        if (stored && (stored === "us" || stored === "uk")) {
            setRegion(stored);
        }
    }, []);

    const handleSetRegion = (newRegion: Region) => {
        setRegion(newRegion);
        localStorage.setItem("region", newRegion);
    };

    if (!mounted) {
        // Return children immediately to avoid hydration mismatch, keeping default 'us'
        return <>{children}</>;
    }

    return (
        <RegionContext.Provider value={{ region, setRegion: handleSetRegion }}>
            {children}
        </RegionContext.Provider>
    );
}

export function useRegion() {
    const context = useContext(RegionContext);
    if (context === undefined) {
        throw new Error("useRegion must be used within a RegionProvider");
    }
    return context;
}
