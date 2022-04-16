import { Navbar } from "src/components/nav/Navbar";
import { NextSeo } from "next-seo";
import utilityStyles from "styles/components/layout.css";
import { SkipNavContent } from "@reach/skip-nav";
import SPD from "src/components/text/SPD";
import utilityClasses from "styles/utilityClasses.css";

function Contribute() {
  return (
    <>
      <NextSeo title="Contribute" />
      <Navbar />
      <SkipNavContent>
        <div className={utilityStyles.content}>
          <h1>Help us make the site better</h1>
          <p>You can help us with adding or improving content!</p>
          <p>
            <em className={utilityClasses.finePrint}>
              Note that this website
              <strong> is not</strong> mean to contain anything and everything
              you can find on Google about <SPD />. We strive to have curated
              content that is both useful and supported by scientific evidence.
            </em>
          </p>

          <iframe
            title="Contribute Form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSfusOd8kyePIuHoF04l_-9Qoacg_-_Xx6tyRsmRxKdOReZ1AA/viewform?embedded=true"
            width="100%"
            height="1200"
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
