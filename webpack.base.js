const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const LoadablePlugin = require("@loadable/webpack-plugin");

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === "development";

module.exports = {
  mode: isDev ? "development" : "production",
  plugins: [new MiniCssExtractPlugin(), new LoadablePlugin()],
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
