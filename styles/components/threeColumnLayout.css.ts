import { ComplexStyleRule, style } from "@vanilla-extract/css";
import { colors } from "styles/colors.css";
import { absolutePosition } from "styles/helpers/positioning";
import { paddings } from "styles/helpers/spacing";
import { layoutVars } from "./layoutVars.css";
import {
  addOnePixel,
  IMediaQuery,
  IMediaQueryProps,
  mediaQueryStyle,
} from "styles/helpers/mediaQueries";

const threeColumnLayoutVars = {
  threeColumns: "1500px",
  twoColumns: "1100px",
  oneColumn: "800px",
};

export const threeColumnContentVars = {
  column: {
    padding: "75px",
    fontSize: "26px",
  },
};

const iconWidth = "20px";
const iconPadding = "30px";

interface IThreeColumnMediaQueries {
  twoColumns?: ComplexStyleRule;
  oneColumn?: ComplexStyleRule;
}

export const threeColumnMediaQueries = {
  twoColumns: {
    maxWidth: threeColumnLayoutVars.twoColumns,
    minWidth: addOnePixel(threeColumnLayoutVars.oneColumn),
  } as IMediaQueryProps,
  oneColumn: {
    maxWidth: threeColumnLayoutVars.oneColumn,
  } as IMediaQueryProps,
};

const mediaQueryStyles = (styles: IThreeColumnMediaQueries, debug = false) => {
  let mediaQueries: IMediaQuery[] = [];

  if (styles.twoColumns) {
    mediaQueries.push({
      props: threeColumnMediaQueries.twoColumns,
      styles: styles.twoColumns,
    });
  }

  if (styles.oneColumn) {
    mediaQueries.push({
      props: threeColumnMediaQueries.oneColumn,
      styles: styles.oneColumn,
    });
  }

  return mediaQueryStyle(mediaQueries, debug);
};

const threeColumnLayoutStyles = {
  root: style({
    display: "grid",
    gridTemplateColumns: `2fr 4fr 2fr`,
    // columnGap: threeColumnVars.gap,
    ...paddings({
      horizontal: layoutVars.halfContentPadding,
    }),
  }),
  // LEFT
  nav: style({
    position: "relative",
    selectors: {
      "&:after": {
        content: "",
        ...absolutePosition.topLeft(),
        // width: `calc(100% + ${measurement(gap, gap.val / 2)})`,
        height: "100%",
        width: "100%",
        backgroundColor: colors.brand.alpha(0.05).css(),
      },
    },

    ...paddings({
      horizontal: layoutVars.halfContentPadding,
    }),
    ...mediaQueryStyles({
      twoColumns: {},
      oneColumn: {},
    }),
    // ...globalMediaQueryStyles({
    //   compact: {
    //     ...paddings({
    //       left: layoutVars.compact.contentPadding,
    //       right: layoutVars.compact.halfContentPadding,
    //     }),
    //   },
    //   // compressed: {
    //   //   ...paddings({
    //   //     left: layoutVars.compressed.contentPadding,
    //   //     right: layoutVars.compressed.halfContentPadding,
    //   //   }),
    //   // },
    // }),
  }),
  // MIDDLE
  main: style({
    ...paddings({
      horizontal: layoutVars.halfContentPadding,
      bottom: "30px",
    }),
    ...mediaQueryStyles({
      twoColumns: {},
      oneColumn: {},
    }),
    // ...globalMediaQueryStyles({
    //   compact: {
    //     ...paddings({
    //       horizontal: layoutVars.compact.halfContentPadding,
    //     }),
    //   },
    //   compressed: {
    //     ...paddings({
    //       horizontal: layoutVars.compressed.halfContentPadding,
    //     }),
    //   },
    // }),
  }),
  // RIGHT
  toc: style({
    height: "100%",
    ...paddings({
      left: layoutVars.halfContentPadding,
      right: layoutVars.contentPadding,
    }),
    ...mediaQueryStyles({
      twoColumns: {},
      oneColumn: {},
    }),
    // ...globalMediaQueryStyles({
    //   compact: {
    //     ...paddings({
    //       right: layoutVars.compact.contentPadding,
    //       left: layoutVars.compact.halfContentPadding,
    //     }),
    //   },
    //   compressed: {
    //     ...paddings({
    //       right: layoutVars.compressed.contentPadding,
    //       left: layoutVars.compressed.halfContentPadding,
    //     }),
    //   },
    // }),
  }),

  h1Container: style({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    ...paddings({
      horizontal: "30px",
    }),
  }),

  h1: style({
    display: "block",
    position: "relative",
  }),

  backLink: style({
    display: "block",
    width: iconWidth,
    height: iconWidth,
    ...absolutePosition.topLeft("50%"),
  }),

  backIcon: style({
    width: iconWidth,
    height: iconWidth,
  }),
};

export default threeColumnLayoutStyles;
