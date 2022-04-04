import "../styles/lib/normalize.css";
import "@reach/tooltip/styles.css";
import "../styles/globals.css.ts";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import ScrollToTop from "../src/components/ScrollToTop";

// https://www.npmjs.com/package/next-seo
// github.com/pacocoursey/next-themes
// samuelkraft.com/blog/vanilla-extract-with-next-themes
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s | Zoid Archive"
        description="Raising awareness and sharing information about the Schizoid Community"
      />
      <Component {...pageProps}></Component>
      <ScrollToTop />
    </>
  );
}

export default MyApp;
