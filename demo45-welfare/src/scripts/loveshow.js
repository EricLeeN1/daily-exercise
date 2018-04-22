$(function () {
    jQuery.support.cors = true;
    let Base = window.Base || {};
    Base = {
        site: 'https://www.doubaner.top',
        showList() {
            let that = this;
            that.getAjax('/publicity/2', {}, function (res) {
                console.log(res);
                if (res.status == 200) {
                    let datas = res.data;
                    if (datas.length > 0) {
                        let showitem = '';
                        datas.forEach(ele => {
                            showitem += `
                            <li>
                                <h3>${ele.title}</h3>
                                <a href="${that.site+ele.file}" download="${that.site+ele.file}">立即下载</a>
                                <span>${ele.time}</span>
                            </li>
                            `;
                        });
                        $("#show-list").html(showitem);
                    } else {
                        $("#show-list").html('<h3>这里还什么都没有</h3>');
                    }
                } else {
                    alert(res.message);
                }
            });
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
            console.log('111');
            let that = this;
            that.showList();
        }
    }
    Base.init();
});