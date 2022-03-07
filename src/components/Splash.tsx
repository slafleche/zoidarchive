import React from "react";
import classes from "../../styles/components/splash.css";
import { Logo } from "./Logo";
import classNames from "classnames";
import { Link } from "react-scroll";
import utilityClasses from "../../styles/utilityClasses.css";

export function Splash() {
  const id = "afterSplash";

  return (
    <>
      <div className={classes.root}>
        <div className={classes.overlay} />
        <div className={classes.content}>
          <h1 className={classes.title}>
            <span className={classNames(classes.titleWord, classes.titleZoid)}>
              Zoid
            </span>
            <div className={classes.logoSpacer}>
              <Logo className={classNames(classes.logo)} />
            </div>
            <span
              className={classNames(classes.titleWord, classes.titleArchive)}
            >
              Archive
            </span>
          </h1>

          <p className={classes.description}>Resources for Schizoids</p>
        </div>
        <Link
          to={id}
          smooth={true}
          isDynamic={true}
          className={classes.scrollToContent}
          href={`#${id}`}
        >
          <span className={utilityClasses.isScOnly}>
            Scroll to start of content
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            viewBox="0 0 24 24"
            className={classes.scrollToContentIcon}
          >
            <defs>
              <filter id="shadow">
                <feDropShadow dx="0.5" dy="0.4" stdDeviation="0.9" />
              </filter>
            </defs>
            <title>Arrow Down</title>
            <desc>Down arrow icon</desc>
            <rect fill="none" height="24" width="24" />
            <polygon
              points="18,6.41 16.59,5 12,9.58 7.41,5 6,6.41 12,12.41"
              filter="url(#shadow)"
            />
            <polygon
              points="18,13 16.59,11.59 12,16.17 7.41,11.59 6,13 12,19"
              filter="url(#shadow)"
            />
          </svg>
        </Link>
      </div>
      <div id={id} />
    </>
  );
}
