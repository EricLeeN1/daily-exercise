$(function(){jQuery.support.cors=!0;var e=window.Base||{};e={default:"",getQueryString:function(e){var n=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),a=window.location.search.substr(1).match(n),t="";return null!=a&&(t=a[2]),n=null,a=null,null==t||""==t||"undefined"==t?"":t},objKeySort:function(e){for(var n=Object.keys(e).sort(),a={},t=0;t<n.length;t++)a[n[t]]=e[n[t]];return a},getAjax:function(e,n,a){var t=(JSON.parse(sessionStorage.getItem("handShake")),{});for(var r in n)t[r]=n[r];t.ts=Date.parse(new Date)/1e3-0+JSON.parse(sessionStorage.getItem("handShake")).data.ts,t.key=JSON.parse(sessionStorage.getItem("handShake")).data.key;var s={};for(var r in t)s[r]=t[r];s.sec=JSON.parse(sessionStorage.getItem("handShake")).data.secret,$.ajax({type:"get",url:""+this.site+e+$.param(t,!0)+"&sign="+_md5($.param(this.objKeySort(s),!0)),dataType:"json",success:a})},postAjax:function(e,n,a){var t=JSON.parse(sessionStorage.getItem("handShake"));n.ts=Date.parse(new Date)/1e3-0+t.data.ts;var r=n,s="",o={};r.key=t.data.key,r.version="2.0";for(var i in r)o[i]=r[i];o.sec=t.data.secret;for(var i in this.objKeySort(o))s+="&"+i+"="+this.objKeySort(o)[i];r.sign=_md5(s.substring(1)),$.ajax({type:"post",url:this.site+e,data:r,dataType:"json",success:a})},init:function(){console.log("//                            _ooOoo_\n//                           o8888888o\n//                           88\" . \"88\n//                           (| -_- |)\n//                            O\\ = /O\n//                        ____/`---'\\____\n//                      .   ' \\\\| |// `.\n//                       / \\\\||| : |||// \\\n//                     / _||||| -:- |||||- \\\n//                       | | \\\\\\ - /// | |\n//                     | \\_| ''\\---/'' | |\n//                      \\ .-\\__ `-` ___/-. /\n//                   ___`. .' /--.--\\ `. . __\n//                .\"\" '< `.___\\_<|>_/___.' >'\"\".\n//               | | : `- \\`.;`\\ _ /`;.`/ - ` : | |\n//                 \\ \\ `-. \\_ __\\ /__ _/ .-` / /\n//         ======`-.____`-.___\\_____/___.-`____.-'======\n//                            `=---='\n//\n//         .............................................\n//                  佛祖镇楼                  BUG辟易")}};(function(){var e=navigator.userAgent;navigator.appVersion;e.indexOf("Trident"),e.indexOf("Presto"),e.indexOf("AppleWebKit"),e.indexOf("Gecko")>-1&&e.indexOf("KHTML"),e.match(/AppleWebKit.*Mobile.*/),e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),e.indexOf("Android")>-1||e.indexOf("Linux"),e.indexOf("iPhone"),e.indexOf("iPad"),e.indexOf("Safari")})(),(navigator.browserLanguage||navigator.language).toLowerCase();e.init()});