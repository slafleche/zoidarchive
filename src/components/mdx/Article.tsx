import { NextSeo } from "next-seo";
import React from "react";
import { SkipNavContent } from "@reach/skip-nav";
import { Navbar } from "../nav/Navbar";
import ThreeColumns from "../../layouts/ThreeColumns";
import { openGraphHelper } from "../../utils/socialHelper";

interface ArticleProps {
  children: React.ReactChild;
  title: string;
  description: string;
  openGraphData: any;
}
// publishedAt: string;
// slug: string;
// cover: string;
// coverWidth: string;
// coverHeight: string;
// category?: string;
// readingTime?: Record<string, string>;
// hideAuthor?: boolean;

function Article(props: ArticleProps) {
  const { title, description, openGraphData, children } = props;
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={openGraphHelper(openGraphData)}
      />
      <Navbar />
      <SkipNavContent>
        <ThreeColumns title={title} back={"books"}>
          {children}
        </ThreeColumns>
      </SkipNavContent>
    </>
  );
}

export default Article;
