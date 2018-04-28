$(function () {
    jQuery.support.cors = true;
    let Base = window.Base || {};
    Base = {
        site: 'https://www.doubaner.top',
        getInfos() {
            let that = this;
            let id = that.getQueryString('id');
            that.postAjax('/new', {
                id: id
            }, function (res) {
                if (res.status == 200) {
                    let article = $('#news-body>main>article');
                    let imgArrays = [];
                    let content = res.data.str_content;
                    article.attr('data-id', res.data.cat_id)
                    article.children("h3").html(res.data.str_title);
                    article.children("img").attr('src', that.site + res.data.str_thumb);
                    article.children("h3").html(res.data.str_title);
                    content.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, function (match, capture) {
                        imgArrays.push(capture);
                    });
                    console.log(imgArrays);
                    if (imgArrays) {
                        imgArrays.forEach(element => {
                            let src = that.site + element;
                            content.replace(element, src);
                        });
                    }
                    article.append(content);
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
            that.setSeo();
        }
    }
    Base.init();
});