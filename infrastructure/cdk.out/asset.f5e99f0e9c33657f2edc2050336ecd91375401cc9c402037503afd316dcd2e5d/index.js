"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = handler;
const client_bedrock_runtime_1 = require("@aws-sdk/client-bedrock-runtime");
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const client_s3_1 = require("@aws-sdk/client-s3");
// Environment variables
const CONVERSATION_TABLE = process.env.CONVERSATION_TABLE;
const LOGGING_BUCKET = process.env.LOGGING_BUCKET;
const BEDROCK_REGION = process.env.BEDROCK_REGION || 'us-east-1';
const NOVA_SONIC_MODEL_ID = process.env.NOVA_SONIC_MODEL_ID;
const NOVA_PRO_MODEL_ID = process.env.NOVA_PRO_MODEL_ID;
const NOVA_LITE_MODEL_ID = process.env.NOVA_LITE_MODEL_ID;
// AWS clients
const bedrockClient = new client_bedrock_runtime_1.BedrockRuntimeClient({ region: BEDROCK_REGION });
const dynamoClient = new client_dynamodb_1.DynamoDBClient({ region: BEDROCK_REGION });
const s3Client = new client_s3_1.S3Client({ region: BEDROCK_REGION });
async function handler(event) {
    console.log('Received event:', JSON.stringify(event, null, 2));
    const { ContactData, Parameters } = event.Details;
    const contactId = ContactData.ContactId;
    const userUtterance = Parameters.userUtterance || '';
    const modelType = Parameters.modelType || 'sonic';
    const systemPrompt = Parameters.systemPrompt || 'You are a helpful AI assistant for a contact center. Provide concise, friendly, and professional responses.';
    try {
        // Retrieve conversation context from DynamoDB
        const context = await getConversationContext(contactId);
        // Add user message to context
        context.messages.push({
            role: 'user',
            content: userUtterance,
        });
        // Select model based on type
        let modelId;
        switch (modelType) {
            case 'sonic':
                modelId = NOVA_SONIC_MODEL_ID;
                break;
            case 'pro':
                modelId = NOVA_PRO_MODEL_ID;
                break;
            case 'lite':
                modelId = NOVA_LITE_MODEL_ID;
                break;
            default:
                modelId = NOVA_SONIC_MODEL_ID;
        }
        // Invoke Bedrock model
        const response = await invokeBedrockModel(modelId, systemPrompt, context.messages);
        // Add assistant response to context
        context.messages.push({
            role: 'assistant',
            content: response,
        });
        // Save updated context to DynamoDB
        await saveConversationContext(contactId, context);
        // Log interaction to S3
        await logInteractionToS3(contactId, {
            userUtterance,
            modelType,
            modelId,
            response,
            timestamp: new Date().toISOString(),
        });
        // Return response to Amazon Connect
        return {
            statusCode: 200,
            response: response,
            context: {
                messageCount: context.messages.length,
            },
        };
    }
    catch (error) {
        console.error('Error processing request:', error);
        // Return graceful error to Connect
        return {
            statusCode: 500,
            response: "I apologize, but I'm experiencing technical difficulties. Let me transfer you to a human agent who can assist you.",
            error: error instanceof Error ? error.message : 'Unknown error',
        };
    }
}
async function getConversationContext(contactId) {
    try {
        const result = await dynamoClient.send(new client_dynamodb_1.QueryCommand({
            TableName: CONVERSATION_TABLE,
            KeyConditionExpression: 'contactId = :contactId',
            ExpressionAttributeValues: {
                ':contactId': { S: contactId },
            },
            Limit: 10, // Last 10 exchanges
            ScanIndexForward: false, // Most recent first
        }));
        if (result.Items && result.Items.length > 0) {
            const savedContext = JSON.parse(result.Items[0].context?.S || '{"messages":[]}');
            return savedContext;
        }
    }
    catch (error) {
        console.warn('Error retrieving conversation context:', error);
    }
    // Return empty context if none found
    return { messages: [] };
}
async function saveConversationContext(contactId, context) {
    const timestamp = Date.now();
    const ttl = Math.floor(timestamp / 1000) + 86400; // 24 hours from now
    await dynamoClient.send(new client_dynamodb_1.PutItemCommand({
        TableName: CONVERSATION_TABLE,
        Item: {
            contactId: { S: contactId },
            timestamp: { N: timestamp.toString() },
            context: { S: JSON.stringify(context) },
            ttl: { N: ttl.toString() },
        },
    }));
}
async function invokeBedrockModel(modelId, systemPrompt, messages) {
    // Build request payload for Nova models
    const payload = {
        messages: messages,
        system: [{ text: systemPrompt }],
        inferenceConfig: {
            maxTokens: 500,
            temperature: 0.7,
            topP: 0.9,
        },
    };
    console.log('Invoking Bedrock model:', modelId);
    const command = new client_bedrock_runtime_1.InvokeModelCommand({
        modelId: modelId,
        contentType: 'application/json',
        accept: 'application/json',
        body: JSON.stringify(payload),
    });
    const response = await bedrockClient.send(command);
    const responseBody = JSON.parse(new TextDecoder().decode(response.body));
    console.log('Bedrock response:', responseBody);
    // Extract text from Nova response format
    if (responseBody.output && responseBody.output.message && responseBody.output.message.content) {
        return responseBody.output.message.content[0].text || 'I apologize, but I could not generate a response.';
    }
    return 'I apologize, but I could not generate a response.';
}
async function logInteractionToS3(contactId, logData) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const key = `interactions/${contactId}/${timestamp}.json`;
    try {
        await s3Client.send(new client_s3_1.PutObjectCommand({
            Bucket: LOGGING_BUCKET,
            Key: key,
            Body: JSON.stringify(logData, null, 2),
            ContentType: 'application/json',
        }));
    }
    catch (error) {
        console.error('Error logging to S3:', error);
        // Don't fail the request if logging fails
    }
}
