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

            <ThumbnailContainer>
              <Thumbnail
                title={"Frequently Asked Questions"}
                illustrationSrc={"images/illustrations/faq.svg"}
                url={"/faq"}
                textClass={thumbnailStyles.faq_title}
                illustrationClass={thumbnailStyles.faq_thumbnail}
              />
              <Thumbnail
                title={"Books"}
                illustrationSrc={"images/illustrations/books.svg"}
                url={"/books"}
                textClass={thumbnailStyles.books_title}
                illustrationClass={thumbnailStyles.books_thumbnail}
              />
              <Thumbnail
                title={"Articles"}
                illustrationSrc={"images/illustrations/articles.svg"}
                url={"/articles"}
                textClass={thumbnailStyles.articles_title}
                illustrationClass={thumbnailStyles.articles_thumbnail}
              />
              <Thumbnail
                title={"Academic Research"}
                illustrationSrc={"images/illustrations/academic.svg"}
                url={"/academic"}
                textClass={thumbnailStyles.academic_title}
                illustrationClass={thumbnailStyles.academic_thumbnail}
              />
              <Thumbnail
                title={"Creators"}
                illustrationSrc={"images/illustrations/creators.svg"}
                url={"/creators"}
                textClass={thumbnailStyles.creators_title}
                illustrationClass={thumbnailStyles.creators_thumbnail}
              />
              <Thumbnail
                title={"Quora"}
                illustrationSrc={"images/illustrations/quora.svg"}
                url={"/quora"}
                textClass={thumbnailStyles.quora_title}
                illustrationClass={thumbnailStyles.quora_thumbnail}
              />
              <Thumbnail
                title={"Communities"}
                illustrationSrc={"images/illustrations/communities.svg"}
                url={"/communities"}
                textClass={thumbnailStyles.communities_title}
                illustrationClass={thumbnailStyles.communities_thumbnail}
              />
              <Thumbnail
                title={"Links"}
                illustrationSrc={"images/illustrations/links.svg"}
                url={"/links"}
                textClass={thumbnailStyles.links_title}
                illustrationClass={thumbnailStyles.links_thumbnail}
              />
            </ThumbnailContainer>
          </div>
        </div>
      </SkipNavContent>
    </>
  );
};

export default Home;
