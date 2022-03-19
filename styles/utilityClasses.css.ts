import { style } from "@vanilla-extract/css";
import * as csstype from "csstype";
import { isNumeric } from "../src/utils/utils";
import { flexPosition } from "./helpers/positioning";

// Utility classes
// Note that in contrast to helper functions, they output a ready made class,
// not properties of a class.

const utilityClasses = {
  isVisibilityHidden: style({
    visibility: "hidden !important" as csstype.Property.Visibility,
  }),

  isScOnly: style({
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: "0",
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0,0,0,0)",
    border: "0",
  }),

  isHidden: style({
    display: "none !important" as csstype.Property.Display,
  }),

  isNoInteraction: style({
    userSelect: "none",
    pointerEvents: "none",
  }),

  toolTipWrap: style({
    width: "100%",
  }),

  center: style({
    ...flexPosition.middle(),
  }),
};

export default utilityClasses;
