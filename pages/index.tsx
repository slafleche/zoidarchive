import type { NextPage } from "next";
import { Navbar } from "../src/components/nav/Navbar";
import { Splash } from "../src/components/Splash";
import layoutClasses from "../styles/components/layout.css";
import { SkipNavContent } from "@reach/skip-nav";
import content from "../styles/components/content.css";
import Abbr from "../src/components/text/Abbr";
import SPD from "../src/components/text/SPD";
import { NextSeo } from "next-seo";
import { ThumbnailContainer } from "../src/components/thumbnails/ThumbnailContainer";
import { Thumbnail } from "../src/components/thumbnails/Thumbnail";
import thumbnailStyles from "../styles/components/thumbnails/thumbnails.css";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="Zoid Archive" titleTemplate="%s" />
      <Splash />
      <Navbar homepage={true} />
      <SkipNavContent>
        <div className={content.root}>
          <div className={layoutClasses.content}>
            <p>
              <strong>Schizoid Personality Disorder</strong>, often abbreviated
              as <SPD /> or{" "}
              <Abbr
                fullText="Schizoid Personality Disorder"
                abbreviation="SPzD"
              />
              , is a condition where social activities and interaction with
              others are consistently avoided. People with
            </p>

            <h2>What is Schizoid Personality Disorder?</h2>
            <p>
              The{" "}
              <a
                href="https://www.mayoclinic.org/diseases-conditions/schizoid-personality-disorder/symptoms-causes/syc-20354414"
                target="_blank"
                rel="noreferrer"
              >
                Mayo Clinic
              </a>{" "}
              defines as:
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
          <ThumbnailContainer>
            <Thumbnail
              title={"Frequently Asked Questions"}
              illustrationSrc={"/images/illustrations/faq.svg"}
              url={"/archive/faq"}
              backgroundClass={thumbnailStyles.faq_bg}
              illustrationClass={thumbnailStyles.faq_thumbnail}
              alt="Man with question"
            />
            <Thumbnail
              title={"Books"}
              illustrationSrc={"/images/illustrations/books.svg"}
              url={"/archive/books"}
              backgroundClass={thumbnailStyles.books_bg}
              illustrationClass={thumbnailStyles.books_thumbnail}
              alt="Woman reading book"
            />
            <Thumbnail
              title={"Academic Research"}
              illustrationSrc={"/images/illustrations/academic.svg"}
              url={"/archive/academic"}
              backgroundClass={thumbnailStyles.academic_bg}
              illustrationClass={thumbnailStyles.academic_thumbnail}
              alt="Man in front of graphs and charts"
            />
            <Thumbnail
              title={"Communities"}
              illustrationSrc={"/images/illustrations/communities.svg"}
              url={"/archive/communities"}
              backgroundClass={thumbnailStyles.communities_bg}
              illustrationClass={thumbnailStyles.communities_thumbnail}
              alt="Woman having a video conference with two other people"
            />
            <Thumbnail
              title={"Related Issues"}
              illustrationSrc={"/images/illustrations/related.svg"}
              url={"/related"}
              backgroundClass={thumbnailStyles.related_bg}
              illustrationClass={thumbnailStyles.related_thumbnail}
              alt="Woman with giant puzzle pieces"
            />
            <Thumbnail
              title={"Links"}
              illustrationSrc={"/images/illustrations/links.svg"}
              url={"/archive/links"}
              backgroundClass={thumbnailStyles.links_bg}
              illustrationClass={thumbnailStyles.links_thumbnail}
              alt="Man with computer mouse, surfing the internet"
            />
          </ThumbnailContainer>
        </div>
      </SkipNavContent>
    </>
  );
};

export default Home;
