"object" != typeof getParentUrl() && (-1 < getParentUrl().indexOf("growingio") || -1 < getParentUrl().indexOf("eyeofcloud") || -1 < getParentUrl().indexOf("edu.360") || top != self && (location.href = "about:blank"));
var cityName = "",
    Citycode = "",
    EIP_ID = "",
    id = "",
    arr = [],
    posCorrect = 0,
    cityShow = 0,
    courseShow = 0,
    schoolShow = 0,
    cityTimesJudge = 0,
    courseTimesJudge = 0,
    schoolTimesJudge = 0,
    cityleaveFuc, courseleaveFuc, schoolleaveFuc, iCan = 1,
    IsAborad, url = window.location.href.toLowerCase(),
    effectivewords = "Abc,英语流利说,英孚教育,51talk,韦博,英孚,51voa,华尔街,韦博国际,姚明,扇贝,白金汉,朗文,韦伯,百朗,哒哒,21世纪,广东英语赛事网,赖世雄美语,英孚和韦博,大耳狐,耳朵,敏特,马克,肯国际,九棵树,赖世雄,李阳,乔登美语,奇速,万众,无忧英语,凯狮,金耳朵,聚英加国际,吉的堡,海涛,夏洛国际,贝乐,美孚,速恩,普特,大山,牛剑之路,掌中,斯比克,艾斯,朵拉,雷丁,蛐蛐,魔耳,磁课,巴士,托马斯,莫尼克,新东方,弗恩,小站教育,象山剑桥,成熙,芝麻街,帝弗英,威尼,多米诺,虾子,对啊网,坦洲,比克,美国科蒂,泛扬,莫顿,阿拉索,落基,迈斯通,新航道,嘀嗒,易加,久趣,诺顿,英迈,汤姆,百福,戈果,泡泡,伊登·吉米,启橙,普林,红恩,弗勒,特普,圣通,通途,仲恺,红杉树,山姆,温斯顿,温莎,乔安娜,艾琳,口袋,励步,金桥,新航程,乔巴,希郎,英培尔,百盛,快酷,加百列,西苏,摩尔,华尔顿,奥奇,新希望,宏恩,美诺",
    effectivewordsArr = effectivewords.split(","),
    requestUrl = "https:" == document.location.protocol ? "https://api.meten.com" : "http://api.meten.com";

function bindAgreement(e) {
    $(e).html('<div class="tips-info">\n<div class="checkBox fl">\n<img src="https://static.meten.com/web/images/index2.0/chooseBtn01.png" alt="美联用户协议复选框"\ntitle="美联用户协议复选框">\n</div>\n<span class="fr">同意<a href="/privacy.html" target="_blank">《美联用户隐私保护协议》</a></span>\n</div>'), $(e).find(".checkBox").off().on("click", function () {
        0 < $(this).find("img").length ? $(this).find("img").remove() : $(this).append('<img src="https://static.meten.com/web/images/index2.0/chooseBtn01.png" alt="美联用户协议复选框" title="美联用户协议复选框">')
    })
}

function checkAgreement(e) {
    return !(0 < $(e).parent().find(".app-metenTips").length && $(e).parent().find(".checkBox img").length < 1) || (alert("请同意美联用户协议"), !1)
}

function sendBdVid(e, i) {
    AjaxCORS("POST", requestUrl + "/api/OCPCAPI/OCPC", !1, {
        logidUrl: url,
        bd_vid: e,
        mobile: i || ""
    }, function (e) {
        e.IsSuccess
    }, function (e) {})
}

function menuShow(e, i, t) {
    e = $(e), i = $(i);
    e.on("mouseenter", function () {
        clearTimeout(t), i.stop().slideDown()
    }), e.on("mouseleave", function () {
        t = setTimeout(function () {
            i.stop().hide()
        }, 200)
    }), i.on("mouseenter", function () {
        clearTimeout(t), i.stop().slideDown()
    }), i.on("mouseleave", function () {
        t = setTimeout(function () {
            i.stop().hide()
        }, 200)
    })
}

function unique(e, i) {
    e.sort();
    for (var t = [e[0]], n = 1; n < e.length; n++) e[n] !== t[t.length - 1] && t.push(e[n]);
    i(t)
}

function myFun(e) {
    "全国" != (cityName = e.name) && (cityName = cityName.substring(0, cityName.length - 1)), $.each(arr, function (e, i) {
        if (cityName == i.Name) return $(".hd-pos span").text(cityName), SetLocalCity(cityName), !(posCorrect = 1)
    }), 0 == posCorrect && ("全国" == cityName ? ($(".guessPos div span").html("哇哦，定位走丢了......"), $(".guessPos a").css({
        display: "none"
    })) : ($(".guessPos div span").html(cityName), $(".guessPos div b").html("请选择以下美联英语校区所在城市")), createDiv("maskDiv"), $(".cityDiv").css({
        display: "block"
    }))
}

function lSlide(e, i, t) {
    iCan = 2;
    var n = $(e).find("li").first().clone();
    $(e).css({
        left: 0
    }), $(e).find("li").first().remove(), $(e).append(n), $(e).width(i * t), $(e).stop().animate({
        left: -i
    }, function () {
        iCan = 1
    })
}

function rSlide(e, i, t) {
    iCan = 2;
    var n = $(e).find("li").last().clone();
    $(e).css({
        left: -i
    }), $(e).find("li").last().remove(), $(e).prepend(n), $(e).width(i * t), $(e).stop().animate({
        left: 0
    }, function () {
        iCan = 1
    })
}

function checkName(e) {
    return !!/^[a-zA-Z0-9_\-\u4e00-\u9fa5]{0,11}$/.test(e) || (alert("请输入正确的姓名，只能包含数字字母下划线和汉字"), !1)
}

function checkPhone(e, i) {
    var t, n;
    return "" == (t = 0 < $("#" + e).length ? $.trim($("#" + e).val()) : e) || "您的手机号，方便老师联系您" == t || "请输入您的手机号" == t || "您的手机号" == t || "请输入手机号，接收课程通知" == t ? (n = 0 < url.indexOf("course") ? (gio("track", "signuperror", {
        signuperror_var: "空手机号"
    }), "请输入您的常用手机号") : 0 < url.indexOf("vclass") ? (gio("track", "signuperror", {
        signuperror_var: "空手机号"
    }), "请输入手机号，以便接收开课提醒") : (gio("track", "signuperror", {
        signuperror_var: "空手机号"
    }), "请输入您的手机号"), alert(n), showErr(n, i), !1) : isNaN(t) ? (regRecord(t, "错误手机号"), gio("track", "signuperror", {
        signuperror_var: "错误手机号"
    }), n = "请输入正确的11位手机号", alert(n), showErr(n, i), !1) : 11 != t.length ? (regRecord(t, "手机号位数不全"), gio("track", "signuperror", {
        signuperror_var: "手机号位数不全"
    }), n = "请输入正确的11位手机号", alert(n), showErr(n, i), !1) : /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/.test(t) ? 1 : (regRecord(t, "错误手机号"), gio("track", "signuperror", {
        signuperror_var: "错误手机号"
    }), n = "请输入正确的11位手机号", alert(n), showErr(n, i), !1)
}

function showErr(e, i) {
    null != e && null != e && "" != e && null != i && null != i && "" != i && i.addClass("err"), $("body input").on("focus", function () {
        $(this).parent().removeClass("err")
    })
}

function checkCode(e, i) {
    var t, n = $.trim($("#" + e).val());
    return 0 == n.length || "请输入手机验证码" == n || "请输入短信验证码" == n ? (t = "请输入短信验证码", alert(t), showErr(t, i), !1) : isNaN(n) ? (t = "请输入正确的短信验证码", alert(t), showErr(t, i), !1) : 1
}

