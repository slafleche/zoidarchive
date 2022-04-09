import { Navbar } from "../../../src/components/nav/Navbar";
import { NextSeo } from "next-seo";
import utilityStyles from "../../../styles/components/layout.css";
import { SkipNavContent } from "@reach/skip-nav";

function Research() {
  return (
    <>
      <NextSeo title="Academic Research" />
      <Navbar />
      <SkipNavContent>
        <div className={utilityStyles.content}>
          <h1>Academic Research</h1>
          <p>
            Note that the Zoid Void is not an academic source. We try, however,
            to spread scientifically accurate information. Here are some
            schollar resources.
          </p>
        </div>
      </SkipNavContent>
    </>
  );
}

export default Research;
