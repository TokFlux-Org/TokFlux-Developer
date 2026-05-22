import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"快速开始","description":"","frontmatter":{},"headers":[],"relativePath":"api-examples.md","filePath":"api-examples.md"}');
const _sfc_main = { name: "api-examples.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to “快速开始”">​</a></h1><p>如果你是第一次使用，建议按下面顺序配置。</p><h2 id="_1-配置-node-环境" tabindex="-1">1. 配置 Node 环境 <a class="header-anchor" href="#_1-配置-node-环境" aria-label="Permalink to “1. 配置 Node 环境”">​</a></h2><p>Codex CLI 和 Claude CLI 都需要 Node 环境，请先完成 Node 配置。</p><p><a href="/pz/node_a.html">查看 Node 环境配置</a></p><h2 id="_2-选择你要使用的工具" tabindex="-1">2. 选择你要使用的工具 <a class="header-anchor" href="#_2-选择你要使用的工具" aria-label="Permalink to “2. 选择你要使用的工具”">​</a></h2><p>根据自己的需求选择：</p><ul><li>想在终端里使用：选择 CLI</li><li>想在 VS Code 里使用：选择 IDE 插件</li><li>想使用独立软件：选择桌面端</li></ul><h2 id="_3-安装工具" tabindex="-1">3. 安装工具 <a class="header-anchor" href="#_3-安装工具" aria-label="Permalink to “3. 安装工具”">​</a></h2><h3 id="codex" tabindex="-1">Codex <a class="header-anchor" href="#codex" aria-label="Permalink to “Codex”">​</a></h3><ul><li><a href="/codex/codex_a.html">安装 Codex CLI</a></li><li><a href="/codex/codex_b.html">安装 Codex IDE 插件</a></li><li><a href="/codex/codex_c.html">安装 Codex 桌面端</a></li></ul><h3 id="claude" tabindex="-1">Claude <a class="header-anchor" href="#claude" aria-label="Permalink to “Claude”">​</a></h3><ul><li><a href="/claude/claude_a.html">安装 Claude CLI</a></li><li><a href="/claude/claude_b.html">安装 Claude IDE 插件</a></li><li><a href="/claude/claude_c.html">安装 Claude 桌面端</a></li></ul><h2 id="_4-配置中转环境" tabindex="-1">4. 配置中转环境 <a class="header-anchor" href="#_4-配置中转环境" aria-label="Permalink to “4. 配置中转环境”">​</a></h2><p>工具安装完成后，如果你使用 TokenFlux API，需要配置对应工具的中转环境。</p><ul><li><a href="/pz/codex_a.html">Codex 中转配置</a></li><li><a href="/pz/claude_a.html">Claude 中转配置</a></li></ul><h2 id="_5-测试是否成功" tabindex="-1">5. 测试是否成功 <a class="header-anchor" href="#_5-测试是否成功" aria-label="Permalink to “5. 测试是否成功”">​</a></h2><p>配置完成后，打开对应工具，输入：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="${ssrRenderStyle({ "--shiki-light": "#24292e", "--shiki-dark": "#e1e4e8", "--shiki-light-bg": "#fff", "--shiki-dark-bg": "#24292e" })}" tabindex="0" dir="ltr"><code><span class="line"><span>你好</span></span></code></pre></div><p>如果可以正常回复，说明基本配置成功。</p><h2 id="_6-遇到问题怎么办" tabindex="-1">6. 遇到问题怎么办 <a class="header-anchor" href="#_6-遇到问题怎么办" aria-label="Permalink to “6. 遇到问题怎么办”">​</a></h2><p>常见问题可以优先检查：</p><ul><li>Node 是否安装成功</li><li>插件是否安装成功</li><li>API Key 是否填写正确</li><li>中转地址是否填写正确</li><li>修改配置后是否重新打开终端或插件</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("api-examples.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const apiExamples = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  apiExamples as default
};
