#Vue.js实战   ->  基础篇 #
## 二、第二章 -> 数据绑定和第一个Vue应用 ##
    MVVM模式 -> Model-View-View-Modal
    双向数据绑定 -> 最核心的功能
### 2.1 Vue实例与数据绑定 ###
#### 2.1.1 实例与数据 ####
1. 通过构造函数**newVue**就可以创建一个Vue的根实例，并启动Vue应用
2. `let vm = new Vue({});` -> 变量vm就代表了这个Vue实例；
3. **el**: 指定页面已存在的DOM元素来挂载Vue实例，可以是标签也可以是选择器。-> document.getElementByld ( ’ app ’) 或者 '#app'。
4. 挂载成功以后可以通过**vm.$el**来访问该元素。
5. **建议所有会用到的数据都预先在data内声明**，这样不至于将数据散落在业务逻辑中，难以维护。
6. Vue实力本身也**代理了data对象里的所有属性，可以直接用vm.a这种方式访问**。
7. 除了6中说的显示地声明数据外，也可以指向一个已有的变量，并且**他们之间默认建立了双向数据绑定**，当修改其中任意一个时，另一个也会一起变化。
#### 2.1.2 生命周期 ####
常用的几个

1. **created**：实例创建完成后调用，此阶段完成了数据的观测等，但尚未挂载，$el还不可用。需要初始化处理一些数据时会比较有用。
2. **mounted**：el挂载到实例上后调用，一般我们第一个业务逻辑会在这里开始。
3. **beforeDestroy**: 实例销毁之前调用。主要解绑一些使用addEventListener监听的事件等。
4. **Tips**：这些钩子与el及data类似，都是作为选项写入Vue实例内，并且**钩子的this**指向的是调用它的Vue实例。即上文中的**vm**。
#### 2.1.3 插值与表达式 ####
1. 用**双大括号（M u s t a c h e语法）“｛｛｝｝”是最基本的文本插值方法**，它会自动将我们双向绑定的数据实时显出来。
2. Vue.js不支持单个表达式，不支持语句和流控制。另外，在表达式中，**不能使用用户自定义的全部变量**，只能使用Vue白名单内的全局变量，例如**Math**和**Date**。
#### 2.1.4 过滤器 ####
1. Vue.js支持**在{{}}插值的尾部添加一个管道符“（|）”**对数据进行过滤，经常用于格式化文本，比如**字母全部大写**，**货币千位使用逗号分隔等**。过滤的规则是自定义的，通过给Vue实例添加选项**filters**来设置，例如在上一节中显示当前时间的示例，可以对时间进行格式化处理。
2. **过滤器也可以串联**，并且可以接受参数。
    1. **串联**
        1. {{ message | filterA | filterB }};
    2. **接收参数**
        1. {{ message | filterA('arg1','arg2') }};
    3. 这里的字符串arg1和arg2将分别传给过滤器的第二个和第三个参数，因为第一个是数据本身 -> message。
### 2.2 指令与事件 ###
1. **指令**：是Vue.js模版中最常用的一项功能，带有前缀v-。指令的主要职责是**当其表达式的值改变时，相应的将某些行为应用到DOM上**。
2. **Vue.js核心理念**：**数据驱动DOM**，不到万不得已时不要主动操作DOM，只需要维护好数据就行。
3. **v-bind**：动态更新HTML元素上的属性，比如id、class等。
4. **v-on**：绑定事件监听器，用来做些交互。表达式除了方法名，也可以直接是一个内联语句。如：`<p v-if="show">这是一段文本</p>`
    `<button v-on:click = "show = false">点击隐藏</button>`
