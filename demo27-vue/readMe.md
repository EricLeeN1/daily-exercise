# API文档

## 1.Router构造配置
2018/1/2 10:13:38

### routes -> Array

    类型：Array
    declare type RouteConfig = {
    path: string;// 路径
    component?: Component;// 组件
    name?: string; // 命名路由
    components?: { [name: string]: Component }; // 命名视图组件
    redirect?: string | Location | Function;// 重定向
    props?: boolean | string | Function; // 路由组件传参
    alias?: string | Array<string>; // 别名
    children?: Array<RouteConfig>; // 嵌套路由
    beforeEnter?: (to: Route, from: Route, next: Function) => void;// 路由独享的守卫
    meta?: any; // 路由元信息
    // 2.6.0+
    caseSensitive?: boolean; // 匹配规则是否大小写敏感？(默认值：false)
    pathToRegexpOptions?: Object; // 编译正则的选项
    }

### mode-> string

    类型：string
    默认值:'hash'（浏览器环境）|'abstract'（Node.js环境）
    可选值:'hash'|'history'|'abstract'
    配置路由器模式:
        1. hash: 使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器。
        2. history: 依赖 HTML5 History API 和服务器配置。
        3. abstract: 支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式。

### base -> string

    类型：string
    默认值:'/'
    应用的基础路径。如果整个单页应用服务在/app/下，然后base就应该设为'/app/'

### linkActiveClass -> string

    类型：string
    默认值：'router-link-active'
    全局配置<router-link>的默认【激活class类名】

### linkExactActiveClass -> string

    类型：string
    默认值：'<router-link-exact-active>'
    全局配置<router-link>精确激活的默认的class

### scrollBehavior -> function

    类型：function
    签名：
    (
    to: Route,
    from: Route,
    savedPosition?: { x: number, y: number }
    ) => { x: number, y: number } | { selector: string } | ?{}

### parseQuery / stringifyQuery -> function

    类型：function
    提供自定义查询字符串的解析/反解析函数。覆盖默认行为

### fallback -> boolean

    类型：boolean
    当浏览器不支持 history.pushState 控制路由是否应该回退到 hash 模式。默认值为 true。
在 IE9 中，设置为 false 会使得每个 router-link 导航都触发整页刷新。它可用于工作在 IE9 下的服务端渲染应用，因为一个 hash 模式的 URL 并不支持服务端渲染。

## 2.Router 实例

### 属性

    1. router.app
    类型: Vue instance
    配置了 router 的 Vue 根实例。

    2. router.mode
    类型: string
    路由使用的模式。

    3. router.currentRoute
    类型：Route
    当前路由对应的路由信息对象。

### 方法

    1. router.beforeEach(guard)
    2. router.beforeResolve(guard) (2.5.0+): 此时异步组件已经加载完成
    3. router.afterEach(hook)
    增加全局的导航守卫。参考导航守卫。
    在 2.5.0+ 这三个方法都返回一个移除已注册的守卫/钩子的函数。
    4. router.push(location, onComplete?, onAbort?)
    5. router.replace(location, onComplete?, onAbort?)
    6. router.go(n)
    7. router.back()
    8. router.forward()
    动态的导航到一个新 URL。参考编程式导航。
    9. router.getMatchedComponents(location?)
    返回目标位置或是当前路由匹配的组件数组（是数组的定义/构造类，不是实例）。通常在服务端渲染的数据预加载时时候。
    10. router.resolve(location, current?, append?)
        1. 解析目标位置（格式和 <router-link> 的 to prop 一样），返回包含如下属性的对象：
        {
            location: Location;
            route: Route;
            href: string;
        }
        current 是当前默认的路由 (通常你不需要改变它)
        append 允许你在 current 路由上附加路径 (如同 router-link)
    11. router.addRoutes(routes)
        动态添加更多的路由规则。参数必须是一个符合 routes 选项要求的数组。
    12. router.onReady(callback, [errorCallback])
        该方法把一个回调排队，在路由完成初始导航时调用，这意味着它可以解析所有的异步进入钩子和路由初始化相关联的异步组件。
        这可以有效确保服务端渲染时服务端和客户端输出的一致。
        第二个参数 errorCallback 只在 2.4+ 支持。它会在初始化路由解析运行出错 (比如解析一个异步组件失败) 时被调用。
    13. router.onError(callback)
        注册一个回调，该回调会在路由导航过程中出错时被调用。注意被调用的错误必须是下列情形中的一种：
        错误在一个路由守卫函数中被同步抛出；
        错误在一个路由守卫函数中通过调用 next(err) 的方式异步捕获并处理；
        渲染一个路由的过程中，需要尝试解析一个异步组件时发生错误。

