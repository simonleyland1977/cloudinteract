"use client";

import { Button } from "@/components/ui/button";

interface ResourceFilterProps {
    categories: string[];
    activeCategory: string;
    onSelectCategory: (category: string) => void;
}

export function ResourceFilter({
    categories,
    activeCategory,
    onSelectCategory,
}: ResourceFilterProps) {
    return (
        <div className="flex flex-wrap items-center justify-center gap-2">
            <Button
                variant={activeCategory === "All" ? "primary" : "outline"}
                onClick={() => onSelectCategory("All")}
                className="rounded-full px-6 transition-all"
            >
                All
            </Button>
            {categories.map((category) => (
                <Button
                    key={category}
                    variant={activeCategory === category ? "primary" : "outline"}
                    onClick={() => onSelectCategory(category)}
                    className="rounded-full px-6 transition-all"
                >
                    {category}
                </Button>
            ))}
        </div>
    );
}
