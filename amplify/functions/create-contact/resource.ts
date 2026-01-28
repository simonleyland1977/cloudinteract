import { defineFunction } from '@aws-amplify/backend';

export const createContact = defineFunction({
    name: 'create-contact',
    entry: './handler.ts',
});
