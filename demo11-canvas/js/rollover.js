//优雅的图片翻转实现方式
window.onload = function () {
    //遍历所有的图片，查找data-rollover属性
    for (let i = 0; i < document.images.length; i++) {
        var img = document.images[i];
        var rollover = img.getAttribute('data-rollover');
        if (!rollover) continue; //跳过没有data-rollover属性的图片
        (new Image()).src = rollover;//确保将翻转的图片缓存起来
        img.setAttribute('data-rollout', img.src);//定义一个属性来标识默认的图片Url
        //注册事件处理函数来创建翻转效果；
        img.onmouseover = function () {
            this.src = this.getAttribute('data-rollover');
        };
        img.onmouseout = function () {
            this.src = this.getAttribute('data-rollout');
        }
    }
}