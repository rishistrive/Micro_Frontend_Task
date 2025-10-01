const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  devServer: {
    port: 3002,
    historyApiFallback: {
      index: "/index.html", // fallback for SPA routes
    },
    hot: true,
    open: true,
  },
  output: {
    publicPath: "auto",
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    clean: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "booking",
      filename: "remoteEntry.js",
      exposes: {
        "./BookingApp": "./src/bootstrap.tsx", // expose bootstrap component
      },
      remotes: {
        host: "host@http://localhost:3000/remoteEntry.js", // remote host URL
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: "18.2.0" },
        "react-dom": { singleton: true, eager: true, requiredVersion: "18.2.0" },
        "react-router-dom": { singleton: true, eager: true },
        "react-redux": { singleton: true, requiredVersion: "9.2.0" },
        "@reduxjs/toolkit": { singleton: true, requiredVersion: "2.9.0" },
      },
    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
