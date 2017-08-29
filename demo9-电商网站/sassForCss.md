#sass安装

##1.ruby安装
    
    1. 因为sass依赖于ruby环境，所以装sass之前先确认装了ruby。先到官网下载个ruby。地址：[http://rubyinstaller.org/](http://rubyinstaller.org/ "rubyinstaller")或[https://www.ruby-lang.org/en/documentation/installation/#homebrew](https://www.ruby-lang.org/en/documentation/installation/#homebrew "ruby")
    2. 安装的时候请勾选Add Ruby executables to your PATH这个选项，添加环境变量

##2.sass安装

    1. 安装完ruby之后，在开始菜单中，找到刚才我们安装的ruby，打开Start Command Prompt with Ruby
    2. 命令行中输入
        gem install sass
    3. 或者Git克隆
        git clone git://github.com/nex3/sass.git
        cd sass
        rake install
    4. 升级sass版本的命令行为
        gem update sass
    5. 查看sass版本的命令行为
        sass -v
    6. 运行帮助命令行来查看需要的命令
        sass -h
    7. sass-淘宝镜像安装
    由于国内网络原因（你懂的），导致 rubygems.org 存放在 Amazon S3 上面的资源文件间歇性连接失败。
    这时候我们可以通过gem sources命令来配置源，先移除默认的https://rubygems.org源，然后添加淘宝的源https://ruby.taobao.org/，然后查看下当前使用的源是哪个，如果是淘宝的，则表示可以输入sass安装命令gem install sass了，关于常用gem source命令可参看：常用的gem source
    $ gem sources --remove https://rubygems.org/
    $ gem sources -a https://ruby.taobao.org/
    $ gem sources -l
    *** CURRENT SOURCES ***
    https://ruby.taobao.org
    请确保只有 ruby.taobao.org
    $ gem install sass
    8. mac安装：
    $ curl -L https://get.rvm.io | bash -s stable
    $ source ~/.rvm/scripts/rvm
    $ rvm -v
    $ rvm install 2.0.0
    $ gem -v

##3.sass语法

    1. 文件后缀名
        sass有两种后缀名文件：
        1. 一种后缀名为sass，不使用大括号和分号；
        2. 另一种就是我们这里使用的scss文件，
    2. 导入
        sass的导入(@import)规则和CSS的有所不同，编译时会将@import的scss文件合并进来只生成一个CSS文件。但是如果你在sass文件中导入css文件如@import 'reset.css'，那效果跟普通CSS导入样式文件一样，导入的css文件不会合并到编译后的文件中，而是以@import方式存在。
        所有的sass导入文件都可以忽略后缀名.scss。一般来说基础的文件命名方法以_开头，如_mixin.scss。这种文件在导入的时候可以不写下划线，可写成@import "mixin"。
    3. 注释   
        一种是标准的css注释方式/* */，
        另一种则是//双斜杆形式的单行注释，这种单行注释不会被转译出来。
    4. 变量
        sass的变量必须是$开头，后面紧跟变量名，而变量值和变量名之间就需要使用冒号(:)分隔开（就像CSS属性设置一样）。
        如果值后面加上!default则表示默认值。
        例子：
        //-------------------------------
        $fontSize: 12px;
        body{
            font-size:$fontSize;
        }
        //css style
        //-------------------------------
        body{
            font-size:12px;
        }
        1. 普通变量
            定义之后可以在全局范围内使用
        2. 默认变量
            sass的默认变量仅需要在值后面加上!default即可。
            $baseLineHeight:1.5 !default;
            sass的默认变量一般是用来设置默认值，然后根据需求来覆盖的，覆盖的方式也很简单，只需要在默认变量之前重新声明下变量即可
            $baseLineHeight:        2;
            $baseLineHeight:        1.5 !default;
        3. 特殊变量
            一般我们定义的变量都为属性值，可直接使用，但是如果变量作为属性或在某些特殊情况下等则必须要以#{$variables}形式使用。
            $borderDirection:       top !default; 
            $baseFontSize:          12px !default;
            $baseLineHeight:        1.5 !default;
            //应用于class和属性
            .border-#{$borderDirection}{
                border-#{$borderDirection}:1px solid #ccc;
            }
            //应用于复杂的属性值
            body{
            font:#{$baseFontSize}/#{$baseLineHeight};
            }
            //css style
            //-------------------------------
            .border-top{
            border-top:1px solid #ccc;
            }
            body {
            font: 12px/1.5;
            }
        4. 多值变量
            多值变量分为list类型和map类型，简单来说list类型有点像js中的数组，而map类型有点像js中的对象
            1. list
            list数据可通过空格，逗号或小括号分隔多个值，可用nth($var,$index)取值。关于list数据操作还有很多其他函数如length($list)，join($list1,$list2,[$separator])，append($list,$value,[$separator])等，具体可参考sass Functions（搜索List Functions即可）
            定义
            //一维数据
            $px: 5px 10px 20px 30px;
            //二维数据，相当于js中的二维数组
            $px: 5px 10px, 20px 30px;
            $px: (5px 10px) (20px 30px);
            使用
            //sass style
            //-------------------------------
            $linkColor:         #08c #333 !default;//第一个值为默认值，第二个鼠标滑过值
            a{
                color:nth($linkColor,1);
                &:hover{
                color:nth($linkColor,2);
                }
            }
            //css style
            //-------------------------------
            a{
                color:#08c;
            }
            a:hover{
                color:#333;
           }
            2. map
            map数据以key和value成对出现，其中value又可以是list。格式为：$map: (key1: value1, key2: value2, key3: value3);。可通过map-get($map,$key)取值。关于map数据还有很多其他函数如map-merge($map1,$map2)，map-keys($map)，map-values($map)等，具体可参考sass Functions（搜索Map Functions即可）
            定义
            $heading: (h1: 2em, h2: 1.5em, h3: 1.2em);
            使用
            //sass style
            //-------------------------------
            $headings: (h1: 2em, h2: 1.5em, h3: 1.2em);
            @each $header, $size in $headings {
            #{$header} {
                font-size: $size;
                }
            }
            //css style
            //-------------------------------
            h1 {
                font-size: 2em; 
            }
            h2 {
                font-size: 1.5em; 
            }
            h3 {
                font-size: 1.2em; 
            }
        5. 全局变量
        在变量值后面加上!global即为全局变量。这个目前还用不上，不过将会在sass 3.4后的版本中正式应用。目前的sass变量范围饱受诟病，所以才有了这个全局变量。
    