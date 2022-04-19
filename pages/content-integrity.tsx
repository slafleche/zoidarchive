import { Navbar } from "src/components/nav/Navbar";
import { NextSeo } from "next-seo";
import utilities from "styles/components/layout.css";
import { SkipNavContent } from "@reach/skip-nav";
import Link from "next/link";

function ContentIntegrity() {
  return (
    <>
      <NextSeo title="Content Integrity" />
      <Navbar />
      <SkipNavContent>
        <div className={utilities.content}>
          <h1>Accessibility as a core value</h1>

          <p>
            We at the Zoid Archive are commited to bring scientifically backed,
            trustworthy mental health information. If you find mistakes, or
            discredited research, please report it through our{" "}
            <Link href="/contact">contact form</Link>.
          </p>
        </div>
      </SkipNavContent>
    </>
  );
}

export default ContentIntegrity;
