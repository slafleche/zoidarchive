import { Navbar } from "../src/components/Navbar";
import { NextSeo } from "next-seo";
import utilityStyles from "../styles/components/layout.css";
import { SkipNavContent } from "@reach/skip-nav";
import SPD from "../src/components/SPD";
import { ExternalLink } from "../src/components/ExternalLink";
import { PatreonZoidArchive } from "../src/components/PatreonZoidArchive";

function Contribute() {
  return (
    <>
      <NextSeo title="Contribute" />
      <Navbar />
      <SkipNavContent>
        <div className={utilityStyles.content}>
          <h1>Contact Us</h1>

          <iframe
            title="Contact Form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSejaj5MzQYQ7l71PZ6c8SPcUBVmrftUGMY0u-wY30An-h3aEA/viewform?embedded=true"
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          >
            Loading…
          </iframe>
        </div>
      </SkipNavContent>
    </>
  );
}

export default Contribute;
