import { createTheme, style } from "@vanilla-extract/css";
import * as csstype from "csstype";
import { utilVars, math, measurement } from "../../utils/styleUtils";
import { spin } from "../globals.css";
import { centeredBackground } from "../helpers/background";
import { absolutePosition, flexPosition } from "../helpers/positioning";

const logoSize = measurement("50px");
const logoWrapSize = math.multiply(logoSize, 1.5);

const vars = {
  logo: {
    size: logoSize.toString(),
  },
  size: {
    font: "16vw",
  },
};

const logoSpacer = style({
  ...flexPosition.middle(),
  position: "relative",
  width: logoWrapSize,
  height: logoWrapSize,
  minWidth: vars.logo.size,
  minHeight: vars.logo.size,
  zIndex: 1,
  transform: "translate(0, 15%)",

  selectors: {
    "&:before": {
      ...absolutePosition.fullSize(),
      content: "",
      backgroundColor: "black",
      borderRadius: "50%",
      display: "block",
      boxShadow: "0 0 10px black",
      opacity: "0.3",
      transform: "translate(0%, 5%) scale(65%)",
    },
  },
});

const logo = style({
  width: vars.logo.size,
  height: "auto",
  animation: `14s infinite linear ${spin}`,
});

export default {
  root: style({
    ...centeredBackground("/images/hero.jpg"),
    minHeight: "100vh",
    color: utilVars.white.hex(),
    ...flexPosition.middle(),
    position: "relative",
  }),
  title: style({
    ...flexPosition.middle(),
    padding: "0",
    margin: "0",
    fontSize: vars.size.font,
    textShadow: "rgb(0 0 0 / 100%) 4px 7px 15px",
    color: utilVars.white.hex(),
  }),
  titleWrap: style({
    ...flexPosition.middle(),
  }),
  description: style({
    display: "block",
    padding: "0",
    margin: "0",
    textShadow: "rgb(0 0 0 / 100%) 4px 7px 15px",
    backgroundColor: utilVars.black.alpha(0.5).hex(),
    width: "100%",
    textAlign: "center",
  }),

  overlay: style({
    ...absolutePosition.fullSize(),
  }),
  content: style({
    ...flexPosition.middleLeft(true),
    width: "100%",
    flexDirection: "column",
  }),

  titleZoid: style({
    marginRight: "0.59ex",
  }),
  titleArchive: style({
    marginLeft: "-0.12ex",
  }),
  titleWord: style({
    letterSpacing: "-0.2ex",
  }),
  scrollToContent: style({
    ...absolutePosition.middleBottom(),
    width: "100%",
    height: "100px",
    ...flexPosition.middle(),
    opacity: 0.5,
    transition: "opacity 0.2s ease-out",
    selectors: {
      [`&:hover, &:active, &:focus`]: {
        opacity: 0.8,
      },
    },
  }),
  scrollToContentIcon: style({
    fill: utilVars.white.hex(),
    width: "60px",
  }),
  logoSpacer,
  logo,
};
