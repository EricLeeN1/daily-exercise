##Router构造配置
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