webpackJsonp([11],{IfU6:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("IvJb"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view",{attrs:{name:"AppHeader"}}),this._v(" "),e("router-view"),this._v(" "),e("footer",[e("div",{staticClass:"tab-list"},this._l(this.list,function(t,a){return e("router-link",{key:a,staticClass:"tab-item",attrs:{title:t.title,to:t.route,"active-class":"active"}})}))])],1)},staticRenderFns:[]};var i=a("C7Lr")({name:"App",components:{},data:function(){return{list:[{active:!0,title:"活动二维码",route:"/tab1"},{active:!1,title:"签到",route:"/tab2"},{active:!1,title:"消息墙",route:"/tab3"},{active:!1,title:"红包雨",route:"/tab4"},{active:!1,title:"摇一摇",route:"/tab5"},{active:!1,title:"砸金蛋",route:"/tab6"},{active:!1,title:"老虎机",route:"/tab7"},{active:!1,title:"活动相册",route:"/tab8"}]}},computed:{handShake:function(){return this.$store.state.hand.handShake}},beforeCreate:function(){this.$store.dispatch("handShakes")}},n,!1,function(t){a("IfU6")},"data-v-43d231a3",null).exports,o=a("zO6J");a("LqYc");s.a.use(o.a);var r=new o.a({linkActiveClass:"",linkExactActiveClass:"",mode:"history",routes:[{path:"/",name:"App",components:{default:function(t){return a.e(0).then(function(){var e=[a("sRz/")];t.apply(null,e)}.bind(this)).catch(a.oe)},AppHeader:function(t){return a.e(1).then(function(){var e=[a("8Gwg")];t.apply(null,e)}.bind(this)).catch(a.oe)}},meta:{title:"练习册"},children:[{path:"tab1",meta:{title:"参与活动"},component:function(t){return a.e(2).then(function(){var e=[a("y63Q")];t.apply(null,e)}.bind(this)).catch(a.oe)}},{path:"tab2",meta:{title:"个性签到"},component:function(t){return a.e(8).then(function(){var e=[a("7YRg")];t.apply(null,e)}.bind(this)).catch(a.oe)}},{path:"tab3",meta:{title:"上墙留言"},component:function(t){return a.e(6).then(function(){var e=[a("xxXF")];t.apply(null,e)}.bind(this)).catch(a.oe)}},{path:"tab4",meta:{title:"红包雨"},component:function(t){return a.e(4).then(function(){var e=[a("/iBL")];t.apply(null,e)}.bind(this)).catch(a.oe)}},{path:"tab5",meta:{title:"摇一摇跑马"},component:function(t){return a.e(7).then(function(){var e=[a("fTED")];t.apply(null,e)}.bind(this)).catch(a.oe)}},{path:"tab6",meta:{title:"砸金蛋"},component:function(t){return a.e(9).then(function(){var e=[a("6jAt")];t.apply(null,e)}.bind(this)).catch(a.oe)}},{path:"tab7",meta:{title:"老虎机抽奖"},component:function(t){return a.e(5).then(function(){var e=[a("i9qD")];t.apply(null,e)}.bind(this)).catch(a.oe)}},{path:"tab8",meta:{title:"活动相册"},component:function(t){return a.e(3).then(function(){var e=[a("qT/+")];t.apply(null,e)}.bind(this)).catch(a.oe)}}]}]});r.beforeEach(function(t,e,a){t.meta.title&&(document.title=t.meta.title),a()}),r.afterEach(function(t,e,a){window.scrollTo(0,0)});var c=r,u=a("9rMa"),g={site:"http://60.205.111.27:801",root:"https://cnodejs.org/api/v1",imgSite:"http://60.205.111.27:807",version:"1.0.0",qrUrl:"http://60.205.111.27:801",key:"l@j#g=c!w*)8(^5$",iv:"L+*df5,Ir)b$=pkf"},m=a("rVsN"),d=a.n(m),l=a("3cXf"),p=a.n(l),h=a("6iV/"),f=a.n(h),b=a("aozt");function v(t){return{}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function _(t,e,a,s,n){a&&(a=function t(e){for(var a in e)null===e[a]&&delete e[a],"string"===v(e[a])?e[a]=e[a].trim():"object"===v(e[a])?e[a]=t(e[a]):"array"===v(e[a])&&(e[a]=t(e[a]));return e}(a)),b({method:t,url:e,data:"POST"===t||"PUT"===t?a:null,params:"GET"===t||"DELETE"===t?a:null,baseURL:g.site,withCredentials:!1,headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json, text/javascript, */*"},transformRequest:[function(t,e){return t}],transformResponse:[function(t){return t}]}).then(function(t){t.data=JSON.parse(t.data),200===t.request.status&4===t.request.readyState?s&&s(t.data):n?n(t):window.alert("error: "+p()(t.data))}).catch(function(t){console.log("===================================="),console.log(t),console.log("====================================");var e=t.response;t&&window.alert("api error, HTTP CODE: "+e.status)})}b.interceptors.request.use(function(t){return"post"===t.method&&(t.data=f.a.stringify(t.data)),t},function(t){return alert("参数错误"),d.a.reject(t)});var k={get:function(t,e,a,s){return _("GET",t,e,a,s)},post:function(t,e,a,s){return _("POST",t,e,a,s)},put:function(t,e,a,s){return _("PUT",t,e,a,s)},delete:function(t,e,a,s){return _("DELETE",t,e,a,s)}},y=a("mgIi"),w=a.n(y),S={handShakes:function(t){k.post("http://60.205.111.27:801/WebService.asmx/AcquireSecretKey",{type:3,ts:Date.parse(new Date)/1e3},function(e){if(1==e.msgcode){var a=w.a.enc.Latin1.parse(g.key),s=w.a.enc.Latin1.parse(g.iv);e.data.key=w.a.AES.decrypt(e.data.key,a,{iv:s,padding:w.a.pad.Pkcs7}).toString(w.a.enc.Utf8),e.data.secret=w.a.AES.decrypt(e.data.secret,a,{iv:s,padding:w.a.pad.Pkcs7}).toString(w.a.enc.Utf8),t.commit("handShakeDatas",e.data)}},function(t){console.log(t)})}};s.a.use(u.a);var D={state:{handShake:""},getters:{},mutations:{handShakeDatas:function(t,e){t.handShake=e}},actions:S},T={msgcode:1,msg:"获取成功",list:[{id:1,logo:"../../static/images/users/head_1.png",name:"邱淑贞"},{id:2,logo:"../../static/images/users/head_2.png",name:"林青霞"},{id:3,logo:"../../static/images/users/head_3.png",name:"王祖贤"},{id:4,logo:"../../static/images/users/head_4.png",name:"张曼玉"},{id:5,logo:"../../static/images/users/head_5.png",name:"钟楚红"},{id:6,logo:"../../static/images/users/head_6.png",name:"叶子楣"},{id:7,logo:"../../static/images/users/head_7.png",name:"张柏芝"},{id:8,logo:"../../static/images/users/head_8.png",name:"黎姿"},{id:9,logo:"../../static/images/users/head_9.png",name:"佘诗曼"},{id:10,logo:"../../static/images/users/head_10.png",name:"萱萱"},{id:11,logo:"../../static/images/users/head_11.png",name:"梅艳芳"},{id:12,logo:"../../static/images/users/head_12.png",name:"李若彤"},{id:13,logo:"../../static/images/users/head_13.png",name:"米雪"},{id:14,logo:"../../static/images/users/head_14.png",name:"蔡少芬"},{id:15,logo:"../../static/images/users/head_15.png",name:"叶璇"},{id:16,logo:"../../static/images/users/head_16.png",name:"滕丽名"},{id:17,logo:"../../static/images/users/head_17.png",name:"袁咏仪"},{id:18,logo:"../../static/images/users/head_18.png",name:"温碧霞"},{id:19,logo:"../../static/images/users/head_19.png",name:"周海媚"},{id:20,logo:"../../static/images/users/head_20.png",name:"张钧蜜"}]},E={userInfos:function(t){setTimeout(function(){t.commit("usersDatas",T)},2e3)}};s.a.use(u.a);var I={state:{userDatas:""},getters:{},mutations:{usersDatas:function(t,e){t.userDatas=e}},actions:E},j={msgcode:1,msg:"获取成功",list:[{id:1,logo:"../../static/images/users/head_1.png",name:"邱淑贞",msg:"醒在我梦里"},{id:2,logo:"../../static/images/users/head_2.png",name:"林青霞",msg:"天下风云出我辈，一入江湖岁月催，皇图霸业谈笑间，不胜人生一场醉。"},{id:3,logo:"../../static/images/users/head_3.png",name:"王祖贤",msg:"提剑跨骑挥鬼雨，白骨如山鸟惊飞。尘事如潮人如水，只叹江湖几人回。"},{id:4,logo:"../../static/images/users/head_4.png",name:"张曼玉",msg:"花样年华，甜蜜蜜"},{id:5,logo:"../../static/images/users/head_5.png",name:"钟楚红",msg:"香港的玛丽莲梦露，纵横四海。"},{id:6,logo:"../../static/images/users/head_6.png",name:"叶子楣",msg:"谁都会有一段过去，没有爱就不能在一块"},{id:7,logo:"../../static/images/users/head_7.png",name:"张柏芝",msg:"星语心愿，忘不了"},{id:8,logo:"../../static/images/users/head_8.png",name:"黎姿",msg:"倚天屠龙记，小结巴"},{id:9,logo:"../../static/images/users/head_9.png",name:"佘诗曼",msg:"金枝欲孽，周芷若"},{id:10,logo:"../../static/images/users/head_10.png",name:"萱萱",msg:"寻秦记乌婷芳"},{id:11,logo:"../../static/images/users/head_11.png",name:"梅艳芳",msg:"女人花，似是故人来"},{id:12,logo:"../../static/images/users/head_12.png",name:"李若彤",msg:"姑姑，王语嫣。"},{id:13,logo:"../../static/images/users/head_13.png",name:"米雪",msg:"越漂亮的女人越会骗人"},{id:14,logo:"../../static/images/users/head_14.png",name:"蔡少芬",msg:"世间种种的诱惑，不惊不扰我清梦。山高路远不绝我，追踪你绝美的笑容。"},{id:15,logo:"../../static/images/users/head_15.png",name:"叶璇",msg:"上官海棠，天下第一"},{id:16,logo:"../../static/images/users/head_16.png",name:"滕丽名",msg:"不悔善柔纪晓芙"},{id:17,logo:"../../static/images/users/head_17.png",name:"袁咏仪",msg:"靓靓"},{id:18,logo:"../../static/images/users/head_18.png",name:"温碧霞",msg:"苏妲已，回眸一笑百媚生"},{id:19,logo:"../../static/images/users/head_19.png",name:"周海媚",msg:"周芷若，多年以后我又成了你"},{id:20,logo:"../../static/images/users/head_20.png",name:"张钧蜜"}]},A={userInfos:function(t){setTimeout(function(){t.commit("msgDatas",j)},2e3)}};s.a.use(u.a);var N={state:{msgDatas:""},getters:{},mutations:{msgDatas:function(t,e){t.msgDatas=e}},actions:A},q={msgcode:1,msg:"获取成功",list:[{id:1,url:"../../static/images/background/tab4-page1-bg.jpg",title:"我不要做痴心的替身，我要你真的爱我才吻我。",userId:"1",userName:"邱淑贞"},{id:2,url:"../../static/images/background/tab5-page1-bg.jpg",title:"天下风云出我辈，一入江湖岁月催，皇图霸业谈笑间，不胜人生一场醉。",userId:"2",userName:"林青霞"},{id:3,url:"../../static/images/background/tab6-page1-bg.jpg",title:"提剑跨骑挥鬼雨，白骨如山鸟惊飞。尘事如潮人如水，只叹江湖几人回。",userId:"3",userName:"王祖贤"},{id:4,url:"../../static/images/background/tab7-page1-bg.png",title:"如果我多一张船票，你会不会跟我一起走。",userId:"4",userName:"张曼玉"},{id:5,url:"../../static/images/background/tab4-page1-bg.jpg",title:"其实爱一个人并不是要跟她一辈子的。我喜欢花，难道我摘下来你让我闻闻；我喜欢风，难道你让风停下来；我喜欢云，难道你就让云罩着我；我喜欢海，难道我就去跳海？",userId:"5",userName:"钟楚红"},{id:6,url:"../../static/images/background/tab5-page1-bg.jpg",title:"谁都会有一段过去，没有爱就不能在一块",userId:"6",userName:"叶子楣"},{id:7,url:"../../static/images/background/tab6-page1-bg.jpg",title:"从现在开始，我只疼你一个。我会宠你，决不会骗你。答应你的每一件事情，我都会做到。对你讲的每一句话，都是真话。不欺负你，不骂你，会相信你。有人欺负你，我会第一时间出来帮你。你开心的时候，我会陪着你开心；你不开心，我也会哄得你开心。永远觉得你最漂亮，做梦都会梦见你。在我的心里，永远只有你一个。 ",userId:"7",userName:"张柏芝"},{id:8,url:"../../static/images/background/tab7-page1-bg.png",title:"夜已深 温馨到伤感，看着夜雨交织翻腾泪强忍。梦已深 漆黑里孤身，带着热爱辗转追寻。",userId:"8",userName:"黎姿"}]},L={albumInfos:function(t){setTimeout(function(){t.commit("albumDatas",q)},2e3)}};s.a.use(u.a);var U={state:{albumDatas:""},getters:{},mutations:{albumDatas:function(t,e){var a=e.list;a&&(a.forEach(function(t){t.active=!1}),a[0].active=!0),t.albumDatas=e}},actions:L};s.a.prototype.$api=k,s.a.use(u.a);var C=new u.a.Store({state:{imgSite:g.imgSite,none:"../../static/images/none/msg-none.png",qrcode:g.qrUrl,narrowRight:"../../static/images/btn/narrow-right.png",narrowLeft:"../../static/images/btn/narrow-left.png"},modules:{hand:D,user:I,msg:N,album:U}});a("wQ/J"),a("piUH");s.a.config.productionTip=!1,new s.a({el:"#app",router:c,store:C,components:{App:i},template:"<App/>"})},piUH:function(t,e){},"wQ/J":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.12d86342917183edc30a.js.map