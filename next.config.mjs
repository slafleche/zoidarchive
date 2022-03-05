import path from "path";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import EventHooksPlugin from "event-hooks-webpack-plugin";
import fs from "fs-extra";

const withVanillaExtract = createVanillaExtractPlugin();
const destinationPathNormalize = path.resolve("styles", "lib", "normalize.css");

const libs = [
  {
    source: path.resolve("node_modules/normalize-css/normalize.css"),
    destination: path.resolve("styles", "lib", "normalize.css"),
  },
  {
    source: path.resolve(
      "node_modules/focus-visible/dist/focus-visible.min.js"
    ),
    destination: path.resolve("public", "js", "focus-visible.min.js"),
  },
  {
    source: path.resolve(
      "node_modules/focus-visible/dist/focus-visible.min.js.map"
    ),
    destination: path.resolve("public", "js", "focus-visible.min.js.map"),
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new EventHooksPlugin({
        initialize: (compilation, done) => {
          libs.forEach((library) => {
            try {
              fs.unlinkSync(library.destination);
            } catch (err) {
              // No file found, continue with copy
            }
            fs.copy(library.source, library.destination, done);
          });
        },
      })
    );
    return config;
  },
};

export default withVanillaExtract(nextConfig);
