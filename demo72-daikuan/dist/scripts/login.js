"use strict";$(function(){$("#btn-times").on("click",function(){var t=this;$(this).hide(),$(this).next().show();var e=60,n=setInterval(function(){console.log(e),1<e?(e--,$(t).next().text(e+"s再次点击")):(clearInterval(n),$(t).next().hide(),$(t).show(),$(t).next().text("59s再次点击"))},1e3)})});
//# sourceMappingURL=login.js.map
