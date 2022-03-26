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
          <h1>Help us make the site better</h1>
          <p>
            There are two ways you can contribute to this project. The first way
            is to contribute to the <PatreonZoidArchive />. This project
            isn&apos;t trying to make a profit. We&apos;re just looking to
            offset any costs hosting a website.
          </p>
          <p>
            The second way is to help with content. Note that this website
            <strong> is not</strong> mean to contain anything and everything you
            can find on Google about <SPD />. We&apos;re trying to have a
            curated list that is useful and supported by scientific evidence.
          </p>
          <iframe
            title="Contribute Form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSdxwCM_CVyQWfy7ldv1z_xYjt4SnqR47fm7tz7I_aYhVPg5gA/viewform?embedded=true"
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
