import { createTheme, style } from "@vanilla-extract/css";
import {
  utilVars,
  centeredBackground,
} from "../../utils/styleUtils";
import { absolutePosition, flexPosition } from "../helpers/helperPositioning";

export const [themeClass, vars] = createTheme({
  color: {
    // brand: "blue",
  },
  font: {
    // body: "arial",
  },
});

export default {
  root: style({
    ...centeredBackground("/images/hero.jpg"),
    minHeight: "100vh",
    color: utilVars.white.hex(),
    ...flexPosition().middle(),
  
  }),
  title: style({
    display: "block",
    padding: "0",
    margin: "0",
    fontSize: "300px",
    textShadow: "rgb(0 0 0 / 100%) 4px 7px 15px",
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
    ...flexPosition().middleLeft(true),
    width: "100%",
    flexDirection: "column",
  }),
};
