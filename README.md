# I'm trying to build SSR based on @loadable/components

Biggest problem for me is to understand and explain babel+webpack configuration magic. This document is a list of short explanations helping to solve the problem.  
Original code is published [here](https://github.com/gregberge/loadable-components/tree/main/examples/server-side-rendering)

## Main steps with description

- added `Express`server
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
