import React, { useMemo } from "react";
import classes from "../../styles/components/splash.css";
import { Logo } from "./Logo";
import classNames from "classnames";

interface IProps {
  description?: string;
}

export function Splash(props: IProps) {
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
          {props.description && (
            <p className={classes.description}>{props.description}</p>
          )}
        </div>
      </div>
    </>
  );
}
