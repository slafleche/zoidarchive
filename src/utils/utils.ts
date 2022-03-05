export const isNumeric = (obj: any) => {
  return !isNaN(parseFloat(obj)) && isFinite(obj);
};
