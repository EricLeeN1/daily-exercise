这是React.js简单演示的集合。

这些演示故意写成简单明了的风格。你会发现在学习方面没有任何困难;

其他相关项目


##  文件夹首页内容  ##

    1. 渲染JSX
    2. 在JSX中使用JavaScript
    3. 在JSX中使用数组
    4. 定义一个组件
    5. this.props.children
    6. PropTypes
    7. 找到一个DOM节点
    8. this.state
    9. 形成
    10. 组件生命周期
    11. ajax
    12. 显示来自Promise的值
    13. 服务器端显示


### 1. 渲染JSX ###

    1. JSX允许将HTML标记直接放入JavaScript代码中。ReactDOM.render()是将JSX转换为HTML并将其呈现到指定DOM节点的方法。

### 2. JSX语法 ###

    1. JSX 的基本语法规则：遇到 HTML 标签（以 < 开头），就用 HTML 规则解析；遇到代码块（以 { 开头），就用 JavaScript 规则解析。
    2. JSX 允许直接在模板插入 JavaScript 变量。如果这个变量是一个数组，则会展开这个数组的所有成员

### 3. 定义一个组件 ###

    1. React.createClass()创建一个组件类，它实现一个渲染方法来返回类的组件实例。您不需要调用new该类来获取实例，只需将其用作普通HTML标记即可。
    2. 组成部分将有属性，并且可以使用this.props.[attribute]访问它们，就像this.props.name的<HelloMessage name="John" />是约翰。
    3. 请记住组件名称的第一个字母必须大写，否则React会抛出错误。例如，HelloMessage作为组件的名称是可以的，但helloMessage不允许。React组件应该只有一个顶级子节点。同Vue

