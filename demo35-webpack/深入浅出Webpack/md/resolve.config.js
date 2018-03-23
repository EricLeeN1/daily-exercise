export default {
    resolve: {
        // resolve.alias 配置项通过别名来把原导入路径映射成一个新的导入路径。例如使用以下配置：
        alias: {
            components: './src/components',
            // 当你通过 import Button from 'components/button' 导入时，实际上被 alias 等价替换成了 import Button from './src/components/button'。
            // 以上alias 配置的含义是把导入语句里的 components 关键字替换成 ./src/components/。
            // alias 还支持 $ 符号来缩小范围到只命中以关键字结尾的导入语句：
            'react$': '/path/to/react.min.js'
            // react$ 只会命中以 react 结尾的导入语句，即只会把 import 'react' 关键字替换成 import '/path/to/react.min.js'。
        },
        mainFields: ['browser', 'main'],
        // Webpack 会根据 mainFields 的配置去决定优先采用那份代码，只会使用第一个
        extensions: ['.vue', '.js', '.json'],
        // 优先使用目录下的.vue文件
        modules: ['./src/components', 'node_modules'],
        // 你可以通过 import 'button.vue' 导入src/components/文件下的button.vue组件/*  */。
        descriptionFiles: ['package.json'],
        // 配置描述第三方模块的文件名称，也就是 package.json 文件。
        enforceExtension: false,
        // resolve.enforceExtension 如果配置为 true 所有导入语句都必须要带文件后缀， 例如开启前 import './foo' 能正常工作，开启后就必须写成 import './foo.js'
        enforceModuleExtension: false
        // enforceModuleExtension 和 enforceExtension 作用类似，但 enforceModuleExtension 只对 node_modules 下的模块生效。 enforceModuleExtension 通常搭配 enforceExtension 使用，在 enforceExtension:true 时，因为安装的第三方模块中大多数导入语句没带文件后缀， 所以这时通过配置 enforceModuleExtension:false 来兼容第三方模块。
    }
}