$(function () {
    jQuery.support.cors = true;
    let Base = window.Base || {};
    Base = {
        site: 'https://www.doubaner.top',
        pagesLength: 1,
        page: 1,
        getInfos(page = 1) {
            let that = this;
            let type = that.getQueryString('type');
            let url = `/news/page/${page}/column/${type}`;
            that.getAjax(url, {}, function (res) {
                console.log(res);
                if (res.status == 200) {
                    let newsDatas = res.data.newsList;
                    let newsRightDatas =
                        res.data.rightNewsList;
                    let config = res.data.Configs;
                    let htmlLeft = '';
                    let htmlRight = '';
                    let count = res.data.count;
                    let pagesHtml = '';
                    if (newsDatas) {
                        newsDatas.forEach(ele => {
                            htmlLeft +=
                                `<li>
                                    <a href="./news.html?id=${ele.str_id}">
                                        <div class="img-infos">
                                            <img src="${that.site + ele.str_thumb}" alt="">
                                        </div>
                                        <div class="des-infos">
                                            <h3>${ele.str_title}</h3>
                                            <p>${ele.str_guide}</p>
                                            <span>${ele.news_time}</span>
                                        </div>
                                    </a>
                                </li>`
                        });
                        $("#news-section>ul").append(htmlLeft).after('<p class="tips">没有更多了</p>');

                    } else {
                        $("#news-section>ul").append('<h1>Sorry,这里还什么都没有</h1>');
                    }
                    if (config) {
                        config.forEach(ele => {
                            let metaHave = `meta[name="${ele.name}"]`;
                            if (ele.name == 'title') {
                                $("title").text(ele.value);
                            } else {
                                if ($(metaHave)[0]) {
                                    $(metaHave).attr('content', ele.value);
                                } else {
                                    $("head").append(`<meta name="${ele.name}" content="${ele.value}" />`);
                                }
                            }
                        });
                    }
                    if (newsRightDatas) {
                        newsRightDatas.forEach(ele => {
                            htmlRight +=
                                `<li>
                                    <a href="./news.html?id=${ele.str_id}">
                                        <div class="img-infos">
                                            <img src="${that.site + ele.str_thumb}" alt="">
                                        </div>
                                        <div class="des-infos">
                                            <h3>${ele.str_title}</h3>
                                            <p>${ele.news_time}</p>
                                        </div>
                                    </a>
                                </li>`
                        });
                        $("#news-aside-list").append(htmlRight);
                    } else {
                        $("#news-aside-list").append('<h1>Sorry,这里还什么都没有</h1>');
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
        setCrumb() {
            let that = this;
            let type = that.getQueryString('type');
            let crumb = $("#crumb>span");
            let asideTitle = $("#aside-title");
            if (type == 9) {
                crumb.text('行动新闻列表');
                asideTitle.text('公益明星').next().attr('href', '/newsList.html?type=8');
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
            that.getInfos();
            that.setCrumb();
            $("#show-pages").on('click', 'li', function () {
                if ($(this).hasClass('active')) {
                    return;
                }
                let pages = $(this).attr('data-page');
                that.getInfos(pages);
            })
        }
    }
    Base.init();
});