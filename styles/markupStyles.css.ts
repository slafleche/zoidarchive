// For "content" text.
// Most of these elements won't have a proper class, as they'll be basic HTML.

import { style } from "@vanilla-extract/css";

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
};

export default markupStyles;
