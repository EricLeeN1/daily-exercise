const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs: ["今日秒杀", "明日预告", "后日预告"],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        page: 0,
        icon: {
            thunder: '../../images/icon/thunder.png',
            time: '../../images/icon/time.png',
            clock: '../../images/icon/clock.png',
        },
        noDatas: false,
        time: [
            "12:00",
            "0:00",
            "0:00",
        ],
        seckillDatas: [
            {
                logo: '../../images/new/logo@2x.png',
                id: 1,
                percent: "20",
                title: "杜蕾斯",
                des: "杜蕾斯，低价风暴，让爱更安全。全球第一安全套品牌，杜蕾斯，低价风暴，让爱更安全。全球第一安全套品牌。杜蕾斯...",
                priceNow: "66.66",
                priceDel: "88.88",
                goodsNumber: "666"
            },
            {
                logo: '../../images/new/logo@2x.png',
                id: 1,
                percent: "20",
                title: "杜蕾斯",
                des: "杜蕾斯，低价风暴，让爱更安全。全球第一安全套品牌，杜蕾斯，低价风暴，让爱更安全。全球第一安全套品牌。杜蕾斯...",
                priceNow: "66.66",
                priceDel: "88.88",
                goodsNumber: "666"
            },
            {
                logo: '../../images/new/logo@2x.png',
                id: 1,
                percent: "20",
                title: "杜蕾斯",
                des: "杜蕾斯，低价风暴，让爱更安全。全球第一安全套品牌，杜蕾斯，低价风暴，让爱更安全。全球第一安全套品牌。杜蕾斯...",
                priceNow: "66.66",
                priceDel: "88.88",
                goodsNumber: "666"
            },
            {
                logo: '../../images/new/logo@2x.png',
                id: 1,
                percent: "20",
                title: "杜蕾斯",
                des: "杜蕾斯，低价风暴，让爱更安全。全球第一安全套品牌，杜蕾斯，低价风暴，让爱更安全。全球第一安全套品牌。杜蕾斯...",
                priceNow: "66.66",
                priceDel: "88.88",
                goodsNumber: "666"
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const that = this;
        that.data.interval = setInterval(function () {
            that.timer1();
        }, 1000);
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
    },
    settingClock: function (e) {

    },
    checkTime: function (i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    },
    timer1: function () {
        //that.data.datas.buytime是接口返回的当前遗留时间
        var buytime = 1509253458;
        var that = this,
            leftTime = new Date().getTime(),
            // leftTime = new Date().getTime() - (buytime * 1000);
            // leftTime = 15 * 60 * 1000 - leftTime;
            leftTime = 15 * 60 * 1000;
        var minute = parseInt(leftTime / 1000 / 60 % 60, 10);
        var second = parseInt(leftTime / 1000 % 60, 10);
        var min = this.checkTime(minute);
        var sec = this.checkTime(second);
        that.setData({
            min: {
                min0: min.toString().charAt(0),
                min1: min.toString().charAt(1)
            },
            sec: {
                sec0: sec.toString().charAt(0),
                sec1: sec.toString().charAt(1)
            }
        })
        if (leftTime < 1000) {
            clearInterval(this.data.interval);
        }
    }
})