// For "content" text.
// Most of these elements won't have a proper class, as they'll be basic HTML.

import { globalStyle, style } from "@vanilla-extract/css";
import { paddings } from "./helpers/spacing";
import * as csstypes from "csstype";

const markupStyles = {
  root: style({}),
  responsiveImage: style({
    height: "auto",
    display: "inline-flex",
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "100%",
    maxHeight: "none",
  }),
  mdxImageFrame: style({
    width: "100%",
    display: "block",
    position: "relative",
  }),
  mdxImage: style({
    top: 0,
    left: 0,
    width: "100% !important",
    height: "100% !important",
  }),
};

// Workaround for NextJS problems
globalStyle(`.${markupStyles.mdxImageFrame} > span`, {
  position: "absolute !important" as csstypes.Property.Position,
  top: 0,
  left: 0,
  width: "100% !important",
  height: "100% !important",
});

globalStyle(`.${markupStyles.mdxImageFrame} > span > span`, {
  display: "none  !important" as csstypes.Property.Position,
});

export default markupStyles;
