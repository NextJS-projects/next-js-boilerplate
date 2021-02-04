# NextJS boilerplate

## Prerequisites:
- nodeJS > 12.X.X

## Installing / Getting Started:
### Development:

- Clone repo => `git clone repo-url`
- `cd premium-line`
- Install dependencies => `yarn install`
- Start the development server => `yarn dev`

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Has the following setup:
- Redux, redux thunk, redux logger (development), redux dev tool (development)
- PropTypes
- Prettier (for code format)
- Font awesome 5
- SCSS
- Layout using bootstrap grid system
- 4 break points

## Notes regarding NextJs environment variables:
- By default all environment variables loaded through `.env.local` are only available in the Node.js environment, meaning they won't be exposed to the browser.
- In order to expose a variable to the browser you have to prefix the variable with `NEXT_PUBLIC_`. For example:

```bash
NEXT_PUBLIC_ANALYTICS_ID=abcdefghijk
```
-  In order to keep server-only secrets safe, Next.js replaces `process.env.*` with the correct values at build time. This means that `process.env` is not a standard JavaScript object, so you’re not able to use object destructuring. Environment variables must be referenced as e.g. `process.env.NEXT_PUBLIC_PUBLISHABLE_KEY`, not `const { NEXT_PUBLIC_PUBLISHABLE_KEY } = process.env`.

## Configuring Prettier

This build relies on [Prettier formatter](https://prettier.io/) to enforce a code style. You can find steps on how to setup prettier formatter with WebStorm/PhpStorm [here](https://prettier.io/docs/en/webstorm.html#running-prettier-on-save-using-file-watcher). Please refer to other tutorials if you are using a different IDE.

Notes:

- It's better to use the local `node_modules` version of prettier instead of a global one. This is to avoid version conflicts (in case the globally installed version does not match with the versions specified in `package.json`). So when setting up the file watcher when you follow the steps from the above link you can set `program` to `$ProjectFileDir$\node_modules\.bin\prettier` (warning this assumes that node_modules sits in the root of your project. This will need to change if your directory structure changes).
- You will have to create two file watchers. One for JSX files and one for JS files. The webpack build tools are already configured to work with `eslint` and `prettier`. The only thing needed is the two file watchers.

## Available Scripts

In the project directory, you can run:

### `yarn dev`
Starts a development server and watches for changes.

### `yarn build`
Builds the application for production usage.

### `yarn start`
Starts Next.js production server. **Note:** you need to run `yarn build` in order to be able to run `yarn start`

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
