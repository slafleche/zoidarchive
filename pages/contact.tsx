import { Navbar } from "src/components/nav/Navbar";
import { NextSeo } from "next-seo";
import utilities from "styles/components/layout.css";
import { SkipNavContent } from "@reach/skip-nav";

function Contribute() {
  return (
    <>
      <NextSeo title="Contribute" />
      <Navbar />
      <SkipNavContent>
        <div className={utilities.content}>
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
