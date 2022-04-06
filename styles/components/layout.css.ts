import { style } from "@vanilla-extract/css";
import { paddings } from "../helpers/spacing";

export const layoutVars = {
  contentWidth: "1400px",
  contentPadding: "40px",
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
      horizontal: layoutVars.contentPadding,
    }),
  }),

  fullWidth: style({
    margin: "auto",
    ...paddings({
      horizontal: layoutVars.contentPadding,
    }),
  }),

  bodyWrap: style({
    overflow: "hidden",
    position: "relative",
    padding: "0 0 150px",
  }),
};

export default layoutStyles;