function createMap() {
    var t = "";
    getAllcity(function (e) {
        $(e).each(function (e, i) {
            t += "<span>" + i.Name + "</span>"
        }), $('<div class="sc-layer" id="sc-layer"><span class="scclose">×</span><div class="sctt"><h2 class="u-tt">查看地图</h2><span class="lyclose">×</span></div><div class="scwrap"><div class="sc-search"><label>美联英语（100余家中心）</label><div id="scCity" class="scc"><p><span></span><em><i class="res-icon" style="margin: 0 0 0 10px;"></i></em></p><div class="scc-allsc">' + t + '</div></div><div id="scschool" class="scc"><p><span></span><em><i class="res-icon" style="margin: 0 0 0 10px;"></i></em></p><div class="scc-allsc"></div></div></div><div class="sc-con"><div id="sccMap"></div><div class="scclist"><ul></ul><div id="r-result"></div></div>').appendTo($("body")), $(".sc-layer .scclose").on("click", function () {
            removeDiv("maskDiv"), $(".sc-layer").css({
                display: "none"
            })
        }), $("#scCity .scc-allsc span").off().on("click", function () {
            var n = $.trim($(this).text());
            $("#scCity p span").html(n), loadAllSchool(n, "", function (e) {
                $("#scschool .scc-allsc").html("");
                var a = e.Items,
                    t = "";
                $(a).each(function (e, i) {
                    t += "<span>" + i.Name + "</span>"
                }), $("#scschool .scc-allsc").append(t), $("#scschool p span").html($("#scschool .scc-allsc span").eq(0).html()), bigMap(function (e, i) {
                    var n = $.trim($("#scCity .scc-allsc span").eq(0).html()),
                        s = $.trim($("#scschool .scc-allsc span").eq(0).html()),
                        o = [];
                    $(a).each(function (e, i) {
                        if (i.Name == s) {
                            var t = [i.lng, i.Lat, n, s, i.Busline];
                            o.push(t)
                        }
                    }), showMap(e, i, o, !0)
                }), $("#scschool .scc-allsc span").off().on("click", function () {
                    var t = $(this);
                    $("#scschool p span").html(t.html()), bigMap(function (e, i) {
                        var n = $.trim($("#scCity .scc-allsc span").eq(0).html()),
                            s = $.trim(t.html()),
                            o = [];
                        $(a).each(function (e, i) {
                            if (i.Name == s) {
                                var t = [i.lng, i.Lat, n, s, i.Busline];
                                o.push(t)
                            }
                        }), showMap(e, i, o, !0)
                    }), loadAllSchool(n, t.html(), function (e) {
                        $(".sc-con .scclist ul").html("");
                        var i = e.Items,
                            t = "";
                        $(i).each(function (e, i) {
                            t += '<li><div><h3 class="centerName">' + i.Name + '</h3><a class="sc-btn" href="/reserve_teacher.html?lcity=' + escape(n) + "&bname=" + escape(i.Name) + "&branchid=" + i.BranchId + '">立即预约>></a></div><p class="sctxt">' + i.Address + "</p></li>"
                        }), $(".sc-con .scclist ul").append(t)
                    })
                }), loadAllSchool(n, $("#scschool .scc-allsc span").eq(0).html(), function (e) {
                    $(".sc-con .scclist ul").html("");
                    var i = e.Items,
                        t = "";
                    $(i).each(function (e, i) {
                        t = '<li><div><h3 class="centerName">' + i.Name + '</h3><a class="sc-btn" href="/reserve_teacher.html?lcity=' + escape(n) + "&bname=" + escape(i.Name) + "&branchid=" + i.BranchId + '">立即预约>></a></div><p class="sctxt">' + i.Address + "</p></li>"
                    }), $(".sc-con .scclist ul").append(t)
                })
            })
        })
    })
}

function showMap(e, i, t, n) {
    for (var s = t, o = new Array, a = 0; a < s.length; a++)
        if (n) markerInfo(a, s, function (i, t) {
            i.addEventListener("click", function (e) {
                t.open(i)
            })
        });
        else {
            var l = new BMap.Marker(new BMap.Point(s[a][0], s[a][1]));
            e.addOverlay(l), o[a] = new BMap.Point(s[a][0], s[a][1]), l.customData = {
                id: a,
                lng: s[a][0],
                lat: s[a][1],
                city: s[a][2],
                center: s[a][3],
                address: s[a][4]
            }, l.addEventListener("click", showBigMap)
        } e.setZoom(15), e.setViewport(o)
}

function markerInfo(e, i, t) {
    var n = "<p>开放时间：10：00-22:00</p><p>交通路线：" + i[e][4] + "</p><p>联系电话：400 - 700 - 1003</p>",
        s = new BMap.Map("sccMap"),
        o = new BMapLib.SearchInfoWindow(s, n, {
            title: i[e][3],
            enableAutoPan: !0,
            panel: "r-result",
            searchTypes: [BMAPLIB_TAB_TO_HERE]
        }),
        a = new BMap.Point(i[e][0], i[e][1]);
    s.centerAndZoom(a, 16), s.enableScrollWheelZoom();
    var l = new BMap.Marker(a);
    s.addOverlay(l), t(l, o)
}

function showBigMap(e) {
    var i = e.target;
    if (null == i || null == i || "" == i) var n = e;
    else n = [
        [i.getPosition().lng, i.getPosition().lat, i.customData.city, i.customData.center, i.customData.address]
    ];
    popup("sc-layer");
    var t = new BMap.Map("sccMap"),
        s = new BMap.Point(116.404, 39.915);
    t.centerAndZoom(s, 15);
    for (var o = new Array, a = 0; a < n.length; a++) {
        var l = new BMap.Marker(new BMap.Point(n[a][0], n[a][1]));
        t.addOverlay(l), o[a] = new BMap.Point(n[a][0], n[a][1]), markerInfo(a, n, function (i, t) {
            i.addEventListener("click", function (e) {
                t.open(i)
            })
        }), l.addEventListener("click", function (e) {
            searchInfoWindow1.open(l)
        })
    }
    t.setViewport(o), $("#scCity p span").html(n[0][2]), $("#scschool p span").html(n[0][3]), loadAllSchool(n[0][2], "", function (e) {
        $("#scschool .scc-allsc").html("");
        var a = e.Items,
            t = "";
        $(a).each(function (e, i) {
            t += "<span>" + i.Name + "</span>"
        }), $("#scschool .scc-allsc").append(t), $("#scschool .scc-allsc span").off().on("click", function () {
            var t = $(this);
            $("#scschool p span").html(t.html()), bigMap(function (e, i) {
                var n = $.trim($("#scCity .scc-allsc span").eq(0).html()),
                    s = $.trim(t.html()),
                    o = [];
                $(a).each(function (e, i) {
                    if (i.Name == s) {
                        var t = [i.lng, i.Lat, n, s, i.Busline];
                        o.push(t)
                    }
                }), showMap(e, i, o, !0)
            }), loadAllSchool(n[0][2], t.html(), function (e) {
                $(".sc-con .scclist ul").html("");
                var i = e.Items,
                    t = "";
                $(i).each(function (e, i) {
                    t += '<li><div><h3 class="centerName">' + i.Name + '</h3><a class="sc-btn" href="/reserve_teacher.html?lcity=' + escape(n[0][2]) + "&bname=" + escape(i.Name) + "&branchid=" + i.BranchId + '">立即预约>></a></div><p class="sctxt">' + i.Address + "</p></li>"
                }), $(".sc-con .scclist ul").append(t)
            })
        })
    }), loadAllSchool(n[0][2], n[0][3], function (e) {
        $(".sc-con .scclist ul").html("");
        var i = e.Items,
            t = "";
        $(i).each(function (e, i) {
            t += '<li><div><h3 class="centerName">' + i.Name + '</h3><a class="sc-btn" href="/reserve_teacher.html?lcity=' + escape(n[0][2]) + "&bname=" + escape(i.Name) + "&branchid=" + i.BranchId + '">立即预约>></a></div><p class="sctxt">' + i.Address + "</p></li>"
        }), $(".sc-con .scclist ul").append(t)
    }), $("#scCity").off().on("click", function () {
        $(this).hasClass("active") ? ($("#scCity .scc-allsc").hide(), $(this).removeClass("active")) : ($("#scCity .scc-allsc").show(), $(this).addClass("active"))
    }), $("#scschool").off().on("click", function () {
        $(this).hasClass("active") ? ($("#scschool .scc-allsc").hide(), $(this).removeClass("active")) : ($("#scschool .scc-allsc").show(), $(this).addClass("active"))
    })
}

function bigMap(e) {
    var i = new BMap.Map("sccMap"),
        t = new BMap.Point(116.331398, 39.897445);
    i.centerAndZoom(t, 12), e(i, t)
}

function SetCity(e, i) {
    AjaxCORS("POST", 23, !1, {
        Name: e,
        Type: "All"
    }, function (e) {
        i(e)
    }, function (e) {})
}

function getAllcity(t) {
    AjaxCORS("POST", 22, !1, {}, function (e) {
        if ("" != e || null != e) {
            for (var i = 0; i < e.length; i++) "泰迪" == e[i].Name && e.splice(i, 1), "乐闻" == e[i].Name && e.splice(i, 1), "其它" == e[i].Name && e.splice(i, 1);
            t(e)
        }
    }, function (e) {})
}

