// pages/myOrder/myOrder.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs: ["全部", "待付款", "待发货", "待收货", "待评价"],
        orderListAll: [
            {
                logo: "../../../images/icon/logo.png",
                id: 1,
                name: "吉物开光专卖",
                status: 0,
                goods: [
                    {
                        logo: '../../mascot/logo1.png',
                        name: '好运缘开光黑曜石貔貅(手链+吊坠)组合，采用几近失传的貔貅手链选料经方——天然招财辟邪制煞防小人黑曜石材质,其极度辟邪，强力化解驱除各种负能量，是所有宝石之中吸纳性最强的宝石；',
                        size: "灰色 礼盒装",
                        price: 66.66,
                        number: 1
                    },
                    {
                        logo: '../../mascot/logo1.png',
                        name: '好运缘开光黑曜石貔貅(手链+吊坠)组合，采用几近失传的貔貅手链选料经方——天然招财辟邪制煞防小人黑曜石材质,其极度辟邪，强力化解驱除各种负能量，是所有宝石之中吸纳性最强的宝石；',
                        size: "灰色 礼盒装",
                        price: 66.66,
                        number: 1
                    },
                    {
                        logo: '../../mascot/logo1.png',
                        name: '好运缘开光黑曜石貔貅(手链+吊坠)组合，采用几近失传的貔貅手链选料经方——天然招财辟邪制煞防小人黑曜石材质,其极度辟邪，强力化解驱除各种负能量，是所有宝石之中吸纳性最强的宝石；',
                        size: "灰色 礼盒装",
                        price: 66.66,
                        number: 1
                    }
                ],
                priceAll: 66.66 * 3
            },
            {
                logo: "../../../images/icon/logo.png",
                id: 1,
                name: "吉物开光专卖",
                status: 1,
                goods: [
                    {
                        logo: '../../mascot/logo1.png',
                        name: '好运缘开光黑曜石貔貅(手链+吊坠)组合，采用几近失传的貔貅手链选料经方——天然招财辟邪制煞防小人黑曜石材质,其极度辟邪，强力化解驱除各种负能量，是所有宝石之中吸纳性最强的宝石；',
                        size: "灰色 礼盒装",
                        price: 66.66,
                        number: 1
                    }
                ],
                priceAll: 66.66 * 1
            },
            {
                logo: "../../../images/icon/logo.png",
                id: 1,
                name: "吉物开光专卖",
                status: 2,
                goods: [
                    {
                        logo: '../../mascot/logo1.png',
                        name: '好运缘开光黑曜石貔貅(手链+吊坠)组合，采用几近失传的貔貅手链选料经方——天然招财辟邪制煞防小人黑曜石材质,其极度辟邪，强力化解驱除各种负能量，是所有宝石之中吸纳性最强的宝石；',
                        size: "灰色 礼盒装",
                        price: 66.66,
                        number: 1
                    },
                    {
                        logo: '../../mascot/logo1.png',
                        name: '好运缘开光黑曜石貔貅(手链+吊坠)组合，采用几近失传的貔貅手链选料经方——天然招财辟邪制煞防小人黑曜石材质,其极度辟邪，强力化解驱除各种负能量，是所有宝石之中吸纳性最强的宝石；',
                        size: "灰色 礼盒装",
                        price: 66.66,
                        number: 1
                    }
                ],
                priceAll: 66.66 * 2
            },
            {
                logo: "../../../images/icon/logo.png",
                id: 1,
                name: "吉物开光专卖",
                status: 3,
                goods: [
                    {
                        logo: '../../mascot/logo1.png',
                        name: '好运缘开光黑曜石貔貅(手链+吊坠)组合，采用几近失传的貔貅手链选料经方——天然招财辟邪制煞防小人黑曜石材质,其极度辟邪，强力化解驱除各种负能量，是所有宝石之中吸纳性最强的宝石；',
                        size: "灰色 礼盒装",
                        price: 66.66,
                        number: 1
                    },
                    {
                        logo: '../../mascot/logo1.png',
                        name: '好运缘开光黑曜石貔貅(手链+吊坠)组合，采用几近失传的貔貅手链选料经方——天然招财辟邪制煞防小人黑曜石材质,其极度辟邪，强力化解驱除各种负能量，是所有宝石之中吸纳性最强的宝石；',
                        size: "灰色 礼盒装",
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
    },
    toComments: function (e) {
        let that = this,
            id = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: '../toComments/toComments?id=' + id,
        });
    },
    lookForLogistics: function (e) {
        let that = this,
            id = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: '../toLogistics/toLogistics?id=' + id,
        });
    },
    delyToReceive: function (e) {
        let that = this,
            id = e.currentTarget.dataset.id,
            index = e.currentTarget.dataset.index,
            datas = that.data.orderListAll;
        wx.showModal({
            title: '平台提示',
            content: '亲，距离结束时间3天才可以申请哦!',
            confirmColor: "#f55053",
            confirmText: "到时再说",
            success: function (res) {
            },
            fail: function (res) {

            }
        });
    },
    readyToReceive: function (e) {
        let that = this,
            id = e.currentTarget.dataset.id,
            index = e.currentTarget.dataset.index,
            datas = that.data.orderListAll;
        wx.showModal({
            title: '平台提示',
            content: '是否确认收货?',
            confirmColor: "#f55053",
            confirmText: "确定",
            success: function (res) {
                datas[index].status = 3;
                that.setData({
                    orderListAll: datas
                })
            },
            fail: function (res) {

            }
        });
    },
    buyAgain: function (e) {
        let that = this,
            id = e.currentTarget.dataset.id;
        //吊起接口支付；
        wx.navigateTo({
            url: '../../pay/pay',
        })
    },
    deleteThisOrder: function (e) {
        let that = this,
            id = e.currentTarget.dataset.id,
            index = e.currentTarget.dataset.index,
            datas = that.data.orderListAll;
        wx.showModal({
            title: '平台提示',
            content: '是否删除此订单?',
            confirmColor: "#f55053",
            confirmText: "确定",
            success: function (res) {
                datas.splice(index, 1);
                that.setData({
                    orderListAll: datas
                });
            },
            fail: function (res) {

            }
        });
    }
})