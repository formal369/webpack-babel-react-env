const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // production
  entry: path.resolve(__dirname, "./src/index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/, // 昔のブラウザでも対応させる
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    // import somefunction from "app/src/sample.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
  },
};
