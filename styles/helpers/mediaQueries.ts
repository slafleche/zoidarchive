import { calc } from "@vanilla-extract/css-utils";
import { ComplexStyleRule } from "@vanilla-extract/css";
import * as csstype from "csstype";
import { measurement } from "../utils/styleUtils";
import { layoutVars } from "../components/layoutVars.css";

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
  try {
    const props = measurement(length);
    if (props && props.unit !== "px") {
      throw Error(`Error in substractOnePixel: "${length}" is not in pixels`);
    }
    return measurement(
      props,
      props.val - 1
    ).toString() as csstype.Property.Width;
  } catch (e) {
    console.log(e);
  }
};

export const addOnePixel = (length: string) => {
  try {
    const props = measurement(length);
    if (props && props.unit !== "px") {
      throw `Error in addOnePixel: "${length}" is not in pixels`;
    }
    return measurement(
      props,
      props.val + 1
    ).toString() as csstype.Property.Width;
  } catch (e) {
    console.log(e);
  }
};

// https://github.com/yocontra/react-responsive
// To be used in hooks with useMediaQuery()
// Example: const isFullSize = useMediaQuery(globalMediaQueries.fullSize);
const globalMediaQueries = {
  fullSize: {
    minWidth: `${calc.add(
      layoutVars.contentWidth,
      calc.multiply(layoutVars.contentPadding, 2)
    )}`,
  } as IMediaQueryProps,

  compact: {
    maxWidth: layoutVars.compact.contentWidth,
    minWidth: addOnePixel(layoutVars.compressed.contentWidth),
  } as IMediaQueryProps,

  compressed: {
    maxWidth: layoutVars.compressed.contentWidth,
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
    const minWidth =
      "minWidth" in props ? ` and (min-width: ${props.minWidth})` : ``;

    const maxWidth =
      "maxWidth" in props ? ` and (max-width: ${props.maxWidth})` : ``;

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

interface IGlobalMediaQueryStyles {
  fullSize?: ComplexStyleRule;
  noBleed?: ComplexStyleRule;
  compact?: ComplexStyleRule;
  compressed?: ComplexStyleRule;
}

export const globalMediaQueryStyles = (
  styles: IGlobalMediaQueryStyles,
  debug = false
) => {
  let mediaQueries: IMediaQuery[] = [];

  if (styles.fullSize) {
    mediaQueries.push({
      props: globalMediaQueries.fullSize,
      styles: styles.fullSize,
    });
  }

  if (styles.compact) {
    mediaQueries.push({
      props: globalMediaQueries.compact,
      styles: styles.compact,
    });
  }

  if (styles.compressed) {
    mediaQueries.push({
      props: globalMediaQueries.compressed,
      styles: styles.compressed,
    });
  }

  return mediaQueryStyle(mediaQueries, debug);
};

export default globalMediaQueries;
