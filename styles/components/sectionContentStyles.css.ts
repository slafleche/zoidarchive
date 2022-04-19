import { style } from "@vanilla-extract/css";
import { colors } from "styles/colors.css";
import { paddings } from "styles/helpers/spacing";
import { threeColumnContentVars } from "./threeColumnLayout.css";

const sectionContentStyles = {
  root: style({}),
  title: style({}),
  items: style({}),
  item: style({}),
  link: style({}),
};

export default sectionContentStyles;
