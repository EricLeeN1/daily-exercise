"use strict";$(function(){var i=setInterval(function(){active<3?active++:active=0,$("#module5 .module-tab li").eq(active).addClass("active").siblings().removeClass("active"),$("#module5 .module-list >li").eq(active).show().siblings().hide(),$("#module5 .module-line >li").eq(active).addClass("active").siblings().removeClass("active")},5e3);$("#module5 .module-tab li").on("click",function(){clearInterval(i),$(this).addClass("active").siblings().removeClass("active");var e=$(this).index();$("#module5 .module-list >li").eq(e).show().siblings().hide(),$("#module5 .module-line >li").eq(active).addClass("active").siblings().removeClass("active"),i=setInterval(function(){active<3?active++:active=0,$("#module5 .module-tab li").eq(active).addClass("active").siblings().removeClass("active"),$("#module5 .module-list >li").eq(active).show().siblings().hide(),$("#module5 .module-line >li").eq(active).addClass("active").siblings().removeClass("active")},5e3)});var e=2;setInterval(function(){e=2==e?3:2,$("#module7 .module-list .module-box:eq(0)").css("order",e)},4e3)});
//# sourceMappingURL=index.js.map