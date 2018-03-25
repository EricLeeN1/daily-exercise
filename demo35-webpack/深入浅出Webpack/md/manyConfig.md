# 多重配置类型 #

## 1. 导出一个Function ##

    如果采用导出一个 Object 来描述 Webpack 所需的配置的方法，需要写两个文件。 一个用于开发环境，一个用于线上环境。再在启动时通过 webpack --config webpack.config.js 指定使用哪个配置文件。

    采用导出一个 Function 的方式，能通过 JavaScript 灵活的控制配置，做到只用写一个配置文件就能完成以上要求。

    在运行 Webpack 时，会给这个函数传入2个参数，分别是：

    env：当前运行时的 Webpack 专属环境变量，env 是一个 Object。读取时直接访问 Object 的属性，设置它需要在启动 Webpack 时带上参数。例如启动命令是 webpack --env.production --env.bao=foo时，则 env 的值是 {"production":"true","bao":"foo"}。
    argv：代表在启动 Webpack 时所有通过命令行传入的参数，例如 --config、--env、--devtool，可以通过 webpack -h 列出所有 Webpack 支持的命令行参数。

    就以上配置文件而言，在开发时执行命令 webpack 构建出方便调试的代码，在需要构建出发布到线上的代码时执行 webpack --env.production 构建出压缩的代码。

## 2. 导出一个返回 Promise 的函数 ##

    在有些情况下你不能以同步的方式返回一个描述配置的 Object，Webpack 还支持导出一个返回 Promise 的函数;

## 3. 导出多份配置 ##

    1. 除了只导出一份配置外，Webpack 还支持导出一个数组，数组中可以包含每份配置，并且每份配置都会执行一遍构建。
    2. 以上配置会导致 Webpack 针对这三份配置执行三次不同的构建。
    3. 这特别适合于用 Webpack 构建一个要上传到 Npm 仓库的库，因为库中可能需要包含多种模块化格式的代码，例如 CommonJS、UMD。