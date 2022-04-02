import {
  ComplexStyleRule,
  style,
} from "@vanilla-extract/css";
import { colors } from "../colors.css";
import { roundButton } from "../helpers/effects";
import { absolutePosition, flexPosition } from "../helpers/positioning";

// const minHeight = "300px";
// const thumbnailWidth = "500px";
// const gradientWidth = "10px";
const separatorSpace = "30px";
const backButtonSize = "130px";

const backStyles = roundButton(backButtonSize);

const notFoundStyles = {
  root: style({
    ...absolutePosition.fullSize(),
    ...flexPosition.center(),
    flexDirection: "column",
  }),
  title: style({
    backgroundImage: `linear-gradient(87deg, ${colors.brand
      .mix(colors.contrast, 0.2)
      .css()} 0%, ${colors.brand.mix(colors.contrast, 0.8).css()} 100%)`,
    MozBackgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }),
  titleCode: style({
    borderRight: `solid ${colors.contrast} 3px`,
    paddingRight: separatorSpace,
    marginRight: separatorSpace,
  }),
  titleText: style({
    fontSize: "0.8em",
  }),
  backLink: style(backStyles as ComplexStyleRule),
  backText: style({
    marginLeft: "10px",
  }),
  backIcon: style({
    width: "20px",
    height: "auto",
  }),
};

export default notFoundStyles;
