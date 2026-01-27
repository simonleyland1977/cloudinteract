"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent hydration mismatch by not rendering toggle logic until mounted
    if (!mounted) {
        return (
            <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10" />
        );
    }

    return <ThemeToggleInner />;
}

function ThemeToggleInner() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
            {theme === "dark" ? (
                <Sun className="h-4 w-4 text-[#FFC84D]" />
            ) : (
                <Moon className="h-4 w-4 text-[#7D55C7]" />
            )}
        </button>
    );
}
