import { u as usePage, _ as __unplugin_components_2, a as __unplugin_components_7, b as __unplugin_components_9 } from "./usePage.ClPg9HSM.js";
import { _ as _sfc_main$3 } from "./index.vue_vue_type_script_setup_true_lang.C2GQtT17.js";
import { _ as _sfc_main$1 } from "./index.vue_vue_type_script_setup_true_lang.Dg3ZBsT-.js";
import { d as defineComponent, r as ref, S as reactive, bc as UserAPI, al as useAppStore, ar as DeviceEnum, o as onMounted, g as createElementBlock, f as openBlock, C as createBaseVNode, m as createVNode, w as withCtx, a4 as createTextVNode, i as unref, e as createBlock, h as createCommentVNode, F as toDisplayString, Z as mergeProps, aG as ElMessage } from "./index.DgCifb3N.js";
import { E as ElText } from "./text.CO5ILHcY.js";
import { _ as _sfc_main$2 } from "./DictLabel.vue_vue_type_script_setup_true_lang.Dxs91Nv2.js";
/* empty css             */
import { E as ElLink } from "./link.ClbStwSj.js";
import { D as DeptAPI } from "./dept-api.B8RC71Re.js";
import { R as RoleAPI } from "./role-api.BSz30Yrg.js";
/* empty css                     */
/* empty css                */
import "./input.jp_dUftq.js";
import "./overlay.B5tzHjhe.js";
import { E as ElTag } from "./index.Dz7-s_8A.js";
import { E as ElMessageBox } from "./index.DEwra4mH.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
import "./dialog.k3sQg8OK.js";
import "./index.DL8YhwXP.js";
import "./aria.McRhojP9.js";
import "./refs.CxYYXu5Q.js";
import "./index.EXOeRVXS.js";
import "./scrollbar.DFmAuozx.js";
import "./error.BVJkE67s.js";
import "./index.BwBurVMj.js";
import "./drawer.DWhDddpI.js";
import "./form-item.DhTC14cP.js";
import "./use-form-common-props.W917BqDg.js";
import "./castArray.B0hR3tm7.js";
import "./_baseClone.DsNUyHfj.js";
import "./_initCloneObject.BCx9NvKs.js";
import "./col.VcsiKQOM.js";
/* empty css                 */
import "./popper.Q6izn39B.js";
import "./index.5PwPfq1Z.js";
import "./index.B7uhjxsD.js";
import "./popover.B9LLNCrH.js";
import "./dropdown.Bv_C-nCY.js";
import "./tab-pane.DT5ZDrII.js";
import "./raf.BBKVe_HM.js";
import "./strings.kqtWM_S0.js";
import "./toNumber.mFdtizoO.js";
import "./event.BZTOGHfp.js";
import "./index.DWEbBWUw.js";
import "./vnode.Cdh-aUnw.js";
import "./select.CtP44s4b.js";
import "./token.BqWJQ4CJ.js";
import "./index.Db3xEZfF.js";
import "./scroll.DO_Nu_vC.js";
import "./debounce.Qak2uIBG.js";
import "./_baseIteratee.BjpvXncu.js";
import "./index.D4tWCXE-.js";
import "./switch.CNaLprU9.js";
import "./checkbox.WcNmY0f3.js";
import "./radio-group.CVivaAi-.js";
import "./input-number.C_er3RL4.js";
import "./index.CRvgpt17.js";
import "./date-picker-panel.uTjC2sIZ.js";
import "./dayjs.min.CUUfqkht.js";
import "./index.4uj88zkc.js";
import "./index.BR0fnhTQ.js";
import "./tree.Dc4PH09-.js";
import "./index.BLYPOaDi.js";
import "./tree-select.CfsMRjBn.js";
/* empty css                        */
import "./loading.4v5XvpBt.js";
import "./upload.ivbsXJko.js";
import "./progress.D9i27SRj.js";
import "./pagination.xYhnqUGm.js";
import "./table-column.D1P3Zv7z.js";
import "./image-viewer.DmFYlS-Q.js";
import "./card.BWkrmgBb.js";
const _hoisted_1 = { class: "app-container h-full flex flex-1 flex-col" };
const _hoisted_2 = { class: "mb-10" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CurdDemo",
    inheritAttrs: false
  },
  __name: "curd-demo",
  setup(__props) {
    const deptArr = ref([]);
    const roleArr = ref([]);
    const stateArr = ref([
      { label: "启用", value: 1 },
      { label: "禁用", value: 0 }
    ]);
    const initOptions = async () => {
      try {
        const [dept, roles] = await Promise.all([DeptAPI.getOptions(), RoleAPI.getOptions()]);
        deptArr.value = dept;
        roleArr.value = roles;
      } catch (error) {
        console.error("初始化选项失败:", error);
      }
    };
    const searchConfig = reactive({
      permPrefix: "sys:user",
      formItems: [
        {
          tips: "支持模糊搜索",
          type: "input",
          label: "关键字",
          prop: "keywords",
          attrs: {
            placeholder: "用户名/昵称/手机号",
            clearable: true,
            style: { width: "200px" }
          }
        },
        {
          type: "tree-select",
          label: "部门",
          prop: "deptId",
          attrs: {
            placeholder: "请选择",
            data: deptArr,
            filterable: true,
            "check-strictly": true,
            "render-after-expand": false,
            clearable: true,
            style: { width: "200px" }
          }
        },
        {
          type: "select",
          label: "状态",
          prop: "status",
          attrs: {
            placeholder: "全部",
            clearable: true,
            style: { width: "200px" }
          },
          options: stateArr
        },
        {
          type: "date-picker",
          label: "创建时间",
          prop: "createTime",
          attrs: {
            type: "daterange",
            "range-separator": "~",
            "start-placeholder": "开始时间",
            "end-placeholder": "截止时间",
            "value-format": "YYYY-MM-DD",
            style: { width: "200px" }
          }
        }
      ]
    });
    const contentConfig = reactive({
      permPrefix: "sys:user",
      table: {
        border: true,
        highlightCurrentRow: true
      },
      pagination: {
        background: true,
        layout: "prev,pager,next,jumper,total,sizes",
        pageSize: 20,
        pageSizes: [10, 20, 30, 50]
      },
      parseData(res) {
        return {
          total: res.total,
          list: res.list
        };
      },
      indexAction(params) {
        return UserAPI.getPage(params);
      },
      deleteAction: UserAPI.deleteByIds,
      importAction(file) {
        return UserAPI.import("1", file);
      },
      exportAction: UserAPI.export,
      importTemplate: UserAPI.downloadTemplate,
      importsAction(data) {
        console.log("importsAction", data);
        return Promise.resolve();
      },
      async exportsAction(params) {
        const res = await UserAPI.getPage(params);
        console.log("exportsAction", res.list);
        return res.list;
      },
      pk: "id",
      toolbar: [
        "add",
        "delete",
        "import",
        "export",
        {
          name: "custom1",
          text: "自定义1",
          perm: "add",
          attrs: { icon: "plus", color: "#626AEF" }
        }
      ],
      defaultToolbar: ["refresh", "filter", "imports", "exports", "search"],
      cols: [
        { type: "selection", width: 50, align: "center" },
        { label: "编号", align: "center", prop: "id", width: 100, show: false },
        { label: "用户名", align: "center", prop: "username" },
        { label: "头像", align: "center", prop: "avatar", templet: "image" },
        { label: "用户昵称", align: "center", prop: "nickname", width: 120 },
        {
          label: "性别",
          align: "center",
          prop: "gender",
          width: 100,
          templet: "custom",
          slotName: "gender"
        },
        { label: "部门", align: "center", prop: "deptName", width: 120 },
        {
          label: "角色",
          align: "center",
          prop: "roleNames",
          width: 120,
          columnKey: "roleIds",
          filters: [],
          filterMultiple: true,
          filterJoin: ",",
          async initFn(colItem) {
            const roleOptions = await RoleAPI.getOptions();
            colItem.filters = roleOptions.map((item) => {
              return { text: item.label, value: item.value };
            });
          }
        },
        {
          label: "手机号码",
          align: "center",
          prop: "mobile",
          templet: "custom",
          slotName: "mobile",
          width: 150
        },
        {
          label: "状态",
          align: "center",
          prop: "status",
          templet: "custom",
          slotName: "status"
        },
        { label: "创建时间", align: "center", prop: "createTime", width: 180 },
        {
          label: "操作",
          align: "center",
          fixed: "right",
          width: 280,
          templet: "tool",
          operat: [
            {
              name: "detail",
              text: "详情",
              attrs: { icon: "Document", type: "primary" }
            },
            {
              name: "reset_pwd",
              text: "重置密码",
              attrs: {
                icon: "refresh-left",
                style: {
                  "--el-button-text-color": "#626AEF",
                  "--el-button-hover-link-text-color": "#9197f4"
                }
              }
            },
            "edit",
            "delete"
          ]
        }
      ]
    });
    const addModalConfig = reactive({
      permPrefix: "sys:user",
      dialog: {
        title: "新增用户",
        width: 800,
        draggable: true
      },
      form: {
        labelWidth: 100
      },
      formAction: UserAPI.create,
      beforeSubmit(data) {
        console.log("提交之前处理", data);
      },
      formItems: [
        {
          label: "用户名",
          prop: "username",
          rules: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
          type: "input",
          attrs: {
            placeholder: "请输入用户名"
          },
          col: {
            xs: 24,
            sm: 12
          }
        },
        {
          label: "用户昵称",
          prop: "nickname",
          rules: [{ required: true, message: "用户昵称不能为空", trigger: "blur" }],
          type: "input",
          attrs: {
            placeholder: "请输入用户昵称"
          },
          col: {
            xs: 24,
            sm: 12
          }
        },
        {
          label: "所属部门",
          prop: "deptId",
          rules: [{ required: true, message: "所属部门不能为空", trigger: "change" }],
          type: "tree-select",
          attrs: {
            placeholder: "请选择所属部门",
            data: deptArr,
            filterable: true,
            "check-strictly": true,
            "render-after-expand": false
          }
        },
        {
          type: "custom",
          label: "性别",
          prop: "gender",
          initialValue: 1,
          attrs: { style: { width: "100%" } }
        },
        {
          label: "角色",
          prop: "roleIds",
          rules: [{ required: true, message: "用户角色不能为空", trigger: "change" }],
          type: "select",
          attrs: {
            placeholder: "请选择",
            multiple: true
          },
          options: roleArr,
          initialValue: []
        },
        {
          type: "input",
          label: "手机号码",
          prop: "mobile",
          rules: [
            {
              pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/,
              message: "请输入正确的手机号码",
              trigger: "blur"
            }
          ],
          attrs: {
            placeholder: "请输入手机号码",
            maxlength: 11
          }
        },
        {
          label: "邮箱",
          prop: "email",
          rules: [
            {
              pattern: /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/,
              message: "请输入正确的邮箱地址",
              trigger: "blur"
            }
          ],
          type: "input",
          attrs: {
            placeholder: "请输入邮箱",
            maxlength: 50
          }
        },
        {
          label: "状态",
          prop: "status",
          type: "radio",
          options: [
            { label: "正常", value: 1 },
            { label: "禁用", value: 0 }
          ],
          initialValue: 1
        }
      ]
    });
    const editModalConfig = reactive({
      permPrefix: "sys:user",
      component: "drawer",
      drawer: {
        title: "修改用户",
        size: useAppStore().device === DeviceEnum.MOBILE ? "80%" : 500
      },
      pk: "id",
      beforeSubmit(data) {
        console.log("beforeSubmit", data);
      },
      formAction(data) {
        return UserAPI.update(data.id, data);
      },
      formItems: [
        {
          label: "用户名",
          prop: "username",
          rules: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
          type: "input",
          attrs: {
            placeholder: "请输入用户名",
            readonly: true
          }
        },
        {
          label: "用户昵称",
          prop: "nickname",
          rules: [{ required: true, message: "用户昵称不能为空", trigger: "blur" }],
          type: "input",
          attrs: {
            placeholder: "请输入用户昵称"
          }
        },
        {
          label: "所属部门",
          prop: "deptId",
          rules: [{ required: true, message: "所属部门不能为空", trigger: "blur" }],
          type: "tree-select",
          attrs: {
            placeholder: "请选择所属部门",
            data: deptArr,
            filterable: true,
            "check-strictly": true,
            "render-after-expand": false
          }
        },
        {
          type: "custom",
          label: "性别",
          prop: "gender",
          initialValue: 1,
          attrs: { style: { width: "100%" } }
        },
        {
          label: "角色",
          prop: "roleIds",
          rules: [{ required: true, message: "用户角色不能为空", trigger: "blur" }],
          type: "select",
          attrs: {
            placeholder: "请选择",
            multiple: true
          },
          options: roleArr,
          initialValue: []
        },
        {
          type: "input",
          label: "手机号码",
          prop: "mobile",
          rules: [
            {
              pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/,
              message: "请输入正确的手机号码",
              trigger: "blur"
            }
          ],
          attrs: {
            placeholder: "请输入手机号码",
            maxlength: 11
          }
        },
        {
          label: "邮箱",
          prop: "email",
          rules: [
            {
              pattern: /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/,
              message: "请输入正确的邮箱地址",
              trigger: "blur"
            }
          ],
          type: "input",
          attrs: {
            placeholder: "请输入邮箱",
            maxlength: 50
          }
        },
        {
          label: "状态",
          prop: "status",
          type: "switch",
          attrs: {
            inlinePrompt: true,
            activeText: "正常",
            inactiveText: "禁用",
            activeValue: 1,
            inactiveValue: 0
          }
        }
      ]
    });
    const {
      searchRef,
      contentRef,
      addModalRef,
      editModalRef,
      handleQueryClick,
      handleResetClick,
      handleAddClick,
      handleEditClick,
      handleViewClick,
      handleSubmitClick,
      handleExportClick,
      handleSearchClick,
      handleFilterChange
    } = usePage();
    function handleToolbarClick(name) {
      console.log(name);
      if (name === "custom1") {
        ElMessage.success("点击了自定义1按钮");
      }
    }
    const handleOperateClick = (data) => {
      if (data.name === "detail") {
        editModalConfig.drawer = { ...editModalConfig.drawer, title: "查看" };
        handleViewClick(data.row, async () => {
          return await UserAPI.getFormData(data.row.id);
        });
      } else if (data.name === "edit") {
        editModalConfig.drawer = { ...editModalConfig.drawer, title: "修改" };
        handleEditClick(data.row, async () => {
          return await UserAPI.getFormData(data.row.id);
        });
      } else if (data.name === "reset_pwd") {
        ElMessageBox.prompt("请输入用户「" + data.row.username + "」的新密码", "重置密码", {
          confirmButtonText: "确定",
          cancelButtonText: "取消"
        }).then(({ value }) => {
          if (!value || value.length < 6) {
            ElMessage.warning("密码至少需要6位字符，请重新输入");
            return false;
          }
          UserAPI.resetPassword(data.row.id, value).then(() => {
            ElMessage.success("密码重置成功，新密码是：" + value);
          });
        }).catch(() => {
        });
      }
    };
    onMounted(() => {
      initOptions();
    });
    return (_ctx, _cache) => {
      const _component_el_link = ElLink;
      const _component_page_search = __unplugin_components_2;
      const _component_el_tag = ElTag;
      const _component_DictLabel = _sfc_main$2;
      const _component_el_text = ElText;
      const _component_copy_button = _sfc_main$1;
      const _component_page_content = __unplugin_components_7;
      const _component_Dict = _sfc_main$3;
      const _component_page_modal = __unplugin_components_9;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_el_link, {
            href: "https://gitee.com/youlaiorg/vue3-element-admin/blob/master/src/views/demo/curd-demo.vue",
            type: "primary",
            target: "_blank"
          }, {
            default: withCtx(() => [..._cache[0] || (_cache[0] = [
              createTextVNode(" 整合版示例源码 请点击>>>> ", -1)
            ])]),
            _: 1
          })
        ]),
        createVNode(_component_page_search, {
          ref_key: "searchRef",
          ref: searchRef,
          "search-config": unref(searchConfig),
          onQueryClick: unref(handleQueryClick),
          onResetClick: unref(handleResetClick)
        }, null, 8, ["search-config", "onQueryClick", "onResetClick"]),
        createVNode(_component_page_content, {
          ref_key: "contentRef",
          ref: contentRef,
          "content-config": unref(contentConfig),
          onAddClick: unref(handleAddClick),
          onExportClick: unref(handleExportClick),
          onSearchClick: unref(handleSearchClick),
          onToolbarClick: handleToolbarClick,
          onOperateClick: handleOperateClick,
          onFilterChange: unref(handleFilterChange)
        }, {
          status: withCtx((scope) => [
            createVNode(_component_el_tag, {
              type: scope.row[scope.prop] == 1 ? "success" : "info"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(scope.row[scope.prop] == 1 ? "启用" : "禁用"), 1)
              ]),
              _: 2
            }, 1032, ["type"])
          ]),
          gender: withCtx((scope) => [
            createVNode(_component_DictLabel, {
              modelValue: scope.row[scope.prop],
              "onUpdate:modelValue": ($event) => scope.row[scope.prop] = $event,
              code: "gender"
            }, null, 8, ["modelValue", "onUpdate:modelValue"])
          ]),
          mobile: withCtx((scope) => [
            createVNode(_component_el_text, null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(scope.row[scope.prop]), 1)
              ]),
              _: 2
            }, 1024),
            scope.row[scope.prop] ? (openBlock(), createBlock(_component_copy_button, {
              key: 0,
              text: scope.row[scope.prop],
              style: { "margin-left": "2px" }
            }, null, 8, ["text"])) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["content-config", "onAddClick", "onExportClick", "onSearchClick", "onFilterChange"]),
        createVNode(_component_page_modal, {
          ref_key: "addModalRef",
          ref: addModalRef,
          "modal-config": unref(addModalConfig),
          onSubmitClick: unref(handleSubmitClick)
        }, {
          gender: withCtx((scope) => [
            createVNode(_component_Dict, mergeProps({
              modelValue: scope.formData[scope.prop],
              "onUpdate:modelValue": ($event) => scope.formData[scope.prop] = $event,
              code: "gender"
            }, scope.attrs), null, 16, ["modelValue", "onUpdate:modelValue"])
          ]),
          _: 1
        }, 8, ["modal-config", "onSubmitClick"]),
        createVNode(_component_page_modal, {
          ref_key: "editModalRef",
          ref: editModalRef,
          "modal-config": unref(editModalConfig),
          onSubmitClick: unref(handleSubmitClick)
        }, {
          gender: withCtx((scope) => [
            createVNode(_component_Dict, mergeProps({
              modelValue: scope.formData[scope.prop],
              "onUpdate:modelValue": ($event) => scope.formData[scope.prop] = $event,
              code: "gender"
            }, scope.attrs), null, 16, ["modelValue", "onUpdate:modelValue"])
          ]),
          _: 1
        }, 8, ["modal-config", "onSubmitClick"])
      ]);
    };
  }
});
const curdDemo = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-37065ad9"]]);
export {
  curdDemo as default
};
