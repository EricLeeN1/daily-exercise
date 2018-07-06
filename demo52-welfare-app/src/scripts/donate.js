$(function () {
    jQuery.support.cors = true;
    let Base = window.Base || {};
    Base = {
        site: 'https://www.doubaner.top',
        check: false,
        payValue: 197,
        modalShow: false,
        language: (navigator.browserLanguage || navigator.language).toLowerCase(),
        versions: function () {
            var e = navigator.userAgent,
                t = e.toLowerCase();
            navigator.appVersion;
            return {
                wechat: "micromessenger" == t.match(/MicroMessenger/i),
                qq: "qq" == t.match(/QQ/i),
                weibo: "weibo" == t.match(/WeiBo/i),
                trident: e.indexOf("Trident") > -1,
                presto: e.indexOf("Presto") > -1,
                webKit: e.indexOf("AppleWebKit") > -1,
                gecko: e.indexOf("Gecko") > -1 && -1 == e.indexOf("KHTML"),
                mobile: !!e.match(/AppleWebKit.*Mobile.*/),
                ios: !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                android: e.indexOf("Android") > -1 || e.indexOf("Linux") > -1,
                iPhone: e.indexOf("iPhone") > -1,
                iPad: e.indexOf("iPad") > -1,
                webApp: -1 == e.indexOf("Safari")
            }
        }(),
        fontSize: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window,
                t = e.document,
                i = t.documentElement,
                n = "orientationchange" in e ? "orientationchange" : "resize",
                o = function () {
                    var e = i.clientWidth || 375;
                    e > 750 && (e = 750), i.style.fontSize = e / 7.5 + "px"
                };
            window.getComputedStyle(i, null).getPropertyValue("font-size") <= "20px" && o(), t.addEventListener && (e.addEventListener(n, o, !1), t.addEventListener("DOMContentLoaded", o, !1))
        },
        showNav() {
            $(".common-header ol").toggle();
            $("body").toggleClass('header-active');
        },
        checkForms(type) {
            let that = this;
            let params = {};
            let regPhone = /^1[3-8]\d{9}$/;
            let regEmail = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;;
            let invoicing = $("#receipt").val();
            params.username = $("#username").val();
            params.sex = $("#appellation").val();
            params.phone = $("#phone").val();
            params.email = $("#email").val();
            params.total_fee = $("input[name=total_fee]").val();
            params.invoicing = invoicing ? $("#select-choice").val() : 0;
            params.invoice = $("#organ-name").val();
            params.TaxID = $("#taxid").val();
            params.address = $("#address").val();

            if (type == 1) { // 全部都要，全部校验
                if (!params.username) {
                    $("#username").next('span').text("您还没有填写名字呢");
                    return;
                } else {
                    $("#username").next('span').text("");
                }
                if (!regPhone.test(params.phone)) {
                    $("#phone").next('span').text("手机号码格式不对");
                    return;
                } else {
                    $("#phone").next('span').text("");
                }
                if (!regEmail.test(params.email)) {
                    $("#email").next('span').text("电子邮箱格式不对");
                    return;
                } else {
                    $("#email").next('span').text("");
                }
                if (!params.address) {
                    $("#address").next('span').text("邮寄地址不能为空");
                    return;
                } else {
                    $("#address").next('span').text("");
                }
                if (invoicing && !params.invoice) {
                    $("#organ-name").next('span').text("请输入发票抬头");
                    return;
                } else {
                    $("#organ-name").next('span').text("");
                }
                if (invoicing && !params.TaxID) {
                    $("#taxid").next('span').text("请输入税号");
                    return;
                } else {
                    $("#taxid").next('span').text("");
                };
                that.check = true;
                return params;
            } else if (type == 2) { //不要发票,不用校验税号与发票抬头
                if (!params.username) {
                    $("#username").next('span').text("您还没有填写名字呢");
                    return;
                } else {
                    $("#username").next('span').text("");
                }
                if (!regPhone.test(params.phone)) {
                    $("#phone").next('span').text("手机号码格式不对");
                    return;
                } else {
                    $("#phone").next('span').text("");
                }
                if (!regEmail.test(params.email)) {
                    $("#email").next('span').text("电子邮箱格式不对");
                    return;
                } else {
                    $("#email").next('span').text("");
                }
                if (!params.address) {
                    $("#address").next('span').text("邮寄地址不能为空");
                    return;
                } else {
                    $("#address").next('span').text("");
                }
                that.check = true;
                return params;
            } else { //小于100只校验名字
                if (!params.username) {
                    $("#username").next('span').text("您还没有填写名字呢");
                    return;
                } else {
                    $("#username").next('span').text("");
                }
                that.check = true;
                return params;
            }
        },
        paySet() {
            let that = this;
            if (that.versions.wechat) {
                // 微信里面
                console.log(that.versions.wechat);
                let html = `
                <div class="radio-group">
                    <input hidden type="radio" name="way" value="2" data-type="2" alt="微信" checked>
                </div>
                <div class="img-group">
                    <img src="./images/donate/wechat-pay@2x.png" data-type="2" class="active" alt="">
                </div>`;
                $("#pay-methods").html(html);
            } else if (that.versions.webKit && that.versions.mobile) {
                // 除了微信以外的浏览器里面
                let html = `
                <div class="radio-group">
                    <input hidden type="radio" name="way" value="1" data-type="1" alt="支付宝" checked>
                </div>
                <div class="img-group">
                    <img src="./images/donate/ali-pay@2x.png" alt="" data-type="1"  class="active">
                </div>`;
                $("#pay-methods").html(html);
            }
        },
        payOrder(e) {
            let that = this;
            let params = null;
            let payValue = that.payValue;
            let way = e.attr('data-type');
            let radioValue = $("#form-group input[name=receipt]").val();
            if (payValue > 100) {
                if (radioValue) {
                    params = that.checkForms(1);
                } else {
                    params = that.checkForms(2);
                }
            } else {
                params = that.checkForms(0);
            }
            if (that.check) {
                params.way = way;
                console.log(params);
                // that.postAjax('/pay', params, function (res) {
                //     that.check = false;
                //     $("body").html(res)
                //     console.log(res);
                //     if (params.way == 2) {
                //         $('#qrcode-modal').show();
                //         that.modalShow = true;
                //     } else if (params.way == 1) {
                //         // window.location.href = "./alisuccess.html";
                //     }
                // });
                $("#pay-form").submit();
            }
        },
        blurCheck(e) {
            console.log(111);
            let that = this;
            let regPhone = /^1[3-8]\d{9}$/;
            let regEmail = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
            let value = e.val();
            let checkType = e.attr('data-check');
            let optionCheck = $("input[name=receipt]:checked").val();
            switch (checkType) {
                case "name":
                    if (!value) {
                        $("#username").next('span').text("您还没有填写名字呢");
                    } else {
                        $("#username").next('span').text("");
                    }
                    break;
                case "pay":
                    if (value < 100) {
                        that.toggleForms(false);
                        $("#pay-input").val(value);
                        that.payValue = value;
                    } else {
                        $("#pay-input").val(value);
                        that.toggleForms(true);
                        that.payValue = value;
                    }
                    break;
                case "phone":
                    if (!regPhone.test(value)) {
                        $("#phone").next('span').text("手机号码格式不对");
                    } else {
                        $("#phone").next('span').text("");
                    }
                    break;
                case "email":
                    if (!regEmail.test(value)) {
                        $("#email").next('span').text("电子邮箱格式不对");
                    } else {
                        $("#email").next('span').text("");
                    }
                    break;
                case "address":
                    if (!value) {
                        $("#address").next('span').text("邮寄地址不能为空");
                    } else {
                        $("#address").next('span').text("");
                    }
                    break;
                case "organ-name":
                    if (optionCheck && !value) {
                        $("#organ-name").next('span').text("请输入发票抬头1");
                    } else {
                        $("#organ-name").next('span').text("");
                    }
                    break;
                case "taxid":
                    if (optionCheck && !value) {
                        $("#taxid").next('span').text("请输入税号");
                    } else {
                        $("#taxid").next('span').text("");
                    }
                    break;
                default:
                    break;
            }
        },
        changePayValue(ele) {
            let that = this;
            let value = ele.attr('data-value');
            ele.addClass('active').siblings().removeClass('active');
            if (value) {
                that.payValue = value;
                ele.children("input[name=total_fee]").attr("checked", true);
                ele.siblings().children("input[name=total_fee]").attr("checked", false);
            }
            that.payValue = value;
            ele.children("input[name=total_fee]").attr("checked", true);
            ele.siblings().children("input[name=total_fee]").attr("checked", false);;
            $("#total_fee").val("");
            that.toggleForms(true);
        },
        changePayType(ele) {
            let that = this;
            let type = ele.attr('data-type');
            let index = ele.index();
            console.log(index);
            ele.addClass('active').siblings().removeClass('active');
            if (type == 1) {
                $("#pay-methods>.radio-group>input:eq(0)").attr("checked", true).siblings().attr("checked", false);
            } else if (type == 2) {
                $("#pay-methods>.radio-group>input:eq(1)").attr("checked", true).siblings().attr("checked", false);
            }
        },
        getCheck(ele) {
            if (ele.val()) {
                $("#form-group .receipt-choice").show();
            } else {
                $("#form-group .receipt-choice").hide();
            }
        },
        toggleForms(args) {
            if (args) {
                $("#form-group input[data-check]:not([data-check='name']),.receipt-radio").parent().show();
                $("#appellation").parent().show();
            } else {
                $("#form-group input[data-check]:not([data-check='name']),.receipt-radio").parent().hide();
                $("#appellation").parent().hide();
            }
        },
        getQueryString: function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
            var context = "";
            if (r != null)
                context = r[2];
            reg = null;
            r = null;
            return context == null || context == "" || context == "undefined" ? "" : context;
        },
        getAjax(url, datas, fns, fnf) {
            $.ajax({
                type: "GET",
                url: this.site + url,
                data: datas,
                dataType: 'JSON',
                success: fns,
                fail: fnf
            });
        },
        postAjax(url, datas, fns, fnf) {
            $.ajax({
                type: "POST",
                url: this.site + url,
                data: datas,
                dataType: 'json',
                success: fns,
                fail: fnf
            });
        },
        setSeo() {
            let that = this;
            that.getAjax('/seo', {}, function (res) {
                console.log(res);
                if (res.status == 200) {
                    $("title").text(res.data.title);
                    $("meta[name='keywords']").attr('content', res.data['keywords']);
                    $("meta[name='description']").attr('content', res.data['description']);
                } else {
                    alert(res.message);
                }
            })

        },
        init() {
            let that = this;
            that.fontSize();
            that.setSeo();
            that.paySet();
            $(".common-header ul").on('click', function () {
                that.showNav();
            });
            $("#pay-now").on('click', function () {
                let _this = $(this);
                that.payOrder(_this);
            });
            $("#pay-methods-list>li").on('click', function () {
                let _this = $(this);
                that.changePayValue(_this);
            });
            $("#pay-methods>.img-group>img").on('click', function () {
                let _this = $(this);
                that.changePayType(_this);
            });
            $("#form-group input[data-check],#total_fee").on('blur', function () {
                let _this = $(this);
                that.blurCheck(_this);
            });
            $("#form-group input[name=receipt]").on('change', function () {
                let _this = $(this);
                that.getCheck(_this);
            });
            $('body,#qrcode-modal span').on('click', function () {
                if (that.modalShow) {
                    that.modalHide();
                }
            });
        }
    };
    Base.init();
});