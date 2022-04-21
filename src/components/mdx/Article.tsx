import { NextSeo } from "next-seo";
import React from "react";
import layoutStyles from "styles/components/layout.css";
import Footer from "src/components/Footer";
import ScrollToTop from "src/components/ScrollToTop";
import { SkipNavContent } from "@reach/skip-nav";
import { Navbar } from "../nav/Navbar";

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
      <div className={layoutStyles.stickyFooter}>
        <div className={layoutStyles.mainSection}>
          <SkipNavContent>
            <div className={layoutStyles.content}>
              <h1>{title}</h1>
              <div className="article-content">{children}</div>
            </div>
          </SkipNavContent>
        </div>
        <Footer />
      </div>
      <ScrollToTop />
    </>
  );
}

export default Article;
