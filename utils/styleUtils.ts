import chroma from "chroma-js";

export const utilVars = {
  black: chroma("#000"),
  white: chroma("#FFF"),
};

import * as csstype from "csstype";
import { isNumeric } from "../src/utils/utils";

// export const unit = (
//   val: string | number | undefined
//   //   options?: {
//   //     isImportant?: boolean;
//   //   }
// ) => {
//   //   const { isImportant = false } = options || {};

//   if (typeof val === "object") {
//     console.log(
//       `You cannot pass objects (${JSON.stringify(val)}) to the "unit" function`
//     );
//     return undefined;
//   }

//   if (val === undefined) {
//     return undefined;
//   }

//   const valIsNumeric = isNumeric(val.toString().trim());

//   let output;

//   if (typeof val === "string" && !valIsNumeric) {
//     output = val;
//   } else if (val !== undefined && val !== null && valIsNumeric) {
//     output = `${val} px`;
//   } else {
//     output = val;
//   }

//   return output;
// };

// Object representing a CSS measurement (eg. "10px" or "30vh");
interface IMeasurement {
  val: number;
  unit: string;
  toString: () => string;
}

export const measurement = (value: string): IMeasurement => {
  const err = new Error("Invalid value to split");
  const result = {
    val: undefined,
    unit: undefined,
    toString: undefined,
  };
  try {
    let val = value.trim();
    let unit = val.replace(/^-?(0|[1-9]\d*)?([.][0-9]*)?/, ""); // not yet trimmed
    val = val.substring(0, val.length - unit.length);
    if (val === "-0") {
      val = "0";
    }
    const valParsed = Number(val);
    unit = unit.trim();
    result.val = valParsed;
    result.unit = unit;
    result.toString = () => {
      return `${valParsed}${unit}`;
    };
    return result;
  } catch (e) {
    console.error(e.message, e.name);
  }
};

export const divide = (
  value: string | IMeasurement,
  denominator: number,
  decimals?: number
): string => {
  let style = value;
  if (typeof style === "string") {
    style = measurement(value as string);
  }
  return `${(style.val / denominator).toFixed(decimals || 2)}${style.unit}`;
};

export const multiply = (
  value: string | IMeasurement,
  denominator: number
): string => {
  let style = value;
  if (typeof style === "string") {
    style = measurement(value as string);
  }
  return `${style.val * denominator}${style.unit}`;
};

export const math = {
  divide,
  multiply,
};
