import { Navbar } from "src/components/nav/Navbar";
import { NextSeo } from "next-seo";
import utilities from "styles/components/layout.css";
import { SkipNavContent } from "@reach/skip-nav";
import Link from "next/link";

function Accessibility() {
  return (
    <>
      <NextSeo title="Accessibility" />
      <Navbar />
      <SkipNavContent>
        <div className={utilities.content}>
          <h1>Accessibility as a core value</h1>
          <p>
            We at the Zoid Archive consider accessibility to be a core value. We
            strive to follow best practices. If you find mistakes, or
            are experiences difficulties using our site, please report it through our{" "}
            <Link href="/contact">contact form</Link>.
          </p>
        </div>
      </SkipNavContent>
    </>
  );
}

export default Accessibility;
