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

### 4. this.props.children ###

    1. React里用this.props.children用来访问组件的子节点。
    2. this.props.children有三种可能性
        1. 如果组件没有子节点，则值为undefined; 
        2. 如果单个孩子节点，一个对象; 
        3. 如果有多个子节点，则为一个数组。
    3. React为我们提供了一个React.Children用于处理this.props.children不透明数据结构的实用程序。您可以使用React.Children.map迭代this.props.children而不用担心它的数据类型为undefined或object。

### 5. PropTypes ###

    1. 组件里面有很多特别的属性，在React里面被叫做props，它可以是任何类型。
    2. 有时你需要一种方法来验证这些props。你不希望用户有自由地向你的组件输入任何东西。
    3. React为此提供了一个解决方案，它被称为PropTypes。
    4. 如果你想给prop设置默认值，使用getDefaultProps()。

### 6. Finding a DOM node ###

    1. 有时您需要引用组件中的DOM节点。React为您提供了ref查找它的属性。
    2. 所需的DOM节点应该有一个ref属性，并且this.refs.[refName]会返回相应的DOM节点。请注意，只有在将此组件加载到DOM中后才能做到这一点，否则您会得到null。

### 7. this.state ###

    1. React将组件视为state机器，并用它this.state来保持组件的state，getInitialState()初始化this.state（在组件被装载之前调用），this.setState()以更新this.state和重新渲染组件。
    2. 你可以使用组件属性注册事件处理程序，就像onClick，onKeyDown，onCopy等正式文件拥有所有支持的事件。

