export const isNumeric = (obj) => {
    return !isNaN(parseFloat(obj)) && isFinite(obj);
};
