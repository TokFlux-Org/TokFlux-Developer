# 配置 Codex 使用 TokFlux API

注意：配置前一定要先把 [Node 环境配置](/docs/setup/node) 配置好和<span style="color: red;">使用的相应插件安装好</span>。  

<span style="color: red;">推荐使用：方法一</span>，用CC-Switch修改配置文件的方式配置相应工具使用 TokFlux API。

## 方法一 
### 1.安装CC Switch
CC Switch 下载链接： 

[下载(windows) cc-switch.exe](/app/cc-switch.exe)

<a href="/app/CC-Switch-v3.15.0-macOS.dmg" download target="_blank" rel="noopener">
  下载(macOS) cc-switch.dmg
</a>

点击对应版本下载

## 2.在CC Switch中配置codex
1.打开你下载的CC-Switch软件，你会看到如下图的初始界面
![Codex 配置步骤图](/images/1.png)

---

2.在分组条中，将分组选择“codex”
![Codex 配置步骤图](/images/2.png)

---

3.点击右上角的加号创建配置，如下图
![Codex 配置步骤图](/images/3.png)

---

4.进入如下界面
![Codex 配置步骤图](/images/4.png)

---

5.向下滑动，填写配置如图
![Codex 配置步骤图](/images/5.png)

- `供应商名称`：可以根据自己随意填写

- `官网链接`：https://tokenflux.cloud

- `API Key`：在 TokFlux 创建的API密钥

- `API 请求地址`：https://tokenflux.cloud/v1

- 向下拉点击获取模型列表，选定使用的模型后点击右下角的添加按钮更新到config.toml中

---

6.添加成功后，在主界面会看到我们配置的分组，在右侧点击“启用”按钮，显示“使用中”，则配置完成
![Codex 配置步骤图](/images/6.png)

配置完成之后就可以直接使用相应的工具了

## 方法二 
<span style="color: red;">确保安装好了相应插件</span>

### 1. 安装 Codex CLI


Windows 按 `Win + R`，输入 `cmd` 后回车，然后执行：

```bash
npm install -g @openai/codex --registry=https://registry.npmmirror.com
```

安装完成后，可以先执行下面命令，确认已经安装成功：

```bash
codex --version
```

## 2. 找到 Codex 配置文件

Codex 的配置文件名是：

```text
config.toml
```

默认位置是：

```text
~/.codex/config.toml
```

在 Windows 电脑里，通常可以理解成：

```text
C:\Users\你的用户名\.codex\config.toml
```

你可以这样打开这个文件夹：

1. 按 `Win + R`
2. 输入 `%USERPROFILE%\.codex`
3. 点击回车

如果这个文件夹里还没有 `config.toml`，就新建一个文本文件，并把文件名改成：

```text
config.toml
```

也可以直接在终端里打开：

```bash
notepad %USERPROFILE%\.codex\config.toml
```

如果文件不存在，记事本会提示你创建，直接点“是”即可。

## 3. 修改 TokFlux 配置

打开 `config.toml` 后，填入下面这段：

```toml
model_provider = "custom"
model = "gpt-5.4"
model_reasoning_effort = "high"
disable_response_storage = true

[model_providers.custom]
name = "custom"
wire_api = "responses"
requires_openai_auth = false
base_url = "https://tokenflux.cloud/v1"
api_key = "sk-xxxxxxxxxxxxxxxxxxxxxxxx"
```

## 4. 每个参数是什么意思

- `model_provider = "custom"`：告诉 Codex 使用你下面定义的这个自定义提供商。
- `model = "gpt-5.4"`：表示默认使用的模型是 `gpt-5.4`。
- `model_reasoning_effort = "high"`：表示让模型使用较高的推理强度。
- `disable_response_storage = true`：表示关闭响应存储。
- `name = "custom"`：这是这个自定义提供商的名称。
- `wire_api = "responses"`：表示使用 Responses API 方式请求模型。
- `requires_openai_auth = false`：表示这里不使用 OpenAI 官方登录鉴权，而是使用你自己的 TokFlux API Key。
- `base_url = "https://tokenflux.cloud/v1"`：表示请求会通过这个 TokFlux 接口地址转发。
- `api_key = "sk-xxxxxxxxxxxxxxxxxxxxxxxx"`：表示把 TokFlux 的 API Key 直接写在配置文件里。

## 5. 配置 TokFlux API Key

这里可以有两种方式：

#### 方式一：直接把 API Key 写死在配置文件里

如果你想直接写在 `config.toml` 里，可以这样写：

```toml
[model_providers.custom]
name = "custom"
wire_api = "responses"
requires_openai_auth = false
base_url = "https://tokenflux.cloud/v1"
api_key = "sk-xxxxxxxxxxxxxxxxxxxxxxxx"
```

这种方式最直接，保存后就可以使用。  
但缺点是 `API Key` 会明文保存在配置文件里。

#### 方式二：从环境变量里读取 API Key

如果你不想把密钥直接写进 `config.toml`，可以改成这样：

```toml
[model_providers.custom]
name = "custom"
wire_api = "responses"
requires_openai_auth = false
base_url = "https://tokenflux.cloud/v1"
env_key = "TokFlux_API_KEY"
env_key_instructions = "请先配置 TokFlux 的 API Key"
```

然后在 Windows 里配置环境变量。

##### CMD

```bash
setx TokFlux_API_KEY "sk-xxxxxxxxxxxxxxxxxxxxxxxx"
```

##### PowerShell

```powershell
[Environment]::SetEnvironmentVariable("TokFlux_API_KEY", "sk-xxxxxxxxxxxxxxxxxxxxxxxx", "User")
```

设置完成后：

1. 关闭当前终端
2. 重新打开一个新的终端
3. 再运行 `codex`


## 6. 配置完成后怎么测试

保存好 `config.toml` 并重新打开终端后，输入：

```bash
codex
```

如果可以正常启动，并且没有提示鉴权错误、接口地址错误、密钥错误，说明配置基本已经生效。

## 7. 常见问题

- 如果提示找不到 `codex` 命令，说明 Codex CLI 可能没有安装成功，或者 Node/npm 没有配置好。
- 如果提示 `401`、`unauthorized`、`invalid api key`，一般就是 `TokFlux API Key` 填错了，或者环境变量没有生效。
- 如果修改后没有生效，先确认你改的是 `C:\Users\你的用户名\.codex\config.toml` 这份文件。
