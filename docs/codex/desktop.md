# 安装使用 Codex 桌面端教程

[下载 Codex 桌面端（OpenAI 官方页面）](https://openai.com/codex/)

也可以根据系统直接下载：

- [下载 Windows 版 Codex](https://get.microsoft.com/installer/download/9PLM9XGG6VKS?cid=website_cta_psi)
- [下载 macOS 版 Codex（Apple Silicon）](https://persistent.oaistatic.com/codex-app-prod/Codex.dmg)
- [下载 macOS 版 Codex（Intel）](https://persistent.oaistatic.com/codex-app-prod/Codex-latest-x64.dmg)

注意：Codex 桌面端不是 VS Code 插件，它是一个独立的桌面应用。安装完成后，可以把默认编辑器设置为 VS Code，这样 Codex 生成或修改的代码可以直接在 VS Code 中打开。

## 1. 安装前准备

安装前建议先准备好：

- 配置好[codex 中转配置](/docs/setup/codex-gateway)
- 一个可以正常打开的项目文件夹

OpenAI 官方文档说明，Codex 桌面端支持 macOS 和 Windows。Windows 版支持 PowerShell，并且可以使用 Windows 原生沙盒；如果你使用 WSL2，也可以在设置中切换。

## 2. 下载 Codex 桌面端

### Windows

1. 点击上方的 `下载 Windows 版 Codex`。
2. 跳转到 Microsoft Store 或安装器页面。
3. 按页面提示安装。

如果你更习惯命令行，也可以在终端中运行：

```bash
winget install Codex -s msstore
```

### macOS

1. 如果你的 Mac 是 M1、M2、M3、M4 等 Apple Silicon 芯片，下载 `Apple Silicon` 版本。
2. 如果你的 Mac 是 Intel 芯片，下载 `Intel` 版本。
3. 下载完成后打开 `.dmg` 文件。
4. 将 Codex 拖入 `Applications` 应用程序文件夹。
5. 从启动台或应用程序文件夹打开 Codex。

## 3. 登录 Codex

第一次打开 Codex 桌面端时，如果使用官方账号，需要登录。

如果已经配置好[codex 中转配置](/docs/setup/codex-gateway)，可以按中转配置使用 TokFlux API。

如果你有 ChatGPT Plus、Pro、Business、Edu 或 Enterprise 账号，推荐先用 ChatGPT 账号登录。官方文档也说明，使用 API Key 登录时，部分云端线程等功能可能不可用。

## 4. 添加项目

登录完成后，选择你要让 Codex 工作的项目文件夹。

操作步骤：

1. 打开 Codex 桌面端。
2. 点击添加项目或打开项目。
3. 选择本地代码项目文件夹。
4. 进入项目后，确认工作模式选择为 `Local`。
5. 在输入框里发送第一条任务。

可以这样问：

```text
帮我介绍一下这个项目的结构
```

```text
检查这个项目有没有明显的问题
```

```text
帮我给当前项目添加一个新页面
```

## 5. 设置默认编辑器为 VS Code

如果你想让 Codex 修改后的文件直接用 VS Code 打开，可以在 Codex 里设置默认编辑器。

操作步骤：

1. 打开 Codex 桌面端。
2. 进入 `Settings` 设置。
3. 找到 `Open In` 或默认编辑器相关选项。
4. 选择 `VS Code`。
5. 回到项目页面，打开 Codex 生成或修改的文件时，就可以跳转到 VS Code。

OpenAI 官方文档说明，Windows 版 Codex 可以选择默认打开应用，例如 Visual Studio、VS Code 或其他编辑器。不同项目也可以单独覆盖这个选择。

## 6. 在 VS Code 中配合使用

Codex 桌面端适合做多任务管理，VS Code 适合手动检查和继续编辑代码。

推荐流程：

1. 在 Codex 桌面端里选择项目。
2. 让 Codex 分析、修改或生成代码。
3. 在 Codex 的变更面板里查看 diff。
4. 点击打开文件。
5. 用 VS Code 检查代码。
6. 确认没问题后再提交到 Git。

这样做的好处是：Codex 负责执行任务，VS Code 负责你最终检查和调整。

## 7. Windows 使用建议

Windows 版 Codex 支持 PowerShell。官方文档还提到，Codex 可以使用 Windows 原生沙盒，也可以配置成使用 WSL2。

新手建议先使用默认设置：

- 终端选择 PowerShell
- 项目放在 Windows 文件系统里，例如 `D:\code\my-project`
- 先不要开启 Full Access
- 让 Codex 在默认权限下工作

如果项目在 WSL2 里，可以在 Codex 设置中切换到 WSL 模式，然后重启 Codex。

## 8. 常见问题

### 打不开 Codex

先确认系统版本是否支持，并重新安装一次。Windows 用户可以在 Microsoft Store 中检查更新。

### 不知道该用桌面端还是 VS Code 插件

- 想管理多个任务、多个项目、多个 agent：用 Codex 桌面端。
- 想在编辑器里边看代码边问问题：用 Codex IDE 插件。
- 想在终端里操作：用 Codex CLI。

## 参考资料

- OpenAI Codex 官方页面：https://openai.com/codex/
- OpenAI Codex App 文档：https://developers.openai.com/codex/app
- OpenAI Codex Windows 文档：https://developers.openai.com/codex/app/windows
