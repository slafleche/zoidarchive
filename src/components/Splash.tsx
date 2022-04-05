import React from "react";
import classes from "../../styles/components/splash.css";
import { Logo } from "./Logo";
import classNames from "classnames";
import { Link } from "react-scroll";
import utilityClasses from "../../styles/utilityClasses.css";
import SVG from "react-inlinesvg";
import Tooltip from "@reach/tooltip";

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
            <span className={utilityClasses.isScOnly}>The Zoid Archive</span>
            <SVG
              aria-hidden="true"
              className={classes.hero}
              src={"images/heroTitle.svg"}
            />
          </h1>
        </div>
        <Link
          to={id}
          aria-label="Skip to Content"
          isDynamic={true}
          className={classes.scrollToContent}
          href={`#${id}`}
        >
          {/* <Tooltip label={"Scroll down to content"} > */}
          <div className={utilityClasses.center}>
            <SVG
              className={classes.scrollToContentIcon}
              src={"images/chevronDown.svg"}
              fill="#fff"
            />
          </div>
          {/* </Tooltip> */}
        </Link>
      </div>
      <div id={id} />
    </>
  );
}
