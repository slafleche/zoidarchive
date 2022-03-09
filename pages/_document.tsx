import { Html, Head, Main, NextScript } from "next/document";
import { Fonts } from "../src/partials/Fonts";
import { Libs } from "../src/partials/Libs";
import utilityStyles from "../styles/components/layout.css";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <div className={utilityStyles.bodyWrap}>
          <div className={utilityStyles.frame}>
            <main className={utilityStyles.main}>
              <Main />
            </main>
          </div>
        </div>
        <Fonts />
        <Libs />
        <NextScript />
      </body>
    </Html>
  );
}
