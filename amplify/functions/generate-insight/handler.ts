import { BedrockRuntimeClient, InvokeModelCommand } from '@aws-sdk/client-bedrock-runtime';
import type { Schema } from '../../data/resource';

const bedrock = new BedrockRuntimeClient({ region: 'us-east-1' });

export const handler: Schema['generateInsight']['functionHandler'] = async (event) => {
    const { contactId, name, company, interactions } = event.arguments;

    // Construct a prompt based on available info
    const prompt = `
    Analyze the following contact and provide a brief CRM insight.
    
    Contact Name: ${name || 'Unknown'}
    Company: ${company || 'Unknown'}
    Recent Interactions: ${JSON.stringify(interactions || [])}
    
    Task:
    1. Determine the sentiment (positive, neutral, negative).
    2. Suggest a "Next Action" (e.g., "Follow up email", "Schedule demo").
    3. Write a 1-sentence summary of the relationship status.
    
    Return strict JSON format:
    {
      "sentiment": "positive" | "neutral" | "negative",
      "nextAction": "string",
      "summary": "string",
      "score": number (0-100)
    }
  `;

    try {
        const command = new InvokeModelCommand({
            modelId: 'amazon.nova-lite-v1:0', // Using Nova Lite for speed/cost
            contentType: 'application/json',
            accept: 'application/json',
            body: JSON.stringify({
                messages: [{ role: 'user', content: [{ text: prompt }] }],
                inferenceConfig: { maxTokens: 300, temperature: 0.7 }
            }),
        });

        const response = await bedrock.send(command);
        const responseBody = JSON.parse(new TextDecoder().decode(response.body));
        const rawContent = responseBody.output?.message?.content?.[0]?.text;

        if (!rawContent) throw new Error('No response from Bedrock');

        // Attempt to parse JSON from the model response
        // Basic cleanup in case model adds markdown blocks
        const jsonStr = rawContent.replace(/```json\n?|\n?```/g, '').trim();
        const result = JSON.parse(jsonStr);

        return {
            sentiment: result.sentiment || 'neutral',
            nextAction: result.nextAction || 'Review account',
            summary: result.summary || 'No summary generated.',
            score: result.score || 50,
            generatedAt: new Date().toISOString()
        };

    } catch (error) {
        console.error('AI Generation Failed:', error);
        // Return a fallback so the UI doesn't crash
        return {
            sentiment: 'neutral',
            nextAction: 'Retry generation',
            summary: 'Failed to generate insight.',
            score: 0,
            generatedAt: new Date().toISOString()
        };
    }
};
