import { defineAuth } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  userAttributes: {
    'custom:employeeRole': {
      dataType: 'String',
      mutable: true,
    },
    'custom:isAwsEmployee': {
      dataType: 'String',
      mutable: true,
    },
    'custom:verifiedAt': {
      dataType: 'String',
      mutable: true,
    },
  },
});
