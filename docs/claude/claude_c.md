# 安装使用 Claude 桌面端教程

[下载 Claude 桌面端（Anthropic 官方页面）](https://claude.com/download)

注意：Claude 桌面端不是 VS Code 插件，它是一个独立的桌面应用。安装完成后，可以直接在桌面端和 Claude 对话，也可以使用桌面端的文件、扩展和 MCP 等能力。

## 1. 安装前准备

安装前建议先准备好：

- 一个可以正常使用的 Claude 账号
- 可以正常访问网络
- 如果要写代码，建议同时安装 VS Code

如果你是要在命令行或 VS Code 里使用 Claude Code，可以先配置好[Claude 中转配置](/docs/pz/claude_a)。  
Claude 桌面端本身通常需要登录 Claude 账号，TokFlux 配置主要用于 Claude CLI 和 Claude IDE 插件。

## 2. 下载 Claude 桌面端

### Windows

1. 点击上方的 `下载 Claude 桌面端（Anthropic 官方页面）`。
2. 在下载页面选择 Windows 版本。
3. 下载完成后，打开安装包。
4. 按页面提示完成安装。
5. 从开始菜单打开 Claude。

### macOS

1. 点击上方的 `下载 Claude 桌面端（Anthropic 官方页面）`。
2. 在下载页面选择 macOS 版本。
3. 下载完成后打开 `.dmg` 文件。
4. 将 Claude 拖入 `Applications` 应用程序文件夹。
5. 从启动台或应用程序文件夹打开 Claude。

## 3. 登录 Claude

第一次打开 Claude 桌面端时，需要登录 Claude 账号。

操作步骤：

1. 打开 Claude 桌面端。
2. 点击登录按钮。
3. 按提示使用 Claude 账号登录。
4. 登录成功后进入 Claude 桌面端主界面。

如果无法登录，先检查网络是否正常，或者在浏览器里打开 Claude 官网确认账号是否可以正常使用。

## 4. 开始使用 Claude 桌面端

登录完成后，就可以直接在输入框里向 Claude 提问。

可以这样问：

```text
帮我总结这段文字
```

```text
帮我写一份学习计划
```

```text
帮我解释这段代码的作用
```

```text
帮我把这段内容改得更清楚
```

## 5. 上传文件使用

Claude 桌面端可以上传文件，让 Claude 帮你阅读、总结或分析。

操作步骤：

1. 打开 Claude 桌面端。
2. 点击输入框旁边的附件或上传按钮。
3. 选择本地文件。
4. 上传完成后，在输入框里说明你想让 Claude 做什么。

示例：

```text
帮我总结这个文档的主要内容
```

```text
帮我检查这个表格里有哪些问题
```

```text
帮我把这个文件整理成中文要点
```

## 6. 桌面端和 VS Code 配合使用

Claude 桌面端适合做资料整理、文档处理、长文本分析和日常对话。  
如果你想让 Claude 直接读取和修改项目代码，建议使用 Claude IDE 插件或 Claude CLI。

推荐流程：

1. 在 VS Code 里打开项目。
2. 用 Claude IDE 插件或 Claude CLI 处理代码任务。
3. 用 Claude 桌面端整理需求、说明文档、报错信息或开发思路。
4. 重要代码修改完成后，自己再检查一遍 diff。

这样做的好处是：Claude 桌面端负责整理和分析，VS Code 负责代码编辑和项目检查。

## 7. Windows 使用建议

Windows 用户建议：

- 只从 Claude 官方下载页面下载安装包
- 安装完成后从开始菜单打开 Claude
- 如果打不开，先重启电脑再试
- 如果提示网络错误，先检查网络和代理设置
- 不要从不明网站下载所谓的 Claude 安装包

如果你要在 Windows 上使用 Claude Code，还需要安装 Node.js 和 Git for Windows，并配置好[Claude 中转配置](/docs/pz/claude_a)。

## 8. 常见问题

### 打不开 Claude

先确认安装包是从 Claude 官方下载页面获取的。  
如果还是打不开，可以重新下载安装一次，或者重启电脑后再试。

### 登录失败

先确认网络是否正常。  
也可以在浏览器里打开 Claude 官网，检查账号是否能正常登录。

### 桌面端能不能直接修改代码

Claude 桌面端主要适合对话、文档、文件分析和扩展能力。  
如果要直接修改项目代码，建议使用 [Claude IDE 插件](/docs/claude/claude_b) 或 [Claude CLI](/docs/claude/claude_a)。

### 不知道该用桌面端还是 VS Code 插件

- 想处理文档、资料、日常对话：用 Claude 桌面端。
- 想在编辑器里边看代码边问问题：用 Claude IDE 插件。
- 想在终端里操作项目：用 Claude CLI。

### Windows 能不能用

Claude 官方下载页面提供 Windows 和 macOS 版本。  
如果你使用 Linux，可以优先使用 Claude 网页版、Claude CLI 或 Claude IDE 插件。

## 参考资料

- Claude 官方下载页面：https://claude.com/download
- Anthropic Claude Desktop 安装说明：https://support.anthropic.com/en/articles/10065433-installing-claude-desktop
