import { Navbar } from "src/components/nav/Navbar";
import { NextSeo } from "next-seo";
import utilities from "styles/components/layout.css";
import { SkipNavContent } from "@reach/skip-nav";
import SPD from "src/components/text/SPD";

function Links() {
  return (
    <>
      <NextSeo title="Related Links" />
      <Navbar />
      <SkipNavContent>
        <div className={utilities.content}>
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
