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

    build                   构建脚本目录
        build-server.js         运行本地构建服务器，可以访问构建后的页面
        build.js                生产环境构建脚本
        dev-client.js           开发服务器热重载脚本，主要用来实现开发阶段的页面自动刷新
        dev-server.js           运行本地开发服务器
        util.js                 构建相关工具方法
        webpack.base.conf.js    webpack基础配置
        webpack.dev.conf.js     webpack开发环境配置
        webpack.prod.conf.js    webpack生产环境配置
    config                  构建项目配置目录
        dev.env.js              开发环境变量
        index.js                项目配置文件
        prod.env.js             生产环境变量
        test.env.js             测试环境变量
    node_modules            依赖的node工具包目录
    src                     源码目录
        assets                  资源目录
        components              组件目录
        router                  路由目录
            index.js                配置路由的界面
        stores                  应用级数据（state）
            index.js
        App.vue                 页面级Vue组件
        main.js                 页面级入口JS文件，是主页面的配置的主入口。主要是利用es6的模块化引入模块。
    static                  静态文件目录
    test                    测试文件目录
    package.json            项目描述文件，里面定义了项目的npm脚本，依赖包等信息
    index.html              入口文件

如果需要增加组件那就在components文件下定义xx.vue文件并编写代码即可，如果需要配置路由就要进行在index.js进行路由“路径”配置，还需要点击跳转就要用到<router-link></router-link>标签了。


一些后来添加的包

  npm install --save qrcode ->
  `qrcode () {
    let qrcode = new QRCode('qrcode', {
      width: 100,
      height: 100, // 高度
      text: '56663159' // 二维码内容
      // render: 'canvas' // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
      // background: '#f0f'
      // foreground: '#ff0'
    })
    console.log(qrcode)
  }`
