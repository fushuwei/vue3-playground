# Project Initialize

## 1. 项目初始化

```
cd vue3-playground
pnpm init
```

## 2. 创建 Monorepo 目录结构

```
mkdir -p apps/vue-basics
mkdir -p packages/utils
mkdir -p packages/ui
mkdir -p packages/core
```

## 3. 配置 pnpm 工作区

```
cat > pnpm-workspace.yaml << EOF
packages:
  - 'apps/*'
  - 'packages/*'
EOF
```

## 4. 安装 Turborepo

```
pnpm add turbo --save-dev --workspace-root
```

## 5. 配置 Turborepo

```
# 下载官方示例
# curl -o turbo.json https://raw.githubusercontent.com/vercel/turbo/main/examples/basic/turbo.json

# 手动创建
cat > turbo.json << EOF
{
  "$schema": "https://turborepo.com/schema.json",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    },
    "test": {
      "dependsOn": ["^build"],
      "outputs": []
    },
    "dev": {
      "persistent": true,
      "cache": false
    }
  }
}
EOF
```

## 6. 创建子项目

```
cd apps && pnpm create vue@latest vue-basics && cd vue-basics && pnpm install
```

## 7. 验证子项目

```
cd vue3-playground
pnpm --filter vue-basics dev
```

## 8. 配置 Turborepo 任务

编辑根目录的package.json

```
cat > package.json << EOF
{
  "name": "vue3-playground",
  "version": "1.0.0",
  "private": true,
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build",
    "lint": "turbo run lint",
    "test": "turbo run test"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "packageManager": "pnpm@10.19.0",
  "devDependencies": {
    "turbo": "^2.5.8"
  }
}
EOF
```

## 9. 运行 Turborepo

```
pnpm dev
```
