const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map", // Helps you find errors in the original file
  devServer: {
    static: "./dist",
    watchFiles: ["./src/template.html"], // Hot reload HTML changes
  },
});