webpackJsonp([3],{dmtJ:function(t,e){},"qT/+":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{none:this.$store.state.none,narrowLeft:this.$store.state.narrowLeft,narrowRight:this.$store.state.narrowRight,albumLists:"",seconds:2e3,pervLastTime:"",nextLastTime:""}},methods:{prev:function(t){clearInterval(this.timer);var e=(new Date).getTime()/1e3;console.log("===================================="),console.log(e-this.pervLastTime),console.log("====================================");var s=this.albumLists;s[t].active=!1,s[t=Math.max(0,t-1)].active=!0,e-this.pervLastTime>3&&""!=this.pervLastTime&&this.bannerScroll(t),this.pervLastTime=e},next:function(t){clearInterval(this.timer);var e=(new Date).getTime()/1e3;console.log("===================================="),console.log(e-this.nextLastTime),console.log("====================================");var s=this.albumLists;s[t].active=!1,s[t=Math.min(t+1,s.length-1)].active=!0,e-this.nextLastTime>3&&""!=this.nextLastTime&&this.bannerScroll(t),this.nextLastTime=e},bannerScroll:function(t){var e=this.albumLists;this.timer=setInterval(function(){e[t].active&&(e[t].active=!1),7==t?t=0:t++,e[t].active=!0},this.seconds)}},beforeCreate:function(){this.$store.dispatch("albumInfos")},mounted:function(){var t=this;setTimeout(function(){t.albumLists=t.$store.state.album.albumDatas.list,t.bannerScroll(0)},2e3)}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"show"},[t.albumLists?s("ul",t._l(t.albumLists,function(e,a){return s("li",{directives:[{name:"show",rawName:"v-show",value:e.active,expression:"item.active"}],key:e.id,attrs:{"data-url":e.url}},[s("img",{attrs:{src:e.url,alt:e.userName}}),t._v(" "),s("div",{staticClass:"img-caption"},[s("h3",[t._v(t._s(e.userName))]),t._v(" "),s("p",[t._v(t._s(e.title))])]),t._v(" "),s("div",{staticClass:"img-narrow"},[s("img",{attrs:{src:t.narrowLeft,disabled:0==a,alt:a},on:{click:function(e){t.prev(a)}}}),t._v(" "),s("img",{attrs:{src:t.narrowRight,disabled:a==t.albumLists.lengt,alt:a},on:{click:function(e){t.next(a)}}})]),t._v(" "),s("div",{staticClass:"album-dots-list",style:"margin-left:-"+30*t.albumLists.length/2+"px;",attrs:{"data-active":e.active}},t._l(t.albumLists.length,function(e,i){return s("div",{key:i,class:["album-dots-items",i==a?"album-dots-items-active":""]},[t._v("\n          "+t._s(i-0+1)+"\n        ")])}))])})):s("div",{staticClass:"album-none"},[s("img",{attrs:{src:t.none,alt:""}}),t._v(" "),s("p",[t._v("还暂时没有活动照片哦")])])])},staticRenderFns:[]};var n=s("C7Lr")(a,i,!1,function(t){s("dmtJ")},"data-v-d8639c94",null);e.default=n.exports}});
//# sourceMappingURL=3.29a9dc0ed77bb5d983c7.js.map