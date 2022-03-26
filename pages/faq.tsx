import { Navbar } from "../src/components/Navbar";
import { NextSeo } from "next-seo";
import utilityStyles from "../styles/components/layout.css";
import { SkipNavContent } from "@reach/skip-nav";
import SPD from "../src/components/SPD";
import { ExternalLink } from "../src/components/ExternalLink";
import { PatreonZoidArchive } from "../src/components/PatreonZoidArchive";
import Link from "next/link";

function Faq() {
  return (
    <>
      <NextSeo title="Contribute" />
      <Navbar />
      <SkipNavContent>
        <div className={utilityStyles.content}>
          <h1>Frequently Asked Questions</h1>
          <p>
            Schizoid Peronality Disorder can be difficult to understand. Here
            are some frequently asked questions. All sources are listed. Please
            report any errors or submit any suggestions in the{" "}
            <Link href="/contribute">contribute</Link> page.
          </p>
        </div>
      </SkipNavContent>
    </>
  );
}

export default Faq;
