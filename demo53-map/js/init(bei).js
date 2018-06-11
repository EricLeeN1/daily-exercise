/** 左侧下拉菜单控制 **/
$(".leftsidebar_box dt img").attr("src", "images/left/select_xl01.png");
$(function () {
    $("#list .sNode").hide(); //隐藏二级菜单项
    $(".leftsidebar_box dd").hide(); //隐藏三级菜单项

    /**一级菜单项单击事件**/
    $("#list .pNode").click(function () {
        var index = $(this).index() + 1; //当前父节点的子菜单索引
        //如果当前一级菜单的子菜单为隐藏状态则展开，反之则隐藏
        if ($("#list li:eq(" + index + ")").is(":hidden")) {
            $(this).css({ "background-image": "url(images/tree/list2.png)" }); //焦点一级菜单项图标切换 
            $(this).css({ "background-color": "#006666" }); //焦点一级菜单项背景颜色 
            $("#list li:eq(" + index + ")").slideToggle(); //滑动展开显示
        }
        else {
            $(this).css({ "background-image": "url(images/tree/list1.png)" }); //焦点一级菜单项图标切换
            $(this).css({ "background-color": "#1f6b75" }); //非焦点一级菜单项背景颜色
            $("#list li:eq(" + index + ")").slideUp(); //滑动隐藏显示
        }
    });

    /**二级菜单项单击事件（当前允许展开多个二级菜单项）**/
    $(".leftsidebar_box dt").click(function () {
        //判断当前一级菜单下的二级菜单项是否隐藏
        if ($(this).parent().find('dd').is(":hidden")) {
            $(this).parent().find('dd').slideToggle(); //滑动方式展开子菜单
            $(this).css({ "background-color": "#2c8080" }); //焦点二级菜单项背景颜色             
            $(this).parent().find('img').attr("src", "images/left/select_xl.png"); //当前焦点二级菜单项图标                 
        }
        else {
            $(this).parent().find('dd').slideUp(); //滑动方式隐藏子菜单
            $(this).css({ "background-color": "#339999" }); //非焦点二级菜单项背景颜色
            $(this).parent().find('img').attr("src", "images/left/select_xl01.png"); //非焦点二级菜单项图标
        }
    });

    /**三级菜单项鼠标经过事件**/
    $(".leftsidebar_box dd").bind({
        mouseenter: function (e) {
            $(this).css({ "background-color": "#808080", "color": "#a9a9a9" });
        },
        mouseleave: function (e) {
            $(this).css({ "background-color": "#4c4e5a", "color": "#f5f5f5" });
        }
    });

    /**三级菜单项单击事件**/
    $(".leftsidebar_box dd").bind('click', function () {
        $(".leftsidebar_box dd").unbind('mouseenter');
        $(".leftsidebar_box dd").unbind('mouseleave');
        $(".leftsidebar_box dd").css({ "background-color": "#4c4e5a", "color": "#f5f5f5" }); //二级菜单项背景颜色
        $(this).css({ "background-color": "#38393F", "color": "#a9a9a9" }); //选中项二级菜单项背景颜色

        $(this).parent().parent().parent().find('dd').not(this).bind({
            mouseenter: function (e) {
                $(this).css({ "background-color": "#808080", "color": "#a9a9a9" });
            },
            mouseleave: function (e) {
                $(this).css({ "background-color": "#4c4e5a", "color": "#f5f5f5" });
            }
        });
    });

});


/** 源码读取显示 **/
var sCopyTarget = "#codes";
var showCodeFlag = true; //源码面板显示/隐藏标志位，用来辨别当前是显示源码还是显示接口说明
var editor = null; //源码高亮显示
var client = null;

/**系统初始默认页面源码显示 **/
$(function () {
    setCore('OSM', 'ThirdPartyMapDisplay'); //显示默认页面的源码
});

/** 二级菜单项对应功能页面的源码显示 **/
function setCore(name, catalog, interFaceName) {
    if (!showCodeFlag) {
        showInstruction();
    } else {
        showCore();
    }

    var pageName = name;

    //根据当前选择的菜单项，显示源码
    var htmlUrl = "demos/" + catalog + "/" + pageName + ".htm"; //请求的页面
    var htmlString = ""; //请求页面的代码（字符串形式）
    $.ajax({
        async: false,
        url: htmlUrl,
        success: function (result) {
            htmlString = result;
            $('#codes').val(htmlString); //设置源码到源码容器的textarea控件中
            localStorage.code = $(sCopyTarget).val();
        }
    });

    //根据当前选择的菜单项，显示接口说明
    var interFaceUrl = "demohelp/iframe/" + interFaceName; //接口说明页路径
    $('#interface_iframe').attr("src", interFaceUrl); //设置源码到源码容器的textarea控件中

    initEditor(); //源码高亮显示(源码样式显示)
    $('#container_iframe').attr("src", htmlUrl); //设置右侧容器的页面地址   

    //复制代码部分初始化

}

/** 源码控制 **/
$(function () {
    initEditor(); //源码高亮显示
    //initCopy(); //复制源码
    var clientWid = document.body.clientWidth;
    //源码域显示/隐藏控制
    var iCodeWidth = clientWid * 0.38;
    var oArrow = $('#code_arrow');
    var oCodeCore = $('#code_core');
    var oArrow2 = $('#code_arrow2');
    var oCodeWrapper = $('#code_wrapper');
    var oIframeWrapper = $('div.iframe_wrapper');
    var leftsidebar_box = $('.leftsidebar_box');
    var leftsidebarWidth = parseInt(leftsidebar_box.css('width'));
    oArrow.click(function () {
        if (oArrow.hasClass('go_back')) {
            oCodeCore.animate({ width: 0 });
            oCodeWrapper.animate({ width: 0 });
            oIframeWrapper.animate({ marginLeft: leftsidebarWidth });
            oArrow.removeClass('go_back');
            oArrow2.hide();
        } else {
            oCodeCore.animate({ width: iCodeWidth });
            oCodeWrapper.animate({ width: iCodeWidth });
            oIframeWrapper.animate({ marginLeft: clientWid * 0.55 });
            oArrow.addClass('go_back');
            oArrow2.show();
        }
    });
});

