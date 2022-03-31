import { createTheme, style } from "@vanilla-extract/css";
import chroma from "chroma-js";
import { multiply } from "../../utils/styleUtils";
import { colors } from "../colors.css";
import globalVars from "../globals.css";
import paddings from "../helpers/padding";
import { flexPosition } from "../helpers/positioning";
import { globalShadow } from "../helpers/shadows";

const iconWidth = "20px";
const shortcutWidth = "5ex";

const searchBarStyles = {
  root: style({
    display: "block",
  }),
  input: style({
    ...paddings({
      left: iconWidth,
      right: shortcutWidth,
    }),
  }),
  label: style({}),
  icon: style({
    width: iconWidth,
  }),
  submit: style({}),
  openPopup: style({}),
};

export default searchBarStyles;
