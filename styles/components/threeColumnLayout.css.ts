import { globalStyle, style } from "@vanilla-extract/css";

const threeColumnLayoutStyles = {
  root: style({
    display: "grid",
    gridTemplateColumns: `2fr 3fr 2fr`,
    columnGap: "36px",
  }),
  nav: style({}),
  main: style({}),
  toc: style({
    height: "100%",
  }),
};

export default threeColumnLayoutStyles;