5. **外部调用methods方法**：vm.init() -> init()是vm.methods里面的方法。
### 2.3 语法糖 ###
1. **定义**：语法糖是指在不影响功能的情况下，添加某种方法实现同样的效果，可以简化代码的书写，从而方便程序开发。
2. **v-bind语法糖**：可以省略v-bind，直接写一个冒号":"：`v-bind:href="xxx"` -> `:href="xxx"`
3. **v-on语法糖**：可以知己用"@"来缩写：`v-on:click="doSomeThing"` -> `@click="doSomeThing"`
## 二、第三章 -> 计算属性 ##
### 3.1 什么是计算属性 ###
1. 模版中双向绑定表达式时如果表达式过长了或者逻辑更为复杂时，就会变得臃肿甚至难以阅读和维护，因此在遇到复杂的逻辑时应该使用计算属性。
2. 所有的计算属性都以函数的形式写在Vue实例内的**computed选项**内，最终返回计算后的结果。
### 3.2 计算属性用法 ###
1. 在一个计算属性里可以完成各种复杂的逻辑，包括运算、函数调用等。只要最终返回一个结果就可以了。
2. 计算属性还可以依赖多个Vue实例的数据，只要其中任一数据变化，计算属性就会重新执行。视图也会更新。package1或package2中的商品有任何变化，比如购买数量变化或增删商品时，计算属性prices就会自动更新，视图中的总价也会自动变化。
3. 每一个计算属性都包含一个getter和一个setter，我们上面的两个实例都是计算属性的默认用法。只是利用了getter来读取。需要时也可以加一个setter函数，当手动修改计算属性的值就像修改了一个普通数据那样时，就会触发setter函数，执行一些自定义的操作。
4. **计算属性小技巧**：
    1. 计算属性可以依赖其他计算属性
    2. 计算属性不仅可以依赖当前Vue实例的数据，还可以依赖其他实例的数据。
### 3.3 计算属性缓存 ###
1. **使用计算属性的原因**：计算属性是基于他的依赖缓存的，一个计算属性所依赖的数据发生变化时，它才会重新取值，所以只要对应的属性不改变，计算属性也就不更新。
2. 使用计算属性还是methods取决于你是否需要缓存，当**遍历大数组和做大量计算时，应当使用计算属性，除非你不希望得到缓存。**
## 三、第四章 -> v-bind及class与style绑定 ##
### 4.1 了解v-bind指令 ###

1. **v-bind**：动态更新HTML元素上的属性。
2. **常见需求**：
    1. 绑定元素的样式名称class。
    2. 绑定元素的内联样式style。
### 4.2 绑定class的几种方式 ###
#### 4.2.1 对象语法 参见 -> base/绑定class的几种方法-对象.html case -> #app

1. 给v-bind：class设置一个对象，可以动态的切换class。
2. 对象中也可以传入多个属性，来动态切换class。另外:class可以与普通class共存。 case -> #app1
3. :class内的表达式每项为真时，对应的类名就会加载。
4. 当:class的表达式过长或逻辑复杂时，还可以绑定一个计算属性。这是一种很友好和常见的用法。一般当条件多于两个时，都可以使用data或computed，例如使用计算属性。 case -> #app2
5. 除了计算属性，你也可以直接绑定一个Object类型的数据，或者使用类似计算属性的methods。

#### 4.2.2 数组语法 参见 -> base/绑定class的几种方法-数组.html ####

1. 当应用多个class时，可以使用数组语法，给：class绑定一个数组，应用一个class列表。 case -> #app
2. 也可以使用三元表达式来根据条件切换class。 case -> #app1
3. 也可以在数组语法中使用对象语法。
4. 当然与对象语法一样，也可以使用data、computed和methods三种计算方法； case -> #app2
5. 使用计算属性给元素动态设置类名，在业务中经常用到，尤其是在写复用组件的时候。所以再开发过程中，如果表达式较长或逻辑复杂，应该尽可能地优先使用计算属性。

#### 4.2.3 在组件上使用 参见 -> base/绑定class的几种方法-组件.html ####

2018/2/22 10:43:29 稍后再见。

### 4.3 绑定内联样式 参见 -> base/绑定内联样式.html ###

