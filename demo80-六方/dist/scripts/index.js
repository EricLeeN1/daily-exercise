"use strict";$(function(){$(".banner-tips").fadeIn(1e3);new Swiper(".swiper-container",{speed:2500,autoplay:!0,loop:!0,on:{init:function(){swiperAnimate(this)},slideChangeTransitionEnd:function(){swiperAnimate(this)}}});new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:function(){},scrollContainer:null}).init();var i=0,l=setInterval(function(){i<3?i++:i=0,$("#module5 .module-tab li").eq(i).addClass("active").siblings().removeClass("active"),$("#module5 .module-list >li").eq(i).show().siblings().hide(),$("#module5 .module-line >li").eq(i).addClass("active").siblings().removeClass("active")},5e3);$("#module5 .module-tab li").on("click",function(){clearInterval(l),$(this).addClass("active").siblings().removeClass("active");var e=$(this).index();$("#module5 .module-list >li").eq(e).show().siblings().hide(),$("#module5 .module-line >li").eq(i).addClass("active").siblings().removeClass("active"),l=setInterval(function(){i<3?i++:i=0,$("#module5 .module-tab li").eq(i).addClass("active").siblings().removeClass("active"),$("#module5 .module-list >li").eq(i).show().siblings().hide(),$("#module5 .module-line >li").eq(i).addClass("active").siblings().removeClass("active")},5e3)});var e=2;setInterval(function(){e=2==e?3:2,$("#module7 .module-list .module-box:eq(0)").css("order",e)},4e3)});
//# sourceMappingURL=index.js.map
