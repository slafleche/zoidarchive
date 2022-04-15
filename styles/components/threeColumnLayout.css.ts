import { globalStyle, style } from "@vanilla-extract/css";
import { measurement } from "../../utils/styleUtils";
import { colors } from "../colors.css";
import { absolutePosition } from "../helpers/positioning";

export const threeColumnVars = {
  gap: "40px",
};

const gap = measurement(threeColumnVars.gap);

const threeColumnLayoutStyles = {
  root: style({
    display: "grid",
    gridTemplateColumns: `2fr 4fr 2fr`,
    columnGap: threeColumnVars.gap,
  }),
  nav: style({
    position: "relative",
    selectors: {
      "&:after": {
        content: "",
        ...absolutePosition.topLeft(),
        width: `calc(100% + ${measurement(gap, gap.val / 2)})`,
        height: "100%",
        backgroundColor: colors.brand.alpha(0.05).css(),
      },
    },
  }),
  main: style({}),
  toc: style({
    height: "100%",
  }),
};

export default threeColumnLayoutStyles;
