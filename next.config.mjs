import path from "path";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import EventHooksPlugin from "event-hooks-webpack-plugin";
import fs from "fs-extra";

const withVanillaExtract = createVanillaExtractPlugin();
const destinationPathNormalize = path.resolve("styles", "lib", "normalize.css");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new EventHooksPlugin({
        initialize: (compilation, done) => {
          try {
            fs.unlinkSync(destinationPathNormalize);
            //file removed
          } catch (err) {
            // console.error(err);
          }
          fs.copy(
            path.resolve("node_modules/normalize-css/normalize.css"),
            destinationPathNormalize,
            done
          );
        },
      })
    );
    return config;
  },
};

export default withVanillaExtract(nextConfig);
