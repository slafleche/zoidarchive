import type { NextPage } from "next";
import Head from "next/head";
import { Splash } from "../src/components/Splash";
import utilityStyles from "../styles/components/layout.css";

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

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Loved+by+the+King&family=Sue+Ellen+Francisco&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={utilityStyles.main}>
        <Splash title="Zoid Archive" description="Resources for Schizoids" />

        <div className="">
          <h2>Testing Heading</h2>

          <p>
            Lorem ipsum dolor sit amet. Ad praesentium itaque eos explicabo
            consequuntur ut totam accusantium ut deleniti iure. Et expedita
            sapiente aut pariatur obcaecati ut quia porro? Ad omnis animi et
            voluptates quod non aliquam quidem. Qui omnis illum aut earum Quis
            et eveniet commodi et vero quaerat est necessitatibus tenetur rem
            maiores voluptas.
          </p>
          <p>
            Eum explicabo perspiciatis ut error quibusdam est impedit Quis. Ad
            galisum iure qui voluptas voluptatem ad quia reiciendis nam vero
            rerum est recusandae voluptatum id quia accusantium non repellat
            blanditiis. Cum autem recusandae et recusandae voluptas qui vitae
            minus nam optio facere. A quis perspiciatis et quidem magnam est
            iste assumenda est impedit nulla ex quia voluptatem in veritatis
            ullam ab fuga voluptatum. Est obcaecati provident nihil nemo qui
            enim illo et accusantium magnam in accusantium reiciendis in
            corrupti esse sed ullam nisi. Qui earum dolorum non perferendis
            incidunt ad similique quia ut sequi voluptatem 33 culpa ipsa. Id
            quos cumque rem repellat veniam qui vitae voluptas est itaque quae
            At quas expedita in voluptatem quia ut delectus consequuntur. Aut
            iure nesciunt rem rerum similique sed quasi velit aut minus
            voluptatum ab nulla quae.
          </p>
          <h2>Testing Heading</h2>
          <p>
            Lorem ipsum dolor sit amet. Ad praesentium itaque eos explicabo
            consequuntur ut totam accusantium ut deleniti iure. Et expedita
            sapiente aut pariatur obcaecati ut quia porro? Ad omnis animi et
            voluptates quod non aliquam quidem. Qui omnis illum aut earum Quis
            et eveniet commodi et vero quaerat est necessitatibus tenetur rem
            maiores voluptas.
          </p>
          <p>
            Eum explicabo perspiciatis ut error quibusdam est impedit Quis. Ad
            galisum iure qui voluptas voluptatem ad quia reiciendis nam vero
            rerum est recusandae voluptatum id quia accusantium non repellat
            blanditiis. Cum autem recusandae et recusandae voluptas qui vitae
            minus nam optio facere. A quis perspiciatis et quidem magnam est
            iste assumenda est impedit nulla ex quia voluptatem in veritatis
            ullam ab fuga voluptatum. Est obcaecati provident nihil nemo qui
            enim illo et accusantium magnam in accusantium reiciendis in
            corrupti esse sed ullam nisi. Qui earum dolorum non perferendis
            incidunt ad similique quia ut sequi voluptatem 33 culpa ipsa. Id
            quos cumque rem repellat veniam qui vitae voluptas est itaque quae
            At quas expedita in voluptatem quia ut delectus consequuntur. Aut
            iure nesciunt rem rerum similique sed quasi velit aut minus
            voluptatum ab nulla quae.
          </p>
          <p>
            Lorem ipsum dolor sit amet. Ad praesentium itaque eos explicabo
            consequuntur ut totam accusantium ut deleniti iure. Et expedita
            sapiente aut pariatur obcaecati ut quia porro? Ad omnis animi et
            voluptates quod non aliquam quidem. Qui omnis illum aut earum Quis
            et eveniet commodi et vero quaerat est necessitatibus tenetur rem
            maiores voluptas.
          </p>
          <p>
            Lorem ipsum dolor sit amet. Ad praesentium itaque eos explicabo
            consequuntur ut totam accusantium ut deleniti iure. Et expedita
            sapiente aut pariatur obcaecati ut quia porro? Ad omnis animi et
            voluptates quod non aliquam quidem. Qui omnis illum aut earum Quis
            et eveniet commodi et vero quaerat est necessitatibus tenetur rem
            maiores voluptas.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;
