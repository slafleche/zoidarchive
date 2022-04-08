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
              illustrationSrc={"/images/illustrations/images/faq.png"}
              url={"/faq"}
              className={thumbnailStyles.faq}
              backgroundClass={thumbnailStyles.faq_bg}
              illustrationClass={thumbnailStyles.faq_thumbnail}
              alt="Man asking question"
            />
            <Thumbnail
              title={"Books"}
              illustrationSrc={"/images/illustrations/images/books.png"}
              url={"/books"}
              className={thumbnailStyles.book}
              backgroundClass={thumbnailStyles.books_bg}
              illustrationClass={thumbnailStyles.books_thumbnail}
              alt="Woman reading book"
            />
            <Thumbnail
              title={"Articles"}
              illustrationSrc={"/images/illustrations/images/articles.png"}
              url={"/articles"}
              className={thumbnailStyles.articles}
              backgroundClass={thumbnailStyles.articles_bg}
              illustrationClass={thumbnailStyles.articles_thumbnail}
              alt="Man reading articles on laptop"
            />
            <Thumbnail
              title={"Academic Research"}
              illustrationSrc={"/images/illustrations/images/academic.png"}
              url={"/academic"}
              className={thumbnailStyles.academic}
              backgroundClass={thumbnailStyles.academic_bg}
              illustrationClass={thumbnailStyles.academic_thumbnail}
              alt=""
            />
            <Thumbnail
              title={"Creators"}
              illustrationSrc={"/images/illustrations/images/creators.png"}
              url={"/creators"}
              className={thumbnailStyles.creators}
              backgroundClass={thumbnailStyles.creators_bg}
              illustrationClass={thumbnailStyles.creators_thumbnail}
              alt=""
            />
            <Thumbnail
              title={"Quora"}
              illustrationSrc={"/images/illustrations/images/quora.png"}
              url={"/quora"}
              className={thumbnailStyles.quora}
              backgroundClass={thumbnailStyles.quora_bg}
              illustrationClass={thumbnailStyles.quora_thumbnail}
              alt=""
            />
            <Thumbnail
              title={"Communities"}
              illustrationSrc={"/images/illustrations/images/communities.png"}
              url={"/communities"}
              className={thumbnailStyles.communities}
              backgroundClass={thumbnailStyles.communities_bg}
              illustrationClass={thumbnailStyles.communities_thumbnail}
              alt=""
            />
            <Thumbnail
              title={"Links"}
              illustrationSrc={"/images/illustrations/images/links.png"}
              url={"/links"}
              className={thumbnailStyles.links}
              backgroundClass={thumbnailStyles.links_bg}
              illustrationClass={thumbnailStyles.links_thumbnail}
              alt=""
            />
          </ThumbnailContainer>
        </div>
      </SkipNavContent>
    </>
  );
};

export default Home;
