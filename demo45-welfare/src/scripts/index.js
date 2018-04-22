$(function () {
    jQuery.support.cors = true;
    let Base = window.Base || {};
    // import ajax from './ajaxModules.js';
    // Base.ajax = ajax;
    Base = {
        site: 'https://www.doubaner.top',
        setSwiper() {
            let myPlugin = {
                name: 'debugger',
                params: {
                    debugger: false,
                },
                on: {
                    init: function () {
                        if (!this.params.debugger) return;
                        // console.log('init');
                    },
                    click: function (e) {
                        if (!this.params.debugger) return;
                        // console.log('click');
                    },
                    tap: function (e) {
                        if (!this.params.debugger) return;
                        // console.log('tap');
                    },
                    doubleTap: function (e) {
                        if (!this.params.debugger) return;
                        // console.log('doubleTap');
                    },
                    sliderMove: function (e) {
                        if (!this.params.debugger) return;
                        // console.log('sliderMove');
                    },
                    slideChange: function () {
                        if (!this.params.debugger) return;
                        // console.log('slideChange', this.previousIndex, '->', this.activeIndex);
                    },
                    slideChangeTransitionStart: function () {
                        if (!this.params.debugger) return;
                        // console.log('slideChangeTransitionStart');
                    },
                    slideChangeTransitionEnd: function () {
                        if (!this.params.debugger) return;
                        // console.log('slideChangeTransitionEnd');
                    },
                    transitionStart: function () {
                        if (!this.params.debugger) return;
                        // console.log('transitionStart');
                    },
                    transitionEnd: function () {
                        if (!this.params.debugger) return;
                        // console.log('transitionEnd');
                    },
                    fromEdge: function () {
                        if (!this.params.debugger) return;
                        // console.log('fromEdge');
                    },
                    reachBeginning: function () {
                        if (!this.params.debugger) return;
                        // console.log('reachBeginning');
                    },
                    reachEnd: function () {
                        if (!this.params.debugger) return;
                        // console.log('reachEnd');
                    },
                }
            };
            // Install Plugin To Swiper
            Swiper.use(myPlugin);

            // Init Swiper
            let swiper = new Swiper('.swiper', {
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                // navigation: {
                //     nextEl: '.swiper-button-next',
                //     prevEl: '.swiper-button-prev',
                // },
                // Enable debugger
                debugger: true,
            });
            let swiper1 = new Swiper('.swiper1', {
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                // navigation: {
                //     nextEl: '.swiper-button-next',
                //     prevEl: '.swiper-button-prev',
                // },
                // Enable debugger
                debugger: true,
            });
            let swiper2 = new Swiper('.swiper2', {
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                loop: true,
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                coverflowEffect: {
                    rotate: 30,
                    stretch: 30,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                },
                pagination: {
                    el: '.swiper-pagination',
                },
                // navigation: {
                //     nextEl: '.swiper-button-next',
                //     prevEl: '.swiper-button-prev',
                // },
                // Enable debugger
                debugger: true,
            });
            var swiper3 = new Swiper('.swiper3', {
                slidesPerView: 'auto',
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                loop: true,
                centeredSlides: true,
                spaceBetween: 30
            });
        },
        getBannerInfos() {
            this.getAjax('/intro', {}, function (res) {
                console.log(res);
                if (res.status == 200) {
                    $("#banner>.swiper-wrapper>.swiper-slide>.activity-des>p").text(res.data);
                } else {
                    alert(res.message);
                }
            });
        },
        welfareDatas() {
            this.getAjax('/data', {}, function (res) {
                console.log(res);
                if (res.status == 200) {
                    $("#donate .donate-icon-1").next().text(res.data.aims).countUp();;
                    $("#donate .donate-icon-2").next().text(res.data.num).countUp();;
                    $("#donate .donate-icon-3").next().text(res.data.total).countUp();;
                    $("#donate .donate-icon-4").next().text(res.data.sumofcinemas).countUp();;
                } else {
                    alert(res.message);
                }
            });
        },
        newsList8() {
            let that = this;
            this.getAjax('/newsList/column/8', {
                column: 8
            }, function (res) {
                console.log(res);
                if (res.status == 200) {
                    let datas = res.data.StrategyList;
                    if (datas.length > 0) {
                        let swiperSlides = '';
                        datas.forEach(ele => {
                            let imgSite = that.site + ele.str_thumb;
                            swiperSlides += `
                            <a href="./news.html?id=${ele.str_id}" class="swiper-slide" data-id="${ele.str_id}">
                                <img src="${imgSite}" alt="${ele.str_title}">
                            </a>
                            `;
                        });
                        console.log(swiperSlides);
                        $("#action>.swiper-wrapper").html(swiperSlides);
                    }else{
                        $("#action>.swiper-wrapper").html('<h3>这里还什么都没有</h3>');
                    }
                } else {
                    alert(res.message);
                }
            });
        },
        newsList9() {
            let that = this;
            that.getAjax('/newsList/column/9', {
                column: 9
            }, function (res) {
                console.log('9');
                console.log(res);
                if (res.status == 200) {
                    let datas = res.data.StrategyList;
                    if (datas.length > 0) {
                        let swiperSlides = '';
                        datas.forEach(ele => {
                            let imgSite = that.site + ele.str_thumb;
                            swiperSlides += `
                            <a href="./news.html?id=${ele.str_id}" class="swiper-slide" data-id="${ele.str_id}">
                                <img src="${imgSite}" alt="${ele.str_title}">
                            </a>
                            `;
                        });
                        $("#donate-star>.swiper-wrapper").html(swiperSlides);
                    } else {
                        $("#donate-star>.swiper-wrapper").html('<h3>这里还什么都没有</h3>');
                    }
                } else {
                    alert(res.message);
                }
            });
        },
        companyList() {
            let that = this;
            that.getAjax('/companyList', {}, function (res) {
                console.log(res);
                if (res.status == 200) {
                    $("#donate-company");
                    let datas = res.data;
                    if (datas.length > 0) {
                        let swiperSlides = '';
                        datas.forEach(ele => {
                            let imgSite = that.site + ele.logo;
                            swiperSlides += `
                            <a href="${ele.link_url}" class="swiper-slide" data-id="${ele.str_id}" target="_blank">
                                <img src="${imgSite}" alt="${ele.str_title}">
                            </a>
                            `;
                        });
                        console.log(swiperSlides);
                        $("#donate-company>.swiper-wrapper").html(swiperSlides);
                    } else {
                        $("#donate-company>.swiper-wrapper").html('<h3>这里还什么都没有</h3>');
                    }
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
            that.getBannerInfos();
            that.welfareDatas();
            that.newsList8();
            that.newsList9();
            that.companyList();
            setTimeout(() => {
                that.setSwiper();
            }, 1000);
        }
    }
    Base.init();
})