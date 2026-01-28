const { SignatureV4 } = require('@aws-sdk/signature-v4');
const { Sha256 } = require('@aws-crypto/sha256-js');
const { HttpRequest } = require('@aws-sdk/protocol-http');

const APPSYNC_API_ENDPOINT = process.env.APPSYNC_API_ENDPOINT;
const AWS_REGION = process.env.AWS_REGION || 'us-east-1';

/**
 * Lambda function to create CRM contacts from public form submissions
 * This function uses IAM authentication to securely write to Amplify Data
 */
exports.handler = async (event) => {
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
                message: error.message
            })
        };
    }
};

/**
 * Execute GraphQL query/mutation with IAM authentication
 */
async function executeGraphQL(query, variables) {
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
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
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
