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

**使用**

    1. 转码结果输出到标准输出 -> `babel example.js`
    2. 转码结果写入一个文件,--out-file 或 -o 参数指定输出文件 -> `babel example.js --out-file compiled.js`或 `babel example.js -o compiled.js`
    3. 整个目录转码，--out-dir 或 -d 参数指定输出目录 -> `babel src --out-dir lib` 或 `babel src -d lib`
    4. -s 参数生成source map文件 -> `babel src -d lib -s`
