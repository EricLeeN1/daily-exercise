// pages/goodsDetails/goodsDetails.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        banner: {
            indicatorActiveColor: "rgb(246,83,20)",
            indicatorColor: "#00a1f1",
            indicatorDots: true,
            autoplay: true,
            interval: 5000,
            duration: 1000
        },
        imgUrls: [
            "../../images/banner/banner@2x.png",
            "../../images/banner/banner@2x.png",
            "../../images/banner/banner@2x.png"
        ],
        datas: {
            logo: '../../images/new/logo@2x.png',
            id: 1,
            percent: "20",
            title: "杜蕾斯",
            des: "杜蕾斯，低价风暴，让爱更安全。全球第一安全套品牌，杜蕾斯，低价风暴，让爱更安全。全球第一安全套品牌。杜蕾斯...",
            priceNow: "66.66",
            priceDel: "88.88",
            goodsNumber: "666"
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

    }
})