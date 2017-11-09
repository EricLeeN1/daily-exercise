// pages/msg/msgDetail/msgDetail.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        gifShow: false,
        iconUrl: {
            logoUrl: '../../../../images/icon/logo.png',
            moreUrl: '../../../../images/icon/more1.png',
            noPushUrl: '../../../../images/without/my-without.png',
            icon: "../../../../images/icon/fail.png",
            audio: "../../../../images/icon/audio1.png",
            gif: "../../../../images/icon/audio2.gif",
        },
        text: {
            more: '查看更多'
        },
        pushlist: [
            {
                id: 1,
                title: "平台订单信息提示",
                content: "您有最新订单信息，您于2017-11-9 09:50:54在我们平台上购买信息如下:珠串*1，单价¥123;珠串*1，单价¥123;珠串*1，单价¥123;珠串*1，单价¥123;珠串*1，单价¥123;",
                isAudio: false,
                audioUrl: "",
                time: "2017-11-9 10:10:10",
                audioLength: 0
            },
            {
                id: 2,
                title: "平台活动信息提示",
                content: "尊敬的顾客，本平台将于2017/11/11日举办酬宾活动，凡是消费满200以上的顾客可以得到三次免费提问的机会，惊喜多多，希望大家不要错过",
                isAudio: false,
                audioUrl: "",
                audioLength: 0,
                time: "2017-11-9 10:10:22"
            },
            {
                id: 3,
                title: "平台语音信息提示",
                content: "玄晶大师于2017-11-9 10:00:28为您回复了您的问题，“什么时候结婚”，请点击语音收听",
                isAudio: true,
                audioUrl: "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46",
                time: "2017-11-9 10:10:42",
                audioLength: 23
            }
        ],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;
        that.setData({
            id: options.id,
            imgSite: app.globalData.imgSite,
            datas: that.data.pushlist[options.id - 1]
        });
        // that.getMesdetail();
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        // 使用 wx.createAudioContext 获取 audio 上下文 context
        this.audioCtx = wx.createAudioContext('myAudio');
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        var that = this;
        that.getMesdetail();
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    getMesdetail: function () {
        var that = this;
        app.getAjax('', {
            id: that.data.id,
        }, function (res) {
            if (res.data.msgcode == 1) {
                that.setData({
                    msgData: res.data.data
                });
            } else {
                wx.showLoading({
                    title: res.data.msg,
                    icon: 'warn',
                    success: function (res) {
                        that.setData({});
                    }
                });
                setTimeout(function () {
                    wx.hideLoading()
                }, 1000);
            }
        }, function (res) {
        })
    },
    audioPlay: function () {
        let that = this;
        that.audioCtx.play();
        that.setData({
            gifShow: true
        });
    },
    bindended: function () {
        let that = this;
        that.setData({
            gifShow: false
        });
    }
})