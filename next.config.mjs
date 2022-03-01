/** @type {import('next').NextConfig} */
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    console.log("");
    console.log("in webpack code");

    // Find and remove NextJS css rules.
    const cssRulesIdx = config.module.rules.findIndex((r) => r.oneOf);
    if (cssRulesIdx === -1) {
      throw new Error("Could not find NextJS CSS rule to overwrite.");
    }
    config.module.rules.splice(cssRulesIdx, 1);

    // Add a simpler rule for global css anywhere.
    config.plugins.push(
      new MiniCssExtractPlugin({
        experimentalUseImportModule: true,
        filename: "static/css/[contenthash].css",
        chunkFilename: "static/css/[contenthash].css",
      })
    );

    config.module.rules.push({
      test: /\.css$/i,
      use: !isServer
        ? ["style-loader", "css-loader"]
        : [MiniCssExtractPlugin.loader, "css-loader"],
    });
    return config;
  },
};

export default createVanillaExtractPlugin(nextConfig);
