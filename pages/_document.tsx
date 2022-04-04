import Script from "next/dist/client/script";
import { Html, Head, Main, NextScript } from "next/document";
import ScrollToTop from "../src/components/ScrollToTop";
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
              <ul>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
              </ul>
            </main>
          </div>
        </div>
        {/* <!-- Accessibility --> */}
        <Script
          src="js/focus-visible.min.js"
          strategy="afterInteractive"
        ></Script>
        {/* <!-- Search --> */}
        {/* <Script src="" strategy="afterInteractive"></Script> */}
        {/* <!-- Google Analytics --> */}
        <Script
          src="https://www.google-analytics.com/analytics.js"
          strategy="lazyOnload"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MS2QGXYXF4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-MS2QGXYXF4');
          `}
        </Script>
        <NextScript />
      </body>
    </Html>
  );
}
