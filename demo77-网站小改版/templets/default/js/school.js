function loaddetal(a, b) {
    (void 0 == a || null == a || "" == a) && (a = $.cookie("Lcity")), "其它" == a && (a = "深圳"), getCityid(a, "EIP", function (c) {
        var d = c;
        "" != d && AjaxCORS("POST", 16, !1, {
            CityEipId: d,
            PageIndex: 1,
            PageSize: 100,
            BranchName: b,
            IsMobile: !1
        }, function (c) {
            var d, e, f, g, h, i;
            if (0 != c.Items.length) {
                if (d = c.Items, e = c.Items[0], $(".address>.fr>h2").text(e.Name), $(".address>.fr .add").text(e.Address), $(".address>.fr .bus").text(e.Busline), $(".address>.fr .subway").text(e.SubWay), $(".address>.fr .tel").text(e.Tel), $("#appBox").html('<span>· 预约礼</span><input type="hidden" value="' + e.BranchId + '" class="BranchId" /><input type="hidden"   class="BranchName"  value="' + e.Name + '" />'), f = $.trim($(".city").text().replace(":", "")), branchID = c.Items[0].BranchId, $(".appBtn").attr("href", "/reserve_teacher.html?lcity=" + escape(f) + "&bname=" + escape(e.Name) + "&branchid=" + branchID), "" != e.Package) {
                    for (g = e.Package.split("#"), h = "", i = 0; i < g.length; i++) h += "<p>· " + g[i] + "</p>";
                    $(".yyl").html('<span>预约礼</span><div class="giftInfo">' + h + "</div>")
                } else b.indexOf("出国") > 0 ? loadGift(2) : loadGift(3);
                gio("page.set", {
                    pagetype_pvar: "校区详情页",
                    cityname_pvar: a,
                    xiaoquid_pvar: branchID,
                    xiaoquname_pvar: b
                }), schoolimg(e.Id), mapArea(function (b, c) {
                    var e = [];
                    $(d).each(function (b, c) {
                        var d = [c.lng, c.Lat, a, c.Name, c.Busline];
                        e.push(d)
                    }), showMap(b, c, e, !1), b.setZoom(15)
                })
            }
        }, function () {})
    })
}

function schoolimg(a) {
    AjaxCORS("POST", 18, !1, {
        ID: a
    }, function (a) {
        if (0 != a.length) {
            var b = "";
            $(a).each(function (a, c) {
                var d = "";
                d = null == c.Filename && "" == c.Filename ? "/images/school/school02.jpg" : c.Filename, b += '<li><img alt="' + c.Description + '" title="' + c.Description + '" src="' + d + '"></li>'
            }), $("#imgBox").html(b), clearInterval(timer), len = a.length, picW = $("#imgBox li").outerWidth(), len > 3 ? ($("#prev").css("display", "block"), $("#next").css("display", "block"), $("#imgBox").width(picW * len), auto()) : ($("#prev").css("display", "none"), $("#next").css("display", "none"), $("#imgBox").css("left", 0), clearInterval(timer)), $("#prev").click(function () {
                1 == iCan && rSlide("#imgBox", picW, len)
            }), $("#next").click(function () {
                1 == iCan && lSlide("#imgBox", picW, len)
            }), $(".sc_pic").hover(function () {
                clearInterval(timer)
            }, function () {
                len > 3 && auto()
            })
        } else $("#imgBox").html(""), $("#prev").css("display", "none"), $("#next").css("display", "none"), $("#imgBox").css("left", 0), clearInterval(timer)
    }, function () {})
}

function auto() {
    clearInterval(timer), timer = setInterval(function () {
        lSlide("#imgBox", picW, len)
    }, 3e3)
}

function loadGift(a) {
    AjaxCORS("POST", 54, !1, {
        Ids: a
    }, function (a) {
        var b, c;
        if (a.length > 0) {
            for (a = a[0].Contents.split("#"), b = "", c = 0; c < a.length; c++) b += "<p>· " + a[c] + "</p>";
            $(".yyl").html('<span>预约礼</span><div class="giftInfo">' + b + "</div>")
        }
    }, function () {})
}

function mapArea(a) {
    var b = new BMap.Map("school-map"),
        c = new BMap.Point(116.331398, 39.897445);
    b.centerAndZoom(c, 12), b.enableScrollWheelZoom(), a(b, c)
}
var schoolData, divH, picW, len, id, branchID, mark = 1,
    timer = null,
    aSrc = [],
    num = 0;
$(function () {
    var a, b, c, d, e;
    $(".sc_slideBox").show(), jQuery(".sc_slideBox").slide({
        mainCell: ".bd ul",
        autoPlay: !0
    }), $("#sc_center ul").show(), a = 1200 - $(".nav .content .city").width(), a > 1140 && $("#sc_center").css({
        width: "1140px"
    }), window.location.href.toLowerCase().indexOf("_") > 0 && loaddetal($(".lcity").text(), $.trim($("#sc_list li").first().text())), $("#sc_list").on("click", "li", function () {
        var c, d;
        "" != $(this).text() && ($(this).addClass("on").siblings().removeClass("on"), loaddetal($.trim($(".nav .content .city").text().split(":")[0]), $.trim($(this).text())), c = unescape($(".lcity").html()), d = unescape($(".sc_info .address h2").html()), $(".appBtn").attr("href", "/reserve_teacher.html?lcity=" + escape(c) + "&bname=" + escape(d) + "&branchid=" + branchID))
    }), $(".map1").on("mouseenter", function () {
        $(".sc-ewm").stop().fadeIn()
    }), $(".map1").on("mouseleave", function () {
        $(".sc-ewm").stop().fadeOut()
    }), createMap(), b = $(window).height() / 2, c = $(".part-last"), d = 0, e = $(window).scrollTop(), e > d - b && c.find("li").show().addClass("animated fadeInUp"), $(window).on("scroll", function () {
        e = $(this).scrollTop(), e > d - b && c.find("li").show().addClass("animated fadeInUp")
    })
});