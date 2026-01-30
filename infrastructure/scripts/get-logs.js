const { CloudWatchLogsClient, GetLogEventsCommand, DescribeLogStreamsCommand } = require("@aws-sdk/client-cloudwatch-logs");

const client = new CloudWatchLogsClient({ region: "us-east-1" });
const logGroupName = "/aws/lambda/fiftysix-bedrock-integration-dev";

async function run() {
    try {
        // 1. Get latest log stream
        const describeCommand = new DescribeLogStreamsCommand({
            logGroupName,
            orderBy: "LastEventTime",
            descending: true,
            limit: 1
        });
        const streams = await client.send(describeCommand);

        if (!streams.logStreams || streams.logStreams.length === 0) {
            console.log("No log streams found.");
            return;
        }

        const logStreamName = streams.logStreams[0].logStreamName;
        console.log(`Reading stream: ${logStreamName}`);

        // 2. Get log events
        const getEventsCommand = new GetLogEventsCommand({
            logGroupName,
            logStreamName,
            limit: 20
        });
        const events = await client.send(getEventsCommand);

        events.events.forEach(e => {
            console.log(`[${new Date(e.timestamp).toISOString()}] ${e.message}`);
        });

    } catch (err) {
        console.error("Error:", err);
    }
}

run();
