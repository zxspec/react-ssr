# I'm trying to build SSR based on @loadable/components

Biggest problem for me is to understand and explain babel+webpack configuration magic. This document is a list of short explanations helping to solve the problem.  
Original code is published [here](https://github.com/gregberge/loadable-components/tree/main/examples/server-side-rendering)

## Main steps with description

- added `Express` server
- added `nodemon` to automatically restart server when changed

### ES modules on Server Side

- added `@babel/core` for code compilation
- added `@babel/cli` allowing to compile from CLI and thus test compilation results
- added `@babel/preset-env` allowing to use latest JS and ES modules
- added Babel configuration
  - use `npx babel ./src/server/index.js` to test compilation results
- added `@babel/node` which the same as Node CLI but it can compile nodejs-code with Babel presets and plugins before running it.
- added nodemon config with option `"execMap": { "js": "babel-node" }` . It forces nodemon to use babel-node after any change in monitored js-files.
- added `dev` script to start dev server

### default GET handler

- added handler default `app.get("*", () => {})`
- serve static content from `public` folder

### Create client-side react application

- added `react` and `react-dom`
- added `@babel/preset-react` to support react syntax and JSX
- added `client/main.js` rendering `<div>` into `#react-root` DOM container

  - use `npx babel src/client/main.js` to test compilation results

  #### add webpack to build client-side application

  - added `webpack` allowing to build application bundle
  - added `webpack-cli` allowing to initiate build from CLI
  - added `babel-loader` allowing webpack to transform source files with Babel
  - added initial webpack configuration `webpack.client.js`
    - use `npx webpack --mode=development --config=webpack.client.js` to test initial webpack configuration
  - added `build:dev` and `build:prod` scripts

#### add <App/> component

- added `<App/>` component
- added styles for `<App />` component
- added `css-loader` allowing to collect CSS from all the css files referenced in your application and put it into a string.
- added `MiniCssExtractPlugin` extracting CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.
  - use `build:dev` to check that `main.css` is emmited to `public/dist` folder

### render client-side application on the markup returned from server

- added script tag to load `bundle.js` and thus render SPA
- added link tag to load `main.css`

#### improve build

- renamed `dev` to `dev:server`
- renamed `build:dev` to `dev:build-client`
- added `--watch` flag to `build:dev`
- added `npm-run-all` allowing to run npm script in parallel
- added `dev` script allowing to start server and build client-side app in development mode

### add application components

- render `<A/>`, `<B/>`, `<C/>` components inside `<App/>`

### add Server Side Rendering

- added `contentRenderer` helper responsible for content rendering functionality
- update `contentRenderer` to render `<App/>`

#### webpack for server-side code

- added initial webpack configuration `webpack.server.js`, since server-side code needs to render React code
  - use `npx webpack --config=webpack.server.js` to test configuration
- updated bundle path to `../public` in `index.js`
- added `dev:build-server`
- updated `dev:server` to automatically restart a server after `build` folder changed

#### webpack optimisations

- added `webpack-node-externals` allowing to exclude `node_modules` from bundling
- extracted common webpack configuration into `webpack.base.js`
- removed `babel-node`since webpack is responsible for code transormation

#### modify client-side app

- changed `render` to `hydrate`; it allows to attach events to a markup received from a server without rebuilding DOM from scratch

### add loadable components on front-end

- converted componets `<A/>` and `<B/>` into loadable

### add loadable components for SSR

follow instructions from [original documentation](https://loadable-components.com/docs/server-side-rendering/)

- added `@loadable/server` which adds SSR support and provides access to `ChunkExtractor`
- added `@loadable/babel-plugin` which adds SSR support and automatic chunk names.
  - added `@loadable/babel-plugin` to babel config
- added `@loadable/webpack-plugin` loadable-stats.json
  - added `@loadable/webpack-plugin` to webpack config
- added `clean` script, used to clean up previous build artifacts

#### setup ChunkExtractor server-side

- instantiated `chunkExtractor` and passed as parameter to `contentRenderer`

##### content renderer

- collect information about used styles from `chunkExtractor`
- inject styles into response
- removed hardcoded link to `dist/main.css`
- collect information about used scripts from `chunkExtractor`
- inject scripts into response
- removed hardcoded link to `dist/bundle.js`

##### update server-side webpack config

- added `publicPath: "/dist/"` output option, it required to generate same asset urls on server- and client- sides

#### add loadableReady client-side

- wrap application rendering in `loadableReady(() => {. . .})`, it wait for all loadable components to be loaded.  
  This method is required because SSR is being used.

### add react router

- added `Letter` component rendering `<A/>`, `<B/>`, `<C/>` components
- added `page` folder for page components
- added `HomePage` component which renders `Letters` component
- added `OtherPage` stub component

#### setup react router

- added `react-router-dom`
- added `Routes` component which will be used for both, front- and back- ends
- added route `/` for `HomePage`
- added route `/other` for `OtherPage`

#### add react routing on server side

#### contentRenderer

- render `<Routes/>` component wrapped in `<StaticRouter/>` instead of `<App/>`
- added `location` mandatory parameter to the `<StaticRouter/>`; based on the `location` parameter router decides what `<Route/>` to render
