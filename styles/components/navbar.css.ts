import { createTheme, style } from "@vanilla-extract/css";
import * as csstype from "csstype";

const navBarStyles = {
  root: style({}),
  nav: style({}),
  items: style({}),
  item: style({}),
  link: style({
    color: "orange",
    selectors: {
      [`&.isActive`]: {
        color: "green",
      },
    },
  }),
};

export default navBarStyles;
