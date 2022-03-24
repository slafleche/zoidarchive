import { Navbar } from "../src/components/Navbar";
import { NextSeo } from "next-seo";
import utilityStyles from "../styles/components/layout.css";

import { SkipNavContent } from "@reach/skip-nav";
import { Card } from "../src/components/Card";

function Communities() {
  return (
    <>
      <NextSeo title="Schizoid Communities" />
      <Navbar />
      <SkipNavContent>
        <div className={utilityStyles.content}>
          <h1>Zoid Communities</h1>
          <p>
            Although it may seem at first like an oxymoron, there are communites
            for schizoids.
          </p>
          <Card
            title="The Zoid Void"
            description={
              <>
                <p>
                  Server for Schizoid Personality Disorder awareness &
                  relatability. Talk with schizoids & non-schizoids about SZPD
                  and other things without the strings usually attached to
                  social interactions.
                </p>
                <p>
                  People without the disorder can join to understand it or if
                  they want to help someone in their life that has it.
                </p>
                <p>
                  If you&apos;re not a schizoid, you may still join, but your
                  access will be limited.
                </p>
              </>
            }
            imageSrc="/images/zoidvoid.gif"
            socials={{
              discord: "https://disboard.org/server/803371090133909584",
              youtube: "https://www.youtube.com/c/SchizoidAngst",
            }}
          />
        </div>
      </SkipNavContent>
    </>
  );
}

export default Communities;
