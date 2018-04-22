$(function () {
    jQuery.support.cors = true;
    let Base = window.Base || {};
    Base = {
        site: 'https://www.doubaner.top',
        payValue: 197,
        payOrder(e) {
            let that = this;
            let params = {};
            let invoicing = $("input[name=receipt]:checked").val();

            params.username = $("#name").val();
            params.sex = $("input[name=appellation]:checked").val();
            params.phone = $("#phone").val();
            params.email = $("#email").val();
            params.way = e.attr('data-type');
            params.total_fee = that.payValue ? that.payValue : $("pay-value").val();
            params.invoicing = $("input[name=receipt]:checked").val() ? $("#select-choice").val() : $("input[name=receipt]:checked").val();
            params.invoice = $("#organ-name").val();
            params.TaxID = $("#organ-name").val();
            params.address = $("#address").val();
            that.postAjax('/pay', params, function (res) {
                console.log(res);
            })
        },
        changePayValue(ele) {
            let that = this;
            let value = ele.attr('data-value');
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
            })
        }
    }
    Base.init();
});