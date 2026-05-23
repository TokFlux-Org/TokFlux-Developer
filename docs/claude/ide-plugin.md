# 安装使用 Claude IDE 插件教程

Claude IDE 插件可以把 Claude Code 直接放到 VS Code 里使用。安装后，你可以在编辑器里让 Claude 读取当前项目、理解打开的文件、根据选中的代码回答问题，也可以让它修改代码并查看变更。

## 1. 准备工作

安装前先确认电脑里已经有：

- VS Code
- 可以正常访问网络
- 配置好[Claude 中转配置](/docs/setup/claude-gateway)
- 已经安装好 Claude CLI

如果还没有安装 Claude CLI，可以先看：[安装使用 Claude CLI](/docs/claude/cli)

## 2. 在 VS Code 中安装 Claude 插件

### 方法一：在扩展市场搜索安装

1. 打开 VS Code。
2. 点击左侧的“扩展”图标。
3. 在搜索框中输入：

```text
Claude Code
```

4. 找到插件：

```text
Claude Code
```

5. 确认发布者是：

```text
Anthropic
```

6. 点击 `Install` 安装。

### 方法二：使用命令快速安装

在 VS Code 中按 `Ctrl + P`，输入下面命令后回车：

```text
ext install anthropic.claude-code
```

这个 `anthropic.claude-code` 就是 Claude IDE 插件在 VS Code Marketplace 里的扩展 ID。

## 3. 打开 Claude 插件

安装完成后，VS Code 侧边栏会出现 Claude 图标。

如果没有看到 Claude：

1. 先重启 VS Code。
2. 再检查左侧或右侧侧边栏里是否出现 Claude。
3. 如果还是没有，打开扩展页面确认插件是否已经启用。

也可以在 VS Code 中按 `Ctrl + Shift + P`，输入：

```text
Claude Code
```

查看 Claude Code 相关命令。

## 4. 登录 Claude

配置好[Claude 中转配置](/docs/setup/claude-gateway)之后，通常就可以直接使用 TokFlux API。

如果插件提示登录或鉴权，根据提示完成登录；如果你使用的是 TokFlux API，请优先检查 `settings.json` 里的配置是否已经正确保存。

## 5. 在项目中使用 Claude

配置完成后，建议这样使用：

1. 在 VS Code 里打开你的项目文件夹。
2. 打开一个你想让 Claude 理解的代码文件。
3. 点击侧边栏里的 Claude。
4. 在输入框里描述你想做的事情。

示例：

```text
帮我解释这个文件的作用
```

```text
帮我检查这段代码有没有问题
```

```text
帮我给这个函数加上中文注释
```

```text
帮我根据当前文件修复报错
```

## 6. 常用功能

Claude IDE 插件通常可以配合 Claude Code 完成这些事情：

- `Chat`：适合先提问、解释代码、讨论方案。
- `Edit`：适合让 Claude 修改当前文件或选中的代码。
- `Agent`：适合让 Claude 理解整个项目，并按你的要求修改多个文件。
- `Checkpoints`：Claude 修改代码后，可以通过检查点查看或回退之前的变更。

新手建议先从提问和小范围修改开始，等熟悉后再让 Claude 处理更复杂的项目任务。

## 7. 使用技巧

- 先打开相关文件，再向 Claude 提问，回答会更准确。
- 可以先选中一段代码，再让 Claude 解释或修改这段代码。
- 修改前可以先让 Claude 说明计划，再让它执行。
- Claude 改完代码后，建议自己再检查一遍 diff。
- 如果任务比较复杂，可以拆成多个小问题逐步完成。
- 如果 Claude 没有读取到项目内容，先确认 VS Code 打开的是项目文件夹。

## 8. 常见问题

### 看不到 Claude 图标

先重启 VS Code。  
如果还是没有，进入扩展页面确认 `Claude Code` 是否已经安装并启用。

### 提示找不到 Claude 命令

说明 Claude CLI 可能没有安装成功，或者 Node/npm 没有配置好。  
可以先在终端里运行：

```bash
claude --version
```

如果命令无法识别，需要重新安装 Claude CLI。

### 鉴权失败

检查 [Claude 中转配置](/docs/setup/claude-gateway) 是否正确。  
重点确认 `ANTHROPIC_AUTH_TOKEN` 是否填写为 TokFlux 的 API Key，`ANTHROPIC_BASE_URL` 是否填写正确。

### 插件没有读取到项目文件

确认你已经用 VS Code 打开了项目文件夹，而不是只打开了单个文件。

### Windows 能不能用

Claude Code 可以在 VS Code 中使用。  
如果 Windows 上提示找不到 Bash，需要先安装 Git for Windows，再重新打开 VS Code 和终端。

## 参考资料

- Claude Code IDE 集成文档：https://code.claude.com/docs/en/ide-integrations
- Claude Code VS Code 文档：https://code.claude.com/docs/en/vs-code
- VS Code Marketplace 插件页：https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code
