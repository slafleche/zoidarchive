import { Color } from "chroma-js";
import * as csstype from "csstype";
import { IMeasurement, measurement } from "../utils/styleUtils";
import { colors } from "../colors.css";
import globalVars from "../vars.css";

export interface IBorder {
  color?: Color;
  width?: csstype.Property.BorderWidth;
  style?: "none" | "solid";
  radius?: csstype.Property.BorderRadius;
}

interface IFinalBorder {
  borderColor?: csstype.Property.BorderColor;
  borderWidth?: csstype.Property.BorderWidth;
  borderStyle?: csstype.Property.BorderStyle;
  borderRadius?: csstype.Property.BorderRadius;
}

const borders = (props: IBorder = {}) => {
  const {
    color = colors.border,
    width = globalVars.border.width,
    style = globalVars.border.style,
    radius = globalVars.border.radius,
  } = props;

  let borderProps: IFinalBorder = {
    borderStyle: style,
  };

  if (style != "none") {
    borderProps.borderColor = color.css();
    borderProps.borderWidth = width || globalVars.border.width;
    if (radius) {
      const rad = measurement(radius);
      if (rad.val != 0) {
        borderProps.borderRadius = rad.toString();
      }
    }
    return borderProps;
  } else {
    return { border: "none" };
  }
  return;
};

export default borders;
