import { d as defineComponent, r as ref, o as onMounted, g as createElementBlock, f as openBlock, D as createBaseVNode, m as createVNode, aC as isRef, i as unref } from "./index.Bx50VaHZ.js";
import { E as ElInput } from "./input.nStG-Jp4.js";
import { E as ElAlert } from "./alert.DwNp3-iV.js";
import { T as ToDetail } from "./detail.BvRO7gpV.js";
import { _ as _sfc_main$1 } from "./level1.vue_vue_type_script_setup_true_lang.wSXlYLO2.js";
import { _ as _sfc_main$2 } from "./level2.vue_vue_type_script_setup_true_lang.CEasFP1a.js";
import "./index.YZuNrD9b.js";
import "./event.BZTOGHfp.js";
import "./index.DIENj2CJ.js";
import "./use-form-common-props.ChtQdZbI.js";
import "./index.CuVGx6kZ.js";
import "./aria.McRhojP9.js";
import "./index.BNhiyZen.js";
import "./index.B9WUq5pa.js";
import "./index.TSou46Cf.js";
const _hoisted_1 = { class: "app-container" };
const _hoisted_2 = {
  flex: "",
  "flex-col": "",
  "gap-20px": ""
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "MultiLevel31" },
  __name: "level3-1",
  setup(__props) {
    const value = ref("");
    onMounted(() => {
      console.log("Multilevel31 onMounted");
    });
    return (_ctx, _cache) => {
      const _component_el_alert = ElAlert;
      const _component_el_input = ElInput;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_sfc_main$1),
          createVNode(_sfc_main$2),
          createVNode(_component_el_alert, {
            closable: false,
            title: "菜单三级-1",
            type: "error"
          }),
          createVNode(_component_el_input, {
            modelValue: unref(value),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(value) ? value.value = $event : null),
            placeholder: "缓存测试"
          }, null, 8, ["modelValue"]),
          createVNode(unref(ToDetail))
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
