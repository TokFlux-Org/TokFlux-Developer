import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"TokenFlux","text":"一个API中转站点","tagline":"我的优秀项目标语","actions":[{"theme":"brand","text":"Markdown 示例","link":"/markdown-examples"},{"theme":"alt","text":"API 示例","link":"/api-examples"}]},"features":[{"title":"功能 A","details":"这是一个示例功能，展示项目的核心能力"},{"title":"功能 B","details":"这是另一个重要的功能，为用户提供价值"},{"title":"功能 C","details":"这个功能完善了项目的整体体验"}]},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
