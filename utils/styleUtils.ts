import chroma from "chroma-js";

export const utilVars = {
  black: chroma("#000"),
  white: chroma("#FFF"),
};

import * as csstype from "csstype";
import { isNumeric } from "../src/utils/utils";

export const unit = (
  val: string | number | undefined
  //   options?: {
  //     isImportant?: boolean;
  //   }
) => {
  //   const { isImportant = false } = options || {};

  if (typeof val === "object") {
    console.log(
      `You cannot pass objects (${JSON.stringify(val)}) to the "unit" function`
    );
    return undefined;
  }

  if (val === undefined) {
    return undefined;
  }

  const valIsNumeric = isNumeric(val.toString().trim());

  let output;

  if (typeof val === "string" && !valIsNumeric) {
    output = val;
  } else if (val !== undefined && val !== null && valIsNumeric) {
    output = `${val} px`;
  } else {
    output = val;
  }

  return output;
};

export const splitUnit = (value: string): { val: number; unit: string } => {
  const err = new Error("Invalid value to split");
  console.log(`\n______ original value: "${value}"`);
  const result = {
    val: undefined,
    unit: undefined,
  };

  try {
    let val = value.trim();
    let unit = val.replace(/^-?(0|[1-9]\d*)?([.][0-9]*)?/, ""); // not yet trimmed
    val = val.substring(0, val.length - unit.length);
    if (val === "-0") {
      val = "0";
    }
    result.val = Number(val);
    if (unit.length > 0) {
      result.unit = unit.trim();
    }
    return result;
  } catch (e) {
    console.error(e.message, e.name);
  }
};

export const reapplyUnit = (val: number, unit: string) => {
  return `${val} ${unit}`;
};

export const divide = (
  value: string,
  denominator: number,
  decimals?: number
): string => {
  const style = splitUnit(value);
  return `${(style.val / denominator).toFixed(decimals || 2)} ${style.unit}`;
};
