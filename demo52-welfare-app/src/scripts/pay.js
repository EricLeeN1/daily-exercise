if (location.hash.indexOf('error') != -1) {
    alert('参数错误，请检查');
} else {
    var ua = navigator.userAgent.toLowerCase();
    var tip = document.querySelector(".weixin-tip");
    var tipImg = document.querySelector(".J-weixin-tip-img");
    if (ua.indexOf('micromessenger') != -1) {
        tip.style.display = 'block';
        tipImg.style.display = 'block';
        if (ua.indexOf('iphone') != -1 || ua.indexOf('ipad') != -1 || ua.indexOf('ipod') != -1) {
            tipImg.className = 'J-weixin-tip-img weixin-tip-img iphone'
        } else {
            tipImg.className = 'J-weixin-tip-img weixin-tip-img android'
        }
    } else {
        var getQueryString = function (url, name) {
            var reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)", "i");
            if (reg.test(url)) return RegExp.$2.replace(/\+/g, " ");
        };
        var param = getQueryString(location.href, 'goto') || '';
        location.href = param != '' ? _AP.decode(param) : 'pay.html#error';
    }
}