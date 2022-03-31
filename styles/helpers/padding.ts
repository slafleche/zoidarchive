import { Color } from "chroma-js";
import * as csstype from "csstype";
import { IMeasurement, measurement } from "../../utils/styleUtils";
import { colors } from "../colors.css";
import globalVars from "../globals.css";

interface IAdvancedPadding {
  all?: csstype.Property.PaddingTop;
  horiziontal?: csstype.Property.PaddingTop;
  vertical?: csstype.Property.PaddingTop;
  top?: csstype.Property.PaddingTop;
  right?: csstype.Property.PaddingTop;
  bottom?: csstype.Property.PaddingTop;
  left?: csstype.Property.PaddingTop;
}

interface ISplitPadding {
  paddingTop?: csstype.Property.PaddingTop;
  paddingRight?: csstype.Property.PaddingRight;
  paddingBottom?: csstype.Property.PaddingBottom;
  paddingLeft?: csstype.Property.PaddingLeft;
}

const paddings = (props?: IAdvancedPadding) => {
  const { all = 0, horiziontal, vertical, top, right, bottom, left } = props || {};

  let topBorder = all;
  let rightBorder = all;
  let bottomBorder = all;
  let leftBorder = all;

  if (horiziontal) {
    rightBorder = horiziontal;
    leftBorder = horiziontal;
  }

  if (vertical) {
    topBorder = vertical;
    bottomBorder = vertical;
  }

  if (top) {
    topBorder = top;
  }

  if (right) {
    rightBorder = right;
  }

  if (bottom) {
    bottomBorder = bottom;
  }

  if (left) {
    leftBorder = left;
  }

  const verticalSymmetry = topBorder === bottomBorder;
  const horizontalSymmetry = leftBorder === rightBorder;

  if (verticalSymmetry && horizontalSymmetry) {
    if (topBorder === leftBorder) {
      // all same border
      return {
        padding: topBorder,
      };
    } else {
      // Vertical symmetry and horizontal symmetry, but not same value
      return {
        padding: `${topBorder} ${rightBorder}`,
      };
    }
  }
  return {
    padding: `${topBorder} ${rightBorder} ${bottomBorder} ${leftBorder}`,
  };
};

export default paddings;
