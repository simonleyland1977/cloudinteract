'use client';

import { PortalHeader } from '@/components/portal/PortalHeader';
import { RoleSwitcher } from '@/components/portal/RoleSwitcher';
import { Code, Layers, GitBranch, FileCode, Database, Lock, Zap, Network } from 'lucide-react';

export default function SolutionArchitectsPage() {
    return (
        <div className="min-h-screen bg-slate-950">
            <PortalHeader />

            <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Solution Architect Resources
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl">
                            Technical architecture, implementation guides, and deep dives into building agentic AI solutions in the contact center.
                        </p>
                    </div>

                    {/* Role Switcher */}
                    <div className="mb-12">
                        <RoleSwitcher currentRole="solution-architect" />
                    </div>

                    {/* Reference Architecture */}
                    <section className="mb-12">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="p-2 bg-blue-600/20 rounded-lg">
                                <Layers size={24} className="text-blue-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Reference Architecture</h2>
                        </div>

                        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-blue-400 font-semibold mb-4 text-lg">Agentic AI Contact Center Architecture</h3>
                                    <div className="bg-slate-950/50 border border-slate-700 rounded-lg p-6">
                                        <div className="space-y-4 text-slate-300 text-sm font-mono">
                                            <div className="flex items-center space-x-2">
                                                <span className="text-green-400">┌─</span>
                                                <span className="text-orange-400 font-semibold">Customer Channel Layer</span>
                                            </div>
                                            <div className="pl-4 space-y-1">
                                                <div>│  ├─ Voice (PSTN/SIP)</div>
                                                <div>│  ├─ Chat Widget (Website)</div>
                                                <div>│  ├─ SMS/WhatsApp</div>
                                                <div>│  └─ Social Media</div>
                                            </div>
                                            <div className="flex items-center space-x-2 pt-2">
                                                <span className="text-green-400">├─</span>
                                                <span className="text-orange-400 font-semibold">Amazon Connect (Contact Center)</span>
                                            </div>
                                            <div className="pl-4 space-y-1">
                                                <div>│  ├─ Contact Flows</div>
                                                <div>│  ├─ Queue Management</div>
                                                <div>│  ├─ IVR/Routing</div>
                                                <div>│  └─ Agent Desktop</div>
                                            </div>
                                            <div className="flex items-center space-x-2 pt-2">
                                                <span className="text-green-400">├─</span>
                                                <span className="text-orange-400 font-semibold">AI Agent Layer (Amazon Lex)</span>
                                            </div>
                                            <div className="pl-4 space-y-1">
                                                <div>│  ├─ Intent Recognition</div>
                                                <div>│  ├─ Slot Filling</div>
                                                <div>│  ├─ Session Management</div>
                                                <div>│  └─ Lambda Fulfillment</div>
                                            </div>
                                            <div className="flex items-center space-x-2 pt-2">
                                                <span className="text-green-400">├─</span>
                                                <span className="text-orange-400 font-semibold">LLM/GenAI Layer (Amazon Bedrock)</span>
                                            </div>
                                            <div className="pl-4 space-y-1">
                                                <div>│  ├─ Claude/Titan Models</div>
                                                <div>│  ├─ RAG (Retrieval Augmented Generation)</div>
                                                <div>│  ├─ Knowledge Base Integration</div>
                                                <div>│  └─ Prompt Engineering</div>
                                            </div>
                                            <div className="flex items-center space-x-2 pt-2">
                                                <span className="text-green-400">├─</span>
                                                <span className="text-orange-400 font-semibold">Analytics Layer</span>
                                            </div>
                                            <div className="pl-4 space-y-1">
                                                <div>│  ├─ Contact Lens (Real-time)</div>
                                                <div>│  ├─ Amazon Comprehend (NLP)</div>
                                                <div>│  ├─ QuickSight (Dashboards)</div>
                                                <div>│  └─ CloudWatch (Monitoring)</div>
                                            </div>
                                            <div className="flex items-center space-x-2 pt-2">
                                                <span className="text-green-400">└─</span>
                                                <span className="text-orange-400 font-semibold">Integration Layer</span>
                                            </div>
                                            <div className="pl-4 space-y-1">
                                                <div>   ├─ CRM (Salesforce/Dynamics)</div>
                                                <div>   ├─ Ticketing Systems</div>
                                                <div>   ├─ Business Logic (Lambda)</div>
                                                <div>   └─ Database (DynamoDB/RDS)</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="bg-slate-950/50 border border-slate-700 rounded-lg p-4">
                                        <div className="text-blue-400 font-semibold mb-2 text-sm">Ingress</div>
                                        <div className="text-slate-300 text-xs">Customer enters through any channel, routed via Amazon Connect</div>
                                    </div>
                                    <div className="bg-slate-950/50 border border-slate-700 rounded-lg p-4">
                                        <div className="text-blue-400 font-semibold mb-2 text-sm">Processing</div>
                                        <div className="text-slate-300 text-xs">AI agents handle intent, Bedrock generates responses, Lambda executes business logic</div>
                                    </div>
                                    <div className="bg-slate-950/50 border border-slate-700 rounded-lg p-4">
                                        <div className="text-blue-400 font-semibold mb-2 text-sm">Response</div>
                                        <div className="text-slate-300 text-xs">Natural language response via Polly, with optional human handoff</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Implementation Guide */}
                    <section className="mb-12">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="p-2 bg-purple-600/20 rounded-lg">
                                <GitBranch size={24} className="text-purple-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Implementation Guide</h2>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                                <h3 className="text-purple-400 font-semibold mb-4">Step 1: Amazon Connect Instance Setup</h3>
                                <div className="space-y-3 text-slate-300 text-sm">
                                    <div className="bg-slate-950/50 rounded p-3 font-mono text-xs overflow-x-auto">
                                        <span className="text-slate-500"># Create Connect instance via AWS Console or IaC</span><br />
                                        <span className="text-blue-400">aws connect create-instance</span> \<br />
                                        <span className="pl-4">--identity-management-type SAML \</span><br />
                                        <span className="pl-4">--instance-alias my-contact-center \</span><br />
                                        <span className="pl-4">--inbound-calls-enabled \</span><br />
                                        <span className="pl-4">--outbound-calls-enabled</span>
                                    </div>
                                    <ul className="space-y-1 pl-4">
                                        <li>• Configure authentication (SAML 2.0 recommended for enterprise)</li>
                                        <li>• Set up phone numbers and claim DID</li>
                                        <li>• Enable data streaming to Kinesis for analytics</li>
                                        <li>• Configure hours of operation and queues</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                                <h3 className="text-purple-400 font-semibold mb-4">Step 2: Amazon Lex Bot Configuration</h3>
                                <div className="space-y-3 text-slate-300 text-sm">
                                    <div className="bg-slate-950/50 rounded p-3 font-mono text-xs overflow-x-auto">
                                        <span className="text-slate-500"># Define bot with multiple intents</span><br />
                                        <span className="text-orange-400">Intents:</span><br />
                                        <span className="pl-2">- CheckOrderStatus</span><br />
                                        <span className="pl-2">- ScheduleAppointment</span><br />
                                        <span className="pl-2">- ResetPassword</span><br />
                                        <span className="pl-2">- BillingInquiry</span><br />
                                        <span className="pl-2">- SpeakToAgent (fallback)</span>
                                    </div>
                                    <ul className="space-y-1 pl-4">
                                        <li>• Define slots for each intent (order ID, date, account number)</li>
                                        <li>• Configure slot validation with Lambda</li>
                                        <li>• Set up confirmation prompts and error handling</li>
                                        <li>• Enable conversation logs for training</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                                <h3 className="text-purple-400 font-semibold mb-4">Step 3: Amazon Bedrock Integration</h3>
                                <div className="space-y-3 text-slate-300 text-sm">
                                    <div className="bg-slate-950/50 rounded p-3 font-mono text-xs overflow-x-auto">
                                        <span className="text-slate-500"># Lambda function to call Bedrock</span><br />
                                        <span className="text-blue-400">import</span> boto3<br />
                                        <br />
                                        bedrock = boto3.client(<span className="text-green-400">'bedrock-runtime'</span>)<br />
                                        <br />
                                        <span className="text-blue-400">def</span> <span className="text-yellow-400">invoke_bedrock</span>(prompt, context):<br />
                                        <span className="pl-4">response = bedrock.invoke_model(</span><br />
                                        <span className="pl-8">modelId=<span className="text-green-400">'anthropic.claude-3-sonnet'</span>,</span><br />
                                        <span className="pl-8">body=json.dumps({'{'})</span><br />
                                        <span className="pl-12"><span className="text-green-400">'prompt'</span>: f<span className="text-green-400">"\\n\\nHuman: {'{'}context{'}'} {'{'}prompt{'}'}\\n\\nAssistant:"</span>,</span><br />
                                        <span className="pl-12"><span className="text-green-400">'max_tokens'</span>: 500</span><br />
                                        <span className="pl-8">{'}'}))</span><br />
                                        <span className="pl-4"><span className="text-blue-400">return</span> json.loads(response[<span className="text-green-400">'body'</span>].read())</span>
                                    </div>
                                    <ul className="space-y-1 pl-4">
                                        <li>• Create Knowledge Base with customer documentation (Amazon Kendra)</li>
                                        <li>• Implement RAG pattern for context-aware responses</li>
                                        <li>• Set up guardrails to prevent hallucinations</li>
                                        <li>• Configure model parameters (temperature, top_p)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                                <h3 className="text-purple-400 font-semibold mb-4">Step 4: Contact Flow Design</h3>
                                <div className="space-y-3 text-slate-300 text-sm">
                                    <ul className="space-y-2 pl-4">
                                        <li>• <strong>Entry Point:</strong> Set greeting and language preference</li>
                                        <li>• <strong>AI Agent Block:</strong> Connect to Lex bot for intent handling</li>
                                        <li>• <strong>Sentiment Detection:</strong> Use Contact Lens for real-time analysis</li>
                                        <li>• <strong>Escalation Logic:</strong> Route to human agent based on confidence score</li>
                                        <li>• <strong>CRM Integration:</strong> Invoke Lambda to fetch/update customer data</li>
                                        <li>• <strong>Voicemail/Callback:</strong> Handle off-hours and queue overflow</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Best Practices */}
                    <section className="mb-12">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="p-2 bg-green-600/20 rounded-lg">
                                <Zap size={24} className="text-green-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Best Practices</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                                <div className="flex items-center space-x-2 mb-4">
                                    <Zap size={20} className="text-green-400" />
                                    <h3 className="text-white font-semibold">Performance Optimization</h3>
                                </div>
                                <ul className="space-y-2 text-slate-300 text-sm">
                                    <li>• <strong>Lambda Warm-up:</strong> Use provisioned concurrency for critical functions</li>
                                    <li>• <strong>Caching:</strong> Implement ElastiCache for frequently accessed data</li>
                                    <li>• <strong>Bedrock Latency:</strong> Balance model size vs. response time (Claude Instant vs. Sonnet)</li>
                                    <li>• <strong>Async Processing:</strong> Use Step Functions for long-running workflows</li>
                                    <li>• <strong>Connection Pooling:</strong> Reuse database connections in Lambda</li>
                                </ul>
                            </div>

                            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                                <div className="flex items-center space-x-2 mb-4">
                                    <Lock size={20} className="text-yellow-400" />
                                    <h3 className="text-white font-semibold">Security & Compliance</h3>
                                </div>
                                <ul className="space-y-2 text-slate-300 text-sm">
                                    <li>• <strong>Data Encryption:</strong> At-rest (KMS) and in-transit (TLS 1.2+)</li>
                                    <li>• <strong>IAM Policies:</strong> Principle of least privilege for all services</li>
                                    <li>• <strong>PII Handling:</strong> Use Contact Lens redaction for sensitive data</li>
                                    <li>• <strong>Audit Logging:</strong> Enable CloudTrail for all API calls</li>
                                    <li>• <strong>VPC Isolation:</strong> Run Lambda in private subnets for sensitive operations</li>
                                </ul>
                            </div>

                            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                                <div className="flex items-center space-x-2 mb-4">
                                    <Network size={20} className="text-blue-400" />
                                    <h3 className="text-white font-semibold">Scalability</h3>
                                </div>
                                <ul className="space-y-2 text-slate-300 text-sm">
                                    <li>• <strong>Auto-scaling:</strong> Amazon Connect scales automatically to traffic</li>
                                    <li>• <strong>Queue Management:</strong> Implement callback and estimated wait time</li>
                                    <li>• <strong>Load Testing:</strong> Use AWS Load Testing for peak traffic simulation</li>
                                    <li>• <strong>Multi-Region:</strong> Deploy across regions for global availability</li>
                                    <li>• <strong>DynamoDB:</strong> Use on-demand capacity for unpredictable workloads</li>
                                </ul>
                            </div>

                            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                                <div className="flex items-center space-x-2 mb-4">
                                    <Database size={20} className="text-purple-400" />
                                    <h3 className="text-white font-semibold">Data Strategy</h3>
                                </div>
                                <ul className="space-y-2 text-slate-300 text-sm">
                                    <li>• <strong>Data Lake:</strong> Stream to S3 via Kinesis Firehose for analytics</li>
                                    <li>• <strong>Real-time:</strong> Use Kinesis Data Streams for immediate processing</li>
                                    <li>• <strong>Historical:</strong> Store in S3 with Athena for ad-hoc queries</li>
                                    <li>• <strong>Retention:</strong> Implement lifecycle policies for cost optimization</li>
                                    <li>• <strong>ML Training:</strong> Export conversation data for model fine-tuning</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Code Examples */}
                    <section className="mb-12">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="p-2 bg-orange-600/20 rounded-lg">
                                <FileCode size={24} className="text-orange-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Code Examples</h2>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                                <h3 className="text-orange-400 font-semibold mb-4">Lambda Fulfillment Handler (Python)</h3>
                                <div className="bg-slate-950/50 rounded-lg p-4 overflow-x-auto">
                                    <pre className="text-xs font-mono text-slate-300">
                                        {`import json
import boto3
from datetime import datetime

bedrock = boto3.client('bedrock-runtime')
dynamodb = boto3.resource('dynamodb')

def lambda_handler(event, context):
    """
    Lex bot fulfillment function
    Handles multiple intents with Bedrock fallback
    """
    intent_name = event['sessionState']['intent']['name']
    slots = event['sessionState']['intent']['slots']
    
    # Route to appropriate handler
    if intent_name == 'CheckOrderStatus':
        return check_order_status(slots)
    elif intent_name == 'ScheduleAppointment':
        return schedule_appointment(slots)
    else:
        # Fallback to Bedrock for unhandled queries
        return handle_with_bedrock(event)

def check_order_status(slots):
    """Check order status from database"""
    order_id = slots['OrderID']['value']['interpretedValue']
    
    # Query DynamoDB
    table = dynamodb.Table('Orders')
    response = table.get_item(Key={'order_id': order_id})
    
    if 'Item' in response:
        status = response['Item']['status']
        return {
            'sessionState': {
                'dialogAction': {'type': 'Close'},
                'intent': {'state': 'Fulfilled'}
            },
            'messages': [{
                'contentType': 'PlainText',
                'content': f'Your order {order_id} is {status}.'
            }]
        }
    else:
        return {
            'sessionState': {
                'dialogAction': {'type': 'Close'},
                'intent': {'state': 'Failed'}
            },
            'messages': [{
                'contentType': 'PlainText',
                'content': 'Order not found. Let me connect you to an agent.'
            }]
        }

def handle_with_bedrock(event):
    """Use Bedrock for complex queries"""
    user_input = event['inputTranscript']
    
    prompt = f"""\\n\\nHuman: You are a helpful customer service agent. 
Answer this question: {user_input}
\\n\\nAssistant:"""
    
    response = bedrock.invoke_model(
        modelId='anthropic.claude-3-sonnet-20240229-v1:0',
        body=json.dumps({
            'prompt': prompt,
            'max_tokens': 300,
            'temperature': 0.7
        })
    )
    
    result = json.loads(response['body'].read())
    ai_response = result['completion']
    
    return {
        'sessionState': {
            'dialogAction': {'type': 'Close'},
            'intent': {'state': 'Fulfilled'}
        },
        'messages': [{
            'contentType': 'PlainText',
            'content': ai_response
        }]
    }`}
                                    </pre>
                                </div>
                            </div>

                            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                                <h3 className="text-orange-400 font-semibold mb-4">CDK Infrastructure as Code (TypeScript)</h3>
                                <div className="bg-slate-950/50 rounded-lg p-4 overflow-x-auto">
                                    <pre className="text-xs font-mono text-slate-300">
                                        {`import * as cdk from 'aws-cdk-lib';
import * as connect from 'aws-cdk-lib/aws-connect';
import * as lex from 'aws-cdk-lib/aws-lex';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class ContactCenterStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Lambda for Lex bot fulfillment
    const fulfillmentFn = new lambda.Function(this, 'LexFulfillment', {
      runtime: lambda.Runtime.PYTHON_3_11,
      handler: 'index.lambda_handler',
      code: lambda.Code.fromAsset('lambda'),
      timeout: cdk.Duration.seconds(30),
      environment: {
        ORDERS_TABLE: 'CustomerOrders',
        BEDROCK_MODEL: 'anthropic.claude-3-sonnet'
      }
    });

    // Grant Bedrock permissions
    fulfillmentFn.addToRolePolicy(new iam.PolicyStatement({
      actions: ['bedrock:InvokeModel'],
      resources: ['*']
    }));

    // Create Lex Bot
    const bot = new lex.CfnBot(this, 'CustomerServiceBot', {
      name: 'customer-service-bot',
      roleArn: botRole.roleArn,
      dataPrivacy: { ChildDirected: false },
      idleSessionTTLInSeconds: 300,
      botLocales: [{
        localeId: 'en_US',
        nluIntentConfidenceThreshold: 0.4,
        // Define intents here
      }]
    });

    // Amazon Connect instance
    const instance = new connect.CfnInstance(this, 'ContactCenter', {
      identityManagementType: 'SAML',
      instanceAlias: 'my-contact-center',
      attributes: {
        inboundCalls: true,
        outboundCalls: true,
        contactflowLogs: true,
        autoResolveBestVoices: true
      }
    });
  }
}`}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Troubleshooting */}
                    <section>
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="p-2 bg-red-600/20 rounded-lg">
                                <Code size={24} className="text-red-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Common Issues & Troubleshooting</h2>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                                <div className="font-semibold text-white mb-2 flex items-center">
                                    <span className="text-red-400 mr-2">⚠</span>
                                    Lex bot not responding or timing out
                                </div>
                                <div className="text-slate-300 text-sm space-y-2">
                                    <div><strong className="text-orange-400">Cause:</strong> Lambda timeout or cold start</div>
                                    <div><strong className="text-green-400">Solution:</strong></div>
                                    <ul className="pl-6 space-y-1">
                                        <li>• Increase Lambda timeout to 30+ seconds</li>
                                        <li>• Enable provisioned concurrency for critical functions</li>
                                        <li>• Check CloudWatch logs for errors</li>
                                        <li>• Verify IAM permissions for Bedrock API calls</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                                <div className="font-semibold text-white mb-2 flex items-center">
                                    <span className="text-red-400 mr-2">⚠</span>
                                    High latency in AI responses
                                </div>
                                <div className="text-slate-300 text-sm space-y-2">
                                    <div><strong className="text-orange-400">Cause:</strong> Bedrock model choice or network latency</div>
                                    <div><strong className="text-green-400">Solution:</strong></div>
                                    <ul className="pl-6 space-y-1">
                                        <li>• Use Claude Instant instead of Sonnet for faster responses</li>
                                        <li>• Reduce max_tokens parameter</li>
                                        <li>• Deploy Lambda in same region as Bedrock</li>
                                        <li>• Implement response streaming for long outputs</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                                <div className="font-semibold text-white mb-2 flex items-center">
                                    <span className="text-red-400 mr-2">⚠</span>
                                    CRM integration failing
                                </div>
                                <div className="text-slate-300 text-sm space-y-2">
                                    <div><strong className="text-orange-400">Cause:</strong> Authentication or network connectivity</div>
                                    <div><strong className="text-green-400">Solution:</strong></div>
                                    <ul className="pl-6 space-y-1">
                                        <li>• Verify API credentials in Secrets Manager</li>
                                        <li>• Check VPC configuration and NAT gateway</li>
                                        <li>• Validate webhook endpoints and SSL certificates</li>
                                        <li>• Test with Postman/curl before Lambda integration</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                                <div className="font-semibold text-white mb-2 flex items-center">
                                    <span className="text-red-400 mr-2">⚠</span>
                                    Contact Lens not capturing analytics
                                </div>
                                <div className="text-slate-300 text-sm space-y-2">
                                    <div><strong className="text-orange-400">Cause:</strong> Feature not enabled or IAM permissions</div>
                                    <div><strong className="text-green-400">Solution:</strong></div>
                                    <ul className="pl-6 space-y-1">
                                        <li>• Enable Contact Lens in Amazon Connect instance settings</li>
                                        <li>• Configure contact flow to enable recording</li>
                                        <li>• Verify S3 bucket permissions for stored recordings</li>
                                        <li>• Check Kinesis stream for real-time analytics</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
