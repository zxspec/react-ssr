const path = require("path");

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === "development";

module.exports = {
  target: "web",
  mode: isDev ? "development" : "production",
  entry: "./src/client/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public/dist"),
  },

  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".json", ".jsx"],
  },
};
