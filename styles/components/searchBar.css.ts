import { style } from "@vanilla-extract/css";
import { colors } from "../colors.css";
import borders from "../helpers/border";
import { margins, paddings } from "../helpers/spacing";
import { absolutePosition, flexPosition } from "../helpers/positioning";
import { globalShadow } from "../helpers/shadows";
import { inputVars } from "./input.css";

const iconWidth = "20px";
const iconPaddedWidth = "40px";
const shortcutWidth = "5.5ex";
const backgroundColor = colors.brand.mix(colors.contrast, 0.2).alpha(0.5);
const buttonTransition = "transform 0.05s ease-out";

const searchBarStyles = {
  root: style({
    display: "block",
    position: "relative",
    height: "100%",
    color: colors.white.css(),
    ...paddings({
      vertical: "8px",
    }),
  }),
  icon: style({
    width: iconWidth,
  }),
  input: style({
    color: colors.white.css(),
    backgroundColor: backgroundColor.css(),
    ...borders({
      color: colors.white.alpha(0.8),
    }),
    boxShadow: globalShadow({
      x: 0,
      y: 0,
      inset: true,
      blur: "8px",
      spread: "5px",
      color: colors.shadow.alpha(0.1),
    }),
    transform: `box-shadow, background, color 0.3s ease-out`,
    ...paddings({
      vertical: inputVars.text.padding.vertical,
      right: iconPaddedWidth,
      left: shortcutWidth,
    }),
  }),
  submit: style({
    ...absolutePosition.topRight("1px", "3px"),
    bottom: 0,
    ...flexPosition.center(),
    backgroundColor: colors.transparent.css(),
    color: colors.white.css(),
    border: "none",
    width: iconPaddedWidth,
    outlineOffset: "-5px",
    ...margins({
      vertical: "auto",
      left: "2px",
    }),
    height: iconPaddedWidth,
    transition: buttonTransition,
    selectors: {
      ["&:hover, &:focus, &.focus-visible"]: {
        transform: "scale(1.2)",
      },
      ["&:active"]: {
        transform: "scale(0.98)",
      },
    },
  }),
  openPopup: style({
    ...absolutePosition.topLeft("1px", "9px"),
    margin: "auto 0",
    bottom: "0",
    height: "30px",
    borderRadius: "10px",
    userSelect: "none",
    color: colors.white.css(),
    backgroundColor: backgroundColor.alpha(0.9).css(),
    fontSize: "20px",
    padding: "2px 5px",
    transition: buttonTransition,
    ...borders({
      color: colors.white.alpha(0.8),
      width: "1.5px",
    }),
    selectors: {
      ["&:hover, &:focus, &.focus-visible"]: {
        transform: "scale(1.08)",
      },
      ["&:active"]: {
        transform: "scale(0.95)",
      },
    },
  }),
  compactInput: style({
    height: "100%",
  }),
};

export default searchBarStyles;
