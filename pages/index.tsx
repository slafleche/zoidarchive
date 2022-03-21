import type { NextPage } from "next";
import { Navbar } from "../src/components/Navbar";
import { Splash } from "../src/components/Splash";
import utilityStyles from "../styles/components/layout.css";
import { SkipNavContent } from "@reach/skip-nav";
import content from "../styles/components/content.css";
import Abbr from "../src/components/Abbr";
import SPD from "../src/components/SPD";

const Home: NextPage = () => {
  return (
    <>
      <Splash />
      <Navbar homepage={true} />
      <SkipNavContent>
        <div className={content.root}>
          <div className={utilityStyles.content}>
            <p>
              <strong>Schizoid Personality Disorder</strong>, often abbreviated
              as <SPD/> or{" "}
              <Abbr fullText="Schizoid Personality Disorder" abbreviation="SPzD"/>, is a condition where social activities and interaction with others are consistently avoided. People with 
            </p>

            <h2>What is Schizoid Personality Disorder?</h2>
            <p>
              The <a href="blockquote">Mayo Clinic</a> defines as:
            </p>
            <blockquote cite="https://www.mayoclinic.org/diseases-conditions/schizoid-personality-disorder/symptoms-causes/syc-20354414">
              <p>
                Schizoid personality disorder is an uncommon condition in which
                people avoid social activities and consistently shy away from
                interaction with others. They also have a limited range of
                emotional expression. If you have schizoid personality disorder,
                you may be seen as a loner or dismissive of others, and you may
                lack the desire or skill to form close personal relationships.
                Because you don&apos;t tend to show emotion, you may appear as
                though you don&apos;t care about others or what&apos;s going on
                around you. The cause of schizoid personality disorder is
                unknown. Talk therapy, and in some cases medications, can help.
              </p>
            </blockquote>
          </div>
        </div>
      </SkipNavContent>
    </>
  );
};

export default Home;
