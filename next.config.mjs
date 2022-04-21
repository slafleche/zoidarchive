import path from "path";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import EventHooksPlugin from "event-hooks-webpack-plugin";
import fs from "fs-extra";
import { withContentlayer } from "next-contentlayer";

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
  {
    source: path.resolve("node_modules/lunr/lunr.min.js"),
    destination: path.resolve("public", "js", "lunr.min.js"),
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.infrastructureLogging = {
      level: "error",
      debug: /PackFileCache/,
    };
    config.plugins.push(
      new EventHooksPlugin({
        initialize: (compilation, done) => {
          libs.forEach((library) => {
            try {
              fs.unlinkSync(library.destination);
            } catch (err) {
              // No file found, continue with copy
            }
            if (library.source) {
              fs.copy(library.source, library.destination, done);
            }
          });
        },
      })
    );

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },

  exports: {
    swcMinify: true,
    productionBrowserSourceMaps: true,
    experimental: { productionBrowserSourceMaps: true },
    async headers() {
      return [
        {
          // Apply these headers to all routes in your application.
          source: "/:path*",
          headers: securityHeaders,
        },
      ];
    },
  },
};

export default withVanillaExtract(withContentlayer(nextConfig));
