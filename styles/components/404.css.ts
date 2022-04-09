import { ComplexStyleRule, style } from "@vanilla-extract/css";
import { colors } from "../colors.css";
import { roundButton } from "../helpers/effects";
import { IMediaQueryProps, mediaQueryStyle } from "../helpers/mediaQueries";
import { flexPosition } from "../helpers/positioning";
import { margins, paddings } from "../helpers/spacing";

const mediaQueries = {
  smallerText: {
    maxWidth: "670px",
  } as IMediaQueryProps,
};

const separatorSpace = "30px";
const backButtonSize = "130px";

const backStyles = roundButton(backButtonSize);

const notFoundStyles = {
  root: style({
    ...flexPosition.center(),
    ...paddings({
      vertical: "40px",
    }),
    minHeight: "100vh",
    background: `linear-gradient(0deg, ${colors.black
      .alpha(0)
      .css("hsl")} 20%, hsl(337deg 83% 14% / 40%) 90%)`,
  }),
  frame: style({
    ...flexPosition.center(),
    flexDirection: "column",
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
    ...mediaQueryStyle({
      props: mediaQueries.smallerText,
      styles: {
        display: "block",
        borderRight: "none",
        marginRight: 0,
        paddingRight: 0,
      },
    }),
  }),
  titleText: style({
    fontSize: "0.8em",
    ...mediaQueryStyle({
      props: mediaQueries.smallerText,
      styles: {
        fontSize: "0.5em",
      },
    }),
  }),
  backLink: style({
    ...(backStyles as ComplexStyleRule),
    backgroundColor: colors.white.css(),
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
    width: "1000px",
    maxWidth: "40%",
    height: "auto",
    "@supports": {
      "(width: max(50vw, 50vh))": {
        width: "max(50vw, 50vh)",
      },
    },
  }),
};

export default notFoundStyles;
