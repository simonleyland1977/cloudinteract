import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

/**
 * Fiftysix CRM Schema
 * 
 * Contact: Lead/prospect information
 * Interaction: Activity logs (calls, emails, web visits)
 * Insight: AI-generated analysis and summaries
 */
const schema = a.schema({
  Account: a
    .model({
      name: a.string().required(),
      industry: a.string(),
      website: a.url(),
      tier: a.enum(['Enterprise', 'MidMarket', 'SMB', 'Startup']),
      annualRevenue: a.integer(),

      // Relationships
      contacts: a.hasMany('Contact', 'accountId'),
      opportunities: a.hasMany('Opportunity', 'accountId'),
    })
    .authorization((allow) => [allow.authenticated()]),

  Opportunity: a
    .model({
      title: a.string().required(),
      amount: a.float(),
      stage: a.enum(['New', 'Qualification', 'Proposal', 'Negotiation', 'ClosedWon', 'ClosedLost']),
      closeDate: a.date(),
      probability: a.integer(),

      accountId: a.id(),
      account: a.belongsTo('Account', 'accountId'),
    })
    .authorization((allow) => [allow.authenticated()]),

  Contact: a
    .model({
      email: a.email().required(),
      name: a.string(),
      phone: a.phone(),
      company: a.string(),
      linkedInUrl: a.url(),
      status: a.enum(['new', 'qualified', 'engaged', 'converted']),
      source: a.string(), // Where they came from (landing page, form, etc)
      createdAt: a.datetime(),

      // Relationships
      accountId: a.id(),
      account: a.belongsTo('Account', 'accountId'),
      interactions: a.hasMany('Interaction', 'contactId'),
      insights: a.hasMany('Insight', 'contactId'),
    })
    .authorization((allow) => [allow.authenticated()]),

  Interaction: a
    .model({
      contactId: a.id().required(),
      contact: a.belongsTo('Contact', 'contactId'),
      type: a.enum(['call', 'email', 'web_visit', 'form_submit']),
      description: a.string(),
      metadata: a.json(), // Flexible storage for call recordings, URLs, etc.
      timestamp: a.datetime(),
    })
    .authorization((allow) => [allow.authenticated()]),

  Insight: a
    .model({
      contactId: a.id().required(),
      contact: a.belongsTo('Contact', 'contactId'),
      summary: a.string(), // AI-generated lead summary
      sentiment: a.enum(['positive', 'neutral', 'negative']),
      score: a.integer(), // Lead quality score (0-100)
      nextAction: a.string(), // Suggested next step
      generatedAt: a.datetime(),
    })
    .authorization((allow) => [allow.authenticated()]),

  // Custom Type for AI Response
  InsightResult: a.customType({
    sentiment: a.enum(['positive', 'neutral', 'negative']),
    nextAction: a.string(),
    summary: a.string(),
    score: a.integer(),
    generatedAt: a.datetime()
  }),

  // Custom Query
  generateInsight: a
    .query()
    .arguments({
      contactId: a.id().required(),
      name: a.string(),
      company: a.string(),
      interactions: a.json() // Pass recent interaction history if needed
    })
    .returns(a.ref('InsightResult'))
    .authorization((allow) => [allow.authenticated()])
    .handler(a.handler.function('generateInsight')),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});
