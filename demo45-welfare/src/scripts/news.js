$(function () {
    jQuery.support.cors = true;
    let Base = window.Base || {};
    Base = {
        site: 'https://www.doubaner.top',
        getInfos() {
            let that = this;
            that.postAjax('/new', {
                id: 33
            }, function (res) {
                console.log(res.data.str_content);
                if (res.status == 200) {
                    let article = $('#news-body>main>article');
                    let imgArrays = [];
                    let content = res.data.str_content;
                    article.attr('data-id', res.data.cat_id)
                    article.children("h3").html(res.data.str_title);
                    article.children("img").attr('src', that.site + res.data.str_thumb);
                    article.children("h3").html(res.data.str_title);
                    content.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, function (match, capture) {
                        let obj = {
                            half:capture,
                            all:that.site + capture
                        }
                        imgArrays.push(obj);
                    });
                    console.log(imgArrays);
                    if (imgArrays) {
                        imgArrays.forEach(element => {
                            let src = that.site + element;
                            alert(element.all);
                            content.replace(element.half, element.all);
                        });
                    }
                    article.append(content);
                } else {
                    alert(res.message);
                }
            });
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