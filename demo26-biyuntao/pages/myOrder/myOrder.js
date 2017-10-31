// pages/myOrder/myOrder.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs: ["全部", "待付款", "待发货", "待收货", "待评价"],
        orderListAll: [
            {
                logo: "../../images/icon/logo.png",
                id: 1,
                name: "避孕套专卖店",
                status: 0,
                goods: [
                    {
                        logo: '../../images/new/logo@2x.png',
                        name: '杜蕾斯，低价风暴，让爱更安全。全球第一安全套品牌，杜蕾斯，低价风暴，让爱更安全。全球第一安全套品牌。杜蕾斯...',
                        size: "灰色 大盒装",
                        price: 66.66,
                        number: 1
                    },
                    {
                        logo: '../../images/new/logo@2x.png',
                        name: '杜蕾斯，低价风暴，让爱更安全。全球第一安全套品牌，杜蕾斯，低价风暴，让爱更安全。全球第一安全套品牌。杜蕾斯...',
                        size: "灰色 大盒装",
                        price: 66.66,
                        number: 1
                    },
                    {
                        logo: '../../images/new/logo@2x.png',
                        name: '杜蕾斯，低价风暴，让爱更安全。全球第一安全套品牌，杜蕾斯，低价风暴，让爱更安全。全球第一安全套品牌。杜蕾斯...',
                        size: "灰色 大盒装",
                        price: 66.66,
                        number: 1
                    }
                ],
                priceAll: 66.66 * 3
            },
            {
                logo: "../../images/icon/logo.png",
                id: 1,
                name: "避孕套专卖店",
                status: 1,
                goods: [
                    {
                        logo: '../../images/new/logo@2x.png',
                        name: '杜蕾斯，低价风暴，让爱更安全。全球第一安全套品牌，杜蕾斯，低价风暴，让爱更安全。全球第一安全套品牌。杜蕾斯...',
                        size: "灰色 大盒装",
                        price: 66.66,
                        number: 1
                    }
                ],
                priceAll: 66.66 * 1
            },
            {
                logo: "../../images/icon/logo.png",
                id: 1,
                name: "避孕套专卖店",
                status: 2,
                goods: [
                    {
                        logo: '../../images/new/logo@2x.png',
                        name: '杜蕾斯，低价风暴，让爱更安全。全球第一安全套品牌，杜蕾斯，低价风暴，让爱更安全。全球第一安全套品牌。杜蕾斯...',
                        size: "灰色 大盒装",
                        price: 66.66,
                        number: 1
                    },
                    {
                        logo: '../../images/new/logo@2x.png',
                        name: '杜蕾斯，低价风暴，让爱更安全。全球第一安全套品牌，杜蕾斯，低价风暴，让爱更安全。全球第一安全套品牌。杜蕾斯...',
                        size: "灰色 大盒装",
                        price: 66.66,
                        number: 1
                    }
                ],
                priceAll: 66.66 * 2
            }
        ]
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
            sliderOffset: (type) * 75
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

    },
    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.dataset.id
        });
    }
})