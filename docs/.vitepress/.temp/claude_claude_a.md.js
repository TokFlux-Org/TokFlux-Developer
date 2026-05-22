import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"安装使用Claude CLI","description":"","frontmatter":{},"headers":[],"relativePath":"claude/claude_a.md","filePath":"claude/claude_a.md"}');
const _sfc_main = { name: "claude/claude_a.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="安装使用claude-cli" tabindex="-1">安装使用Claude CLI <a class="header-anchor" href="#安装使用claude-cli" aria-label="Permalink to “安装使用Claude CLI”">​</a></h1><p>注意：安装配置前一定要先把 <a href="/pz/node_a.html">Node 环境配置</a> 配置好，Claude CLI 需要 Node.js 18 及以上版本</p><h2 id="_1-安装" tabindex="-1">1.安装 <a class="header-anchor" href="#_1-安装" aria-label="Permalink to “1.安装”">​</a></h2><ol><li>win+R 输入cmd回车: 输入以下命令安装</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="${ssrRenderStyle({ "--shiki-light": "#24292e", "--shiki-dark": "#e1e4e8", "--shiki-light-bg": "#fff", "--shiki-dark-bg": "#24292e" })}" tabindex="0" dir="ltr"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">npm</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> install</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> -g</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> @anthropic-ai/claude-code</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> --registry=https://registry.npmmirror.com</span></span></code></pre></div><p>安装成功之后需要去<a href="/pz/claude_a.html">Claude 中转配置</a>配置环境，才可以使用 TokenFlux API</p><p>安装成功之后可以输入以下命令检查安装状态</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="${ssrRenderStyle({ "--shiki-light": "#24292e", "--shiki-dark": "#e1e4e8", "--shiki-light-bg": "#fff", "--shiki-dark-bg": "#24292e" })}" tabindex="0" dir="ltr"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">claude</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> doctor</span></span></code></pre></div><h2 id="_2-使用" tabindex="-1">2.使用 <a class="header-anchor" href="#_2-使用" aria-label="Permalink to “2.使用”">​</a></h2><p>配置好环境之后: win+R 输入cmd回车: 输入以下命令进入Claude CLI界面</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="${ssrRenderStyle({ "--shiki-light": "#24292e", "--shiki-dark": "#e1e4e8", "--shiki-light-bg": "#fff", "--shiki-dark-bg": "#24292e" })}" tabindex="0" dir="ltr"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">claude</span></span></code></pre></div><p>输入你好，有回复代表配置成功可以正常使用了</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("claude/claude_a.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const claude_a = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  claude_a as default
};
