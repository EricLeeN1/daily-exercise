const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs: ["男用品具", "女用器具 ", "避孕套", "情趣内衣", "延时喷剂", "保健护理", "性爱床椅"],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        page: 0,
        loading: false,
        noUser: false,
        listDatas: [
            {
                logo: "../../images/new/logo@2x.png",
                id: 1,
                name: "杜蕾斯，低价风暴。让爱更安全，全球第一安全套品牌。杜蕾斯，低价风",
                price: "66.66",
                number: "666"
            },
            {
                logo: "../../images/new/logo@2x.png",
                id: 1,
                name: "杜蕾斯，低价风暴。让爱更安全，全球第一安全套品牌。杜蕾斯，低价风",
                price: "66.66",
                number: "666"
            },
            {
                logo: "../../images/new/logo@2x.png",
                id: 1,
                name: "杜蕾斯，低价风暴。让爱更安全，全球第一安全套品牌。杜蕾斯，低价风",
                price: "66.66",
                number: "666"
            }, {
                logo: "../../images/new/logo@2x.png",
                id: 1,
                name: "杜蕾斯，低价风暴。让爱更安全，全球第一安全套品牌。杜蕾斯，低价风",
                price: "66.66",
                number: "666"
            }, {
                logo: "../../images/new/logo@2x.png",
                id: 1,
                name: "杜蕾斯，低价风暴。让爱更安全，全球第一安全套品牌。杜蕾斯，低价风",
                price: "66.66",
                number: "666"
            }, {
                logo: "../../images/new/logo@2x.png",
                id: 1,
                name: "杜蕾斯，低价风暴。让爱更安全，全球第一安全套品牌。杜蕾斯，低价风",
                price: "66.66",
                number: "666"
            }, {
                logo: "../../images/new/logo@2x.png",
                id: 1,
                name: "杜蕾斯，低价风暴。让爱更安全，全球第一安全套品牌。杜蕾斯，低价风",
                price: "66.66",
                number: "666"
            }, {
                logo: "../../images/new/logo@2x.png",
                id: 1,
                name: "杜蕾斯，低价风暴。让爱更安全，全球第一安全套品牌。杜蕾斯，低价风",
                price: "66.66",
                number: "666"
            }
        ],
        pagesize: 10,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let that = this,
            type = options.type;
        that.setData({
            type: type,
            activeIndex: type - 1 ? type - 1 : 0,
            sliderOffset: (type - 1) * 75
        });
        // that.getGoods();
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
        var that = this;
        wx.showLoading({
            title: 'loading...',
        });
        if (that.data.loading) return;
        that.setData({loading: true});
        setTimeout(() => {
            that.setData({
                loading: false,
            });
            // that.getGoods();
            wx.hideLoading();
        }, 3000);
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
    getGoods: function () {
        let that = this, type = that.data.type, url = '';
        switch (type) {
            case 1:
                // 请求返回男用品具的接口地址
                url = '';
                break;
            case 2:
                // 请求返回女用品具的接口地址
                url = '';
                break;
            case 3:
                // 请求返回避孕套的接口地址
                url = '';
                break;
            case 4:
                // 请求返回情趣内衣的接口地址
                url = '';
                break;
            case 5:
                // 请求返回延时喷剂的接口地址
                url = '';
                break;
            case 6:
                // 请求返回保健护理的接口地址
                url = '';
                break;
            default:
                // 请求返回性爱床椅的接口地址
                url = '';
        }
        ;
        app.getAjax(url, {
            //参数
        }, function (res) {
            //获取并数据
        })
    },
    lookDetail: function (e) {
        app.lookDetail(e);
    }
})