import { style } from "@vanilla-extract/css";
import { colors } from "../colors.css";
import borders from "../helpers/border";

const inputStyles = {
  text: style({
    display: "block",
    width: "100%",
    padding: "0.375rem 0.75rem",
    lineHeight: "1.5",
    backgroundColor: colors.bodyBg.css(),
    ...borders(),
  }),
  button: style({}),
  shortcut: style({}),
  inputShortcut: style({}),
};

export default inputStyles;
