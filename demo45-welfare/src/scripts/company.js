$(function () {
    jQuery.support.cors = true;
    let Base = window.Base || {};
    Base = {
        site: 'https://www.doubaner.top',
        companyList() {
            let that = this;
            that.getAjax('/companyList', {}, function (res) {
                console.log(res);
                if (res.status == 200) {
                    let datas = res.data;
                    if (datas.length > 0) {
                        let swiperSlides = '';
                        datas.forEach(ele => {
                            let imgSite = that.site + ele.logo;
                            swiperSlides += `
                            <li>
                            <a href="${ele.link_url}" class="swiper-slide" data-id="${ele.str_id}" target="_blank">
                                <img src="${imgSite}" alt="${ele.str_title}">
                            </a>
                            </li>
                            `;
                        });
                        console.log(swiperSlides);
                        $("#company-list").html(swiperSlides);
                    } else {
                        $("#company-list").html('<h3>这里还什么都没有</h3>');
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
            that.companyList();
        }
    }
    Base.init();
});