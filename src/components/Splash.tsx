import React from "react";
import classes from "../../styles/components/splash.css";
import { Logo } from "./Logo";
import classNames from "classnames";
import { Link, animateScroll as scroll } from "react-scroll";

export function Splash() {
  
  return (
    <>
      <div className={classes.root}>
        <div className={classes.overlay} />
        <div className={classes.content}>
          <h1 className={classes.title}>
            <span className={classes.titleWord}>Zoid</span>
            <div className={classes.logoSpacer}>
              <Logo className={classNames(classes.logo)} />
            </div>
            <span className={classes.titleWord}>Archive</span>
          </h1>

          <p className={classes.description}>Resources for Schizoids</p>

          <Link
            to="afterSplash"
            smooth={true}
            isDynamic={true}
            style={{
              zIndex: 10,
              display: "block",
              position: "relative",
              
              padding: "10px 10px",
              cursor: "pointer",
            }}
          >
            Click to go down
          </Link>
        </div>
      </div>
    </>
  );
}
