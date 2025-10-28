const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["js/Login.CkX-RlTc.js","js/index.Bbtf1pPU.js","css/index.CWfeEGrb.css","js/form-item.BA2Ef9fQ.js","js/use-form-common-props.XNbRYF7I.js","js/castArray.DTpXPzCD.js","js/error.BVJkE67s.js","js/_baseClone.e4OLkoM6.js","css/form-item.CrXKSnYD.css","js/link.D87KEDtM.js","js/index.CuTY5eaj.js","css/link.CSroOXR0.css","js/checkbox.CewNRwxq.js","js/index.Dq7OVrCm.js","js/event.BZTOGHfp.js","js/omit.CVQYKYAG.js","css/checkbox.BYJIIQqN.css","js/text.KTSYnMFD.js","css/text.BLziObyn.css","js/popper.DQOiQAe7.js","js/index.CSo4ti9t.js","js/aria.McRhojP9.js","js/index.qi1v2frx.js","css/popper.5W4vbdUo.css","js/input.j-vchNyT.js","js/index.lp4JSJNw.js","js/index.BpwQxZo8.js","css/input.CLfgKR0e.css","js/index.CkL6ikzk.js","js/_plugin-vue_export-helper.1tPrXgE0.js","css/index.CD_YmqUX.css","js/index.BkdL6Umg.js","css/Login.s1pjaier.css","css/button.5maVMVQO.css","css/tooltip.Cw87z_qM.css","js/Register.DwkaNWvn.js","js/ResetPwd.CTb0G7ZQ.js"])))=>i.map(i=>d[i]);
import { d as defineComponent, aE as useI18n, am as useSettingsStore, aY as sunny_default, at as ThemeMode, aZ as moon_default, e as createBlock, f as openBlock, w as withCtx, m as createVNode, E as ElIcon, D as resolveDynamicComponent, i as unref, g as createElementBlock, P as Fragment, Q as renderList, a4 as createTextVNode, F as toDisplayString, r as ref, C as createBaseVNode, an as defaultSettings, aH as ElBadge, T as Transition, a_ as defineAsyncComponent, aA as isRef, a$ as __vitePreload } from "./index.Bbtf1pPU.js";
import { E as ElText } from "./text.KTSYnMFD.js";
import { E as ElImage } from "./image-viewer.D--H6bc3.js";
import { l as logo, _ as _sfc_main$2 } from "./index.vue_vue_type_script_setup_true_lang.KHe4Z9QQ.js";
/* empty css                 */
import { E as ElTooltip } from "./popper.DQOiQAe7.js";
import { C as CommonWrapper } from "./index.CkL6ikzk.js";
/* empty css                */
import { a as ElDropdownMenu, b as ElDropdownItem, E as ElDropdown } from "./dropdown-item.BnNpDC1d.js";
import "./scrollbar.BsKMzYLI.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
import "./use-form-common-props.XNbRYF7I.js";
import "./index.CSo4ti9t.js";
import "./aria.McRhojP9.js";
import "./debounce.DdWG2P4J.js";
import "./toNumber.By4xL2q2.js";
import "./index.lp4JSJNw.js";
import "./scroll.CDdqrA9-.js";
import "./index.Dq7OVrCm.js";
import "./index.qi1v2frx.js";
import "./index.BkdL6Umg.js";
import "./index.CuTY5eaj.js";
import "./dropdown.Dd0I8-Tx.js";
import "./castArray.DTpXPzCD.js";
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
const _hoisted_4 = { class: "p-4xl w-full h-auto sm:w-450px sm:h-700px shadow-[var(--el-box-shadow-light)] border-rd-2" };
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
      login: defineAsyncComponent(() => __vitePreload(() => import("./Login.CkX-RlTc.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]) : void 0)),
      register: defineAsyncComponent(() => __vitePreload(() => import("./Register.DwkaNWvn.js"), true ? __vite__mapDeps([35,1,2,17,4,18,3,5,6,7,8,9,10,11,12,13,14,15,16,19,20,21,22,23,24,25,26,27,31,33,34]) : void 0)),
      resetPwd: defineAsyncComponent(() => __vitePreload(() => import("./ResetPwd.CTb0G7ZQ.js"), true ? __vite__mapDeps([36,1,2,9,10,11,17,4,18,3,5,6,7,8,24,13,14,25,26,21,27,31,33]) : void 0))
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-256578bb"]]);
export {
  index as default
};
