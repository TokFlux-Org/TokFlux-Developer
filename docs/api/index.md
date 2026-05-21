---
title: API
description: TokFlux 接口与 Schema 参考页的占位入口。
hidden: true
publish: false
readingTime: false
---

# API

这里是 TokFlux API 参考内容的基础入口。

## 建议覆盖的内容

- 鉴权请求头
- Chat Completions 兼容层
- 模型列表与路由元数据
- 错误对象结构
- 速率限制与重试建议

```ts
const client = {
  baseURL: 'https://api.tokflux.com/v1',
  headers: {
    Authorization: 'Bearer <token>'
  }
}
```
