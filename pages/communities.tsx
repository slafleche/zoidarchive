import { Navbar } from "../src/components/Navbar";
import { NextSeo } from "next-seo";
import utilityStyles from "../styles/components/layout.css";
import { StickyContainer } from "react-sticky";
import { SkipNavContent } from "@reach/skip-nav";

function Communities() {
  return (
    <>
      <NextSeo title="Schizoid Communities" />
      <StickyContainer>
        <Navbar />
        <SkipNavContent>
          <div className={utilityStyles.content}>
            <h1>Zoid Communities</h1>
            <p>
              Although it may seem at first like an oxymoron, there are
              communites for schizoids
            </p>
            <h2>The Zoid Void</h2>
            <p>
              Discord community for Schizoids. If you're not a schizoid, you may
              still join, but your access will be limited.
            </p>
          </div>
        </SkipNavContent>
      </StickyContainer>
    </>
  );
}

export default Communities;
