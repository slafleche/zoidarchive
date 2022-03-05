import { createTheme, style } from "@vanilla-extract/css";
import * as styleUtils from "../../utils/styleUtils";
import { spin } from "../globals.css";
import { centeredBackground } from "../helpers/background";
import { absolutePosition, flexPosition } from "../helpers/positioning";

export const [themeClass, vars] = createTheme({
  color: {
    // brand: "blue",
  },
  font: {
    // body: "arial",
  },
});

const splashVars = {
  fontSize: "300px",
};

export default {
  root: style({
    ...centeredBackground("/images/hero.jpg"),
    minHeight: "100vh",
    color: styleUtils.utilVars.white.hex(),
    ...flexPosition().middle(),
  }),
  title: style({
    ...flexPosition().middle(),
    padding: "0",
    margin: "0",
    fontSize: splashVars.fontSize,
    textShadow: "rgb(0 0 0 / 100%) 4px 7px 15px",
  }),
  titleWrap: style({
    ...flexPosition().middle(),
  }),
  description: style({
    display: "block",
    padding: "0",
    margin: "0",
    textShadow: "rgb(0 0 0 / 100%) 4px 7px 15px",
    backgroundColor: styleUtils.utilVars.black.alpha(0.5).hex(),
    width: "100%",
    textAlign: "center",
  }),

  overlay: style({
    ...absolutePosition.fullSize(),
  }),
  content: style({
    ...flexPosition().middleLeft(true),
    width: "100%",
    flexDirection: "column",
  }),
  logo: style({
    width: "50px",
    height: "auto",
    animation: `4s infinite linear ${spin}`,
    margin: "0 10px 20px",
  }),
  titleWord: style({}),
  logoSpacer: style({
    ...flexPosition().middle(),
    width: styleUtils.divide(splashVars.fontSize, 2),
    height: splashVars.fontSize,
  }),
};
