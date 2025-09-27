import { d as defineComponent, r as ref, c as computed, e as createBlock, f as openBlock, w as withCtx, $ as withDirectives, g as createElementBlock, l as renderSlot, i as unref, m as createVNode, C as createBaseVNode, a4 as createTextVNode, aA as isRef, h as createCommentVNode } from "./index.DgCifb3N.js";
import { E as ElTableColumn, a as ElTable } from "./table-column.D1P3Zv7z.js";
import { E as ElCheckbox } from "./checkbox.WcNmY0f3.js";
/* empty css                 */
import "./popper.Q6izn39B.js";
import "./scrollbar.DFmAuozx.js";
/* empty css                */
/* empty css             */
import { E as ElLink } from "./link.ClbStwSj.js";
import { E as ElButton } from "./index.4uj88zkc.js";
import "./error.BVJkE67s.js";
import "./_initCloneObject.BCx9NvKs.js";
import "./raf.BBKVe_HM.js";
import "./index.BwBurVMj.js";
import "./_baseIteratee.BjpvXncu.js";
import "./castArray.B0hR3tm7.js";
import "./debounce.Qak2uIBG.js";
import "./toNumber.mFdtizoO.js";
import "./index.D4tWCXE-.js";
import "./use-form-common-props.W917BqDg.js";
import "./event.BZTOGHfp.js";
import "./index.EXOeRVXS.js";
import "./index.DL8YhwXP.js";
import "./aria.McRhojP9.js";
import "./index.5PwPfq1Z.js";
const _hoisted_1$1 = { class: "operation-buttons" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    listDataLength: {},
    prop: {},
    label: { default: "操作" },
    fixed: { default: "right" },
    align: { default: "center" },
    width: {},
    showOverflowTooltip: { type: Boolean },
    minWidth: { default: 80 }
  },
  setup(__props) {
    const props = __props;
    const count = ref(0);
    const operationWidth = ref(props.minWidth || 80);
    const calculateWidth = () => {
      count.value++;
      if (count.value !== props.listDataLength) return;
      const maxWidth = getOperationMaxWidth();
      operationWidth.value = Math.max(maxWidth, props.minWidth);
      count.value = 0;
    };
    const finalWidth = computed(() => {
      return props.width || operationWidth.value || props.minWidth;
    });
    const vAutoWidth = {
      mounted() {
        calculateWidth();
      },
      updated() {
        calculateWidth();
      }
    };
    const getOperationMaxWidth = () => {
      const el = document.getElementsByClassName("operation-buttons");
      let maxWidth = 0;
      let totalWidth = 0;
      Array.prototype.forEach.call(el, (item) => {
        const buttons = item.querySelectorAll(".el-button");
        totalWidth = Array.from(buttons).reduce((acc, button) => {
          return acc + button.scrollWidth + 22;
        }, 0);
        if (totalWidth > maxWidth) maxWidth = totalWidth;
      });
      return maxWidth;
    };
    return (_ctx, _cache) => {
      const _component_el_table_column = ElTableColumn;
      return openBlock(), createBlock(_component_el_table_column, {
        label: __props.label,
        fixed: __props.fixed,
        align: __props.align,
        "show-overflow-tooltip": __props.showOverflowTooltip,
        width: unref(finalWidth)
      }, {
        default: withCtx(({ row }) => [
          withDirectives((openBlock(), createElementBlock("div", _hoisted_1$1, [
            renderSlot(_ctx.$slots, "default", { row })
          ])), [
            [vAutoWidth]
          ])
        ]),
        _: 3
      }, 8, ["label", "fixed", "align", "show-overflow-tooltip", "width"]);
    };
  }
});
const _hoisted_1 = { class: "app-container" };
const _hoisted_2 = { class: "mt-30px" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "auto-opreation-column",
  setup(__props) {
    const checked1 = ref(true);
    const checked2 = ref(false);
    const checked3 = ref(false);
    const checked4 = ref(false);
    const checked5 = ref(false);
    const tableData = ref([]);
    setTimeout(() => {
      tableData.value = [
        {
          date: "2016-05-03",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
          tag: "Home"
        },
        {
          date: "2016-05-02",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
          tag: "Office"
        },
        {
          date: "2016-05-04",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
          tag: "Home"
        },
        {
          date: "2016-05-01",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
          tag: "Office"
        }
      ];
    }, 300);
    return (_ctx, _cache) => {
      const _component_el_link = ElLink;
      const _component_el_checkbox = ElCheckbox;
      const _component_el_table_column = ElTableColumn;
      const _component_el_button = ElButton;
      const _component_el_table = ElTable;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_el_link, {
          href: "https://gitee.com/youlaiorg/vue3-element-admin/blob/master/src/views/demo/auto-opreation-column.vue",
          type: "primary",
          target: "_blank",
          class: "mb-10"
        }, {
          default: withCtx(() => [..._cache[5] || (_cache[5] = [
            createTextVNode(" 示例源码 请点击>>>> ", -1)
          ])]),
          _: 1
        }),
        createBaseVNode("div", null, [
          _cache[12] || (_cache[12] = createBaseVNode("h3", null, "自适应表格操作列", -1)),
          _cache[13] || (_cache[13] = createBaseVNode("div", { class: "text-14px color-#999" }, " 该组件适用于含有操作列的表格。在某些情况下，按钮可能需要根据数据状态或其他条件动态展示，无法预设固定宽度。操作列组件能根据按钮数量自适应宽度，不需要再手动设置宽度。 ", -1)),
          createBaseVNode("div", _hoisted_2, [
            createVNode(_component_el_checkbox, {
              modelValue: unref(checked1),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(checked1) ? checked1.value = $event : null),
              label: "查看",
              size: "large"
            }, null, 8, ["modelValue"]),
            createVNode(_component_el_checkbox, {
              modelValue: unref(checked2),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(checked2) ? checked2.value = $event : null),
              label: "超过了六个字会怎么样",
              size: "large"
            }, null, 8, ["modelValue"]),
            createVNode(_component_el_checkbox, {
              modelValue: unref(checked3),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(checked3) ? checked3.value = $event : null),
              label: "新增",
              size: "large"
            }, null, 8, ["modelValue"]),
            createVNode(_component_el_checkbox, {
              modelValue: unref(checked4),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => isRef(checked4) ? checked4.value = $event : null),
              label: "返回很多个字",
              size: "large"
            }, null, 8, ["modelValue"]),
            createVNode(_component_el_checkbox, {
              modelValue: unref(checked5),
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isRef(checked5) ? checked5.value = $event : null),
              label: "编辑",
              size: "large"
            }, null, 8, ["modelValue"])
          ]),
          createVNode(_component_el_table, {
            data: unref(tableData),
            style: { "width": "100%" },
            border: ""
          }, {
            default: withCtx(() => [
              createVNode(_component_el_table_column, {
                prop: "date",
                label: "Date"
              }),
              createVNode(_component_el_table_column, {
                prop: "name",
                label: "Name"
              }),
              createVNode(_component_el_table_column, {
                prop: "state",
                label: "State"
              }),
              createVNode(_component_el_table_column, {
                prop: "city",
                label: "City"
              }),
              createVNode(_component_el_table_column, {
                prop: "address",
                label: "Address"
              }),
              createVNode(_component_el_table_column, {
                prop: "zip",
                label: "Zip"
              }),
              createVNode(_sfc_main$1, {
                "list-data-length": unref(tableData).length
              }, {
                default: withCtx(({ row }) => [
                  unref(checked1) ? (openBlock(), createBlock(_component_el_button, {
                    key: 0,
                    link: "",
                    type: "primary",
                    size: "small"
                  }, {
                    default: withCtx(() => [..._cache[6] || (_cache[6] = [
                      createTextVNode("查看", -1)
                    ])]),
                    _: 1
                  })) : createCommentVNode("", true),
                  unref(checked2) ? (openBlock(), createBlock(_component_el_button, {
                    key: 1,
                    link: "",
                    type: "primary",
                    size: "small"
                  }, {
                    default: withCtx(() => [..._cache[7] || (_cache[7] = [
                      createTextVNode(" 超过了六个字会怎么样 ", -1)
                    ])]),
                    _: 1
                  })) : createCommentVNode("", true),
                  unref(checked3) ? (openBlock(), createBlock(_component_el_button, {
                    key: 2,
                    link: "",
                    type: "primary",
                    size: "small"
                  }, {
                    default: withCtx(() => [..._cache[8] || (_cache[8] = [
                      createTextVNode("新增", -1)
                    ])]),
                    _: 1
                  })) : createCommentVNode("", true),
                  unref(checked4) ? (openBlock(), createBlock(_component_el_button, {
                    key: 3,
                    link: "",
                    type: "primary",
                    size: "small"
                  }, {
                    default: withCtx(() => [..._cache[9] || (_cache[9] = [
                      createTextVNode("返回很多个字", -1)
                    ])]),
                    _: 1
                  })) : createCommentVNode("", true),
                  unref(checked5) ? (openBlock(), createBlock(_component_el_button, {
                    key: 4,
                    link: "",
                    type: "primary",
                    size: "small"
                  }, {
                    default: withCtx(() => [..._cache[10] || (_cache[10] = [
                      createTextVNode("编辑", -1)
                    ])]),
                    _: 1
                  })) : createCommentVNode("", true),
                  row.tag === "Home" ? (openBlock(), createBlock(_component_el_button, {
                    key: 5,
                    link: "",
                    type: "primary",
                    size: "small"
                  }, {
                    default: withCtx(() => [..._cache[11] || (_cache[11] = [
                      createTextVNode("默认", -1)
                    ])]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["list-data-length"])
            ]),
            _: 1
          }, 8, ["data"])
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