1. 使用v-bind:style即（:style）可以给元素绑定内联样式，方式与：class类似，也有对象语法和数组语法。看起来很像直接在元素上写CSS；
2. CSS属性名称使用驼峰命名（camelCase）或短横分隔命名（kebab-case）。
3. 大多数情况下，直接写一长串的样式不便于阅读和维护，所以一般写在data或computed里，以data为例改写上面的示例；
4. 应用多个样式对象时，可以使用数组语法:
5. 在实际业务中，:style的数组语法并不常用，因为往往可以写在一个对象里面：而较为常用的应当是计算属性。
6. 另外，使用:style时，Vue.js会自动给特殊的CSS属性名称增加前缀，比如transform；

## 四、第五章 内置指令 ##
### 5.1基本指令 ###
#### 5.1.1 v-cloak ####
v-cloak不需要表达式，他会在Vue实例结束时从绑定的HTML元素上移除，经常和CSS的display:none;配合使用。
#### 5.1.2 v-once ####
v-once也是一个不需要表达式的指令。作用是定义它的元素或组件只渲染一次，包括元素或组件的所有子节点。首次渲染后，不再随数据的变化重新渲染，将被视为静态内容；
v-once在业务中也很少使用，当你需要进一步优化性能时，可能会用到。
### 5.2条件渲染指令###
#### 5.2.1 v-if、v-elsee-if、v-else ####
1. 条件指令可以根据表达式的值在DOM中渲染或销毁元素/组件
2. 给两个input都加上key以后就不会复用了，切换类型时键入的内容也会被删除，不过两个label元素仍然是复用的，因为没有添加key属性。
#### 5.2.2 v-show ####
1. v-show用法与v-if基本一致，不过v-show是改变元素的CSS属性display。当v-show表达式的值为false时，元素会隐藏。
2. v-show不能在template上使用
#### 5.2.3 v-if与v-show的选择 ####
1. v-if与v-show具有类似的功能，不过v-if才是真正的条件渲染，它会根据表达式适当地销毁或重建元素及绑定的事件或子组件。v-if只有当条件第一次变为真时才开始编译。
2. 而v-show只是简单的CSS属性切换，无论条件真与否，都会被编译。
3. **区别：**v-show只是简单的CSS属性切换，而v-if更适合条件不经常改变的场景，因为它切换开销相对较大，而v-show适用于频繁切换条件。
### 5.3 列表渲染指令 v-for ###
#### 5.3.1基本用法 ####
#### 5.3.2数组更新 ####
    push()
    pop()
    shift()
    unshift()
    splice()
    sort()
    reverse()
    使用以上方法会改变被这些方法调用的原始数组，有些方法不会改变原数组。
    filter()
    concat()
    slice()
    他们返回的是一个新数组，在使用这些非变异方法时，可以用新数组来替换原数组。
 **tips：**

1. 通过索引直接设置项。

    1. 解决方法
        1. Vue.set()。 在webpack中使用组件化的方式时，由于默认没有导入的Vue，这时可以使用$set。this.$set();这里的this指向的就是当前组件实例，即app。在非webpack模式下也可以使用$set方法，例如app.$set();
        2.vm.books.splice(); 
2. 修改数组长度。
    1. 解决方法
        1. vm.books.splice(1);
#### 5.3.3 过滤与排序 ####

当你不想改变原数组，想通过一个数组的副本来做过滤或排序的显示时，可以使用计算属性来返回过滤或排序后的数组。

### 5.4 方法与事件 ###
#### 5.4.1基本用法 ####
1. @click的表达式可以直接使用JavaScript语句，也可以是一个在Vue实例中methods选项内的函数名。
2. 在大部分业务场景中，如果方法不需要传入参数，为了简便可以不写括号。
3. Vue提供了一个特殊变量$event，用于访问原生DOM事件。
#### 5.4.2 修饰符 ####
event.preventDefault()也可以用Vue事件的修饰符来实现，在@绑定的事件后加小圆点‘.’，再跟一个后缀来使用修饰符。支持一下修饰符。

    1. .stop
    2. .prevent
    3. .capture
    4. .self
    5. .once
