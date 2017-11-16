//index.js
//获取应用实例
const app = getApp();

Page({
    data: {
        time: 100,
        loading: false,
        timer: null,
        icon: {
            banner: "../../../images/banner/banner2.png",
            level: "../../../images/icon/level.png",
            levelpurple: "../../../images/icon/levelpurple.png",
            levelblue: "../../../images/icon/levelblue.png",
            levelgreen: "../../../images/icon/levelgreen.png",
            levelred: "../../../images/icon/level.png",
            busyTrue: "../../../images/icon/busy.png",
            busyFalse: "../../../images/icon/busyFalse.png",
            edit: "../../../images/icon/edit.png",
            red: "../../images/icon/red.png",
            getNow: "../../images/icon/getNow.png",
            look: "../../images/icon/more1.png"
        },
        imgUrls: [
            '../../images/banner/banner2.png',
            '../../images/banner/banner3.png'
        ],
        lists1: [
            {
                id: 1,
                name: "欧阳锋",
                provice: "天津",
                logo: "../myShare/1.jpg",
                question: "我的另一半和我是什么关系，在哪里认识,我的另一半和我是什么关系，在哪里认识，我的另一半和我是什么关系，在哪里认识",
                price: "5元",
                number: 7
            },
            {
                id: 2,
                provice: "重庆",
                name: "黄蓉",
                logo: "../myShare/2.jpg",
                question: "我的另一半和我是什么关系，在哪里认识",
                price: "免费",
                number: 7
            },
            {
                id: 3,
                name: "郭靖",
                provice: "大连",
                logo: "../myShare/3.jpg",
                question: "我的另一半和我是什么关系，在哪里认识",
                price: "10元",
                number: 7
            },
            {
                id: 4,
                provice: "尼斯",
                name: "洪七公",
                logo: "../myShare/4.jpg",
                question: "我的另一半和我是什么关系，在哪里认识",
                price: "20元",
                number: 7
            },
            {
                id: 5,
                name: "黄老邪",
                provice: "上海",
                logo: "../myShare/1.jpg",
                question: "我的另一半和我是什么关系，在哪里认识",
                price: "5元",
                number: 7
            },
            {
                id: 6,
                name: "段智兴",
                provice: "北京",
                logo: "../myShare/2.jpg",
                question: "我的另一半和我是什么关系，在哪里认识",
                price: "免费",
                number: 7
            }
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
        memberLists: [
            {
                id: 1,
                logo: "../../../images/banner/banner6.jpg",
                level: 1,
                name: "炳坤专业算命，起名馆 起名 算命",
                des: "专业就是用心起好每个名字，专业就是给你最优的指导,专业就是用心起好每个名字，专业就是给你最优的指导",
                busy: 1,
                price: 15,
                active: 556,
                orderNumber: 666
            },
            {
                id: 2,
                logo: "../../../images/banner/banner6.jpg",
                level: 2,
                name: "炳坤专业算命，起名馆 起名 算命",
                des: "专业就是用心起好每个名字，专业就是给你最优的指导,专业就是用心起好每个名字，专业就是给你最优的指导",
                busy: 0,
                price: 15,
                active: 556,
                orderNumber: 666
            },
            {
                id: 3,
                logo: "../../../images/banner/banner6.jpg",
                level: 3,
                name: "炳坤专业算命，起名馆 起名 算命",
                des: "专业就是用心起好每个名字，专业就是给你最优的指导,专业就是用心起好每个名字，专业就是给你最优的指导",
                busy: 0,
                price: 15,
                active: 556,
                orderNumber: 666
            },
            {
                id: 3,
                logo: "../../../images/banner/banner6.jpg",
                level: 4,
                name: "炳坤专业算命，起名馆 起名 算命",
                des: "专业就是用心起好每个名字，专业就是给你最优的指导,专业就是用心起好每个名字，专业就是给你最优的指导",
                busy: 1,
                price: 15,
                active: 556,
                orderNumber: 666
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
                "fun": "getCommends",
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
    getCommends: function () {
        wx.navigateTo({
            url: 'comments/comments',
        });
    },
    memberList2: function () {
        wx.navigateTo({
            url: 'judge/judge',
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
    closeRedBg: function () {
        this.setData({
            showRedBg: false
        });
    },
    setName: function () {
        let that = this, list = that.data.lists1, length = list.length, showOrder = that.data.showOrder,
            time = parseInt(Math.random() * 30 + 10), index = parseInt(Math.random() * length);
        console.log(time);
        if (that.data.showOrder) {
            that.setData({
                showOrder: true,
                activeDatas: list[index]
            });
            setTimeout(function () {
                that.setData({
                    showOrder: false,
                });
                setTimeout(function () {
                    that.setName();
                }, time + 20000);
            }, 3000);
        } else {
            setTimeout(function () {
                that.setData({
                    showOrder: true,
                    activeDatas: list[index],
                    time: time
                });
                that.setName();
            }, time);
        }
    },
    onLoad: function () {
        const that = this;
        that.setData({
            scrollTop: 0,
        });

        wx.getStorage({
            key: 'getRedTickets',
            success: function (res) {
                console.log(res);
            },
            fail: function (res) {
                console.log(res);
                that.setData({
                    showRedBg: false
        });
            }
        })
        setTimeout(function () {
            that.timer();
            that.setName();
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
    getRedTickets: function () {
        wx.navigateTo({
            url: 'red/red',
        })
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
