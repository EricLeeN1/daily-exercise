# Output #

## 1. filename ##

    1. 配置输出文件的名称，为string类型，如果只有一个输出文件，则可以把它写成静态不变的
        filename:'bundle.js'
    2. 在有多个Chunk要输出时，需要借助模版和变量了。前面说到Webpack会为每个Chunk取一个名称，可以根据Chunk的名称来区分输出的文件名
        filename:'[name].js'
    3. 代码里的 [name] 代表用内置的 name 变量去替换[name]，这时你可以把它看作一个字符串模块函数， 每个要输出的 Chunk 都会通过这个函数去拼接出输出的文件名称。
    4. 内置变量除了**name**还包括
        1. id   Chunk的唯一标识，从0开始
        2. name    Chunk的名称
        3. hash    Chunk的唯一标识的Hash值 [hash:8]代表取8位hash值，默认20位
        4. chunkhash    Chunk内容的Hash值 [chunkhash:8]代表取8位hash值，默认20位

## 2. chunkFilename ##

## 3. path ##

    output.path 配置输出文件存放在本地的目录，必须是 string 类型的绝对路径。通常通过 Node.js 的 path 模块去获取绝对路径：
    path: path.resolve(__dirname, 'dist_[hash]')

## 4. publicPath ##

    output.publicPath 配置发布到线上资源的 URL 前缀，为string 类型。 默认值是空字符串 ''，即使用相对路径。

## 5. crossOriginLoading ##

    Webpack 输出的部分代码块可能需要异步加载，而异步加载是通过 JSONP 方式实现的。 JSONP 的原理是动态地向 HTML 中插入一个 <script src="url"></script> 标签去加载异步资源。
    output.crossOriginLoading 则是用于配置这个异步插入的标签的 crossorigin 值。
    script 标签的 crossorigin 属性可以取以下值：
        anonymous(默认) 在加载此脚本资源时不会带上用户的 Cookies；
        use-credentials 在加载此脚本资源时会带上用户的 Cookies。
    通常用设置 crossorigin 来获取异步加载的脚本执行时的详细错误信息。

## 6. libraryTarget 和 library ##

    1. 当用 Webpack 去构建一个可以被其他模块导入使用的库时需要用到它们。
        1. output.libraryTarget 配置以何种方式导出库。
        2. output.library 配置导出库的名称。通常与上面的搭配在一起使用
    2. output.libraryTarget 是字符串的枚举类型，支持以下配置。
        1. var(默认)
            1. 编写的库将通过 var 被赋值给通过 library 指定名称的变量。
            2. 假如配置了 output.library='LibraryName'，则输出和使用的代码如下：
                // Webpack 输出的代码
                var LibraryName = lib_code;
                // 使用库的方法
                LibraryName.doSomething();
            例如 output.library为空，将直接输出lib_code
