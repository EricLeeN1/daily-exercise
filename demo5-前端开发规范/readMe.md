# Web前端开发规范

##    一、 HTML的命名规则

###     1. 文件名称命名规则

    1. 统一用小写的英文字母、数字和下划线的组合，不得包含汉字空格和特殊字符
    2. 命名的原则
        1. 方便理解->使得你自己和工作组的每一个成员能够方便的理解每一个文件的意义
        2. 方便查找->当我们在文件夹中使用//按名称排例//的命令时，同一种大类的文件能够排列在一起，以便我们查找、修改、替换、计算负载量等等操作
       
###     2. 文件名称命名规则 
    
    index.htm    index.html      index.asp     index.aspx      index.jsp       index.php

###     3.  各子页命名的原则
	
    1. 统一用翻译的英文命名
        index
        product
        newslist
        aboutus
    2. 统一用拼音命名
    3. 注意：不要英语拼音混用
    4. 常见子页面->
	   关于我们 \ aboutus.html
	   信息反馈 \ feedback.html
	   产 品 \ product.html
	   新闻列表 \news.html
	   发展历史 \history.html©
	   联系我们 \linkus.html

##    二、 图片的命名规则

###     1. 常规命名
    1. banner：放置在页面顶部的广告、装饰图案等长方形的图片取名
    2. logo：标志性的图片取名
    3. button：在页面位置不固定并且带有链接的小图片取名
    4. menu：在页面上某个位置连续出现，性质相同的链接栏目的图片拿我们取名
    5. pic：装饰用的图片我们取名
    6. title不带链接表示标题的图片我们取名
    
###    2.  位置区别

    图片的名称分为头尾两部分，用下划线隔开，头部分表示此图片的大类性质。 例如：广告、标志、菜单、按钮等等。    

##    三、 脚本文件和动态文件命名规则

###    1. 一般使用脚本功能的英文小写缩写命名
    
    1).实际模块 -> 例如
        - 广告条的JavaScript文件命名为ad.js
        - 弹出窗口的JavaScript文件命名为pop.js
    2).共用模块
        - 英文命名，后缀.js
        - common.js,basic.js
    3).外部资源
        - Jquery.min.js
        - Jquery.validate.js
        - Jquery.date.js
    
###    2. 动态语言文件命名原则:见名知意 
        
    1).以性质_描述，描述可以有多个单词，用“_”隔开，性质一般是该页面得概要
        范例：register_form.aspx   register_post.aspx  topic_lock.aspx
    2).不同模块之间，可以使用不同的前缀来进行区分 
  
##   四、文件存放位置规范

###    1. 文件夹
    
    1. flash存放flas文件
    2. images存放图片文件
    3. inc存放include文件
    4. library存放dw库文件
    5. media存放多媒体文件
    6. script存放JavaScript脚本
    7. css存放css文件

###    2. 网站页面位置存放
    
    1. 服务器端
        admin
    2. 客户端
        web
        网站根目录

##     五、Css书写规范

###    1. css
    
    1.  CSS 指层叠样式表 (Cascading Style Sheets)
    2.  样式定义如何显示 HTML 元素
    3.  样式通常存储在样式表中
    4.  把样式添加到 HTML 5.0 中，完全做到内容与表现分离
    5.  外部样式表可以极大提高工作效率
    6.  外部样式表通常存储在 CSS 文件中
    7.   多个样式定义可层叠为一

