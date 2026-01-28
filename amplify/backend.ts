import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { Function, FunctionUrlAuthType, Runtime, Code } from 'aws-cdk-lib/aws-lambda';
import { HttpMethod } from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  auth,
  data,
});

// Add Lambda function for creating CRM contacts from public form submissions
const createContactFn = new Function(backend.stack, 'CreateContactFunction', {
  runtime: Runtime.NODEJS_18_X,
  handler: 'index.handler',
  code: Code.fromAsset(path.join(__dirname, '../lambda/create-contact')),
  environment: {
    APPSYNC_API_ENDPOINT: backend.data.resources.graphqlApi.attrGraphQlUrl,
    AWS_REGION: backend.stack.region,
  },
});

// Grant the Lambda function permission to access AppSync
backend.data.resources.graphqlApi.grantMutation(createContactFn, 'createContact', 'createInteraction');

// Create Function URL for public access
const fnUrl = createContactFn.addFunctionUrl({
  authType: FunctionUrlAuthType.NONE,
  cors: {
    allowedOrigins: ['*'],
    allowedMethods: [HttpMethod.POST, HttpMethod.OPTIONS],
    allowedHeaders: ['Content-Type'],
  },
});

// Export the Function URL
backend.addOutput({
  custom: {
    createContactFunctionUrl: fnUrl.url,
  },
});
