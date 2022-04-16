import { ComplexStyleRule, style } from "@vanilla-extract/css";
import { colors } from "../colors.css";
import { IMediaQueryProps, mediaQueryStyle } from "../helpers/mediaQueries";
import { flexPosition } from "../helpers/positioning";
import { margins, paddings } from "../helpers/spacing";
import { threeColumnContentVars } from "./threeColumnLayout.css";

const archiveNavStyles = {
  root: style({
    ...paddings({
      vertical: threeColumnContentVars.column.padding,
    }),
  }),
  categories: style({}),
  category: style({}),
  categoryTitle: style({
    fontSize: threeColumnContentVars.column.fontSize,
    ...margins({
      top: "40px",
      bottom: "10px",
    }),
    paddingTop: 0,
    selectors: {
      [`&.isFirst`]: {
        marginTop: 0,
      },
    },
  }),
  categoryItems: style({}),
  categoryItem: style({}),
  link: style({
    fontSize: "22px",
  }),
};

export default archiveNavStyles;
