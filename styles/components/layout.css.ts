import { style } from "@vanilla-extract/css";
import { backgroundHelper } from "../helpers/background";
import { absolutePosition } from "../helpers/positioning";
import { paddings } from "../helpers/spacing";

export const layoutVars = {
  contentWidth: "1200px",
  contentPadding: "20px",
};

const layoutStyles = {
  frame: style({
    minHeight: "100vh",
  }),

  main: style({
    position: "relative",
  }),

  content: style({
    maxWidth: layoutVars.contentWidth,
    margin: "auto",
    ...paddings({
      horiziontal: layoutVars.contentPadding,
    }),
  }),

  bodyWrap: style({
    overflow: "hidden",
    position: "relative",
    padding: "0 0 150px",
  }),
};

export default layoutStyles;
