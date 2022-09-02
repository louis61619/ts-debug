const path = require('path')

module.exports = {
  mode: "development",
  entry: "./index.ts",
  target: "node",
  output: {
    filename: "index.js",
    // 必須是一個絕對路徑
    path: path.resolve(__dirname, "./build"),
    // assetModuleFilename: "img/[name].[hash:6][ext]"
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          // options: {
          //   presets: [
          //     ["@babel/preset-env", {
          //       targets: ["chrome 88"]
          //     }]
          //   ],
          //   // plugins: [
          //   //   "@babel/plugin-transform-arrow-functions",
          //   //   "@babel/plugin-transform-block-scoping"
          //   // ]
          // }
        }
      }
    ]
  },
  // plugins: [
  //   new NodePolyfillPlugin()
  // ]
}