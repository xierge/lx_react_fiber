/*
 * @Date: 2023-02-26 16:02:48
 * @LastEditors: lipengxi 2899952565@qq.com
 * @LastEditTime: 2023-02-26 17:04:02
 * @FilePath: /lx_react_fiber/webpack.config.client.js
 * @description:
 */
const path = require("path");

module.exports = {
  //   target: "web",
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
