function getCurIp() {
    $.ajax({
        url: "https://oa.zhuanmenmian.com/api/interface.ashx?method=getcurrentcity",
        type: "GET",
        dataType: "json",
        async: true,
        timeout: 1e4,
        success: function (data, t, jqXHR) {
//<LI>您的本机IP地址：
//    111.12.126.16    &nbsp;&nbsp;来自：</strong><span id="ipad"> 稍等,查询中.... </span></LI>	
            console.log(data);
            // var reg=/您的本机IP地址：\s.*?(\d*\.\d*\.\d*\.\d*)/;
            // var result=reg.exec(data);
            // console.log(result[0]);
            // console.log(result[1]);
            //
            // curIp=result[1];
            // //alert(curIp);
            if (result[1] != undefined) {
                console.log('成功获取本机ip');
            } else {

            }
            $('body').append("</br>外网ip为：" + curIp);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(textStatus);
            alert(jqXHR.status);
            //setTimeout(getCurIp,5000);
        }
    });
}

$(document).ready(function () {
    getCurIp();
    console.log(chrome.extension);
    chrome.extension.sendMessage({cmd: "getNewsArr"}, function (response) {
        if (response.arr) {
            var len = response.arr.length;
            for (var i = 0; i < len; i++) {
                $('body').append("</br>" + response.arr[i] + "</br>");
            }
        }
    });//
    $('input[type=button]').on('click', function () {
        var ntype = $(this).attr('id');
        chrome.extension.sendMessage({cmd: "notify", type: ntype}, function (response) {
        });

    })

    function notify() {
        var opt = {
            type: "list",
            title: "桌面提醒",
            message: "msg",
            iconUrl: "icon128.png",
            items: [{title: "1.", message: "下班了"},
                {title: "2.", message: "吃饭了."},
                {title: "3.", message: "中奖了."}]
        }
        chrome.notifications.create('', opt, function (id) {
        })
    }
});