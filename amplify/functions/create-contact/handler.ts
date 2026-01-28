import { SignatureV4 } from '@aws-sdk/signature-v4';
import { Sha256 } from '@aws-crypto/sha256-js';
import { HttpRequest } from '@aws-sdk/protocol-http';
import { Amplify } from 'aws-amplify';

// Environment variables will be injected by the backend definition
const APPSYNC_API_ENDPOINT = process.env.APPSYNC_API_ENDPOINT;
const AWS_REGION = process.env.AWS_REGION || 'us-east-1';

export const handler = async (event: any) => {
    console.log('Received event:', JSON.stringify(event, null, 2));

    try {
        // Parse request body
        const body = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
        const { firstName, lastName, email, company, interest, message } = body;

        // Validate required fields
        if (!email) {
            return {
                statusCode: 400,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Access-Control-Allow-Methods': 'POST, OPTIONS'
                },
                body: JSON.stringify({ error: 'Email is required' })
            };
        }

        // Combine first and last name
        const fullName = [firstName, lastName].filter(Boolean).join(' ');

        // GraphQL mutation to create contact
        const createContactMutation = `
            mutation CreateContact($input: CreateContactInput!) {
                createContact(input: $input) {
                    id
                    email
                    name
                    company
                    status
                    source
                    createdAt
                }
            }
        `;

        const variables = {
            input: {
                email,
                name: fullName || undefined,
                company: company || undefined,
                status: 'new',
                source: 'website_contact_form',
                createdAt: new Date().toISOString()
            }
        };

        // Execute GraphQL mutation with IAM auth
        const contactResult = await executeGraphQL(createContactMutation, variables);

        if (contactResult.errors) {
            console.error('GraphQL errors:', contactResult.errors);
            throw new Error('Failed to create contact');
        }

        const contact = contactResult.data.createContact;

        // Create interaction record
        const createInteractionMutation = `
            mutation CreateInteraction($input: CreateInteractionInput!) {
                createInteraction(input: $input) {
                    id
                    contactId
                    type
                    description
                    timestamp
                }
            }
        `;

        const interactionVariables = {
            input: {
                contactId: contact.id,
                type: 'form_submit',
                description: `Contact form submission: ${interest || 'General inquiry'}`,
                metadata: JSON.stringify({ interest, message }),
                timestamp: new Date().toISOString()
            }
        };

        await executeGraphQL(createInteractionMutation, interactionVariables);

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS'
            },
            body: JSON.stringify({
                success: true,
                message: "Thank you! We'll be in touch soon.",
                contactId: contact.id
            })
        };

    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS'
            },
            body: JSON.stringify({
                error: 'Internal server error',
                message: (error as Error).message
            })
        };
    }
};

/**
 * Execute GraphQL query/mutation with IAM authentication
 */
async function executeGraphQL(query: string, variables: any) {
    if (!APPSYNC_API_ENDPOINT) {
        throw new Error('APPSYNC_API_ENDPOINT is not defined');
    }

    const endpoint = new URL(APPSYNC_API_ENDPOINT);

    const requestBody = {
        query,
        variables
    };

    const request = new HttpRequest({
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            host: endpoint.host
        },
        hostname: endpoint.host,
        path: endpoint.pathname,
        body: JSON.stringify(requestBody)
    });

    const signer = new SignatureV4({
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
            sessionToken: process.env.AWS_SESSION_TOKEN
        },
        region: AWS_REGION,
        service: 'appsync',
        sha256: Sha256
    });

    const signedRequest = await signer.sign(request);

    const response = await fetch(APPSYNC_API_ENDPOINT, {
        method: signedRequest.method,
        headers: signedRequest.headers,
        body: signedRequest.body
    });

    return await response.json();
}
