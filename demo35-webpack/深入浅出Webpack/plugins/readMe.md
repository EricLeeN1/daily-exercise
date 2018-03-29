#  常用Plugins  #

## 1. 用于修改行为 ##

    define-plugin：定义环境变量，在4-7区分环境中有介绍。
    context-replacement-plugin：修改 require 语句在寻找文件时的默认行为。
    ignore-plugin：用于忽略部分文件。

## 2. 用于优化 ##

    commons-chunk-plugin：提取公共代码，在4-11提取公共代码中有介绍。
    extract-text-webpack-plugin：提取 JavaScript 中的 CSS 代码到单独的文件中，在1-5使用 Plugin 中有介绍。
    prepack-webpack-plugin：通过 Facebook 的 Prepack 优化输出的 JavaScript 代码性能，在 4-13使用 Prepack 中有介绍。
    uglifyjs-webpack-plugin：通过 UglifyES 压缩 ES6 代码，在 4-8压缩代码中有介绍。
    webpack-parallel-uglify-plugin：多进程执行 UglifyJS 代码压缩，提升构建速度。
    imagemin-webpack-plugin：压缩图片文件。
    webpack-spritesmith：用插件制作雪碧图。
    ModuleConcatenationPlugin：开启 Webpack Scope Hoisting 功能，在4-14开启 ScopeHoisting中有介绍。
    dll-plugin：借鉴 DDL 的思想大幅度提升构建速度，在4-2使用 DllPlugin中有介绍。
    hot-module-replacement-plugin：开启模块热替换功能。

## 3. 其它 ##

    serviceworker-webpack-plugin：给网页应用增加离线缓存功能，在3-14 构建离线应用中有介绍。
    stylelint-webpack-plugin：集成 stylelint 到项目中，在3-16检查代码中有介绍。
    i18n-webpack-plugin：给你的网页支持国际化。
    provide-plugin：从环境中提供的全局变量中加载模块，而不用导入对应的文件。
    web-webpack-plugin：方便的为单页应用输出 HTML，比 html-webpack-plugin 好用。
    
