import { Navbar } from "../../src/components/nav/Navbar";
import { NextSeo } from "next-seo";
import utilityStyles from "../../styles/components/layout.css";
import { SkipNavContent } from "@reach/skip-nav";
import { Key, ReactChild, ReactFragment, ReactPortal } from "react";
import classNames from "classnames";
import ThreeColumns from "../../src/layouts/ThreeColumns";

interface ICategory {
  id: Key;
  title: string;
  body: string;
  slug: string;
}

function Archive() {
  const categories: ICategory[] = [];
  return (
    <>
      <NextSeo title="The Archive" />
      <Navbar />
      <SkipNavContent>
        <ThreeColumns navigation={undefined}>
          <h1>The Archive</h1>
          <p>
            Lorem Ipsum è un testo segnaposto utilizzato nel settore della
            tipografia e della stampa. Lorem Ipsum è considerato il testo
            segnaposto standard sin dal sedicesimo secolo, quando un anonimo
            tipografo prese una cassetta di caratteri e li assemblò per
            preparare un testo campione. È sopravvissuto non solo a più di
            cinque secoli, ma anche al passaggio alla videoimpaginazione,
            pervenendoci sostanzialmente inalterato. Fu reso popolare, negli
            anni ’60, con la diffusione dei fogli di caratteri trasferibili
            “Letraset”, che contenevano passaggi del Lorem Ipsum, e più
            recentemente da software di impaginazione come Aldus PageMaker, che
            includeva versioni del Lorem Ipsum.
          </p>
          <h2>Testing</h2>
          <p>
            Lorem Ipsum è un testo segnaposto utilizzato nel settore della
            tipografia e della stampa. Lorem Ipsum è considerato il testo
            segnaposto standard sin dal sedicesimo secolo, quando un anonimo
            tipografo prese una cassetta di caratteri e li assemblò per
            preparare un testo campione. È sopravvissuto non solo a più di
            cinque secoli, ma anche al passaggio alla videoimpaginazione,
            pervenendoci sostanzialmente inalterato. Fu reso popolare, negli
            anni ’60, con la diffusione dei fogli di caratteri trasferibili
            “Letraset”, che contenevano passaggi del Lorem Ipsum, e più
            recentemente da software di impaginazione come Aldus PageMaker, che
            includeva versioni del Lorem Ipsum.
          </p>
          <h2>Testing2</h2>
          <p>
            Lorem Ipsum è un testo segnaposto utilizzato nel settore della
            tipografia e della stampa. Lorem Ipsum è considerato il testo
            segnaposto standard sin dal sedicesimo secolo, quando un anonimo
            tipografo prese una cassetta di caratteri e li assemblò per
            preparare un testo campione. È sopravvissuto non solo a più di
            cinque secoli, ma anche al passaggio alla videoimpaginazione,
            pervenendoci sostanzialmente inalterato. Fu reso popolare, negli
            anni ’60, con la diffusione dei fogli di caratteri trasferibili
            “Letraset”, che contenevano passaggi del Lorem Ipsum, e più
            recentemente da software di impaginazione come Aldus PageMaker, che
            includeva versioni del Lorem Ipsum.
          </p>
          <h3>Testing2</h3>
          <p>
            Lorem Ipsum è un testo segnaposto utilizzato nel settore della
            tipografia e della stampa. Lorem Ipsum è considerato il testo
            segnaposto standard sin dal sedicesimo secolo, quando un anonimo
            tipografo prese una cassetta di caratteri e li assemblò per
            preparare un testo campione. È sopravvissuto non solo a più di
            cinque secoli, ma anche al passaggio alla videoimpaginazione,
            pervenendoci sostanzialmente inalterato. Fu reso popolare, negli
            anni ’60, con la diffusione dei fogli di caratteri trasferibili
            “Letraset”, che contenevano passaggi del Lorem Ipsum, e più
            recentemente da software di impaginazione come Aldus PageMaker, che
            includeva versioni del Lorem Ipsum.
          </p>
          <h3>Testing 4</h3>
          <p>
            Lorem Ipsum è un testo segnaposto utilizzato nel settore della
            tipografia e della stampa. Lorem Ipsum è considerato il testo
            segnaposto standard sin dal sedicesimo secolo, quando un anonimo
            tipografo prese una cassetta di caratteri e li assemblò per
            preparare un testo campione. È sopravvissuto non solo a più di
            cinque secoli, ma anche al passaggio alla videoimpaginazione,
            pervenendoci sostanzialmente inalterato. Fu reso popolare, negli
            anni ’60, con la diffusione dei fogli di caratteri trasferibili
            “Letraset”, che contenevano passaggi del Lorem Ipsum, e più
            recentemente da software di impaginazione come Aldus PageMaker, che
            includeva versioni del Lorem Ipsum.
          </p>
          <h2>Testing asdfas asf asdf asf dasf a f2</h2>
          <p>
            Lorem Ipsum è un testo segnaposto utilizzato nel settore della
            tipografia e della stampa. Lorem Ipsum è considerato il testo
            segnaposto standard sin dal sedicesimo secolo, quando un anonimo
            tipografo prese una cassetta di caratteri e li assemblò per
            preparare un testo campione. È sopravvissuto non solo a più di
            cinque secoli, ma anche al passaggio alla videoimpaginazione,
            pervenendoci sostanzialmente inalterato. Fu reso popolare, negli
            anni ’60, con la diffusione dei fogli di caratteri trasferibili
            “Letraset”, che contenevano passaggi del Lorem Ipsum, e più
            recentemente da software di impaginazione come Aldus PageMaker, che
            includeva versioni del Lorem Ipsum.
          </p>
          <h2>Testing asdfas asf asdf asf dasf a f2</h2>
          <h2>Testing asdfas asf asdf asf dasf a f2</h2>
          <h2>Testing asdfas asf asdf asf dasf a f2</h2>
          <h2>Testing asdfas asf asdf asf dasf a f2</h2>
          <h2>Testing asdfas asf asdf asf dasf a f2</h2>
          <h2>Testing asdfas asf asdf asf dasf a f2</h2>
          <h2>Testing asdfas asf asdf asf dasf a f2</h2>
          <h2>Testing asdfas asf asdf asf dasf a f2</h2>
          <h2>Testing asdfas asf asdf asf dasf a f2</h2>

          <h2>Testing asdfas asf asdf asf dasf a f2</h2>
          <h2>Testing asdfas asf asdf asf dasf a f2</h2>
          <h2>Testing asdfas asf asdf asf dasf a f2</h2>
          <h2>Testing asdfas asf asdf asf dasf a f2</h2>
          <h2>Testing asdfas asf asdf asf dasf a f2</h2>
          <h2>Testing asdfas asf asdf asf dasf a f2</h2>
          <h2>Testing asdfas asf asdf asf dasf a f2</h2>
          <h2>Testing asdfas asf asdf asf dasf a f2</h2>
          <h2>Testing asdfas asf asdf asf dasf a f2</h2>
          <h2>Testing asdfas asf asdf asf dasf a f2</h2>
          <h2>Testing asdfas asf asdf asf dasf a f2</h2>
          <h2>Testing asdfas asf asdf asf dasf a f2</h2>
          <h2>Testing asdfas asf asdf asf dasf a f2</h2>
          <h2>Testing asdfas asf asdf asf dasf a f2</h2>
          <h2>Testing asdfas asf asdf asf dasf a f2</h2>
          <h2>Testing asdfas asf asdf asf dasf a f2</h2>
          <h2>Testing asdfas asf asdf asf dasf a f2</h2>
          <h2>Testing asdfas asf asdf asf dasf a f2</h2>
        </ThreeColumns>
      </SkipNavContent>
    </>
  );
}

export default Archive;
