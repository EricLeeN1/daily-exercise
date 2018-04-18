# Babel 入门教程 #

Babel是一个广泛使用的转码器，可以将ES6代码转为ES5代码，从而在现有环境执行

## 一、配置文件.babelrc ##

Babel的配置文件是.babelrc,存放在项目的根目录下。使用Babel的第一步，就是配置这个文件。必须要配置哦。这个文件用来设置转码规则和插件

    1. presets 字段设定转码规则，规则集详细参考下文
        - ES2015转码规则
            - npm install --save-dev babel-preset-es2015
        - react转码规则
            - npm install --save-dev babel-preset-react
        - ES7不同阶段语法提案的转码规则（共有4个阶段），选装一个
            - npm install --save-dev babel-preset-stage-0
            - npm install --save-dev babel-preset-stage-1
            - npm install --save-dev babel-preset-stage-2
            - npm install --save-dev babel-preset-stage-3

## 二、命令行转码babel-cli ##

Babel提供babel-cli工具，用于命令行转码。

    npm install --global babel-cli
    npm install --save-dev babel-cli

**使用**

    1. 转码结果输出到标准输出 -> `babel example.js`
    2. 转码结果写入一个文件,--out-file 或 -o 参数指定输出文件 -> `babel example.js --out-file compiled.js`或 `babel example.js -o compiled.js`
    3. 整个目录转码，--out-dir 或 -d 参数指定输出目录 -> `babel src --out-dir lib` 或 `babel src -d lib`
    4. -s 参数生成source map文件 -> `babel src -d lib -s`

## 三、babel-node ##

babel-cli工具自带一个babel-node命令，提供一个支持ES6的REPL环境。它支持Node的REPL环境的所有功能，而且可以直接运行ES6代码。

它不用单独安装，而是随babel-cli一起安装。然后，执行babel-node就进入PEPL环境。

babel-node命令可以直接运行ES6脚本。将上面的代码放入脚本文件es6.js，然后直接运行。

## 四、babel-register ##

babel-register模块改写require命令，为它加上一个钩子。此后，每当使用require加载.js、.jsx、.es和.es6后缀名的文件，就会先用Babel进行转码。

    npm install --save-dev babel-register

使用时，必须首先加载babel-register。

然后，就不需要手动对index.js转码了

需要注意的是，babel-register只会对require命令加载的文件转码，而不会对当前文件转码。另外，由于它是实时转码，所以只适合在开发环境使用。

## 五、babel-core ##

如果某些代码需要调用Babel的API进行转码，就要使用babel-core模块。

    npm install babel-core --save

然后，在项目中就可以调用babel-core。

index.js的代码中，transform方法的第一个参数是一个字符串，表示需要转换的ES6代码，第二个参数是转换的配置对象。