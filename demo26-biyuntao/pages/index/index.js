//index.js
//获取应用实例
const app = getApp();
Page({
    data: {
        icon: {
            redBg: "../../images/icon/red-bg@2x.png",
            red1: "../../images/icon/red-1@2x.png",
            red2: "../../images/icon/red-2@2x.png",
            red3: "../../images/icon/red-money-bg.png",
            close: "../../images/icon/close2.png",
            logo: "../../images/icon/logo.png",
        },
        video: "../../images/icon/video.png",
        imgUrls: [
            "../../images/banner/banner@2x.png",
            "../../images/banner/banner@2x.png",
            "../../images/banner/banner@2x.png"
        ],
        navDatas: [{
            url: "../../images/nav/nav-1@2x.png",
            title: "限时秒杀",
            fun: "goSecKill"
        },
            {
                url: "../../images/nav/nav-2@2x.png",
                title: "男性用品",
                fun: "goLists"
            },
            {
                url: "../../images/nav/nav-3@2x.png",
                title: "女用器具",
                fun: "goLists"
            },
            {
                url: "../../images/nav/nav-4@2x.png",
                title: "避孕套",
                fun: "goLists"
            },
            {
                url: "../../images/nav/nav-5@2x.png",
                title: "情趣内衣",
                fun: "goLists"
            },
            {
                url: "../../images/nav/nav-6@2x.png",
                title: "延时喷剂",
                fun: "goLists"
            },
            {
                url: "../../images/nav/nav-7@2x.png",
                title: "保健护理",
                fun: "goLists"
            },
            {
                url: "../../images/nav/nav-8@2x.png",
                title: "性爱床椅",
                fun: "goLists"
            },
            {
                url: "../../images/nav/nav-9@2x.png",
                title: "我的分享",
                fun: "myShare"
            },
            {
                url: "../../images/nav/nav-10@2x.png",
                title: "我要加盟",
                fun: "attendUs"
            }
        ],
        cardsDatas: [{
            url: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
            id: 1,
            title: "杜蕾斯",
            des: "杜蕾斯，低价风暴，让爱更安全。全球第一安全套品牌，杜蕾斯，低价风暴，让爱更安全。全球第一安全套品牌。杜蕾斯...",
            priceNow: "66.66",
            priceDel: "88.88",
            goodsNumber: "666",
            poster: "../../images/banner/banner@2x.png"
        },
            {
                url: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
                id: 2,
                title: "杜蕾斯",
                des: "杜蕾斯，低价风暴，让爱更安全。全球第一安全套品牌，杜蕾斯，低价风暴，让爱更安全。全球第一安全套品牌。杜蕾斯...",
                priceNow: "66.66",
                priceDel: "88.88",
                goodsNumber: "666",
                poster: "../../images/banner/banner@2x.png"
            }, {
                url: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
                id: 3,
                title: "杜蕾斯",
                des: "杜蕾斯，低价风暴，让爱更安全。全球第一安全套品牌，杜蕾斯，低价风暴，让爱更安全。全球第一安全套品牌。杜蕾斯...",
                priceNow: "66.66",
                priceDel: "88.88",
                goodsNumber: "666",
                poster: "../../images/banner/banner@2x.png"
            }, {
                url: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
                id: 4,
                title: "杜蕾斯",
                des: "杜蕾斯，低价风暴，让爱更安全。全球第一安全套品牌，杜蕾斯，低价风暴，让爱更安全。全球第一安全套品牌。杜蕾斯...",
                priceNow: "66.66",
                priceDel: "88.88",
                goodsNumber: "666",
                poster: "../../images/banner/banner@2x.png"
            }, {
                url: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
                id: 5,
                title: "杜蕾斯",
                des: "杜蕾斯，低价风暴，让爱更安全。全球第一安全套品牌，杜蕾斯，低价风暴，让爱更安全。全球第一安全套品牌。杜蕾斯...",
                priceNow: "66.66",
                priceDel: "88.88",
                goodsNumber: "666",
                poster: "../../images/banner/banner@2x.png"
            },
            {
                url: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
                id: 6,
                title: "杜蕾斯",
                des: "杜蕾斯，低价风暴，让爱更安全。全球第一安全套品牌，杜蕾斯，低价风暴，让爱更安全。全球第一安全套品牌。杜蕾斯...",
                priceNow: "66.66",
                priceDel: "88.88",
                goodsNumber: "666",
                poster: "../../images/banner/banner@2x.png"
            }
        ],
        banner: {
            indicatorActiveColor: "rgb(246,83,20)",
            indicatorColor: "#00a1f1",
            indicatorDots: true,
            autoplay: true,
            interval: 5000,
            duration: 1000
        },
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        showVideoBg: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },
    onLoad: function () {
        const that = this;
        that.setData({
            imgSite: app.globalData.imgSite
        });
        wx.getStorage({
            key: 'getRedTickets',
            success: function (res) {
                console.log(res);
            },
            fail: function (res) {
                console.log(res);
                that.setData({
                    showRedBg: true
                })
            }
        })
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
    },
    getUserInfo: function (e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },
    makeCall: function () {
        app.makeCall();
    },
    goSecKill: function () {
        wx.navigateTo({
            url: '../seckill/seckill',
        });
    },
    goLists: function (e) {
        const that = this,
            type = e.currentTarget.dataset.type;
        wx.navigateTo({
            url: '../goodslists/goodslists?type=' + type,
        });
    },
    makeCall: function () {
        app.makeCall();
    },
    lookDetail: function (e) {
        app.lookDetail(e);
    },
    myShare: function () {
        app.myShare();
    },
    attendUs: function () {
        app.attendUs();
    },
    closeRedBg: function () {
        this.setData({
            showRedBg: false
        });
    },
    closeRed1Bg: function () {
        this.setData({
            showRed1Bg: false
        });
    },
    closeVideoBg: function () {
        this.setData({
            showVideoBg: false
        });
    },
    getRedTickets: function () {
        let that = this,
            redMoney = parseInt(Math.random() * 100);
        that.setData({
            showRedBg: false,
            showRed1Bg: true,
            redMoney: redMoney != 0 ? redMoney : 1
        });
        wx.setStorage({
            key: 'getRedTickets',
            data: true,
        })
    },
    playThisVideo: function (e) {
        let that = this,
            url = e.currentTarget.dataset.url,
            logo = e.currentTarget.dataset.logo;
        that.setData({
            activeUrl: url,
            activeLogo: logo,
            showVideoBg: true
        })
    },
    onHide: function () {
        this.setData({
            showVideoBg: false
        });
    }
})