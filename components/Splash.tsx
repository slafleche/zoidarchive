import React, { useMemo } from "react";
import classes from "../styles/components/splash.css";

interface IProps {
  title?: string;
  description?: string;
}

export function Splash(props: IProps) {
  return (
    <>
      <div className={classes.root}>
        <div className={classes.overlay} />
        <h1 className={classes.title}>{props.title}</h1>
        {props.description && (
          <p className={classes.description}>{props.description}</p>
        )}
      </div>
    </>
  );
}
