const app = getApp();
Page({
    data: {
        icon: {
            hot: 'chaoshi_icon_rexiao@2x.png',
            reduce: 'chaoshi_icon_sub@2x.png',
            add: 'chaoshi_icon_add@2x.png',
            cart: 'chaoshi_tab_icon_buy_on@2x.png',
            cartNone: 'chaoshi_tab_icon_buy_none@2x.png',
            clearCart: 'chaoshi_icon_empty@2x.png',
            icon: 'icon.png'
        },
        shops: [
            {
                "id": 1,
                "name": "五昌阁 金星招财进宝男士小叶紫檀手串老料高油密佛珠手链12MM ",
                "logo": "logo1.png",
                "oprice": "100.00",
                "price": "80.00",
                "des": "龍隐 真上品小叶紫檀手串高油密秒沉水鸡血红短款手链 男女佛珠 老料顺纹12mm*17颗 龍隐 真上品小叶紫檀手串高油密"
            },
            {
                "id": 2,
                "name": "五昌阁 金星招财进宝男士小叶紫檀手串老料高油密佛珠手链12MM 五昌阁 金星招财进宝男士小叶",
                "logo": "logo2.png",
                "oprice": "100.00",
                "price": "80.00",
                "des": "龍隐 真上品小叶紫檀手串高油密秒沉水鸡血红短款手链 男女佛珠 老料顺纹12mm*17颗 "
            },
            {
                "id": 3,
                "name": "五昌阁 金星招财进宝男士小叶紫檀手串老料高油密佛珠手链12MM ",
                "logo": "logo3.png",
                "oprice": "100.00",
                "price": "80.00",
                "des": "龍隐 真上品小叶紫檀手串高油密秒沉水鸡血红短款手链 男女佛珠 老料顺纹12mm*17颗 龍隐 真上品小叶紫檀手串高油密"
            },
            {
                "id": 4,
                "name": "五昌阁 金星招财进宝男士小叶紫檀手串老料高油密佛珠手链12MM ",
                "logo": "logo4.png",
                "oprice": "100.00",
                "price": "80.00",
                "des": "龍隐 真上品小叶紫檀手串高油密秒沉水鸡血红短款手链 男女佛珠 老料顺纹12mm*17颗 "
            },
            {
                "id": 5,
                "name": "五昌阁 金星招财进宝男士小叶紫檀手串老料高油密佛珠手链12MM ",
                "logo": "logo5.png",
                "oprice": "100.00",
                "price": "80.00",
                "des": "龍隐 真上品小叶紫檀手串高油密秒沉水鸡血红短款手链 男女佛珠 老料顺纹12mm*17颗 "
            },
            {
                "id": 6,
                "name": "五昌阁 金星招财进宝男士小叶紫檀手串老料高油密佛珠手链12MM 五昌阁 金星招财进宝男士小叶",
                "logo": "logo1.png",
                "oprice": "100.00",
                "price": "80.00",
                "des": "龍隐 真上品小叶紫檀手串高油密秒沉水鸡血红短款手链 男女佛珠 老料顺纹12mm*17颗 龍隐 真上品小叶紫檀手串高油密"
            }
        ],
        toastImage: {
            success: 'success.png',
            fail: 'fail.png'
        },
        tips: {
            oprice: '历史价',
            price: '热销价',
            payNow: '去结算',
            noGoods: '购物车还是空的哦！'
        },
        page: 1,
        pagesize: 10,
        opriceAll: 0,
        priceAll: 0,
        currentType: 0,
        scrollTop: 0,
        typeArrayCurrent: 'type-0',
        showModal: false,
        showCart: false,
        loading: false,
        menuBtn: true,
        menu2Btn: true,
        showVideoBg: false,
    },
    onLoad: function (options) {
        const that = this;
        // options.name = decodeURI(options.name);
        that.setData({
            options: options,
            imgSite: ''
        });
    },
    onReady: function () {

    },
    onShow: function () {
    },
    playThisVideo: function (e) {
        let that = this,
            url = "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400";
        that.setData({
            showVideoBg: true,
            activeUrl: url
        })
    },
    closeVideoBg: function () {
        this.setData({
            showVideoBg: false
        });
    },
    onHide: function () {
        this.setData({
            showVideoBg: false
        });
    },
    onUnload: function () {
    },
    onPullDownRefresh: function () {

    },
    onReachBottom: function () {

    },
    onShareAppMessage: function () {

    },
    buyNow: function () {
        wx.showToast({
            title: '购买成功',
        });
        setTimeout(function () {
            wx.hideLoading();
        }, 1000);
    }
});