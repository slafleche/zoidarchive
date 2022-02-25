const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

const exportsInit = (conf) => {
  return {
    watch: conf.watch,
    devtool: conf.devtool,
    entry: [
      path.resolve("src", "js", "app.js"),
      // path.resolve("src", "styles", "app.css"),
    ],
    output: {
      path: path.resolve("assets"),
      filename: `${conf.filename}.js`,
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: "file-loader",
          options: {
            outputPath: "assets/",
          },
        },
      ],
    },
    plugins: [
      // Delete old files (prod files are deleted with dev files to avoid confusion)
      new FileManagerPlugin({
        events: {
          onStart: [
            {
              delete: [
                {
                  source: path.resolve("static", "assets", "*"), // Site code
                },
                {
                  source: path.resolve("assets", "*"), // Site code
                },
                {
                  source: path.resolve("public", "*"), // Generated Site
                },
                {
                  source: path.resolve("data", "manifest.json"), // manifest
                },
              ],
            },
          ],
        },
      }),
      // Create manifest with hashed generated files
      new WebpackManifestPlugin({
        fileName: "../data/manifest.json",
        writeToFileEmit: true,
        basePath: "",
        publicPath: "assets/",
      }),
      new MiniCssExtractPlugin({
        filename: conf.filename,
      }),
    ],
  };
};

// Dynamic value for dev and production environments
const setEnvConfig = (mode) => {
  switch (mode) {
    case "development":
      console.log("\n=====> DEV CONFIG\n");
      return {
        watch: true,
        filename: "[name]",
        devtool: "source-map",
      };
    default:
      console.log("\n=====> PROD CONFIG\n");
      return {
        watch: false,
        filename: "[name].[fullhash]",
        devtool: "inline-source-map",
      };
  }
};

module.exports = (env, argv) => {
  return exportsInit(setEnvConfig(argv.mode));
};
