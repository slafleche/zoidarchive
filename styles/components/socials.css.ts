import { style } from "@vanilla-extract/css";
import { flexPosition } from "../helpers/positioning";
import { calc } from "@vanilla-extract/css-utils";

const padding = "15px";
const iconWidth = "50px";

const socialsStyles = {
  root: style({
    display: "flex",
    flexWrap: "wrap",

    padding: `${padding}`,
    width: `calc(100% + ${calc.multiply(padding, 2)})`,
    // marginLeft: `-${multiply(padding, 2)}`,
    marginBottom: `-${padding}`,
    selectors: {
      ["&.isLeftAligned"]: {
        justifyContent: "flex-start",
        marginLeft: `-${calc.multiply(padding, 2)}`,
      },
      ["&.isRightAligned"]: {
        justifyContent: "flex-end",
        marginRight: `-${calc.multiply(padding, 2)}`,
      },
    },
  }),
  link: style({
    ...flexPosition.center(),
    outlineOffset: "-5px",
    boxSizing: "content-box",
    width: iconWidth,
    padding: padding,
    opacity: "0.8",
    transition: "transform 0.2s ease-out",
    zIndex: 1,
    selectors: {
      ["&&"]: {
        color: "inherit",
      },
      [`&:hover, &:focus`]: {
        opacity: 1,
        transform: `scale(1.2)`,
      },
    },
  }),
  icon: style({
    width: iconWidth,
  }),
};

export default socialsStyles;
