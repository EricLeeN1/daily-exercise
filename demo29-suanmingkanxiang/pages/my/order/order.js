// pages/my/order/order.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs: ["我的订单", "服务订单"],
        tabs1: ["未完成", "已完成", "投诉中", "投诉成功", "投诉失败"],
        tabs2: ["全部", "待付款", "待发货", "待收货", "待评价"],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let that = this,
            type = options.type;
        that.setData({
            type: type,
            activeIndex: type ? type : 0,
            activeIndex1: type ? type : 0,
            sliderOffset: 119,
            sliderOffset1: (type) * 75
        });
    },
    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft - 0 + 6,
            activeIndex: e.currentTarget.dataset.id
        });
    },
    tabClick1: function (e) {
        this.setData({
            sliderOffset1: e.currentTarget.offsetLeft,
            activeIndex1: e.currentTarget.dataset.id
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