#React

##1. 什么是JSX

JavaScript XML

##2. 组件生命周期

###2.1. 初始化阶段

####2.1.1. getDefaultProps:只调用一次，实例之间共享引用。
####2.1.2. getInitialState:初始化每个实例特有的状态。
####2.1.3. componentWillMount:render之前最后一次修改状态的机会。
####2.1.4. render:只能访问this.props和this.state。只有一个顶层组件，不允许修改状态和DOM输出。

####2.1.5. componentDidMount: 成功渲染完成真实DOM之后触发，可以修改DOM

###2.2. 运行中阶段

####2.2.1. componentWillReceiveProps: 组件将要接收到属性时。父组件修改属性触发，可以修改新属性，修改状态
####2.2.2. shouldComponentUpdate: 组件是否要更新，返回false会阻止render调用。
####2.2.3. componentWillUpdate: 不能修改属性和状态，组件更新前。
####2.2.4. render: 只能访问this.props和this.state，只有一个顶层组件，不允许修改状态和DOM输出。
####2.2.5. componentDidUpdate: 组件更新后，可以修改DOM。

###2.3. 销毁阶段

####2.3.1. componentWillUnmount 组件销毁时。



