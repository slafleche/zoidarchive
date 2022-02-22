const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const PrettierPlugin = require("prettier-webpack-plugin");

// return env specific values, defaults to 'production'
const setEnvironmentVars = () => {
  switch (process.env.APP_ENV) {
    case "dev":
      return {
        watch: true,
        filename: "[name]",
      };
    default:
      return {
        watch: false,
        filename: "[name].[hash]",
      };
  }
};

const exportsInit = () => {
  const env = setEnvironmentVars();
  return {
    watch: env.watch,
    entry: [
      path.resolve("src", "js", "app.js"),
      path.resolve("src", "styles", "app.css"),
    ],
    output: {
      path: path.resolve("static", "assets"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: env.filename + ".css",
      }),
      new FileManagerPlugin({
        events: {
          onStart: {
            delete: [
              {
                source: path.resolve("static", "assets", "*.js"),
              },
              {
                source: path.resolve("static", "assets", "*.css"),
              },
              {
                source: path.resolve("public", "*"),
              },
            ],
          },
        },
      }),
      new PrettierPlugin({
        printWidth: 120,
        useTabs: false,
        tabWidth: 4,
        semi: true,
        trailingComma: "all",
        encoding: "utf-8",
      }),
    ],
  };
};

module.exports = exportsInit();
