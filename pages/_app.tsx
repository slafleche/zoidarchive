import "../styles/lib/normalize.css";
import "../styles/globals.css.ts";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
