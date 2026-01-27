
const { CognitoIdentityProviderClient, AdminCreateUserCommand, AdminSetUserPasswordCommand } = require("@aws-sdk/client-cognito-identity-provider");
const outputs = require("./amplify_outputs.json");

const USER_POOL_ID = outputs.auth.user_pool_id;
const REGION = outputs.auth.aws_region;
const USERNAME = "admin@fiftysix.ai";
const PASSWORD = "Password123!";

if (!USER_POOL_ID) {
    console.error("Error: Could not find User Pool ID in amplify_outputs.json");
    process.exit(1);
}

const client = new CognitoIdentityProviderClient({ region: REGION });

async function createTestUser() {
    try {
        console.log(`Creating user ${USERNAME} in pool ${USER_POOL_ID}...`);

        // 1. Create the user
        try {
            await client.send(new AdminCreateUserCommand({
                UserPoolId: USER_POOL_ID,
                Username: USERNAME,
                UserAttributes: [
                    { Name: "email", Value: USERNAME },
                    { Name: "email_verified", Value: "true" }
                ],
                MessageAction: "SUPPRESS" // Don't send welcome email
            }));
            console.log("User created successfully.");
        } catch (err) {
            if (err.name === 'UsernameExistsException') {
                console.log("User already exists, proceeding to set password...");
            } else {
                throw err;
            }
        }

        // 2. Set permanent password (skipping force change)
        await client.send(new AdminSetUserPasswordCommand({
            UserPoolId: USER_POOL_ID,
            Username: USERNAME,
            Password: PASSWORD,
            Permanent: true
        }));

        console.log("Password set successfully.");
        console.log("-----------------------------------------");
        console.log("✅ Credentials created:");
        console.log(`   Email:    ${USERNAME}`);
        console.log(`   Password: ${PASSWORD}`);
        console.log("-----------------------------------------");

    } catch (err) {
        console.error("Error creating test user:", err);
        process.exit(1);
    }
}

createTestUser(); 
