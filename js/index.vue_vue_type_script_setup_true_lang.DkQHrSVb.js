import { d as defineComponent, b0 as LanguageEnum, al as useAppStore, aE as useI18n, e as createBlock, w as withCtx, C as createBaseVNode, n as normalizeClass, m as createVNode, g as createElementBlock, P as Fragment, Q as renderList, aG as ElMessage, f as openBlock, i as unref, a4 as createTextVNode, F as toDisplayString } from "./index.CMVGoxdi.js";
/* empty css                */
import { E as ElDropdown, a as ElDropdownMenu, b as ElDropdownItem } from "./dropdown-item.BcRP6HhW.js";
import "./popper.DoBa4Wzf.js";
import "./scrollbar.DtAlwze8.js";
const logo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAA2UExURQAAAP+PUP+RTDi3/za3//+STf+RTTe2/ze1//+QTTi3/ze2//+STf+PTDi1//+RTTe2/////zcagNMAAAAPdFJOUwAgfyB/v9+/n59A32BAYJ9RQ/8AAAABYktHRBHitT26AAAAB3RJTUUH6AwFEQgZdbvF8wAAAAFvck5UAc+id5oAAAhdSURBVHja7dzplqo6EAbQZhIFUd//aY9JKspQlVRSAeJZ+X7cu9ZpGjJsMqD0319JSUlJSUlJSUlJSUlJyf+Wqo5KlbocTSuIPkP3jMkldUX6V3yupkuiKvK8pa3HIKjHCOe4x9XknhSWoB6vwZ4lElfK26QV1KP9nCUSV5cTrEmCq84IFgyjJ+NKAKu6kbhuROY1SVSRKysjDUupqilc1Kg0PzQZLkZwfwbWoLrE3CZbXBScanboZTquIi0Nq1HVqYwPBBc1Ks0PTT7BkxkcsB76v7W5TRBcFJz5oYkneDI4rGZWj3eXhOJaHHoQrt4DS2UyBUZwUXBS4qq6TxxDBwqrNz/7zuw3czecg2vWu/RBDFimgev1OX2j0nw2Ea0eZ03iQOqANQzzs5kCh+C6MG4lRmaXdCzdHLCafnFkd1k3jw/OxBinGYmHBSPvdd0wt/V5fbhqxq3kjQCWEfUYVsfWzzNw8WA92LB0sUxhInFFjsGpYZlidetz+zpdjEsMqx2Q42+mMCG4hKtHHix0rWh6YgvLnNYUJgCXcIIXw+rxX7lDYW7bmlBTXs2oLZl9YJkW0oWZD0eeUakSrB4FsGBK7x2npnDtsDWRwmpG+tdqaHoEV/LVoxhW39K/VoXjWgzXAatHMaxH7zr9BIVBcLG2JvwJfk9YKkJc7NXjbLhLD0u378UUBsNFXbFj1HZ9GSmstvddYoLChOAKXz123pP+iWCp3KDpEVzUqHRn1HYRASyzux1b/0Xe7XtZt7MP17zSDFyVv23+hLCgfUW4/BN8PCxTgYEBy1wnGFfQ1kQKq3kxYOn2fZK4WFsTzwQ/sY50wOpZsFTucIlpWxFy9cjHJYX1YMKCa4XiYq8eebCwj0Jg5OXCglKRuIRbEwEsmNLZsFRicPG2JlJYLcwk3C7poOkRXKytCTXBHwoLSqULg+ESbE3EsMYgWNB0Ilz4rcSChT7ovUIVg2DZUlG4orcmUlhDKCwolQgXcitJYTWvYFjQfN3q8p/mjtuaxMOCKT0clu6SDgoTi2tdWymsRwwsKBWJK2JrchIsaMJgXPTW5ELVcJ70sHSXWFw1UhPqd6jV46yGNCzH7raNhaVLBYUJwUVsTeSwAha929RQGATXk4PrW2YprDEelu4SFy7G1uRpjzkVli6VDNeN/ickV6wijekqESzoChKXd2vyUSSE1bxksHSXxOCyU7hVNJvwA2GZqaOXwtKlcuDybE3CYNGPTR5yWNAVJK6a/p3n9zF7BrB088biygqWLpUDl2P1aN3Fw7IjbxJY0BXBuO5hsNBvacCUngaWbl4XLkqLRSeFNaaCpQsVgQuSESzoigvUaBP3o15WjWlYQ0JYugIxuFTiYV3hJwlhQVeY3SLy5SFHU0th9WlhQVd0UKMAXKza0puQx+xlnVRx4XoyHqoEwrJTemJY0BU0LnyCzxCWyj0YlxBWuwMsXQEXLmxrkiUs6IoQXHdfh+nQsMZ9YEHRSFybrcnsoKxg6bhw1dtjJbCG3WBBK9O4lsUVwmpe+8GC4pG4FoAEsBqo4X6wVLi4hLAeu8KClubgiofVQw13hQVF9OOKhzUeA0vlBrMfhsu2vhBWuzss3doXL64fgKUyQfFIXAJYtob7w1KpAQyFKx6WndIPgKVb3H5ZEHt3fGLCGilYw0GwdA1cuGabkChYY+LHDd+/UoKc1oVr0Tvk2Q+E9el75LxvVDSuWFj6sUlSWKYLGmdNHLgksJpXYljLqyGnvsOc4cBFw0I/QdCw+l1GrE+X9EhNvLgCYdlNSPS3G9CY95F9uKiX5DKC1ayviOOi3sDMCNbDlPyzHBqRmtxgGdylgtWmhqVrYnrGietilsHe3eIyLlg7TOkcXBONKxNYuktMyT9fRhjRCd5MJh0flnMTkh6Wrom5sGeCR98dzweWCvwphe+VH9tjqif6hwkCYe29uwVcn5qM6BiM4MoKlj65+Z8L15/FdZ+FPiO5u913EzLAC00vR02qkDd0MVifTcieu9t2hetF4+LECevKPUtUYLXoXD3e2H9b4CRYuqXgxXEnrgsTFwmree3/2OTKwPW+TS5d16k/6lbX6mavKuwjRXp3u9OUvrz6Ghc6BuvyT9OE1wByIiwVi8s5BnOCfUvjMFi6IddjcNxFz4WlSzAycDHawzHyHvQ8rjW3iQzX6bBURsYE78n5sHQp1rjCHxBkAEtfzdTkuzUJXac6H5scBUtFiCsPWLokI7zNGIcrE1j6imtcIWMwCWs4GJaKABcNazwYlsow2vdqgnFlBMtcNRKXE1byTxAYGU3JQ3GhsBr4weGwVIbXGhfrPiVhXfd8bOJMFC4M1mcTcgYslQhcGKzPlH4KLFMD+6opuyYkrP40WKYm+qlpwx6DSViPU0bebza4emdNnLCOntIXsbiuSydUMFh2rbjv8zhvrvDVYhYuDJYu/9mwTA1WuOgxNF9YpgY9dwzGPvM8ZROC58qd4DFYJ64VN+HiyhuWqQFrgs8clsoWF1Kw3GGpWFyzTwk2uE79BIGdLa7NsukHYKl4cf0CLJU3Lr16HIgJ3gnrrE0Imi2u+RjcYLD0z894bOJO78LlgnXiJgRNA+9mY7gwWId/M5md9kVN8ORjkwxhqfSwetzg+iVYKhZXs1o9/hYsFRxX/mvFbXq4LRa4XA96T97dkkFwtb8HS2WLC0vusFTGDS4kGa4VN0FwbZL+XYo90sI3NmlcvwBLZfxO2r8LS8WHy753mzcsFftGVNtjsX+jJXdYKv531H4AlsoblfuRfGa7W2dBXQ2e3e6WzgxXs82PwNKld07seW5C8DDWWj+SxzstlR8YeUtKSkpKSkpKSkpKSkpU/gHCuwl6XLVKqAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNC0xMi0wNVQxNzowNzozMCswMDowMLeY7ucAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjQtMTItMDVUMTc6MDc6MzArMDA6MDDGxVZbAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI0LTEyLTA1VDE3OjA4OjI1KzAwOjAw/kkDMAAAAABJRU5ErkJggg==";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    size: {
      type: String,
      required: false
    }
  },
  setup(__props) {
    const langOptions = [
      { label: "中文", value: LanguageEnum.ZH_CN },
      { label: "English", value: LanguageEnum.EN }
    ];
    const appStore = useAppStore();
    const { locale, t } = useI18n();
    function handleLanguageChange(lang) {
      locale.value = lang;
      appStore.changeLanguage(lang);
      ElMessage.success(t("langSelect.message.success"));
    }
    return (_ctx, _cache) => {
      const _component_el_dropdown_item = ElDropdownItem;
      const _component_el_dropdown_menu = ElDropdownMenu;
      const _component_el_dropdown = ElDropdown;
      return openBlock(), createBlock(_component_el_dropdown, {
        trigger: "click",
        onCommand: handleLanguageChange
      }, {
        dropdown: withCtx(() => [
          createVNode(_component_el_dropdown_menu, null, {
            default: withCtx(() => [
              (openBlock(), createElementBlock(Fragment, null, renderList(langOptions, (item) => {
                return createVNode(_component_el_dropdown_item, {
                  key: item.value,
                  disabled: unref(appStore).language === item.value,
                  command: item.value
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.label), 1)
                  ]),
                  _: 2
                }, 1032, ["disabled", "command"]);
              }), 64))
            ]),
            _: 1
          })
        ]),
        default: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(["i-svg:language", __props.size])
          }, null, 2)
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as _,
  logo as l
};
