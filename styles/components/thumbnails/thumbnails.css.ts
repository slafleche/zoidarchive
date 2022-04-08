import { style } from "@vanilla-extract/css";
import { colors } from "../../colors.css";
import { backgroundHelper } from "../../helpers/background";
import { absolutePosition, flexPosition } from "../../helpers/positioning";
import { globalShadow } from "../../helpers/shadows";
import * as csstype from "csstype";
import { margins, paddings } from "../../helpers/spacing";
import {
  addOnePixel,
  IMediaQueryProps,
  mediaQueryStyle,
} from "../../helpers/mediaQueries";
import chroma from "chroma-js";

const columBreaks = {
  one: "800px",
  two: "1200px",
  three: "1840px",
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
  stop2: string,
  stop3: string
) => {
  return `linear-gradient(${angle}, ${chroma("#5ab3b5")
    .alpha(0.2)
    .css("hsl")} ${stop1}, 
    ${colors.white.alpha(0).css("hsl")} ${stop2},
    ${colors.contrast
      .mix(colors.brand, 0.12)
      .alpha(0.4)
      .css("hsl")} ${stop3})` as csstype.Property.Background;
};

const thumbnailStyles = {
  root: style({
    display: "block",
  }),
  sectionTitle: style({
    textAlign: "center",
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
            gridGap: "2vw",
          },
        },
        {
          props: mediaQueries.twoColumns,
          styles: {
            gridTemplateColumns: `repeat(2, 1fr)`,
            gridGap: "2vw",
          },
        },
        {
          props: mediaQueries.oneColumn,
          styles: {
            gridTemplateColumns: `1fr`,
            gridGap: "20px",
          },
        },
      ],
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
        props: mediaQueries.fourColumns,
        styles: {
          height: "22vw",
        },
      },
      {
        props: mediaQueries.threeColumns,
        styles: {
          height: "28vw",
        },
      },
      {
        props: mediaQueries.twoColumns,
        styles: {
          height: "40vw",
        },
      },
      {
        props: mediaQueries.oneColumn,
        styles: {
          height: "100vw",
        },
      },
    ]),
  }),
  cellContents: style({
    display: "flex",
    flexDirection: "column",
    height: "100%",
  }),
  text: style({
    ...flexPosition.middleLeft(),
    position: "relative",
    backgroundColor: colors.brand.css(),
    minHeight: "130px",
    zIndex: 1,
    ...paddings({
      top: "25px",
      bottom: "20px",
      horizontal: "20px",
    }),
    selectors: {
      ["&:before"]: {
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
  illustration: style({
    position: "relative",
  }),

  illustrationFrame: style({
    flexGrow: 1,
    display: "block",
    position: "relative",
    overflow: "hidden",
  }),

  illustrationBg: style({
    ...absolutePosition.fullSize(),
    ...backgroundHelper({
      repeat: "no-repeat",
      size: "cover",
      image:
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSItMTYyLjAwNyAtMTE0LjY0IDgwMCA4MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogIDxyZWN0IHg9Ii0yNDEuNjE2IiB5PSItMTU0LjIwNCIgd2lkdGg9IjgwMCIgaGVpZ2h0PSI4MDAiIHN0eWxlPSJmaWxsOiByZ2IoMjU1LCAyNTUsIDI1NSk7IiB0cmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAxLCAxNjkuMjgzMDY2LCAzOS41NjQwNzkpIj4KICAgIDx0aXRsZT5XYXZlczwvdGl0bGU+CiAgPC9yZWN0PgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEsIDAsIDAsIDEsIDE2OS4yODMwNjYsIDM5LjU2NDA3OSkiPgogICAgPHBhdGggZD0iTSAtMjQxLjYxNiAtMTU0LjIwNCBMIDU1OC4zODQgLTE1NC4yMDQgTCA1NTguMzg0IDY0NS43OTYgTCAtMjQxLjYxNiA2NDUuNzk2IFoiIGZpbGw9IiMzRDMzODAiIHN0eWxlPSIiLz4KICAgIDxwYXRoIGQ9Ik0gLTYyLjQzMyA1NTEuNTk2IEMgLTE3MS43MzMgNTI5Ljc5NiAtMjYwLjMzMyA1MDMuOTY2IC00MDAuMjQ1IDUyNS4zMDEgQyAtNDUxLjE3MyA1MzMuMDY3IC00OTkuNDMzIDU0OC43OTYgLTU0OC40MzMgNTY1LjU5NiBMIC01NDguNDMzIDY0NS43OTYgTCAyOTUuMzY3IDY0NS43OTYgQyAxNzkuNDY3IDYxMi41OTYgNjQuNTY3IDU3Ny42OTYgLTUyLjIzMyA1NTMuNTk2IEMgLTU1LjYzMyA1NTIuODk2IC01OS4wMzMgNTUyLjI5NiAtNjIuNDMzIDU1MS41OTYgWiIgZmlsbC1vcGFjaXR5PSIxIiBzdHlsZT0iZmlsbDogcmdiKDU3LCA5NSwgMTUzKTsiLz4KICAgIDxwYXRoIGQ9Ik0gMTA1MS41NjcgLTE1NC4yMDQgTCAtNTQ4LjQzMyAtMTU0LjIwNCBMIC01NDguNDMzIDU2NS41OTYgQyAtNDk5LjQzMyA1NDguNzk2IC00NDguOTMzIDUzNy43OTYgLTM5Ny43MzMgNTMyLjA5NiBDIC0yODUuODMzIDUxOS4zOTYgLTE3MS43MzMgNTI5LjY5NiAtNjIuNDMzIDU1MS40OTYgQyAtNTkuMDMzIDU1Mi4xOTYgLTU1LjYzMyA1NTIuODk2IC01Mi4yMzMgNTUzLjQ5NiBDIDY0LjU2NyA1NzcuNDk2IDE3OS40NjcgNjEyLjQ5NiAyOTUuMzY3IDY0NS42OTYgTCAxMDUxLjU2NyA2NDUuNjk2IEwgMTA1MS41NjcgLTE1NC4yMDQgWiIgZmlsbC1vcGFjaXR5PSIxIiBzdHlsZT0iZmlsbDogcmdiKDYyLCAxMDIsIDE2Mik7Ii8+CiAgICA8cGF0aCBkPSJNIC03MC4wMzMgNDI2Ljc5NiBDIC02Ni44MzMgNDI3LjU5NiAtNjMuNjMzIDQyOC40OTYgLTYwLjUzMyA0MjkuMjk2IEMgMTM1LjY2NyA0ODEuNzk2IDMyOC4xNjcgNTYyLjc5NiA1MzIuOTY3IDYwNS44OTYgQyA3MDcuMTY3IDY0Mi40OTYgODgyLjQ2NyA2MzUuMDk2IDEwNTEuNTY3IDU5NS42OTYgTCAxMDUxLjU2NyAtMTU0LjIwNCBMIC01NDguNDMzIC0xNTQuMjA0IEwgLTU0OC40MzMgNDIwLjY5NiBDIC00OTYuMTMzIDQwMy4wOTYgLTQ0MS45MzMgMzkyLjk5NiAtMzg3LjMzMyAzODkuNzk2IEMgLTI4MC4wMzMgMzgzLjE5NiAtMTcyLjczMyAzOTkuOTk2IC03MC4wMzMgNDI2Ljc5NiBaIiBmaWxsLW9wYWNpdHk9IjEiIHN0eWxlPSJmaWxsOiByZ2IoNjYsIDEwNywgMTY4KTsiLz4KICAgIDxwYXRoIGQ9Ik0gLTU0OC40MzMgLTE1NC4yMDQgTCAtNTQ4LjQzMyAyNzUuMTk2IEMgLTQ5Mi44MzMgMjU2Ljc5NiAtNDM0LjkzMyAyNDcuODk2IC0zNzcuMDMzIDI0Ny40OTYgQyAtMjc0LjIzMyAyNDYuNjk2IC0xNzMuODMzIDI3MC4xOTYgLTc3LjczMyAzMDEuOTk2IEMgLTc0LjczMyAzMDIuOTk2IC03MS44MzMgMzAzLjk5NiAtNjguODMzIDMwNC45OTYgQyAxMTQuNzY3IDM2Ni45OTYgMjk2Ljg2NyA0NTEuMDk2IDQ5My41NjcgNDk3LjA5NiBDIDY4MC4yNjcgNTQwLjc5NiA4NjkuODY3IDUzMS40OTYgMTA1MS40NjcgNDg0LjQ5NiBMIDEwNTEuNDY3IC0xNTQuMjA0IEwgLTU0OC40MzMgLTE1NC4yMDQgWiIgZmlsbC1vcGFjaXR5PSIxIiBzdHlsZT0iZmlsbDogcmdiKDYzLCAxMDQsIDE2Myk7Ii8+CiAgICA8cGF0aCBkPSJNIC0zNjYuNjMzIDEwNS4xOTYgQyAtMjY4LjQzMyAxMTEuMTk2IC0xNzQuNzMzIDE0MC4zOTYgLTg1LjMzMyAxNzcuMjk2IEMgLTgyLjUzMyAxNzguMzk2IC03OS44MzMgMTc5LjU5NiAtNzcuMDMzIDE4MC42OTYgQyA5My45NjcgMjUyLjI5NiAyNjUuNjY3IDMzOS4xOTYgNDU0LjI2NyAzODguMzk2IEMgNjUzLjA2NyA0NDAuMTk2IDg1Ny42NjcgNDI5LjE5NiAxMDUxLjU2NyAzNzMuNTk2IEwgMTA1MS41NjcgLTE1NC4yMDQgTCAtNTQ4LjQzMyAtMTU0LjIwNCBMIC01NDguNDMzIDEyOC45OTYgQyAtNDg5LjQzMyAxMDkuMzk2IC00MjcuODMzIDEwMS40OTYgLTM2Ni42MzMgMTA1LjE5NiBaIiBmaWxsLW9wYWNpdHk9IjEiIHN0eWxlPSJmaWxsOiByZ2IoNjYsIDEwNiwgMTcwKTsiLz4KICAgIDxwYXRoIGQ9Ik0gMTA1MS41NjcgLTE1NC4yMDQgTCAtNTQ4LjQzMyAtMTU0LjIwNCBMIC01NDguNDMzIC0xNy45MDQgQyAtNDg2LjEzMyAtMzguODA0IC00MjAuNzMzIC00NS40MDQgLTM1Ni4yMzMgLTM3LjEwNCBDIC0yNjIuNjMzIC0yNS4wMDQgLTE3NS43MzMgMTAuNTk2IC05Mi45MzMgNTIuNDk2IEMgLTkwLjMzMyA1My43OTYgLTg3LjgzMyA1NS4wOTYgLTg1LjIzMyA1Ni4zOTYgQyA3My4xNjcgMTM3LjQ5NiAyMzQuNDY3IDIyNy4yOTYgNDE1LjA2NyAyNzkuNTk2IEMgNjI1LjU2NyAzNDAuNTk2IDg0NS44NjcgMzI4LjU5NiAxMDUxLjY2NyAyNjIuOTk2IEwgMTA1MS42NjcgLTE1NC4yMDQgTCAxMDUxLjU2NyAtMTU0LjIwNCBaIiBmaWxsLW9wYWNpdHk9IjEiIHN0eWxlPSJmaWxsOiByZ2IoNjEsIDEwNywgMTcxKTsiLz4KICAgIDxwYXRoIGQ9Ik0gLTkzLjUzMyAtNjcuOTA0IEMgNTIuMjY3IDIyLjc5NiAyMDMuMTY3IDExNS4wOTYgMzc1LjY2NyAxNzAuNzk2IEMgNTg0LjI2NyAyMzguMTk2IDgwNi45NjcgMjMxLjU5NiAxMDEzLjU2NyAxNjUuNDk2IEMgMTAyNi4zNjcgMTYxLjM5NiAxMDM4Ljk2NyAxNTcuMDk2IDEwNTEuNjY3IDE1Mi41OTYgTCAxMDUxLjY2NyAtMTU0LjIwNCBMIC0yNjAuMzMzIC0xNTQuMjA0IEMgLTIwNC4zMzMgLTEzMi45MDQgLTE1MS42MzMgLTEwMy42MDQgLTEwMC42MzMgLTcyLjIwNCBDIC05OC4yMzMgLTcwLjgwNCAtOTUuOTMzIC02OS4zMDQgLTkzLjUzMyAtNjcuOTA0IFoiIGZpbGwtb3BhY2l0eT0iMSIgc3R5bGU9ImZpbGw6IHJnYig2NSwgMTA4LCAxNjgpOyIvPgogICAgPHBhdGggZD0iTSAxMDUxLjU2NyAtMTU0LjIwNCBMIC01MC40MzMgLTE1NC4yMDQgQyA2Ny42NjcgLTY4LjQwNCAxOTMuMDY3IDEwLjI5NiAzMzYuMzY3IDYxLjk5NiBDIDUyOC4xNjcgMTMxLjE5NiA3MzYuMzY3IDEzNi42OTYgOTMxLjM2NyA4My4wOTYgQyA5NzIuMTY3IDcxLjg5NiAxMDEyLjQ2NyA1Ny44OTYgMTA1MS42NjcgNDEuMzk2IEwgMTA1MS42NjcgLTE1NC4yMDQgTCAxMDUxLjU2NyAtMTU0LjIwNCBaIiBmaWxsLW9wYWNpdHk9IjEiIHN0eWxlPSJmaWxsOiByZ2IoNjYsIDEwNywgMTY4KTsiLz4KICAgIDxwYXRoIGQ9Ik0gODQ5LjA2NyAwLjU5NiBDIDg5Ni4yNjcgLTEwLjAwNCA5NDIuNjY3IC0yNC43MDQgOTg3LjY2NyAtNDMuMjA0IEMgMTAwOS4zNjcgLTUyLjEwNCAxMDMwLjY2NyAtNjIuMDA0IDEwNTEuNTY3IC03Mi43MDQgTCAxMDUxLjU2NyAtMTU0LjIwNCBMIDk0Ljk2NyAtMTU0LjIwNCBDIDE1Ny44NjcgLTExMi41MDQgMjI0LjY2NyAtNzYuMDA0IDI5Ny4wNjcgLTQ2LjgwNCBDIDQ3MS45NjcgMjMuODk2IDY2NS43NjcgNDEuODk2IDg0OS4wNjcgMC41OTYgWiIgZmlsbC1vcGFjaXR5PSIxIiBzdHlsZT0iZmlsbDogcmdiKDYyLCAxMDIsIDE2Mik7Ii8+CiAgICA8cGF0aCBkPSJNIDc2Ni44NjcgLTgxLjgwNCBDIDg0Mi4xNjcgLTk0LjQwNCA5MTUuNzY3IC0xMTguOTA0IDk4My42NjcgLTE1NC4yMDQgTCAyNjAuNjY3IC0xNTQuMjA0IEMgNDE4LjM2NyAtODMuMjA0IDU5Ni4yNjcgLTUzLjIwNCA3NjYuODY3IC04MS44MDQgWiIgZmlsbC1vcGFjaXR5PSIxIiBzdHlsZT0iZmlsbDogcmdiKDU3LCA5NSwgMTUzKTsiLz4KICA8L2c+CiAgPHJlY3QgeD0iLTI0MS42MTYiIHk9Ii0xNTQuMjA0IiB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgc3R5bGU9ImZpbGw6IHJnYigyNTUsIDI1NSwgMjU1KTsgdmlzaWJpbGl0eTogaGlkZGVuOyIgdHJhbnNmb3JtPSJtYXRyaXgoMSwgMCwgMCwgMSwgMTY5LjI4MzA2NiwgMzkuNTY0MDc5KSIvPgo8L3N2Zz4K",
    }),
    selectors: {
      ["&:before"]: {
        content: "",
        ...absolutePosition.fullSize(),
      },
    },
  }),

  // FAQ
  faq: style({}),
  faq_thumbnail: style({
    width: "80%",
    textDecoration: "none",
    ...absolutePosition.topLeft("30px", "30px"),
  }),
  faq_bg: style({
    selectors: {
      ["&:before"]: {
        background: gradientGenerator("220deg", "20%", "60%", "100%"),
      },
    },
  }),

  // Books
  book: style({}),
  books_thumbnail: style({}),
  books_bg: style({
    selectors: {
      ["&:before"]: {
        background: gradientGenerator("222deg", "20%", "50%", "80%"),
      },
    },
  }),

  // Articles
  articles: style({}),
  articles_thumbnail: style({}),
  articles_bg: style({
    selectors: {
      ["&:before"]: {
        background: gradientGenerator("77deg", "20%", "50%", "80%"),
      },
    },
  }),

  // Creators
  creators: style({}),
  creators_thumbnail: style({}),
  creators_bg: style({
    selectors: {
      ["&:before"]: {
        background: gradientGenerator("55deg", "20%", "50%", "80%"),
      },
    },
  }),

  // Quora
  quora: style({}),
  quora_thumbnail: style({}),
  quora_bg: style({
    selectors: {
      ["&:before"]: {
        background: gradientGenerator("55deg", "20%", "50%", "80%"),
      },
    },
  }),

  // Communities
  communities: style({}),
  communities_thumbnail: style({}),
  communities_bg: style({
    selectors: {
      ["&:before"]: {
        background: gradientGenerator("55deg", "20%", "50%", "80%"),
      },
    },
  }),

  // Academic
  academic: style({}),
  academic_thumbnail: style({}),
  academic_bg: style({
    selectors: {
      ["&:before"]: {
        background: gradientGenerator("55deg", "20%", "50%", "80%"),
      },
    },
  }),

  //Links
  links: style({}),
  links_thumbnail: style({}),
  links_bg: style({
    selectors: {
      ["&:before"]: {
        background: gradientGenerator("55deg", "20%", "50%", "80%"),
      },
    },
  }),
};

export default thumbnailStyles;
