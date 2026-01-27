"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
    Server,
    Database,
    Cpu,
    Phone,
    MessageSquare,
    ArrowRight
} from "lucide-react";

interface ServiceProps {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    details: string;
    isActive: boolean;
    onClick: () => void;
}

function ServiceCard({ icon, title, description, isActive, onClick }: ServiceProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`relative cursor-pointer rounded-xl border p-6 transition-all ${isActive
                    ? "border-blue-500 bg-blue-500/10 shadow-[0_0_30px_rgba(59,130,246,0.2)]"
                    : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                }`}
        >
            <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${isActive ? "bg-blue-500 text-white" : "bg-white/10 text-zinc-400"
                }`}>
                {icon}
            </div>
            <h3 className={`mb-2 text-lg font-bold ${isActive ? "text-blue-400" : "text-white"}`}>
                {title}
            </h3>
            <p className="text-sm text-zinc-400">{description}</p>

            {/* Connector Line */}
            <div className="absolute -right-6 top-1/2 hidden h-0.5 w-6 -translate-y-1/2 bg-white/10 lg:block last:hidden" />
        </motion.div>
    );
}

export function ArchitectureDiagram() {
    const [activeService, setActiveService] = useState<string>("connect");

    const services = [
        {
            id: "connect",
            icon: <Phone className="h-6 w-6" />,
            title: "Amazon Connect",
            description: "Entry point for Voice & Chat",
            details: "Handles telephony, contact flows, and websocket connections for chat. It recognizes the customer intent and routes the contact."
        },
        {
            id: "lambda",
            icon: <Server className="h-6 w-6" />,
            title: "AWS Lambda",
            description: "Serverless Business Logic",
            details: "Executes TypeScript code to fetch customer data from DynamoDB and invokes the Bedrock Agent. It acts as the bridge."
        },
        {
            id: "bedrock",
            icon: <Cpu className="h-6 w-6" />,
            title: "Amazon Bedrock",
            description: "Generative AI Intelligence",
            details: "Powered by Amazon Nova Sonic. It processes the conversation history and generates natural, empathetic responses in real-time."
        }
    ];

    const activeDetails = services.find(s => s.id === activeService);

    return (
        <div className="my-12 rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-xl">
            <div className="mb-8 flex flex-col items-center justify-between gap-4 lg:flex-row">
                {services.map((service, index) => (
                    <div key={service.id} className="flex flex-1 flex-col items-center lg:flex-row">
                        <ServiceCard
                            {...service}
                            isActive={activeService === service.id}
                            onClick={() => setActiveService(service.id)}
                        />
                        {index < services.length - 1 && (
                            <div className="my-4 lg:my-0 lg:mx-4 text-zinc-600">
                                <ArrowRight className="h-6 w-6 rotate-90 lg:rotate-0" />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-6"
            >
                <h4 className="mb-2 text-xl font-bold text-blue-400">
                    How we use {activeDetails?.title}
                </h4>
                <p className="text-zinc-300 leading-relaxed">
                    {activeDetails?.details}
                </p>
            </motion.div>

            <div className="mt-8 flex justify-center">
                <p className="flex items-center gap-2 text-xs text-zinc-500">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Live Architecture Status: Operational
                </p>
            </div>
        </div>
    );
}
