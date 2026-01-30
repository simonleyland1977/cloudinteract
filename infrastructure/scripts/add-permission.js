const { LambdaClient, AddPermissionCommand } = require("@aws-sdk/client-lambda");

const client = new LambdaClient({ region: "us-east-1" });

async function run() {
    try {
        const command = new AddPermissionCommand({
            FunctionName: "fiftysix-bedrock-integration-dev",
            StatementId: "AllowConnectInvoke",
            Action: "lambda:InvokeFunction",
            Principal: "connect.amazonaws.com",
            SourceArn: "arn:aws:connect:us-east-1:117204716049:instance/67957efe-f12b-4b64-8d8d-8ee307d77b06"
        });

        const response = await client.send(command);
        console.log("Success:", response);
    } catch (err) {
        if (err.name === 'ResourceConflictException') {
            console.log("Permission already exists.");
        } else {
            console.error("Error:", err);
            process.exit(1);
        }
    }
}

run();
