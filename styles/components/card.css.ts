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
const gradientWidth = "10px";

const cardStyles = {
  root: style({
    border: `solid ${colors.black.css()} 3px`,
    borderRadius: "60px",
    backgroundColor: colors.cards.dark.css(),
    overflow: "hidden",
    display: "block",
    position: "relative",
    width: "100%",
    margin: "50px 0",
  }),
  cells: style({
    display: "grid",
    gridTemplateColumns: `${thumbnailWidth} 1fr`,
    width: "100%",
    minHeight: minHeight,
    selectors: {
      ["&:after"]: {
        ...absolutePosition.topLeft(0, thumbnailWidth),
        content: "",
        // background: cardBg.css(),
        backgroundImage: `linear-gradient(to left, ${
          colors.cards.dark
        } 20%, ${colors.cards.dark.alpha(0).css()} 100%)`,
        width: gradientWidth,
        height: "100%",
        transform: `translateX(-${multiply(gradientWidth, 0.8)})`,
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
  socials: style({
    transform: `translateY(-10px)`,
  }),

  cardContent: style({
    lineHeight: 1.4,
  }),
  thumbnail: style({}),
};

globalStyle(`${cardStyles.cardContent} p`, {
  color: colors.white.alpha(0.7).css(),
});

export default cardStyles;
