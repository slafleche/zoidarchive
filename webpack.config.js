const path = require("path");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

const exportsInit = (conf) => {
  return {
    watch: conf.watch,
    devtool: conf.devtool,
    entry: [
      path.resolve("src", "index.ts"),
      // path.resolve("src", "styles", "app.css"),
    ],
    output: {
      path: path.resolve("assets", "js"),
      filename: `${conf.filename}.js`,
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        // {
        //   test: /\.css$/,
        //   exclude: /node_modules/,
        //   use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
        // },
        // {
        //   test: /\.(png|jpg|gif|svg)$/,
        //   loader: 'file-loader',
        //   options: {
        //     outputPath: 'assets/'

        //   }
        // }
      ],
    },
    plugins: [
      // // Delete old files (prod files are deleted with dev files to avoid confusion)
      new FileManagerPlugin({
        events: {
          onStart: [
            {
              delete: [
                {
                  source: path.resolve("assets", "css", "*"),
                },
                {
                  source: path.resolve("assets", "js", "*"),
                },
                {
                  source: path.resolve("_data", "manifest.json"),
                },
              ],
            },
          ],
        },
      }),
      // // Create manifest with hashed generated files
      new WebpackManifestPlugin({
        fileName: "../../_data/manifest.json",
        writeToFileEmit: true,
        basePath: "",
        map: (f) => {
          f.path = f.path.replace(/^auto\//, "");
          return f;
        },
      }),
      // new MiniCssExtractPlugin({
      //   filename: conf.filename,
      // }),
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
