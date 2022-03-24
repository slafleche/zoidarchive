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
const minWidth = "500px";

const cardStyles = {
  root: style({
    border: `solid ${colors.black.css()} 10px`,
    boxShadow: "2px 8px 5px hsla(0, 0%, 0%, 0.5)",
    borderRadius: "30px",
    backgroundColor: colors.black.brighten(0.5).css(),
    overflow: "hidden",
    display: "block",
    position: "relative",
    selectors: {
      ["&:after"]: {
        content: "",
        ...absolutePosition.fullSize(),
        width: "100%",
        height: "100%",
        boxShadow: `0 0 20px 10px rgb(255 255 255 / 17%) inset`,
      },
    },
  }),
  cells: style({
    display: "grid",
    gridTemplateColumns: `${minWidth} 1fr`,
    width: "100%",
    borderRadius: "30px",
  }),
  cell: style({
    overflow: "hidden",
  }),
  text: style({
    padding: "10px 30px",
    boxSizing: "border-box",
    textDecoration: "none",
  }),
  title: style({
    color: colors.white.css(),
    margin: 0,
    padding: 0,
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
  titleLink: style({
    color: colors.white.css(),
    display: "inline-block",
    position: "relative",
    textDecoration: "none",
    lineHeight: 1,
    zIndex: 1,
    selectors: {
      [`&:after`]: {
        content: "",
        position: `absolute`,
        width: `100%`,
        transform: `scaleX(0)`,
        height: `2px`,
        bottom: 0,
        left: 0,
        backgroundColor: colors.white.css(),
        transformOrigin: `bottom right`,
        transition: `transform 0.25s ease-out`,
      },
      [`&:hover:after`]: {
        transform: `scaleX(1)`,
        transformOrigin: `bottom left`,
      },
    },
  }),
  externalLink: style({
    display: "inline-block",
    color: colors.white.css(),
    width: "0.8em",
    height: "0.8em",
    fill: colors.white.css(),
    top: "auto",
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
