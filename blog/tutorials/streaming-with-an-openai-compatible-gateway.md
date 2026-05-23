---
title: 通过 OpenAI 兼容网关处理流式输出
description: 介绍如何在保持客户端兼容性的前提下，通过 TokFlux 接入流式返回。
date: 2026-05-21 09:10:00
cover: /covers/tutorial-streaming-cover.png
categories:
  - 教程
tag:
  - OpenAI 兼容
  - 流式输出
  - 网关
  - 客户端 SDK
recommend: 5
sticky: 2
---

# 通过 OpenAI 兼容网关处理流式输出

当团队引入网关层时，第一个核心问题通常很直接：流式输出对客户端 SDK 来说，是否还保持“原生感”？在 TokFlux 里，目标就是保持这种体验。传输路径可以变化，但开发者接入方式不应该变重。

## 需要保留的特性

- 现有 OpenAI 兼容客户端接口形态
- 可预期的流式片段返回
- 清晰的重试边界
- 足够用于排查上游差异的可观测性

## 基础客户端示例

```ts
import OpenAI from 'openai'

const client = new OpenAI({
  apiKey: process.env.TOKFLUX_API_KEY,
  baseURL: 'https://tokenflux.cloud/v1'
})

const stream = await client.chat.completions.create({
  model: 'tokflux/auto',
  stream: true,
  messages: [
    { role: 'system', content: '你是一个表达简洁的平台助手。' },
    { role: 'user', content: '总结一下推理服务层的健康状况。' }
  ]
})

for await (const chunk of stream) {
  process.stdout.write(chunk.choices[0]?.delta?.content ?? '')
}
```

## 运维侧建议

1. 保持客户端契约稳定，把供应商复杂度收敛在网关后面。
2. 尽早附加请求 ID，方便后续追踪重试与故障记录。
3. 在服务端记录供应商、路由与延迟，而不是把这些负担推给业务代码。

## 为什么重要

流式输出是最容易暴露基础设施选择差异的能力之一。如果体验抖动、黑盒或不兼容，开发者会立刻察觉。一个好的网关应该让路由更聪明，而不是让接入更沉重。
