import { d as defineComponent, r as ref, S as reactive, o as onMounted, g as createElementBlock, f as openBlock, C as createBaseVNode, m as createVNode, w as withCtx, a3 as withKeys, i as unref, a4 as createTextVNode, $ as withDirectives, e as createBlock, h as createCommentVNode, aA as isRef } from "./index.BOIRy7is.js";
import { v as vLoading } from "./loading.r1SqjGuM.js";
import { E as ElCard } from "./card.BDyHksnk.js";
import { _ as __unplugin_components_12 } from "./index.FzRxxGk5.js";
import { a as ElTable, E as ElTableColumn } from "./table-column.Dqbrm8cZ.js";
import "./checkbox.9vGI5dpb.js";
/* empty css                 */
import "./popper.BBsF0E1g.js";
import "./scrollbar.B8O4jEK0.js";
/* empty css             */
import { E as ElFormItem, a as ElForm } from "./form-item.DuFDD175.js";
/* empty css                */
import { E as ElDatePicker } from "./date-picker-panel.0S_ycmgC.js";
import { E as ElInput } from "./input.BUV9pKZd.js";
import { L as LogAPI } from "./log-api.CzVWfTTV.js";
import { E as ElButton } from "./index.CyyaMn6u.js";
import "./pagination.6NDuQdmk.js";
import "./select.DFMAG3jI.js";
import "./index.BzvCwcKP.js";
import "./use-form-common-props.BHTtkyuH.js";
import "./token.BqWJQ4CJ.js";
import "./strings.ByevPFRW.js";
import "./error.BVJkE67s.js";
import "./castArray.CfFJgECx.js";
import "./index.QJxp3a6N.js";
import "./aria.McRhojP9.js";
import "./event.BZTOGHfp.js";
import "./scroll.iin19WlF.js";
import "./debounce.CJHr0JEl.js";
import "./toNumber.B4lBFTvf.js";
import "./_baseIteratee.4s95a06o.js";
import "./index.BKMM7Cv6.js";
import "./index.C-pNW6Tg.js";
import "./vnode.2EkS3RBt.js";
import "./index.D5HJ8cOa.js";
import "./_plugin-vue_export-helper.1tPrXgE0.js";
import "./_baseClone.14qQHgZU.js";
import "./omit.lp_MIiI2.js";
import "./raf.12O1a3Oq.js";
import "./index.BUfjcZ5V.js";
import "./index.fzNFRZkG.js";
import "./dayjs.min.CPBWmwJE.js";
import "./index.CBWEVSe-.js";
import "./index.AfzWXQKo.js";
const _hoisted_1 = { class: "app-container" };
const _hoisted_2 = { class: "search-container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Log",
    inheritAttrs: false
  },
  __name: "index",
  setup(__props) {
    const queryFormRef = ref();
    const loading = ref(false);
    const total = ref(0);
    const queryParams = reactive({
      pageNum: 1,
      pageSize: 10,
      keywords: "",
      createTime: ["", ""]
    });
    const pageData = ref();
    function fetchData() {
      loading.value = true;
      LogAPI.getPage(queryParams).then((data) => {
        pageData.value = data.list;
        total.value = data.total;
      }).finally(() => {
        loading.value = false;
      });
    }
    function handleQuery() {
      queryParams.pageNum = 1;
      fetchData();
    }
    function handleResetQuery() {
      queryFormRef.value.resetFields();
      queryParams.pageNum = 1;
      queryParams.createTime = void 0;
      fetchData();
    }
    onMounted(() => {
      handleQuery();
    });
    return (_ctx, _cache) => {
      const _component_el_input = ElInput;
      const _component_el_form_item = ElFormItem;
      const _component_el_date_picker = ElDatePicker;
      const _component_el_button = ElButton;
      const _component_el_form = ElForm;
      const _component_el_table_column = ElTableColumn;
      const _component_el_table = ElTable;
      const _component_pagination = __unplugin_components_12;
      const _component_el_card = ElCard;
      const _directive_loading = vLoading;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_el_form, {
            ref_key: "queryFormRef",
            ref: queryFormRef,
            model: unref(queryParams),
            inline: true
          }, {
            default: withCtx(() => [
              createVNode(_component_el_form_item, {
                prop: "keywords",
                label: "关键字"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: unref(queryParams).keywords,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(queryParams).keywords = $event),
                    placeholder: "日志内容",
                    clearable: "",
                    onKeyup: withKeys(handleQuery, ["enter"])
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, {
                prop: "createTime",
                label: "操作时间"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_date_picker, {
                    modelValue: unref(queryParams).createTime,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(queryParams).createTime = $event),
                    editable: false,
                    type: "daterange",
                    "range-separator": "~",
                    "start-placeholder": "开始时间",
                    "end-placeholder": "截止时间",
                    "value-format": "YYYY-MM-DD",
                    style: { "width": "200px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, { class: "search-buttons" }, {
                default: withCtx(() => [
                  createVNode(_component_el_button, {
                    type: "primary",
                    icon: "search",
                    onClick: handleQuery
                  }, {
                    default: withCtx(() => [..._cache[5] || (_cache[5] = [
                      createTextVNode("搜索", -1)
                    ])]),
                    _: 1
                  }),
                  createVNode(_component_el_button, {
                    icon: "refresh",
                    onClick: handleResetQuery
                  }, {
                    default: withCtx(() => [..._cache[6] || (_cache[6] = [
                      createTextVNode("重置", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model"])
        ]),
        createVNode(_component_el_card, {
          shadow: "hover",
          class: "data-table"
        }, {
          default: withCtx(() => [
            withDirectives((openBlock(), createBlock(_component_el_table, {
              data: unref(pageData),
              "highlight-current-row": "",
              border: "",
              class: "data-table__content"
            }, {
              default: withCtx(() => [
                createVNode(_component_el_table_column, {
                  label: "操作时间",
                  prop: "createTime",
                  width: "180"
                }),
                createVNode(_component_el_table_column, {
                  label: "操作人",
                  prop: "operator",
                  width: "120"
                }),
                createVNode(_component_el_table_column, {
                  label: "日志模块",
                  prop: "module",
                  width: "100"
                }),
                createVNode(_component_el_table_column, {
                  label: "日志内容",
                  prop: "content",
                  "min-width": "200"
                }),
                createVNode(_component_el_table_column, {
                  label: "IP 地址",
                  prop: "ip",
                  width: "150"
                }),
                createVNode(_component_el_table_column, {
                  label: "地区",
                  prop: "region",
                  width: "150"
                }),
                createVNode(_component_el_table_column, {
                  label: "浏览器",
                  prop: "browser",
                  width: "150"
                }),
                createVNode(_component_el_table_column, {
                  label: "终端系统",
                  prop: "os",
                  width: "200",
                  "show-overflow-tooltip": ""
                }),
                createVNode(_component_el_table_column, {
                  label: "执行时间(ms)",
                  prop: "executionTime",
                  width: "150"
                })
              ]),
              _: 1
            }, 8, ["data"])), [
              [_directive_loading, unref(loading)]
            ]),
            unref(total) > 0 ? (openBlock(), createBlock(_component_pagination, {
              key: 0,
              total: unref(total),
              "onUpdate:total": _cache[2] || (_cache[2] = ($event) => isRef(total) ? total.value = $event : null),
              page: unref(queryParams).pageNum,
              "onUpdate:page": _cache[3] || (_cache[3] = ($event) => unref(queryParams).pageNum = $event),
              limit: unref(queryParams).pageSize,
              "onUpdate:limit": _cache[4] || (_cache[4] = ($event) => unref(queryParams).pageSize = $event),
              onPagination: fetchData
            }, null, 8, ["total", "page", "limit"])) : createCommentVNode("", true)
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
