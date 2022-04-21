import { NextSeo } from "next-seo";
import { Navbar } from "src/components/nav/Navbar";
import { SkipNavContent } from "@reach/skip-nav";

interface IProps {
  children: React.ReactElement;
  title;
}

function MDXLayout({ children, title }) {
  return (
    <>
      <NextSeo title={title} />
      <Navbar />
      <SkipNavContent>
        <h1>{title}</h1>
        {children}
      </SkipNavContent>
    </>
  );
}

export default MDXLayout;
