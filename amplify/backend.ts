import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { createContact } from './functions/create-contact/resource';

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  auth,
  data,
  createContact,
});

// Grant the function permission to access the data resources
// The defineFunction pattern automatically adds the function to the stack
// We just need to add the env vars and permissions

// Pass the API ID to the Lambda function
backend.createContact.resources.lambda.addEnvironment(
  'APPSYNC_API_ID',
  backend.data.resources.graphqlApi.apiId
);

// Grant permissions to invoke AppSync
// We use the underlying IAM role to grant access to the AppSync API
backend.createContact.resources.lambda.addToRolePolicy({
  Effect: 'Allow',
  Action: ['appsync:GraphQL'],
  Resource: [`${backend.data.resources.graphqlApi.attrArn}/*`]
});

// Create Function URL for public access via the underlying Lambda resource
const fnUrl = backend.createContact.resources.lambda.addFunctionUrl({
  authType: 'NONE' as any, // Cast to avoid direct dependency on aws-cdk-lib types if mismatched
  cors: {
    allowedOrigins: ['*'],
    allowedMethods: ['POST', 'OPTIONS'] as any,
    allowedHeaders: ['Content-Type'],
  },
});

// Export the Function URL
backend.addOutput({
  custom: {
    createContactFunctionUrl: fnUrl.url,
  },
});
