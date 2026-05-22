# 安装使用 Codex IDE 插件教程

Codex IDE 插件可以把 Codex 直接放到 VS Code 侧边栏里使用。安装后，你可以在编辑器里让 Codex 读取当前项目、理解打开的文件、根据选中的代码回答问题，也可以让它修改代码并预览变更。

## 1. 准备工作

安装前先确认电脑里已经有：

- VS Code
- 可以正常访问网络
- 配置好[codex 中转配置](/docs/pz/codex_a)



## 2. 在 VS Code 中安装 Codex 插件

### 方法一：在扩展市场搜索安装

1. 打开 VS Code。
2. 点击左侧的“扩展”图标。
3. 在搜索框中输入：

```text
Codex
```

4. 找到插件：

```text
Codex - OpenAI's coding agent
```

5. 确认发布者是：

```text
OpenAI
```

6. 点击 `Install` 安装。

### 方法二：使用命令快速安装

在 VS Code 中按 `Ctrl + P`，输入下面命令后回车：

```text
ext install openai.chatgpt
```

这个 `openai.chatgpt` 就是 Codex IDE 插件在 VS Code Marketplace 里的扩展 ID。

## 3. 打开 Codex 插件

安装完成后，VS Code 侧边栏会出现 Codex 图标。

如果没有看到 Codex：

1. 先重启 VS Code。
2. 再检查左侧或右侧侧边栏里是否出现 Codex。
3. 如果还是没有，打开扩展页面确认插件是否已经启用。



## 4. 登录 Codex

配置好[codex 中转配置](/docs/pz/codex_a)就不需要登录

## 5. 在项目中使用 Codex

配置完成后，建议这样使用：

1. 在 VS Code 里打开你的项目文件夹。
2. 打开一个你想让 Codex 理解的代码文件。
3. 点击侧边栏里的 Codex。
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

## 6. 常用模式

Codex IDE 插件通常会根据你的选择进入不同工作方式：

- `Chat`：适合先提问、解释代码、讨论方案。
- `Agent`：适合让 Codex 修改项目里的文件。
- `Agent Full Access`：权限更大，适合需要运行命令、安装依赖、联网处理的任务，使用时要更谨慎。

新手建议先用 `Chat` 或普通 `Agent`，等熟悉后再使用更高权限模式。

## 7. 使用技巧

- 先打开相关文件，再向 Codex 提问，回答会更准确。
- 可以先选中一段代码，再让 Codex 解释或修改这段代码。
- 修改前可以先让 Codex 说明计划，再让它执行。
- Codex 改完代码后，建议自己再检查一遍 diff。
- 如果任务比较复杂，可以拆成多个小问题逐步完成。

## 8. 常见问题

### 看不到 Codex 图标

先重启 VS Code。  
如果还是没有，进入扩展页面确认 `Codex - OpenAI's coding agent` 是否已经安装并启用。

### 登录失败

检查网络是否正常，或者换一种登录方式。  
如果用 API Key 登录，要确认 API Key 没有填错。

### 插件没有读取到项目文件

确认你已经用 VS Code 打开了项目文件夹，而不是只打开了单个文件。

### Windows 能不能用

OpenAI 官方文档说明，Codex IDE 集成支持 macOS、Windows 和 Linux。Windows 下可以原生运行；如果你需要 Linux 原生环境，也可以使用 WSL2。

## 参考资料

- OpenAI Codex IDE extension 文档：https://developers.openai.com/codex/ide
- VS Code Marketplace 插件页：https://marketplace.visualstudio.com/items?itemName=openai.chatgpt
- OpenAI Codex 使用说明：https://help.openai.com/en/articles/11369540/
