$(function () {
    jQuery.support.cors = true;
    let Base = window.Base || {};
    Base = {
        site: 'https://www.doubaner.top',
        payValue: 197,
        payOrder(e) {
            let that = this;
            let params = {};
            let regPhone = /^1[3-8]\d{9}$/;
            let regEmail = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;;
            let invoicing = $("input[name=receipt]:checked").val();
            console.log(invoicing);
            params.username = $("#name").val();
            params.sex = $("input[name=appellation]:checked").val();
            params.phone = $("#phone").val();
            params.email = $("#email").val();
            params.way = e.attr('data-type');
            params.total_fee = that.payValue ? that.payValue : $("pay-value").val();
            params.invoicing = invoicing ? $("#select-choice").val() : 0;
            params.invoice = $("#organ-name").val();
            params.TaxID = $("#organ-name").val();
            params.address = $("#address").val();
            if (!params.username) {
                $("#name").next('span').text("您还没有填写名字呢");
                return;
            } else {
                $("#name").next('span').text("");
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
            console.log(params);
            that.postAjax('/pay', params, function (res) {
                console.log(res);
            })
        },
        blurCheck(e) {
            let regPhone = /^1[3-8]\d{9}$/;
            let regEmail = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
            let value = e.val();
            let checkType = e.attr('data-check');
            console.log(value);
            let optionCheck = $("input[name=receipt]:checked").val();
            switch (checkType) {
                case "name":
                    if (!value) {
                        $("#name").next('span').text("您还没有填写名字呢");
                    } else {
                        $("#name").next('span').text("");
                    }
                    break;
                case "pay":
                    console.log('111');
                    if (value < 100) {
                        $("#form-group input[data-check]:not([data-check='name']),.receipt-radio").parent().hide();
                        $("#form-group :radio[name='appellation'] ").parent().parent().hide();
                    } else {
                        $("#form-group input[data-check]:not([data-check='name']),.receipt-radio").parent().show();
                        $("#form-group :radio[name='appellation'] ").parent().parent().show();
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
        imgLoad() {
            let image = new Image();
            image.onload = function () {
                    console.log('success');
                },
                image.onerror = function () {
                    this.src = that.site + +this.src;
                }
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
        init() {
            let that = this;
            $("#pay-methods>img").on('click', function () {
                let _this = $(this);
                that.payOrder(_this);
            });
            $("#pay-methods-list>li").on('click', function () {
                let _this = $(this);
                that.changePayValue(_this);
            });
            $("#form-group input[data-check],#pay-value").on('blur', function () {
                let _this = $(this);
                that.blurCheck(_this);
            });
        }
    }
    Base.init();
});