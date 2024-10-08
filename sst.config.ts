/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "marama-exercise",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const api = await import("./infra/api");
    const website = await import("./infra/website");

    return {
      api: api.dataApi.url,
      webUrl: website.myWebsite.url,
    };
  },
});
