import "../styles/lib/normalize.css";
import "@reach/tooltip/styles.css";
import "../styles/globals.css.ts";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

// https://www.npmjs.com/package/next-seo

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s | Zoid Archive"
        description="Resources for the Schizoid Community"
      />
      <Component {...pageProps}></Component>;
    </>
  );
}

export default MyApp;
