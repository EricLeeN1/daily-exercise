"use strict";$(function(){$("#btn-times").on("click",function(){var t=this;$(this).hide(),$(this).next().show();var n=60,e=setInterval(function(){console.log(n),1<n?(n--,$(t).next().text(n+"s再次点击")):(clearInterval(e),$(t).next().hide(),$(t).show(),$(t).next().text("59s再次点击"))},1e3)}),$(".btn-login").on("click",function(){alert("提交成功")})});
//# sourceMappingURL=card1.js.map
