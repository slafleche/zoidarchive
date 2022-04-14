import { NextSeo } from "next-seo";
import notFoundStyles from "styles/components/404.css";
import Link from "next/link";
import RocketSVG from "public/svgs/rocketCrash.svg";
import BackSVG from "public/svgs/back.svg";

function NotFound() {
  return (
    <>
      <NextSeo title="404 Page Not Found" />
      <div className={notFoundStyles.root}>
        <div className={notFoundStyles.frame}>
          <RocketSVG
            title="Crashed Rocket"
            src="images/illustrations/404.svg"
            className={notFoundStyles.illustration}
          />
          <h1 className={notFoundStyles.title}>
            <span className={notFoundStyles.titleCode}>
              <strong>404</strong>
            </span>
            <span className={notFoundStyles.titleText}>Page Not Found</span>
          </h1>
          <Link href="/" passHref>
            <a className={notFoundStyles.backLink}>
              <BackSVG
                className={notFoundStyles.backIcon}
                src={"images/back.svg"}
              />
              <span className={notFoundStyles.backText}>Back</span>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
