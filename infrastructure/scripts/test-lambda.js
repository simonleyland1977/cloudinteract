const { LambdaClient, InvokeCommand } = require("@aws-sdk/client-lambda");

const client = new LambdaClient({ region: "us-east-1" });

async function run() {
    const payload = {
        Details: {
            ContactData: {
                ContactId: "test-contact-id",
                Attributes: {}
            },
            Parameters: {
                userUtterance: "Hello, testing",
                modelType: "sonic"
            }
        }
    };

    try {
        const command = new InvokeCommand({
            FunctionName: "fiftysix-bedrock-integration-dev",
            Payload: JSON.stringify(payload)
        });

        const response = await client.send(command);
        const responsePayload = new TextDecoder().decode(response.Payload);
        console.log("Response:", responsePayload);
    } catch (err) {
        console.error("Error:", err);
    }
}

run();
