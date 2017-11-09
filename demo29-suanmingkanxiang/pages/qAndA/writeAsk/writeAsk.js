// pages/qAndA/writeAsk/writeAsk.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        icon: {
            success: "../../../images/icon/success.png",
            fail: "../../../images/icon/fail.png"
        },
        moneyLists: [
            {
                money: 5
            },
            {
                money: 10
            },
            {
                money: 15
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let that = this;
        wx.getStorage({
            key: 'userInfos',
            success: function (res) {
                that.setData({
                    options: options,
                    userInfos: res.data
                });
            },
        })
    },
    moneyChange: function (e) {
        console.log(e.currentTarget.dataset.index);
        let that = this, index = e.currentTarget.dataset.index;
        that.setData({
            activeIndex: index
        });
    },
    changeFiles: function () {
        wx.navigateTo({
            url: '../changeInfos/changeInfos',
        });
    },
    formSubmit: function (e) {
        console.log('form发生了submit事件，携带数据为：', e.detail.value);
        let that = this, options = that.data.options, value = e.detail.value.textarea, active = that.data.activeIndex;
        if (value == "") {
            wx.showToast({
                image: that.data.icon.fail,
                title: '您什么都没写呢！',
            });
        } else if (active >= 0) {
            wx.showToast({
                image: that.data.icon.success,
                title: '发布成功',
            });
            wx, wx.navigateBack({
                delta: 1,
            });
        } else {
            wx.showToast({
                image: that.data.icon.fail,
                title: '没有选择赏金哦',
            });
        }
    },
    bindinput: function (e) {
        console.log(e.detail.value);
        let that = this, value = e.detail.value, options = that.data.options;
        options.ask = value;
        that.setData({
            options: options
        });
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        let that = this;
        wx.getStorage({
            key: 'userInfos',
            success: function (res) {
                that.setData({
                    userInfos: res.data
                });
            },
        })
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

    }
})