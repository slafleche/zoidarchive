import { Navbar } from "src/components/nav/Navbar";
import { NextSeo } from "next-seo";
import { SkipNavContent } from "@reach/skip-nav";
import ThreeColumns from "src/layouts/ThreeColumns";
import SectionContents, { dataType } from "src/components/SectionContents";

function Research() {
  return (
    <>
      <NextSeo title="Academic Research" />
      <Navbar />

      <SkipNavContent>
        <ThreeColumns title="Academic Research">
          <p>
            Note that the Zoid Void is not an academic source. We try, however,
            to spread scientifically accurate information and to share links to
            trustworthy information. Here are some schollar resources.
          </p>
          <SectionContents type={dataType.researchPages} />
        </ThreeColumns>
      </SkipNavContent>
    </>
  );
}

export default Research;
