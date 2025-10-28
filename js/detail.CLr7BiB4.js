import { d as defineComponent, ap as useRoute, r as ref, g as createElementBlock, C as createBaseVNode, m as createVNode, F as toDisplayString, i as unref, aA as isRef, f as openBlock } from "./index.Bbtf1pPU.js";
import { E as ElInput } from "./input.j-vchNyT.js";
import "./index.Dq7OVrCm.js";
import "./event.BZTOGHfp.js";
import "./index.lp4JSJNw.js";
import "./use-form-common-props.XNbRYF7I.js";
import "./index.BpwQxZo8.js";
import "./aria.McRhojP9.js";
import "./error.BVJkE67s.js";
const _hoisted_1 = {
  "p-5": "",
  flex: "",
  "flex-col": "",
  gap: "20px"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "DemoDetail"
  },
  __name: "detail",
  setup(__props) {
    const route = useRoute();
    console.log(route);
    const value = ref("");
    return (_ctx, _cache) => {
      const _component_el_input = ElInput;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", null, "params: " + toDisplayString(unref(route).params), 1),
        createBaseVNode("div", null, "query: " + toDisplayString(unref(route).query), 1),
        createVNode(_component_el_input, {
          modelValue: unref(value),
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(value) ? value.value = $event : null),
          placeholder: "缓存测试"
        }, null, 8, ["modelValue"])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
