import "styles/lib/normalize.css";
import "@reach/tooltip/styles.css";
import "styles/globals.css.ts";
import { DefaultSeo } from "next-seo";
import ScrollToTop from "src/components/ScrollToTop";
import Footer from "src/components/Footer";
import layoutStyles from "styles/components/layout.css";
import { SITE_NAME, SITE_URL } from "src/utils/constants";

// https://www.npmjs.com/package/next-seo
// github.com/pacocoursey/next-themes
// samuelkraft.com/blog/vanilla-extract-with-next-themes

function MyApp({ Component, pageProps }) {
  const { title, description } = pageProps;

  return (
    <>
      <DefaultSeo
        titleTemplate="%s | Zoid Archive"
        description="Raising awareness and sharing information about the Schizoid Community"
        openGraph={{
          url: SITE_URL,
          title,
          description,
          type: "website",
          locale: "en_US",
          site_name: SITE_NAME,
          images: [
            {
              url: "/public/images/zoidArchiveOpenGraph.png",
              width: 1200,
              height: 630,
              alt: "Zoid Archive Logo",
              type: "image/jpeg",
            },
          ],
        }}
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
