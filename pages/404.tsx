import { NextSeo } from "next-seo";
import SVG from "react-inlinesvg";
import notFoundStyles from "../styles/components/404.css";
import Link from "next/link";

function notFound() {
  return (
    <>
      <NextSeo title="404 Page Not Found" />
      <div className={notFoundStyles.root}>
        <h1 className={notFoundStyles.title}>
          <span className={notFoundStyles.titleCode}>
            <strong>404</strong>
          </span>
          <span className={notFoundStyles.titleText}>Page Not Found</span>
        </h1>
        <Link href="/" passHref>
          <a className={notFoundStyles.backLink}>
            <SVG className={notFoundStyles.backIcon} src={"images/back.svg"} />
            <span className={notFoundStyles.backText}>Back</span>
          </a>
        </Link>
      </div>
    </>
  );
}

export default notFound;
