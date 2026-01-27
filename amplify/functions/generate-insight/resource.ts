import { defineFunction } from '@aws-amplify/backend';

export const generateInsight = defineFunction({
    name: 'generate-insight',
    entry: './handler.ts',
    timeoutSeconds: 30, // Give Bedrock enough time to respond
});
