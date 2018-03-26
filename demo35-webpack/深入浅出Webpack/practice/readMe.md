#实战#

## 1. Es6 ##

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

## 2. TypeScript ##

    npm install -g typescript -> 安装编译器到全局
    npm i -D typescript awesome-typescript-loader -> 安装编译器
    你可以通过 tsc hello.ts 命令编译出 hello.js 和 hello.js.map 文件。

**集成 Webpack**

    通过 Loader 把 TypeScript 转换成 JavaScript。
    Webpack 在寻找模块对应的文件时需要尝试 ts 后缀。

## 3. Flow ##

    npm i -D flow-bin -> 
    npm i -D babel-preset-flow -> 

    Flow 是一个 Facebook 开源的 JavaScript 静态类型检测器，它是 JavaScript 语言的超集。

**使用Flow**

    运行 Flow 去检查代码。 Flow 检测器由高性能跨平台的 OCaml 语言编写，它的可执行文件可以通过。

**集成Webpack**

## 4. SCSS ##

    npm i -D  sass-loader css-loader style-loader -> 安装webpack loader依赖
    npm i -D node-sass -> sass-loader依赖node-sass

    1. 通过 sass-loader 把 SCSS 源码转换为 CSS 代码，再把 CSS 代码交给 css-loader 去处理。
    2. css-loader 会找出 CSS 代码中的 @import 和 url() 这样的导入语句，告诉 Webpack 依赖这些资源。同时还支持 CSS Modules、压缩 CSS 等功能。处理完后再把结果交给 style-loader 去处理。
    3. style-loader 会把 CSS 代码转换成字符串后，注入到 JavaScript 代码中去，通过 JavaScript 去给 DOM 增加样式。如果你想把 CSS 代码提取到一个单独的文件而不是和 JavaScript 混在一起，可以使用1-5 使用Plugin 中介绍过的 ExtractTextPlugin。

## 5. PostCSS ##

    npm i -D postcss-loader css-loader style-loader ->
安装 Webpack Loader 依赖
    npm i -D postcss-cssnext -> 安装对应的 PostCSS 插件依赖

## 6. React与Babel ##

    npm i -D react react-dom -> 安装react基础依赖
    npm i -D babel-preset-react -> 安装babel完成语法转换所需依赖
    npm i react react-dom @types/react @types/react-dom

## 7. Vue ##

    npm i -S vue -> Vue 框架运行需要的库
    npm i -D vue-loader css-loader vue-template-compiler -> 构建所需要的依赖
    npm i -D ts-loader typescript

## 19. 加载图片 ##

    npm i -D file-loader -> 把 JavaScript 和 CSS 中导入图片的语句替换成正确的地址，并同时把文件输出到对应的位置。
    npm i -D imagemin-webpack-plugin  -> 压缩图片
    npm i -D url-loader ->  url-loader 会把根据图片内容计算出的 base64 编码的字符串直接注入到代码中
    npm i -D webpack-spritesmith -> 制作雪碧图
## 20. 加载SVG ##

    1. file-loader -> 用法同加载图片
    2. npm i -D raw-loader -> 可以把文本文件的内容读取出来，注入到 JavaScript 或 CSS 中去。
    3. npm i -D svg-inline-loader -> svg-inline-loader 增加了对 SVG 的压缩功能。

## 21. 加载Source Map ##

    1. 开发环境下把devtool设置成cheap-module-eval-source-map -> 因为生成这种 Source Map 的速度最快，能加速构建。由于在开发环境下不会做代码压缩，Source Map 中即使没有列信息也不会影响断点调试；
    2. 生产环境下把 devtool 设置成 hidden-source-map，是生成最详细的 Source Map，但不会把 Source Map 暴露出去。
    3. npm i -D source-map-loader 加载现有的map资源时需要的依赖。

