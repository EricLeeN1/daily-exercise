// pages/msg/msg.js
var app = getApp();
Page({
    data: {
        page: 1,
        pagesize: 10,
        iconUrl: {
            logoUrl: '../../../images/icon/logo.png',
            moreUrl: '../../../images/icon/more1.png',
            noPushUrl: '../../../images/without/my-without.png',
            icon: "../../../images/icon/fail.png"
        },
        pushlist: [
            {
                id: 1,
                title: "平台订单信息提示",
                content: "您有最新订单信息，您于2017-11-9 09:50:54在我们平台上购买信息如下:珠串*1，单价¥123;珠串*1，单价¥123;珠串*1，单价¥123;珠串*1，单价¥123;珠串*1，单价¥123;",
                isAudio: false,
                audioUrl: ""
            },
            {
                id: 2,
                title: "平台活动信息提示",
                content: "尊敬的顾客，本平台将于2017/11/11日举办酬宾活动，凡是消费满200以上的顾客可以得到三次免费提问的机会，惊喜多多，希望大家不要错过",
                isAudio: false,
                audioUrl: ""
            },
            {
                id: 3,
                title: "平台语音信息提示",
                content: "玄晶大师于2017-11-9 10:00:28为您回复了您的问题，“什么时候结婚”，请点击更多查看",
                isAudio: true,
                audioUrl: "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46"
            }
        ],
        text: {
            more: '查看更多',
            noPushText: '这里还什么都没有!'
        }
    },
    onLoad: function (options) {
        // Do some initialize when page load.
    },
    onReady: function () {
        // Do something when page ready.
    },
    onShow: function () {
        // Do something when page show.
    },
    onHide: function () {
        // Do something when page hide.
    },
    onUnload: function () {
        // Do something when page close.
    },
    onPullDownRefresh: function () {
        // Do something when pull down.

    },
    onReachBottom: function () {
        // Do something when page reach bottom.
        this.msgList();
    },
    onShareAppMessage: function () {
        // return custom share data when user share.
    },
    msgList: function () {
        let that = this;
        if (that.data.page == 1) {
            app.getAjax('', {
                page: that.data.page,
                pagesize: that.data.pagesize
            }, function (res) {
                if (res.data.msgcode == 1) {
                    that.setData({
                        page: that.data.page - 0 + 1,
                        totalrecords: res.data.data.totalrecords,
                        pushlist: res.data.data.pushlist
                    });
                } else {
                    wx.showToast({
                        title: res.data.msg,
                        image: that.data.icon.fail,
                        success: function (res) {
                            that.setData({});
                        }
                    });
                    setTimeout(function () {
                        wx.hideToast();
                    }, 1000);
                }
            }, function (res) {
            })
        } else if (that.data.page > 1 && that.data.page <= that.data.totalrecords) {
            app.getAjax('ClientService.asmx/PushMessageList?', {
                page: that.data.page,
                pagesize: that.data.pagesize
            }, function (res) {
                if (res.data.msgcode == 1) {
                    that.setData({
                        page: that.data.page - 0 + 1,
                        pushlist: that.data.pushlist.concat(res.data.data.pushlist)
                    });
                } else {
                    wx.showToast({
                        title: res.data.msg,
                        image: that.data.icon.fail,
                        success: function (res) {
                            that.setData({});
                        }
                    });
                    setTimeout(function () {
                        wx.hideToast();
                    }, 1000);
                }
            }, function (res) {
            })
        }

    },
    pushDetail: function (e) {
        wx.navigateTo({
            url: e.currentTarget.dataset.url
        })
    }
})