function Islogin() {
    var e = $.cookie("username");
    if ("" != e && null != e) $(".hd-user-name").html("<span onclick='Myapp()' style='overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100px;'>hi，" + e + "</span> | <span onclick='exitLogin()'>退出</span>"), $(".login-tel-box .login-box").css({
        background: "none"
    }), $(".login-tel-box .login-box").html('<p onclick="Myapp()" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">hi，' + e + ' </p><p onclick="exitLogin()"> | 退出</p>');
    else {
        var i = $.cookie("mobile");
        null != i && "" != i ? (i = i.substr(0, 3) + "****" + i.substr(7), $(".hd-user-name").html("<span onclick='Myapp()'>hi，" + i + "</span> | <span onclick='exitLogin()'>退出</span>"), $(".in-kczx").css({
            left: "438px"
        }), $(".login-tel-box .login-box").css({
            background: "none"
        }), $(".login-tel-box .login-box").html("<p onclick='Myapp()'>hi，" + i + " </p><p onclick='exitLogin()'> | 退出</p>")) : 0 < (url = url.toLowerCase()).indexOf("sem/lp/onlineTest") || 0 < url.indexOf("reservation") || 0 < url.indexOf("sem/lp/videoList") ? window.location.href = "/index.html" : ($(".hd-user-name").html('<span class="nav-reg">注册</span> 丨 <span class="nav-log">登录</span> '), $(".login-tel-box .login-box").html('<p class="login-btn">登录</p><p class="register-btn">注册</p> '), $(".in-kczx").css({
            left: "510px"
        }))
    }
    $(".nav-log,.login-box .login-btn").off().on("click", function () {
        createDiv(), $(".loginRegisterDiv").css({
            display: "block"
        }), $(".loginDiv").css({
            display: "block"
        }), $(".tabUl li").removeClass("navOn"), $(".tabUl li").eq(0).addClass("navOn"), $(".submitBtn").html("登&emsp;&nbsp;录"), $(".metenTips").hide()
    }), $(".nav-reg,.login-box .register-btn").off().on("click", function () {
        createDiv(), $(".loginRegisterDiv").css({
            display: "block"
        }), $(".registerDiv").css({
            display: "block"
        }), $(".tabUl li").removeClass("navOn"), $(".tabUl li").eq(1).addClass("navOn"), $(".submitBtn").html("注&emsp;&nbsp;册"), $(".metenTips").show()
    }), $(".tabUl li").off().on("click", function () {
        $(".tabUl li").removeClass("navOn"), $(this).addClass("navOn"), $(".loginDiv").css({
            display: "none"
        }), $(".registerDiv").css({
            display: "none"
        }), 0 == $(this).index() && ($(".loginDiv").fadeIn(), $(".submitBtn").html("登&emsp;&nbsp;录"), $(".metenTips").hide()), 1 == $(this).index() && ($(".metenTips").show(), $(".registerDiv").fadeIn(), $(".submitBtn").html("注&emsp;&nbsp;册"))
    }), $(".closeBtn").off().on("click", function () {
        $(".loginRegisterDiv").fadeOut(), $(".loginDiv").css({
            display: "none"
        }), $(".registerDiv").css({
            display: "none"
        }), removeDiv("maskDiv"), $.cookie("METEN_LP_PAGE_LOGIN", "", {
            expires: 365,
            path: "/"
        }), $.cookie("mobile", "", {
            expires: 365,
            path: "/"
        }), $.cookie("username", "", {
            expires: 365,
            path: "/"
        })
    }), $("#btnregister").off().on("click", function () {
        var e = $(this).parent().find(".input-tel-area"),
            t = $.trim($("#registerName").val()),
            n = $.trim($("#registermoblie").val());
        if ("请输入姓名/昵称" == t && (t = ""), checkAgreement(this) && checkName(t) && checkPhone(n, e)) regsuccss($.cookie("Citycode"), t, n, "", "", !1, function (e) {
            var i = e.Message;
            1 == e.IsSuccess ? (loginSuccess(t, n), _gsSuccessCallback(n), $("#registerName").val("请输入姓名/昵称"), $("#registermoblie").val("请输入您的手机号"), $("#islogin").val("1"), $(".loginRegisterDiv").fadeOut(), $(".loginDiv").css({
                display: "none"
            }), $(".registerDiv").css({
                display: "none"
            }), creSucDiv("恭喜您注册成功！", "", 5), Islogin(), 0 < window.location.href.indexOf("video_") && window.location.reload()) : 0 <= i.indexOf("验证码不正确") ? alert(i) : (0 <= i.indexOf("手机号码重复") ? (i = "您的手机号已经被注册，请直接登录", alert(i)) : 0 <= i.indexOf("该账号已经注册") && (i = "您的手机号已经被注册，请直接登录", alert(i)), $("#loginMoblie").val($("#registermoblie").val()), $(".registerDiv").css({
                display: "none"
            }), $(".loginRegisterDiv").css({
                display: "block"
            }), $(".loginDiv").css({
                display: "block"
            }), $(".submitBtn").html("登&emsp;&nbsp;录"), $(".tabUl li").removeClass("navOn"), $(".tabUl li").eq(0).addClass("navOn"), $(".metenTips").hide(), $.cookie("mobile", "", {
                expires: 365,
                path: "/"
            }), $.cookie("username", "", {
                expires: 365,
                path: "/"
            }), $.cookie("METEN_LP_PAGE_LOGIN", "", {
                expires: 365,
                path: "/"
            }))
        })
    }), $("#btnLogin").off().on("click", function () {
        var e = $(this).parent().find(".input-code-area");
        if (checkAgreement(this) && checkPhone("loginMoblie", e) && checkCode("loginCode", e)) {
            var i = $.trim($("#loginMoblie").val()),
                t = $.trim($("#loginCode").val());
            ajaxLogin(i, t, function (e) {
                if (1 == e.IsSuccess) loginSuccess("", i), $(".loginRegisterDiv").fadeOut(), $(".loginDiv").css({
                    display: "none"
                }), $(".registerDiv").css({
                    display: "none"
                }), creSucDiv("恭喜您登录成功！", "", "登录"), 0 < window.location.href.indexOf("video_") && window.location.reload();
                else {
                    alert("请输入正确的短信验证码")
                }
            })
        }
    })
}

function AjaxCORS(e, i, t, n, s) {
    var o, a = "";
    if ("object" == typeof n && null != n) {
        var l = n.moduleName || "";
        l && delete n.moduleName
    }
    if (null == n || null == n || "" == n ? o = "" : null != (o = n.Mobile) && null != o || (o = ""), a = 1 == i ? requestUrl + "/api/SEM" : 2 == i ? requestUrl + "/api/SendPhoneCode" : 3 == i ? requestUrl + "/api/SendPhoneCode/SmsMessage" : 4 == i ? requestUrl + "/api/Login" : 5 == i ? requestUrl + "/api/Register/IsRegister" : 6 == i ? requestUrl + "/api/Register" : 7 == i ? requestUrl + "/api/Register/AddAnswerTime" : 8 == i ? requestUrl + "/api/Appointment/SchoolORCC" : 9 == i ? requestUrl + "/api/Appointment/Listening" : 10 == i ? requestUrl + "/api/Appointment/Course" : 11 == i ? requestUrl + "/api/Appointment/Banner" : 12 == i ? requestUrl + "/api/Appointment/Other" : 13 == i ? requestUrl + "/api/Appointment/SelectAppTorS" : 14 == i ? requestUrl + "/api/Load/Teacher" : 15 == i ? requestUrl + "/api/Load/TeacherDetail" : 16 == i ? requestUrl + "/api/Load/AreaSchool" : 17 == i ? requestUrl + "/api/Load/SchoolDetail" : 18 == i ? requestUrl + "/api/Load/SchoolImg" : 19 == i ? requestUrl + "/api/PersonalCenter/PersonalAppointmentCourse" : 20 == i ? requestUrl + "/api/PersonalCenter/PersonalAppointmentOnline" : 21 == i ? requestUrl + "/api/PersonalCenter/PersonalAppintmentTeacher" : 22 == i ? requestUrl + "/api/Public/AllCity" : 23 == i ? requestUrl + "/api/Public/GetCity" : 24 == i ? requestUrl + "/api/Register/TempRegister" : 25 == i ? requestUrl + "/api/Register/UpdateMemberCity" : 26 == i ? requestUrl + "/api/Load/OnlineLesson" : 27 == i ? requestUrl + "/api/Load/IndexTeacher" : 28 == i ? requestUrl + "/api/Load/GetFacetoface" : 29 == i ? requestUrl + "/api/Online/AddWantSee" : 30 == i ? requestUrl + "/api/Video/AddLoveQty" : 31 == i ? requestUrl + "/api/Video/AddWantToSee" : 32 == i ? requestUrl + "/api/Video/LoveQty" : 33 == i ? requestUrl + "/api/Teacher/AddLike" : 34 == i ? requestUrl + "/api/Vclass/List" : 35 == i ? requestUrl + "/api/OnlineList" : 36 == i ? requestUrl + "/api/Load/GetEmployeeRelation" : 37 == i ? requestUrl + "/api/Count/Course" : 38 == i ? requestUrl + "/api/Count/OtherApp" : 39 == i ? requestUrl + "/api/Alioss/PutObject" : 40 == i ? requestUrl + "/api/Complaint/ComplaintInfo" : 41 == i ? requestUrl + "/api/Complaint/Workorder" : 42 == i ? requestUrl + "/api/DownLoad/GetType" : 43 == i ? requestUrl + "/api/DownLoad/List" : 44 == i ? requestUrl + "/api/Examination/List" : 45 == i ? requestUrl + "/api/Examination/GetScore" : 46 == i ? requestUrl + "/api/Load/GetSalesActivity" : 47 == i ? requestUrl + "/api/WeiXin/BulkMember" : 48 == i ? requestUrl + "/api/WeiXin/GetConfig" : 49 == i ? requestUrl + "/api/Course/GetCity" : 50 == i ? requestUrl + "/api/Load/OnlineLessonDetail" : 51 == i ? requestUrl + "/api/Count/SalesApp" : 52 == i ? requestUrl + "/api/Report/PutSalesData" : 53 == i ? requestUrl + "/api/Appointment/CustomizedCourse" : 54 == i ? requestUrl + "/api/Appointment/Gift" : 55 == i ? requestUrl + "/api/Appointment/OfferType" : 56 == i ? requestUrl + "/api/NewAI/OVisitor" : 57 == i ? requestUrl + "/api/Load/AddCollect" : 58 == i ? requestUrl + "/api/Load/CollectList" : 59 == i ? requestUrl + "/api/Register/NewMediaMemberReg" : i, t) var r = {
        Url: window.location.href,
        UrlReferrer: (document.referrer || "").substring(0, 300),
        Tid: $.trim($("#Tid").val()),
        UGuid: $.cookie("gr_user_id") || "",
        random: Math.random(),
        Equipment: 1
    };
    else r = {};
    var c = $.extend(r, {}),
        d = $.extend(c, n || {}),
        u = d.Offertype;
    $.ajax({
        url: a + getDataFormat(d),
        xhrFields: {
            withCredentials: !0
        },
        type: e,
        cache: !1
    }).done(function (e) {
        24 != i && 6 != i && 10 != i && 8 != i && 9 != i && 12 != i && 11 != i && 53 != i || (e.IsSuccess ? (regRecord(o, "注册成功", l), 24 == i || 6 == i ? (null != d.Offertype && null != d.Offertype || (u = 5), gio("setUserId", hex_md5(o)), gio("people.set", {
            phone_ppl: hex_md5(o),
            offertype_ppl: u
        }), gio("track", "signupsuccess", {
            userid_var: hex_md5(o),
            zhucerukou_var: u,
            pagename_var: window.location.href
        })) : (u = 10 == i ? 18 : 8 == i ? 20 : 25, gio("setUserId", hex_md5(o)), gio("people.set", {
            phone_ppl: hex_md5(o),
            offertype_ppl: u
        }), gio("track", "yuyuesuccess", {
            userid_var: hex_md5(o),
            yuyuerukou_var: u,
            pagename_var: window.location.href
        }))) : 0 < e.Message.indexOf("手机号码重复") ? (regRecord(o, "重复注册", l), 24 == i || 6 == i ? (null != d.Offertype && null != d.Offertype || (u = 5), gio("setUserId", hex_md5(o)), gio("people.set", {
            phone_ppl: hex_md5(o),
            offertype_ppl: u
        }), gio("track", "signupsuccess", {
            userid_var: hex_md5(o),
            zhucerukou_var: u,
            pagename_var: window.location.href
        })) : (u = 10 == i ? 18 : 8 == i ? 20 : 25, gio("setUserId", hex_md5(o)), gio("people.set", {
            phone_ppl: hex_md5(o),
            offertype_ppl: u
        }), gio("track", "yuyuesuccess", {
            userid_var: hex_md5(o),
            yuyuerukou_var: u,
            pagename_var: window.location.href
        }))) : (gio("setUserId", hex_md5(o)), null != d.Offertype && null != d.Offertype || (u = 5), gio("people.set", {
            phone_ppl: hex_md5(o),
            offertype_ppl: u
        }), regRecord(o, "注册失败" + e.Message, l), gio("track", "signuperror", {
            signuperror_var: e.Message
        }))), s(e)
    })
}

