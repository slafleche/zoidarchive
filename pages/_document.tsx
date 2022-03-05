import { Html, Head, Main, NextScript } from "next/document";
import { Fonts } from "../src/partials/Fonts";
import { Libs } from "../src/partials/Libs";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <Fonts />
        <Libs />
        <NextScript />
      </body>
    </Html>
  );
}
