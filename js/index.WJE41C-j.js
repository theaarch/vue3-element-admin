import { u as usePage, _ as __unplugin_components_2, a as __unplugin_components_7, b as __unplugin_components_9 } from "./usePage.DtZItjuO.js";
import { _ as _sfc_main$3 } from "./index.vue_vue_type_script_setup_true_lang.BIB_T6sg.js";
import { _ as _sfc_main$1 } from "./index.vue_vue_type_script_setup_true_lang.Dej8Usvd.js";
import { r as ref, S as reactive, bc as UserAPI, al as useAppStore, ar as DeviceEnum, aG as ElMessage, d as defineComponent, o as onMounted, g as createElementBlock, f as openBlock, C as createBaseVNode, m as createVNode, w as withCtx, a4 as createTextVNode, i as unref, P as Fragment, e as createBlock, h as createCommentVNode, F as toDisplayString, Z as mergeProps } from "./index.CMVGoxdi.js";
import { E as ElText } from "./text.q0LMFjPw.js";
import { _ as _sfc_main$2 } from "./DictLabel.vue_vue_type_script_setup_true_lang.DAMED-bx.js";
/* empty css             */
/* empty css                */
import { E as ElLink } from "./link.sg1Vauma.js";
import { D as DeptAPI } from "./dept-api.DPvjzMBQ.js";
import { R as RoleAPI } from "./role-api.DuLMccvT.js";
/* empty css                     */
import "./input.e-JahrSO.js";
import "./overlay.D5iBFarf.js";
import { E as ElButton } from "./index.Dj3dgP9b.js";
import { E as ElTag } from "./index.Bm3yvNp-.js";
import { E as ElMessageBox } from "./index.COoTFKhQ.js";
import "./dialog.K3HObJ36.js";
import "./index.CXDLE--x.js";
import "./aria.McRhojP9.js";
import "./refs.CxYYXu5Q.js";
import "./index.YIi0pvtX.js";
import "./scrollbar.DtAlwze8.js";
import "./error.BVJkE67s.js";
import "./index.DaBsN2Em.js";
import "./drawer.CMWDke1z.js";
import "./form-item.CmWhLgum.js";
import "./use-form-common-props.FTUT8iWW.js";
import "./castArray.C_s9cPED.js";
import "./_baseClone.CfRt64Vl.js";
import "./col.CEwwE6cO.js";
/* empty css                 */
import "./popper.DoBa4Wzf.js";
import "./index.DVrxpZpR.js";
import "./index.CW0zx63I.js";
import "./popover.DGMnBt2K.js";
import "./dropdown.BUATu1CN.js";
import "./tab-pane.Ny8r7VC4.js";
import "./raf.4vPW_kUn.js";
import "./strings.D1GX2Yv6.js";
import "./toNumber.CXTQWgmn.js";
import "./event.BZTOGHfp.js";
import "./index.Cdydgd0B.js";
import "./vnode.Iptj05er.js";
import "./omit.S5luP4Uv.js";
import "./_plugin-vue_export-helper.1tPrXgE0.js";
import "./select.B3ZImeYN.js";
import "./token.BqWJQ4CJ.js";
import "./index.DV5G4YPF.js";
import "./scroll.DDdbKqCe.js";
import "./debounce.BoSFb3lI.js";
import "./_baseIteratee.D1GRhJxI.js";
import "./index.5_syEPF3.js";
import "./switch.B-zoIdso.js";
import "./checkbox.DZ7c_NXG.js";
import "./radio-group.Kyo8Lba0.js";
import "./input-number.CsNdNbKq.js";
import "./index.6_mgubW3.js";
import "./date-picker-panel.Cr86qOZB.js";
import "./dayjs.min.CLW6ga6r.js";
import "./index.BBCU1hlO.js";
import "./tree.B-amm7pj.js";
import "./index.C4jaq0tL.js";
import "./tree-select.uBNE40-u.js";
/* empty css                        */
import "./loading.Bj9r26x4.js";
import "./upload.CPv0uetc.js";
import "./progress.ByKD08Sv.js";
import "./pagination.St4XI-cL.js";
import "./table-column.Dmp1Csxk.js";
import "./image-viewer.SOc3PiXv.js";
import "./card.BuFkVuPD.js";
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
const modalConfig$3 = {
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
      // async initFn(formItem) {
      //   // 注意:如果initFn函数不是箭头函数,this会指向此配置项对象,那么也就可以用this来替代形参formItem
      //   formItem.attrs.data = await DeptAPI.getOptions();
      // },
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
      // async initFn(formItem) {
      //   formItem.options = await RoleAPI.getOptions();
      // },
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
    },
    {
      type: "custom",
      label: "二级弹窗",
      prop: "openModal",
      slotName: "openModal"
    }
  ]
};
const addModalConfig = reactive(modalConfig$3);
const contentConfig$1 = {
  permPrefix: "sys:user",
  // 不写不进行按钮权限校验
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
          // perm: "password-reset",
          attrs: {
            icon: "refresh-left",
            // color: "#626AEF", // 使用 text 属性，颜色不生效
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
};
const modalConfig$2 = {
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
        // setup，Vue会自动解包ref，不需要.value
        filterable: true,
        "check-strictly": true,
        "render-after-expand": false
      }
      // async initFn(formItem) {
      //   // 注意:如果initFn函数不是箭头函数,this会指向此配置项对象,那么也就可以用this来替代形参formItem
      //   formItem.attrs.data = await DeptAPI.getOptions();
      // },
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
      // async initFn(formItem) {
      //   formItem.options = await RoleAPI.getOptions();
      // },
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
};
const editModalConfig = reactive(modalConfig$2);
const searchConfig$1 = {
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
      // async initFn(formItem) {
      //   // 注意:如果initFn函数不是箭头函数,this会指向此配置项对象,那么也就可以用this来替代形参formItem
      //   formItem.attrs.data = await DeptAPI.getOptions();
      // },
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
};
const modalConfig$1 = {
  colon: true,
  dialog: {
    title: "二级弹窗",
    width: 500,
    draggable: true
  },
  form: {
    labelWidth: "auto",
    labelPosition: "top"
  },
  formItems: [
    {
      label: "用户名",
      prop: "username",
      rules: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
      type: "input",
      attrs: { placeholder: "请输入" }
    },
    {
      label: "用户昵称",
      prop: "nickname",
      rules: [{ required: true, message: "用户昵称不能为空", trigger: "blur" }],
      type: "input",
      attrs: { placeholder: "请输入" }
    },
    {
      label: "所属部门",
      prop: "deptId",
      rules: [{ required: true, message: "所属部门不能为空", trigger: "change" }],
      type: "tree-select",
      attrs: {
        placeholder: "请选择",
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
    }
  ]
};
const addModalConfig2 = reactive(modalConfig$1);
const contentConfig = {
  // permPrefix: "sys:demo", // 不写不进行按钮权限校验
  table: {
    showOverflowTooltip: true
  },
  pagePosition: "right",
  toolbar: [],
  indexAction(params) {
    console.log("indexAction:", params);
    return Promise.resolve({
      total: 2,
      list: [
        {
          id: 1,
          username: "root",
          avatar: "https://foruda.gitee.com/images/1723603502796844527/03cdca2a_716974.gif",
          percent: 99,
          price: 10,
          url: "https://www.baidu.com",
          icon: "el-icon-setting",
          gender: 1,
          status: 1,
          status2: 1,
          sort: 99,
          createTime: 1715647982437
        },
        {
          id: 2,
          username: "jerry",
          avatar: "https://foruda.gitee.com/images/1723603502796844527/03cdca2a_716974.gif",
          percent: 88,
          price: 999,
          url: "https://www.google.com",
          icon: "el-icon-user",
          gender: 0,
          status: 0,
          status2: 0,
          sort: 0,
          createTime: 1715648977426
        }
      ]
    });
  },
  modifyAction(data) {
    ElMessage.success(JSON.stringify(data));
    return Promise.resolve(null);
  },
  cols: [
    { type: "index", width: 50, align: "center" },
    { label: "ID", align: "center", prop: "id", show: false },
    { label: "文本", align: "center", prop: "username" },
    { label: "图片", align: "center", prop: "avatar", templet: "image" },
    {
      label: "百分比",
      align: "center",
      prop: "percent",
      templet: "percent"
    },
    {
      label: "货币符",
      align: "center",
      prop: "price",
      templet: "price",
      priceFormat: "$"
    },
    { label: "链接", align: "center", prop: "url", width: 180, templet: "url" },
    { label: "图标", align: "center", prop: "icon", templet: "icon" },
    {
      label: "列表值",
      align: "center",
      prop: "gender",
      templet: "list",
      selectList: { "0": "女", "1": "男" }
    },
    {
      label: "自定义",
      align: "center",
      prop: "status",
      templet: "custom",
      slotName: "status"
    },
    {
      label: "Switch",
      align: "center",
      prop: "status2",
      templet: "switch",
      activeValue: 1,
      inactiveValue: 0,
      activeText: "启用",
      inactiveText: "禁用"
    },
    {
      label: "输入框",
      align: "center",
      prop: "sort",
      templet: "input",
      inputType: "number"
    },
    {
      label: "日期格式化",
      align: "center",
      prop: "createTime",
      minWidth: 120,
      templet: "date",
      dateFormat: "YYYY/MM/DD HH:mm:ss"
    },
    {
      label: "操作栏",
      align: "center",
      fixed: "right",
      width: 220,
      templet: "tool",
      operat: [
        "view",
        "edit",
        {
          name: "delete",
          text: "展示删除",
          perm: "delete",
          attrs: { icon: "delete", type: "danger" },
          render(row) {
            return row.id !== 1;
          }
        }
      ]
    }
  ]
};
const modalConfig = {
  permPrefix: "sys:user",
  component: "drawer",
  colon: true,
  pk: "id",
  drawer: {
    title: "修改用户",
    size: useAppStore().device === DeviceEnum.MOBILE ? "80%" : 500
  },
  form: { labelPosition: "right", labelWidth: "auto" },
  beforeSubmit(data) {
    console.log("beforeSubmit", data);
  },
  formAction(data) {
    ElMessage.success(JSON.stringify(data));
    return Promise.resolve(null);
  },
  formItems: [
    {
      tips: { effect: "light", placement: "top", content: "自定义文字提示" },
      type: "input",
      label: "文本",
      prop: "username",
      attrs: { placeholder: "请输入", clearable: true }
    },
    {
      type: "input-number",
      label: "百分比",
      prop: "percent",
      attrs: { placeholder: "请输入", controls: false },
      slotName: "suffix"
    },
    {
      type: "input-number",
      label: "货币符",
      prop: "price",
      attrs: { placeholder: "请输入", controls: false },
      slotName: "prefix"
    },
    {
      type: "input",
      label: "链接",
      prop: "url",
      attrs: { placeholder: "请输入", clearable: true }
    },
    {
      type: "icon-select",
      label: "链接",
      prop: "icon"
    },
    {
      type: "custom",
      label: "列表值",
      prop: "gender",
      slotName: "gender",
      attrs: { style: { width: "100%" } }
    },
    {
      type: "select",
      label: "自定义",
      prop: "status",
      attrs: { placeholder: "全部", clearable: true },
      options: [
        { label: "启用", value: 1 },
        { label: "禁用", value: 0 }
      ]
    },
    {
      type: "switch",
      label: "Switch",
      prop: "status2",
      attrs: {
        inlinePrompt: true,
        activeValue: 1,
        inactiveValue: 0,
        activeText: "启用",
        inactiveText: "禁用"
      }
    },
    {
      type: "input-number",
      label: "输入框",
      prop: "sort",
      attrs: { placeholder: "请输入", controls: false }
    },
    {
      type: "date-picker",
      label: "日期格式化",
      prop: "createTime",
      attrs: {
        type: "datetime",
        format: "YYYY/MM/DD hh:mm:ss",
        "value-format": "x"
      }
    }
  ]
};
const editModalConfig2 = reactive(modalConfig);
const searchConfig = {
  grid: "right",
  colon: true,
  showNumber: 3,
  form: { labelPosition: "right", labelWidth: "90px" },
  cardAttrs: { shadow: "hover", style: { "margin-bottom": "12px" } },
  formItems: [
    {
      tips: { effect: "light", placement: "top", content: "自定义文字提示" },
      type: "input",
      label: "输入框",
      prop: "testInput",
      attrs: { placeholder: "请输入", clearable: true },
      events: {
        change: (e) => {
          console.log("输入框的值: ", e);
        }
      }
    },
    {
      type: "input-number",
      label: "数字输入框",
      prop: "testInputNumber",
      attrs: { placeholder: "请输入", controls: false }
    },
    {
      type: "select",
      label: "下拉选择框",
      prop: "testSelect",
      attrs: { placeholder: "全部", clearable: true },
      options: stateArr,
      events: {
        change(e) {
          console.log("选中的值: ", e);
        }
      }
    },
    {
      type: "tree-select",
      label: "树形选择框",
      prop: "testTreeSelect",
      attrs: {
        placeholder: "请选择",
        data: deptArr,
        filterable: true,
        "check-strictly": true,
        "render-after-expand": false,
        clearable: true
      }
      // async initFn(formItem) {
      //   // 注意:如果initFn函数不是箭头函数,this会指向此配置项对象,那么也就可以用this来替代形参formItem
      //   formItem.attrs.data = await DeptAPI.getOptions();
      // },
    },
    {
      type: "cascader",
      label: "级联选择器",
      prop: "testCascader",
      attrs: {
        placeholder: "请选择",
        clearable: true,
        props: {
          expandTrigger: "hover",
          label: "label",
          value: "value",
          children: "children"
        },
        options: [
          {
            value: "guide",
            label: "Guide",
            children: [
              {
                value: "disciplines",
                label: "Disciplines",
                children: [
                  {
                    value: "consistency",
                    label: "Consistency"
                  }
                ]
              },
              {
                value: "navigation",
                label: "Navigation",
                children: [
                  {
                    value: "side nav",
                    label: "Side Navigation"
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      type: "date-picker",
      label: "范围选择器",
      prop: "createAt",
      attrs: {
        type: "daterange",
        "range-separator": "~",
        "start-placeholder": "开始时间",
        "end-placeholder": "截止时间",
        "value-format": "YYYY-MM-DD"
      }
    },
    {
      type: "date-picker",
      label: "日期选择器",
      prop: "testDataPicker",
      attrs: { placeholder: "请选择", type: "date" }
    },
    {
      type: "time-picker",
      label: "时间选择器",
      prop: "testTimePicker",
      attrs: { placeholder: "请选择", clearable: true }
    },
    {
      type: "time-select",
      label: "时间选择",
      prop: "testTimeSelect",
      attrs: { placeholder: "请选择", clearable: true }
    },
    {
      type: "input-tag",
      label: "标签选择器",
      prop: "testInputTags",
      attrs: { placeholder: "请选择", clearable: true }
    },
    {
      type: "custom-tag",
      label: "标签选择器",
      prop: "testCustomTags",
      attrs: {
        buttonAttrs: { btnText: "+ New Tag" },
        inputAttrs: {},
        tagAttrs: {}
      }
    }
  ]
};
const _hoisted_1 = { class: "app-container h-full flex flex-1 flex-col" };
const _hoisted_2 = { class: "flex-x-between mb-10" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
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
    const handleOperateClick2 = (data) => {
      if (data.name === "view") {
        editModalConfig.drawer = { ...editModalConfig.drawer, title: "查看" };
        handleViewClick(data.row);
      } else if (data.name === "edit") {
        editModalConfig.drawer = { ...editModalConfig.drawer, title: "修改" };
        handleEditClick(data.row);
      } else if (data.name === "delete") {
        ElMessage.success("模拟删除成功");
      }
    };
    const addModalRef2 = ref();
    const openSecondModal = () => {
      handleAddClick(addModalRef2);
    };
    const secondSubmit = (formData) => {
      console.log("secondSubmit", formData);
      ElMessage.success("二级弹窗提交成功");
    };
    const isA = ref(true);
    onMounted(() => {
      initOptions();
    });
    return (_ctx, _cache) => {
      const _component_el_link = ElLink;
      const _component_el_button = ElButton;
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
            href: "https://gitee.com/youlaiorg/vue3-element-admin/blob/master/src/views/demo/curd/index.vue",
            type: "primary",
            target: "_blank"
          }, {
            default: withCtx(() => [..._cache[1] || (_cache[1] = [
              createTextVNode(" 示例源码 请点击>>>> ", -1)
            ])]),
            _: 1
          }),
          createVNode(_component_el_button, {
            type: "primary",
            plain: "",
            round: "",
            size: "small",
            onClick: _cache[0] || (_cache[0] = ($event) => isA.value = !unref(isA))
          }, {
            default: withCtx(() => [..._cache[2] || (_cache[2] = [
              createTextVNode("切换示例", -1)
            ])]),
            _: 1
          })
        ]),
        unref(isA) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createVNode(_component_page_search, {
            ref_key: "searchRef",
            ref: searchRef,
            "search-config": unref(searchConfig$1),
            onQueryClick: unref(handleQueryClick),
            onResetClick: unref(handleResetClick)
          }, null, 8, ["search-config", "onQueryClick", "onResetClick"]),
          createVNode(_component_page_content, {
            ref_key: "contentRef",
            ref: contentRef,
            "content-config": unref(contentConfig$1),
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
            openModal: withCtx(() => [
              createVNode(_component_el_button, {
                type: "primary",
                onClick: openSecondModal
              }, {
                default: withCtx(() => [..._cache[3] || (_cache[3] = [
                  createTextVNode("打开二级弹窗", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modal-config", "onSubmitClick"]),
          createVNode(_component_page_modal, {
            ref_key: "addModalRef2",
            ref: addModalRef2,
            "modal-config": unref(addModalConfig2),
            onCustomSubmit: secondSubmit
          }, {
            gender: withCtx((scope) => [
              createVNode(_component_Dict, mergeProps({
                modelValue: scope.formData[scope.prop],
                "onUpdate:modelValue": ($event) => scope.formData[scope.prop] = $event,
                code: "gender"
              }, scope.attrs), null, 16, ["modelValue", "onUpdate:modelValue"])
            ]),
            _: 1
          }, 8, ["modal-config"]),
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
        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createVNode(_component_page_search, {
            ref_key: "searchRef",
            ref: searchRef,
            "search-config": unref(searchConfig),
            onResetClick: unref(handleResetClick)
          }, null, 8, ["search-config", "onResetClick"]),
          createVNode(_component_page_content, {
            ref_key: "contentRef",
            ref: contentRef,
            "content-config": unref(contentConfig),
            onOperateClick: handleOperateClick2
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
            _: 1
          }, 8, ["content-config"]),
          createVNode(_component_page_modal, {
            ref_key: "editModalRef",
            ref: editModalRef,
            "modal-config": unref(editModalConfig2)
          }, {
            suffix: withCtx(() => [..._cache[4] || (_cache[4] = [
              createBaseVNode("span", { style: { "color": "black" } }, "%", -1)
            ])]),
            prefix: withCtx(() => [..._cache[5] || (_cache[5] = [
              createBaseVNode("span", null, "$", -1)
            ])]),
            gender: withCtx((scope) => [
              createVNode(_component_Dict, mergeProps({
                modelValue: scope.formData[scope.prop],
                "onUpdate:modelValue": ($event) => scope.formData[scope.prop] = $event,
                code: "gender"
              }, scope.attrs), null, 16, ["modelValue", "onUpdate:modelValue"])
            ]),
            _: 1
          }, 8, ["modal-config"])
        ], 64))
      ]);
    };
  }
});
export {
  _sfc_main as default
};