function initEditor() {
    if (!editor) {
        editor = CodeMirror.fromTextArea(document.getElementById("codes"), {
            lineWrapping: true, //是否显示scroll
            lineNumbers: true, //是否显示number
            styleActiveLine: true,
            matchBrackets: true,
            mode: "htmlmixed", //样式类型
            viewportMargin: Infinity
        });
    } else {
        editor.setValue($(sCopyTarget).val());
    }
}

/** 代码复制功能 **/
function initCopy() {
    $('a[rel]').zclip({
        path: 'libs/jqueryzclip/ZeroClipboard.swf',
        copy: function () {
            return $(this.getAttribute('rel')).val();
        },
        afterCopy: function () {
            alert("代码已成功复制到粘贴板！ ");
        }
    });
}
//运行
function run() {
    var iframeContent = $("#codes").val();
    if (editor) {
        iframeContent = editor.getValue();
    }
    //获取站点地址
    var urlStr = window.location.href;
    //var nr = urlStr.indexOf("/Index.htm");
    var nr = urlStr.indexOf("/index.htm");
    urlStr = urlStr.slice(0, nr);
    //替换相对路径为绝对路径../..
    var req = /\.\.\/\.\./g;
    iframeContent = iframeContent.replace(req, urlStr);
    var iFrame = document.getElementById("container_iframe").contentWindow;
    iFrame.document.open();
    iFrame.document.write(iframeContent);
    iFrame.document.close();
}

//还原
function reStore() {
    $("#codes").val(localStorage.code);
    initEditor();
    run();
}

//显示源码
function showCore() {
    $("#code_copy,#code_run,#code_restore").show();
    $("#coreContent").show();
    $("#interfaceContent").hide();
    $("#coreHeader").removeClass("s2").addClass("s1");
    $("#interfaceHeader").removeClass("s1").addClass("s2");
    // initEditor();
    showCodeFlag = true;
}

//显示接口说明
function showInstruction() {
    $("#code_copy,#code_run,#code_restore").hide();
    $("#coreContent").hide();
    $("#interfaceContent").show();
    $("#coreHeader").removeClass("s1").addClass("s2");
    $("#interfaceHeader").removeClass("s2").addClass("s1");
    showCodeFlag = false;
}
//最大化窗口
$(function () {
    initEditor(); //源码高亮显示
    initCopy(); //复制源码
    var clientWid = document.body.clientWidth;
    var copy = $("#zclip-ZeroClipboardMovie_1");
    //源码域显示/隐藏控制
    var iCodeWidth = "100%";
    var oCodeCore = $('#code_core');
    var oArrow2 = $('#code_arrow2');
    var oCodeWrapper = $('#code_wrapper');
    var oIframeWrapper = $('div.iframe_wrapper');
    var leftsidebar_box = $('.leftsidebar_box');
    var leftsidebarWidth = parseInt(leftsidebar_box.css('width'));
    copy.css("width",70);
    oArrow2.removeClass('go_back');
    oArrow2.click(function () {
        if (oArrow2.hasClass('go_back')) {
            oCodeCore.animate({ width: clientWid * 0.38 });
            oCodeWrapper.animate({ width: clientWid * 0.38 });
            oIframeWrapper.animate({ marginLeft: clientWid * 0.55 });
            oArrow2.removeClass('go_back');
            //控制复制代码控件的位置
//            copy.css("left", clientWid * 0.38 - 68);
            
        } else {
            oCodeCore.animate({ width: iCodeWidth });
            oCodeWrapper.animate({ width: clientWid - leftsidebarWidth });
            oIframeWrapper.animate({ marginLeft: clientWid });
            oArrow2.addClass('go_back');
            //控制复制代码控件的位置
//            copy.css("left", clientWid - leftsidebarWidth - 68);
        }
    });
});

//初始化
$(function () {
    var clientWid = document.body.clientWidth;
    var leftsidebar_box = $('.leftsidebar_box');
    var code_wrapperWidth = $("#code_wrapper");
    var iframe_wrapperWidth = $("div.iframe_wrapper");
    var code_coreWidth = $("#code_core");
    leftsidebar_box.animate({ width: clientWid * 0.17 });
    code_coreWidth.animate({ width: clientWid * 0.38 });
    leftsidebarWidth = parseInt(leftsidebar_box.css('width'));
    code_wrapperWidth.animate({ marginLeft: leftsidebarWidth });
    iframe_wrapperWidth.animate({ marginLeft: clientWid * 0.55 });
    $("#code_arrow2").hover(function () {
        $("#code_arrow2").css("opacity", 1);
    }, function () {
        $("#code_arrow2").css("opacity", 0.6);
    });
    //鼠标滑过改变透明度
    $("#code_arrow").hover(function () {
        $("#code_arrow").css("opacity", 1);
    }, function () {
        $("#code_arrow").css("opacity", 0.6);
    });
});
//当浏览器大小变化的时候调用该函数
window.onresize = function () {
    location = location;
}