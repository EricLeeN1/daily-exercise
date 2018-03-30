先react之后React Native
# react #

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

