import { Navbar } from "src/components/nav/Navbar";
import { NextSeo } from "next-seo";
import utilities from "styles/components/layout.css";
import { SkipNavContent } from "@reach/skip-nav";
import Link from "next/link";

function Experts() {
  return (
    <>
      <NextSeo title="Experts" />
      <Navbar />
      <SkipNavContent>
        <div className={utilities.content}>
          <h1>Experts</h1>
          <p>
            {/* // List experts that helped with content */}
          </p>
        </div>
      </SkipNavContent>
    </>
  );
}

export default Experts;
