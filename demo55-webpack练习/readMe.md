#webpack
6/27/2018 8:49:32 AM 
##entry--入口
##output--输出
##mode--模式
	mode: 'production'/'development'
##loader--解析
	1. rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      { test: /\.ts$/, use: 'ts-loader' }
    ]
##plugins--插件
	由于插件可以携带参数/选项，你必须在 webpack 配置中，向 plugins 属性传入 new 实例。
##configuration--配置
	webpack 的配置文件，是导出一个对象的 JavaScript 文件。
##modules--模块
##module resolution--模块解析
	webpack 中的解析规则
	1. 绝对路径
	2. 相对路径
	3. 模块路径
##dependency graph--依赖图
##manifest
	Runtime:
		在模块交互时，连接模块所需的加载和解析逻辑。包括浏览器中的已加载模块的连接，以及懒加载模块的执行逻辑。
	Manifest:
		当编译器(compiler)开始执行、解析和映射应用程序时，它会保留所有模块的详细要点。这个数据集合称为 "Manifest"。
##targets--构建目标
	因为服务器和浏览器代码都可以用 JavaScript 编写，所以 webpack 提供了多种构建目标(target)，你可以在你的 webpack 配置中设置。默认是“web”