**具体用法**

1. 阻止单机事件冒泡 -> `<a  @click.stop =” handle " ></a>`
2. 提交事件不再重载页面 -> `<form  @submit.prevent= " handle ”></ form>`
3. 修饰符可以串联 -> `<a  @click.stop.prevent =” handle ”></ a>`
4. 只有修饰符 -> `<form  @submit . prevent></form>`
5. 添加事件侦听器时使用事件捕获模式 -> `<div  @click . capture =” handle  ”>  ...  </div>`
6. 只当事件在该元素本身（而不是子元素）触发时触发回调 -> `<div  @click.self =” handle ”>  ...  </div>`
7. 只触发一次，组件同样适用 -> `<div  @click.once =” handle ”>  ...  </div >`
8. 在表单元素上监听键盘事件时，还可以使用按键修饰符，比如按下具体某个键时才调用方法。 -> `<input @keyup.13＝“submit”〉`
9. 也可以自己配置具体按键，然后像8中所示应用即可 -> Vue.config.keyCodes.f1  =  112;
10. 除了具体的某个keyCode外，Vue还提供了一些快捷名称，以下是全部的别名。
    1. .enter
    2. .tab
    3. .delete(抓获“删除”和“退格”键)
    4. .esc
    5. .space
    6. .up
    7. .down
    8. .left
    9. .right
11. 这些按键修饰符也可以组合使用，或和鼠标一起配合使用
    1.  .ctrl
    2.  .alt
    3.  shift
    4.  meta(Mac下是Command键，Windows下是窗口键)
12. 11举例
    1. Shift + S -> `<input  @keyup.shift .83 =” handleSave ”>`
    2. Ctrl + Click -> `<div  @click.ctrl =” doSomething ”> Do  something</div>`
## 五、第六章 表单与v-modal ##
### 6.1 基本用法 ###
1. **v-modal**指令用于在表单类元素上双向绑定数据。-> case input[type='text']
2. **单选按钮**在单独使用时，不需要v-model,直接使用v-bind绑定一个布尔类型的值，为真时选中，为否时不选。在组合使用时就需要v-model配合value来使用
3. **复选框**单独使用时用v-model来绑定一个布尔值。在勾选时数据checked的值变为了true，label中渲染的内容也会更新。组合使用时，也是v-model与value一起，多个勾选框都绑定到同一个数组类型的数据，value的值在数组当中，就会选中这一项。这一过程也是双向的，在勾选时，value的值也会自动push到这个数组中。
4. **选择列表**即下拉选择器，单选时，option是备选项，如果含有value属性，v-model就会优先匹配value的值；如果没有，就会直接匹配option的text。给selected添加属性multiple就可以多选了，此时v-model绑定的是一个数组，与复选框用法类似。在业务中，option经常用v-for动态输出，value和text也是用v-bind来动态输出的。
### 6.2 绑定值 ###
上节介绍的单选按钮、复选框和选择列表在单独使用或单选的模式下，v-model绑定的值是一个静态字符串或布尔值，但是在业务中，有时需要绑定一个动态的数据，这时可以用v-bind来实现。
### 6.3 修饰符 ###
与事件的修饰符类似，v-model也有修饰符，用于控制数据同步的时机。
1. **.lazy：**在输入框中，v-model默认是在input事件中同步输入框的数据（除了提示中介绍的中文输入法情况外），使用修饰符.lazy会转变为在change事件中同步。此时msg并不是实时改变的，而是在失去焦点或者按回车时才更新。
2. **.number：**使用修饰符.number可以将输入转换为Number类型，否则虽然输入的是数字，但他其实是String，在数字输入框时会比较有用。
3. **.trim：**修饰符.trim可以自动过滤输入的首尾空格。
## 六、第七章 组件详解 ##
### 7.1 组件与复用 ###
#### 7.1.1 为什么使用组件 ####
#### 7.1.2 组件用法 ####
1. 全局注册
    - `Vue.component (’my-component’,{
    ／／逃项
    })`;
    - my-component就是注册的组件自定义标签名称，推荐使用小写加减号分割的形式命名。
    - 要在父实例中使用这个组件，必须要在实例创建前注册，之后就可以用<my-componen></my-componen>的形式来使用组件了。
