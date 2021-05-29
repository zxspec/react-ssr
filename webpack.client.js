const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === "development";

module.exports = {
  target: "web",
  mode: isDev ? "development" : "production",
  entry: "./src/client/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public/dist"),
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".json", ".jsx"],
  },
};
