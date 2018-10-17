# miao



## 快速入门

<!-- 在此次添加使用文档 -->

如需进一步了解，参见 [egg 文档][egg]。

### 本地开发

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### 部署

```bash
$ npm start
$ npm stop
```

### 单元测试

- [egg-bin] 内置了 [mocha], [thunk-mocha], [power-assert], [istanbul] 等框架，让你可以专注于写单元测试，无需理会配套工具。
- 断言库非常推荐使用 [power-assert]。
- 具体参见 [egg 文档 - 单元测试](https://eggjs.org/zh-cn/core/unittest)。

### 内置指令

- 使用 `npm run lint` 来做代码风格检查。
- 使用 `npm test` 来执行单元测试。
- 使用 `npm run autod` 来自动检测依赖更新，详细参见 [autod](https://www.npmjs.com/package/autod) 。


[egg]: https://eggjs.org

# 1. 初始化

## 1. 安装依赖

    npm install egg-sequelize mysql2 sequelize-cli

## 2. 配置sequelize

    在package.json添加一些脚本，构建数据库ORM

## 3. 配置plugin.js启动插件

    config/plugin.js

## 4. config.default.js配置如何连接数据库

    config/config.default.js

#2. 准备数据库配置

## 1. 创建.sequelizerc