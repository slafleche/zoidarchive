import { createTheme, style } from "@vanilla-extract/css";
import { utilVars } from "../../utils/styleUtils";

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
  item: style({
    listStyle: "none",
  }),
  link: style({
    color: utilVars.white.css(),
    textDecoration: "none",
    fontWeight: "",
    selectors: {
      [`&.isActive`]: {
        textDecoration: "underline",
      },
    },
  }),
};

export default navBarStyles;
