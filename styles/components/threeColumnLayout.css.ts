import { style } from "@vanilla-extract/css";

const threeColumnLayoutStyles = {
  root: style({
    display: "grid",
    gridTemplateColumns: `1fr 2fr 1fr`,
  }),
  nav: style({}),
  main: style({}),
  toc: style({
    height: "100%",
    overflow: "auto",
  }),
};

export default threeColumnLayoutStyles;
