import { awscdk, javascript } from "projen";

const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: "2.202.0",
  defaultReleaseBranch: "main",
  depsUpgradeOptions: { workflow: false },
  eslint: true,
  minNodeVersion: "22.16.0",
  name: "cdk-aws-appsync-events",
  packageManager: javascript.NodePackageManager.PNPM,
  pnpmVersion: "10",
  prettier: true,
  projenrcTs: true,

  deps: [
    "@aws-lambda-powertools/event-handler",
    "@aws-lambda-powertools/logger",
    "@types/aws-lambda",
  ],
});

project.synth();
