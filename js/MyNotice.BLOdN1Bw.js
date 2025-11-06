import { d as defineComponent, r as ref, U as reactive, o as onMounted, g as createElementBlock, D as createBaseVNode, m as createVNode, w as withCtx, i as unref, aC as isRef, a5 as withKeys, a6 as createTextVNode, au as resolveComponent, a1 as withDirectives, e as createBlock, h as createCommentVNode, E as ElIcon, G as toDisplayString, f as openBlock } from "./index.Bx50VaHZ.js";
import { v as vLoading } from "./loading.hxPbhZYB.js";
import { E as ElDialog } from "./dialog.DPGhRUjJ.js";
import "./overlay.DOYwDoSQ.js";
import { E as ElCard } from "./card.PgW8k0Me.js";
import { _ as __unplugin_components_12 } from "./index.BWgvfJPe.js";
import { E as ElTableColumn, a as ElTable } from "./table-column.fimj5wkm.js";
import "./checkbox.BJ_I2TG5.js";
/* empty css                 */
import "./popper.DnZJp6VF.js";
import "./scrollbar.FP55aIp4.js";
/* empty css             */
import { _ as _sfc_main$1 } from "./DictLabel.vue_vue_type_script_setup_true_lang.Cbn1AOx2.js";
import { a as ElForm, E as ElFormItem } from "./form-item.DbMcgB8d.js";
/* empty css                */
import { E as ElInput } from "./input.nStG-Jp4.js";
import { N as NoticeAPI } from "./notice-api.BdJV1OBj.js";
import { E as ElButton } from "./index.B9WUq5pa.js";
import { E as ElTag } from "./index.wP560xqx.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
import "./index.Djka_IZf.js";
import "./aria.McRhojP9.js";
import "./refs.CxYYXu5Q.js";
import "./index.TSou46Cf.js";
import "./vnode.D8Y-8eEm.js";
import "./event.BZTOGHfp.js";
import "./scroll.DJJ2LJDF.js";
import "./use-form-common-props.ChtQdZbI.js";
import "./pagination.BoSa3S9h.js";
import "./select.CuCZTA9a.js";
import "./strings.ChNi0uId.js";
import "./toNumber.u4xZTvA6.js";
import "./castArray.BhQpNM1K.js";
import "./index.CuVGx6kZ.js";
import "./_baseIteratee.xQwuD9_v.js";
import "./index.YZuNrD9b.js";
import "./index.CbukR0Az.js";
import "./_baseClone.sQRzwKFD.js";
import "./omit.CT5YONEU.js";
import "./debounce.B8_1GVRi.js";
import "./raf.CzJwgTEf.js";
import "./index.BNhiyZen.js";
import "./index.DIENj2CJ.js";
const _hoisted_1 = { class: "app-container" };
const _hoisted_2 = { class: "search-container" };
const _hoisted_3 = {
  key: 0,
  class: "notice-detail__wrapper"
};
const _hoisted_4 = { class: "notice-detail__meta" };
const _hoisted_5 = { class: "ml-2" };
const _hoisted_6 = { class: "notice-detail__content" };
const _hoisted_7 = ["innerHTML"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "MyNotice",
    inheritAttrs: false
  },
  __name: "MyNotice",
  setup(__props) {
    const queryFormRef = ref();
    const pageData = ref([]);
    const loading = ref(false);
    const total = ref(0);
    const queryParams = reactive({
      pageNum: 1,
      pageSize: 10
    });
    const noticeDialogVisible = ref(false);
    const noticeDetail = ref(null);
    function handleQuery() {
      loading.value = true;
      NoticeAPI.getMyNoticePage(queryParams).then((data) => {
        pageData.value = data.list;
        total.value = data.total;
      }).finally(() => {
        loading.value = false;
      });
    }
    function handleResetQuery() {
      queryFormRef.value.resetFields();
      queryParams.pageNum = 1;
      handleQuery();
    }
    function handleReadNotice(id) {
      NoticeAPI.getDetail(id).then((data) => {
        noticeDialogVisible.value = true;
        noticeDetail.value = data;
      });
    }
    onMounted(() => {
      handleQuery();
    });
    return (_ctx, _cache) => {
      const _component_el_input = ElInput;
      const _component_el_form_item = ElFormItem;
      const _component_Search = resolveComponent("Search");
      const _component_el_button = ElButton;
      const _component_Refresh = resolveComponent("Refresh");
      const _component_el_form = ElForm;
      const _component_el_table_column = ElTableColumn;
      const _component_DictLabel = _sfc_main$1;
      const _component_el_tag = ElTag;
      const _component_el_table = ElTable;
      const _component_pagination = __unplugin_components_12;
      const _component_el_card = ElCard;
      const _component_User = resolveComponent("User");
      const _component_el_icon = ElIcon;
      const _component_Timer = resolveComponent("Timer");
      const _component_el_dialog = ElDialog;
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
                label: "通知标题",
                prop: "title"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: unref(queryParams).title,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(queryParams).title = $event),
                    placeholder: "关键字",
                    clearable: "",
                    onKeyup: _cache[1] || (_cache[1] = withKeys(($event) => handleQuery(), ["enter"]))
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, { class: "search-buttons" }, {
                default: withCtx(() => [
                  createVNode(_component_el_button, {
                    type: "primary",
                    onClick: _cache[2] || (_cache[2] = ($event) => handleQuery())
                  }, {
                    icon: withCtx(() => [
                      createVNode(_component_Search)
                    ]),
                    default: withCtx(() => [
                      _cache[9] || (_cache[9] = createTextVNode(" 搜索 ", -1))
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_button, {
                    onClick: _cache[3] || (_cache[3] = ($event) => handleResetQuery())
                  }, {
                    icon: withCtx(() => [
                      createVNode(_component_Refresh)
                    ]),
                    default: withCtx(() => [
                      _cache[10] || (_cache[10] = createTextVNode(" 重置 ", -1))
                    ]),
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
              ref: "dataTableRef",
              data: unref(pageData),
              "highlight-current-row": "",
              class: "data-table__content"
            }, {
              default: withCtx(() => [
                createVNode(_component_el_table_column, {
                  type: "index",
                  label: "序号",
                  width: "60"
                }),
                createVNode(_component_el_table_column, {
                  label: "通知标题",
                  prop: "title",
                  "min-width": "200"
                }),
                createVNode(_component_el_table_column, {
                  align: "center",
                  label: "通知类型",
                  width: "150"
                }, {
                  default: withCtx((scope) => [
                    createVNode(_component_DictLabel, {
                      modelValue: scope.row.type,
                      "onUpdate:modelValue": ($event) => scope.row.type = $event,
                      code: "notice_type"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_table_column, {
                  align: "center",
                  label: "发布人",
                  prop: "publisherName",
                  width: "100"
                }),
                createVNode(_component_el_table_column, {
                  align: "center",
                  label: "通知等级",
                  width: "100"
                }, {
                  default: withCtx((scope) => [
                    createVNode(_component_DictLabel, {
                      modelValue: scope.row.level,
                      "onUpdate:modelValue": ($event) => scope.row.level = $event,
                      code: "notice_level"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_table_column, {
                  key: "releaseTime",
                  align: "center",
                  label: "发布时间",
                  prop: "publishTime",
                  width: "150"
                }),
                createVNode(_component_el_table_column, {
                  align: "center",
                  label: "发布人",
                  prop: "publisherName",
                  width: "150"
                }),
                createVNode(_component_el_table_column, {
                  align: "center",
                  label: "状态",
                  width: "100"
                }, {
                  default: withCtx((scope) => [
                    scope.row.isRead == 1 ? (openBlock(), createBlock(_component_el_tag, {
                      key: 0,
                      type: "success"
                    }, {
                      default: withCtx(() => [..._cache[11] || (_cache[11] = [
                        createTextVNode("已读", -1)
                      ])]),
                      _: 1
                    })) : (openBlock(), createBlock(_component_el_tag, {
                      key: 1,
                      type: "info"
                    }, {
                      default: withCtx(() => [..._cache[12] || (_cache[12] = [
                        createTextVNode("未读", -1)
                      ])]),
                      _: 1
                    }))
                  ]),
                  _: 1
                }),
                createVNode(_component_el_table_column, {
                  align: "center",
                  fixed: "right",
                  label: "操作",
                  width: "80"
                }, {
                  default: withCtx((scope) => [
                    createVNode(_component_el_button, {
                      type: "primary",
                      size: "small",
                      link: "",
                      onClick: ($event) => handleReadNotice(scope.row.id)
                    }, {
                      default: withCtx(() => [..._cache[13] || (_cache[13] = [
                        createTextVNode(" 查看 ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["data"])), [
              [_directive_loading, unref(loading)]
            ]),
            unref(total) > 0 ? (openBlock(), createBlock(_component_pagination, {
              key: 0,
              total: unref(total),
              "onUpdate:total": _cache[4] || (_cache[4] = ($event) => isRef(total) ? total.value = $event : null),
              page: unref(queryParams).pageNum,
              "onUpdate:page": _cache[5] || (_cache[5] = ($event) => unref(queryParams).pageNum = $event),
              limit: unref(queryParams).pageSize,
              "onUpdate:limit": _cache[6] || (_cache[6] = ($event) => unref(queryParams).pageSize = $event),
              onPagination: _cache[7] || (_cache[7] = ($event) => handleQuery())
            }, null, 8, ["total", "page", "limit"])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_component_el_dialog, {
          modelValue: unref(noticeDialogVisible),
          "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => isRef(noticeDialogVisible) ? noticeDialogVisible.value = $event : null),
          title: unref(noticeDetail)?.title ?? "通知详情",
          width: "800px",
          "custom-class": "notice-detail"
        }, {
          default: withCtx(() => [
            unref(noticeDetail) ? (openBlock(), createElementBlock("div", _hoisted_3, [
              createBaseVNode("div", _hoisted_4, [
                createBaseVNode("span", null, [
                  createVNode(_component_el_icon, null, {
                    default: withCtx(() => [
                      createVNode(_component_User)
                    ]),
                    _: 1
                  }),
                  createTextVNode(" " + toDisplayString(unref(noticeDetail).publisherName), 1)
                ]),
                createBaseVNode("span", _hoisted_5, [
                  createVNode(_component_el_icon, null, {
                    default: withCtx(() => [
                      createVNode(_component_Timer)
                    ]),
                    _: 1
                  }),
                  createTextVNode(" " + toDisplayString(unref(noticeDetail).publishTime), 1)
                ])
              ]),
              createBaseVNode("div", _hoisted_6, [
                createBaseVNode("div", {
                  innerHTML: unref(noticeDetail).content
                }, null, 8, _hoisted_7)
              ])
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ]);
    };
  }
});
const MyNotice = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5a841e19"]]);
export {
  MyNotice as default
};
