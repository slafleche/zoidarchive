import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../src/components/Navbar";
import { Splash } from "../src/components/Splash";
import { Favicons } from "../src/partials/Favicons";
import utilityStyles from "../styles/components/layout.css";

const Home: NextPage = () => {
  return (
    <>
      <div className={utilityStyles.bodyWrap}>
        <Head>
          <title>Zoid Archive</title>
          <meta name="description" content="Resources for the Zoid Community" />
          <Favicons />
        </Head>
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
        </div>
        <Navbar />
      </div>
    </>
  );
};

export default Home;