function getDataFormat(e) {
    if ("object" == typeof e) {
        var i = new Array,
            t = 0;
        for (var n in e) i[t] = encodeURIComponent(n) + "=" + encodeURIComponent(e[n]), t++;
        return "?" + i.join("&")
    }
    alert("输入的参数必须是对象")
}

function regsuccss(e, i, t, n, s, o, a) {
    null != e && "" != e || (e = 0), null != s && "" != s || (s = 5), null != n && null != n || (n = ""), AjaxCORS("POST", 6, !0, {
        Code: n,
        Offertype: s,
        CityId: e,
        IsAborad: o = 0 == o ? 1 : 0 < url.indexOf("course_teenager") || 0 < url.indexOf("sem/lp/xin_concept") || 0 < url.indexOf("sem/lp/Junior_high_school") || 0 < url.indexOf("sem/lp/High_high_school") || 0 < url.indexOf("sem/lp/high_school_learning") || 0 < url.indexOf("sem/lp/Junior_school_learning") || 0 < url.indexOf("sem/lp/teenagers") ? 10 : 0 < url.indexOf("course_toefl") || 0 < url.indexOf("course_ielts") ? 4 : 0 < url.indexOf("sem/lp/online_talk") || 0 < url.indexOf("sem/lp/online_website") || 0 < url.indexOf("sem/lp/onlinestudy") || 0 < url.indexOf("likeshuo") ? 101 : 1,
        Name: i,
        Mobile: t
    }, function (e) {
        a(e)
    }, function (e) {})
}

function regNewSuccss(e, i, t, n) {
    var s = 1,
        o = $.cookie("Citycode") || 22;
    s = 0 < url.indexOf("course_teenager") || 0 < url.indexOf("sem/lp/xin_concept") || 0 < url.indexOf("sem/lp/Junior_high_school") || 0 < url.indexOf("sem/lp/High_high_school") || 0 < url.indexOf("sem/lp/high_school_learning") || 0 < url.indexOf("sem/lp/Junior_school_learning") || 0 < url.indexOf("sem/lp/teenagers") ? 10 : 0 < url.indexOf("course_toefl") || 0 < url.indexOf("course_ielts") ? 4 : 0 < url.indexOf("sem/lp/online_talk") || 0 < url.indexOf("sem/lp/online_website") || 0 < url.indexOf("sem/lp/onlinestudy") || 0 < url.indexOf("likeshuo") ? 101 : 1, AjaxCORS("POST", 6, !0, $.extend({
        Offertype: 5,
        CityId: o,
        IsAborad: s,
        Name: e || "姓名为空",
        Mobile: i
    }, t || {}), function (e) {
        n(e)
    }, function (e) {})
}

function sendSmsMessage(e, i, t, n) {
    n && n()
}

function getGift(e, i) {
    AjaxCORS("POST", 54, !1, {
        Ids: e
    }, function (e) {
        i(e)
    }, function (e) {})
}

function loginSuccess(e, i) {
    $.cookie("METEN_LP_PAGE_LOGIN", i, {
        expires: 365,
        path: "/"
    }), $.cookie("mobile", i, {
        expires: 365,
        path: "/"
    }), $.cookie("username", e, {
        expires: 365,
        path: "/"
    }), Islogin();
    var t = window.location.href.toLowerCase();
    0 <= t.indexOf("video.html") && t.indexOf("sem/lp/") < 0 && window.location.reload(), "undefined" != typeof moduleData && moduleData.sendData.gioId && getBehavior(JSON.stringify(moduleData.sendData));
    var n = $.cookie("bd_vid");
    n && sendBdVid(n, i)
}

function isRegister(e, i) {
    BASE64.encode(e);
    AjaxCORS("POST", 5, !1, {
        Mobile: e
    }, function (e) {
        i(e)
    }, function (e) {})
}

