const path = require("path");

const base = require("./webpack.base");

module.exports = {
  ...base,
  target: "web",
  entry: "./src/client/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public/dist"),
  },
};
