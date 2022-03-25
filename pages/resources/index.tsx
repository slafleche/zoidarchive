import { Navbar } from "../../src/components/Navbar";
import { NextSeo } from "next-seo";
import utilityStyles from "../../styles/components/layout.css";
import { SkipNavContent } from "@reach/skip-nav";
import { Card, CardStyle, CardTheme } from "../../src/components/Card";
import Link from "next/link";
import UrlObject from "next/router";
import { Key, ReactChild, ReactFragment, ReactPortal } from "react";

interface ICategory {
  id: Key;
  title: string;
  body: string;
  slug: string;
}

function Resources(categories: ICategory[]) {
  return (
    <>
      <NextSeo title="Schizoid Communities" />
      <Navbar />
      <SkipNavContent>
        <div className={utilityStyles.content}>
          <h1>Zoid Resources</h1>

          {/* <Card
            title="Books"
            description={<></>}
            imageSrc="/images/community_thumbnails/reddit.svg"
          /> */}
          <ul>
            {categories.map((category: ICategory) => {
              console.log(">>>>> category: ", category);
              console.log(">>>>> category: ", typeof category.id);
              console.log(">>>>> category: ", typeof category.slug);
              console.log(">>>>> category: ", typeof category.title);

              return (
                <>
                  {/* <li key={category.id}>
                    <Link
                      href={{
                        pathname: "/resources/[slug]",
                        query: { slug: category.slug },
                      }}
                    >
                      <a>{category.title}</a>
                    </Link>
                  </li> */}
                </>
              );
            })}
          </ul>
        </div>
      </SkipNavContent>
    </>
  );
}

export default Resources;
