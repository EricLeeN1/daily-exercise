"use strict";$(function(){$("#news-lists .news-components .news-title").on("click",function(){$(this).hasClass("active")?($(this).removeClass("active"),$(this).children("img").attr("src","./images/add.png"),$(this).next().hide()):($(this).addClass("active"),$(this).children("img").attr("src","./images/discount.png"),$(this).next().show())})});
//# sourceMappingURL=news.js.map
