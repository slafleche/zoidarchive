import { Html, Head, Main, NextScript } from "next/document";

import { Favicons } from "../src/partials/Favicons";
import { Libs } from "../src/partials/Libs";
import utilityStyles from "../styles/components/layout.css";

export default function Document() {
  return (
    <Html>
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
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600&family=Poppins:wght@300;600&display=swap"
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
        <Libs />
        <NextScript />
      </body>
    </Html>
  );
}
