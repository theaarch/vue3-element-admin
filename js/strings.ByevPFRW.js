import { dg as capitalize$1 } from "./index.BOIRy7is.js";
const escapeStringRegexp = (string = "") => string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
const capitalize = (str) => capitalize$1(str);
export {
  capitalize as c,
  escapeStringRegexp as e
};
