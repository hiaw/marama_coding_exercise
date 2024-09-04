export const dataApi = new sst.aws.Function("dataApi", {
  handler: "packages/functions/src/api.handler",
  memory: "256 MB",
  url: true,
});
