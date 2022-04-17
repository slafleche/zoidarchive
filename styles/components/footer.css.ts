import { globalStyle, keyframes, style } from "@vanilla-extract/css";
import { colors } from "../colors.css";

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
    fontSize: "16px",
    lineHeight: 1,
    color: colors.black.mix(colors.white, 0.1).css(),
  }),
  link: style({
    display: "flex",
    alignItems: "center",
    opacity: "0.6",
    transition: "opacity 0.2s ease-out",
    selectors: {
      "&:hover, &:focus, &.focus-visible": {
        opacity: "0.8",
      },
    },
  }),

  copyright: style({
    alignSelf: "center",
    marginRight: "40px",
  }),
};

export default footerStyles;
