"use client"

import { Globe } from "lucide-react"

export type Region = 'uk' | 'us'

interface RegionalSwitcherProps {
    selectedRegion: Region
    onRegionChange: (region: Region) => void
}

export function RegionalSwitcher({ selectedRegion, onRegionChange }: RegionalSwitcherProps) {
    return (
        <div className="fixed top-24 right-6 z-40 bg-slate-900/90 backdrop-blur-sm border border-slate-800 rounded-xl p-2 shadow-xl">
            <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-slate-400" />
                <div className="flex gap-1">
                    <button
                        onClick={() => onRegionChange('uk')}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${selectedRegion === 'uk'
                                ? 'bg-blue-600 text-white'
                                : 'text-slate-400 hover:text-white hover:bg-slate-800'
                            }`}
                    >
                        UK
                    </button>
                    <button
                        onClick={() => onRegionChange('us')}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${selectedRegion === 'us'
                                ? 'bg-purple-600 text-white'
                                : 'text-slate-400 hover:text-white hover:bg-slate-800'
                            }`}
                    >
                        US
                    </button>
                </div>
            </div>
        </div>
    )
}
