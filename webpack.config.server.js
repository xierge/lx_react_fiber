/*
 * @Date: 2023-02-26 16:03:10
 * @LastEditors: lipengxi 2899952565@qq.com
 * @LastEditTime: 2023-02-26 16:49:29
 * @FilePath: /lx_react_fiber/webpack.config.server.js
 * @description:
 */

const path = require("path");

const nodeExternals = require("webpack-node-externals");
module.exports = {
  target: "node",
  mode: "development",
  entry: "./server.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "server.js",
  },
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

  externals: [nodeExternals()],
};
