import { style } from "@vanilla-extract/css";
import * as csstype from "csstype";

export const utilityStyles = {
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

export default utilityStyles;
