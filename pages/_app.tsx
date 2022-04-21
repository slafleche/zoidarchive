import "styles/lib/normalize.css";
import "@reach/tooltip/styles.css";
import "styles/globals.css.ts";
import { DefaultSeo } from "next-seo";
import ScrollToTop from "src/components/ScrollToTop";
import Footer from "src/components/Footer";
import layoutStyles from "styles/components/layout.css";

// https://www.npmjs.com/package/next-seo
// github.com/pacocoursey/next-themes
// samuelkraft.com/blog/vanilla-extract-with-next-themes

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s | Zoid Archive"
        description="Raising awareness and sharing information about the Schizoid Community"
      />
      <div className={layoutStyles.stickyFooter}>
        <div className={layoutStyles.mainSection}>
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
      <ScrollToTop />
    </>
  );
}

export default MyApp;
