import { style } from "@vanilla-extract/css";
import { colors } from "../colors.css";
import { globalShadow } from "../helpers/shadows";

export const footerVars = {
  height: "120px",
};

const footerStyles = {
  root: style({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    height: footerVars.height,
    backgroundColor: colors.white.alpha(0.2).css(),
    boxShadow: globalShadow({
      x: 0,
      y: "-2px",
      color: colors.shadow.alpha(0.05),
    }),
  }),
  link: style({
    display: "flex",
    alignItems: "center",

    opacity: "0.6",
    selectors: {
      "&:hover, &:focus, &.focus-visible": {
        opacity: "0.8",
      },
    },
  }),
  patreon: style({
    color: colors.black.css(),
    width: "30px",
    marginRight: "auto",
  }),
};

export default footerStyles;
