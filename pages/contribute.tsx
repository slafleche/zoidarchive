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
          <h1>Contribute to the Zoid Archive!</h1>
          <p>
            There are two ways you can contribute to this project. The first way
            is to contribute to the <PatreonZoidArchive />. This project
            isn&apos;t trying to make a profit. We&apos;re just looking to
            offset any costs hosting a website.
          </p>
          <p>
            The second way is to help with content. Note that this website
            isn&apos;t mean to contain any and everything you can find in Google
            about <SPD /> We&apos;re trying to have a curated list that is
            useful.
          </p>
          <iframe
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
