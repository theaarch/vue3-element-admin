const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["js/Login.DTqawBQ6.js","js/index.DgCifb3N.js","css/index.CHE7RoNU.css","js/text.CO5ILHcY.js","js/use-form-common-props.W917BqDg.js","css/text.BLziObyn.css","js/form-item.DhTC14cP.js","js/castArray.B0hR3tm7.js","js/error.BVJkE67s.js","js/_baseClone.DsNUyHfj.js","js/_initCloneObject.BCx9NvKs.js","css/form-item.CrXKSnYD.css","js/link.ClbStwSj.js","js/index.EXOeRVXS.js","css/link.CSroOXR0.css","js/checkbox.WcNmY0f3.js","js/index.BwBurVMj.js","js/event.BZTOGHfp.js","css/checkbox.BYJIIQqN.css","js/popper.Q6izn39B.js","js/index.DL8YhwXP.js","js/aria.McRhojP9.js","js/index.5PwPfq1Z.js","css/popper.5W4vbdUo.css","js/input.jp_dUftq.js","js/index.BR0fnhTQ.js","js/index.Db3xEZfF.js","css/input.C17lflRs.css","js/index.9p_DgMwN.js","js/_plugin-vue_export-helper.1tPrXgE0.js","css/index.CD_YmqUX.css","js/index.4uj88zkc.js","css/Login.u60MZ3kr.css","css/button.5maVMVQO.css","css/tooltip.Cw87z_qM.css","js/Register.BJD_9mw6.js","js/ResetPwd.zm5hp9Sh.js"])))=>i.map(i=>d[i]);
import { d as defineComponent, aE as useI18n, am as useSettingsStore, aY as sunny_default, at as ThemeMode, aZ as moon_default, e as createBlock, f as openBlock, w as withCtx, m as createVNode, E as ElIcon, D as resolveDynamicComponent, i as unref, g as createElementBlock, P as Fragment, Q as renderList, a4 as createTextVNode, F as toDisplayString, r as ref, C as createBaseVNode, an as defaultSettings, aH as ElBadge, T as Transition, a_ as defineAsyncComponent, aA as isRef, a$ as __vitePreload } from "./index.DgCifb3N.js";
import { E as ElText } from "./text.CO5ILHcY.js";
import { E as ElImage } from "./image-viewer.DmFYlS-Q.js";
import { l as logo, _ as _sfc_main$2 } from "./index.vue_vue_type_script_setup_true_lang.gj_KMAEA.js";
/* empty css                 */
import { E as ElTooltip } from "./popper.Q6izn39B.js";
import { C as CommonWrapper } from "./index.9p_DgMwN.js";
/* empty css                */
import { a as ElDropdownMenu, b as ElDropdownItem, E as ElDropdown } from "./dropdown-item.BlsNrGEv.js";
import "./scrollbar.DFmAuozx.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
import "./use-form-common-props.W917BqDg.js";
import "./index.DL8YhwXP.js";
import "./aria.McRhojP9.js";
import "./debounce.Qak2uIBG.js";
import "./toNumber.mFdtizoO.js";
import "./index.BR0fnhTQ.js";
import "./scroll.DO_Nu_vC.js";
import "./index.BwBurVMj.js";
import "./index.5PwPfq1Z.js";
import "./index.4uj88zkc.js";
import "./index.EXOeRVXS.js";
import "./dropdown.Bv_C-nCY.js";
import "./castArray.B0hR3tm7.js";
import "./refs.CxYYXu5Q.js";
import "./error.BVJkE67s.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const { t } = useI18n();
    const settingsStore = useSettingsStore();
    const theneList = [
      { label: t("login.light"), value: ThemeMode.LIGHT, component: sunny_default },
      { label: t("login.dark"), value: ThemeMode.DARK, component: moon_default }
    ];
    const handleDarkChange = (theme) => {
      settingsStore.updateTheme(theme);
    };
    return (_ctx, _cache) => {
      const _component_el_icon = ElIcon;
      const _component_el_dropdown_item = ElDropdownItem;
      const _component_el_dropdown_menu = ElDropdownMenu;
      const _component_el_dropdown = ElDropdown;
      return openBlock(), createBlock(_component_el_dropdown, {
        trigger: "click",
        onCommand: handleDarkChange
      }, {
        dropdown: withCtx(() => [
          createVNode(_component_el_dropdown_menu, null, {
            default: withCtx(() => [
              (openBlock(), createElementBlock(Fragment, null, renderList(theneList, (item) => {
                return createVNode(_component_el_dropdown_item, {
                  key: item.value,
                  command: item.value,
                  disabled: unref(settingsStore).theme === item.value
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_icon, null, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(item.component)))
                      ]),
                      _: 2
                    }, 1024),
                    createTextVNode(" " + toDisplayString(item.label), 1)
                  ]),
                  _: 2
                }, 1032, ["command", "disabled"]);
              }), 64))
            ]),
            _: 1
          })
        ]),
        default: withCtx(() => [
          createVNode(_component_el_icon, { size: 20 }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(unref(settingsStore).theme === unref(ThemeMode).DARK ? unref(moon_default) : unref(sunny_default))))
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
const _hoisted_1 = { class: "login-container" };
const _hoisted_2 = { class: "action-bar" };
const _hoisted_3 = {
  "flex-1": "",
  "flex-center": ""
};
const _hoisted_4 = { class: "p-4xl w-full h-auto sm:w-450px border-rd-10px sm:h-680px shadow-[var(--el-box-shadow-light)] backdrop-blur-3px" };
const _hoisted_5 = {
  "w-full": "",
  flex: "",
  "flex-col": "",
  "items-center": ""
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const t = useI18n().t;
    const component = ref("login");
    const formComponents = {
      login: defineAsyncComponent(() => __vitePreload(() => import("./Login.DTqawBQ6.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]) : void 0)),
      register: defineAsyncComponent(() => __vitePreload(() => import("./Register.BJD_9mw6.js"), true ? __vite__mapDeps([35,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,31,33,34]) : void 0)),
      resetPwd: defineAsyncComponent(() => __vitePreload(() => import("./ResetPwd.zm5hp9Sh.js"), true ? __vite__mapDeps([36,1,2,12,13,14,3,4,5,6,7,8,9,10,11,24,16,17,25,26,21,27,31,33]) : void 0))
    };
    return (_ctx, _cache) => {
      const _component_el_tooltip = ElTooltip;
      const _component_LangSelect = _sfc_main$2;
      const _component_el_image = ElImage;
      const _component_el_badge = ElBadge;
      const _component_el_text = ElText;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_el_tooltip, {
            content: unref(t)("login.themeToggle"),
            placement: "bottom"
          }, {
            default: withCtx(() => [
              createVNode(CommonWrapper, null, {
                default: withCtx(() => [
                  createVNode(_sfc_main$1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["content"]),
          createVNode(_component_el_tooltip, {
            content: unref(t)("login.languageToggle"),
            placement: "bottom"
          }, {
            default: withCtx(() => [
              createVNode(CommonWrapper, null, {
                default: withCtx(() => [
                  createVNode(_component_LangSelect, { size: "text-20px" })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["content"])
        ]),
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createVNode(_component_el_image, {
                src: unref(logo),
                style: { "width": "84px" }
              }, null, 8, ["src"]),
              createBaseVNode("h2", null, [
                createVNode(_component_el_badge, {
                  value: `v ${unref(defaultSettings).version}`,
                  type: "success"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(defaultSettings).title), 1)
                  ]),
                  _: 1
                }, 8, ["value"])
              ]),
              createVNode(Transition, {
                name: "fade-slide",
                mode: "out-in"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(formComponents[unref(component)]), {
                    modelValue: unref(component),
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(component) ? component.value = $event : null),
                    class: "w-90%"
                  }, null, 8, ["modelValue"]))
                ]),
                _: 1
              })
            ])
          ]),
          createVNode(_component_el_text, {
            size: "small",
            class: "py-2.5! fixed bottom-0 text-center"
          }, {
            default: withCtx(() => [..._cache[1] || (_cache[1] = [
              createTextVNode(" Copyright © 2021 - 2025 youlai.tech All Rights Reserved. ", -1),
              createBaseVNode("a", {
                href: "http://beian.miit.gov.cn/",
                target: "_blank"
              }, "皖ICP备20006496号-2", -1)
            ])]),
            _: 1
          })
        ])
      ]);
    };
  }
});
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-215d16d8"]]);
export {
  index as default
};
