import { Data } from "@marama-exercise/core/data";
import {} from "sst";
import { Hono } from "hono";
import { handle } from "hono/aws-lambda";

const app = new Hono().get("/data", async (c) => {
  const data = await Data.fetchData();

  if (data && data.length > 0) {
    return c.json(data);
  } else {
    return c.notFound();
  }
});

export const handler = handle(app);
