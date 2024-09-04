# Daniel Chong Marama Exercise

This is an exercise for Marama Labs with two objective

1. React app with recursive folder structure
2. API to serve the data

## Tech Stack

1. Web: [Vite](https://vitejs.dev/) with React in TypeScript
2. API: [Hono](https://hono.dev/). This was chosen because AWS API Gateway V2 was causing internal server errors mainly due to permission issues.

## Get started

This is build using [SST](https://sst.dev/) and the user should have AWS account setup. Login to AWS through CLI before starting.

```bash
aws sso login
```

The following command will setup of the development environment by creating a serverless lambda function to serve the API and S3 bucket to serve the website.

```bash
npx sst dev
```

`sst deploy` will deploy the website.

```bash
npx sst deploy
```

## Usage

This template uses [npm Workspaces](https://docs.npmjs.com/cli/v8/using-npm/workspaces). It has 3 packages to start with and you can add more it.

1. `core/`

   This is for any shared code. It's defined as modules. For example, there's the `Example` module.

   ```ts
   export module Example {
     export function hello() {
       return "Hello, world!";
     }
   }
   ```

   That you can use across other packages using.

   ```ts
   import { Example } from "@aws-monorepo/core/example";

   Example.hello();
   ```

2. `functions/`

   This is for your Lambda functions and it uses the `core` package as a local dependency.

3. `website/`

   This is where the web frontend lives

### Infrastructure

The `infra/` directory allows you to logically split the infrastructure of your app into separate files. This can be helpful as your app grows.

We have an `api.ts`, and `website.ts`. These export the created resources. And are imported in the `sst.config.ts`.
