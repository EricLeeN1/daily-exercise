先react之后React Native
# 一、react基础 #

## 1.  create-react-app 工具 ##

    npm  install  --global  create-react-app
    create-react-app  first_react_app
    cd first_react_app
    npm start -> 开始开发模式服务
    npm build -> 打包app文件及静态文件到生产模式
    npm test -> 开始测试

    当前目录
    src/ -> 所有的源代码
    public/
    README.md
    package.json
    node  modules/

## 2. 通过组件(Component)来开发应用 ##

    1. 引入React，Component组件
        `import React, {  Component  } from  ’ react ’;`
    2. `class  ClickCounter extends  Component  {
            constructor(props) {
                super(props);
            }
            render() {
                
            }
        }`
    3. `export default ClickCounter;`

## 3.JSX ##

    1. 是JavaScript的语法扩展(eXtension)
    2. JSX与HTML的区别
        1. 在JSX中使用“元素”不局限于HTML中的元素，可以是任何一个React组件，
            React判断一个元素是HTML元素还是React组件的原则就是看第一个字母是否大写。
        2. 在JSX中可以通过onClick这样的方式给一个元素添加一个时间处理函数。HTML中用的onclick跟onClick拼写有区别。HTML行内方法不推荐。

## 4. jQuery与react vue angular等框架的区别 ##

    比较更新之前的不同，发现不同，适当的修改。使用virtual DOM。

# 二、组件详情 #

   1. React设计 特点
    - 高内聚 -> 把逻辑紧密相关的内容放在一个组件中。
    - 低耦合 -> 不同组件之间的依赖关系要尽量弱化。
    2. 组件的数据 对外用prop，内部用state
    - prop 是组件的对外接口。
    - state 是组件的内部状态。

## 2.2 组件的数据 ##
### 2.2.1 React的prop ###

    外部世界通过prop来和组件对话
    当prop的类型不是字符串类型时，在JSX中必须用花括号{}把prop值包住。

### 2.2.2 React的state ###

    state代表组件的内部状态。因为组件不能修改传入的prop，所以需要记录自身数据变化，需要使用state。
    1. 初始化state
        1.  通常在组件类的构造函数结尾处初始化state
    2. 读取和更新state
        1. 通过this.state可以读取到组件的当前state。
        2. 改变组件state必须要使用this.setState函数。

### 2.2.3 prop和state的对比。 ###

    1. prop用于定义外部接口，state用于记录内部状态。
    2. prop的赋值在外部世界使用组件时，state的赋值在组件内部。
    3. 组件不应该改变prop的值，而state存在的目的就是让组件来改变的。

## 2.3 组件的生命周期 ##

    1. 装载过程（Mount）,把组件第一次在DOM中渲染的过程。
    2. 更新过程（Update）,当组件被重新渲染的过程。
    3. 卸载过程（Unmount）,组件从DOM中删除的过程。

### 2.3.1 装载过程 ###

    1. constructor
    2. getlnitialState
    3. getDefaultProps
    4. componentWillMount
    5. render
    6. componentDidMount

#### 2.3.1.1 constructor ####

    1. 为了初始化state，因为组件生命周期内任何函数都可能要访问state，那么整个生命周期中第一个被调用的构造函数自然是初始化state最理想的地方。
    2. 绑定成员函数的this环境。在构造函数中将这个实例的特定函数绑定this为当前实例。

#### 2.3.1.2 getlnitialState和getDefaultProps ####

    1. 这两个方法在ES6的方法定义的React组件中根本不会用到。

#### 2.3.1.3 render ####

    它只是返回一个JSX描述的结构。最终由React来操作渲染过程。
    某些情况下选择没有东西可画，就让render函数返回一个null或者false

#### 2.3.1.4 componentWillMount和componentDidMount ####

    1. 时间 由先到后
        1. componentWillMount
        2. render
        3. componentDidMount
    2. componentWillMount可以在服务器端被调用，也可以在浏览器端被调用。
    3. componentDidMount只能在浏览器端执行。

### 2.3.2 更新过程 ###

    1. componentWillReceiveProps
    2. shouldComponentUpdate
    3. componentWillUpdate
    4. render
    5. componentDidUpdate

#### 2.3.2.1 componentWillReceiveProps ####

    1. componentWillReceiveProps(nextProps)
        1. 只要父组件的render函数被调用，在render函数里面被渲染的子组件就会经历更新过程，不管父组件传给子组件的props有没有改变，都会触发子组件的componentWillReceiveProps函数。


#### 2.3.2.2shouldComponentUpdate  ####

    1. shouldComponentUpdate(nextProps,nextState)
        1. 除了render函数，这是React组件生命周期中最重要的一个函数了，这两个函数也是唯一两个要求有返回结果的函数。render函数返回结构将用于构造DOM对象，而shouldComponentUpdate函数返回一个布尔值，告诉React库这个组件在这次更新过程中是否要继续。
        2. 返回 true那就会继续更新过程，接下来调用render函数。反之得到false那就立刻停止更新过程，也不会引发后续渲染。
        3. 使用恰当会大大提高React组件的性能。

#### 2.3.2.3 componentWillUpdate与componentDidUpdate ####

    无论更新过程发生在服务器端还是浏览器端，该函数都会被调用。
    componentDidUpdate可以利用这个函数执行其他UI库的代码，比如jQuery代码。当React组件被更新时，原有的内容会被重新绘制，这时候就需要在componentDidUpdate函数中再次调用jQuery代码。

### 2.3.3 卸载过程 ###

    componentWillUnmount
    React组件的卸载过程只涉及这一个函数，当React组件要从DOM树上删除掉之前，对应的componentWillUnmount函数会被调用。
    componentWillUnmount中的工作和 componentDidMount有关，若在 componentDidMount中用非React的方法创造了一些DOM元素时，如果撒手不管会造成内存泄漏，需要在 componentWillUnmount把这些创造的DOM元素清理掉。

## 2.4 组件向外传递数据 ##

## 2.5 React组件state和prop的局限 ##


# 二、模块化React和Redux应用 #

## 4.1 模块化应用要点 ##

**4.1.1构建应用的基础**

    1. 代码文件的组织结构
    2. 确定模块的边界
    3. Store的状态树设计

**4.1.2状态树设计要遵循的原则**

    1. 一个模块控制一个状态结点；
    2. 避免冗余数据；
    3. 树形结构扁平。

**tips:对于只return一个对象的函数体，ES6允许简写为省去return，直接用圆括号把反悔的对象包起来就行。**

