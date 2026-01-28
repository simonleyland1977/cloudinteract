# CRM Contact Creation Lambda

This Lambda function handles public contact form submissions and creates contacts in the CRM.

## Deployment

### Option 1: Deploy via Amplify (Recommended)

Add this function to your Amplify backend:

```bash
cd /Users/simonleyland/Documents/fiftysix
npx ampx sandbox
```

Then add the function to `amplify/backend.ts`:

```typescript
import { defineBackend } from '@aws-amplify/backend';
import { Function } from 'aws-cdk-lib/aws-lambda';
import { data } from './data/resource';

const backend = defineBackend({
  data,
});

// Add Lambda function
const createContactFn = new Function(backend.stack, 'CreateContactFunction', {
  runtime: Runtime.NODEJS_18_X,
  handler: 'index.handler',
  code: Code.fromAsset('lambda/create-contact'),
  environment: {
    APPSYNC_API_ENDPOINT: backend.data.graphqlUrl,
  },
});

// Grant permissions to AppSync
backend.data.grantAccess(createContactFn);

// Create Function URL for public access
const fnUrl = createContactFn.addFunctionUrl({
  authType: FunctionUrlAuthType.NONE,
  cors: {
    allowedOrigins: ['*'],
    allowedMethods: [HttpMethod.POST],
  },
});
```

### Option 2: Manual Deployment

1. Install dependencies:
```bash
cd lambda/create-contact
npm install
```

2. Create deployment package:
```bash
zip -r function.zip .
```

3. Deploy via AWS CLI:
```bash
aws lambda create-function \
  --function-name create-crm-contact \
  --runtime nodejs18.x \
  --role arn:aws:iam::ACCOUNT_ID:role/lambda-execution-role \
  --handler index.handler \
  --zip-file fileb://function.zip \
  --environment Variables={APPSYNC_API_ENDPOINT=YOUR_APPSYNC_ENDPOINT}
```

4. Create Function URL:
```bash
aws lambda create-function-url-config \
  --function-name create-crm-contact \
  --auth-type NONE \
  --cors AllowOrigins="*",AllowMethods="POST"
```

## Update Contact Form

Once deployed, update `/src/app/contact/page.tsx` to use the Lambda URL:

```typescript
const response = await fetch('YOUR_LAMBDA_FUNCTION_URL', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
});
```

## Environment Variables

- `APPSYNC_API_ENDPOINT`: Your Amplify Data GraphQL endpoint
- `AWS_REGION`: AWS region (default: us-east-1)

## IAM Permissions Required

The Lambda execution role needs:
- `appsync:GraphQL` permission for your AppSync API
- `logs:CreateLogGroup`, `logs:CreateLogStream`, `logs:PutLogEvents` for CloudWatch