###    2. 商业开发
    
    1. 重新定义html样式
        1. 重新定义HTML样式为设计师重新定义已有的HTML标签样式，  影响全部的被设定标签样式， 用于统一网页中某一标签的样式定义
        2. 样式名“HTML标签”例：hr { border: 1px dotted #333333 }
    2. 链接状态样式
	1. 链接状态样式为设计师对链接不同状态设定特殊样式， 影响被使用本样式区域中的链接。
	2. a.nav:link(中间无空格) 、.nav a:link  第一种只能修饰<a>标签中；第二种可以修饰所有包含有<a>标签的其他标签
    3. 自定义样式
        1. 样式为设计师自定义的新 CSS 样式，影响被使用本样式的区域， 用于完成网页中局部的样式设定
        2. 样式名 “.”+“相应样式效果描述的单词或缩写”例：“ .shadow ”文字样式样式名“.no”+“字号”+“行距”+“颜色缩写”例：“ .no12 ” 、“ .no12_24 ”

###    3. class与ID的使用规范

    1. 区别
        1. ID在一个页面中有且只能有一个。所以使用ID表示的CSS样式只能表示一个元素的样式
        2. CLASS在一个页面中可以有多个，也就是说定义一个CSS样式后，可以有多个元素引用这个class
    2. 书写方式
	1. ID的书写样式：#title{font-size:18px; color:#333;}
	2. Class书写方式： .title{font-size:18px;color:#333;}
    3. 命名注意：
	注意：1.大的框架命名比如header/footer/wrapper/left/right之类的由设计框架之人统一命名。其他样式名称由小写英文&数字&_来组合命名, 避免使用中文拼音,尽量使用简易的单词组合;总之,命名要语义化,简明化。
	避免命名重复
		注意1：通过从属写法规避 <div id="mainnav"><div class="firstnav">...</div></div>, 
        样式写法:  #mainnav  .firstnav{.......}
		注意2：规避class与id重名,不建议使用id选择器
		注意3：重复使用率高的命名,可加代号加下划线起始,比如title_news;
		注意4：取父级元素id/class命名部分命名,例如：<div    id="mainnav"><div class="main_firstnav">...</div></div>
###    4. css的命名规范

    1. 意义
        1. 规范的命名有助于提升团队开发效率
        2. 规范的命名有助于后期产品的维护
        3. 规范的命名有助于后期的二次开发
    2. 范例
        1. 页面结构
            容器: container/wrap;整体宽度：wrapper;页头：header;内容：content;页面主体：main;页尾：footer;
            侧栏：sidebar;栏目：column;中间内容：center;
        2. 导航
            导航：nav;主导航：mainnav/globalnav;子导航：subnav;顶导航：topnav;边导航：sidebar;左导航：leftsidebar;
            右导航：rightsidebar;边导航图标：sidebarIcon;菜单：menu;子菜单：submenu;标题: title
        3. 功能
            标志：logo;登陆：login;登录条：loginbar;注册：regsiter;产品：products;产品价格：products_prices;
            产品评论：products_review;编辑评论：editor_review;最新产品：news_release; 最新产品：news_release;广告/标语：banner;摘要:summary;
            生产商：publisher;缩略图：screenshot;常见问题：faqs;关键词：keyword;博客：blog;论坛：forum;
            搜索：search;搜索输入框：search_input;搜索输出：search_output;搜索结果：search_results;加入我们：joinus;状态：status;
            按钮：btn;滚动：scroll;标签页：tab;文章列表：list;提示信息：msg/message;当前的: current;小技巧：tips;皮肤：skin;充值：pay;活动：activities;
            推广：promotion;公告：announcement;排行：ranking;公司简介：company_profile;公司设备：equipment;公司荣誉：glories;企业文化：culture;企业规模：scale;营销网络：sales_network;组织机构：organization;
            技术力量：technology;分支机构：branches;企业资质：enterprise_qualification;公司实力：strength_strength;经营理念：operation_principle;
            经理致辞：manager_oration;发展历程：development_history;工程案例：engineering_projects;分类浏览：browse_by_category;应用领域：application_fields;人力资源：human_resource_hr;领导致辞： leader_oration;
            客户留言：customer_message;客户服务：customer_service;您的要求：your_requirements;销售信息：sales_information;招商：enterprise_establishing;教育培训：education_training;在线交流：online_communication;
            质量认证：quality_certification;合作加盟：joinIn_cooperation;产品描述：products_description;业务范围：business_scope;产品销售：sales_sales;联系我们：contact_us;信息发布：information;
            返回首页：homepage;产品定购：order;电子商务：e_business;版权所有：copy _right;友情连结：hot_link;行业新闻：trade_news;行业动态：trends;
            邮编：postal_code_zipcode;新闻动态：news_trends;公司名称：company_name;销售热线：sales_hotline;联系人：contact_person;建设中：in_construction;证书：certificate;
            地址：add;电话：tel;传真：fax;产品名称：product_name;产品说明：description;价格：price;品牌：brand;
            规格：specification;尺寸：size;生产厂家：manufacuturer;型号：model;产品标号：item_no;技术指标：technique_data;产品描述：description;
            产地：production_place;用途：application;论坛：forum;在线订购：on_line_order;招标：bidInviting;综述：general;业绩：achievements;大事：great_event;动态：trends;
            服务：service;投资：investment;行业：industry;规划：programming;环境：environment;发送：delivery;提交：submit;重写：reset;社区：community;
            业务：business;在线调查：online_inquiry;下载中心：download;意见反馈：feedback;常见问题：faq;中心概况：general_profile;游乐园：amusement_park;专题报道：special_report;图标: icon;注释：note;
            指南：guild;服务：service;热点：hot;新闻：news;下载：download;投票：vote;商标：label/branding;当前位置：breadcrumb/loc;购物车：shop;
            标签：tag;信誉：siteinfo_credits;网站信息：siteinfo;法律声明：siteinfo_legal;合作伙伴：partner;友情链接：friendlink;版权：copyright;

##六. Html代码书写规范

###    1. head区域代码规范

    1. 必须加入的标签
    关键字
    `<meta name="keyword" content="xxxxxxxxx,xxxxxx">`
    CSS
    `<link rel="stylesheet" href="css/xxx.css">`	
    网页显示字符集
    `<meta content="text/html; charset=utf-8" http-equiv="Content-Type">`	
    网页标题
    `<title>前端开发规范</title>`
    2. 可选加入的标签
	公司版权注释
            <!--- The site is designed by Eric 08/2017 --->
	网页制作者信息
            <meta name="author" content="webmaster@maketown.com">
	网站简介
            <meta name="DESCRIPTION" content ="xxxxxxxxxxxxxxxxxxxxxxxxxx">
	设定网页的到期时间。一旦网页过期，必须到服务器上重新调阅。
            <meta http-equiv ="expires" content ="Wed, 26 Feb 1997 08：21：57 GMT">
	禁止浏览器从本地机的缓存中调阅页面内容
            <meta http-equiv ="Pragma" content ="no-cache">
	用来防止别人在框架里调用你的页面
            <meta http-equiv ="Window-target" content ="_top">
	自动跳转。
            <meta http-equiv ="Refresh" content ="5;url=http：//www.yahoo.com">
	网页搜索机器人向导。用来告诉搜索机器人哪些页面需要索引，哪些页面不需要索引。
            <meta name="robots" CONTENT="none">
            CONTENT的参数
                有all,none,index,noindex,follow,nofollow。默认是all。 
	收藏夹图标
            <link rel = "Shortcut Icon" href="favicon.ico">
	所有的javascript的调用尽量采取外部调用.	
            <script language="JavaScript" src="script/xxxxx.js"></script> 

###    2. 字体规范
    
    字体
	1. 在设定字体样式时对于文字字号样式和行间距应必须使用CSS样式表。禁止在页面中出现 <font size=?> 标记。
	2. 字体大小：在网页中中文应首选使用宋体。英文和数字首选使用verdana 和arial两种字体。一般使用中文宋体的9pt和11pt或12px和14.7px这是经过优化的字号，黑体字或者宋体字加粗时，一般选用11pt 和14.7px 的字号比较合适。
	3. 为了最大程度的发挥浏览器自动排版的功能，在一段完整的文字中请尽量不要使用<br> 来人工干预分段。
	4. 不同语种的文字之间应该有一个半角空格，但避头的符号之前和避尾的符号之后除外， 汉字之间的标点要用全角标点，英文字母和数字周围的括号应该使用半角括号。
	5. 请不要在网页中连续出现多于一个的       也尽量少使用全角空格（英文字符集下，全角空格会变成乱码），空白应该尽量使用 text-indent, padding, margin, hspace, vspace 以及透明的gif 图片来实现。
	6. 行距建议用百分比来定义，常用的两个行距的值是line-height:120%/150%. 
	7. 排版中我们经常会遇到需要进行首行缩进的处理，不要使用   或者全角空格来达到效果，规范的做法是在样式表中定义 p { text-indent: 2em; } 然后给每一段加上 <p> 标记，注意，一般情况下，请不要省略 </p> 结束标记 

###    3. 链接和表格使用规范
        
    1. 链接
	- 网站中的链接路径全部采用相对路径
	- 一般链接到某一目录下的缺省文件的链接路径不必写全名
    	- 例如：<a href=”aboutus/index.htm”> 而应该这样：<a href=”aboutus/”>
	- 在浏览器里，当我们点击空链接时，它会自动将当前页面重置到首端， 从而影响用户正常的阅读内容， 我们用代码“javascript:;”代替原来的“#”标记
    2. 表格
	- 尽量避免表格嵌套过多
	后果会对浏览器加载延长时间， 带来不友好的用户体验
	- 在写 <table> 互相嵌套时，严格按照的规范，对于单独的一个<table>来说，<table><tr>对齐，<td> 缩进两个半角空格，<td>中如果还有嵌套的表格，<table>也缩进两个半角空格， 如果<td>中没有任何嵌套的表格，</td> 结束标记应该与<td>处于同一行，不要换行
	
###    4. 下载和浏览速度控制
        
    1. 意义
	考虑下载速度，以及页面浏览速度是web前端必须考虑的。 页面的浏览速度越快，用户体验效果越好。
	文件下载可以通过 a标签href指向路径直接实现	
	图片下载则直接在网页中展示
	如何解决？
		ASP.NET		
                        输出文件流的形式可以直接下载，后台实现
		JSP
    2. 注意规范
	1.首页Flash网页大小应限定在200K以下， 尽可能的使用矢量图形和Action来减小动画大小。 
	2.非首页静态页面含图片大小应限定在70K 左右，尽可能的使用背景颜色替换大块同色图片。
	   1. 能够用背景色替代图片，尽量使用背景色
	   2. 尽量切小图片，进行平铺

###    5. 嵌套 include/iframe

    1. 说明
	页面嵌套在另一个页面中
	意义：如果多个页面都需要这个模块，可以才有嵌套的方式，方便后期的维护  也就是维护一个页面，就可以同时改变多个页面的效果
    2. include
	include是SSI（Server Side Include）
	jsp
		<%@ include file="../inc/index_top..jsp" %>
	asp/asp.net
		<!--#include file="inc/index_top.asp" -->
	htm
		<!-- #include file="b.htm" -->
    3. iframe
	在html中想达到嵌套的效果，可以使用iframe标签
	<iframe   frameborder=0   border=0   width=300   height=300   src="b.htm"></iframe>  
	HTML与XHTML之间的差异在HTML4.1 StrictDTD和XHTML1.0Strict DTD中，不支持iframe元素。
	<iframe src="/i/eg_landscape.jpg"></iframe>
        <p>一些老的浏览器不支持 iframe。</p>
        <p>如果得不到支持，iframe 是不可见的。</p>

###    6. 嵌套 Alt和Title
    
    1. 相同点
	提示性语言标签
    2. 不同点
	alt->一般是对对图片进行提示描述
	title->一般对文字标签进行提示
    3. 实例
	<p Title="给链接文字提示">文字</p>
	<a href="#" Title="给链接文字提示">文字</a>	
	<img src="图片.gif" alt="给图片提示">
    4. 可以利用div+css+js实现类似title和alt效果，提高用户使用体验

###    7. 浏览器缓存使用注意
	
    1. 什么是缓存?
	缓存就是数据交换的缓冲区（称作Cache），当某一硬件要读取数据时，会首先从缓存中查找需要的数据， 如果找到了则直接执行，找不到的话则从内存中找。由于缓存的运行速度比内存快得多， 故缓存的作用就是帮助硬件更快地运行。
    2. 缓存的原理
        浏览器请求服务器，获得数据并缓存，下次使用直接读取缓存
    3. 缓存有何意义？
	可以提高浏览器浏览页面的效率
    4. 缓存可能带来哪些后果？
	- 对于一些涉及用户重要信息的页面如果页面被缓存则很危险
	- 占用大量硬盘资源
    5. 设置网页不被缓存
	html中设置
            - <META HTTP-EQUIV="pragma" CONTENT="no-cache">
	   - <META HTTP-EQUIV="Cache-Control" CONTENT="no-cache, must-revalidate">
	   - <META HTTP-EQUIV="expires" CONTENT="0">
        或者在js请求参数中加随机数

###    八、浏览器浏览器兼容性
    
    1. 什么是浏览器兼容问题？
	所谓的浏览器兼容性问题，是指因为不同的浏览器对同一段代码有不同的解析， 造成页面显示效果不统一的情况。
    2. 问题1
	不同浏览器的标签默认的外补丁和内补丁不同
            - 问题症状：随便写几个标签，不加样式控制的情况下，各自的margin 和padding差异较大。
            - 碰到频率:100%
            - 解决方案：CSS里    *{margin:0;padding:0;}
            - 备注：这个是最常见的也是最易解决的一个浏览器兼容性问题，几乎所有的CSS文件开头都会用通配符*来设置各个标签的内外补丁是0。
    3. 问题2
        浏览器兼容问题二：块属性标签float后， 又有横行的margin情况下，在IE6显示margin比设置的大
        问题症状:常见症状是IE6中后面的一块被顶到下一行
        碰到频率：90%（稍微复杂点的页面都会碰到，float布局最常见的浏览器兼容问题）
        解决方案：在float的标签样式控制中加入 display:inline;将其转化为行内属性
        备注：我们最常用的就是div+CSS布局了，而div就是一个典型的块属性标签，横向布局的时候我们通常都是用div float实现的，横向的间距设置如果用margin实现，这就是一个必然会碰到的兼容性问题。
    4. 问题3
        设置较小高度标签（一般小于10px）， 在IE6，IE7，遨游中高度超出自己设置高度
        问题症状：IE6、7和遨游里这个标签的高度不受控制，超出自己设置的高度 
        碰到频率：60%
        解决方案：给超出高度的标签设置overflow:hidden;或者设置行高line-height 小于你设置的高度。
        备注：这种情况一般出现在我们设置小圆角背景的标签里。 出现这个问题的原因是IE8之前的浏览器都会给标签一个最小默认的行高的高度。 即使你的标签是空的，这个标签的高度还是会达到默认的行高。
    5. 问题4
	元素水平居中问题
            1. FF: margin:0 auto;
            IE: 父级{ text-align:center; }
    6. 问题5
        - const问题
        - 说明:Firefox下,可以使用const关键字或var关键字来定义常量;
IE下,只能使用var关键字来定义常量. 
        - 解决方法：统一使用var关键字来定义常量.
    7. 问题6
        模态和非模态窗口问题
        说明:IE下,可以通过showModalDialog和showModelessDialog打开模态和非模态窗口;Firefox下则不能. 
        解决方法：直接使用window.open(pageURL,name,parameters)方式打开新窗口。
        如果需要将子窗口中的参数传递回父窗口,可以在子窗口中使用window.opener来访问父窗口. 
        例如：var   parWin   =   window.opener;   parWin.document.getElementById("Aqing").value   =   "Aqing"; 
    8. 问题7
        float的延续性
        说明：在i.e.浏览器中，如果使用float设置元素浮动对齐。如果不关闭浮动，将会对后面的元素标签延续浮动。
        解决方法：在设置float的元素后面加上clear:both，关闭浮动。

###    九、Banner和Logo

    1. logo
        为了便于INTERNET上信息的传播，一个统一的国际标准是需要的。实际上已经有了这样的一整套标准。
        其中关于网站的LOGO，目前有三种规格：
        88*31 这是互联网上最普遍的LOGO规格。
        120*60 这种规格用于一般大小的LOGO。
        120*90 这种规格用于大型LOGO。
    2. banner
        横幅广告(网络广告的主要形式, 一般使用GIF格式的图像文件,可以使用静态图形,也可用多帧图像拼接为动画图像)
        尺寸
        88*31   100*100    120*60   120*240 120*500 130*200 150*50  160*600 180*80  180*250 169*75  220*50  220*75  220*50  234*64  250*50  250*250 270*70  300*100 300*250 336*280 360*190 468*60  190*170 728*90  760*60 960*50   960*90  960*120
        推荐网站：http://www.zhaoxi.net/
	
## 七. JavaScript书写及使用规范

###    1. JavaScript规范（一）
    
    代码结构明了,加适量注释.提高函数重用率;
    1. 书写
	书写过程中,每行代码结束必须有分号; 原则上所有功能均根据XXX项目需求原生开发, 以避免网上down下来的代码造成的代码污染(沉冗代码 || 与现有代码冲突 ||...); 
    2. 变量声明
	所有的变量必须在使用前通过var进行声明。JavaScript并不强制必须这么做， 但这么做可以让程序易于阅读，且也容易发现那些没声明的变量(它们会被编译成全局变量)。 将var语句放在函数的首部。最好把每个变量的声明语句单独放到一行，并加上注释说明。
        var　currentEntry;//当前选择项        var　level;//缩进程度　 var size; // 表格大小
    3. 函数声明
	所有的函数在使用前进行声明。内函数的声明跟在var语句的后面. 这样可以帮助判断哪些变量是在函数范围内的。
        函数名与“(”（左括号）之间不应该有空格。“)”（右括号）与开始程序体的“{”（左大括号）应在同一行。函数程序体应缩进四个空格。“}”（右大括号）与声明函数的那一行代码头部对齐。
        function outer(c，d){
           var e = c * d;
           function inner(a， b){
               return (e * a) + b;
           }
            return inner(0， 1);
            }
        下面这种书写方式可以在 JavaScript 中正常使用，因为在 JavaScript 中，函数和对象的声明可以放到任何表达式允许的地方。且它让内联函数和混合结构具有最好的可读性。
        function getElementsByClassName(className) {
            var results = [];
            walkTheDOM(document.body, function(node) {
                var a; // array of class names
                var c = node.className; // the node's classname
                var i; // loop counter
                // If the node has a class name, then split it into a list of simple names.
                // If any of them match the requested name, then append the node to the set of results.
                if(c){
                    a = c.split(' ');
                    for(i = 0; i < a.length; i += 1){
                        if (a[i] === className){
                            results.push(node);
                            break;
                        }
                    }
                }
            });
            return results;
     }
            如果函数是匿名函数，则在function和 “(”（左括号）之间应有一个空格。如果省略了空格，否则会让人感觉函数名叫作function。
              var div.onclick = function(e) {
              return false;
            };
            var that = {
                method: function() {
                return this.datum;
             },
            datum: 0
            };
    尽量不使用全局函数，避免函数名重复。
    尽量减少全局变量的使用。不要让局部变量覆盖全局变量。
    4. 每行长度
	避免每行超过 80 个字符。当一条语句一行写不下时，请考虑折行。在运算符号，最好是逗号后换行。 在运算符后换行可以减少因为复制粘贴产生的错误被分号掩盖的几率。
    5. JavaScript文件
	JavaScript程序应独立保存在后缀名为.js的文件中。应尽量减少在HTML 中的JavaScript代码，因为存在与HTML中的JavaScript代码会明显增加文件大小，且不能对其进行缓存和压缩。
        filename.js或JavaScript的代码应尽量放到body的后面。 这样可以减少因为载入脚本而造成其他页面内容载入也被延迟的问题。
    6. {} 和[]
        使用{}代替new　Object()。使用[]代替new　Array()。这样便于书写且能提高一点执行效率。
        当成员名是一组有序的数字时使用数组来保存数据。当成员名是无规律的字符串或其他时使用对象来保存数据。
    7. 缩进
        缩进的单位为四个空格。避免使用Tab键来缩进。 因为始终没有个统一的Tab长短标准。虽然使用空格会增加文件的大小， 但在局域网中几乎可以忽略，且在最小化过程中也可被消除掉。
    8. 函数命名:
	 首字母小写驼峰式命名. 如iTaoLun();
    9. 变量命名格式
	变量命名: 驼峰式命名. 原生JavaScript变量要求是纯英文字母, 首字母须小写, 如iTaoLun; jQuery变量要求首字符为'_', 其他与原生JavaScript规则相同, 如: _iTaoLun; 另,要求变量集中声明,避免全局变量.
    10. event.srcElement问题
        问题说明：I.E.下，even对象有srcElement属性，但是没有target属性； Firefox下，even对象有target属性，但是没有srcElement属性。
        解决方法：使用 var obj=event.target||window.event.srcElement;
    11. parentElement问题
        firefox与I.E.的父元素(parentElement)的区别
        IE：obj.parentElement
        firefox：obj.parentNode
        解决方法:   因为firefox与I.E.都支持DOM,因此使用obj.parentNode是不错选择.

## 八. 图片的使用规范

    1. 存放位置
        所有页面元素类图片均放入images文件夹, 测试用图片放于img/demoimg文件夹
    2. 命名
        命名全部用小写英文字母 || 数字 || _ 的组合，其中不得包含汉字 || 空格 || 特殊字符；尽量用易懂的词汇, 便于团队其他成员理解; 另, 命名分头尾两部分, 用下划线隔开, 比如ad_left01.gif || btn_submit.gif;
    3. 格式
	图片格式仅限于gif || png || jpg;
    4. 性能
        在保证视觉效果的情况下选择最小的图片格式与图片质量, 以减少加载时间
        运用css sprite技术集中小的背景图或图标, 减小页面http请求,但注意,请务必在对应的spritepsd源图中划参考线, 并保存至img/images目录下.
        Css Sprite使用方法：
        1、 将用到的背景图片压缩为zip格式的压缩包
        2、 用Css图片拼合生成器将其拼合成一张图片，然后下载该图片
        3、 拼合完成后会生成相应的Css规则，该文件定位了每个图片的位置及图片的宽度和高度
        4、 在Css样式中定位背景图片；

##九.  注释规范
    
    1. html注释:
        注释格式 <!--这儿是注释-->, '--'只能在注释的始末位置,不可置入注释文字区域;
    2. Css注释:
	注释格式 /*这儿是注释*/;
    3. javascript注释:
	单行
            单行注释使用//这儿是单行注释 ,
	多行
            多行注释使用 /* 这儿有多行注释 */;
    
###十.  浏览器兼容性 CSS hack
    
    1. Css hack
	CSS hack的目的就是使你的CSS代码兼容不同的浏览器。当然，我们也可以反过来利用CSS hack为不同版本的浏览器定制编写不同的CSS效果。
    2. 区别不同浏览器，CSS hack写法
	区别IE6与FF：
		background:orange;*background:blue; 
	区别IE6与IE7：
		background:green!important;background:blue; 
	区别IE7与FF：
		background:orange;*background:green; 
	区别FF，IE7，IE6：
		background:orange;*background:green;_background:blue; background:orange;*background:green!important;*background:blue; 
    3. 实例
	效果：我在IE6中看到是红色的，在firefox中看到是绿色的。
	上面的css在firefox中，它是认识不了后面的那个带星号的东西是什么的， 于是将它过滤掉，不予理睬，解析得到的结果是:div{background:green}, 于是理所当然这个div的背景是绿色的。 在IE6中呢，它两个background都能识别出来， 它解析得到的结果是:div{background:green;*background:red;} ,于是根据优先级别，处在后面的red的优先级高，于是当然这个div的背景颜色就是红色的了。
    4. 浏览器优先级别
        FF<IE7<IE6，
    5. css hack书写顺序
        FF      IE7     IE6

###十一、开发测试约定及使用工具规范提示

###1. 开发环境

	软件版本的选择
		1.应选择热门的开发软件
		2.选择成熟的开发工具和技术
	开发文档的约束
		实例

###2. 如何才能成为前端开发高手？
	
        1.要多练，不断总结
        2.看到别人写的好的代码要多研究研究
        3.要勤收集素材

###3.其他

        1.开发过程中严格分工完成页面，以提高css重用率，避免重复开发
        2.减小沉冗代码,书写所有人都可以看的懂的代码. 简洁易懂是一种美德.为用户着想,为服务器着想.