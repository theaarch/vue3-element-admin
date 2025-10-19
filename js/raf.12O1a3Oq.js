import { H as isClient } from "./index.BOIRy7is.js";
const rAF = (fn) => isClient ? window.requestAnimationFrame(fn) : setTimeout(fn, 16);
const cAF = (handle) => isClient ? window.cancelAnimationFrame(handle) : clearTimeout(handle);
export {
  cAF as c,
  rAF as r
};
