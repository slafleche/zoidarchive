import { Navbar } from "../../src/components/nav/Navbar";
import { NextSeo } from "next-seo";
import utilityStyles from "../../styles/components/layout.css";
import { SkipNavContent } from "@reach/skip-nav";
import SPD from "../../src/components/text/SPD";
import { ExternalLink } from "../../src/components/text/ExternalLink";
import { PatreonZoidArchive } from "../../src/components/PatreonZoidArchive";
import Link from "next/link";
import {
  Accordion as Accord,
  AccordionItem,
  AccordionPanel,
} from "@reach/accordion";

interface IFaq {
  question: React.ReactNode;
  answer: React.ReactNode;
}

function Faq() {
  return (
    <>
      <NextSeo title="Frequently Asked Questions" />
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

          <Accord>
            <AccordionItem>
              <h2>What is Schizoid Personality Disorder?</h2>
              <AccordionPanel>
                Ante rhoncus facilisis iaculis nostra faucibus vehicula ac
                consectetur pretium, lacus nunc consequat id viverra facilisi
                ligula eleifend, congue gravida malesuada proin scelerisque
                luctus est convallis.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>What is a personality disorder?</h2>
              <AccordionPanel>
                Ante rhoncus facilisis iaculis nostra faucibus vehicula ac
                consectetur pretium, lacus nunc consequat id viverra facilisi
                ligula eleifend, congue gravida malesuada proin scelerisque
                luctus est convallis.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>What are the criterea to be diagnosed?</h2>
              <AccordionPanel>
                Ante rhoncus facilisis iaculis nostra faucibus vehicula ac
                consectetur pretium, lacus nunc consequat id viverra facilisi
                ligula eleifend, congue gravida malesuada proin scelerisque
                luctus est convallis.
              </AccordionPanel>
            </AccordionItem>
          </Accord>
        </div>

        <section>
          <h2>References:</h2>
          <ol>
            <li
              typeof="schema:WebPage"
              role="doc-biblioentry"
              resource="http://semver.org/"
              property="schema:citation"
              id="some-id"
            >
              <cite property="schema:name">
                <a href="http://semver.org/">Semantic Versioning 2.0.0</a>
              </cite>
              , by{" "}
              <span property="schema:author" typeof="schema:Person">
                <span property="schema:givenName">Tom</span>
                <span property="schema:familyName">Preston-Werner</span>
              </span>
              ; published in
              <time
                property="schema:datePublished"
                datatype="xsd:gYear"
                dateTime="2014"
              >
                2014
              </time>
              <span
                property="schema:potentialAction"
                typeof="schema:ReadAction"
              >
                <meta
                  property="schema:actionStatus"
                  content="CompletedActionStatus"
                />
                (accessed on
                <time
                  property="schema:endTime"
                  datatype="xsd:date"
                  dateTime="2016-02-01"
                >
                  01 Feb 2016
                </time>
                )
              </span>
              .
            </li>
          </ol>
        </section>
      </SkipNavContent>
    </>
  );
}

export default Faq;
