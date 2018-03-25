export default {
    resolveLoader: {
        // 去哪个目录下寻找 Loader
        modules: ['node_modules'],
        // 入口文件的后缀
        extensions: ['.js', '.json'],
        // 指明入口文件位置的字段
        mainFields: ['loader', 'main']
    }
}