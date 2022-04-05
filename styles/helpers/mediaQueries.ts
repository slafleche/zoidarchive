import React from "react";
import { layoutVars } from "../components/layout.css";
import { calc } from "@vanilla-extract/css-utils";
import { useMediaQuery } from "react-responsive";
import { ComplexStyleRule, style } from "@vanilla-extract/css";

interface IMediaQuery {
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
  },
  noBleed: {
    minWidth: layoutVars.contentWidth,
  },
  noBleed_exclusive: {
    minWidth: layoutVars.contentWidth,
    maxWidth: calc.subtract(layoutVars.contentWidth, "1px"),
  },
};

const globalMediaQueriesStyles = (
  query: IMediaQuery,
  style: ComplexStyleRule
) => {
  const minWidth = query.minWidth ? ` and (min-width: ${query.minWidth})` : ``;
  const maxWidth = query.maxWidth ? ` and (max-width: ${query.maxWidth})` : ``;
  const rule = `${query.type}${minWidth}${maxWidth}`;
  return {
    "@media": {
      [rule]: style,
    },
  };
};

export default globalMediaQueries;
