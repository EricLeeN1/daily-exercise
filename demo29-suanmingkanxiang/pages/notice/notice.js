// pages/notice/notice.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        icon: {
            banner: "../../images/banner/banner2.png",
            index: "../../images/tabbar/tab1-sel.png"
        },
        qrcode: [
            {
                logo: "../../images/notice/qr1.jpg",
                text: "客服微信"
            },
            {
                logo: "../../images/notice/qr2.jpg",
                text: "微信公众账号"
            }
        ],
        datas1: [
            "1. 收费起测,非诚勿扰；",
            "2. 求测者需提供较准确的生辰等。例：林心如，女，阴历1976年6月18日约晚上21:30分；",
            "3. 提供本人手面相未化妆近照。见照相范例；",
            "4. 网上预约的，先付费再预算；",
            "5. 付款成功，即安排预测。预测结果正常三个工作日；",
            "6. 按约定时间用电话、微信、QQ上进行预测互动；",
            "7. 如果要当面预约的，约定好日期本人亲来就可，面测后再付费。",
        ],
        datas2: [
            "1. 改名者或起名者需提供较准确的生辰等。例：真心善，女，阴历1976年6月18日约晚上31:30分；",
            "2. 起名：男宝宝提供父亲及祖父姓名；女宝宝提供母亲及祖母姓名；",
            "3. 网上起名改名的，先付费再起名或改名；",
            "4. 付款成功，即安排改名或起名，正常三个工作日有结果。",
            "5. 按约定时间用微信、QQ上发送约定好的N个新名字。",
            "6. 出现极少数不太满意的，再取N个名字发送。"
        ],
        datas3: [
            {
                images: [
                    "../../images/notice/1.jpg",
                    "../../images/notice/2.jpg"
                ],
                title: "正面面相图",
                des: "手面相八字综合预测示范图"
            },
            {
                images: [
                    "../../images/notice/3.jpg",
                    "../../images/notice/4.jpg"
                ],
                title: "侧面面相图",
                des: "手面相八字综合预测示范图"
            },
            {
                images: [
                    "../../images/notice/5.jpg",
                    "../../images/notice/6.jpg"
                ],
                title: "手相图",
                des: "手面相八字综合预测示范图"
            },
            {
                images: [
                    "../../images/notice/7.jpg",
                    "../../images/notice/8.jpg"
                ],
                title: "手相图",
                des: "手面相八字综合预测示范图"
            }
        ]
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
    backToIndex: function () {
        wx.switchTab({
            url: '../index/index',
        })
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