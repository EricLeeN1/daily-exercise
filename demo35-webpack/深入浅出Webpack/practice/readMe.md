#实战#

## 2. Es6 ##

    npm i -D babel-plugin-transform-runtime -> 减少冗余代码
    npm i -D babel-core babel-loader -> Webpack 接入 Babel 必须依赖的模块
    npm i -D babel-preset-env -> 根据你的需求选择不同的 Plugins 或 Presets

**Plugins**

    plugins属性告诉babel要是用那些插件，插件可以控制如何转换代码。

**Presets**

    这个属性告诉 Babel 要转换的源码使用了哪些新的语法特性，一个 Presets 对一组新语法特性提供支持，多个 Presets 可以叠加。 Presets 其实是一组 Plugins 的集合，每一个 Plugin 完成一个新语法的转换工作。

    1. 已经被写入ECMAScript的特性
        1. es2015包含在2015里加入的新特性；
        2. es2016包含在2016里加入的新特性；
        3. es2017包含在2017里加入的新特性；
        4. env包括当前所有ECMAScript标准里的最新特性。

    2. 被社区提出来的但还未被写入 ECMAScript 标准里特性
        1. stage0 只是一个美好激进的想法，有 Babel 插件实现了对这些特性的支持，但是不确定是否会被定为标准；
        2. stage1 值得被纳入标准的特性；
        3. stage2 该特性规范已经被起草，将会被纳入标准里；
        4. stage3 该特性规范已经定稿，各大浏览器厂商和 Node.js 社区开始着手实现；
        5. stage4 在接下来的一年将会加入到标准里去。

    3. 为了支持一些特定应用场景下的语法，和 ECMAScript 标准没有关系，例如 babel-preset-react 是为了支持 React 开发中的 JSX 语法。

## 3. TypeScript ##

    npm install -g typescript -> 安装编译器到全局
    npm i -D typescript awesome-typescript-loader -> 安装编译器
    你可以通过 tsc hello.ts 命令编译出 hello.js 和 hello.js.map 文件。

**集成 Webpack**

    通过 Loader 把 TypeScript 转换成 JavaScript。
    Webpack 在寻找模块对应的文件时需要尝试 ts 后缀。

## 4. Flow ##

    npm i -D flow-bin -> 

    Flow 是一个 Facebook 开源的 JavaScript 静态类型检测器，它是 JavaScript 语言的超集。

**使用Flow**

    运行 Flow 去检查代码。 Flow 检测器由高性能跨平台的 OCaml 语言编写，它的可执行文件可以通过。

    