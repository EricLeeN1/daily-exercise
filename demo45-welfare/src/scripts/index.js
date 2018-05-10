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
                autoplay: false,
                // loop: true,
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
        setSeo() {
            let that = this;
            that.getAjax('/seo', {}, function (res) {
                // console.log(res);
                if (res.status == 200) {
                    $("title").text(res.data.title);
                    $("meta[name='keywords']").attr('content', res.data['keywords']);
                    $("meta[name='description']").attr('content', res.data['description']);
                } else {
                    alert(res.message);
                }
            })

        },
        getBannerInfos() {
            this.getAjax('/intro', {}, function (res) {
                // console.log(res);
                if (res.status == 200) {
                    $("#banner>.swiper-wrapper>.swiper-slide>.activity-des>p").text(res.data);
                } else {
                    alert(res.message);
                }
            });
        },
        welfareDatas() {
            this.getAjax('/data', {}, function (res) {
                // console.log(res);
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
                // console.log(res);
                if (res.status == 200) {
                    let datas = res.data.StrategyList;
                    if (datas.length > 0) {
                        let swiperSlides = '';
                        datas.forEach(ele => {
                            let imgSite = that.site + ele.str_thumb;
                            swiperSlides += `
                            <a href="./news.html?id=${ele.str_id}" class="swiper-slide" data-id="${ele.str_id}">
                                <img src="${imgSite}" alt="${ele.str_title}">
                                <h3>${ele.str_title}</h3>
                            </a>
                            `;
                        });
                        // console.log(swiperSlides);
                        $("#action>.swiper-wrapper").html(swiperSlides);
                    } else {
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
                // console.log('9');
                // console.log(res);
                if (res.status == 200) {
                    let datas = res.data.StrategyList;
                    if (datas.length > 0) {
                        let swiperSlides = '';
                        datas.forEach((ele, index) => {
                            let imgSite = that.site + ele.str_thumb;
                            swiperSlides +=
                                `<a href="./news.html?id="+${ele.str_id} class="swiper-slide" data-id="${ele.str_id}">
                           <img src="${imgSite}" alt="${ele.str_title}">
                           <h3>${ele.str_title}</h3>
                           </a>`
                        });
                        $("#donate-star>.swiper-wrapper").html(swiperSlides);
                        //3d
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
            let that = this;
            that.getBannerInfos();
            that.welfareDatas();
            that.newsList8();
            that.newsList9();
            that.setSeo();
            that.companyList();
            setTimeout(() => {
                that.setSwiper();
            }, 1000);
        }
    }
    Base.init();
    setTimeout(() => {
        // var wrap = document.getElementById(wrap);
        // var imgs = wrap.getElementByTagName('a');
        var imgs = $('#wrap a');

        //对照片进行for循环   因为左右两边是对称的，所以不需要循环imgs.length次，而是imgs.length/2
        //把第三张图片放在正中央   左右分别放三张  
        var INow = 2;
        var target = 0;
        //解决疯狂点击   用一个类似于锁的变量
        var off = true;
        Tab(INow);
        //0 1 2 3 4 5 6
        //4 5 6 0 1 2 3
        //3 4 5 6 0 1 2
        for (var i = 0; i < imgs.length; i++) {
            //为每一张图片创建一个index
            imgs[i].index = i;
            //对图片创建点击事件
            imgs[i].onclick = function () {
                target = this.index;
                //如果门是关了的，就不执行下面的代码
                if (!off) {
                    return;
                }
                off = false;
                if (target > INow) {
                    //4 5  6
                    if (target - INow <= 2) {
                        goNext();
                    } else {
                        goPre();

                    }
                }
                //就把哪一张放在中间
                else {
                    //0 1 2
                    if (target + 5 - INow <= 2) {
                        goNext();
                    } else {
                        goPre();
                    }
                }


            };
        }

        function goNext() {
            INow++;
            if (INow > 4) {
                INow = 0;
            }
            Tab(INow);
            //如果到了目标点的时候就停止移动
            if (INow == target) {
                off = true;
                return;
            }
            setTimeout(function () {
                goNext();
            }, 700);
        }

        function goPre() {
            INow--;
            if (INow < 0) {
                INow = 4;
            }
            Tab(INow);
            //如果到了目标点的时候就停止移动
            if (INow == target) {
                off = true;
                return;
            }
            setTimeout(function () {
                goPre();
            }, 700);
        }
        //函数封装   将第几张图片放在正中央
        //0 1 2 3 4 5 6
        //4 5 6 0 1 2 3
        //3 4 5 6 0 1 2
        function Tab(n) {
            for (var i = 0; i < 2; i++) {
                var left = n - 1 - i;
                //0在中间
                if (left < 0) {
                    left = left + 5;
                }
                imgs[left].style.transform = 'translateX(' + (-150 * (i + 1)) + 'px)translateZ(' + (150 - 100 * i) + 'px)rotateY(30deg)';
                //6在中间
                var right = n + 1 + i;
                if (right > 4) {
                    right = right - 5;
                }

                imgs[right].style.transform = 'translateX(' + (150 * (i + 1)) + 'px)translateZ(' + (150 - 100 * i) + 'px)rotateY(-30deg)';
            }
            imgs[INow].style.transform = 'translateZ(300px)';
        };
    }, 2000);
})