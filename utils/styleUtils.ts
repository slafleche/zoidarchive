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
  if (isNumeric(value)) {
    let val = value.trim();
    const unit = val.match(/(-?[\d.]+)([a-z%]*)/).toString();
    if (unit && unit.length > 0) {
      val = val.slice(0, -unit.length).trim();
    }

    const parsedVal = Number(val);

    if (isNumeric(parsedVal)) {
      return {
        val: parsedVal,
        unit,
      };
    }
  }

  // Fallback
  return {
    val: null,
    unit: null,
  };
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

console.log("");
console.log("======");
console.log("Testing: ");
const test1 = "iasjfajfjasd";
const result1 = splitUnit(test1);
console.log(`test 1: in: ${test1}, expecting: "null" and "null"`);
console.log(
  `                       result 1: "${result1.val}" and "${result1.unit}"`
);
console.log("");
const test2 = "49994 askjdasljfs ja";
console.log(
  `                       result 1: "${result1.val}" and "${result1.unit}"`
);
console.log("");
const test3 = "4.4";
console.log(
  `                       result 1: "${result1.val}" and "${result1.unit}"`
);
console.log("");
const test4 = "4";
console.log(
  `                       result 1: "${result1.val}" and "${result1.unit}"`
);
console.log("");
const test5 = "4%";
console.log(
  `                       result 1: "${result1.val}" and "${result1.unit}"`
);
console.log("");
const test6 = "4.4453253524%";
console.log(
  `                       result 1: "${result1.val}" and "${result1.unit}"`
);
console.log("");
const test7 = "5 px";
console.log(
  `                       result 1: "${result1.val}" and "${result1.unit}"`
);
console.log("");
const test8 = "4.4453253524px";
console.log(
  `                       result 1: "${result1.val}" and "${result1.unit}"`
);
console.log("");
const test9 = "4.4453253524 em";
console.log(
  `                       result 1: "${result1.val}" and "${result1.unit}"`
);
console.log("");
console.log("======");
console.log("");
