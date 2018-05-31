#React

##1. 什么是JSX

JavaScript XML

##2. 组件生命周期

###2.1. 初始化阶段

    2.1.1. getDefaultProps:只调用一次，实例之间共享引用。
    2.1.2. getInitialState:初始化每个实例特有的状态。
    2.1.3. componentWillMount:render之前最后一次修改状态的机会。
    2.1.4. render:只能访问this.props和this.state。只有一个顶层组件，不允许修改状态和DOM输出。
    2.1.5. componentDidMount: 成功渲染完成真实DOM之后触发，可以修改DOM

###2.2. 运行中阶段

    2.2.1. componentWillReceiveProps: 组件将要接收到属性时。父组件修改属性触发，可以修改新属性，修改状态
    2.2.2. shouldComponentUpdate: 组件是否要更新，返回false会阻止render调用。
    2.2.3. componentWillUpdate: 不能修改属性和状态，组件更新前。
    2.2.4. render: 只能访问this.props和this.state，只有一个顶层组件，不允许修改状态和DOM输出。
    2.2.5. componentDidUpdate: 组件更新后，可以修改DOM。

###2.3. 销毁阶段

    2.3.1. componentWillUnmount 在删除组件之前进行清理操作，比如计时器和事件监听器。


##3. 属性和状态详解

###3.1属性的含义与用法

####3.1.1 属性的含义

    props=properties
    属性：属性是不可以由组件自己修改的，是父级传入的。
    
####3.1.2 属性的用法

    1. `属性的用法 <HelloWorld name="Eric" />`
    2. `属性的用法 <HelloWorld name={123} />`
    3. `属性的用法 <HelloWorld name={"Eric"} />`
    4. `属性的用法 <HelloWorld name={[1,2,3]} />`
    5. `属性的用法 <HelloWorld name={variable} />`
    6. `属性的用法 <HelloWorld name={function()()} />`
    7. `属性的用法
     let props = {
     one:"123",
     two:321
     }
     <HelloWorld {...props} />`
     8.`属性的用法`：不推荐
        `instance.setProps({name:"Eric"})`;

###3.2状态的含义与用法

####3.2.1 状态的含义

    1. state

####3.2.2 状态的用法

    1. getInitialState:初始化每个实例特有的状态，
    2. setState: 更新组件状态
    
###3.3 属性和状态的对比

####3.3.1 属性和状态的相似点

    1. 都是纯JS对象
    2. 都会触发render更新
    3. 都具有确定性
    
####3.3.2 属性和状态的区别

    1. 组件在运行时需要修改的数据就是状态。不需要就是属性。
    2. 属性的核心要点就是不能修改属性。
    
###3.4 属性和状态实战

####3.4.1 项目分析

    1. 分析构成项目的组件
    2. 分析组件的关系及数据传递
    3. 编写代码
    
    
##4. 事件的用法

###4.1 事件处理函数的使用

####4.1.1 编写事件处理函数
        
#####4.1.1.1 组件
    
    1. React自有方法
        render
        componentWillUpdate
        componentDidMount  
    2. 用户自定义方法
        handleClick
        handleChange
        handleMouseOver

####4.1.2 绑定事件处理函数

    1. 鼠标事件
        onClick = {this.handleClick}
        onContextMenu 右键菜单设置
        onDoubleClick 
        onMouseDown 
        onMouseEnter 
        onMouseLeave 
        onMouseOut 
        onMouseOver
        onMouseUP 
        拖拽事件
            onDrop
            onDrag
            onDragEnd
            onDragEnter
            onDragExit
            onDragLeave
            onDragOver
            onDragStart
    2. 触摸类事件
        onTouchCancel
        onTouchEnd
        onTouchMove
        onTouchStart
    3. 键盘事件
        onKeyDown
        onKeyUp
        onKeyPress
    4. 剪切事件
        onCopy
        onCut
        onPaste
    5. 表单事件
        onChange
        onInput
        onSubmit
    6. 焦点事件
        onFocus
        onBlur
    7. UI元素
        onScroll
    8. 滚动事件
        onWheel
    

