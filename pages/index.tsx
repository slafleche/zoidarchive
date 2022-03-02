import type { NextPage } from "next";
import Head from "next/head";
import { Splash } from "../components/Splash";
import utilityStyles from "../styles/utilityStyles.css";

const Home: NextPage = () => {
  return (
    <div className={utilityStyles.frame}>
      <Head>
        <title>Zoid Archive</title>
        <meta name="description" content="Resources for the Zoid Community" />

        {/* Favicons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#4a4a4a"
        />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#060606" />
        <meta
          name="msapplication-TileImage"
          content="favicons/mstile-144x144.png"
        />
        <meta
          name="msapplication-config"
          content="favicons/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <main className={utilityStyles.main}>
        <Splash title="Zoid Archive" description="desc" />
      </main>
    </div>
  );
};

export default Home;
