const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");

const base = require("./webpack.base");

module.exports = {
  ...base,
  target: "node",
  entry: "./src/server/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },

  externals: [webpackNodeExternals()],
};
