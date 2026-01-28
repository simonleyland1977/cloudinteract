"use client"

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Link from "next/link";

export function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check if user has already accepted cookies
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            setShowBanner(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setShowBanner(false);
    };

    const declineCookies = () => {
        localStorage.setItem("cookie-consent", "declined");
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[200] p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
            <div className="container mx-auto max-w-6xl">
                <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-6 md:p-8 relative">
                    <button
                        onClick={declineCookies}
                        className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
                        aria-label="Close"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                        <div className="flex-1">
                            <h3 className="text-lg font-bold text-white mb-2">
                                We value your privacy
                            </h3>
                            <p className="text-sm text-slate-300 leading-relaxed">
                                We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.
                                By clicking "Accept All", you consent to our use of cookies. Read our{" "}
                                <Link href="/privacy" className="text-blue-400 hover:text-blue-300 underline">
                                    Privacy Policy
                                </Link>{" "}
                                for more information.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                            <button
                                onClick={declineCookies}
                                className="px-6 py-2.5 rounded-lg border border-slate-600 text-slate-300 font-medium hover:bg-slate-800 transition-colors whitespace-nowrap"
                            >
                                Decline
                            </button>
                            <button
                                onClick={acceptCookies}
                                className="px-6 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors whitespace-nowrap"
                            >
                                Accept All
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
