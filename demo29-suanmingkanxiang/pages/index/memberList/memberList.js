// pages/index/memberList/memberList.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        cardsDatas: [
            {
                id: 1,
                title: "炳坤专业算命，起名馆 起名 算命",
                des: "专业就是用心起好每个名字，专业就是给你最优的指导",
                label: "明星大师",
                number:974,
                poster: "../../../images/banner/banner2.png"
            },
            {
                id: 2,
                title: "炳坤专业算命，起名馆 起名 算命",
                des: "专业就是用心起好每个名字，专业就是给你最优的指导",
                label: "明星大师",
                number: 974,
                poster: "../../../images/banner/banner3.png"
            }, {
                id: 3,
                number: 974,
                title: "炳坤专业算命，起名馆 起名 算命",
                des: "专业就是用心起好每个名字，专业就是给你最优的指导",
                label: "明星大师",
                poster: "../../../images/banner/banner4.png"
            }, {
                id: 4,
                number: 974,
                title: "炳坤专业算命，起名馆 起名 算命",
                des: "专业就是用心起好每个名字，专业就是给你最优的指导",
                label: "明星大师",
                poster: "../../../images/banner/banner2.png"
            }, {
                id: 5,
                number: 974,
                title: "炳坤专业算命，起名馆 起名 算命",
                des: "专业就是用心起好每个名字，专业就是给你最优的指导",
                label: "明星大师",
                poster: "../../../images/banner/banner3.png"
            },
            {
                id: 6,
                number: 974,
                title: "炳坤专业算命，起名馆 起名 算命",
                des: "专业就是用心起好每个名字，专业就是给你最优的指导",
                label: "明星大师",
                poster: "../../../images/banner/banner4.png"
            }
        ],
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
    lookDetail: function (e) {
        wx.navigateTo({
            url: '../memberDetail/memberDetail?id=' + e.currentTarget.dataset.id,
        })
    }
})