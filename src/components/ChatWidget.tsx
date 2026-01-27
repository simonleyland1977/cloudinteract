"use client";

import { useEffect } from "react";

export function ChatWidget() {
    useEffect(() => {
        // Only run on client and if config exists
        const snippetId = process.env.NEXT_PUBLIC_CONNECT_SNIPPET_ID;
        const instanceId = process.env.NEXT_PUBLIC_CONNECT_INSTANCE_ID;
        const region = process.env.NEXT_PUBLIC_CONNECT_REGION || "us-east-1";

        if (!snippetId && !instanceId) {
            console.warn("Amazon Connect Chat: Missing configuration (Snippet ID or Instance ID).");
            return;
        }

        // AWS Connect Chat Snippet
        (function (w: any, d: any, x: any, id: any) {
            const s = d.createElement('script');
            s.src = `https://fiftysix-demo-dev.my.connect.aws/connectwidget/static/amazon-connect-chat-interface-client.js`;
            s.async = 1;
            s.id = id;
            d.getElementsByTagName('head')[0].appendChild(s);
            w[x] = w[x] || function () { (w[x].ac = w[x].ac || []).push(arguments) };
        })(window, document, 'amazon_connect', 'amazon-connect-chat-interface-client');

        // Initialize
        // @ts-ignore
        window.amazon_connect('styles', {
            iconType: 'CHAT_VOICE',
            openChat: { color: 'white', backgroundColor: '#3b82f6' }, // Blue-500
            closeChat: { color: 'white', backgroundColor: '#3b82f6' },
        });

        // @ts-ignore
        window.amazon_connect('snippetId', snippetId || 'SNIPPET_ID_PLACEHOLDER');

        // @ts-ignore
        window.amazon_connect('supportedMessagingContentTypes', [
            'text/plain',
            'text/markdown',
            'application/vnd.amazonaws.connect.message.interactive',
            'application/vnd.amazonaws.connect.message.interactive.response'
        ]);

    }, []);

    return null; // The widget injects itself into the DOM
}
