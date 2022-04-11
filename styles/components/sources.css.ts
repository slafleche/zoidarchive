import {
  createTheme,
  globalStyle,
  style,
  styleVariants,
} from "@vanilla-extract/css";
import { colors } from "../colors.css";
import globalVars from "../vars.css";
import { backgroundHelper } from "../helpers/background";
import { absolutePosition, flexPosition } from "../helpers/positioning";
import { globalShadow } from "../helpers/shadows";

const sourcesStyles = {
  root: style({}),
};

export default sourcesStyles;
