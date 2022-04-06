import React from "react";
import { layoutVars } from "../components/layout.css";
import { calc } from "@vanilla-extract/css-utils";
import { useMediaQuery } from "react-responsive";
import { ComplexStyleRule, style } from "@vanilla-extract/css";

export interface IMediaQuery {
  name: string;
  type?: "all" | "print" | "screen";
  minWidth?: string;
  maxWidth?: string;
}

// https://github.com/yocontra/react-responsive
// To be used in hooks with useMediaQuery()
// Example: const isFullWidth = useMediaQuery(globalMediaQueries.fullWidth);
const globalMediaQueries = {
  fullWidth: {
    minWidth: `${calc.add(
      layoutVars.contentWidth,
      calc.multiply(layoutVars.contentPadding, 2)
    )}`,
  } as IMediaQuery,
  noBleed: {
    minWidth: layoutVars.contentWidth,
  } as IMediaQuery,
  noBleed_exclusive: {
    minWidth: layoutVars.contentWidth,
    maxWidth: calc.subtract(layoutVars.contentWidth, "1px"),
  } as IMediaQuery,
};

export const mediaQueryStyle = (
  query: IMediaQuery,
  style: ComplexStyleRule,
  debug = false
) => {
  const minWidth = query.minWidth ? ` and (min-width: ${query.minWidth})` : ``;
  const maxWidth = query.maxWidth ? ` and (max-width: ${query.maxWidth})` : ``;
  const rule = `${query.type ?? "screen"}${minWidth}${maxWidth}`;
  const mediaQuery = {
    "@media": {
      [rule]: style,
    },
  } as ComplexStyleRule;
  if (debug) {
    console.log("mediaQuery: ", mediaQuery);
  }
  return mediaQuery;
};

export const globalMediaQueryStyles = {
  fullWidth: (style: ComplexStyleRule) => {
    return mediaQueryStyle(globalMediaQueries.fullWidth, style);
  },
  noBleed: (style: ComplexStyleRule) => {
    return mediaQueryStyle(globalMediaQueries.noBleed, style);
  },
  noBleed_exclusive: (style: ComplexStyleRule) => {
    return mediaQueryStyle(globalMediaQueries.noBleed_exclusive, style);
  },
};

export default globalMediaQueries;
