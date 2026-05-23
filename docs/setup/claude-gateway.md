# 配置 Claude 使用 TokFlux API

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

## 2.在CC Switch中配置claude
1.打开你下载的CC-Switch软件，你会看到如下图的初始界面
![Claude 配置步骤图](/images/1.png)

---

2.点击右上角的加号创建配置，如下图
![Claude  配置步骤图](/images/1.1.png)

---

3.进入如下界面
![Claude  配置步骤图](/images/2.1.png)

---

4.向下滑动，填写配置如图
![Claude  配置步骤图](/images/3.1.png)

- `供应商名称`：可以根据自己随意填写

- `官网链接`：https://tokenflux.cloud

- `API Key`：在 TokFlux 创建的API密钥

---

5.点击左下角的`高级选项`如下图！
![Claude 配置步骤图](/images/4.1.png)
![Claude  配置步骤图](/images/5.1.png)

6.点击一下`获取模型列表`获取一下模型
- `主模型`：根据自己选择
- `推理模型(Thinking)`：根据自己选择
- `Haiku 默认模型`：根据自己选择
- `Sonnet 默认模型`：根据自己选择
- `Opus 默认模型`：根据自己选择

选择完点击右下角的`添加`按钮！

---

7.当显示使用中就说明已经配置好了，就可以正常使用了。
![Claude 配置步骤图](/images/6.1.png)

## 方法二
<span style="color: red;">确保安装好了相应插件</span>

### 1. 安装 Claude CLI
1.运行一下，以下命令查看Claude是否安装好
```bash
claude --version
```

## 2. 找到 Claude 配置文件

Claude 的配置文件名是：

```text
settings.json
```

默认位置是：

```text
~/.claude/settings.json
```

在 Windows 电脑里，通常可以理解成：

```text
C:\Users\你的用户名\.claude\settings.json
```

你可以这样打开这个文件夹：

1. 按 `Win + R`
2. 输入 `%USERPROFILE%\.claude`
3. 点击回车

如果这个文件夹里还没有 `settings.json`，就新建一个文本文件，并把文件名改成：

```text
settings.json
```

也可以直接在终端里打开：

```bash
notepad %USERPROFILE%\.claude\settings.json
```

如果文件不存在，记事本会提示你创建，直接点“是”即可。

## 3. 修改 TokFlux 配置

打开 `settings.json` 后，填入下面这段：

```json
{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "API key",
    "ANTHROPIC_BASE_URL": "https://tokenflux.cloud",
    "ANTHROPIC_MODEL": "根据自己选择模型",
    "ANTHROPIC_REASONING_MODEL": "根据自己选择模型",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "根据自己选择模型",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "根据自己选择模型",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "根据自己选择模型"
  },
  "includeCoAuthoredBy": false,
  "theme": "dark"
}
```
## 4. 每个参数是什么意思

- `env`：这里用来配置 Claude CLI 运行时需要读取的环境变量。

- `ANTHROPIC_AUTH_TOKEN`：这里填写你在 TokFlux 创建的 API Key，例如 `sk-xxxxxxxxxxxxxxxxxxxxxxxx`。

- `ANTHROPIC_BASE_URL`：这里填写 TokFlux 的接口地址，表示 Claude 的请求会通过 TokFlux 转发。

- `ANTHROPIC_MODEL`：Claude 默认使用的主模型，根据自己在 TokFlux 支持的模型列表中选择填写。

- `ANTHROPIC_REASONING_MODEL`：Claude 使用推理能力时调用的模型，根据自己选择模型填写。

- `ANTHROPIC_DEFAULT_SONNET_MODEL`：Claude 默认的 Sonnet 模型，根据自己选择模型填写。

- `ANTHROPIC_DEFAULT_HAIKU_MODEL`：Claude 默认的 Haiku 模型，根据自己选择模型填写。

- `ANTHROPIC_DEFAULT_OPUS_MODEL`：Claude 默认的 Opus 模型，根据自己选择模型填写。

- `includeCoAuthoredBy`：是否在 Claude 生成的 Git 提交信息里自动添加 `Co-Authored-By` 信息，`false` 表示不添加。

- `theme`：Claude CLI 的显示主题，`dark` 表示使用深色主题。

修改完成后保存 `settings.json`，重新打开自己安装的插件

如果可以正常启动，并且没有提示鉴权错误、接口地址错误、密钥错误，说明配置基本已经生效。
