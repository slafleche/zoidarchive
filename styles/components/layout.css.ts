import { style } from "@vanilla-extract/css";
import { backgroundHelper } from "../helpers/background";
import { absolutePosition } from "../helpers/positioning";

const layoutStyles = {
  frame: style({
    minHeight: "100vh",
  }),

  main: style({
    position: "relative",
  }),

  content: style({
    maxWidth: "1200px",
    margin: "auto",
    padding: "0 20px",
  }),

  bodyWrap: style({
    overflow: "hidden",
    position: "relative",
    padding: "0 0 150px",
  }),
};

export default layoutStyles;
