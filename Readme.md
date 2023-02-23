# Vite NPX in node_modules issue

In this repo, trying to persuade Vite to compile a jsx file located inside a node_modules file. In vite.config.js, `optimizeDeps.include` is `['jsx-dep']`, but this has no effect.

Vite outputs an error message saying to change the file extension of the included file to 'jsx', but the file already has this extension.

Steps to reproduce:

- Clone this repo
- `npm install`
- `git checkout .`  -- re-adds the `jsx-dep` dep inside node_modules
- `npx vite`

Error message:

```
sx extension.
18:46:07 [vite] Internal server error: Failed to parse source for import analysis because the content contains invalid JS syntax. If you are using JSX, make sure to name the file with the .jsx or .tsx extension.
  Plugin: vite:import-analysis
  File: /Users/ben/Desktop/vite-jsx-test/node_modules/jsx-dep/index.jsx:5:11
  3  |      <div>
  4  |        Hello
  5  |      </div>
     |            ^
  6  |    )
  7  |  }
      at formatError (file:///Users/ben/Desktop/vite-jsx-test/node_modules/vite/dist/node/chunks/dep-ca21228b.js:41418:46)
      at TransformContext.error (file:///Users/ben/Desktop/vite-jsx-test/node_modules/vite/dist/node/chunks/dep-ca21228b.js:41414:19)
      at TransformContext.transform (file:///Users/ben/Desktop/vite-jsx-test/node_modules/vite/dist/node/chunks/dep-ca21228b.js:39641:22)
      at async Object.transform (file:///Users/ben/Desktop/vite-jsx-test/node_modules/vite/dist/node/chunks/dep-ca21228b.js:41685:30)
      at async loadAndTransform (file:///Users/ben/Desktop/vite-jsx-test/node_modules/vite/dist/node/chunks/dep-ca21228b.js:39479:29)
```
