$(function () {
    jQuery.support.cors = true;
    let Base = window.Base || {};
    Base = {
        site: 'https://www.doubaner.top',
        check: false,
        payValue: 197,
        modalShow: false,
        checkForms(type) {
            let that = this;
            let params = {};
            let regPhone = /^1[3-8]\d{9}$/;
            let regEmail = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;;
            let invoicing = $("input[name=invoicing]:checked").val();
            params.username = $("#username").val();
            params.sex = $("input[name=sex]:checked").val();
            params.phone = $("#phone").val();
            params.email = $("#email").val();
            params.total_fee = that.payValue ? that.payValue : $("pay-value").val();
            params.invoicing = invoicing ? $("#select-choice").val() : 0;
            params.invoice = $("#organ-name").val();
            params.TaxID = $("#organ-name").val();
            params.address = $("#address").val();

            if (type == 1) {// 全部都要，全部校验
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
                that.check = true;
                return params;
            } else if (type == 2) {//不要发票,不用校验税号与发票抬头
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
                that.check = true;
                return params;
            } else {//小于100只校验名字
                if (!params.username) {
                    $("#name").next('span').text("您还没有填写名字呢");
                    return;
                } else {
                    $("#name").next('span').text("");
                }
                that.check = true;
                return params;
            }
        },
        modalHide() {
            $('#qrcode-modal').hide();
            this.modalShow = false;
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
            let that = this;
            let regPhone = /^1[3-8]\d{9}$/;
            let regEmail = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
            let value = e.val();
            let checkType = e.attr('data-check');
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
                    if (value < 100) {
                        that.toggleForms(false);
                        that.payValue = value;
                    } else {
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
            }
            if (ele.index() != "3") {
                $("#pay-value").val("");
                that.toggleForms(true);
            }
        },
        getCheck(ele) {
            let that = this;
            if (ele.val()) {
                $("#form-group .receipt-choice").show();
            } else {
                $("#form-group .receipt-choice").hide();
            }
        },
        toggleForms(args) {
            if (args) {
                $("#form-group input[data-check]:not([data-check='name']),.receipt-radio").parent().show();
                $("#form-group :radio[name='appellation'] ").parent().parent().show();
            } else {
                $("#form-group input[data-check]:not([data-check='name']),.receipt-radio").parent().hide();
                $("#form-group :radio[name='appellation'] ").parent().parent().hide();
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
            };
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
            that.setSeo();
            $("#pay-now").on('click', function () {
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
            $("#form-group input[name=receipt]").on('change', function () {
                let _this = $(this);
                that.getCheck(_this);
            });

            $('body,#qrcode-modal span').on('click', function () {
                if (that.modalShow) {
                    that.modalHide();
                }
            })

        }
    }
    Base.init();
});