import { Navbar } from "src/components/nav/Navbar";
import { NextSeo } from "next-seo";
import { SkipNavContent } from "@reach/skip-nav";
import { Key, useEffect, useState } from "react";
import ThreeColumns from "src/layouts/ThreeColumns";
import Link from "next/link";

function Archive() {
  return (
    <>
      <NextSeo title="The Archive" />
      <Navbar />
      <SkipNavContent>
        <ThreeColumns title="The Archive">
          <p>
            The Zoid Archive is a curated list of resources about Schizoid
            Personality Disorder. We are still new, so be sure to come back to
            see updates.
          </p>
          <p>
            You can get involved by{" "}
            <Link href="/contribute">
              suggesting changes, or submitting new content.
            </Link>
          </p>
        </ThreeColumns>
      </SkipNavContent>
    </>
  );
}

export default Archive;
