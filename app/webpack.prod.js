const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.js",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
        options: { presets: ["@babel/preset-react"] },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app",
      remotes: {
        header: "header@https://mfe-react-header.vercel.app/remoteEntry.js",
        body: "body@https://mfe-react-body.vercel.app/remoteEntry.js",
      },
    }),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
  ],
};
