---
title: 示例
description: SDK 用法与集成示例的占位入口。
hidden: true
publish: false
readingTime: false
---

# 示例

这里用于承载 JavaScript、TypeScript、Python 与 curl 等 SDK / 请求示例。

## 推荐示例

- 基础 chat completion 请求
- 流式响应处理
- 错误重试封装
- 多环境配置
- 可观测性与 tracing 接入

::: code-group
```ts [TypeScript]
import OpenAI from 'openai'

const client = new OpenAI({
  apiKey: process.env.TOKFLUX_API_KEY,
  baseURL: 'https://api.tokflux.com/v1'
})
```

```bash [curl]
curl https://api.tokflux.com/v1/chat/completions \
  -H "Authorization: Bearer $TOKFLUX_API_KEY" \
  -H "Content-Type: application/json"
```
:::
