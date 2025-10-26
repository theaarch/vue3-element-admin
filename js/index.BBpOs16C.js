import { d as defineComponent, r as ref, S as reactive, c as computed, o as onMounted, as as resolveComponent, g as createElementBlock, f as openBlock, C as createBaseVNode, m as createVNode, w as withCtx, a3 as withKeys, i as unref, a4 as createTextVNode, $ as withDirectives, e as createBlock, h as createCommentVNode, F as toDisplayString, j as withModifiers, aA as isRef, bl as DictAPI, aG as ElMessage, ay as router } from "./index.CMVGoxdi.js";
import { v as vLoading } from "./loading.Bj9r26x4.js";
import { E as ElDialog } from "./dialog.K3HObJ36.js";
import "./overlay.D5iBFarf.js";
import { E as ElRadioGroup, a as ElRadio } from "./radio-group.Kyo8Lba0.js";
import { E as ElCard } from "./card.BuFkVuPD.js";
import { _ as __unplugin_components_12 } from "./index.cD0dSUg0.js";
import { a as ElTable, E as ElTableColumn } from "./table-column.Dmp1Csxk.js";
import "./checkbox.DZ7c_NXG.js";
/* empty css                 */
import "./popper.DoBa4Wzf.js";
import "./scrollbar.DtAlwze8.js";
/* empty css             */
import { E as ElFormItem, a as ElForm } from "./form-item.CmWhLgum.js";
/* empty css                */
import { E as ElInput } from "./input.e-JahrSO.js";
/* empty css                     */
import { E as ElButton } from "./index.Dj3dgP9b.js";
import { E as ElTag } from "./index.Bm3yvNp-.js";
import { E as ElMessageBox } from "./index.COoTFKhQ.js";
import "./index.CXDLE--x.js";
import "./aria.McRhojP9.js";
import "./refs.CxYYXu5Q.js";
import "./index.YIi0pvtX.js";
import "./vnode.Iptj05er.js";
import "./event.BZTOGHfp.js";
import "./error.BVJkE67s.js";
import "./scroll.DDdbKqCe.js";
import "./use-form-common-props.FTUT8iWW.js";
import "./index.DaBsN2Em.js";
import "./omit.S5luP4Uv.js";
import "./_baseClone.CfRt64Vl.js";
import "./pagination.St4XI-cL.js";
import "./select.B3ZImeYN.js";
import "./token.BqWJQ4CJ.js";
import "./strings.D1GX2Yv6.js";
import "./castArray.C_s9cPED.js";
import "./index.DV5G4YPF.js";
import "./debounce.BoSFb3lI.js";
import "./toNumber.CXTQWgmn.js";
import "./_baseIteratee.D1GRhJxI.js";
import "./index.5_syEPF3.js";
import "./_plugin-vue_export-helper.1tPrXgE0.js";
import "./raf.4vPW_kUn.js";
import "./index.DVrxpZpR.js";
import "./index.BBCU1hlO.js";
const _hoisted_1 = { class: "app-container" };
const _hoisted_2 = { class: "search-container" };
const _hoisted_3 = { class: "data-table__toolbar" };
const _hoisted_4 = { class: "data-table__toolbar--actions" };
const _hoisted_5 = { class: "dialog-footer" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Dict",
    inherititems: false
  },
  __name: "index",
  setup(__props) {
    const queryFormRef = ref();
    const dataFormRef = ref();
    const loading = ref(false);
    const ids = ref([]);
    const total = ref(0);
    const queryParams = reactive({
      pageNum: 1,
      pageSize: 10
    });
    const tableData = ref();
    const dialog = reactive({
      title: "",
      visible: false
    });
    const formData = reactive({});
    const computedRules = computed(() => {
      const rules = {
        name: [{ required: true, message: "请输入字典名称", trigger: "blur" }],
        dictCode: [{ required: true, message: "请输入字典编码", trigger: "blur" }]
      };
      return rules;
    });
    function fetchData() {
      loading.value = true;
      DictAPI.getPage(queryParams).then((data) => {
        tableData.value = data.list;
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
      fetchData();
    }
    function handleSelectionChange(selection) {
      ids.value = selection.map((item) => item.id);
    }
    function handleAddClick() {
      dialog.visible = true;
      dialog.title = "新增字典";
    }
    function handleEditClick(id) {
      dialog.visible = true;
      dialog.title = "修改字典";
      DictAPI.getFormData(id).then((data) => {
        Object.assign(formData, data);
      });
    }
    function handleSubmitClick() {
      dataFormRef.value.validate((isValid) => {
        if (isValid) {
          loading.value = true;
          const id = formData.id;
          if (id) {
            DictAPI.update(id, formData).then(() => {
              ElMessage.success("修改成功");
              handleCloseDialog();
              handleQuery();
            }).finally(() => loading.value = false);
          } else {
            DictAPI.create(formData).then(() => {
              ElMessage.success("新增成功");
              handleCloseDialog();
              handleQuery();
            }).finally(() => loading.value = false);
          }
        }
      });
    }
    function handleCloseDialog() {
      dialog.visible = false;
      dataFormRef.value.resetFields();
      dataFormRef.value.clearValidate();
      formData.id = void 0;
    }
    function handleDelete(id) {
      const attrGroupIds = [id || ids.value].join(",");
      if (!attrGroupIds) {
        ElMessage.warning("请勾选删除项");
        return;
      }
      ElMessageBox.confirm("确认删除已选中的数据项?", "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(
        () => {
          DictAPI.deleteByIds(attrGroupIds).then(() => {
            ElMessage.success("删除成功");
            handleResetQuery();
          });
        },
        () => {
          ElMessage.info("已取消删除");
        }
      );
    }
    function handleOpenDictData(row) {
      router.push({
        path: "/system/dict-item",
        query: { dictCode: row.dictCode, title: "【" + row.name + "】字典数据" }
      });
    }
    onMounted(() => {
      handleQuery();
    });
    return (_ctx, _cache) => {
      const _component_el_input = ElInput;
      const _component_el_form_item = ElFormItem;
      const _component_el_button = ElButton;
      const _component_el_form = ElForm;
      const _component_el_table_column = ElTableColumn;
      const _component_el_tag = ElTag;
      const _component_Collection = resolveComponent("Collection");
      const _component_el_table = ElTable;
      const _component_pagination = __unplugin_components_12;
      const _component_el_card = ElCard;
      const _component_el_radio = ElRadio;
      const _component_el_radio_group = ElRadioGroup;
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
                label: "关键字",
                prop: "keywords"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: unref(queryParams).keywords,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(queryParams).keywords = $event),
                    placeholder: "字典名称/编码",
                    clearable: "",
                    onKeyup: withKeys(handleQuery, ["enter"])
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
                    default: withCtx(() => [..._cache[11] || (_cache[11] = [
                      createTextVNode("搜索", -1)
                    ])]),
                    _: 1
                  }),
                  createVNode(_component_el_button, {
                    icon: "refresh",
                    onClick: handleResetQuery
                  }, {
                    default: withCtx(() => [..._cache[12] || (_cache[12] = [
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
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("div", _hoisted_4, [
                createVNode(_component_el_button, {
                  type: "success",
                  icon: "plus",
                  onClick: _cache[1] || (_cache[1] = ($event) => handleAddClick())
                }, {
                  default: withCtx(() => [..._cache[13] || (_cache[13] = [
                    createTextVNode("新增", -1)
                  ])]),
                  _: 1
                }),
                createVNode(_component_el_button, {
                  type: "danger",
                  disabled: unref(ids).length === 0,
                  icon: "delete",
                  onClick: _cache[2] || (_cache[2] = ($event) => handleDelete())
                }, {
                  default: withCtx(() => [..._cache[14] || (_cache[14] = [
                    createTextVNode(" 删除 ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ]),
            withDirectives((openBlock(), createBlock(_component_el_table, {
              "highlight-current-row": "",
              data: unref(tableData),
              border: "",
              class: "data-table__content",
              onSelectionChange: handleSelectionChange
            }, {
              default: withCtx(() => [
                createVNode(_component_el_table_column, {
                  type: "selection",
                  width: "55",
                  align: "center"
                }),
                createVNode(_component_el_table_column, {
                  label: "字典名称",
                  prop: "name"
                }),
                createVNode(_component_el_table_column, {
                  label: "字典编码",
                  prop: "dictCode"
                }),
                createVNode(_component_el_table_column, {
                  label: "状态",
                  prop: "status"
                }, {
                  default: withCtx((scope) => [
                    createVNode(_component_el_tag, {
                      type: scope.row.status === 1 ? "success" : "info"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(scope.row.status === 1 ? "启用" : "禁用"), 1)
                      ]),
                      _: 2
                    }, 1032, ["type"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_table_column, {
                  fixed: "right",
                  label: "操作",
                  align: "center",
                  width: "220"
                }, {
                  default: withCtx((scope) => [
                    createVNode(_component_el_button, {
                      type: "primary",
                      link: "",
                      size: "small",
                      onClick: withModifiers(($event) => handleOpenDictData(scope.row), ["stop"])
                    }, {
                      icon: withCtx(() => [
                        createVNode(_component_Collection)
                      ]),
                      default: withCtx(() => [
                        _cache[15] || (_cache[15] = createTextVNode(" 字典数据 ", -1))
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_el_button, {
                      type: "primary",
                      link: "",
                      size: "small",
                      icon: "edit",
                      onClick: withModifiers(($event) => handleEditClick(scope.row.id), ["stop"])
                    }, {
                      default: withCtx(() => [..._cache[16] || (_cache[16] = [
                        createTextVNode(" 编辑 ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_el_button, {
                      type: "danger",
                      link: "",
                      size: "small",
                      icon: "delete",
                      onClick: withModifiers(($event) => handleDelete(scope.row.id), ["stop"])
                    }, {
                      default: withCtx(() => [..._cache[17] || (_cache[17] = [
                        createTextVNode(" 删除 ", -1)
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
              "onUpdate:total": _cache[3] || (_cache[3] = ($event) => isRef(total) ? total.value = $event : null),
              page: unref(queryParams).pageNum,
              "onUpdate:page": _cache[4] || (_cache[4] = ($event) => unref(queryParams).pageNum = $event),
              limit: unref(queryParams).pageSize,
              "onUpdate:limit": _cache[5] || (_cache[5] = ($event) => unref(queryParams).pageSize = $event),
              onPagination: fetchData
            }, null, 8, ["total", "page", "limit"])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_component_el_dialog, {
          modelValue: unref(dialog).visible,
          "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => unref(dialog).visible = $event),
          title: unref(dialog).title,
          width: "500px",
          onClose: handleCloseDialog
        }, {
          footer: withCtx(() => [
            createBaseVNode("div", _hoisted_5, [
              createVNode(_component_el_button, {
                type: "primary",
                onClick: handleSubmitClick
              }, {
                default: withCtx(() => [..._cache[20] || (_cache[20] = [
                  createTextVNode("确 定", -1)
                ])]),
                _: 1
              }),
              createVNode(_component_el_button, { onClick: handleCloseDialog }, {
                default: withCtx(() => [..._cache[21] || (_cache[21] = [
                  createTextVNode("取 消", -1)
                ])]),
                _: 1
              })
            ])
          ]),
          default: withCtx(() => [
            createVNode(_component_el_form, {
              ref_key: "dataFormRef",
              ref: dataFormRef,
              model: unref(formData),
              rules: unref(computedRules),
              "label-width": "80px"
            }, {
              default: withCtx(() => [
                createVNode(_component_el_form_item, {
                  label: "字典名称",
                  prop: "name"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(formData).name,
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(formData).name = $event),
                      placeholder: "请输入字典名称"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, {
                  label: "字典编码",
                  prop: "dictCode"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(formData).dictCode,
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(formData).dictCode = $event),
                      placeholder: "请输入字典编码"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, { label: "状态" }, {
                  default: withCtx(() => [
                    createVNode(_component_el_radio_group, {
                      modelValue: unref(formData).status,
                      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(formData).status = $event)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_radio, { value: 1 }, {
                          default: withCtx(() => [..._cache[18] || (_cache[18] = [
                            createTextVNode("启用", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(_component_el_radio, { value: 0 }, {
                          default: withCtx(() => [..._cache[19] || (_cache[19] = [
                            createTextVNode("禁用", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, { label: "备注" }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(formData).remark,
                      "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => unref(formData).remark = $event),
                      type: "textarea",
                      placeholder: "请输入备注"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model", "rules"])
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
