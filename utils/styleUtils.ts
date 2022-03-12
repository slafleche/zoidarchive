import chroma from "chroma-js";

export const utilVars = {
  black: chroma("#000"),
  white: chroma("#FFF"),
  weights: {
    normal: "300",
    bold: "600",
  },
};

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
