import {
  createGlobalTheme,
  globalStyle,
  keyframes,
} from "@vanilla-extract/css";

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

const vars = createGlobalTheme(":root", {
  space: {
    // small: "4px",
    // medium: "8px",
    // large: "16px",
  },
  fonts: {
    heading: {
      family: "Loved by the King, Sue Ellen Francisco, " + fontFallbacks,
      size: "60px",
      weight: "400",
    },
    body: {
      family: "Sue Ellen Francisco, " + fontFallbacks,
      size: "40px",
      weight: "400",
    },
  },
  colors: {
    // primary: "#1E40AF",
    // secondary: "#DB2777",
    // text: {
    //   normal: "#1F2937",
    //   dimmed: "#6B7280",
    // },
  },
});

globalStyle("html, body", {
  fontFamily: vars.fonts.body.family,
  fontSize: vars.fonts.body.size,
  fontWeight: vars.fonts.body.weight,
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  fontFamily: vars.fonts.heading.family,
  fontSize: vars.fonts.heading.size,
  fontWeight: vars.fonts.heading.weight,
});

export default vars;
function concat(fontFallbacks: string[], arg1: string, arg2: string): any {
  throw new Error("Function not implemented.");
}

export const spin = keyframes({
  "0%": { transform: "rotate(360deg)" },
});
