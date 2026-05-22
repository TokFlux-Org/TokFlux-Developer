# 安装使用Claude CLI

注意：安装配置前一定要先把 [Node 环境配置](/docs/pz/node_a) 配置好，Claude CLI 需要 Node.js 18 及以上版本

## 1.安装
1. win+R 输入cmd回车:   输入以下命令安装


```bash
npm install -g @anthropic-ai/claude-code --registry=https://registry.npmmirror.com
```

安装成功之后需要去[Claude 中转配置](/docs/pz/claude_a)配置环境，才可以使用 TokenFlux API

安装成功之后可以输入以下命令检查安装状态

```bash
claude doctor
```

## 2.使用
配置好环境之后: win+R 输入cmd回车: 输入以下命令进入Claude CLI界面

```bash
claude
```

输入你好，有回复代表配置成功可以正常使用了
