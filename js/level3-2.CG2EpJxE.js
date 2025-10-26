import { d as defineComponent, r as ref, o as onMounted, g as createElementBlock, f as openBlock, C as createBaseVNode, m as createVNode, aA as isRef, i as unref } from "./index.CMVGoxdi.js";
import { E as ElInput } from "./input.e-JahrSO.js";
import { E as ElAlert } from "./alert.DaIEOqxn.js";
import { T as ToDetail } from "./detail.C9PLLafr.js";
import { _ as _sfc_main$1 } from "./level1.vue_vue_type_script_setup_true_lang.DAdTA0Kr.js";
import { _ as _sfc_main$2 } from "./level2.vue_vue_type_script_setup_true_lang.CFb8oRN9.js";
import "./index.DaBsN2Em.js";
import "./event.BZTOGHfp.js";
import "./index.BBCU1hlO.js";
import "./use-form-common-props.FTUT8iWW.js";
import "./index.DV5G4YPF.js";
import "./aria.McRhojP9.js";
import "./error.BVJkE67s.js";
import "./index.DVrxpZpR.js";
import "./index.Dj3dgP9b.js";
import "./index.YIi0pvtX.js";
const _hoisted_1 = { class: "app-container" };
const _hoisted_2 = {
  flex: "",
  "flex-col": "",
  "gap-20px": ""
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "MultiLevel32" },
  __name: "level3-2",
  setup(__props) {
    const value = ref("");
    onMounted(() => {
      console.log("Multilevel32 onMounted");
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
            title: "菜单三级-2",
            type: "warning"
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
