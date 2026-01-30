const { S3Client, DeleteBucketCommand, ListObjectsV2Command, DeleteObjectsCommand } = require('@aws-sdk/client-s3');
const { STSClient, GetCallerIdentityCommand } = require('@aws-sdk/client-sts');

// Initialize clients
const region = 'us-east-1';
const s3 = new S3Client({ region });
const sts = new STSClient({ region });

async function emptyAndDeleteBucket(bucketName) {
    try {
        console.log(`Checking bucket: ${bucketName}...`);

        // Check if bucket exists/accessible
        // (ListObjects verifies access and existence)
        let objects;
        try {
            const listParams = { Bucket: bucketName };
            const data = await s3.send(new ListObjectsV2Command(listParams));
            objects = data.Contents;
        } catch (err) {
            if (err.name === 'NoSuchBucket') {
                console.log(`  bucket does not exist.`);
                return;
            }
            throw err;
        }

        // Delete objects if any
        if (objects && objects.length > 0) {
            console.log(`  deleting ${objects.length} objects...`);
            const deleteParams = {
                Bucket: bucketName,
                Delete: { Objects: objects.map(o => ({ Key: o.Key })) }
            };
            await s3.send(new DeleteObjectsCommand(deleteParams));
        }

        // Delete bucket
        console.log(`  deleting bucket...`);
        await s3.send(new DeleteBucketCommand({ Bucket: bucketName }));
        console.log(`  ✓ deleted.`);

    } catch (err) {
        console.error(`  Error processing bucket ${bucketName}:`, err.message);
    }
}

async function main() {
    try {
        const identity = await sts.send(new GetCallerIdentityCommand({}));
        const accountId = identity.Account;
        console.log(`Account ID: ${accountId}`);

        const buckets = [
            `fiftysix-recordings-dev-${accountId}`,
            `fiftysix-transcripts-dev-${accountId}`,
            `fiftysix-flow-logs-dev-${accountId}`,
            `fiftysix-bedrock-logs-dev-${accountId}`
        ];

        for (const bucket of buckets) {
            await emptyAndDeleteBucket(bucket);
        }

        console.log('Cleanup complete.');
    } catch (err) {
        console.error('Script failed:', err);
        process.exit(1);
    }
}

main();
