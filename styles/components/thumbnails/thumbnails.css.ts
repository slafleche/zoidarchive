import { style } from "@vanilla-extract/css";
import { colors } from "../../colors.css";
import { backgroundHelper } from "../../helpers/background";
import { absolutePosition } from "../../helpers/positioning";
import { globalShadow } from "../../helpers/shadows";
import * as csstype from "csstype";
import { margins, paddings } from "../../helpers/spacing";
import {
  addOnePixel,
  IMediaQueryProps,
  mediaQueryStyle,
  substractOnePixel,
} from "../../helpers/mediaQueries";

const columBreaks = {
  one: "800px",
  two: "1200px",
  three: "1600px",
};

const mediaQueries = {
  fourColumns: {
    minWidth: addOnePixel(columBreaks.three),
  } as IMediaQueryProps,
  threeColumns: {
    maxWidth: columBreaks.three,
    minWidth: addOnePixel(columBreaks.two),
  } as IMediaQueryProps,
  twoColumns: {
    maxWidth: columBreaks.two,
    minWidth: addOnePixel(columBreaks.one),
  } as IMediaQueryProps,
  oneColumn: {
    maxWidth: columBreaks.one,
  } as IMediaQueryProps,
};

const minHeight = "300px";
const gradientWidth = "10px";

const gradientGenerator = (
  angle: csstype.Property.Rotate,
  stop1: string,
  stop2: string
) => {
  return `linear-gradient(${angle}, ${colors.brand
    .alpha(0.3)
    .css("hsl")} ${stop1}, ${colors.contrast
    .alpha(0.1)
    .css("hsl")} ${stop2})` as csstype.Property.Background;
};

const thumbnailStyles = {
  root: style({
    display: "block",
  }),
  sectionTitle: style({
    textAlign: "center",
    minHeight: "40px",
    ...margins({
      vertical: "50px",
    }),
  }),
  thumbnails: style({
    display: "grid",
    gridGap: "40px",
    ...mediaQueryStyle(
      [
        {
          props: mediaQueries.fourColumns,
          styles: {
            gridTemplateColumns: `repeat(4, 1fr)`,
          },
        },
        {
          props: mediaQueries.threeColumns,
          styles: {
            gridTemplateColumns: `repeat(3, 1fr)`,
          },
        },
        {
          props: mediaQueries.twoColumns,
          styles: {
            gridTemplateColumns: `repeat(2, 1fr)`,
          },
        },
        {
          props: mediaQueries.oneColumn,
          styles: {
            gridTemplateColumns: `1fr`,
          },
        },
      ],
      true
    ),
  }),

  cell: style({
    borderRadius: "24px",
    overflow: "hidden",
    display: "block",
    position: "relative",
    height: "500px",
    boxShadow: globalShadow(),
    cursor: "pointer",
    ...mediaQueryStyle([
      {
        props: mediaQueries.twoColumns,
        styles: {
          height: "400px",
        },
      },
      {
        props: mediaQueries.oneColumn,
        styles: {
          height: "300px",
        },
      },
    ]),
  }),
  cellContents: style({
    display: "block",
  }),
  text: style({
    ...paddings({
      top: "25px",
      bottom: "20px",
      horizontal: "20px",
    }),
    backgroundColor: colors.brand.css(),
    display: "block",
    position: "relative",
    selectors: {
      ["&::before"]: {
        content: "",
        display: "block",
        ...absolutePosition.topLeft(),
        height: "100%",
        width: "110%",
        transformOrigin: "100% 100%",
        transform: "rotate(-1deg)",
        backgroundColor: colors.brand.css(),
      },
    },
  }),
  title: style({
    fontSize: "30px",
    margin: 0,
    color: colors.white.css(),
  }),
  link: style({}),
  illustration: style({}),
  // Specific pages

  // FAQ
  faq: style({
    background: gradientGenerator("163deg", "50%", "80%"),
  }),
  faq_thumbnail: style({
    width: "50%",
    textDecoration: "none",
  }),
  faq_title: style({
    color: colors.white.css(),
  }),

  // Books
  book: style({}),
  books_thumbnail: style({}),
  books_title: style({}),

  // Articles
  articles: style({
    background: gradientGenerator("55deg", "20%", "80%"),
  }),
  articles_thumbnail: style({}),
  articles_title: style({}),

  // Creators
  creators: style({
    background: gradientGenerator("55deg", "20%", "80%"),
  }),
  creators_thumbnail: style({}),
  creators_title: style({}),

  // Quora
  quora: style({
    background: gradientGenerator("55deg", "20%", "80%"),
  }),
  quora_thumbnail: style({}),
  quora_title: style({}),

  // Communities
  communities: style({}),
  communities_thumbnail: style({}),
  communities_title: style({}),

  // Academic
  academic: style({
    background: gradientGenerator("55deg", "20%", "80%"),
  }),
  academic_thumbnail: style({}),
  academic_title: style({}),

  //Links
  links: style({
    background: gradientGenerator("55deg", "20%", "80%"),
  }),
  links_thumbnail: style({}),
  links_title: style({}),
};

export default thumbnailStyles;