## 3. 路由信息对象

    一个 route object（路由信息对象） 表示当前激活的路由的状态信息，包含了当前 URL 解析得到的信息，还有 URL 匹配到的 route records（路由记录）。
    route object 是 immutable（不可变） 的，每次成功的导航后都会产生一个新的对象。
    route object 出现在多个地方:
        1. 在组件内，即 this.$route
        2. 在$route观察者回调内
        3. router.match(location) 的返回值
        4. 导航守卫的参数
            router.beforeEach((to, from, next) => {
                // to 和 from 都是 路由信息对象
                // next是方法
            })
        5. scrollBehavior 方法的参数:
            1. const router = new VueRouter({
            scrollBehavior (to, from, savedPosition) {
                // to 和 from 都是 路由信息对象
                }
            })

### 路由信息对象的属性

    1. $route.path
    类型: string
    字符串，对应当前路由的路径，总是解析为绝对路径，如 "/foo/bar"。
    
    2. $route.params
    类型: Object
    一个 key/value 对象，包含了 动态片段 和 全匹配片段，如果没有路由参数，就是一个空对象。

    3. $route.query
    类型: Object
    一个 key/value 对象，表示 URL 查询参数。例如，对于路径 /foo?user=1，则有 $route.query.user == 1，如果没有查询参数，则是个空对象。

    4. $route.hash
    类型: string
    当前路由的 hash 值 (带 #) ，如果没有 hash 值，则为空字符串。

    5. $route.fullPath
    类型: string
    完成解析后的 URL，包含查询参数和 hash 的完整路径。

    6. $route.matched
    类型: Array<RouteRecord>
    一个数组，包含当前路由的所有嵌套路径片段的 路由记录 。路由记录就是 routes 配置数组中的对象副本（还有在 children 数组）。
    const router = new VueRouter({
        routes: [
            // 下面的对象就是 route record
            { path: '/foo', component: Foo,
            children: [
                // 这也是个 route record
                { path: 'bar', component: Bar }
            ]}
        ]
    })
    当 URL 为 /foo/bar，$route.matched 将会是一个包含从上到下的所有对象（副本）。

    7. $route.name
    当前路由的名称，如果有的话

## 4. 对组件注入

    1. 注入的属性
        通过在Vue根实例的router配置传入router实例，下面这些属性成员会被注入到每个子组件
        $router
            router实例
        $route
            当前激活的路由信息对象。这个属性是只读的。里面属性是不可变的，不过可以watch（检测变化它）

    2.允许的额外配置

-  beforeRouteEnter
-  beforeRouteUpdate
-  beforeRouteLeave

## 5.<router-link>

    1. 无论是 HTML5 history 模式还是 hash 模式，它的表现行为一致，所以，当你要切换路由模式，或者在 IE9 降级使用 hash 模式，无须作任何变动。
    2. 在 HTML5 history 模式下，router-link 会守卫点击事件，让浏览器不再重新加载页面。
    3. 当你在 HTML5 history 模式下使用 base 选项之后，所有的 to 属性都不需要写（基路径）了。

    Props

        1. to
        类型: string | Location
        required
        表示目标路由的链接。当被点击后，内部会立刻把 to 的值传到 router.push()，所以这个值可以是一个字符串或者是描述目标位置的对象。
        <!-- 字符串 -->
        <router-link to="home">Home</router-link>
        <!-- 渲染结果 -->
        <a href="home">Home</a>

        <!-- 使用 v-bind 的 JS 表达式 -->
        <router-link v-bind:to="'home'">Home</router-link>

        <!-- 不写 v-bind 也可以，就像绑定别的属性一样 -->
        <router-link :to="'home'">Home</router-link>

        <!-- 同上 -->
        <router-link :to="{ path: 'home' }">Home</router-link>

        <!-- 命名的路由 -->
        <router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>

        <!-- 带查询参数，下面的结果为 /register?plan=private -->
        <router-link :to="{ path: 'register', query: { plan: 'private' }}">Register</router-link>

        2. replace
        类型: boolean
        默认值: false
        设置 replace 属性的话，当点击时，会调用 router.replace() 而不是 router.push()，于是导航后不会留下 history 记录。
        <router-link :to="{ path: '/abc'}" replace></router-link>

        3. append
        类型: boolean
        默认值: false
        设置 append 属性后，则在当前（相对）路径前添加基路径。例如，我们从 /a 导航到一个相对路径 b，如果没有配置 append，则路径为 /b，如果配了，则为 /a/b
        <router-link :to="{ path: 'relative/path'}" append></router-link>

        4. tag
        类型: string
        默认值: "a"
        有时候想要 <router-link> 渲染成某种标签，例如 <li>。 于是我们使用 tag prop 类指定何种标签，同样它还是会监听点击，触发导航。
        <router-link to="/foo" tag="li">foo</router-link>
            <!-- 渲染结果 -->
        <li>foo</li>

        5. active-class
        类型: string
        默认值: "router-link-active"
        设置 链接激活时使用的 CSS 类名。默认值可以通过路由的构造选项 linkActiveClass 来全局配置。

        6. exact
        类型: boolean
        默认值: false
        "是否激活" 默认类名的依据是 inclusive match （全包含匹配）。 举个例子，如果当前的路径是 /a 开头的，那么 <router-link to="/a"> 也会被设置 CSS 类名。
        按照这个规则，<router-link to="/"> 将会点亮各个路由！想要链接使用 "exact 匹配模式"，则使用 exact 属性：
         <!-- 这个链接只会在地址为 / 的时候被激活 -->
        <router-link to="/" exact>

        7. event
        类型: string | Array<string>
        默认值: 'click'
        声明可以用来触发导航的事件。可以是一个字符串或是一个包含字符串的数组。

        8. exact-active-class
        类型: string
        默认值: "router-link-exact-active"
        配置当链接被精确匹配的时候应该激活的 class。注意默认值也是可以通过路由构造函数选项 linkExactActiveClass 进行全局配置的。

    将激活 class 应用在外层元素
    有时候我们要让激活 class 应用在外层元素，而不是 <a> 标签本身，那么可以用 <router-link> 渲染外层元素，包裹着内层的原生 <a> 标签：
    <router-link tag="li" to="/foo">
        <a>/foo</a>
    </router-link>
    在这种情况下，<a> 将作为真实的链接（它会获得正确的 href 的），而 "激活时的CSS类名" 则设置到外层的 <li>。

##6. <router-view>

    <router-view> 组件是一个 functional 组件，渲染路径匹配到的视图组件。<router-view> 渲染的组件还可以内嵌自己的 <router-view>，根据嵌套路径，渲染嵌套组件。

    属性
        name
        类型: string
        默认值: "default"
        如果 <router-view>设置了名称，则会渲染对应的路由配置中 components 下的相应组件。查看 命名视图 中的例子。

    行为表现

    其他属性（非 router-view 使用的属性）都直接传给渲染的组件， 很多时候，每个路由的数据都是包含在路由参数中。

    因为它也是个组件，所以可以配合 <transition> 和 <keep-alive> 使用。如果两个结合一起用，要确保在内层使用 <keep-alive>：
    <transition>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </transition>

    