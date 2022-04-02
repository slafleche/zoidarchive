import { style } from "@vanilla-extract/css";
import { colors } from "../colors.css";
import borders from "../helpers/border";
import paddings from "../helpers/padding";

export const inputVars = {
  text: {
    borders: {
      radius: "6px",
    },
    padding: {
      vertical: "0.375rem",
      horizontal: "0.75rem",
    },
  },
};

const inputStyles = {
  text: style({
    display: "block",
    width: "100%",
    lineHeight: "1.5",
    backgroundColor: colors.bodyBg.css(),
    ...paddings(inputVars.text.padding),
    ...borders(inputVars.text.borders),
  }),
  button: style({}),
  shortcut: style({}),
  inputShortcut: style({}),
};

export default inputStyles;
