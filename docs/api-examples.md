# TokFlux API 调用示例

TokFlux 提供 OpenAI 兼容格式的 API 中转服务。接入时通常只需要把请求地址改成 TokFlux 的 OpenAI 兼容地址，并使用你在 TokFlux 控制台创建的 API Key。

```text
https://tokenflux.cloud/v1
```

## 1. 请求准备

调用前需要准备：

- TokFlux API Key，例如 `sk-xxxxxxxxxxxxxxxxxxxxxxxx`
- 可用模型名称，例如你在 TokFlux 控制台或模型列表里看到的模型名
- 支持 HTTPS 请求的工具或 SDK，例如 curl、Node.js、Python、Java

请求头统一使用：

```http
Authorization: Bearer sk-xxxxxxxxxxxxxxxxxxxxxxxx
Content-Type: application/json
```

::: warning 安全提醒
不要把真实 API Key 写进前端代码、公开仓库、截图或文档示例里。服务端项目建议通过环境变量读取 API Key。
:::

## 2. 基础调用示例

下面示例都调用 OpenAI 兼容的 `chat/completions` 接口。你可以点击代码块上方的标签切换语言。

::: code-group

```bash [curl]
curl https://tokenflux.cloud/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer sk-xxxxxxxxxxxxxxxxxxxxxxxx" \
  -d '{
    "model": "gpt-4o-mini",
    "messages": [
      {
        "role": "system",
        "content": "你是一个简洁、可靠的中文助手。"
      },
      {
        "role": "user",
        "content": "用一句话介绍 TokFlux。"
      }
    ],
    "temperature": 0.7
  }'
```

```js [Node.js]
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.TOKFLUX_API_KEY,
  baseURL: "https://tokenflux.cloud/v1"
});

const completion = await client.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [
    { role: "system", content: "你是一个简洁、可靠的中文助手。" },
    { role: "user", content: "写一个三行的产品介绍。" }
  ],
  temperature: 0.7
});

console.log(completion.choices[0]?.message?.content);
```

```python [Python]
import os
from openai import OpenAI

client = OpenAI(
    api_key=os.environ.get("TOKFLUX_API_KEY"),
    base_url="https://tokenflux.cloud/v1",
)

completion = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": "你是一个简洁、可靠的中文助手。"},
        {"role": "user", "content": "给我 3 条 API 接入注意事项。"},
    ],
    temperature=0.7,
)

print(completion.choices[0].message.content)
```

```java [Java]
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class TokFluxExample {
    public static void main(String[] args) throws Exception {
        String apiKey = System.getenv("TOKFLUX_API_KEY");

        String body = """
            {
              "model": "gpt-4o-mini",
              "messages": [
                {
                  "role": "system",
                  "content": "你是一个简洁、可靠的中文助手。"
                },
                {
                  "role": "user",
                  "content": "用一句话介绍 TokFlux。"
                }
              ],
              "temperature": 0.7
            }
            """;

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://tokenflux.cloud/v1/chat/completions"))
            .header("Content-Type", "application/json")
            .header("Authorization", "Bearer " + apiKey)
            .POST(HttpRequest.BodyPublishers.ofString(body))
            .build();

        HttpClient client = HttpClient.newHttpClient();
        HttpResponse<String> response = client.send(
            request,
            HttpResponse.BodyHandlers.ofString()
        );

        System.out.println(response.body());
    }
}
```

:::

返回结果通常包含 `choices`，文本内容在：

```text
choices[0].message.content
```

## 3. 安装依赖

不同语言的依赖安装方式如下。

::: code-group

```bash [Node.js]
npm install openai
```

```bash [Python]
pip install openai
```

```text [Java]
Java 示例使用 JDK 自带的 HttpClient，不需要额外安装依赖。
建议使用 JDK 17 或更新版本运行示例。
```

:::

## 4. 设置环境变量

推荐把 API Key 放到环境变量里，避免直接写进代码。

::: code-group

```powershell [Windows PowerShell]
$env:TOKFLUX_API_KEY="sk-xxxxxxxxxxxxxxxxxxxxxxxx"
```

```bash [macOS / Linux]
export TOKFLUX_API_KEY="sk-xxxxxxxxxxxxxxxxxxxxxxxx"
```

:::

## 5. 流式输出示例

如果你希望边生成边显示结果，可以开启 `stream: true`。

::: code-group

```bash [curl]
curl https://tokenflux.cloud/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer sk-xxxxxxxxxxxxxxxxxxxxxxxx" \
  -d '{
    "model": "gpt-4o-mini",
    "messages": [
      {
        "role": "user",
        "content": "用 5 个要点说明 API 中转站的作用。"
      }
    ],
    "stream": true
  }'
```

```js [Node.js]
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.TOKFLUX_API_KEY,
  baseURL: "https://tokenflux.cloud/v1"
});

const stream = await client.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [
    { role: "user", content: "用 5 个要点说明 API 中转站的作用。" }
  ],
  stream: true
});

for await (const chunk of stream) {
  const content = chunk.choices[0]?.delta?.content || "";
  process.stdout.write(content);
}
```

```python [Python]
import os
from openai import OpenAI

client = OpenAI(
    api_key=os.environ.get("TOKFLUX_API_KEY"),
    base_url="https://tokenflux.cloud/v1",
)

stream = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "user", "content": "用 5 个要点说明 API 中转站的作用。"}
    ],
    stream=True,
)

for chunk in stream:
    content = chunk.choices[0].delta.content or ""
    print(content, end="")
```

:::

## 6. 查看模型列表

如果服务端支持模型列表接口，可以通过下面的方式查看可用模型：

::: code-group

```bash [curl]
curl https://tokenflux.cloud/v1/models \
  -H "Authorization: Bearer sk-xxxxxxxxxxxxxxxxxxxxxxxx"
```

```js [Node.js]
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.TOKFLUX_API_KEY,
  baseURL: "https://tokenflux.cloud/v1"
});

const models = await client.models.list();
console.log(models.data);
```

```python [Python]
import os
from openai import OpenAI

client = OpenAI(
    api_key=os.environ.get("TOKFLUX_API_KEY"),
    base_url="https://tokenflux.cloud/v1",
)

models = client.models.list()
print(models.data)
```

:::

实际可用模型以 TokFlux 控制台或接口返回为准。

## 7. 常见问题

### 401 Unauthorized

通常是 API Key 不正确、已失效，或者请求头没有正确传入。

检查：

- `Authorization` 是否是 `Bearer sk-...`
- API Key 是否来自 TokFlux
- 环境变量是否在当前终端生效

### 404 Not Found

通常是请求地址写错。

请确认基础地址是：

```text
https://tokenflux.cloud/v1
```

如果使用 SDK，不要把完整接口路径写进 `baseURL`。例如 Node.js SDK 里应写：

```js
baseURL: "https://tokenflux.cloud/v1"
```

不要写成：

```js
baseURL: "https://tokenflux.cloud/v1/chat/completions"
```

### model not found

通常是模型名称不可用或拼写错误。请在 TokFlux 控制台确认模型名称，然后把请求里的 `model` 改成实际可用的模型。

### 请求超时

可以尝试：

- 换一个模型
- 减少输入内容长度
- 降低 `max_tokens`
- 检查本地网络或代理设置

## 8. 最小可用请求格式

如果只想确认 API 是否可用，可以先用这个最小请求测试：

```json
{
  "model": "gpt-4o-mini",
  "messages": [
    {
      "role": "user",
      "content": "你好"
    }
  ]
}
```

只要请求地址、API Key 和模型名称都正确，就可以得到模型返回。
