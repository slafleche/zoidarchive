import { ComplexStyleRule, style } from "@vanilla-extract/css";
import { flexPosition } from "../helpers/positioning";
import { roundButton } from "../helpers/effects";

const buttonWidth = "100px";

const scrollToTopStyles = {
  root: style({
    ...flexPosition.center(),
    position: "fixed",
    bottom: "30px",
    right: "30px",
    height: buttonWidth,
    width: buttonWidth,
    zIndex: 20,
  }),

  button: style({
    ...roundButton(buttonWidth),
  } as ComplexStyleRule),

  icon: style({
    display: "block",
    width: "30px",
    height: "auto",
  }),

  waypoint: style({
    width: "100%",
    height: "0",
    pointerEvents: "none",
  }),
};

export default scrollToTopStyles;
