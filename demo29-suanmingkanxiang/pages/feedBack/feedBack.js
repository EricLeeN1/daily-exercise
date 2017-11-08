var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        autoHeight: false,
        loading: false,
        toastUrl: {
            success: "../../images/toast/success.png",
            fail: "../../images/toast/fail.png",
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
    },
    input: function (e) {
        var that = this;
        if (e.detail.value.length >= 90) {
            that.setData({
                autoHeight: true,
                text: e.detail.value
            });
        } else {
            that.setData({
                autoHeight: false,
                text: e.detail.value
            });
        }
    },
    submitOpinion: function () {
        var that = this, text = that.data.text || '';
        if (text.length > 0) {
            app.postAjax('', {}, function (res) {
                wx.showToast({
                    title: "反馈成功",
                    image: that.data.toastUrl.success
                });
                setTimeout(function () {
                    wx.hideToast();
                    that.setData({
                        autoHeight: false,
                        text: ''
                    });
                }, 2000);
            }, function (res) {
                wx.showToast({
                    title: "反馈失败",
                    image: that.data.toastUrl.fail
                });
                setTimeout(function () {
                    wx.hideToast();
                }, 2000);
            });
        } else {
            wx.showModal({
                title: '平台提示:',
                content: '您还什么都没写啊!',
                confirmColor: '#f55053'
            })
        }
    },
    getPhoneNumber: function (e) {
        console.log(e.detail.errMsg)
        console.log(e.detail.iv)
        console.log(e.detail.encryptedData)
    }
})