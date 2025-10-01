const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  devServer: {
    port: 3000,
    historyApiFallback: true,  //auth/* and /booking/*
    hot: true,
    open: true,
  },
  optimization: {
  runtimeChunk: false,
},

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/",            // (fixes /auth/register reload)
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
  name: "host",
  remotes: {
    auth: "auth@http://localhost:3001/remoteEntry.js",
    booking: "booking@http://localhost:3002/remoteEntry.js",
    reporting: "reporting@http://localhost:3003/remoteEntry.js", 
  },
  exposes: {
    "./components/pages/Table": "./src/components/pages/table.tsx",
    "./components/pages/Modal": "./src/components/pages/modal.tsx",
    "./components/pages/Input": "./src/components/pages/input.tsx",
    "./components/pages/Button": "./src/components/pages/button.tsx",
    "./store/hooks": "./src/store/hooks.ts",  
    "./store/store": "./src/store/index.ts", 
    "./host-slice/bookingSlice": "./src/host-slice/bookingSlice.ts", 
    "./host-slice/userSlice": "./src/host-slice/userSlice.ts", 
  },
 shared: {
  react: { singleton: true, eager: true, requiredVersion: "18.2.0" },
  "react-dom": { singleton: true, eager: true, requiredVersion: "18.2.0" },
  "react-router-dom": { singleton: true,eager: true },
  "react-redux": { singleton: true,requiredVersion: "9.2.0" },
  "@reduxjs/toolkit": { singleton: true, requiredVersion: "2.9.0" },
},

}),

    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
