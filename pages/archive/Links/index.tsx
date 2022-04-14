import { Navbar } from "src/components/nav/Navbar";
import { NextSeo } from "next-seo";
import utilityStyles from "styles/components/layout.css";
import { SkipNavContent } from "@reach/skip-nav";
import SPD from "@components/text/SPD";

function Links() {
  return (
    <>
      <NextSeo title="Related Links" />
      <Navbar />
      <SkipNavContent>
        <div className={utilityStyles.content}>
          <h1>Zoid Communities</h1>
          <p>
            Here are some external links to various websites or communities
            related to <SPD />.
          </p>

          <p>If you&apos;d like to</p>
        </div>
      </SkipNavContent>
    </>
  );
}

export default Links;
