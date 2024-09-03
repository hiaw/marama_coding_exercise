export const myWebsite = new sst.aws.StaticSite("MyWebsite", {
  path: "packages/website",
  build: {
    command: "bun run build",
    output: "dist",
  },
});
