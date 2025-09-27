import { _ as __unplugin_components_14 } from "./index.B7uhjxsD.js";
import { d as defineComponent, r as ref, g as createElementBlock, f as openBlock, m as createVNode, w as withCtx, a4 as createTextVNode, aA as isRef, i as unref } from "./index.DgCifb3N.js";
import { E as ElLink } from "./link.ClbStwSj.js";
import "./popper.Q6izn39B.js";
import "./index.BwBurVMj.js";
import "./index.DL8YhwXP.js";
import "./aria.McRhojP9.js";
import "./index.5PwPfq1Z.js";
import "./use-form-common-props.W917BqDg.js";
import "./popover.B9LLNCrH.js";
import "./dropdown.Bv_C-nCY.js";
import "./tab-pane.DT5ZDrII.js";
import "./raf.BBKVe_HM.js";
import "./_initCloneObject.BCx9NvKs.js";
import "./strings.kqtWM_S0.js";
import "./error.BVJkE67s.js";
import "./toNumber.mFdtizoO.js";
import "./event.BZTOGHfp.js";
import "./index.DWEbBWUw.js";
import "./vnode.Cdh-aUnw.js";
import "./_baseClone.DsNUyHfj.js";
import "./scrollbar.DFmAuozx.js";
/* empty css                 */
import "./input.jp_dUftq.js";
import "./index.BR0fnhTQ.js";
import "./index.Db3xEZfF.js";
import "./_plugin-vue_export-helper.1tPrXgE0.js";
import "./index.EXOeRVXS.js";
const _hoisted_1 = { class: "app-container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "icon-selector",
  setup(__props) {
    const iconName = ref("el-icon-edit");
    return (_ctx, _cache) => {
      const _component_el_link = ElLink;
      const _component_icon_select = __unplugin_components_14;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_el_link, {
          href: "https://gitee.com/youlaiorg/vue3-element-admin/blob/master/src/views/demo/icon-selector.vue",
          type: "primary",
          target: "_blank",
          class: "mb-10"
        }, {
          default: withCtx(() => [..._cache[1] || (_cache[1] = [
            createTextVNode(" 示例源码 请点击>>>> ", -1)
          ])]),
          _: 1
        }),
        createVNode(_component_icon_select, {
          modelValue: unref(iconName),
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(iconName) ? iconName.value = $event : null)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
