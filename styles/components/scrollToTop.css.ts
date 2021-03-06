import { style } from "@vanilla-extract/css";
import { absolutePosition } from "../helpers/positioning";
import { roundButton } from "../helpers/effects";
import { calc } from "@vanilla-extract/css-utils";
import { reducedMotion, ReducedMotion } from "../helpers/accessibility";

const buttonWidth = "80px";
const cubicBezier = "cubic-bezier(0.680, -0.280, 0.380, 1.285)";

const scrollToTopStyles = {
  root: style({
    position: "fixed",
    bottom: 0,
    right: 0,
    pointerEvents: "none",
    height: calc.multiply(buttonWidth, 3),
    width: calc.multiply(buttonWidth, 3),
    overflow: "hidden",
    zIndex: 20,
  }),

  frame: style({
    position: "relative",
    width: "100%",
    height: "100%",
    transition: `transform 0.6s ${cubicBezier}`,
    ...reducedMotion(ReducedMotion.on, {
      opacity: 1,
      transition: `opacity 0.2s ease-in`,
    }),
    selectors: {
      ["&.isHidden"]: {
        transform: "translateY(100%)",
        ...reducedMotion(ReducedMotion.on, {
          opacity: 0,
          transform: "none",
        }),
      },
    },
  }),

  button: style({
    ...roundButton(buttonWidth),
    ...absolutePosition.bottomRight("20px", "20px"),
    pointerEvents: "all",
  }),

  icon: style({
    display: "block",
    width: "30px",
    height: "auto",
  }),
};

export default scrollToTopStyles;
