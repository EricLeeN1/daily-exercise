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

## 1. React的prop ##

    外部世界通过prop来和组件对话
    当prop的类型不是字符串类型时，在JSX中必须用花括号{}把prop值包住。
