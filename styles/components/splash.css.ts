import { createTheme, style } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    brand: "blue",
  },
  font: {
    body: "arial",
  },
});


export default {
  root: style({}),
  title: style({}),
  description: style({}),
  overlay: style({}),
};
