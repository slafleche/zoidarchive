import Script from "next/dist/client/script";
import { Html, Head, Main, NextScript } from "next/document";
import { Favicons } from "../src/partials/Favicons";
import utilityStyles from "../styles/components/layout.css";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="theme-color" content="#3d3380" />
        <Favicons />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&family=Poppins:wght@300;400;600&display=swap"
        />
      </Head>
      <body>
        <div className={utilityStyles.bodyWrap}>
          <div className={utilityStyles.frame}>
            <main className={utilityStyles.main}>
              <Main />
            </main>
          </div>
        </div>
        <Script
          src="js/focus-visible.min.js"
          strategy="afterInteractive"
        ></Script>
        <Script
          src="https://www.google-analytics.com/analytics.js"
          strategy="lazyOnload"
        />
        <NextScript />
      </body>
    </Html>
  );
}
