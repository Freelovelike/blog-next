---
title: "使用 Docker 部署 Next.js 应用"
description: "完整的 Docker 容器化部署教程，从 Dockerfile 编写到 GitHub Actions 自动化部署。"
date: "2024-12-21"
tags: ["Docker", "部署", "DevOps", "CI/CD"]
author: "博主"
cover: "/images/posts/docker.jpg"
---

## 为什么选择 Docker？

在现代应用部署中，Docker 已经成为标配。它带来的好处包括：

- 🔄 **环境一致性** - 开发、测试、生产环境完全相同
- 📦 **依赖隔离** - 避免依赖冲突
- 🚀 **快速部署** - 一键启动，秒级部署

## Dockerfile 编写

这是一个优化后的多阶段构建 Dockerfile：

```dockerfile
# 阶段1: 安装依赖
FROM oven/bun:1 AS deps
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# 阶段2: 构建应用
FROM oven/bun:1 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build

# 阶段3: 生产运行
FROM oven/bun:1 AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["bun", "server.js"]
```

### 关键优化点

1. **多阶段构建** - 最终镜像只包含必要文件
2. **使用 Bun** - 更快的安装和运行速度
3. **Standalone 输出** - 减小镜像体积

## Docker Compose 配置

```yaml
version: '3.8'

services:
  blog:
    build:
      context: .
      dockerfile: Dockerfile.bun
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

## GitHub Actions 自动化

配置 CI/CD 流水线实现自动部署：

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Deploy to Server
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          key: ${{ secrets.SSH_KEY }}
          script: |
            cd /opt/blog
            docker compose pull
            docker compose up -d --build
```

## 常用命令

```bash
# 构建镜像
docker build -t my-blog -f Dockerfile.bun .

# 启动容器
docker compose up -d

# 查看日志
docker compose logs -f

# 重新构建并启动
docker compose up -d --build
```

## 总结

通过 Docker 容器化，我们实现了：

- ✅ 一致的运行环境
- ✅ 自动化部署流程
- ✅ 便捷的回滚机制
- ✅ 资源隔离与管理

如果你也在考虑容器化部署，希望这篇文章能给你一些参考！