###4.2 事件对象介绍

####4.2.1 事件对象使用方式

    编写事件处理函数时，添加一个参数event或者e, event是事件对象，event.target.value是事件对象的属性。
    
#####4.2.1.1 事件对象的属性 -> 通用属性

    boolean bubbles -> 事件是否冒泡
    boolean cancelable -> 事件是否可以取消
    DOMEventTarget currentTarget -> 事件是否冒泡
    DOMEventTarget target -> 事件是否冒泡
    boolean defaultPrevented -> 事件是否禁止了默认行为
    boolean dispatchConfig -> 事件是否冒泡
    number eventPhase -> 事件阶段
    boolean isTrusted -> 事件是否可信（是用户触发还是js触发）
    DOMEvent nativeEvent -> 事件对象是react封装的，要拿到原生的浏览器事件对象用这个
    number timeStamp -> 事件是否时间戳
    string type -> 事件类型
    boolean isDefaultPrevented -> 事件是否阻止默认事件
    boolean isPropagationStopped -> 事件是否禁止向上冒泡
    

#####4.2.1.2 剪切事件对象的属性 -> 特有属性

    DOMDataTransfer clipboardData(剪切的值，复制的值)

#####4.2.1.3 键盘事件对象的属性 -> 特有属性

    boolean altKey -> 是否按下alt键
    number charCode -> 按键的字符编码 abcd
    boolean ctrlKey -> 是否按下ctrl键
    function getModifierState() -> 是否按下辅助按键（ctrl,shift等）
    string key -> 按下的键
    number keyCode -> 非字符按键
    string locale -> 是否按下alt键
    number location -> 位置
    boolean metaKey -> windows键或者苹果系统花键
    boolean shiftKey -> 是否按下shift键
    boolean repeat -> 按键是否重复
    number which -> 通用话的charCode和keyCode

#####4.2.1.4 焦点事件对象的属性 -> 特有属性

    DOMEventTarget relatedTarget -> 相关节点

#####4.2.1.5 鼠标事件对象的属性 -> 特有属性

    DOMEventTarget relatedTarget -> 相关节点
    number button -> 按键的字符编码 abcd
    number buttons -> 按键的字符编码 abcd
    number clientX -> 坐标值x 浏览器窗口左上角(0,0)
    number clientY -> 坐标值y
    number pageX -> 坐标值x html页面坐标左上角(0,0)
    number pageY -> 坐标值y 
    number screenX -> 坐标值x 显示器窗口左上角(0,0)
    number screenY -> 坐标值y
    function getModifierState() -> 是否按下辅助按键（ctrl,shift等）
    boolean metaKey -> windows键或者苹果系统花键
    boolean shiftKey -> 是否按下shift键
    boolean ctrlKey -> 是否按下ctrl键
    boolean altKey -> 是否按下alt键
    
    
#####4.2.1.6 触摸事件对象的属性 -> 特有属性

    DOMTouchList changedTouches -> 实际使用中会使用一个库
    DOMTouchList targetTouches -> 
    DOMTouchList touches -> 
    function getModifierState() -> 是否按下辅助按键（ctrl,shift等）
    boolean metaKey -> windows键或者苹果系统花键
    boolean shiftKey -> 是否按下shift键
    boolean ctrlKey -> 是否按下ctrl键
    boolean altKey -> 是否按下alt键

#####4.2.1.7 UI事件对象的属性 -> 特有属性

     DOMAbstractView view -> 视窗
     number detail -> 距离
     
     
#####4.2.1.8 scroll事件对象的属性 -> 特有属性

     number deltaMode -> 移动单位m cm 或者其他
     number deltaX -> 各轴方面的移动距离
     number deltaY -> 
     number deltaZ -> 

####4.2.2 不同事件对象介绍

####4.2.3 实例演示

###4.3 事件和状态关联

    `this.setState({})`

