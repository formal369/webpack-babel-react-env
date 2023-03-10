const path = require("path");

module.exports = {
  mode: "development",  // production
  entry: path.resolve(__dirname, "./src/index.js"),
  module: {
    rules: [
      {
        test: /\.js|jsx|ts|tsx$/,
        exclude: /node_modules/,  // 昔のブラウザでも対応させる
        use: [
          {
            loader: "babel-loader",
          }
        ]
      }
    ],
  }
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    // import somefunction from "app/src/sample.js"
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
  }
};
