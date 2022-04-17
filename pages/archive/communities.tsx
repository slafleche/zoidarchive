import { Navbar } from "src/components/nav/Navbar";
import { NextSeo } from "next-seo";
import { SkipNavContent } from "@reach/skip-nav";
import utilities from "styles/components/layout.css";
import ThreeColumns from "src/layouts/ThreeColumns";
import SPD from "src/components/text/SPD";
import { Zoid } from "src/components/text/Zoid";
import Link from "next/link";

function Communities() {
  return (
    <>
      <NextSeo title="Communities" />
      <Navbar />
      <SkipNavContent>
        <ThreeColumns title="Communities">
          <p>
            Sounds like an oxymoron, doesn&apos;t it? Schizoids tend to prefer
            solitude, so why would there be a need for communities?
          </p>
          <p>
            There&apos;s no <em>right</em> or <em>wrong</em> way to be schizoid.
            If you are happy having friends and/or family, that&apos;s great.
            Some schizoids are married and have kids. Others prefer complete
            isolatio, that&apos;s ok too. The important thing is that you are
            happy with your situation.
          </p>
          <p>
            Having <SPD /> can mean that you simultaneously want to be close to
            people, but also want to be isolated form people. Finding the right
            balance is difficult and requries a lot of experimentation and
            introspection. It is possible to feel lonely as a <Zoid />. If you
            do, you should seek connection.
          </p>
          <p>
            It is possible to find communities various platforms such as{" "}
            <a
              href="https://disboard.org/search"
              target="_blank"
              rel="noreferrer"
            >
              Discord
            </a>
            ,{" "}
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              YouTube
            </a>
            ,{" "}
            <a href="https://reddit.com" target="_blank" rel="noreferrer">
              Reddit
            </a>
            , or{" "}
            <a href="https://www.quora.com/" target="_blank" rel="noreferrer">
              Quora
            </a>{" "}
            . However, <strong>be warned</strong> that these places may or may
            not be good sources of information. A happy, well adjusteds zoid is
            unlikely to seek out communities online. If a <Zoid /> is happy with
            their situation, why would they seek more social interaction? Online
            communities tend to attract people that suffer from their condition.
            They are likely to be depressed or have{" "}
            <Link href="/related">comorbidities</Link>. That&apos;s not to say
            you can&apos;t find meaningful connection online, but be warned that
            you may find toxic communities or individuals.
          </p>
          <p>
            You&apos;re not required to connect online either. Perhaps signing
            up for a weekly pottery class would give you enough socialization
            for the week. Or maybe you need more and volunteer 3 times a week.
            There&apos;s no one size fits all solution. Try things out. If it
            does&apos;t work, try something else.
          </p>
        </ThreeColumns>
      </SkipNavContent>
    </>
  );
}

export default Communities;
