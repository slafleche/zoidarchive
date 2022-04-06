import { ComplexStyleRule, style } from "@vanilla-extract/css";
import { colors } from "../colors.css";
import { roundButton } from "../helpers/effects";
import { IMediaQuery, mediaQueryStyle } from "../helpers/mediaQueries";
import { absolutePosition, flexPosition } from "../helpers/positioning";
import { margins, paddings } from "../helpers/spacing";

const mediaQueries = {
  smallerText: {
    maxWidth: "670px",
  } as IMediaQuery,
};

const separatorSpace = "30px";
const backButtonSize = "130px";

const backStyles = roundButton(backButtonSize);

const notFoundStyles = {
  root: style({
    ...flexPosition.center(),
    flexDirection: "column",
    ...paddings({
      vertical: "40px",
    }),
    minHeight: "600px",
  }),
  title: style({
    backgroundImage: `linear-gradient(87deg, ${colors.brand
      .mix(colors.contrast, 0.2)
      .css()} 0%, ${colors.brand.mix(colors.contrast, 0.8).css()} 100%)`,
    MozBackgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    lineHeight: 1,
    ...margins({
      vertical: "40px",
    }),
  }),
  titleCode: style({
    borderRight: `solid ${colors.contrast} 3px`,
    paddingRight: separatorSpace,
    marginRight: separatorSpace,
    ...mediaQueryStyle(mediaQueries.smallerText, {
      display: "block",
      borderRight: "none",
      marginRight: 0,
      paddingRight: 0,
    }),
  }),
  titleText: style({
    fontSize: "0.8em",
    ...mediaQueryStyle(mediaQueries.smallerText, {
      fontSize: "0.5em",
    }),
  }),
  backLink: style({
    ...(backStyles as ComplexStyleRule),
    marginTop: "30px",
  }),
  backText: style({
    marginLeft: "10px",
  }),
  backIcon: style({
    width: "20px",
    height: "auto",
  }),
  illustration: style({
    display: "block",
    width: "400px",
    maxWidth: "40%",
    height: "auto",
  }),
};

export default notFoundStyles;
