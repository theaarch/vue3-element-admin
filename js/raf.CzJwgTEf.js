import { I as isClient } from "./index.Bx50VaHZ.js";
const rAF = (fn) => isClient ? window.requestAnimationFrame(fn) : setTimeout(fn, 16);
const cAF = (handle) => isClient ? window.cancelAnimationFrame(handle) : clearTimeout(handle);
export {
  cAF as c,
  rAF as r
};
