## 整个系列课程所学习到的内容

### 如何将js文件进行模块化

    #### module.exports require()
    #### 自定义文件，引入时需要使用./
    #### npm 下载的文件，不需要./
    npm install -g webpack
    
### 如何使用第三方

    #### 1.在npm服务器中下载第三方
    #### 2.require()第三方
    
### 如何将静态文件模块化

    #### 1.创建css文件
    #### 2.下载对应的加载器
    #### 3.修饰我们的css文件 !css-loader
    
#### 如何配置webpack.config.js

    #### 出口文件 入口文件 模块 加载器
    
#### 如何使用package.json启动项目

    #### scripts "build" "start"
    
#### 如何将es6转换为es5

    ####babel babel-core babel-loader "babel-preset-es2015"
    然后配置一下.babelrc文件

####Loader 的配置：

1. use 属性的值需要是一个由 Loader 名称组成的数组，Loader 的执行顺序是由后到前的；
2. 每一个 Loader 都可以通过 URL querystring 的方式传入参数，例如 css-loader?minimize 中的 minimize 告诉 css-loader 要开启 CSS 压缩。
3. 给 Loader 传入属性的方式除了有 querystring 外，还可以通过 Object 传。
4. 除了在 webpack.config.js 配置文件中配置 Loader 外，还可以在源码中指定用什么 Loader 去处理文件。 以加载 CSS 文件为例，修改上面例子中的 main.js 如下：
    1. require('style-loader!css-loader?minimize!./main.css');

####Plugin 的扩展


####要用到或可能用到的包

1. style-loader css-loader
2. webpack webpack-cli
3. extract-text-webpack-plugin