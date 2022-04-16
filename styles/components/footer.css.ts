import { style } from "@vanilla-extract/css";
import { colors } from "../colors.css";
import { globalShadow } from "../helpers/shadows";

export const footerVars = {
  height: "60px",
};

const footerStyles = {
  root: style({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    height: footerVars.height,
    backgroundColor: colors.black.brighten(5).css(),
    borderTop: `solid ${colors.black.mix(colors.white, 0.7)} 1px`,
  }),
  content: style({
    display: "flex",
    flexDirection: "row",
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
    marginRight: "30px",
  }),
  copyright: style({
    fontSize: "16px",
    lineHeight: 1,
    alignSelf: "center",
    color: colors.black.mix(colors.white, 0.1).css(),
  }),
};

export default footerStyles;
