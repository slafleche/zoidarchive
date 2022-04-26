import { Navbar } from "src/components/nav/Navbar";
import { NextSeo } from "next-seo";
import utilities from "styles/components/layout.css";
import { SkipNavContent } from "@reach/skip-nav";
import SPD from "src/components/text/SPD";
import SectionContents, { dataType } from "src/components/SectionContents";
import ThreeColumns from "src/layouts/ThreeColumns";

function Related() {
  return (
    <>
      <NextSeo title="Related Issues" />
      <Navbar />
      <SkipNavContent>
        <ThreeColumns title="Related Issues">
          <p>
            <SPD /> is often accompanied by other mental health problems.
            We&apos;ve listed some conditions that commonly coexist with <SPD />
            . <em>Note that this is by no means an exhaustive list.</em>
          </p>
          <SectionContents type={dataType.relatedPages} />
        </ThreeColumns>
      </SkipNavContent>
    </>
  );
}

export default Related;