2. 局部注册
    - 在Vue实例中，使用components选项可以局部注册组件，注册后的组件只有在该实例作用域下有效，组件中也可以使用components选项来注册组件，使组件可以嵌套。
    - Vue组件的模版在某些情况下会受到HTML的限制，比如<table>内直接使用组件是无效的。这种情况下，可以使用特殊的is属性来挂载组件。
    - 上述情况下tbody在渲染时，会被替换为组件的内容，常见的限制元素还有'ul/ol/select'。
3. template
    - 在组件选项中添加template就可以显示组件内容了
    - template的DOM结构必须被一个元素包含，如果直接写成’这里是组件的内容‘，不带“<div></div>”是无法渲染的。
4. tips
    - 除了template选项外，组件中还可以像Vue实例那样使用其他的选项，比如data，computed、methods等。但是在使用data时，和实例稍有区别，data必须是函数，然后将数据return出去。
    - JavaScript对象是引用关系，所以如果return出的对象引用了外部的一个对象，那这个对象就是共享的，任何一方修改都会同步。
### 7.2 使用props传递数据 ###
#### 7.2.1 基本用法 ####
父组件正向地向子组件传递数据或参数的过程就是通过props来实现的。在组件中，使用选项props来声明需要从父级接受的数据，props的值可以是两种，一种是字符串数组，一种是对象。

## 第10章 使用webpack ##
### 10.1 webpack基础配置 ###

1. 使用npm初始化配置 -> `npm init`
2. 本地局部安装webpack -> `npm  install  webpack  --save-dev`
3. 本地局部安装webpack-dev-server -> `npm  install  webpack-dev  server  --sav e -dev`
4. 在目录下创建一个js文件,并初始化它的内容。 -> 'webpack.config.js'
    `var config = {};
    module.exports = config;`
5. 然后在package.json的scripts里增加一个快速启动webpack-dev-server服务的脚本 ->
    
    `”dev”：”webpack-dev-server --open --config  webpack.config.js ”`  
    可以设置默认打开地址和端口号 -> `webpack-dev-server --host 127.0.0.1 --port 8888 --open --config webpack.config.js` (默认地址是：127.0.0.1:8080)
6. 配置entry和output入口和出口

    - **entry：**入口是告诉webpack从哪里开始寻找依赖，并且翻译。
    - **output：**出口则用来配置编译后的文件存储位置和文件名。
    - **entry中的main:**就是我们配置的单入口。
    - **output中的path:**用来存放打包后的文件的输出目录，是必填项。
    - **output中的publicPath:**指定资源文件引用的目录，如果放在cdn上也可以填CDN的网址。
    - **output中的filename:**用于指定输出文件的名称。
7. 运行命令 -> `npm run dev` 
8. 执行下面的命令进行打包 -> `webpack --progress --hide-modules` 生成一个*/dist/main.js文件。
### 10.2 webpack配置逐步完善 ###

1. 包
    - **style-loader** 解析css -> npm install style-loader --save-dev
    - **css-loader** 解析css -> npm install css-loader --save-dev
    - **extract-text-webpack-plugin** 用来把散落各地的css提取出来 -> npm install extract-text-webpack-plugin --save-dev
