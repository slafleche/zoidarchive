export const isNumeric = (obj: any) => {
  return !isNaN(parseFloat(obj)) && isFinite(obj);
};

export const debounce = (callback: (event?: any) => void) => {
  console.log("debounce!");
  var timeout;
  if (timeout) {
    window.cancelAnimationFrame(timeout);
  }
  timeout = window.requestAnimationFrame(function () {
    callback();
  });
};
