import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";

const vars = createGlobalTheme(":root", {
  space: {
    // small: "4px",
    // medium: "8px",
    // large: "16px",
  },
  fonts: {
    heading: {
      family: "Loved by the King, Sue Ellen Francisco, serif",
      size: "60px",
      weight: "400",
    },
    body: {
      family: "Sue Ellen Francisco",
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
