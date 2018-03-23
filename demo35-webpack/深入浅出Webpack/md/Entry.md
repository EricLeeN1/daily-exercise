# Entry #

entry是配置模块的入口，可抽象成输入，Webpack 执行构建的第一步将从入口开始搜寻及递归解析出所有入口依赖的模块。

entry 配置是必填的，若不填则将导致 Webpack 报错退出。

## 1. context ##

    Webpack 在寻找相对路径的文件时会以 context 为根目录，context 默认为执行启动 Webpack 时所在的当前工作目录。 如果想改变 context 的默认配置，则可以在配置文件里这样设置它：
    
## 2. Entry 类型 ##

    1. string './app/entry' 入口模块的文件路径，可以是相对路径。
    2. array ['./app/entry1','./app/entry2'] 入口模块的文件路径，可以是相对路径
    3. object {a:'./app/entry-a',b:['./app/entry-b1','./app/enrty-b2']} 配置多个入口，每个入口生成一个Chunk
    4. 如果是array类型，则搭配output.library配置项使用时，只有数组里的最后一个入口文件的模块会被导出。

## 3. Chunk名称 ##

    1. Webpack会为每个生成的Chunk取一个名称，Chunk的名称和Entry的配置有关；
        1. 如果 entry 是一个 string 或 array，就只会生成一个 Chunk，这时 Chunk 的名称是 main；
        2. 如果 entry 是一个 object，就可能会出现多个 Chunk，这时 Chunk 的名称是 object 键值对里键的名称。
## 4. 配置动态Entry ##

    1. 假如项目里有多个页面需要为每个页面的入口配置一个 Entry ，但这些页面的数量可能会不断增长，则这时 Entry 的配置会受到到其他因素的影响导致不能写成静态的值。其解决方法是把 Entry 设置成一个函数去动态返回上面所说的配置。
    `// 同步函数
    entry: () => {
        return {
            a:'./pages/a',
            b:'./pages/b',
        }
    };
    // 异步函数
    entry: () => {
        return new Promise((resolve)=>{
            resolve({
                a:'./pages/a',
                b:'./pages/b',
            });
       });
    };`