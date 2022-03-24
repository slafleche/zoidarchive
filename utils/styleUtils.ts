// Object representing a CSS measurement (eg. "10px" or "30vh");
export interface IMeasurement {
  val: number;
  unit: string;
  toString: () => string;
}

export const measurement = (value: string | IMeasurement) => {
  // For easlier type checking, pass through value if it's already converted.
  if (typeof value !== "string") {
    return value;
  }

  let val = value.trim();
  let unit = val.replace(/^-?(0|[1-9]\d*)?([.][0-9]*)?/, ""); // not yet trimmed
  val = val.substring(0, val.length - unit.length);
  if (val === "-0") {
    val = "0";
  }
  const valParsed = Number(val);
  unit = unit.trim();

  const result: IMeasurement = {
    val: valParsed,
    unit,
    toString: () => {
      return `${valParsed}${unit}`;
    },
  };

  return result;
};

export const divide = (
  value: string | IMeasurement,
  denominator: number,
  decimals?: number
): string => {
  const style = measurement(value);
  return `${(style.val / denominator).toFixed(decimals || 2)}${style.unit}`;
};

export const multiply = (
  value: string | IMeasurement,
  denominator: number
): string => {
  const style = measurement(value);
  return `${style.val * denominator}${style.unit}`;
};

export const math = {
  divide,
  multiply,
};