function sendloginCode(i) {
    var t = i.id;
    if (checkPhone("loginMoblie")) {
        var n = $.trim($("#loginMoblie").val()),
            s = BASE64.encode(n);
        isRegister(n, function (e) {
            e.IsSuccess ? sendPhoneCode(n, "loginValidCode", s, function (e) {
                if (e.IsSuccess) secondsTimer(t, n);
                else {
                    if ("本月已发送5个验证码" != e.Message) {
                        $("#" + t).unbind().bind("click", function () {
                            sendPhoneCode(n, t, s, function (e) {})
                        });
                        return alert("请输入正确的短信验证码"), !1
                    }
                    alert("如不能正常收取验证码，请联系在线客服或拨打400-700-1003咨询！")
                }
            }) : ("您的手机号还未注册，请先注册", alert("您的手机号还未注册，请先注册"), $(".loginDiv").css({
                display: "none"
            }), $(".registerDiv").css({
                display: "block"
            }), $(".tabUl li").removeClass("navOn"), $(".tabUl li").eq(1).addClass("navOn"), $(".submitBtn").html("注&emsp;&nbsp;册"), $(".metenTips").show(), $(i).removeAttr("onclick"))
        })
    }
}
$(function () {
    getAllcity(function (e) {
        "其它" == cityName ? $(".hd-pos span").text("深圳") : $(".hd-pos span").text(cityName);
        var n = e;
        $(e).each(function (e, i) {
            "<li>" + i.Name + "</li>"
        });
        $(".nav-list").append('<div class="chooseCity"></div>');
        for (var s = "", o = [], a = 0; a < n.length; a++) o.push(n[a].pinyin.toUpperCase().substr(0, 1));
        unique(o, function (e) {
            for (var i = 0; i < e.length; i++) {
                s += i % 2 == 0 ? '<li style="width:140px;"><i>' + e[i] + "</i>" : '<li style="width:220px;"><i>' + e[i] + "</i>";
                for (var t = 0; t < n.length; t++) e[i] == n[t].pinyin.toUpperCase().substr(0, 1) && (s += "<span>" + n[t].Name + '</span><input value=" ' + n[t].EIP_ID + '" type="hidden" />');
                s += "</li>"
            }
        }), $(".chooseCity").html("<h4>欢迎来到美联英语，请选择合适的美联英语校区所在地</h4><ul></ul>"), $(".chooseCity ul").html(s), $(".chooseCity ul li span").on("click", function () {
            cityName = $.trim($(this).text()), setTimeout(function () {
                $(".hd-pos span").text(cityName)
            }, 500), SetLocalCity(cityName)
        });
        $(".nav-list").append('<div class="schCity"></div>'), $(".nav-list .schCity").html("<ul></ul>"), $(".schCity ul").html(s), $(".schCity ul li span").each(function () {
            var e = $.trim($(this).next().val());
            $(this).on("click", function () {
                window.location.href = "/school_" + e + ".html"
            })
        });
        $("body").append('<div class="cityDiv"><i class="closeIcon"></i><h2>欢迎来到美联英语，请选择合适的美联校区所在地</h2><div class="guessPos"><i></i><div>猜你所在<span></span><b></b></div></div><div class="cityListDiv"><ul></ul></div></div>'), $(".cityListDiv ul").append(s), $(".cityListDiv ul").append("<li style='text-indent:30px;'><span>其他城市</span></li>"), $(".cityDiv .closeIcon").on("click", function () {
            SetLocalCity("其它"), $(".hd-pos span").text("深圳"), removeDiv("maskDiv"), $(".cityDiv").css({
                display: "none"
            })
        }), $(".cityListDiv ul li span").on("click", function () {
            "其他城市" == $(this).text() && url.indexOf("/ai/toeic.html") < 0 ? (SetLocalCity(cityName = "其它"), $.cookie("Lcity", cityName, {
                expires: 365,
                path: "/"
            }), $(".hd-pos span").text("深圳"), removeDiv("maskDiv"), $(".cityDiv").css({
                display: "none"
            }), 0 < url.indexOf("/sem/lp/likeshuo") || (window.location.href = "/sem/lp/likeshuo.html")) : (cityName = $.trim($(this).text()), $(".hd-pos span").text(cityName), removeDiv("maskDiv"), $(".cityDiv").css({
                display: "none"
            }), SetLocalCity(cityName))
        }), menuShow(".hd-pos", ".chooseCity", "timer2"), menuShow(".nav-sch", ".schCity", "timer3")
    }), menuShow(".nav-cou", ".nav-cou-list", "timer1"), menuShow(".pinpai", ".pinpai-list", "timer6"), menuShow(".hd-course", ".in-kczx", "timer4"), menuShow(".nav-gj", ".in-xxgj", "timer5"), $(".new-top .in-xxgj ul li").on("click", function () {
        var e = $(this).index();
        return 0 == e ? (createDiv(), $(".words-box").fadeIn()) : 1 == e ? window.open($(this).find("a")[0].href) : (createDiv(), $(".study-box").fadeIn()), !1
    }), $(".words-box .words-box-close,.study-box .study-box-close").on("click", function () {
        return $(this).parent().fadeOut(), setTimeout(function () {
            $("#maskDiv").remove()
        }, 400), !1
    }), -1 < url.indexOf("/course_") ? $(".hd-md ul li").eq(1).addClass("active").siblings().removeClass("active") : -1 < url.indexOf("/teacher_") ? $(".hd-md ul li").eq(2).addClass("active").siblings().removeClass("active") : -1 < url.indexOf("/reserve_teacher") ? ($(".hd-md ul li").eq(2).addClass("active").siblings().removeClass("active"), $(".hd-md ul li.nav-sch").removeClass("active")) : -1 < url.indexOf("/school_") ? $(".hd-md ul li").eq(3).addClass("active").siblings().removeClass("active") : -1 < url.indexOf("/result.html") ? $(".hd-md ul li").eq(5).addClass("active").siblings().removeClass("active") : -1 < url.indexOf("/tuition.html") ? $(".hd-md ul li").eq(4).addClass("active").siblings().removeClass("active") : -1 < url.indexOf("/class.html") ? $(".hd-md ul li").eq(6).addClass("active").siblings().removeClass("active") : -1 < url.indexOf("/live_detail") ? $(".hd-md ul li").removeClass("active") : -1 < url.indexOf("/brand.html") || -1 < url.indexOf("/news.html") || -1 < url.indexOf("/news_detail") ? $(".hd-md ul li").eq(6).addClass("active").siblings().removeClass("active") : $(".hd-md ul li").eq(0).addClass("active").siblings().removeClass("active"), act2018Fc();
    var e = getUrlParam("bd_vid");
    e && ($.cookie("bd_vid", e, {
        expires: 1,
        path: "/"
    }), sendBdVid(e)), bindAgreement(".app-metenTips")
});
var sendPhoneCode = function (e, i, t, n) {
        AjaxCORS("POST", 2, !1, {
            Mobile: e,
            APIKEY: t
        }, function (e) {
            n(e)
        }, function (e) {})
    },
    myNewInterval, secondsTimer = function (i, t) {
        var n = 60,
            s = BASE64.encode(t);
        myNewInterval = setInterval(function () {
            var e = null == $("#" + i).attr("type") ? "" : $("#" + i).attr("type");
            "button" == e ? $("#" + i).val(n-- + "s后重新获取") : $("#" + i).html(n-- + "s后重新获取"), $("#" + i).css({
                background: "#999999",
                "font-size": "14px"
            }), n <= 0 && (clearInterval(myNewInterval), "button" == e ? $("#" + i).val("重新获取") : $("#" + i).html("重新获取"), $("#" + i).css({
                background: "#ff5858",
                "font-size": "16px"
            }), $("#" + i).unbind().bind("click", function () {
                sendPhoneCode(t, i, s, function (e) {
                    if (!e.IsSuccess) {
                        $("#" + i).unbind().bind("click", function () {
                            sendPhoneCode(t, i, s)
                        });
                        return alert("请输入正确的短信验证码"), !1
                    }
                    secondsTimer(i, t)
                })
            })), "" != $.cookie("mobile") && null != $.cookie("mobile") && (clearInterval(myNewInterval), "button" == e ? $("#" + i).val("获取验证码") : $("#" + i).html("获取验证码"), $("#" + i).css({
                background: "#ff5858",
                "font-size": "16px"
            }), $("#" + i).unbind().bind("click", function () {
                sendPhoneCode(t, i, s, function (e) {
                    if (!e.IsSuccess) {
                        $("#" + i).unbind().bind("click", function () {
                            sendPhoneCode(t, i, s)
                        });
                        return alert("请输入正确的短信验证码"), !1
                    }
                    secondsTimer(i, t)
                })
            }))
        }, 1e3)
    };

function ajaxLogin(e, i, t) {
    AjaxCORS("POST", 4, !1, {
        Mobile: e,
        Code: i
    }, function (e) {
        t(e)
    }, function (e) {})
}

function exitLogin() {
    confirm("确定要退出登录吗？") && ($.cookie("mobile", "", {
        expires: 365,
        path: "/"
    }), $.cookie("username", "", {
        expires: 365,
        path: "/"
    }), $.cookie("METEN_LP_PAGE_LOGIN", "", {
        expires: 365,
        path: "/"
    }), $(".hd-rt ul").html('<li class="nav-reg">注册</li><li class="nav-log">登录</li>'), 0 < window.location.href.indexOf("reservation.html") ? window.location.href = "index.html" : location.reload())
}

function Myapp() {
    $.trim($("#islogin").val());
    null != $.cookie("mobile") && "" != $.cookie("mobile") ? (createDiv(), creSucDiv("恭喜您登录成功！", ["请保持手机畅通，稍后会有老师联系您。<br/>扫码进入小程序查看预约信息"], "登录", !0)) : (createDiv("maskDiv"), $(".loginRegisterDiv").css({
        display: "block"
    }), $(".loginDiv").css({
        display: "block"
    }), $(".tabUl li").removeClass("navOn"), $(".tabUl li").eq(0).addClass("navOn"), $(".metenTips").hide())
}

function getUrlParam(e) {
    var i = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
        t = window.location.search.substr(1).match(i);
    return null != t ? unescape(t[2]) : null
}

function replaceParamVal(oldUrl, paramName, replaceValue) {
    var re = eval("/(" + paramName + "=)([^&]*)/gi"),
        nUrl = oldUrl.replace(re, paramName + "=" + replaceValue);
    return nUrl
}

function _gsSuccessCallback(e) {
    window.eyeofcloud = window.eyeofcloud || [], window.eyeofcloud.push(["trackEvent", "registerSuccess"]), window.eyeofcloud.event && window.eyeofcloud.push(["trackEvent", "registerSuccess" + window.eyeofcloud.event])
}

