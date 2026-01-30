import { useState, useEffect } from 'react'

export type Region = 'uk' | 'us'

export function useRegionalContent(storageKey: string = 'region-preference') {
    const [selectedRegion, setSelectedRegion] = useState<Region>('us')
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)

        // Try to get saved preference first
        const savedRegion = localStorage.getItem(storageKey) as Region | null
        if (savedRegion) {
            setSelectedRegion(savedRegion)
            return
        }

        // Auto-detect timezone-based region as fallback
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
        const isUK = timezone.includes('Europe/London') || timezone.includes('Europe/')
        setSelectedRegion(isUK ? 'uk' : 'us')
    }, [storageKey])

    const handleRegionChange = (region: Region) => {
        setSelectedRegion(region)
        if (isClient) {
            localStorage.setItem(storageKey, region)
        }
    }

    return { selectedRegion, isClient, handleRegionChange }
}
