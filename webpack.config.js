const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "none",
  entry: {
    app: path.join(__dirname, "src", "index.tsx"),
  },
  target: "web",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        loader: "ts-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.(jpg|png|jpeg|bmp|gif|svg)?$/,
        loader: "file-loader",
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    inline: true,
    hot: true,
    historyApiFallback: true,
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
};
