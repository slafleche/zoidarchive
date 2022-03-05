import {
  createGlobalTheme,
  globalStyle,
  keyframes,
} from "@vanilla-extract/css";

import * as csstype from "csstype";
import { backgroundHelper, centeredBackground } from "./helpers/background";

// import paperBg from "../public/images/paper.jpg";

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
    },
    body: {
      family: "Klee One, " + fontFallbacks,
      size: "25px",
      weight: "400",
      letterSpacing: "-0.8px",
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
  fontFamily: globalVars.fonts.body.family,
  fontSize: globalVars.fonts.body.size,
  fontWeight: globalVars.fonts.body.weight,
  letterSpacing: globalVars.fonts.body.letterSpacing,
  lineHeight: 1.5,
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  fontFamily: globalVars.fonts.heading.family,
  fontSize: globalVars.fonts.heading.size,
  fontWeight: globalVars.fonts.heading.weight,
  letterSpacing: globalVars.fonts.heading.letterSpacing,
});

export default globalVars;
function concat(fontFallbacks: string[], arg1: string, arg2: string): any {
  throw new Error("Function not implemented.");
}

export const spin = keyframes({
  "0%": { transform: "rotate(-360deg)" },
});

// globalStyle(".Material Icons", {
//     fontFamily: 'Material Icons',
//   fontWeight: normal,
//   fontStyle: normal,
//   fontSize: 24px,
//   display: inline-block,
//   lineHeight: 1,
//   textTransform: none,
//   letterSpacing: normal,
//   wordWrap: normal,
//   whiteSpace: nowrap,
//   direction: ltr,

//   -webkit-font-smoothing: antialiased,

//   text-rendering: optimizeLegibility,
//   -moz-osx-font-smoothing: grayscale,
//   fontFeature-settings: 'liga',
// });