function popup(e) {
    var i = $("#" + e),
        t = i.outerHeight(!0),
        n = i.outerWidth(!0),
        s = $(window).height(),
        o = ($(window).width() - n) / 2,
        a = (s - t) / 2,
        l = document.body.scrollTop || document.documentElement.scrollTop;
    a = (s - t) / 2 + l + "px", i.css({
        display: "block",
        opacity: "1",
        top: a,
        left: o,
        "z-index": 100003,
        mozTransition: "all 0.2s",
        webkitTransition: "all 0.2s",
        msTransition: "all 0.2s",
        oTransition: "all 0.2s",
        transition: "all 0.2s"
    }), $(window).scroll(function () {
        var e = document.body.scrollTop || document.documentElement.scrollTop;
        a = (s - t) / 2 + e + "px", i.css({
            top: a
        })
    }), createDiv("maskDiv")
}

function getCityid(e, i, t) {
    AjaxCORS("POST", 23, !1, {
        Name: e,
        Type: i
    }, function (e) {
        t(e)
    }, function (e) {})
}

function loadAllSchool(e, i, t) {
    getCityid(e, "EIP", function (e) {
        null != i && null != i || (i = ""), AjaxCORS("POST", 16, !1, {
            PageSize: 200,
            IsMobile: !1,
            CityEipId: id = e,
            BranchName: i,
            PageIndex: 1
        }, function (e) {
            t(e)
        }, function (e) {})
    })
}

function needArr(e, i, t) {
    t({
        QuestionId: e,
        AnwerId: i
    })
}

function needCollect(e, i) {
    AjaxCORS("POST", requestUrl + "/api/Register/Needs", !1, {
        Mobile: e,
        Data: i
    }, function (e) {}, function (e) {})
}

function getUserNeedData(e) {
    for (var i = "", t = "", n = "", s = $(e), o = [], a = s.length, l = s.find("option").length, r = 0; r < a; r++) {
        var c = {};
        if (l) c.QuestionId = $(s[r]).attr("data-id"), c.AnwerId = $(s[r]).val(), o.push(c), i += $(s[r]).find("option:selected").text() + " ", $(s[r]).find("option:selected").attr("data-needtype") && (t += $(s[r]).find("option:selected").attr("data-needtype") + ",");
        else {
            var d = $(s[r]).find(".active");
            if (1 < d.length)
                for (var u = 0; u < d.length; u++)(c = {}).AnwerId = $(d[u]).attr("data-id"), c.QuestionId = $(s[r]).attr("data-id"), o.push(c), i += $(d[u]).text() + " ", $(d[u]).attr("data-needtype") && (t += $(d[u]).attr("data-needtype") + ",");
            else c.AnwerId = $(s[r]).find(".active").attr("data-id"), c.QuestionId = $(s[r]).attr("data-id"), o.push(c), i += $(d).text() + " ", $(d).attr("data-needtype") && (t += $(d).attr("data-needtype") + ",")
        }
    }
    return t && (n = t.substring(0, t.length - 1)), {
        description: $.trim(i),
        data: JSON.stringify(o),
        needType: n
    }
}

function createDiv() {
    if ($("#maskDiv").length <= 0) {
        var e = $('<div id="maskDiv"></div>');
        $("body").append(e)
    } else $("#maskDiv").css({
        display: "block"
    })
}

function removeDiv(e) {
    0 < $("#" + e).length ? $("#" + e).remove() : $("." + e).remove(), $("body input").parent().removeClass("err")
}

function regSucDiv(e, i, t, n) {
    $("body").append('<div id="appointmentDiv"></div>'), $("#appointmentDiv").html('<h2><em></em><span id="closed">×</span></h2><div class="info"><p>小美将双手为您奉上：</p><div id="appBox"></div></div><div class="form"><div class="input-tel-area formInfo"><b class="phone"></b><input type="text" maxlength="11" value="请输入您的手机号"/></div><a href="javascript:;" id="course_submit"></a><div class="app-metenTips" style="margin-top: 20px;background: #fff;"><div class="tips-info"><div class="checkBox fl"><img src="http://static.meten.com/web/images/index2.0/chooseBtn01.png" alt="美联用户协议复选框" title="美联用户协议复选框" /></div><span class="fr">同意<a href="/privacy.html" target="_blank">《美联用户隐私保护协议》</a></span></div></div></div>'), $(".formInfo input").on("focus", function () {
        "请输入您的手机号" == $(this).val() && $(".formInfo input").val("")
    }), $(".formInfo input").on("blur", function () {
        "" == $(this).val() && $(".formInfo input").val("请输入您的手机号")
    }), null != e && null != e && "" != e || (e = "预约到校 申请试听课"), null != t && null != t && "" != t || (t = "确认预约"), $("#appointmentDiv h2 em").html(e), $("#course_submit").html(t), $("#appBox").html(i), $("#closed").on("click", function () {
        removeDiv("appointmentDiv"), removeDiv("maskDiv")
    });
    var s = $.cookie("mobile");
    null != s && null != s && "" != s && $(".formInfo input").val(s), $("#appointmentDiv .checkBox").off().on("click", function () {
        0 < $(this).find("img").length ? $(this).find("img").remove() : $(this).append('<img src="https://static.meten.com/web/images/index2.0/chooseBtn01.png" alt="美联用户协议复选框" title="美联用户协议复选框">')
    }), n()
}

function regSmallDiv(e, i, t, n) {
    $("body").append('<div id="smallDiv"></div>'), $("#smallDiv").html('<div><div class="reg-wrap"><h2 class="title">' + e + '</h2><a class="closeAmark" style="display: inline;">x</a><div class="regstep1"><div class="signupGroup relative"><label>*</label><i class=" iphoneIcon inputIcon"></i><input type="text" class="t_txtTelephone phone" value="' + i + '" maxlength="11"></div><div class="signupGroup tc signupGroupbtn"><span style="width: 172px;" class="btngreen t_rightNowApply small-submit">' + t + '</span><div class="app-metenTips" style="margin-top: 20px;background: #fff;"><div class="tips-info"><div class="checkBox fl"><img src="https://static.meten.com/web/images/index2.0/chooseBtn01.png" alt="美联用户协议复选框" title="美联用户协议复选框"></div><span class="fr">同意<a href="/privacy.html" target="_blank">《美联用户隐私保护协议》</a></span></div></div></div></div></div>'), $("#smallDiv input").on("focus", function () {
        $(this).val() == i && $("#smallDiv input").val("")
    }), $("#smallDiv input").on("blur", function () {
        "" == $(this).val() && $("#smallDiv input").val(i)
    }), $("#smallDiv .closeAmark").on("click", function () {
        removeDiv("smallDiv"), removeDiv("maskDiv")
    }), $("#smallDiv .checkBox").off().on("click", function () {
        0 < $(this).find("img").length ? $(this).find("img").remove() : $(this).append('<img src="https://static.meten.com/web/images/index2.0/chooseBtn01.png" alt="美联用户协议复选框" title="美联用户协议复选框">')
    }), n()
}

function creSucDiv(a, l, e, r) {
    getDSWechat(function (e) {
        var i = e.DicKey.split(","),
            t = i.length,
            n = parseInt(Math.random() * t, 10),
            s = ["恭喜您申请成功！", "https://static.meten.com/web/images/dsQrcode/" + i[n] + ".png", "关注微信号<br />了解申请详情与优惠信息", i[n]];
        r && (s[1] = "https://static.meten.com/web/images/index/meten-logo-xcx.jpg", s[3] = "美联英语小程序");
        var o = "";
        o = 0 < url.indexOf("/ai/") || 0 < url.indexOf("/sem/lp/") || 0 < url.indexOf("/ad/") ? ($("body").append($('<div class="sucDiv"></div>')), '<div class="sucDiv-close"></div ><h2>' + s[0] + "</h2><p>" + s[2] + '</p><div class="sucDiv-qrCode"><img src="' + s[1] + '" alt="" /></div><h3>' + s[3] + "</h3><h4>· 扫一扫关注 ·</h4>") : ($("body").append($('<div class="sucDiv" style="background: url(http://static.meten.com/web/images/base/sucDiv-bg01.png) no-repeat;"></div>')), '<div class="sucDiv-close"></div><h2 style="color:#86c138">' + s[0] + "</h2><p>" + s[2] + '</p><div class="sucDiv-qrCode" style="border: 5px solid #86c138;"><img src="' + s[1] + '" alt="" /></div><h3>' + s[3] + "</h3><h4>· 扫一扫关注 ·</h4>"), $(".sucDiv").html(o), $(".sucDiv h2").html(a), r && $(".sucDiv h4").html("· 扫码进入 ·"), "object" == typeof l && $(".sucDiv p").html(l[0]), $(".sucDiv .sucDiv-close").on("click", function () {
            removeDiv("sucDiv"), removeDiv("maskDiv")
        })
    })
}(0 < url.indexOf("/sem/lp") || 0 < url.indexOf("/ad/")) && $(".met365").css({
    display: "block"
});
var BASE64 = {
        enKey: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        deKey: new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1),
        encode: function (e) {
            for (var i, t, n, s = new Array, o = 0; o + 3 <= e.length;) i = e.charCodeAt(o++), t = e.charCodeAt(o++), n = e.charCodeAt(o++), s.push(this.enKey.charAt(i >> 2), this.enKey.charAt((i << 4) + (t >> 4) & 63)), s.push(this.enKey.charAt((t << 2) + (n >> 6) & 63), this.enKey.charAt(63 & n));
            return o < e.length && (i = e.charCodeAt(o++), s.push(this.enKey.charAt(i >> 2)), o < e.length ? (t = e.charCodeAt(o), s.push(this.enKey.charAt((i << 4) + (t >> 4) & 63)), s.push(this.enKey.charAt(t << 2 & 63), "=")) : s.push(this.enKey.charAt(i << 4 & 63), "==")), s.join("")
        },
        decode: function (e) {
            var i, t, n, s, o = new Array,
                a = 0;
            for (e = e.replace(/[^A-Za-z0-9\+\/]/g, ""); a + 4 <= e.length;) i = this.deKey[e.charCodeAt(a++)], t = this.deKey[e.charCodeAt(a++)], n = this.deKey[e.charCodeAt(a++)], s = this.deKey[e.charCodeAt(a++)], o.push(String.fromCharCode((i << 2 & 255) + (t >> 4), (t << 4 & 255) + (n >> 2), (n << 6 & 255) + s));
            return a + 1 < e.length && (i = this.deKey[e.charCodeAt(a++)], t = this.deKey[e.charCodeAt(a++)], a < e.length ? (n = this.deKey[e.charCodeAt(a)], o.push(String.fromCharCode((i << 2 & 255) + (t >> 4), (t << 4 & 255) + (n >> 2)))) : o.push(String.fromCharCode((i << 2 & 255) + (t >> 4)))), o.join("")
        }
    },
    hexcase = 0,
    b64pad = "",
    chrsz = 8;

