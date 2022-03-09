import {
  createGlobalTheme,
  globalStyle,
  keyframes,
} from "@vanilla-extract/css";
import chroma from "chroma-js";
import { backgroundHelper, centeredBackground } from "./helpers/background";

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

const colours = {
  heroHeading: chroma("rgb(26,32,44)"),
  heroText: chroma("#44474c"),
  navBg: chroma("#000").alpha(0.8),
  navFg: chroma("#FFF"),
};

const globalVars = createGlobalTheme(":root", {
  colors: {
    heroHeading: colours.heroHeading.toString(),
    heroText: colours.heroHeading.toString(),
    navBg: colours.navBg.toString(),
    navFg: colours.navFg.toString(),
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
  ...backgroundHelper({
    repeat: "repeat",
    image:
      "data:image/svg+xml;base64,PCEtLSBHZW5lcmF0ZWQgd2l0aCBodHRwczovL3d3dy5zdmdiYWNrZ3JvdW5kcy5jb20vIC0tPgo8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSczNDEnIGhlaWdodD0nMzQxJyB2aWV3Qm94PScwIDAgODAwIDgwMCc+CiAgIDxyZWN0IGZpbGw9JyNGRkZGRkYnIHdpZHRoPSc4MDAnIGhlaWdodD0nODAwJy8+CiAgIDxnIGZpbGw9J25vbmUnIHN0cm9rZT0nI0Y4RjFGRicgIHN0cm9rZS13aWR0aD0nMi4zJz4KICAgICAgPHBhdGggZD0nTTc2OSAyMjlMMTAzNyAyNjAuOU05MjcgODgwTDczMSA3MzcgNTIwIDY2MCAzMDkgNTM4IDQwIDU5OSAyOTUgNzY0IDEyNi41IDg3OS41IDQwIDU5OS0xOTcgNDkzIDEwMiAzODItMzEgMjI5IDEyNi41IDc5LjUtNjktNjMnLz4KICAgICAgPHBhdGggZD0nTS0zMSAyMjlMMjM3IDI2MSAzOTAgMzgyIDYwMyA0OTMgMzA4LjUgNTM3LjUgMTAxLjUgMzgxLjVNMzcwIDkwNUwyOTUgNzY0Jy8+CiAgICAgIDxwYXRoIGQ9J001MjAgNjYwTDU3OCA4NDIgNzMxIDczNyA4NDAgNTk5IDYwMyA0OTMgNTIwIDY2MCAyOTUgNzY0IDMwOSA1MzggMzkwIDM4MiA1MzkgMjY5IDc2OSAyMjkgNTc3LjUgNDEuNSAzNzAgMTA1IDI5NSAtMzYgMTI2LjUgNzkuNSAyMzcgMjYxIDEwMiAzODIgNDAgNTk5IC02OSA3MzcgMTI3IDg4MCcvPgogICAgICA8cGF0aCBkPSdNNTIwLTE0MEw1NzguNSA0Mi41IDczMS02M002MDMgNDkzTDUzOSAyNjkgMjM3IDI2MSAzNzAgMTA1TTkwMiAzODJMNTM5IDI2OU0zOTAgMzgyTDEwMiAzODInLz4KICAgICAgPHBhdGggZD0nTS0yMjIgNDJMMTI2LjUgNzkuNSAzNzAgMTA1IDUzOSAyNjkgNTc3LjUgNDEuNSA5MjcgODAgNzY5IDIyOSA5MDIgMzgyIDYwMyA0OTMgNzMxIDczN00yOTUtMzZMNTc3LjUgNDEuNU01NzggODQyTDI5NSA3NjRNNDAtMjAxTDEyNyA4ME0xMDIgMzgyTC0yNjEgMjY5Jy8+CiAgIDwvZz4KICAgPGcgZmlsbD0nI0YwRUZGRic+CiAgICAgIDxjaXJjbGUgIGN4PSc3NjknIGN5PScyMjknIHI9JzgnLz4KICAgICAgPGNpcmNsZSAgY3g9JzUzOScgY3k9JzI2OScgcj0nOCcvPgogICAgICA8Y2lyY2xlICBjeD0nNjAzJyBjeT0nNDkzJyByPSc4Jy8+CiAgICAgIDxjaXJjbGUgIGN4PSc3MzEnIGN5PSc3MzcnIHI9JzgnLz4KICAgICAgPGNpcmNsZSAgY3g9JzUyMCcgY3k9JzY2MCcgcj0nOCcvPgogICAgICA8Y2lyY2xlICBjeD0nMzA5JyBjeT0nNTM4JyByPSc4Jy8+CiAgICAgIDxjaXJjbGUgIGN4PScyOTUnIGN5PSc3NjQnIHI9JzgnLz4KICAgICAgPGNpcmNsZSAgY3g9JzQwJyBjeT0nNTk5JyByPSc4Jy8+CiAgICAgIDxjaXJjbGUgIGN4PScxMDInIGN5PSczODInIHI9JzgnLz4KICAgICAgPGNpcmNsZSAgY3g9JzEyNycgY3k9JzgwJyByPSc4Jy8+CiAgICAgIDxjaXJjbGUgIGN4PSczNzAnIGN5PScxMDUnIHI9JzgnLz4KICAgICAgPGNpcmNsZSAgY3g9JzU3OCcgY3k9JzQyJyByPSc4Jy8+CiAgICAgIDxjaXJjbGUgIGN4PScyMzcnIGN5PScyNjEnIHI9JzgnLz4KICAgICAgPGNpcmNsZSAgY3g9JzM5MCcgY3k9JzM4Micgcj0nOCcvPgogICA8L2c+Cjwvc3ZnPgo=",
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
