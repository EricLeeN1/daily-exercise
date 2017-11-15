// pages/goodsDetails/pay/pay.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        icon: {
            address: "../../../images/icon/address1.png",
            more: "../../../images/icon/more1.png",
            reduce: '../../../images/icon/reduce.png',
            add: '../../../images/icon/add.png',
        },
        datas: {
            name: "力争上游",
            phoneNumber: "18888888888",
            province: "河南省",
            city: "郑州市",
            town: "管城区",
            street: "东大街8号",
        },
        orderListAll:
            {
                logo: "../../../images/banner/banner6.jpg",
                id: 1,
                name: "吉物开光专卖",
                status: 0,
                goods: [
                    {
                        logo: '../mascot/logo1.png',
                        name: '好运缘开光黑曜石貔貅(手链+吊坠)组合，采用几近失传的貔貅手链选料经方——天然招财辟邪制煞防小人黑曜石材质,其极度辟邪，强力化解驱除各种负能量，是所有宝石之中吸纳性最强的宝石；',
                        size: "灰色 礼盒装",
                        price: 66.66,
                        number: 1
                    },
                    // {
                    //     logo: '../mascot/logo1.png',
                    //     name: '好运缘开光黑曜石貔貅(手链+吊坠)组合，采用几近失传的貔貅手链选料经方——天然招财辟邪制煞防小人黑曜石材质,其极度辟邪，强力化解驱除各种负能量，是所有宝石之中吸纳性最强的宝石；',
                    //     size: "灰色 礼盒装",
                    //     price: 66.66,
                    //     number: 1
                    // },
                    // {
                    //     logo: '../mascot/logo1.png',
                    //     name: '好运缘开光黑曜石貔貅(手链+吊坠)组合，采用几近失传的貔貅手链选料经方——天然招财辟邪制煞防小人黑曜石材质,其极度辟邪，强力化解驱除各种负能量，是所有宝石之中吸纳性最强的宝石；',
                    //     size: "灰色 礼盒装",
                    //     price: 66.66,
                    //     number: 1
                    // }
                ],
                priceAll: 66.66 * 3
            }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.finallyPay();
    },
    finallyPay: function () {
        let that = this, datas = that.data.orderListAll.goods, priceAll = 0;
        datas.forEach(function (ele, index, arr) {
            priceAll += (ele.price * ele.number);
        });
        priceAll = Math.floor(priceAll * 100) / 100
        that.setData({
            priceAll: priceAll
        });
    },
    changeAddress: function () {
        wx.navigateTo({
            url: '../my/address/address',
        });
    },
    getChoiceNumber: function (e) {
        let that = this,
            orderListAll = that.data.orderListAll,
            index = e.currentTarget.dataset.index,
            number = e.detail.value;
        orderListAll.goods[index].number = number;
        this.setData({
            orderListAll: orderListAll
        });
        that.finallyPay();
    },
    reduceChoiceNumber: function (e) {
        let that = this,
            orderListAll = that.data.orderListAll,
            index = e.currentTarget.dataset.index,
            number = orderListAll.goods[index].number;
        number--;
        if (number == 0) {
            wx.showModal({
                title: '温馨提示',
                content: '您将删除此商品？确定删除吗',
                confirmText: "确定删除",
                confirmColor: "#f55053",
                cancelText: "留着吧",
                success: function () {
                    console.log(111);
                    orderListAll.goods.splice(index, 1);
                    that.setData({
                        orderListAll: orderListAll
                    });
                    that.finallyPay();
                },
                fail: function () {
                    orderListAll.goods[index].number = 1;
                    that.setData({
                        orderListAll: orderListAll
                    });
                    that.finallyPay();
                }
            })
        } else {
            orderListAll.goods[index].number = number;
            that.setData({
                orderListAll: orderListAll
            });
            that.finallyPay();
        }
    },
    addChoiceNumber: function (e) {
        let that = this,
            orderListAll = that.data.orderListAll,
            index = e.currentTarget.dataset.index,
            number = orderListAll.goods[index].number;
        number++;
        orderListAll.goods[index].number = number;
        this.setData({
            orderListAll: orderListAll
        });
        that.finallyPay();
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
    toDetail: function () {
        wx.switchTab({
            url: "/pages/mascot/mascot",
        })
    }
})