import { d as defineComponent, r as ref, o as onMounted, g as createElementBlock, f as openBlock, C as createBaseVNode, m as createVNode, aA as isRef, i as unref } from "./index.DgCifb3N.js";
import { E as ElInput } from "./input.jp_dUftq.js";
import { E as ElAlert } from "./alert.DCDbKQP2.js";
import { T as ToDetail } from "./detail.YvNAR3Z1.js";
import { _ as _sfc_main$1 } from "./level1.vue_vue_type_script_setup_true_lang.CxVkiwFp.js";
import { _ as _sfc_main$2 } from "./level2.vue_vue_type_script_setup_true_lang.B09zpatM.js";
import "./index.BwBurVMj.js";
import "./event.BZTOGHfp.js";
import "./index.BR0fnhTQ.js";
import "./use-form-common-props.W917BqDg.js";
import "./index.Db3xEZfF.js";
import "./aria.McRhojP9.js";
import "./error.BVJkE67s.js";
import "./index.5PwPfq1Z.js";
import "./index.4uj88zkc.js";
import "./index.EXOeRVXS.js";
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
