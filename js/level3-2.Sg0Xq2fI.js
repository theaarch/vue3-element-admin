import { d as defineComponent, r as ref, o as onMounted, g as createElementBlock, f as openBlock, C as createBaseVNode, m as createVNode, aA as isRef, i as unref } from "./index.Bbtf1pPU.js";
import { E as ElInput } from "./input.j-vchNyT.js";
import { E as ElAlert } from "./alert.CvxYbDUL.js";
import { T as ToDetail } from "./detail.BdL9KczR.js";
import { _ as _sfc_main$1 } from "./level1.vue_vue_type_script_setup_true_lang.z0N_jLQk.js";
import { _ as _sfc_main$2 } from "./level2.vue_vue_type_script_setup_true_lang.T71BpZz_.js";
import "./index.Dq7OVrCm.js";
import "./event.BZTOGHfp.js";
import "./index.lp4JSJNw.js";
import "./use-form-common-props.XNbRYF7I.js";
import "./index.BpwQxZo8.js";
import "./aria.McRhojP9.js";
import "./error.BVJkE67s.js";
import "./index.qi1v2frx.js";
import "./index.BkdL6Umg.js";
import "./index.CuTY5eaj.js";
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
