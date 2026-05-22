import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/images/zhuye.png";
const __pageData = JSON.parse('{"title":"使用说明","description":"","frontmatter":{},"headers":[],"relativePath":"markdown-examples.md","filePath":"markdown-examples.md"}');
const _sfc_main = { name: "markdown-examples.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><img${ssrRenderAttr("src", _imports_0)} alt="图片说明"></p><h1 id="使用说明" tabindex="-1">使用说明 <a class="header-anchor" href="#使用说明" aria-label="Permalink to “使用说明”">​</a></h1><p>本站主要整理 TokenFlux 相关工具的安装、配置和使用教程，帮助你快速配置 Node 环境、Codex、Claude 以及对应的 IDE 插件或桌面端工具。</p><h2 id="_1-使用前准备" tabindex="-1">1. 使用前准备 <a class="header-anchor" href="#_1-使用前准备" aria-label="Permalink to “1. 使用前准备”">​</a></h2><p>使用前建议先按顺序完成：</p><ol><li>配置 <a href="/pz/node_a.html">Node 环境</a></li><li>安装需要使用的工具，例如 Codex 或 Claude</li><li>配置对应的中转环境</li><li>打开对应插件、CLI 或桌面端开始使用</li></ol><h2 id="_2-合规使用要求" tabindex="-1">2. 合规使用要求 <a class="header-anchor" href="#_2-合规使用要求" aria-label="Permalink to “2. 合规使用要求”">​</a></h2><p>请合法合规使用本站教程和相关工具。不得将相关工具用于违法违规、网络攻击、欺诈、侵犯隐私、侵犯版权、绕过安全限制等用途。</p><p>使用 AI 生成的内容前，请自行检查准确性、合法性和安全性。AI 生成内容可能存在错误、遗漏或不适合直接使用的情况，重要内容建议人工复核后再使用。</p><h2 id="_3-api-key-安全提醒" tabindex="-1">3. API Key 安全提醒 <a class="header-anchor" href="#_3-api-key-安全提醒" aria-label="Permalink to “3. API Key 安全提醒”">​</a></h2><p>API Key 是你的账号访问凭证，请妥善保管：</p><ul><li>不要把 API Key 发给别人。</li><li>不要把 API Key 截图公开。</li><li>不要把 API Key 提交到 GitHub、网盘、论坛或公开文档中。</li><li>不要在不可信的软件、网站或脚本里填写 API Key。</li><li>如果怀疑 API Key 泄露，请及时删除或重置。</li></ul><h2 id="_4-使用风险提示" tabindex="-1">4. 使用风险提示 <a class="header-anchor" href="#_4-使用风险提示" aria-label="Permalink to “4. 使用风险提示”">​</a></h2><p>不同工具、插件和模型的功能会随版本变化而调整，教程内容仅供学习和配置参考。实际使用时，请以对应软件和服务的最新规则为准。</p><p>如果使用 AI 修改代码、生成文档、处理数据或分析文件，请在最终使用前自行检查结果，避免因错误内容造成损失。</p><h2 id="_5-免责声明" tabindex="-1">5. 免责声明 <a class="header-anchor" href="#_5-免责声明" aria-label="Permalink to “5. 免责声明”">​</a></h2><p>本站仅提供安装、配置和学习说明，不提供违法违规用途支持。用户应自行承担使用相关工具和服务产生的风险，并遵守当地法律法规、平台规则和服务条款。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown-examples.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const markdownExamples = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  markdownExamples as default
};
