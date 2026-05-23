---
title: 快速开始
description: 从获取 TokFlux API Key 到配置开发者工具的最短路径。
---

# 快速开始

本页是 TokFlux 的接入起点。按下面顺序完成后，你就可以在 Codex、Claude、IDE 插件、桌面端工具或 OpenAI 兼容客户端中使用 TokFlux API。

## 1. 准备账号和 API Key

先进入 TokFlux 控制台创建或复制你的 API Key。

- [进入控制台](https://tokenflux.cloud/dashboard/overview)
- API Key 通常以 `sk-` 开头
- 不要把 API Key 发给他人、截图公开或提交到 GitHub

## 2. 确认本机环境

如果你要使用 Codex CLI、Claude CLI 或相关插件，先确认电脑已经安装 Node.js 和 npm：

```bash
node -v
npm -v
```

如果没有版本号，先完成 [Node 环境配置](/docs/setup/node)。

## 3. 选择你的接入方式

根据你要使用的工具继续配置：

- [Codex CLI](/docs/codex/cli)：适合在命令行中使用 Codex
- [Codex IDE 插件](/docs/codex/ide-plugin)：适合在编辑器中调用 Codex
- [Codex 桌面端](/docs/codex/desktop)：适合使用 Codex 桌面应用
- [Claude CLI](/docs/claude/cli)：适合在命令行中使用 Claude
- [Claude IDE 插件](/docs/claude/ide-plugin)：适合在编辑器中调用 Claude
- [Claude 桌面端](/docs/claude/desktop)：适合日常对话、资料整理和文档处理

## 4. 配置 TokFlux 中转

如果你使用 CC Switch，推荐按对应工具的中转配置教程操作：

- [Codex 中转配置](/docs/setup/codex-gateway)
- [Claude 中转配置](/docs/setup/claude-gateway)

常见配置项包括：

| 配置项 | 说明 |
| --- | --- |
| API Key | 你在 TokFlux 控制台创建的密钥 |
| API 地址 | OpenAI 兼容工具通常使用 `https://tokenflux.cloud/v1` |
| 模型 | 根据控制台可用模型选择 |

## 5. 测试是否成功

配置完成后，重新打开终端或对应工具，发送一条简单消息测试：

```text
你好，请用一句话介绍 TokFlux。
```

如果可以正常返回内容，说明接入已经生效。遇到 `401`、鉴权失败、模型不存在或请求地址错误时，优先检查 API Key、接口地址和模型名称。

## 下一步

- 阅读 [使用说明](/docs/markdown-examples)
- 查看 [API 示例](/docs/api-examples)
- 进入 [技术博客](/blog/) 查看教程和排障文章
