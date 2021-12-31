# Example Discord Interactions Endpoint

Following example endpoint has been made to check and debug discord interactions url functionality.

It's based on `aws-nodejs` template and `serverless` library.

For Discord documentation please check:

- https://discord.com/developers/docs/interactions/receiving-and-responding#receiving-an-interaction
- https://discord.com/developers/docs/interactions/receiving-and-responding#security-and-authorization

## Deployment

I strongly suggest to use `nvm` for node version managment and `assume-role` for AWS credentails managment.
You must have this pre-installed and you need AWS account obviously.

In order to deploy the endpoint simple use: `npx sls deploy -s dev -r eu-west-1`.

**IMPORTANT!!!**

Update your `APPLICATION_PUBLIC_KEY` before deployment!

## Error

When you add in Discord to your Application `Interactions Endpoint URL` and you get an error:

```bash
Validation errors:
interactions_endpoint_url: The specified interactions endpoint URL could not be verified.
```

That means Discord tried to verify your endpoint and it didn't receive expected response.

This Example Discord Interactions Endpoint will solve the issue.
