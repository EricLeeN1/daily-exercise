"use strict";$(function(){$(".btn-login").on("click",function(){window.location.href="./card1.html"}),$("#card .form-item input").on("change",function(){console.log($(this).attr("id")),function(n,o){var i=n,t=(o=o,new FileReader);t.onloadend=function(n){console.log(n),i.src=t.result},o?t.readAsDataURL(o):i.src=""}($(this).prev("img")[0],$(this)[0].files[0])})});
//# sourceMappingURL=card.js.map
