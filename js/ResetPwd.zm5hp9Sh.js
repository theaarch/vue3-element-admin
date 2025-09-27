import { d as defineComponent, aE as useI18n, r as ref, c as computed, as as resolveComponent, g as createElementBlock, f as openBlock, C as createBaseVNode, m as createVNode, F as toDisplayString, i as unref, w as withCtx, E as ElIcon, a4 as createTextVNode, aG as ElMessage } from "./index.DgCifb3N.js";
import { E as ElLink } from "./link.ClbStwSj.js";
import { E as ElText } from "./text.CO5ILHcY.js";
import { E as ElFormItem, a as ElForm } from "./form-item.DhTC14cP.js";
/* empty css                */
import { E as ElInput } from "./input.jp_dUftq.js";
import { E as ElButton } from "./index.4uj88zkc.js";
import "./index.EXOeRVXS.js";
import "./use-form-common-props.W917BqDg.js";
import "./castArray.B0hR3tm7.js";
import "./error.BVJkE67s.js";
import "./_baseClone.DsNUyHfj.js";
import "./_initCloneObject.BCx9NvKs.js";
import "./index.BwBurVMj.js";
import "./event.BZTOGHfp.js";
import "./index.BR0fnhTQ.js";
import "./index.Db3xEZfF.js";
import "./aria.McRhojP9.js";
const _hoisted_1 = {
  "text-center": "",
  "m-0": "",
  "mb-20px": ""
};
const _hoisted_2 = {
  "flex-center": "",
  "gap-10px": ""
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ResetPwd",
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const { t } = useI18n();
    const emit = __emit;
    const toLogin = () => emit("update:modelValue", "login");
    const model = ref({
      username: ""
    });
    const rules = computed(() => {
      return {
        username: [
          {
            required: true,
            trigger: "blur",
            message: t("login.message.username.required")
          }
        ]
      };
    });
    const formRef = ref();
    const submit = async () => {
      await formRef.value?.validate();
      ElMessage.warning("开发中 ...");
    };
    return (_ctx, _cache) => {
      const _component_User = resolveComponent("User");
      const _component_el_icon = ElIcon;
      const _component_el_input = ElInput;
      const _component_el_form_item = ElFormItem;
      const _component_el_button = ElButton;
      const _component_el_form = ElForm;
      const _component_el_text = ElText;
      const _component_el_link = ElLink;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("h3", _hoisted_1, toDisplayString(unref(t)("login.resetPassword")), 1),
        createVNode(_component_el_form, {
          ref_key: "formRef",
          ref: formRef,
          model: unref(model),
          rules: unref(rules),
          size: "large"
        }, {
          default: withCtx(() => [
            createVNode(_component_el_form_item, { prop: "username" }, {
              default: withCtx(() => [
                createVNode(_component_el_input, {
                  modelValue: unref(model).username,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(model).username = $event),
                  modelModifiers: { trim: true },
                  placeholder: unref(t)("login.username")
                }, {
                  prefix: withCtx(() => [
                    createVNode(_component_el_icon, null, {
                      default: withCtx(() => [
                        createVNode(_component_User)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "placeholder"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, null, {
              default: withCtx(() => [
                createVNode(_component_el_button, {
                  type: "warning",
                  class: "w-full",
                  onClick: submit
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("login.resetPassword")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["model", "rules"]),
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_el_text, { size: "default" }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("login.thinkOfPasswd")), 1)
            ]),
            _: 1
          }),
          createVNode(_component_el_link, {
            type: "primary",
            underline: "never",
            onClick: toLogin
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("login.login")), 1)
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
