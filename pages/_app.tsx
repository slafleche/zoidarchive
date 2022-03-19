import "../styles/lib/normalize.css";
import "@reach/tooltip/styles.css";
import "../styles/globals.css.ts";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import { Favicons } from "../src/partials/Favicons";

// https://www.npmjs.com/package/next-seo

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="The Zoid Archive"
        titleTemplate="%s | Zoid Archive"
        description="Resources for the Zoid Community"
      />
      <Component {...pageProps}></Component>;
    </>
  );
}

export default MyApp;
