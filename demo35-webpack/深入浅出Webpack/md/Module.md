# Module #

module 配置如何处理模块 参考module.config.js

## 1. 配置loader ##

    rules配置模块的读取和解析规则，通常用来配置Loader。其类型是一个数组，数组里每一项都描述了如何去处理部分文件。

### 1. 条件匹配  ###

    通过test、include、exclude 三个配置项来命中Loader要应用规则的文件。

### 2. 应用规则 ###

    对选中后的文件通过 use 配置项来应用 Loader，可以只应用一个 Loader 或者按照从后往前的顺序应用一组 Loader，同时还可以分别给 Loader 传入参数。

### 3. 重置顺序 ###

    一组 Loader 的执行顺序默认是从右到左执行，通过 enforce 选项可以让其中一个 Loader 的执行顺序放到最前或者最后。

## 2. noParse ##

    可以让 Webpack 忽略对部分没采用模块化的文件的递归解析和处理，这样做的好处是能提高构建性能。

    noParse 是可选配置项，类型需要是 RegExp、[RegExp]、function 其中一个。

    例如想要忽略掉 jQuery 、ChartJS，可以使用如下代码：

## 3.parse ##

    parser 属性可以更细粒度的配置哪些模块语法要解析哪些不解析，和 noParse 配置项的区别在于 parser 可以精确到语法层面， 而 noParse 只能控制哪些文件不被解析。 