import { NextSeo } from "next-seo";
import { SkipNavContent } from "@reach/skip-nav";
import { Navbar } from "src/components/nav/Navbar";
import layoutStyles from "styles/components/layout.css";
import SectionContents, { dataType } from "src/components/SectionContents";
import SPD from "src/components/text/SPD";
import Link from "next/link";
import ThreeColumns from "../../../src/layouts/ThreeColumns";

function Books() {
  return (
    <>
      <NextSeo title="Resources | Books" />
      <Navbar />
      <SkipNavContent>
        <ThreeColumns title="Books">
          <p>
            Note that not all books listed here are <em>specifically</em>{" "}
            related to <SPD />. To see related conditions, see the{" "}
            <Link href="/related">related section</Link>.
          </p>
          <SectionContents type={dataType.bookPages} />
        </ThreeColumns>
      </SkipNavContent>
    </>
  );
}

export default Books;
