import { layoutVars } from "../components/layout.css";
import { calc } from "@vanilla-extract/css-utils";
import { ComplexStyleRule } from "@vanilla-extract/css";
import * as csstype from "csstype";
import { measurement } from "../../utils/styleUtils";

export interface IMediaQueryProps {
  name: string;
  type?: "all" | "print" | "screen";
  minWidth?: string;
  maxWidth?: string;
}

export interface IMediaQuery {
  props: IMediaQueryProps;
  styles: ComplexStyleRule;
}

export type IMediaQueries = IMediaQuery[];

export const substractOnePixel = (length: string) => {
  const props = measurement(length);
  if (props.unit !== "px") {
    throw Error(`Error in substractOnePixel: "${length}" is not in pixels`);
  }
  return measurement(props, props.val - 1).toString() as csstype.Property.Width;
};

export const addOnePixel = (length: string) => {
  const props = measurement(length);
  if (props.unit !== "px") {
    throw Error(`Error in addOnePixel: "${length}" is not in pixels`);
  }
  return measurement(props, props.val + 1).toString() as csstype.Property.Width;
};

// https://github.com/yocontra/react-responsive
// To be used in hooks with useMediaQuery()
// Example: const isFullWidth = useMediaQuery(globalMediaQueries.fullWidth);
const globalMediaQueries = {
  fullWidth: {
    minWidth: `${calc.add(
      layoutVars.contentWidth,
      calc.multiply(layoutVars.contentPadding, 2)
    )}`,
  } as IMediaQueryProps,
  noBleed: {
    minWidth: layoutVars.contentWidth,
  } as IMediaQueryProps,
  noBleed_exclusive: {
    minWidth: layoutVars.contentWidth,
    maxWidth: calc.subtract(layoutVars.contentWidth, "1px"),
  } as IMediaQueryProps,
};

export const mediaQueryStyle = (
  queryAndStyles: IMediaQuery | IMediaQueries,
  debug = false
) => {
  if (!Array.isArray(queryAndStyles)) {
    queryAndStyles = [queryAndStyles];
  }
  let result: any = {};
  queryAndStyles.forEach((mq) => {
    const { props, styles } = mq;
    const minWidth = props.minWidth
      ? ` and (min-width: ${props.minWidth})`
      : ``;
    const maxWidth = props.maxWidth
      ? ` and (max-width: ${props.maxWidth})`
      : ``;
    const rule = `${props.type ?? "screen"}${minWidth}${maxWidth}`;
    result[rule] = styles;
  });
  const mediaQuery = {
    "@media": result,
  } as ComplexStyleRule;
  if (debug) {
    console.log("mediaQuery: ", mediaQuery);
  }
  return mediaQuery;
};

export const globalMediaQueryStyles = {
  fullWidth: (styles: ComplexStyleRule) => {
    return mediaQueryStyle({
      props: globalMediaQueries.fullWidth,
      styles,
    });
  },
  noBleed: (styles: ComplexStyleRule) => {
    return mediaQueryStyle({ props: globalMediaQueries.noBleed, styles });
  },
  noBleed_exclusive: (styles: ComplexStyleRule) => {
    return mediaQueryStyle({
      props: globalMediaQueries.noBleed_exclusive,
      styles,
    });
  },
};

export default globalMediaQueries;
