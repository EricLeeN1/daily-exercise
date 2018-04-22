$(function () {
    jQuery.support.cors = true;
    let Base = window.Base || {};
    Base = {
        site: 'https://www.doubaner.top',
        pagesLength: 1,
        page: 1,
        showList(page = 1) {
            let that = this;
            let url = `/publicity/${page}`;
            that.getAjax(url, {}, function (res) {
                console.log(res);
                if (res.status == 200) {
                    let datas = res.data.list;
                    let count = res.data.count;
                    let pagesHtml = '';
                    if (datas.length > 0) {
                        let showitem = '';
                        datas.forEach(ele => {
                            showitem += `
                            <li>
                                <h3>${ele.title}</h3>
                                <a href="${that.site + ele.file}" download="${that.site + ele.file}">立即下载</a>
                                <span>${ele.time}</span>
                            </li>
                            `;
                        });
                        $("#show-list").html(showitem);
                    } else {
                        $("#show-list").html('<h3>这里还什么都没有</h3>');
                    }
                    that.pagesLength = Math.ceil(count / 8);
                    for (let index = 1; index <= that.pagesLength; index++) {
                        console.log(index);
                        if (index == page) {
                            pagesHtml += `<li class="active" data-page="${index}">${index}</li>`;
                        } else {
                            pagesHtml += `<li data-page="${index}">${index}</li>`;
                        }
                    }
                    $("#show-pages").html(pagesHtml);
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
            let that = this;
            that.showList();
            $("#show-pages").on('click', 'li', function () {
                if ($(this).hasClass('active')) {
                    return;
                }
                let pages = $(this).attr('data-page');
                that.showList(pages);
            })
        }
    }
    Base.init();
});