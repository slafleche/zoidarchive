import {
  createGlobalTheme,
} from "@vanilla-extract/css";
import { colors } from "./colors.css";

const globalVars = createGlobalTheme(":root", {
  colors: {
    heroHeading: colors.heroHeading.css(),
    heroText: colors.heroHeading.css(),
    navBg: colors.navBg.css(),
    navFg: colors.navFg.css(),
  },
  fonts: {
    heading: {
      color: colors.headingFg.css(),
      family: "Comfortaa, Poppins, Helvetica, Arial, sans-serif",
      size: "45px",
      weight: "500",
    },
    body: {
      family: "Poppins, Helvetica, Arial, sans-serif",
      size: "22px",
      weight: "300",
      semiBold: "400",
      color: colors.bodyFg.css(),
    },
  },
  border: {
    color: colors.border.css(),
    style: "solid",
    width: "1px",
    radius: "0.25rem",
  },
});

export default globalVars;
