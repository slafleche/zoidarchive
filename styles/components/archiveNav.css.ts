import { ComplexStyleRule, globalStyle, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { colors } from "../colors.css";
import { IMediaQueryProps, mediaQueryStyle } from "../helpers/mediaQueries";
import { flexPosition } from "../helpers/positioning";
import { margins, paddings } from "../helpers/spacing";
import globalVars from "../vars.css";
import { threeColumnContentVars } from "./threeColumnLayout.css";

const expandButtonSize = "30px";

const archiveNavStyles = {
  root: style({
    ...paddings(threeColumnContentVars.column.padding),
  }),
  categories: style({}),
  category: style({
    selectors: {
      ["& + &"]: {
        marginTop: "40px",
      },
    },
  }),
  categoryTitle: style({
    fontSize: threeColumnContentVars.column.fontSize,
    ...margins({
      top: "40px",
      bottom: "10px",
    }),
    width: `calc(100% - ${expandButtonSize})`,
    paddingTop: 0,
    marginTop: 0,
  }),
  categoryItems: style({}),
  categoryItem: style({}),
  link: style({
    fontSize: "22px",
  }),
  sectionHeading: style({
    display: "flex",
    width: "100%",
  }),
};

globalStyle(`.${archiveNavStyles.link}[aria-current="true"]`, {
  fontWeight: globalVars.fonts.body.semiBold,
});

export default archiveNavStyles;
