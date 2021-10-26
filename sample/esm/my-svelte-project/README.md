## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running.

## Installing local library version for testing

To check if butter-js works fine you can use this Svelte application. Go to home directory of the repo and run:

```bash
npm run npm:local
```

This will start local npm registry, where you can deploy butter-js. Later execute the following scripts:

```bash
npm run npm:login
npm run publish:local
```

It will log in to local npm and publish package there. After that you need to install the library in Svelte app. Go to sample/esm/my-svelte-app and run

```bash
npm install butter-js@latest --registry http://localhost:4873
```
