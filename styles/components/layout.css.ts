import { style } from "@vanilla-extract/css";
import * as csstype from "csstype";

const layout = {
  frame: style({
    minHeight: "100vh",
  }),

  main: style({
    position: "relative",
  }),
};

export default layout;
