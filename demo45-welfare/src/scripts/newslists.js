$(function () {
    jQuery.support.cors = true;
    let Base = window.Base || {};
    Base = {
        site: 'https://www.doubaner.top',
        getInfos() {
            let that = this;
            let type = that.getQueryString('type');
            type = type == 1 ? 8 : 9;
            that.getAjax('/news/page/1/column/8', {}, function (res) {
                console.log(res);
                if (res.status == 200) {
                    let newsDatas = res.data.newsList;
                    let newsRightDatas = res.data.rightNewsList;
                    let htmlLeft = '';
                    if (newsDatas) {
                        newsDatas.forEach(ele => {
                            htmlLeft +=
                                `<li>
                                    <a href="./news.html?id=${ele.str_id}">
                                        <div class="img-infos">
                                            <img src="${that.site+ele.str_thumb}" alt="">
                                        </div>
                                        <div class="des-infos">
                                            <h3>${ele.str_title}</h3>
                                            <p>${ele.str_guide}</p>
                                            <span>${ele.news_time}</span>
                                        </div>
                                    </a>
                                </li>`
                        });
                        $("#news-section>ul").append(htmlLeft);
                    } else {
                        $("#news-section>ul").append('<h1>Sorry,这里还什么都没有</h1>');
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
            that.getInfos();
        }
    }
    Base.init();
});