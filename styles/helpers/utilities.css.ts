import { style } from "@vanilla-extract/css";
import * as csstype from "csstype";
import { isNumeric } from "../../src/utils/utils";

// Utility classes
// Note that in contrast to helper functions, they output a ready made class,
// not properties of a class.

const utilityClasses = {
  isVisibilityHidden: style({
    visibility: "hidden !important" as csstype.Property.Visibility,
  }),

  uScOnly: style({
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: "0",
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0,0,0,0)",
    border: "0",
  }),

  hidden: style({
    display: "none !important" as csstype.Property.Display,
  }),

  noInteraction: style({
    userSelect: "none",
    pointerEvents: "none",
  }),
};
