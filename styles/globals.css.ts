import {
  createGlobalTheme,
  globalStyle,
  keyframes,
} from "@vanilla-extract/css";
import chroma from "chroma-js";
import { backgroundHelper, centeredBackground } from "./helpers/background";
import * as csstype from "csstype";
import { CSS } from "@vanilla-extract/css/dist/declarations/src/types";
import { multiply } from "../utils/styleUtils";

export const fontFallbacks = [
  "-apple-system",
  "BlinkMacSystemFont",
  "HelveticaNeue-Light",
  "Segoe UI",
  "Helvetica Neue",
  "Helvetica",
  "Raleway",
  "Arial",
  "sans-serif",
  "Apple Color Emoji",
  "Segoe UI Emoji",
  "Segoe UI Symbol",
].join(", ");

const globalVars = createGlobalTheme(":root", {
  space: {
    // small: "4px",
    // medium: "8px",
    // large: "16px",
  },
  fonts: {
    heading: {
      family: "Caveat, " + fontFallbacks,
      size: "60px",
      weight: "400",
      letterSpacing: "0.5px",
      color: "#282b37",
    },
    body: {
      family: "Klee One, " + fontFallbacks,
      size: "25px",
      weight: "400",
      letterSpacing: "-0.8px",
      color: "#101419",
    },
  },
});

globalStyle("body", {
  // ...backgroundHelper({
  //   repeat: "repeat",
  //   image: "/images/paper.jpg",
  //   size: "50%",
  // }),
  ...backgroundHelper({
    repeat: "repeat",
    image: "/images/paper.jpg",
    size: "50%",
  }),
});

globalStyle("html, body", {
  color: globalVars.fonts.heading.color,
  fontFamily: globalVars.fonts.body.family,
  fontSize: globalVars.fonts.body.size,
  fontWeight: globalVars.fonts.body.weight,
  letterSpacing: globalVars.fonts.body.letterSpacing,
  lineHeight: 1.5,
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  color: globalVars.fonts.heading.color,
  fontFamily: globalVars.fonts.heading.family,
  fontSize: globalVars.fonts.heading.size,
  fontWeight: globalVars.fonts.heading.weight,
  letterSpacing: globalVars.fonts.heading.letterSpacing,
});

globalStyle("h1", {
  textAlign: "center",
  fontSize: "80px",
});

globalStyle("a:focus:not(.focus-visible)", {
  outline: "none",
});

export const spin = keyframes({
  "0%": { transform: "rotate(-360deg)" },
});

export default globalVars;
