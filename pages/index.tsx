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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={utilityStyles.main}>
        <Splash title="Zoid Archive" description="desc" />
      </main>
    </div>
  );
};

export default Home;
