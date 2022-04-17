import React from "react";
import classes from "styles/components/splash.css";
import { Link } from "react-scroll";
import utilityStyles from "styles/utilities.css";
import HeroTitleSVG from "public/svgs/heroTitle.svg";
import ChevronDown from "public/svgs/chevronDown.svg";

export function Splash() {
  const id = "afterSplash";

  return (
    <>
      <div className={classes.root}>
        <div className={classes.overlay}>
          <div className={classes.counterGradient} />
        </div>
        <div className={classes.content}>
          <h1 className={classes.title}>
            <span className={utilityStyles.isScOnly}>The Zoid Archive</span>
            <HeroTitleSVG aria-hidden="true" className={classes.hero} />
          </h1>
        </div>
        <Link
          to={id}
          aria-label="Skip to Content"
          isDynamic={true}
          className={classes.scrollToContent}
          href={`#${id}`}
        >
          <div className={utilityStyles.center}>
            <ChevronDown className={classes.scrollToContentIcon} fill="#fff" />
          </div>
        </Link>
      </div>
      <div id={id} />
    </>
  );
}
