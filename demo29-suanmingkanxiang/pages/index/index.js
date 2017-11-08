//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        imgUrls: [
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        banner: {
            indicatorDots: false,
            autoplay: false,
            interval: 5000,
            duration: 1000
        },
        nav1Datas: [
            {
                color: "red",
                text: "八字合婚",
                fun: "memberList2"
            },
            {
                color: "orange",
                text: "八字合婚",
                fun: "memberList2"
            },
            {
                color: "yellow",
                text: "八字合婚",
                fun: "memberList2"
            },
            {
                color: "green",
                text: "八字合婚",
                fun: "memberList2"
            },
            {
                color: "skyblue",
                text: "八字合婚",
                fun: "memberList2"
            },
            {
                color: "blue",
                text: "八字合婚",
                fun: "memberList2"
            },
            {
                color: "purple",
                text: "八字合婚",
                fun: "memberList2"
            },
            {
                color: "red",
                text: "八字合婚",
                fun: "memberList2"
            },
            {
                color: "orange",
                text: "八字合婚",
                fun: "memberList2"
            },
            {
                color: "yellow",
                text: "八字合婚",
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
        canIUse: wx.canIUse('button.open-type.getUserInfo')
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
    //事件处理函数
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function () {
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
    }
})
