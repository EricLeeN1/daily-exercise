// pages/qAndA/ask/ask.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        icon: {
            edit: "../../../images/icon/edit1.png"
        },
        datas: {
            ticketsNumber: 6,
            lists: [
                {
                    id: 1,
                    ask: "2017年我的财运好不好?"
                },
                {
                    id: 2,
                    ask: "我将来的事业运好不好?"
                },
                {
                    id: 1,
                    ask: "2017年我的财运好不好?"
                },
                {
                    id: 2,
                    ask: "我将来的事业运好不好?"
                },
                {
                    id: 1,
                    ask: "2017年我的财运好不好?"
                },
                {
                    id: 2,
                    ask: "我将来的事业运好不好?"
                },
                {
                    id: 1,
                    ask: "2017年我的财运好不好?"
                },
                {
                    id: 1,
                    ask: "2017年我的财运好不好?"
                },
                {
                    id: 2,
                    ask: "我将来的事业运好不好?"
                },
                {
                    id: 1,
                    ask: "2017年我的财运好不好?"
                },
                {
                    id: 1,
                    ask: "2017年我的财运好不好?"
                },
                {
                    id: 2,
                    ask: "我将来的事业运好不好?"
                },
                {
                    id: 1,
                    ask: "2017年我的财运好不好?"
                },
                {
                    id: 1,
                    ask: "2017年我的财运好不好?"
                },
                {
                    id: 2,
                    ask: "我将来的事业运好不好?"
                }
            ]
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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

    },
    writeAsk: function (e) {
        var that = this, index = e.currentTarget.dataset.index || 0,
            ask = index == 0 ? '' : that.data.datas.lists[index - 1].ask;
        wx.navigateTo({
            url: '../writeAsk/writeAsk?ask=' + ask,
        });
    }
})