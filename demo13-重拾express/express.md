
#windows下安装express

##在你的windows上已经安装了node.js的基础上再安装express

###第一部分:安装express 

    1. 第一步:执行 npm install -g express-generator 
        tips:必须安装这个,不然创建express项目的时候会提示express命令没有找到
    2. 第二步:执行 npm install -g express
    3. 第三步:执行 express -V
        tips:'V'是大写的,如果express安装成功会显示版本号,
        我用的是window10。貌似不一样， express --version

###第二部分:创建一个express项目 

    1. 第一步:执行 express youProjectName
        tips:youProjectName是你的项目的名称,按照自己的要求选择合适的项目名称--view=jade 选择view模版的类型 或者是ejs 感觉ejs更简单
    2. 第二步 :进入你的项目:cd youProjectName
    3. 第三步:在你的项目的目录下执行 npm install
    4. 第四步:启动你的项目,执行 npm start
    
###第三部分:在浏览器中访问你的项目
    
    打开你的浏览器,在地址栏中输入:http://127.0.0.1:3000
    然后你会看到:express的欢迎信息 