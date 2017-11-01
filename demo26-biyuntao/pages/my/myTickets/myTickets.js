// pages/my/myTickets/myTickets.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        icon: {
            notickets: "../../../images/icon/tickets.png",
            fullcutUrl: '../../../images/icon/ktv_detail_bg_manjian@2x.png'
        },
        tabs: ["未使用", "已使用", "已过期"],
        activeIndex: 0,
        sliderOffset: 0,
        unUsedList: [
            {
                id: 1,
                name: "抵值券",
                number: "3",
                btime: "2017/11/1",
                etime: "2017/11/8",
                status: 0
            },
            {
                id: 1,
                name: "抵值券",
                number: "3",
                btime: "2017/11/1",
                etime: "2017/11/8",
                status: 0
            },
            {
                id: 1,
                name: "抵值券",
                number: "3",
                btime: "2017/11/1",
                etime: "2017/11/8",
                status: 0
            }
        ],
        usedList: [
            {
                id: 1,
                name: "抵值券",
                number: "3",
                btime: "2017/11/1",
                etime: "2017/11/8",
                status: 1
            },
            {
                id: 1,
                name: "抵值券",
                number: "3",
                btime: "2017/11/1",
                etime: "2017/11/8",
                status: 1
            },
            {
                id: 1,
                name: "抵值券",
                number: "3",
                btime: "2017/11/1",
                etime: "2017/11/8",
                status: 1
            }],
        overdueList: [],
    },
    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.dataset.id
        });
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
    goGoodsList: function () {
        wx.navigateTo({
            url: '../../goodslists/goodslists?type=1',
        });
    }
})