# practices

> Eric practice

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

    build                   构建脚本目录
    config                  构建项目配置目录
    node_modules            依赖的node工具包目录
    src                     源码目录
        assets              资源目录
        components          组件目录
        router              路由目录
            index.js        配置路由的界面
        App.vue             页面级Vue组件
        main.js             页面级入口JS文件，是主页面的配置的主入口。主要是利用es6的模块化引入模块。
    static                  静态文件目录
    test                    测试文件目录
    package.json            项目描述文件
    index.html              入口文件

如果需要增加组件那就在components文件下定义xx.vue文件并编写代码即可，如果需要配置路由就要进行在index.js进行路由“路径”配置，还需要点击跳转就要用到<router-link></router-link>标签了。至于后面的过滤器啊，事件啊，钩子函数，ajax等等之类的和vue1.0差不多就不一一叙述，但是会在用到的时候简单说明一下的。