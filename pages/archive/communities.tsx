import { Navbar } from "src/components/nav/Navbar";
import { NextSeo } from "next-seo";
import { SkipNavContent } from "@reach/skip-nav";
import utilityStyles from "styles/components/layout.css";

function Communities() {
  return (
    <>
      <NextSeo title="Communities" />
      <Navbar />
      <SkipNavContent>
        <div className={utilityStyles.content}>
          <h1>Communities</h1>
          <p>Schizoid Communities?</p>
        </div>
      </SkipNavContent>
    </>
  );
}

export default Communities;