function hex_md5(e) {
    return binl2hex(core_md5(str2binl(e), e.length * chrsz))
}

function b64_md5(e) {
    return binl2b64(core_md5(str2binl(e), e.length * chrsz))
}

function hex_hmac_md5(e, i) {
    return binl2hex(core_hmac_md5(e, i))
}

function b64_hmac_md5(e, i) {
    return binl2b64(core_hmac_md5(e, i))
}

function calcMD5(e) {
    return binl2hex(core_md5(str2binl(e), e.length * chrsz))
}

function md5_vm_test() {
    return "900150983cd24fb0d6963f7d28e17f72" == hex_md5("abc")
}

function core_md5(e, i) {
    e[i >> 5] |= 128 << i % 32, e[14 + (i + 64 >>> 9 << 4)] = i;
    for (var t = 1732584193, n = -271733879, s = -1732584194, o = 271733878, a = 0; a < e.length; a += 16) {
        var l = t,
            r = n,
            c = s,
            d = o;
        n = md5_ii(n = md5_ii(n = md5_ii(n = md5_ii(n = md5_hh(n = md5_hh(n = md5_hh(n = md5_hh(n = md5_gg(n = md5_gg(n = md5_gg(n = md5_gg(n = md5_ff(n = md5_ff(n = md5_ff(n = md5_ff(n, s = md5_ff(s, o = md5_ff(o, t = md5_ff(t, n, s, o, e[a + 0], 7, -680876936), n, s, e[a + 1], 12, -389564586), t, n, e[a + 2], 17, 606105819), o, t, e[a + 3], 22, -1044525330), s = md5_ff(s, o = md5_ff(o, t = md5_ff(t, n, s, o, e[a + 4], 7, -176418897), n, s, e[a + 5], 12, 1200080426), t, n, e[a + 6], 17, -1473231341), o, t, e[a + 7], 22, -45705983), s = md5_ff(s, o = md5_ff(o, t = md5_ff(t, n, s, o, e[a + 8], 7, 1770035416), n, s, e[a + 9], 12, -1958414417), t, n, e[a + 10], 17, -42063), o, t, e[a + 11], 22, -1990404162), s = md5_ff(s, o = md5_ff(o, t = md5_ff(t, n, s, o, e[a + 12], 7, 1804603682), n, s, e[a + 13], 12, -40341101), t, n, e[a + 14], 17, -1502002290), o, t, e[a + 15], 22, 1236535329), s = md5_gg(s, o = md5_gg(o, t = md5_gg(t, n, s, o, e[a + 1], 5, -165796510), n, s, e[a + 6], 9, -1069501632), t, n, e[a + 11], 14, 643717713), o, t, e[a + 0], 20, -373897302), s = md5_gg(s, o = md5_gg(o, t = md5_gg(t, n, s, o, e[a + 5], 5, -701558691), n, s, e[a + 10], 9, 38016083), t, n, e[a + 15], 14, -660478335), o, t, e[a + 4], 20, -405537848), s = md5_gg(s, o = md5_gg(o, t = md5_gg(t, n, s, o, e[a + 9], 5, 568446438), n, s, e[a + 14], 9, -1019803690), t, n, e[a + 3], 14, -187363961), o, t, e[a + 8], 20, 1163531501), s = md5_gg(s, o = md5_gg(o, t = md5_gg(t, n, s, o, e[a + 13], 5, -1444681467), n, s, e[a + 2], 9, -51403784), t, n, e[a + 7], 14, 1735328473), o, t, e[a + 12], 20, -1926607734), s = md5_hh(s, o = md5_hh(o, t = md5_hh(t, n, s, o, e[a + 5], 4, -378558), n, s, e[a + 8], 11, -2022574463), t, n, e[a + 11], 16, 1839030562), o, t, e[a + 14], 23, -35309556), s = md5_hh(s, o = md5_hh(o, t = md5_hh(t, n, s, o, e[a + 1], 4, -1530992060), n, s, e[a + 4], 11, 1272893353), t, n, e[a + 7], 16, -155497632), o, t, e[a + 10], 23, -1094730640), s = md5_hh(s, o = md5_hh(o, t = md5_hh(t, n, s, o, e[a + 13], 4, 681279174), n, s, e[a + 0], 11, -358537222), t, n, e[a + 3], 16, -722521979), o, t, e[a + 6], 23, 76029189), s = md5_hh(s, o = md5_hh(o, t = md5_hh(t, n, s, o, e[a + 9], 4, -640364487), n, s, e[a + 12], 11, -421815835), t, n, e[a + 15], 16, 530742520), o, t, e[a + 2], 23, -995338651), s = md5_ii(s, o = md5_ii(o, t = md5_ii(t, n, s, o, e[a + 0], 6, -198630844), n, s, e[a + 7], 10, 1126891415), t, n, e[a + 14], 15, -1416354905), o, t, e[a + 5], 21, -57434055), s = md5_ii(s, o = md5_ii(o, t = md5_ii(t, n, s, o, e[a + 12], 6, 1700485571), n, s, e[a + 3], 10, -1894986606), t, n, e[a + 10], 15, -1051523), o, t, e[a + 1], 21, -2054922799), s = md5_ii(s, o = md5_ii(o, t = md5_ii(t, n, s, o, e[a + 8], 6, 1873313359), n, s, e[a + 15], 10, -30611744), t, n, e[a + 6], 15, -1560198380), o, t, e[a + 13], 21, 1309151649), s = md5_ii(s, o = md5_ii(o, t = md5_ii(t, n, s, o, e[a + 4], 6, -145523070), n, s, e[a + 11], 10, -1120210379), t, n, e[a + 2], 15, 718787259), o, t, e[a + 9], 21, -343485551), t = safe_add(t, l), n = safe_add(n, r), s = safe_add(s, c), o = safe_add(o, d)
    }
    return Array(t, n, s, o)
}

function md5_cmn(e, i, t, n, s, o) {
    return safe_add(bit_rol(safe_add(safe_add(i, e), safe_add(n, o)), s), t)
}

function md5_ff(e, i, t, n, s, o, a) {
    return md5_cmn(i & t | ~i & n, e, i, s, o, a)
}

function md5_gg(e, i, t, n, s, o, a) {
    return md5_cmn(i & n | t & ~n, e, i, s, o, a)
}

function md5_hh(e, i, t, n, s, o, a) {
    return md5_cmn(i ^ t ^ n, e, i, s, o, a)
}

function md5_ii(e, i, t, n, s, o, a) {
    return md5_cmn(t ^ (i | ~n), e, i, s, o, a)
}

function core_hmac_md5(e, i) {
    var t = str2binl(e);
    16 < t.length && (t = core_md5(t, e.length * chrsz));
    for (var n = Array(16), s = Array(16), o = 0; o < 16; o++) n[o] = 909522486 ^ t[o], s[o] = 1549556828 ^ t[o];
    var a = core_md5(n.concat(str2binl(i)), 512 + i.length * chrsz);
    return core_md5(s.concat(a), 640)
}

function safe_add(e, i) {
    var t = (65535 & e) + (65535 & i);
    return (e >> 16) + (i >> 16) + (t >> 16) << 16 | 65535 & t
}

function bit_rol(e, i) {
    return e << i | e >>> 32 - i
}

