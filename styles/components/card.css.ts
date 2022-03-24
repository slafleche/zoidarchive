import {
  createTheme,
  globalStyle,
  style,
  styleVariants,
} from "@vanilla-extract/css";
import { multiply } from "../../utils/styleUtils";
import { colors } from "../colors.css";
import globalVars from "../globals.css";
import { absolutePosition, flexPosition } from "../helpers/positioning";

const minHeight = "300px";
const thumbnailWidth = "500px";
const gradientWidth = "100px";
const cardBg = colors.black.brighten(0.2);

const cardStyles = {
  root: style({
    border: `solid ${colors.black.css()} 3px`,
    borderRadius: "60px",
    backgroundColor: cardBg.css(),
    overflow: "hidden",
    display: "block",
    position: "relative",
  }),
  cells: style({
    display: "grid",
    gridTemplateColumns: `${thumbnailWidth} 1fr`,
    width: "100%",
    selectors: {
      ["&:after"]: {
        ...absolutePosition.topLeft(0, thumbnailWidth),
        content: "",
        // background: cardBg.css(),
        backgroundImage: `linear-gradient(to left, orange 0%, ${cardBg
          .alpha(1)
          .css()} 80%)`,
        width: gradientWidth,
        height: "100%",
        transform: `translateX(-${multiply(gradientWidth, 0.5)})`,
        zIndex: 1,
      },
    },
  }),
  cell: style({
    overflow: "hidden",
  }),
  text: style({
    padding: "10px 30px",
    boxSizing: "border-box",
    textDecoration: "none",
    position: "relative",
  }),
  title: style({
    color: colors.white.css(),
    margin: 0,
    padding: "10px 0 0",
  }),
  description: style({
    color: colors.white.css(),
  }),
  image: style({
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }),
  left: style({}),
  right: style({}),
  link: style({
    textDecoration: "none",
  }),
  socials: style({}),

  cardContent: style({
    lineHeight: 1.4,
  }),
  thumbnail: style({}),
};

globalStyle(`${cardStyles.cardContent} p`, {
  color: colors.white.alpha(0.7).css(),
});

export default cardStyles;
