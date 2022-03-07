import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../src/components/Navbar";
import { Splash } from "../src/components/Splash";
import utilityStyles from "../styles/components/layout.css";

const Home: NextPage = () => {
  return (
    <>
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
          color="#6f7070"
        />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicons/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <div className={utilityStyles.bodyWrap}>
        <div className={utilityStyles.frame}>
          <main className={utilityStyles.main}>
            <Splash />
            <div className={utilityStyles.content}>
              <h2>Testing Heading</h2>

              <p>
                Lorem ipsum dolor sit amet. Ad praesentium itaque eos explicabo
                consequuntur ut totam accusantium ut deleniti iure. Et expedita
                sapiente aut pariatur obcaecati ut quia porro? Ad omnis animi et
                voluptates quod non aliquam quidem. Qui omnis illum aut earum
                Quis et eveniet commodi et vero quaerat est necessitatibus
                tenetur rem maiores voluptas.
              </p>
              <p>
                Eum explicabo perspiciatis ut error quibusdam est impedit Quis.
                Ad galisum iure qui voluptas voluptatem ad quia reiciendis nam
                vero rerum est recusandae voluptatum id quia accusantium non
                repellat blanditiis. Cum autem recusandae et recusandae voluptas
                qui vitae minus nam optio facere. A quis perspiciatis et quidem
                magnam est iste assumenda est impedit nulla ex quia voluptatem
                in veritatis ullam ab fuga voluptatum. Est obcaecati provident
                nihil nemo qui enim illo et accusantium magnam in accusantium
                reiciendis in corrupti esse sed ullam nisi. Qui earum dolorum
                non perferendis incidunt ad similique quia ut sequi voluptatem
                33 culpa ipsa. Id quos cumque rem repellat veniam qui vitae
                voluptas est itaque quae At quas expedita in voluptatem quia ut
                delectus consequuntur. Aut iure nesciunt rem rerum similique sed
                quasi velit aut minus voluptatum ab nulla quae.
              </p>
              <h2>Testing Heading</h2>
              <p>
                Lorem ipsum dolor sit amet. Ad praesentium itaque eos explicabo
                consequuntur ut totam accusantium ut deleniti iure. Et expedita
                sapiente aut pariatur obcaecati ut quia porro? Ad omnis animi et
                voluptates quod non aliquam quidem. Qui omnis illum aut earum
                Quis et eveniet commodi et vero quaerat est necessitatibus
                tenetur rem maiores voluptas.
              </p>
              <p>
                Eum explicabo perspiciatis ut error quibusdam est impedit Quis.
                Ad galisum iure qui voluptas voluptatem ad quia reiciendis nam
                vero rerum est recusandae voluptatum id quia accusantium non
                repellat blanditiis. Cum autem recusandae et recusandae voluptas
                qui vitae minus nam optio facere. A quis perspiciatis et quidem
                magnam est iste assumenda est impedit nulla ex quia voluptatem
                in veritatis ullam ab fuga voluptatum. Est obcaecati provident
                nihil nemo qui enim illo et accusantium magnam in accusantium
                reiciendis in corrupti esse sed ullam nisi. Qui earum dolorum
                non perferendis incidunt ad similique quia ut sequi voluptatem
                33 culpa ipsa. Id quos cumque rem repellat veniam qui vitae
                voluptas est itaque quae At quas expedita in voluptatem quia ut
                delectus consequuntur. Aut iure nesciunt rem rerum similique sed
                quasi velit aut minus voluptatum ab nulla quae.
              </p>
              <p>
                Lorem ipsum dolor sit amet. Ad praesentium itaque eos explicabo
                consequuntur ut totam accusantium ut deleniti iure. Et expedita
                sapiente aut pariatur obcaecati ut quia porro? Ad omnis animi et
                voluptates quod non aliquam quidem. Qui omnis illum aut earum
                Quis et eveniet commodi et vero quaerat est necessitatibus
                tenetur rem maiores voluptas.
              </p>
              <p>
                Lorem ipsum dolor sit amet. Ad praesentium itaque eos explicabo
                consequuntur ut totam accusantium ut deleniti iure. Et expedita
                sapiente aut pariatur obcaecati ut quia porro? Ad omnis animi et
                voluptates quod non aliquam quidem. Qui omnis illum aut earum
                Quis et eveniet commodi et vero quaerat est necessitatibus
                tenetur rem maiores voluptas.
              </p>
            </div>
          </main>
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default Home;
