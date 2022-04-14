import { style } from "@vanilla-extract/css";

export const footerVars = {
  height: "100px",
};

const footerStyles = {
  root: style({
    height: footerVars.height,
    background: "black",
    color: "white",
  }),
  patreon: style({}),
};

export default footerStyles;
