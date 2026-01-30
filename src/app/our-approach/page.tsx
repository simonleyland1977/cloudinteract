'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

interface Card {
    id: string;
    title: string;
    icon: string;
    items: string[];
    gradient: string;
    glow: string;
    color: string;
}

export default function OurApproachPage() {
    const [cards, setCards] = useState<Card[]>([
        {
            id: 'financial',
            title: 'Financial Model Transition & AWS Funding',
            icon: '💰',
            items: [
                'Transitioning from license to usage-based pricing? We\'ll guide you through every step',
                'Expert advice on pricing models plus access to AWS funding programmes'
            ],
            gradient: 'linear-gradient(90deg, #f7971e, #ffd200)',
            glow: 'rgba(247, 151, 30, 0.3)',
            color: '#ffd200'
        },
        {
            id: 'sprint',
            title: 'Sprint-Based Delivery',
            icon: '🚀',
            items: [
                'Clear deliverables defined upfront and linked to milestone payments',
                'Full lifecycle support: Project Management, Design, Implementation, Testing, Change Management & Handover'
            ],
            gradient: 'linear-gradient(90deg, #f5576c, #f093fb)',
            glow: 'rgba(245, 87, 108, 0.3)',
            color: '#f5576c'
        },
        {
            id: 'integration',
            title: 'System Integration & Data Lake',
            icon: '🔗',
            items: [
                'Seamless integration with your CRM, ITSM and ERP – we\'ve worked with them all',
                'Unlock the wealth of data Amazon Connect provides – fully enabled and ready for your business to consume'
            ],
            gradient: 'linear-gradient(90deg, #fa709a, #fee140)',
            glow: 'rgba(250, 112, 154, 0.3)',
            color: '#fa709a'
        },
        {
            id: 'training',
            title: 'Training & Onboarding',
            icon: '📚',
            items: [
                'Multi-format learning for agents and supervisors: webinars, sandbox environments, self-paced videos',
                'Train-the-Trainer model builds internal champions and reduces long-term costs'
            ],
            gradient: 'linear-gradient(90deg, #a855f7, #6366f1)',
            glow: 'rgba(168, 85, 247, 0.3)',
            color: '#a855f7'
        },
        {
            id: 'support',
            title: 'Post-Implementation Support',
            icon: '🛡️',
            items: [
                'Optional managed service: access to expert Amazon Connect engineers for issue resolution and new capability development'
            ],
            gradient: 'linear-gradient(90deg, #ec4899, #f43f5e)',
            glow: 'rgba(236, 72, 153, 0.3)',
            color: '#ec4899'
        }
    ]);

    const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [copiedText, setCopiedText] = useState(false);

    useEffect(() => {
        // Progress bar on scroll
        const handleScroll = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            setScrollProgress(scrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDragStart = (index: number) => {
        setDraggedIndex(index);
    };

    const handleDragEnd = () => {
        setDraggedIndex(null);
    };

    const handleDragOver = (e: React.DragEvent, index: number) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent, dropIndex: number) => {
        e.preventDefault();

        if (draggedIndex === null || draggedIndex === dropIndex) return;

        const newCards = [...cards];
        const [draggedCard] = newCards.splice(draggedIndex, 1);
        newCards.splice(dropIndex, 0, draggedCard);

        setCards(newCards);
        setDraggedIndex(null);
    };

    const handleShare = () => {
        let priorities = 'My CloudInteract Priorities:\\n\\n';
        cards.forEach((card, index) => {
            priorities += `${index + 1}. ${card.title}\\n`;
        });

        navigator.clipboard.writeText(priorities).then(() => {
            setCopiedText(true);
            setTimeout(() => setCopiedText(false), 2000);
        });
    };

    return (
        <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #1a1a2e 100%)' }}>
            {/* Progress bar */}
            <div
                className="fixed top-0 left-0 h-1 z-50 transition-all duration-100"
                style={{
                    width: `${scrollProgress}%`,
                    background: 'linear-gradient(90deg, #667eea, #764ba2, #f093fb, #f5576c, #fda085)'
                }}
            />

            {/* Animated background particles */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white/10 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            animation: `float ${Math.random() * 10 + 10}s infinite`,
                            animationDelay: `${Math.random() * 15}s`
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-10 py-16 relative z-10">
                {/* Header */}
                <header className="text-center mb-20 animate-fadeIn">
                    <div className="flex items-center justify-center gap-10 mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" className="w-56 h-auto drop-shadow-2xl hover:scale-105 transition-all duration-500"
                            style={{ filter: 'drop-shadow(0 0 30px rgba(125, 85, 199, 0.3))' }}>
                            <defs>
                                <linearGradient id="logo-gradient" x1="497.4" y1="-295.9" x2="915.2" y2="-295.9" gradientTransform="translate(0 244) scale(1 -1)" gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stopColor="#ffbe0b" />
                                    <stop offset=".2" stopColor="#f94b4e" />
                                    <stop offset=".4" stopColor="#f40876" />
                                    <stop offset=".8" stopColor="#745ca8" />
                                    <stop offset="1" stopColor="#3c85fd" />
                                </linearGradient>
                            </defs>
                            <g>
                                <g>
                                    <circle fill="#7d55c7" cx="622.1" cy="328.3" r="15.3" />
                                    <circle fill="#7d55c7" cx="526.4" cy="458.6" r="15.3" />
                                    <path fill="url(#logo-gradient)" d="M895.5,684.5c-3.6,0-7,1-9.9,2.6l-14.2-19.5c5.7-4.9,9.2-12.2,9.2-20.2,0-14.8-12-26.8-26.8-26.8s-26.8,12-26.8,26.8.2,3.8.6,5.7l-27.3,9h0c-4.1-9.6-13.6-16.3-24.6-16.3s-20.7,6.8-24.7,16.4l-27.3-8.8c.5-1.9.7-4,.7-6,0-14.8-12-26.8-26.8-26.8s-9.7,1.4-13.7,3.8l-16.6-23.1c5.7-4.9,9.4-12.2,9.4-20.4,0-14.1-10.8-25.6-24.6-26.7v-28.6c13.6-1.2,24.3-12.7,24.3-26.7s-3.8-15.8-9.8-20.7l16.8-22.6c4.2,2.7,9.2,4.2,14.5,4.2,15,0,27.1-12.1,27.1-27.1s-.3-4.3-.8-6.3l26.6-8.7c4,9.9,13.8,17,25.1,17s20.6-6.6,24.8-16.2h0l26,9.2c-.3,1.6-.5,3.3-.5,5,0,15,12.1,27.1,27.1,27.1s27.1-12.1,27.1-27.1-3.4-15.1-8.8-20l14-19.9c2.9,1.6,6.1,2.5,9.6,2.5,11,0,20-9,20-20s-9-20-20-20-4.2.3-6.2,1l-24-52.6c4.2-2.7,7-7.5,7-12.9,0-8.5-6.9-15.3-15.3-15.3s-15.3,6.9-15.3,15.3.3,3.8,1,5.5l-50.9,28.6c-3.6-5.1-9.6-8.4-16.3-8.4s-12.5,3.2-16.1,8.2l-50.1-28.4c.7-1.7,1-3.6,1-5.5,0-8.5-6.9-15.3-15.3-15.3s-15.3,6.9-15.3,15.3,2.8,10.1,6.9,12.8l-24.2,52.6c-2-.6-4.1-1-6.3-1-11,0-20,9-20,20v.2l-57.9,7.1c-1.7-6.6-7.7-11.5-14.8-11.5s-15.3,6.9-15.3,15.3,6.9,15.3,15.3,15.3.8,0,1.2,0l12.7,56.3c-8.5,2.3-14.8,10.1-14.8,19.3s.9,6.6,2.4,9.5l-42.4,41.2c-2.6-2.1-5.9-3.3-9.5-3.3-8.5,0-15.3,6.9-15.3,15.3s6.9,15.3,15.3,15.3,7-1.3,9.7-3.4l43.6,39.6c-2.4,3.3-3.8,7.3-3.8,11.7,0,8.9,5.8,16.4,13.8,19l-11.5,56.1h-.8c-8.5,0-15.3,6.9-15.3,15.3s6.9,15.3,15.3,15.3,13-4.8,14.8-11.3l57.3,6.8h0c0,11.1,9,20.1,20,20.1s4.2-.3,6.1-1l23.8,52.7c-4.2,2.7-7,7.5-7,12.9,0,8.5,6.9,15.3,15.3,15.3s15.3-6.9,15.3-15.3-.4-3.8-1-5.5l50.7-28.7c3.6,5,9.5,8.2,16.2,8.2s12.6-3.3,16.2-8.3l51,28.7c-.7,1.7-1,3.5-1,5.5,0,8.5,6.9,15.3,15.3,15.3s15.3-6.9,15.3-15.3-2.8-10.1-7-12.9l24-52.7c2,.6,4,1,6.2,1,11,0,20-9,20-20s-9-20-20-20h0l.3.2h0ZM802.6,672.5c0-2.1-.2-4.2-.7-6.2l27.2-9c3.1,7.8,9.8,13.8,18,15.9l-7.1,40.3h-1.2c-4.8,0-9.2,1.7-12.7,4.5l-29.5-28.6c3.8-4.6,6-10.5,6-17h0ZM704.6,673.3c8.1-2.1,14.7-8,17.9-15.5l27.3,8.8c-.5,1.9-.7,4-.7,6,0,6.4,2.3,12.3,6,17l-29.5,28.6c-3.5-2.8-7.9-4.5-12.7-4.5s-.8,0-1.2,0l-7.1-40.3h0ZM663.7,603.9l16.6,23.1c-5.7,4.9-9.4,12.2-9.4,20.4s0,1,0,1.4l-40,5.5c-1.3-5-4.4-9.2-8.6-11.9l17.9-36.6c3,1.2,6.3,1.8,9.7,1.8,5,0,9.7-1.4,13.7-3.8h0ZM591.3,532.3l35.3-19.6c4.3,7.2,12,12.2,20.8,13v28.6c-8.4.7-15.7,5.4-20,12.2l-36-19.1c.9-2.3,1.4-4.8,1.4-7.4s-.5-5.3-1.5-7.6h0ZM663,475.7c-3.9-2.2-8.5-3.5-13.3-3.5s-6.3.6-9.2,1.6l-18.1-36.4c4.2-2.7,7.2-6.9,8.5-11.8l40,5.7v1.5c0,8,3.5,15.2,9,20.1l-17,22.8h0ZM749,407.6c0,2,.2,4,.6,5.8l-26.7,8.7c-3.3-7.7-10.1-13.6-18.4-15.7l7-40.2h1.2c4.8,0,9.2-1.7,12.7-4.5l29.6,28.7c-3.8,4.7-6.1,10.7-6.1,17.2h.1ZM828.2,423.4l-25.7-9.1c.5-2.1.8-4.4.8-6.7,0-6.7-2.4-12.8-6.4-17.5l29.2-28.3c3.5,2.9,7.9,4.5,12.7,4.5s.8,0,1.1,0l6.9,40.3c-8.6,2.2-15.6,8.6-18.6,16.8h0ZM861.2,774.4c-1.3-.4-2.8-.6-4.2-.6-4.9,0-9.3,2.3-12.1,5.9l-51-28.7c1-2.4,1.6-5,1.6-7.8,0-11-9-20-20-20s-20,9-20,20,.6,5.4,1.6,7.8l-50.7,28.7c-2.8-3.6-7.2-5.9-12.1-5.9s-2.8.2-4.2.6l-23.8-52.7c5.8-3.5,9.8-9.9,9.8-17.2,0-11-9-20-20-20s-17.4,6.6-19.5,15.4l-57.3-6.8c-.2-6.4-4.3-11.8-10.1-13.9l11.5-56.1h1.8c11,0,20-9,20-20s-9-20-20-20-9.7,1.9-13.2,5l-43.6-39.6c1.7-2.5,2.6-5.4,2.6-8.6s-1-6.2-2.7-8.7l41.9-40.8c3.7,4.2,9,6.8,15,6.8,11,0,20-9,20-20s-9-20-20-20-.5,0-.8,0l-12.8-56.7c5.5-2.2,9.4-7.4,9.7-13.6l58-7.1c2.1,8.8,10,15.4,19.5,15.4s20-9,20-20-3.9-13.6-9.6-17.1l24.2-52.6c1.4.4,2.8.6,4.3.6,4.9,0,9.3-2.3,12.1-5.9l50.1,28.4c-1,2.4-1.6,5.1-1.6,7.9,0,11,9,20,20,20s20-9,20-20-.5-5.3-1.5-7.7l50.9-28.6c2.8,3.6,7.2,5.9,12.1,5.9s2.9-.2,4.2-.6l24,52.6c-5.8,3.5-9.7,9.9-9.7,17.1s2.6,11.3,6.7,14.9l-13.9,19.7c-4.2-2.7-9.3-4.3-14.7-4.3s-1.6,0-2.3.1l-6.9-40.3c8.3-2.4,14.4-10.1,14.4-19.2s-9-20-20-20-20,9-20,20,1.6,8.8,4.2,12.2l-29.3,28.4c-4.7-4-10.8-6.4-17.5-6.4s-13.1,2.5-17.8,6.7l-29.6-28.7c2.6-3.4,4.2-7.6,4.2-12.2,0-11-9-20-20-20s-20,9-20,20,6,16.8,14.3,19.2l-7.1,40.3h-2.1c-12.9,0-23.7,9-26.4,21.1l-40-5.7v-.6c0-11-9-20-20-20s-20,9-20,20,9,20,20,20,4.7-.4,6.8-1.2l18,36.3c-8.1,4.6-13.5,13.3-13.5,23.3s.6,6.7,1.8,9.7l-35.5,19.7c-3.6-5.1-9.6-8.4-16.3-8.4-11,0-20,9-20,20s9,20,20,20,12.8-3.4,16.5-8.6l36,19.1c-1.4,3.2-2.1,6.8-2.1,10.5,0,9.8,5.2,18.3,13,23l-17.9,36.6c-2.1-.8-4.4-1.2-6.7-1.2-11,0-20,9-20,20s9,20,20,20,20-9,20-20v-.5l40-5.5c2.7,12,13.4,20.9,26.1,20.9s1.6,0,2.4,0l7.1,40.3c-8.3,2.4-14.3,10.1-14.3,19.2s9,20,20,20,20-9,20-20-1.5-8.8-4.2-12.2l29.5-28.6c4.7,4.1,10.9,6.6,17.6,6.6s12.9-2.5,17.6-6.6l29.5,28.6c-2.6,3.4-4.2,7.6-4.2,12.2,0,11,9,20,20,20s20-9,20-20-6-16.8-14.3-19.2l7.1-40.3h2.4c5.1,0,9.8-1.4,13.9-3.9l14.2,19.5c-4,3.7-6.5,8.9-6.5,14.7s3.9,13.7,9.7,17.2l-24,52.7h-.3Z" />
                                    <circle fill="#7d55c7" cx="526.5" cy="620.7" r="15.3" />
                                    <circle fill="#7d55c7" cx="622.1" cy="752.3" r="15.3" />
                                    <circle fill="#7d55c7" cx="775.7" cy="802.7" r="15.3" />
                                    <circle fill="#7d55c7" cx="929.9" cy="752.3" r="15.3" />
                                    <circle fill="#7d55c7" cx="775.7" cy="277.3" r="15.3" />
                                    <circle fill="#7d55c7" cx="929.9" cy="328.3" r="15.3" />
                                </g>
                                <g>
                                    <path fill="#7d55c7" d="M1102.7,483.5v1.5c.1,0-16.2,0-16.2,0l-.3-1.5c-2.8-13.9-11.4-22.8-27-22.8s-31.3,16.5-31.3,40.9,12.3,41.5,30.6,41.5,24.1-9.1,27-23.1l.3-1.5h16.3v1.5c-2.2,20.2-17.4,35.7-44.4,35.7s-47.7-21.9-47.7-53.4,20.4-54.3,49.5-54.3,41.1,15,43.2,35.4Z" />
                                    <path fill="#7d55c7" d="M1135.1,529.4c0,2.7,0,5.1.2,7.5.3,4.5,2.4,6,9.4,5.4v11.5c-3.3.4-7,.8-10.8.8-8.7,0-14.5-3.2-15.1-13.3-.1-3-.1-6.6-.1-11.4v-86.4h16.5v85.9Z" />
                                    <path fill="#7d55c7" d="M1233.2,513.8c0,23.2-13.6,42-40.3,42s-40.3-18.7-40.3-42,13.5-41.8,40.3-41.8,40.3,18.6,40.3,41.8ZM1215.7,513.8c0-18-8.4-29.8-22.8-29.8s-22.9,11.8-22.9,29.8,8.4,30,22.9,30,22.8-12,22.8-30Z" />
                                    <path fill="#7d55c7" d="M1317.2,553.7h-16.3v-13.6l-5.5,9.9c-6.3,4.5-12.1,5.8-20.1,5.8-16.5,0-26.1-9.3-27.9-20.2-.6-4-.8-7.6-.8-14.1v-47.4h16.3v44.1c0,2.5.2,6.9.6,11,1.2,8.7,6.9,14.4,17.1,14.4s20.2-8.8,20.2-31.9v-37.5h16.3v79.6Z" />
                                    <path fill="#7d55c7" d="M1411.6,553.7h-16.5v-12.6l-6,8.7c-4.5,3.6-12.8,6-20.8,6-22.8,0-35.8-17.2-35.8-40.6s18-43.2,38.5-43.2,14.8,1.8,18.9,5l5.2,7.9v-41.4h16.5v110.2ZM1395.1,514.7v-4.2c0-19.3-11.7-26.5-22.3-26.5s-22.9,10-22.9,29.8,8,30,22.2,30,23.1-7.8,23.1-29.1Z" />
                                </g>
                                <g>
                                    <path fill="#ffffff" d="M1069.9,635.5v-48.6h7.8v48.6h-7.8Z" />
                                    <path fill="#ffffff" d="M1134.9,614.5v21.1h-7.7v-20.2c0-1.8,0-3.4-.1-5.3-.4-4.2-2.6-7.2-7.9-7.2s-9.7,4.2-9.7,15.9v16.8h-7.7v-37.4h7.7v6.2l2.5-4.3c3-2.3,5.7-2.9,9.4-2.9,8,0,12.6,4.2,13.3,10.7.1,1.9.2,3.6.2,6.6Z" />
                                    <path fill="#ffffff" d="M1167.7,623.4c0,1.3,0,2.1,0,3.1.3,3.7,1.7,4.4,6.8,3.9v5.4c-2,.3-3.8.4-5.7.4-5.8,0-8.4-2.2-8.7-7.1,0-1.3,0-2.9,0-5v-20.3h-5.3v-5.4h5.3v-8.9h7.7v8.9h7.3v5.4h-7.3v19.6Z" />
                                    <path fill="#ffffff" d="M1227.4,619h-26.8c.6,8.9,4.7,11.9,9.8,11.9s8-2.7,8.8-7.5h7.8c-1.6,8.9-8.7,13.1-16.9,13.1s-17.5-6.3-17.5-19.6,7.5-19.8,18.3-19.8,16.7,8.2,16.7,18.7,0,1.8-.1,3.1ZM1200.6,613.6h19c-.6-6.9-3.6-10.8-9-10.8s-9.1,3.6-9.9,10.8Z" />
                                    <path fill="#ffffff" d="M1268.3,597.6v6.1c-7.1-.5-11.6,3.2-11.6,12.4v19.4h-7.7v-37.4h7.7v6.3l3.2-5.1c1.7-1.3,3.9-2.1,5.8-2.1s1.8.1,2.6.4Z" />
                                    <path fill="#ffffff" d="M1308.8,630.1l-1.9,4c-2.5,1.8-5.8,2.4-9.3,2.4-6.6,0-12-3.8-12-10.8s6.6-12.8,20.8-12.8h2.4v-.9c0-1.4,0-2.7-.1-4.1-.2-3-2.1-5.1-6.6-5.1s-6.8,2.5-7.3,7.2h-7.7c.5-8.2,6.6-12.8,15.1-12.8s13.5,4.1,14.1,10.4c.1,1.5.2,3.5.2,5.3v13.2c0,2.8.1,5.4.7,9.5h-7.7l-.7-5.4ZM1308.7,621.5v-3.5c-9.1-.7-15,1.3-15,7s2.6,5.8,6.7,5.8,8.3-3.3,8.3-9.4Z" />
                                    <path fill="#ffffff" d="M1372.1,611.1h-7.8c-1.1-5.7-4.2-8.3-8.7-8.3s-9.7,4.3-9.7,13.7,4.2,14.4,9.4,14.4,7.6-2.7,8.7-7.8h7.9c-1.8,8.9-8.2,13.4-17,13.4s-17.2-6.2-17.2-19.5,8.3-19.9,18.1-19.9,15.4,5.7,16.3,13.9Z" />
                                    <path fill="#ffffff" d="M1402.1,623.4c0,1.3,0,2.1,0,3.1.3,3.7,1.7,4.4,6.8,3.9v5.4c-2,.3-3.8.4-5.7.4-5.8,0-8.4-2.2-8.7-7.1,0-1.3,0-2.9,0-5v-20.3h-5.3v-5.4h5.3v-8.9h7.7v8.9h7.3v5.4h-7.3v19.6Z" />
                                </g>
                            </g>
                        </svg>
                        <h1 className="text-7xl font-extrabold tracking-tight mb-0"
                            style={{
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #fda085 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}>
                            Our Approach
                        </h1>
                    </div>
                    <p className="text-3xl font-medium"
                        style={{
                            background: 'linear-gradient(90deg, #f5576c, #fda085)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                        We Guide You Every Step of the Way
                    </p>
                </header>

                <p className="text-center text-xl text-white/70 mb-10">
                    Drag and drop to rank these by your priority – what matters most to you?
                </p>

                {/* Cards List */}
                <div className="flex flex-col gap-6 mb-10 max-w-4xl mx-auto">
                    {cards.map((card, index) => (
                        <div
                            key={card.id}
                            draggable
                            onDragStart={() => handleDragStart(index)}
                            onDragEnd={handleDragEnd}
                            onDragOver={(e) => handleDragOver(e, index)}
                            onDrop={(e) => handleDrop(e, index)}
                            className={`bg-white/5 border border-white/5 rounded-3xl p-8 relative overflow-hidden backdrop-blur-md transition-all duration-500 ease-out cursor-grab active:cursor-grabbing hover:-translate-y-2 hover:bg-white/10 hover:border-white/10 ${draggedIndex === index ? 'opacity-50 scale-105' : ''
                                }`}
                            style={{
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                                animationDelay: `${index * 0.1}s`,
                                ['--card-gradient' as any]: card.gradient,
                                ['--card-glow' as any]: card.glow,
                                ['--title-color' as any]: card.color
                            }}
                        >
                            {/* Glow effect */}
                            <div
                                className="absolute w-48 h-48 rounded-full opacity-0 hover:opacity-15 transition-opacity duration-500 pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                style={{ background: card.gradient, filter: 'blur(80px)' }}
                            />

                            {/* Top border on hover */}
                            <div
                                className="absolute top-0 left-0 right-0 h-1 origin-left scale-x-0 hover:scale-x-100 transition-transform duration-500"
                                style={{ background: card.gradient }}
                            />

                            {/* Drag handle */}
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/15 text-xl tracking-tighter">
                                ⋮⋮
                            </div>

                            {/* Step number */}
                            <span
                                className="absolute top-1/2 left-10 -translate-y-1/2 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-bold text-white/40 transition-all duration-300"
                                style={{
                                    background: draggedIndex === index ? card.gradient : undefined,
                                    color: draggedIndex === index ? 'white' : undefined,
                                    borderColor: draggedIndex === index ? 'transparent' : undefined
                                }}
                            >
                                {String(index + 1).padStart(2, '0')}
                            </span>

                            {/* Icon */}
                            <div
                                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4 ml-16 transition-transform duration-500 hover:scale-110 hover:rotate-6"
                                style={{ background: card.gradient }}
                            >
                                {card.icon}
                            </div>

                            {/* Title */}
                            <h2 className="text-xl font-bold mb-4 ml-16 leading-tight"
                                style={{ color: card.color }}>
                                {card.title}
                            </h2>

                            {/* Content */}
                            <div className="flex flex-col gap-3 ml-16">
                                {card.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className="flex items-start gap-3 p-3 bg-white/2 rounded-lg hover:bg-white/4 transition-all">
                                        <span
                                            className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                                            style={{ background: card.gradient }}
                                        >
                                            ✓
                                        </span>
                                        <p className="text-white/80 leading-relaxed text-sm">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Priority Summary */}
                <div className="max-w-4xl mx-auto bg-white/5 border border-white/5 rounded-3xl p-10 mb-16">
                    <h3 className="text-center text-2xl font-semibold mb-8"
                        style={{
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                        Your Priorities
                    </h3>

                    <div className="flex flex-col gap-3 mb-8">
                        {cards.map((card, index) => (
                            <div key={card.id} className="flex items-center gap-4 p-4 bg-white/2 rounded-xl transition-all">
                                <span
                                    className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                                    style={{
                                        background: index === 0 ? 'linear-gradient(135deg, #ffd700, #ffaa00)' :
                                            index === 1 ? 'linear-gradient(135deg, #c0c0c0, #a0a0a0)' :
                                                index === 2 ? 'linear-gradient(135deg, #cd7f32, #b87333)' :
                                                    'rgba(255, 255, 255, 0.1)',
                                        color: index < 3 ? '#1a1a2e' : 'rgba(255, 255, 255, 0.6)'
                                    }}
                                >
                                    {index + 1}
                                </span>
                                <span className="text-white/80 text-sm">{card.title}</span>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={handleShare}
                        className={`w-full flex items-center justify-center gap-3 px-8 py-4 text-white font-semibold rounded-xl border-none cursor-pointer transition-all duration-400 ${copiedText ? 'bg-gradient-to-r from-green-600 to-green-500' : 'bg-gradient-to-r from-purple-600 to-indigo-600'
                            } hover:-translate-y-1 hover:shadow-2xl`}
                    >
                        <span>{copiedText ? 'Copied to Clipboard!' : 'Share My Priorities'}</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                            <polyline points="16 6 12 2 8 6" />
                            <line x1="12" y1="2" x2="12" y2="15" />
                        </svg>
                    </button>
                </div>

                {/* CTA Section */}
                <div className="text-center max-w-4xl mx-auto">
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 px-12 py-5 text-lg font-semibold text-white rounded-full no-underline relative overflow-hidden group transition-all duration-400 hover:-translate-y-1 hover:shadow-2xl"
                        style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
                    >
                        <span className="relative z-10">Start Your Journey</span>
                        <svg className="relative z-10 group-hover:translate-x-1 transition-transform" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                        <div className="absolute top-0 -left-full w-full h-full transition-all duration-400 group-hover:left-0 z-0"
                            style={{ background: 'linear-gradient(135deg, #f5576c 0%, #fda085 100%)' }} />
                    </Link>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(100vh) rotate(0deg);
                        opacity: 0;
                    }
                    10% {
                        opacity: 1;
                    }
                    90% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(-100vh) rotate(720deg);
                        opacity: 0;
                    }
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(-50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
}
