# 一. 配置Node环境

## 1. 检查电脑有没有Node环境
1. 打开终端（命令行工具）
- Windows：按 Win + R，输入 cmd 或 powershell，回车
- macOS：打开「终端」（Terminal）
- Linux：打开终端（如 GNOME Terminal）

2. 依次运行以下命令：
```bash
node -v   
```
- 如果返回类似 v20.12.0、v18.17.0 的版本号 → 已安装 Node.js
- 如果提示 'node' 不是内部或外部命令（Windows）或 command not found: node（Mac/Linux）→ 未安装

再运行：
```bash
npm -v
```
- 如果有版本号（如 10.5.0）→ npm 也已安装（通常随 Node 一起安装）
- 如果报错 → 可能只装了 Node 但没装 npm（极少见）

3. 若运行以下命令,发现都未安装，则需要安装Node环境
```bash
node -v   # 查看 Node 版本
npm -v    # 查看 npm 版本
```

# 二. 安装Node
## 2.下载并安装Node.js

- 访问官网：打开浏览器，进入 Node.js 官方中文网:https://nodejs.org/zh-cn/download
- 选择版本:推荐建议下载 Windows 安装程序(.msi),这个版本适合新手安装,操作方便
- 运行安装程序：下载完成后，双击安装包（Windows 系统为 .msi 文件，Mac 系统为 .pkg 文件）。
- 在安装向导中，全程点击“下一步”保持默认选项即可。注意：务必确保勾选了 “Add to PATH”（添加到环境变量）这一项，这样你才能在命令行里直接使用它。

## 3. 验证Node.js是否安装成功
- 运行以下命令,看Node是否安装成功
```bash
node -v   # 查看 Node 版本
npm -v    # 查看 npm 版本
```
- 如果有版本号,代表已安装成功！
- 接下来就可以安装插件了！