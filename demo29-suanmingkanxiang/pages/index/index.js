//index.js
//获取应用实例
const app = getApp();

Page({
    data: {
        time: 100,
        loading: false,
        timer: null,
        imgUrls: [
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        list: [
            {
                id: 1,
                text: "来自北京的小郑哥求姻缘测算",
                time: "1分钟前",
            },
            {
                id: 2,
                text: "来自北京的小郑哥求姻缘测算",
                time: "1分钟前",
            },
            {
                id: 3,
                text: "来自北京的小郑哥求姻缘测算",
                time: "1分钟前",
            },
            {
                id: 4,
                text: "来自北京的小郑哥求姻缘测算",
                time: "1分钟前",
            },
            {
                id: 5,
                text: "来自北京的小郑哥求姻缘测算",
                time: "1分钟前",
            },
            {
                id: 1,
                text: "来自北京的小郑哥求姻缘测算",
                time: "1分钟前",
            },
            {
                id: 2,
                text: "来自北京的小郑哥求姻缘测算",
                time: "1分钟前",
            },
            {
                id: 3,
                text: "来自北京的小郑哥求姻缘测算",
                time: "1分钟前",
            },
            {
                id: 4,
                text: "来自北京的小郑哥求姻缘测算",
                time: "1分钟前",
            },
            {
                id: 5,
                text: "来自北京的小郑哥求姻缘测算",
                time: "1分钟前",
            },
            {
                id: 1,
                text: "来自北京的小郑哥求姻缘测算",
                time: "1分钟前",
            },
            {
                id: 2,
                text: "来自北京的小郑哥求姻缘测算",
                time: "1分钟前",
            },
            {
                id: 3,
                text: "来自北京的小郑哥求姻缘测算",
                time: "1分钟前",
            },
            {
                id: 4,
                text: "来自北京的小郑哥求姻缘测算",
                time: "1分钟前",
            },
            {
                id: 5,
                text: "来自北京的小郑哥求姻缘测算",
                time: "1分钟前",
            },
            {
                id: 1,
                text: "来自北京的小郑哥求姻缘测算",
                time: "1分钟前",
            },
            {
                id: 2,
                text: "来自北京的小郑哥求姻缘测算",
                time: "1分钟前",
            },
            {
                id: 3,
                text: "来自北京的小郑哥求姻缘测算",
                time: "1分钟前",
            },
            {
                id: 4,
                text: "来自北京的小郑哥求姻缘测算",
                time: "1分钟前",
            },
            {
                id: 5,
                text: "来自北京的小郑哥求姻缘测算",
                time: "1分钟前",
            },
            {
                id: 1,
                text: "来自北京的小郑哥求姻缘测算",
                time: "1分钟前",
            },
            {
                id: 2,
                text: "来自北京的小郑哥求姻缘测算",
                time: "1分钟前",
            },
            {
                id: 3,
                text: "来自北京的小郑哥求姻缘测算",
                time: "1分钟前",
            },
            {
                id: 4,
                text: "来自北京的小郑哥求姻缘测算",
                time: "1分钟前",
            },
            {
                id: 5,
                text: "来自北京的小郑哥求姻缘测算",
                time: "1分钟前",
            }
        ],
        banner: {
            indicatorDots: false,
            autoplay: false,
            interval: 5000,
            duration: 1000
        },
        nav1Datas: [
            {
                color: "../../images/nav/nav1.png",
                text: "八字合婚",
                fun: "memberList2"
            },
            {
                color: "../../images/nav/nav2.png",
                text: "事业财运",
                fun: "memberList2"
            },
            {
                color: "../../images/nav/nav3.png",
                text: "婚恋感情",
                fun: "memberList2"
            },
            {
                color: "../../images/nav/nav4.png",
                text: "八字算命",
                fun: "memberList2"
            },
            {
                color: "../../images/nav/nav5.png",
                text: "风水改运",
                fun: "memberList2"
            },
            {
                color: "../../images/nav/nav6.png",
                text: "起名改名",
                fun: "memberList2"
            },
            {
                color: "../../images/nav/nav7.png",
                text: "企业起名",
                fun: "memberList2"
            },
            {
                color: "../../images/nav/nav8.png",
                text: "手相面相",
                fun: "memberList2"
            },
            {
                color: "../../images/nav/nav9.png",
                text: "选时择日",
                fun: "memberList2"
            },
            {
                color: "../../images/nav/nav10.png",
                text: "占卜事件",
                fun: "memberList2"
            }
        ],
        navDatas: [
            {
                "fun": "memberList",
                "title": "团队介绍"
            },
            {
                "fun": "memberSpread",
                "title": "成员分布"
            },
            {
                "fun": "notice",
                "title": "咨询须知"
            },
            {
                "fun": "feedBack",
                "title": "客户反馈"
            },
            {
                "fun": "",
                "title": "免费算卦"
            },
            {
                "fun": "",
                "title": "微信客服"
            }
        ],
        datas: {
            countNumbers: 3666
        },
        userInfo: {},
        hasUserInfo: false,
        canIUse: true
    },
    memberList: function () {
        wx.navigateTo({
            url: 'memberList/memberList',
        });
    },
    memberList2: function () {
        wx.navigateTo({
            url: 'memberList2/memberList2',
        });
    },
    feedBack: function () {
        wx.navigateTo({
            url: '../feedBack/feedBack',
        });
    },
    memberSpread: function () {
        wx.navigateTo({
            url: 'memberSpread/memberSpread',
        });
    },
    notice: function () {
        wx.navigateTo({
            url: '../notice/notice',
        });
    },
    onLoad: function () {
        const that = this;
        that.setData({
            scrollTop: 0,
        });
        setTimeout(function () {
            that.timer();
        }, 2000);
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            });
            wx.getStorage({
                key: 'userInfos',
                success: function (res) {
                },
                fail: function (res) {
                    wx.setStorage({
                        key: 'userInfos',
                        data: app.globalData.userInfo,
                    });
                }
            });
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                });
                wx.getStorage({
                    key: 'userInfos',
                    success: function (res) {
                    },
                    fail: function (res) {
                        wx.setStorage({
                            key: 'userInfos',
                            data: app.globalData.userInfo,
                        });
                    }
                });
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    });
                    wx.getStorage({
                        key: 'userInfos',
                        success: function (res) {
                        },
                        fail: function (res) {
                            wx.setStorage({
                                key: 'userInfos',
                                data: app.globalData.userInfo,
                            });
                        }
                    });
                }
            })
        }

    },
    onShow: function () {
        this.setData({
            loading: false
        });
    },
    getUserInfo: function (e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },
    onHide: function () {
        this.setData({
            loading: true,
            scrollTop: 0
        });
    },
    onUnload: function () {
        this.setData({
            loading: true,
            scrollTop: 0
        });
    },
    timer: function () {
        const that = this;
        let scrollTop = 0;
        var timer = setInterval(function () {
            if (scrollTop < (that.data.list.length - 5) * 50) {
                if (that.data.loading == false) {
                    scrollTop += 1;
                    that.setData({
                        scrollTop: scrollTop
                    });
                } else {
                    scrollTop = that.data.scrollTop;
                }
            } else {
                scrollTop = 0;
                that.setData({
                    scrollTop: scrollTop,
                    time: 100
                });
            }
            ;
        }, that.data.time);
    },
    scroll: function (e) {
        const that = this;
        if (that.data.loading) {
            that.setData({
                scrollTop: e.detail.scrollTop
            })
    }
    },
})
