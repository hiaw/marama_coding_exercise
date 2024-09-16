import { dataApi } from "./api";

export const myWebsite = new sst.aws.StaticSite("MyWebsite", {
  path: "packages/website",
  build: {
    command: "bun run build",
    output: "dist",
  },
  invalidation: { wait: false },
  environment: {
    VITE_API_URL: dataApi.url,
  },
});
