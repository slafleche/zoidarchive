const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HookShellScriptPlugin = require("hook-shell-script-webpack-plugin");
const { env } = require("process");
const webpack = require("webpack");

const exportsInit = (conf) => {
  return {
    watch: conf.watch,
    devtool: conf.devtool,
    entry: [path.resolve("src", "index.ts")],
    output: {
      path: path.resolve("assets"),
      filename: `js/${conf.filename}.js`,
    },
    // resolve: {
    // modules: [path.resolve("node_modules", "")],
    // modules: path.resolve("node_modules", "normalize-css"),
    // extensions: [".js", ".jsx", ".css"],
    // alias: {
    //   normalize: path.resolve(
    //     "node_modules",
    //     "normalize-css",
    //     "normalize.css"
    //   ),
    //   extensions: [".css"],
    // },
    // },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                babelrc: false,
                presets: [
                  "@babel/preset-typescript",
                  ["@babel/preset-react", { runtime: "automatic" }],
                  [
                    "@babel/preset-env",
                    { targets: { node: 14 }, modules: false },
                  ],
                ],
                plugins: ["@vanilla-extract/babel-plugin"],
              },
            },
          ],
        },

        {
          test: /.vanilla?.css.ts$/,
          exclude: /node_modules/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
        },

        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },

        // Creates `style` nodes from JS strings
        // "style-loader",
        // Translates CSS into CommonJS
        // "css-loader",
        // Compiles Sass to CSS
        // "sass-loader",

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
                  source: path.resolve("site", "assets", "js", "*"),
                },
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
      // // Create manifest with generated file names
      new WebpackManifestPlugin({
        fileName: "../_data/manifest.json",
        writeToFileEmit: true,
        basePath: "",
        map: (f) => {
          f.name = f.name.replace(/.js$/, "");
          f.path = f.path.replace(/^auto\/js\//, "");
          return f;
        },
      }),
      new MiniCssExtractPlugin({
        filename: `css/${conf.filename}.css`,
      }),
      new VanillaExtractPlugin({}),
      ...conf.runAfterFirstCompilation,
      new HookShellScriptPlugin({
            watchClose: ["webpack kill"],
      }),
      new webpack.DefinePlugin({
        __mainJS__: JSON.stringify(conf.scripts.js),
      }),
    ],
    optimization: {
      minimizer: [new CssMinimizerPlugin({})],
      minimize: conf.minimize,
    },
    watchOptions: {
      ignored: ["node_modules"],
    },
  };
};

// Dynamic value for dev and production environments
const setEnvConfig = (mode, hook) => {
  //webpack.js.org/api/compiler-hooks/#aftercompile
  var runAfterFirstCompilation = [];

  switch (mode) {
    case "development":
      console.log(
        `\n=====> DEV CONFIG${hook ? ` with hook: "${hook}"` : ""}\n`
      );
      if (hook === "cuttlebelle") {
        // Because we're watching for changes with webpack,
        // it will hang on the webpack script and never get to the cuttlebelle script.
        // Running both in parallel created some race conditions to succeed.
        // Running the cuttlebelle script in parallel, but on a webpack hook was the best
        // solution I could find.
        runAfterFirstCompilation = [
          new HookShellScriptPlugin({
            afterCompile: ["cuttlebelle -w"],
          }),
        ];
      }
      return {
        watch: true,
        filename: "[name]",
        devtool: "source-map",
        runAfterFirstCompilation,
        minimize: true,
  
      };
    default:
      console.log("\n=====> PROD CONFIG\n");
      return {
        watch: false,
        filename: "[name].[fullhash]",
        devtool: "inline-source-map",
        runAfterFirstCompilation,
        minimize: false,
        
      };
  }
};

module.exports = (env, args) => {
  return exportsInit(setEnvConfig(args.mode, env.hook || false));
};

const getManifest = () => {
  var target = "main.js";
  const manifestPath = path.resolve("_data", "manifest.json");

  try {
    const data = require(manifestPath);
    if (data && data.main) {
      target = data.main;
    }
  } catch (error) {
    console.error(error);
  }

  return target;
};
