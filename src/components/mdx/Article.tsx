import { NextSeo } from "next-seo";
import React from "react";
import layoutStyles from "styles/components/layout.css";
import { SkipNavContent } from "@reach/skip-nav";
import { MDXProvider } from "@mdx-js/react";
import Link from "src/components/mdx/Link";
import Image from "src/components/mdx/Image";
import Toto from "src/components/mdx/Toto";
import markupStyles from "styles/markupStyles.css";
import classNames from "classnames";
import { Navbar } from "../nav/Navbar";
import ThreeColumns from "../../layouts/ThreeColumns";

interface ArticleProps {
  children: React.ReactChild;
  title: string;
  description: string;
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
  const { title, description, children } = props;
  return (
    <>
      <NextSeo title={title} description={description} />
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
