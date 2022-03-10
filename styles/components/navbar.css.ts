import { createTheme, style } from "@vanilla-extract/css";

const vars = {
  height: "50px",
};

const navBarStyles = {
  root: style({
    height: vars.height,
  }),
  detachable: style({
    height: vars.height,
  }),
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
