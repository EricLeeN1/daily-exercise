// pages/goodsDetails/goodsDetails.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        swiperCurrent: 1,
        commentsLabelLists: [
            {
                name: "商家态度好",
                num: 123
            },
            {
                name: "物流速度快",
                num: 123
            },
            {
                name: "商品质量好",
                num: 123
            },
            {
                name: "物美价廉",
                num: 123
            }
        ],
        commentsLists: [
            {
                avatarUrl: "../../images/icon/logo.png",
                name: "客户1",
                time: "2017-10-30",
                des: "杜蕾斯，低价风暴，让爱更安全。全球第一安全套品牌，杜蕾斯，低价风暴，让爱更安全。全球第一安全套品牌。杜蕾斯...",
                color: "红色",
                size: "超大"
            },
            {
                avatarUrl: "../../images/icon/logo.png",
                name: "客户1",
                time: "2017-10-30",
                des: "杜蕾斯，低价风暴，让爱更安全。全球第一安全套品牌，杜蕾斯，低价风暴，让爱更安全。全球第一安全套品牌。杜蕾斯...",
                color: "红色",
                size: "超大"
            }
        ],
        serviceModal: false,
        choiceModal: false,
        readyToBuy: false,
        banner: {
            indicatorActiveColor: "rgb(246,83,20)",
            indicatorColor: "#00a1f1",
            indicatorDots: true,
            autoplay: true,
            interval: 5000,
            duration: 1000
        },
        serviceModalDatas: [
            {
                title: "全场包邮",
                des: "所有商品均无条件包邮"
            },
            {
                title: "七天退换",
                des: "商家承诺七天无理由退换货"
            },
            {
                title: "48小时发货",
                des: "若超时未发货，商家将补偿3元无门槛代金券"
            },
            {
                title: "假一赔十",
                des: "若收到的商品是假冒品牌，可获得加倍赔偿"
            }
        ],
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
            goodsNumber: "666",
            soldnumber: "666",
            commentsNum: 999,
            price: 123,
            choice: [
                {
                    type: "颜色",
                    style: ["白色", "黑色", "酒红色", "驼色", "墨绿色", "灰色", "粉色"]
        },
                {
                    type: "尺码",
                    style: ["s", "m", "xl", "xxl", "xxl"]
                }
            ]
        },
        icon: {
            home: "../../images/tabBar/home.png",
            close: "../../images/icon/close.png",
            right: "../../images/icon/right.png",
            service: "../../images/icon/service.png",
            share: '../../images/icon/share-1.png',
            logo: '../../images/icon/logo.png',
            more: '../../images/icon/more1.png',
            serviceMail: '../../images/icon/service-mail.png',
            serviceSend: '../../images/icon/service-send.png',
            serviceSeven: '../../images/icon/service-seven.png',
            serviceCompensate: '../../images/icon/service-compensate.png',
            reduce: '../../images/icon/reduce.png',
            add: '../../images/icon/add.png',
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let that = this,
            datas = that.data.datas,
            length = datas.choice.length,
            activeArr = [];

        for (let i = 0; i = length; i++) {
            activeArr[i] = {
                activeIndex: -1
            };
        }
        ;
        // datas.activeArr = activeArr;
        // console.log(that.data.datas.activeArr);
        // that.setData({
        //   datas: datas
        // });
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
    swiperChange: function (e) {
        const that = this, current = e.detail.current - 0 + 1;
        that.setData({
            swiperCurrent: current
        });
    },
    showServiceModal: function () {
        this.setData({
            serviceModal: true
        });
    },
    closeServiceModal: function () {
        this.setData({
            serviceModal: false
        });
    },
    showChoiceModal: function () {
        this.setData({
            choiceModal: true
        });
    },
    closeChoiceModal: function () {
        this.setData({
            choiceModal: false
        });
    },
    readyToBuy: function () {

    },
    buyNow: function () {
        this.setData({
            choiceModal: true
        });
    },
    choiceChange: function (e) {
        console.log(e);
        const that = this,
            datas = that.data.datas,
            index = e.currentTarget.dataset.index,
            iindex = e.currentTarget.dataset.iindex,
            length = datas.choice.length;
    }
})