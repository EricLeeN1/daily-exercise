#requirejs

##1.requirejs的好处
    
    1. 生命不同js文件之间的依赖
    2. 可以按需、并行、延时载入js库
    3. 可以让我们的代码以模块化的方式组织
    4. 代码的管理和性能优化，提高代码的速度和质量
    5. 相对简单，不复杂

##2.AMD和CMD区别
    
    1. 规范
    AMD 规范在这里：https://github.com/amdjs/amdjs-api/wiki/AMD
    CMD 规范在这里：https://github.com/seajs/seajs/issues/242
    2. 来源
    AMD 是 RequireJS 在推广过程中对模块定义的规范化产出。
    CMD 是 SeaJS 在推广过程中对模块定义的规范化产出。
    类似的还有 CommonJS Modules/2.0 规范，是 BravoJS 在推广过程中对模块定义的规范化产出。
    还有不少⋯⋯
    这些规范的目的都是为了 JavaScript 的模块化开发，特别是在浏览器端的。
    目前这些规范的实现都能达成浏览器端模块化开发的目的。
    3. 区别：
        1. 对于依赖的模块，AMD 是提前执行，CMD 是延迟执行。不过 RequireJS 从 2.0 开始，也改成可以延迟执行（根据写法不同，处理方式不同）。CMD 推崇 as lazy as possible.
        2. CMD 推崇依赖就近，AMD 推崇依赖前置。看代码：
        // CMD
        define(function(require, exports, module) {
            var a = require('./a')
            a.doSomething()
        // 此处略去 100 行
            var b = require('./b') // 依赖可以就近书写
            b.doSomething()
            // ... 
        })

        // AMD 默认推荐的是
        define(['./a', './b'], function(a, b) { // 依赖必须一开始就写好
            a.doSomething()
        // 此处略去 100 行
            b.doSomething()
            ...
        }) 
        虽然 AMD 也支持 CMD 的写法，同时还支持将 require 作为依赖项传递，但 RequireJS 的作者默认是最喜欢上面的写法，也是官方文档里默认的模块定义写法。
    4. requirejs的配置和使用
    5. requirejs代码压缩
	appDir
		应用程序的最顶层目录。可选的，如果设置了的话，r.js 会认为脚本在这个路径的子目录中，应用程序的文件都会被拷贝到输出目录（dir 定义的路径）。如果不设置，则使用下面的 baseUrl 路径。
	baseUrl
		默认情况下，所有的模块都是相对于这个路径的。如果没有设置，则模块的加载是相对于 build 文件所在的目录。另外，如果设置了appDir，那么 baseUrl 应该定义为相对于 appDir 的路径。
	dir
		输出目录的路径。如果不设置，则默认为和 build 文件同级的 build 目录。
	optimize
		JavaScript 代码优化方式。可设置的值：
		
		"uglify：使用 UglifyJS 压缩代码，默认值；
		"uglify2"：使用 2.1.2+ 版本进行压缩；
		"closure"： 使用 Google's Closure Compiler 进行压缩合并，需要 Java 环境；
		"closure.keepLines"：使用 Closure Compiler 进行压缩合并并保留换行；
		"none"：不做压缩合并；
	optimizeCss
		　CSS 代码优化方式，可选的值有：
		
		"standard"：标准的压缩方式；
		"standard.keepLines"：保留换行；
		"standard.keepComments"：保留注释；
		"standard.keepComments.keepLines"：保留换行；
		"none"：不压缩；
	mainConfigFile
		如果不想重复定义的话，可以使用这个参数配置 RequireJS 的配置文件路径。
	removeCombined
		删除之前压缩合并的文件，默认值 false。
	fileExclusionRegExp
		要排除的文件的正则匹配的表达式。
	modules
		　定义要被优化的模块数组。每一项是模块优化的配置，常用的几个参数如下：
		
		　　　　name：模块名；
		
		　　　　create：如果不存在，是否创建。默认 false；
		
		　　　　include：额外引入的模块，和 name 定义的模块一起压缩合并；
		
		　　　　exclude：要排除的模块。有些模块有公共的依赖模块，在合并的时候每个都会压缩进去，例如一些基础库。使用 exclude 就可以把这些模块在压缩在一个更早之前加载的模块中，其它模块不用重复引入