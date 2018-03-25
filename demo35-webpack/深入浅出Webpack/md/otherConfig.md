# 其他配置项 #

## 1. Target ##

    target配置项可以让webpack构建出针对不同运行环境的代码。

1. web    针对浏览器(默认)，所有代码都集中在一个文件里
2. node    针对Node.js,使用require语句加载Chunk代码
3. async-node    针对Node.js，异步加载Chunk代码
4. webworker    针对WebWorker
5. electron-main    针对Electron主线程
6. electron-renderer    针对Electron渲染线程

当你设置 target:'node' 时，源代码中导入 Node.js 原生模块的语句 require('fs') 将会被保留，fs 模块的内容不会打包进 Chunk 里

## 2. Devtool ##

    devtool 配置 Webpack 如何生成 Source Map，默认值是 false 即不生成 Source Map，想为构建出的代码生成 Source Map 以方便调试，可以这样配置：
    `devtool: 'source-map'`

## 3. Watch和WatchOptions ##

    前面介绍过 Webpack 的监听模式，它支持监听文件更新，在文件发生变化时重新编译。在使用 Webpack 时监听模式默认是关闭的，想打开需要如下配置：
    `watch: true`
    在使用 DevServer 时，监听模式默认是开启的。
    除此之外，Webpack 还提供了 watchOptions 配置项去更灵活的控制监听模式。

## 4. Externals ##

    Externals 用来告诉 Webpack 要构建的代码中使用了哪些不用被打包的模块，也就是说这些模版是外部环境提供的，Webpack 在打包时可以忽略它们。

    通过 externals 可以告诉 Webpack JavaScript 运行环境已经内置了那些全局变量，针对这些全局变量不用打包进代码中而是直接使用全局变量。 

## 5. ResolveLoader ##

    ResolveLoader 用来告诉 Webpack 如何去寻找 Loader，因为在使用 Loader 时是通过其包名称去引用的， Webpack 需要根据配置的 Loader 包名去找到 Loader 的实际代码，以调用 Loader 去处理源文件。