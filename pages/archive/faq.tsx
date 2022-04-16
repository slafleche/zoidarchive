import { Navbar } from "src/components/nav/Navbar";
import { NextSeo } from "next-seo";
import utilityStyles from "styles/components/layout.css";
import { SkipNavContent } from "@reach/skip-nav";
import Link from "next/link";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@reach/accordion";
import { IHeadingLevel } from "src/utils/globalInterfaces";
import ThreeColumns from "src/layouts/ThreeColumns";

interface IProps extends IHeadingLevel {
  question: React.ReactNode;
  answer: React.ReactNode;
}

function Faq(props: IProps) {
  const { headingLevel = 2 } = props;
  const H = `h${headingLevel}` as "h1";

  return (
    <>
      <NextSeo title="Frequently Asked Questions" />
      <Navbar />
      <SkipNavContent>
        <ThreeColumns title="FAQs">
          <p>
            Schizoid Peronality Disorder can be difficult to understand. Here
            are some commmon questions.
          </p>
          <Accordion multiple={true}>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  What is Schizoid Personality Disorder?
                </AccordionButton>
              </h2>
              <AccordionPanel>
                Ante rhoncus facilisis iaculis nostra faucibus vehicula ac
                consectetur pretium, lacus nunc consequat id viverra facilisi
                ligula eleifend, congue gravida malesuada proin scelerisque
                luctus est convallis.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  What is Schizoid Personality Disorder?
                </AccordionButton>
              </h2>
              <AccordionPanel>
                Ante rhoncus facilisis iaculis nostra faucibus vehicula ac
                consectetur pretium, lacus nunc consequat id viverra facilisi
                ligula eleifend, congue gravida malesuada proin scelerisque
                luctus est convallis.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
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
        </ThreeColumns>
      </SkipNavContent>
    </>
  );
}

export default Faq;
