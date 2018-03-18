project
A Vue.js project

Build Setup
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
For a detailed explanation on how things work, check out the guide and docs for vue-loader.

1. 引入Element
`import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"`
通过以上代码引入Element，需要注意的是，样式文件需要单独引入。
2. 按需引入Element
依赖的包
babel-plugin-component -> 借助babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的。
命令行 -> npm install --save-dev babel-plugin-component
此时需要配置.babelrc { "presets": [["es2015", { "modules": false }]], "plugins": [ [ "component", { "libraryName": "element-ui", "styleLibraryName": "theme-chalk" }] ] }
之后需要的时候按需引入就好了，然后vue.use(模块名称);一些模块需要绑定到原型上，请注意
Vue.prototype.$loading = Loading.service; Vue.prototype.$msgbox = MessageBox; Vue.prototype.$alert = MessageBox.alert; Vue.prototype.$confirm = MessageBox.confirm; Vue.prototype.$prompt = MessageBox.prompt; Vue.prototype.$notify = Notification; Vue.prototype.$message = Message;
3. 全局配置
在引入Element时，可以传入一个全局配置对象，该对象目前仅支持size字段，用于改变组件的默认尺寸。 Vue.use(Element,{size:'small'});
按需引入Element:
import { Button } from "element-ui";
Vue.prototype.$ELEMENT = { size: "small" };
Vue.use(Button);
4.使用Nuxt.js
![https://nuxtjs.org/]
5.国际化
1.  全局配置
    1.  `import locale from 'element-ui/lib/locale/lang/en'`
    2.  Vue.use(Element,{ locale })
1.  按需引入
    1.  `import lang from 'element-ui/lib/locale/lang/en'
        import locale from 'element-ui/lib/locale'`
    2.  设置语言 -> `locale.use(lang)`
6.组件
1. layout布局。
    通过基础的24分栏，迅速简便地创建布局

    1. 基础布局
        1. 使用单一分栏创建基础的栅格布局。
        2. 通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。
        3. `<el-row>
                <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
            </el-row>`
        3.  el-col里面属性通过设置:span="12"就能生成一半。

    2. 分栏间隔
        1. 分栏之间存在间隔
        2. Row 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0。
        3. `<el-row :gutter="20">
                <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
            </el-row>`

    3. 混合布局
        1. 通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。
        2. `<el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
            </el-row>`

    4. 分栏便宜
        1. 支持偏移指定的栏数。
        2. 通过制定 col 组件的 offset 属性可以指定分栏偏移的栏数。
        3. `<el-row :gutter="20">
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
            </el-row>`

    5.  对齐方式
        1.  通过 flex 布局来对分栏进行灵活的对齐。
        2.  将 type 属性赋值为 'flex'，可以启用 flex 布局，并可通过 justify 属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的排版方式。
        3.  `<el-row type="flex" class="row-bg" justify="center">
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            </el-row>`

    6.  响应式布局
        1. 参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。
        2. `<el-row :gutter="10">
                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
            </el-row>`

    7.  基于断点的隐藏类
        1.  Element 额外提供了一系列类名，用于在某些条件下隐藏元素。这些类名可以添加在任何 DOM 元素或自定义组件上。如果需要，请自行引入以下文件：
            `import 'element-ui/lib/theme-chalk/display.css';`
        2. 包含的类名及其含义为：
            1. hidden-xs-only - 当视口在 xs 尺寸时隐藏
            2. hidden-sm-only - 当视口在 sm 尺寸时隐藏
            3. hidden-sm-and-down - 当视口在 sm 及以下尺寸时隐藏
            4. hidden-sm-and-up - 当视口在 sm 及以上尺寸时隐藏
            5. hidden-md-only - 当视口在 md 尺寸时隐藏
            6. hidden-md-and-down - 当视口在 md 及以下尺寸时隐藏
            7. hidden-md-and-up - 当视口在 md 及以上尺寸时隐藏
            8. hidden-lg-only - 当视口在 lg 尺寸时隐藏
            9. hidden-lg-and-down - 当视口在 lg 及以下尺寸时隐藏
            10. hidden-lg-and-up - 当视口在 lg 及以上尺寸时隐藏
            11. hidden-xl-only - 当视口在 xl 尺寸时隐藏

    8. Row属性
        1. gutter 栅格间隔 number 默认0
        2. type 布局模式，可选flex，现代浏览器下有效 string
        3. justify flex布局下的水平排列方式 string 可选start/end/center/space-around/space-between 默认start
        4. align flex布局下的垂直排列方式 string top/middle/bottom 默认top
        5. tag 自定义元素标签 string div

    9. Col属性
        1. span 栅格占据的列数 number 默认值24
        2. offset 栅格左侧的间隔格数 number 默认值0
        3. push 栅格向右移动格数 number 默认值0
        4. pull 栅格向左移动格数 number 默认值0
        5. xs <768px 响应式栅格数或者栅格属性对象 number/object(例如：{span:4,offset:4})
        6. sm ≥768px 响应式栅格数或者栅格属性对象 number/object (例如：{span: 4, offset: 4})
        7. md ≥992px 响应式栅格数或者栅格属性对象 number/object (例如：{span: 4, offset: 4})
        8. lg ≥1200px 响应式栅格数或者栅格属性对象 number/object (例如：{span: 4, offset: 4})
        9. xl ≥1920px 响应式栅格数或者栅格属性对象 number/object (例如：{span: 4, offset: 4})
        10. tag 自定义元素标签 string 默认div
7.Container 布局容器
用于布局的容器组件，方便快速搭建页面的基本结构
：外层容器。当子元素中包含 或 时，全部子元素会垂直上下排列，否则会水平左右排列。
：顶栏容器。
：侧边栏容器
：主要区域容器。
：底栏容器。
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外， 的子元素只能是后四者，后四者的父元素也只能是 。