2. 配置loader(加载器)
    `module: {
        rules: [{
            test: /\.css$/,
            use:[
                'style-loader',
                'css-loader'
            ]
        }]
    }`。
    在module对象的rules属性中可以指定一系列的loaders,每一个loader都必须包含test和use两个选项。上面这句话意思是，当webpack编译过程中遇到require()或import语句导入一个后缀名为.css的文件时，先将它通过css-loader转换，在通过style-loader转换，然后继续打包。use选项的值可以是数组或字符串，如果是数组，它的编译顺序就是从后往前。

### 10.3 单文件组件与vue-loader ###

1. .vue文件一般包括3个部分，即<template>/<script>/<style>
2. 需要安装的包
    `npm install --save vue`
    `npm install --save-dev vue-loader`
    `npm install --save-dev vue-style-loader`
    `npm install --save-dev vue-template-compiler`
    `npm install --save-dev vue-hot-reload-api`
    `npm install --save-dev babel`
    `npm install --save-dev babel-loader`
    `npm install --save-dev babel-core`
    `npm install --save-dev babel-plugin-transform-runtime`
    `npm install --save-dev babel-preset-es2015`
    `npm install --save-dev babel-runtime`
3. 配置一个.babelrc的文件

### 10.4 用于生产环境 ###

1. 需要安装的包
    `npm install --save-dev url-loader`
    `npm install --save-dev file-loader`
2. 由于已经在webpack的output选项里已经指定了path和publicPath，打包完后，所有的资源都会保存在demo/dist目录下/打包会用到下面两个依赖:

    `npm install --save-dev webpack-merge`
    `npm install --save-dev html-webpack-plugin`

3. 为了方便开发和生产环境的切换，新建一个用于生产环境的配置文件 -> `webpack.prod.config.js`
4. 在package.json中，再加入一个build的快捷脚本用来打包。 -> `"build":"webpack --progress --hide-modules --config webpack.prod.config.js"`

## 第11章 插件 ##

### 11.1 插件 ###
### 11.2 前端路由与vue-router ###
#### 11.2.1 vue-router基本用法 ####

1. 包：
    `npm install --save vue-router`

### 11.3 状态管理与Vuex ###

#### 11.3.1 状态管理与使用场景 ####

Vuex作为Vue的一个插件来使用，可以更好的管理和维护整个项目的组件状态。使组件应用更加高效。

#### 11.3.1 Vuex基本用法 ####

1. 包 -> `npm install --save vuex`
2. 仓库store包含了应用的数据（状态）和操作过程。Vuex里的数据都是响应式的，任何组件使用同一store的数据时，只要store的数据变化，对应的组件也会立即更新。
    1. 数据保存在Vuex选项的state字段内 -> 在任何组件内，可以直接通过$store.state.count读取 -> 直接写在template里显得有点乱，可以用一个计算属性来显示。
    2. mutations是Vuex的第二个选项，用来直接修改state里的数据，我们给计数器增加2个mutations，用来加1和减1；-> 在组件内，通过this.$store.commit方法来执行mutations。
        1. mutations还可以接受第二个参数，可以是数组、字符串、或对象等类型。
        2. 提交mutation的另一种方式是直接使用包含type属性的对象
        3. 注意mutation里尽量不要异步操作数据，下一节里的actions里会介绍如何处理异步。
        
#### 11.3.2 高级用法 ####

1. Vuex还有其他三个选线可以使用：getters、actions、mudules。
	1. getters：类似最高层的computed计算属性，也可以依赖其他的getter,把getter作为第二个参数。
	2. actions：actions里面提交的是mutation，并且可以异步操作业务逻辑。在组件内通过$store.dispatch触发。
	3. modules：用来将store分割到不同模块。类似于小程序分包，每个module都拥有自己的state、getters、mutations、actions。而且可以多层嵌套。除了state中要用modules名字以外，别的不需要。类似于同一环境内。 -> store.state.a //moduleA的状态
	4. module的mutation和getter接收的第一个参数state是当前模块的状态。在actions和getters中，还可以接收一个参数rootState,来访问根节点的状态。