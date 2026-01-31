
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Settings } from "lucide-react";

type NavType = "none" | "anchor" | "glass" | "hybrid";

interface NavigationSwitcherProps {
    onTypeChange: (type: NavType) => void;
    currentType: NavType;
}

export function NavigationSwitcher({ onTypeChange, currentType }: NavigationSwitcherProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-[200]">
            <motion.div
                animate={isOpen ? { width: 320, height: 280 } : { width: 56, height: 56 }}
                className="bg-slate-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            >
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="h-14 w-14 flex items-center justify-center text-slate-400 hover:text-white transition-colors shrink-0"
                >
                    <Settings className={`w-6 h-6 transition-transform duration-500 ${isOpen ? 'rotate-90' : ''}`} />
                </button>

                {isOpen && (
                    <div className="p-6 pt-0 space-y-4">
                        <div>
                            <h4 className="text-white font-bold text-sm mb-1">Navigation Experiment</h4>
                            <p className="text-slate-400 text-xs mb-4">Select a style to preview</p>
                        </div>

                        <div className="grid grid-cols-1 gap-2">
                            {[
                                { id: "none", label: "No Navigation (Current)" },
                                { id: "anchor", label: "Option 1: Anchor Menu" },
                                { id: "glass", label: "Option 2: Floating Glass" },
                                { id: "hybrid", label: "Option 3: Hybrid Header" },
                            ].map((type) => (
                                <button
                                    key={type.id}
                                    onClick={() => onTypeChange(type.id as NavType)}
                                    className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${currentType === type.id
                                            ? "bg-purple-600 text-white"
                                            : "bg-white/5 text-slate-400 hover:bg-white/10"
                                        }`}
                                >
                                    {type.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </motion.div>
        </div>
    );
}
