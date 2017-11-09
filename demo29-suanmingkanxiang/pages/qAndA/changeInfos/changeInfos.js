// pages/qAndA/changeInfos/changeInfos.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        icon: {
            success: "../../../images/icon/success.png",
            fail: "../../../images/icon/fail.png"
        },
        items: [
            {
                value: 1,
                name: "男"
            },
            {
                value: 0,
                name: "女"
            }
        ]
    },
    bindDateChange: function (e) {
        let that = this, value = e.detail.value, userInfos = that.data.userInfos;
        userInfos.date = value
        that.setData({
            userInfos: userInfos
        });
    },
    formSubmit: function (e) {
        console.log('form发生了submit事件，携带数据为：', e.detail.value);
        let that = this, value = e.detail.value, userInfos = that.data.userInfos;
        if (userInfos.gender && userInfos.phone && userInfos.date && userInfos.time) {
            wx.showToast({
                image: that.data.icon.success,
                title: '修改成功',
            });
            userInfos.gender = userInfos.gender;
            userInfos.phone = userInfos.phone;
            userInfos.date = userInfos.date;
            userInfos.time = userInfos.time;
            wx.setStorage({
                key: 'userInfos',
                data: userInfos,
                success: function (res) {
                    wx, wx.navigateBack({
                        delta: 1,
                    });
                }
            });

        } else {
            wx.showToast({
                image: that.data.icon.fail,
                title: '信息不完整哦',
            });
        }
    },
    formReset: function () {
        console.log('form发生了reset事件');
    },
    bindTimeChange: function (e) {
        let that = this, value = e.detail.value, userInfos = that.data.userInfos;
        userInfos.time = value
        that.setData({
            userInfos: userInfos
        });
    },
    bindinput: function (e) {
        let that = this, value = e.detail.value, userInfos = that.data.userInfos;
        userInfos.phone = value
        that.setData({
            userInfos: userInfos
        });
    },
    radioChange: function (e) {
        let that = this, value = e.detail.value, userInfos = that.data.userInfos;
        userInfos.gender = value
        that.setData({
            userInfos: userInfos
        });
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
                    userInfos: res.data
                });
            },
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