function str2binl(e) {
    for (var i = Array(), t = (1 << chrsz) - 1, n = 0; n < e.length * chrsz; n += chrsz) i[n >> 5] |= (e.charCodeAt(n / chrsz) & t) << n % 32;
    return i
}

function binl2hex(e) {
    for (var i = hexcase ? "0123456789ABCDEF" : "0123456789abcdef", t = "", n = 0; n < 4 * e.length; n++) t += i.charAt(e[n >> 2] >> n % 4 * 8 + 4 & 15) + i.charAt(e[n >> 2] >> n % 4 * 8 & 15);
    return t
}

function binl2b64(e) {
    for (var i = "", t = 0; t < 4 * e.length; t += 3)
        for (var n = (e[t >> 2] >> t % 4 * 8 & 255) << 16 | (e[t + 1 >> 2] >> (t + 1) % 4 * 8 & 255) << 8 | e[t + 2 >> 2] >> (t + 2) % 4 * 8 & 255, s = 0; s < 4; s++) 8 * t + 6 * s > 32 * e.length ? i += b64pad : i += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n >> 6 * (3 - s) & 63);
    return i
}

function encodeUnicode(e) {
    for (var i = [], t = 0; t < e.length; t++) i[t] = ("00" + e.charCodeAt(t).toString(16)).slice(-4);
    return "\\u" + i.join("\\u")
}

function decodeUnicode(e) {
    return e = e.replace(/\\/g, "%"), unescape(e)
}

function regRecord(e, i, t) {
    AjaxCORS("POST", requestUrl + "/api/Register/RegisterRecord", !1, {
        Mobile: e,
        ModelName: t,
        UGuid: $.cookie("gr_user_id") || "",
        State: i,
        Url: window.location.href
    }, function (e) {}, function (e) {})
}

function sendYPSendSms(e, i, t, n) {
    AjaxCORS("POST", requestUrl + "/api/SendPhoneCode/YPSendSms", !1, {
        Mobile: e,
        tpl_id: i,
        url: t
    }, function (e) {
        n && n(e)
    }, function (e) {})
}

function showSearchOrKeyWord(i, t) {
    var e = "",
        n = decodeURI(document.referrer);
    n && (e = searchArr(effectivewordsArr, getRefParam("wd", n))), "" == e ? url.indexOf("dingtou.html") < 0 ? getSemKeyWords(function (e) {
        t && t(e || i)
    }) : t && t(i) : t && t(e)
}

function searchArr(e, i) {
    for (var t = 0; t < e.length; t++)
        if (-1 < i.indexOf(e[t])) return i.replace(e[t], "美联");
    return i
}

function getRefParam(e, i) {
    var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
        n = i.substr(1).match(t);
    return null != n ? unescape(n[2]) : ""
}

function getSemKeyWords(i) {
    var t = setInterval(function () {
        var e = $.cookie("keyWords");
        "object" != typeof e && (e = searchArr(effectivewordsArr, e), i && i("null" == e ? "" : e), clearInterval(t))
    }, 500)
}

function getParentUrl() {
    var i = null;
    if (parent !== window) try {
        i = parent.location.href
    } catch (e) {
        i = document.referrer
    }
    return i
}

function _cortypFocus(e, t) {
    var i = $(e),
        n = i.find("li"),
        s = i.find("h3"),
        o = i.find("div.item"),
        a = i.find("li").length,
        l = "top" == t ? o.outerHeight() : o.outerWidth(),
        r = "top" == t ? o.outerHeight() : s.outerWidth();
    "top" == t ? n.height(l + r) : n.width(l + r), "top" == t ? i.height(a * r + l) : i.width(a * r + l);
    for (var c = "top" == t ? i.height() : i.width(), d = 1; d < a; d++) "top" == t ? n.eq(d).css("top", c - r * a + d * r) : n.eq(d).css("left", c - r * a + d * r);
    n.on("mouseenter", function () {
        for (var e = $(this).index(), i = 0; i < a; i++) i <= e ? "top" == t ? n.eq(i).stop().animate({
            top: i * r
        }).addClass("on") : n.eq(i).stop().animate({
            left: i * r
        }).addClass("on") : "top" == t ? n.eq(i).stop().animate({
            top: c - (a - i) * r
        }).removeClass("on") : n.eq(i).stop().animate({
            left: c - (a - i) * r
        }).removeClass("on")
    })
}

function getBrowInfo(n) {
    var s = document.referrer,
        o = window.location;
    if ("" !== s && s !== location.href) {
        var a = "",
            e = navigator.connection || navigator.mozConnection || navigator.webkitConnection || null;
        null !== e && ("metered" in e || (a = void 0 === e.type ? "other" : "cellular" === e.type ? "4g" : e.type));
        var l = "",
            i = new RegExp("(^|&)utm_term=([^&]*)(&|$)"),
            t = window.location.search.substr(1).match(i);
        null != t && (l = t[2]);
        var r = setInterval(function () {
            var e = $.cookie("Tid"),
                i = $.cookie("gr_user_id"),
                t = $.cookie("city");
            "object" != typeof i && "object" != typeof t && (clearInterval(r), AjaxCORS("POST", requestUrl + "/api/NewAI/GetBrowInfo", !1, {
                userId: i,
                tid: e,
                searchWord: l,
                cityName: t,
                networkState: a,
                page: o.href,
                queryParameters: o.search,
                referrer: s.substring(0, 300)
            }, function (e) {
                n && n(e)
            }, function (e) {}))
        }, 500)
    }
}

function act2018Fc() {
    if ((0 < url.indexOf("/ai/") || 0 < url.indexOf("/sem/lp/")) && url.indexOf("/ai/qyc.html") < 0 && url.indexOf("/sem/lp/downLoad.html") < 0) {
        $(".tobeBetter-left").remove(), $(".tobeBetter-bottom").remove();
        $("body").append('<div class="tobeBetter-left"></div>'), $("body").append('<div class="tobeBetter-bottom"><div class="tobeBetter-bottom-con" > <div class="tobeBetter-bottom-close"><span>10</span>S后关闭推荐</div><div class="tobeBetter-form"><input type="tel" value="请输入您的手机号，接收试听信息" onfocus="if(value==\'请输入您的手机号，接收试听信息\'){value=\'\'}" onblur="if(value==\'\'){value=\'请输入您的手机号，接收试听信息\'}" maxlength="11" /><div class="tobeBetter-btn">免费试听</div></div></div></div>');
        var e = 10,
            t = setInterval(function () {
                1 == e ? (clearInterval(t), $(".tobeBetter-bottom").css({
                    display: "none"
                }), $(".tobeBetter-left").css({
                    display: "block"
                })) : (e--, $(".tobeBetter-bottom-close span").html(e))
            }, 1e3);
        $(".tobeBetter-left").on("click", function () {
            if (0 < $("script[src='https://static.meten.com/web/sem/lp/js/semregisterB.js']").length) $(".tobeBetter-left").attr("offertype", "5"), $(".tobeBetter-left").attr("titletips", "限时领取 美联英语精选体验课"), $(".tobeBetter-left").attr("btnTxt", "免费领取"), registerInfo(this);
            else {
                showRegWrap(this, {
                    title: "限时领取 美联英语精选体验课",
                    btnInfo: "免费领取",
                    offertype: 5,
                    activityType: 50
                })
            }
        }), $(".tobeBetter-bottom-close").on("click", function () {
            clearInterval(t), $(".tobeBetter-bottom").css({
                display: "none"
            }), $(".tobeBetter-left").css({
                display: "block"
            })
        }), $(".tobeBetter-btn").on("click", function () {
            var i = $.trim($(".tobeBetter-form input").val()),
                e = $.cookie("Citycode");
            "请输入您的手机号，接收试听信息" == i && (i = ""), checkPhone(i, "") && AjaxCORS("POST", 6, !0, {
                Offertype: 5,
                Name: "",
                Mobile: i,
                CityId: e || 0,
                ActivityType: 50
            }, function (e) {
                clearInterval(t), $(".tobeBetter-bottom").css({
                    display: "none"
                }), $(".tobeBetter-left").css({
                    display: "block"
                }), e.IsSuccess ? (loginSuccess("", i), _gsSuccessCallback(i), create_pc_worldcupRegDiv(i, 5, !0)) : -1 < e.Message.indexOf("手机号码重复") && create_pc_worldcupRegDiv(i, 5, !1)
            }, function (e) {})
        })
    }
}

function act2018Suc(e, i, t) {
    $(".sucDiv").remove();
    var n = $('<div class="sucDiv"><div class="sucDiv-close"></div><h2>' + e + "</h2><p>" + i + '</p><div class="sucDiv-qrCode"><img src="' + t + '" alt="" /></div><h3>微信号：美联英语meten</h3><h4>· 扫一扫关注 ·</h4></div>');
    $("body").append(n), $(".sucDiv .sucDiv-close").on("click", function () {
        removeDiv("sucDiv"), removeDiv("maskDiv")
    })
}

function getDSWechat(i) {
    AjaxCORS("POST", requestUrl + "/api/WeiXin/GetDSWechat", !1, {}, function (e) {
        i && i(e)
    }, function (e) {})
}
getBrowInfo();