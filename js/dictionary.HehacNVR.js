import { d as defineComponent, r as ref, g as createElementBlock, f as openBlock, m as createVNode, w as withCtx, a4 as createTextVNode, aA as isRef, i as unref } from "./index.DgCifb3N.js";
import { E as ElFormItem, a as ElForm } from "./form-item.DhTC14cP.js";
import { _ as _sfc_main$1 } from "./index.vue_vue_type_script_setup_true_lang.C2GQtT17.js";
import { E as ElLink } from "./link.ClbStwSj.js";
import "./use-form-common-props.W917BqDg.js";
import "./castArray.B0hR3tm7.js";
import "./error.BVJkE67s.js";
import "./_baseClone.DsNUyHfj.js";
import "./_initCloneObject.BCx9NvKs.js";
import "./checkbox.WcNmY0f3.js";
import "./index.BwBurVMj.js";
import "./event.BZTOGHfp.js";
import "./index.EXOeRVXS.js";
/* empty css                        */
import "./radio-group.CVivaAi-.js";
/* empty css             */
import "./select.CtP44s4b.js";
import "./popper.Q6izn39B.js";
import "./index.DL8YhwXP.js";
import "./aria.McRhojP9.js";
import "./index.5PwPfq1Z.js";
import "./scrollbar.DFmAuozx.js";
import "./index.Dz7-s_8A.js";
import "./token.BqWJQ4CJ.js";
import "./strings.kqtWM_S0.js";
import "./index.Db3xEZfF.js";
import "./scroll.DO_Nu_vC.js";
import "./debounce.Qak2uIBG.js";
import "./toNumber.mFdtizoO.js";
import "./_baseIteratee.BjpvXncu.js";
import "./index.D4tWCXE-.js";
import "./vnode.Cdh-aUnw.js";
const _hoisted_1 = { class: "app-container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dictionary",
  setup(__props) {
    const stringValue = ref("1");
    const numberValue = ref(1);
    const arrayValue = ref(["1", "2"]);
    return (_ctx, _cache) => {
      const _component_el_link = ElLink;
      const _component_dict = _sfc_main$1;
      const _component_el_form_item = ElFormItem;
      const _component_el_form = ElForm;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_el_link, {
          href: "https://gitee.com/youlaiorg/vue3-element-admin/blob/master/src/views/demo/dictionary.vue",
          type: "primary",
          target: "_blank",
          class: "mb-[20px]"
        }, {
          default: withCtx(() => [..._cache[4] || (_cache[4] = [
            createTextVNode(" 示例源码 请点击>>>> ", -1)
          ])]),
          _: 1
        }),
        createVNode(_component_el_form, null, {
          default: withCtx(() => [
            createVNode(_component_el_form_item, { label: "性别" }, {
              default: withCtx(() => [
                createVNode(_component_dict, {
                  modelValue: unref(stringValue),
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(stringValue) ? stringValue.value = $event : null),
                  code: "gender"
                }, null, 8, ["modelValue"]),
                createVNode(_component_el_link, {
                  underline: "never",
                  type: "primary",
                  class: "ml-5"
                }, {
                  default: withCtx(() => [..._cache[5] || (_cache[5] = [
                    createTextVNode(' 值为String: const value = ref("1"); ', -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, { label: "性别" }, {
              default: withCtx(() => [
                createVNode(_component_dict, {
                  modelValue: unref(numberValue),
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(numberValue) ? numberValue.value = $event : null),
                  code: "gender"
                }, null, 8, ["modelValue"]),
                createVNode(_component_el_link, {
                  underline: "never",
                  type: "success",
                  class: "ml-5"
                }, {
                  default: withCtx(() => [..._cache[6] || (_cache[6] = [
                    createTextVNode(" 值为Number: const value = ref(1); ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, { label: "单选框字典" }, {
              default: withCtx(() => [
                createVNode(_component_dict, {
                  modelValue: unref(numberValue),
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(numberValue) ? numberValue.value = $event : null),
                  type: "radio",
                  code: "gender"
                }, null, 8, ["modelValue"]),
                createVNode(_component_el_link, {
                  underline: "never",
                  type: "success",
                  class: "ml-5"
                }, {
                  default: withCtx(() => [..._cache[7] || (_cache[7] = [
                    createTextVNode(" 值为Number: const value = ref(1); ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, { label: "复选框字典" }, {
              default: withCtx(() => [
                createVNode(_component_dict, {
                  modelValue: unref(arrayValue),
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => isRef(arrayValue) ? arrayValue.value = $event : null),
                  type: "checkbox",
                  code: "gender"
                }, null, 8, ["modelValue"]),
                createVNode(_component_el_link, {
                  underline: "never",
                  type: "success",
                  class: "ml-5"
                }, {
                  default: withCtx(() => [..._cache[8] || (_cache[8] = [
                    createTextVNode(' 值为Array: const value = ref(["1", "2"]); ', -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});
export {
  _sfc_main as default
};
