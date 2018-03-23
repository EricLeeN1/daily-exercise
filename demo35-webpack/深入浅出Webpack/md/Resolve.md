# Resolve #

Resolve 配置 Webpack 如何寻找模块所对应的文件。

## 1. alias ##

    通过别名来把原导入路径映射成一个新的导入路径。

## 2. mainFields ##

    有一些第三方模块会针对不同环境提供几分代码。 例如分别提供采用 ES5 和 ES6 的2份代码，这2份代码的位置写在 package.json 文件里，如下

    `{
        "jsnext:main": "es/index.js",// 采用 ES6 语法的代码入口文件
        "main": "lib/index.js" // 采用 ES5 语法的代码入口文件
    }`
    Webpack 会根据 mainFields 的配置去决定优先采用那份代码，mainFields 默认如下：
    mainFields: ['browser', 'main']
    Webpack 会按照数组里的顺序去package.json 文件里寻找，只会使用找到的第一个。
    假如你想优先采用 ES6 的那份代码，可以这样配置：
    mainFields: ['jsnext:main', 'browser', 'main']

## 3. extensions ##

    在导入语句没带文件后缀时，Webpack 会自动带上后缀后去尝试访问文件是否存在。 
    resolve.extensions 用于配置在尝试过程中用到的后缀列表，默认是：

    extensions: ['.js', '.json']

    也就是说当遇到 require('./data') 这样的导入语句时，Webpack 会先去寻找 ./data.js 文件，如果该文件不存在就去寻找 ./data.json 文件， 如果还是找不到就报错。

    假如你想让 Webpack 优先使用目录下的 TypeScript 文件，可以这样配置：

    extensions: ['.ts', '.js', '.json']

## 4. modules ##

    置 Webpack 去哪些目录下寻找第三方模块，默认是只会去 node_modules 目录下寻找。 有时你的项目里会有一些模块会大量被其它模块依赖和导入，由于其它模块的位置分布不定，针对不同的文件都要去计算被导入模块文件的相对路径， 这个路径有时候会很长，就像这样 import '../../../components/button' 这时你可以利用 modules 配置项优化，假如那些被大量导入的模块都在 ./src/components 目录下，把 modules 配置成

    modules:['./src/components','node_modules']

    后，你可以简单通过import 'button' 导入；

## 5. descriptionFiles ##

     配置描述第三方模块的文件名称，也就是 package.json 文件。
    descriptionFiles: ['package.json']

## 6. enforceExtension ##

    resolve.enforceExtension 如果配置为 true 所有导入语句都必须要带文件后缀， 例如开启前 import './foo' 能正常工作，开启后就必须写成 import './foo.js'。

## 7. enforceModuleExtension ##

    enforceModuleExtension 和 enforceExtension 作用类似，但 enforceModuleExtension 只对 node_modules 下的模块生效。 enforceModuleExtension 通常搭配 enforceExtension 使用，在 enforceExtension:true 时，因为安装的第三方模块中大多数导入语句没带文件后缀， 所以这时通过配置 enforceModuleExtension:false 来兼容第三方模块。