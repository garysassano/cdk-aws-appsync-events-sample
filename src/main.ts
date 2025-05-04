import { App } from "aws-cdk-lib";
import { MyStack } from "./stacks/my-stack";

const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new App();

new MyStack(app, "cdk-aws-appsync-events-dev", { env: devEnv });

app.synth();
