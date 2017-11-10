// pages/index/memberList2/memberList2.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        icon: {
            banner: "../../../images/banner/banner2.png",
            level: "../../../images/icon/level.png",
            levelpurple: "../../../images/icon/levelpurple.png",
            levelblue: "../../../images/icon/levelblue.png",
            levelgreen: "../../../images/icon/levelgreen.png",
            levelred: "../../../images/icon/level.png",
            busyTrue: "../../../images/icon/busy.png",
            busyFalse: "../../../images/icon/busyFalse.png",
            edit: "../../../images/icon/edit.png",
        },
        memberLists: [
            {
                id: 1,
                logo: "../../../images/banner/banner6.jpg",
                level: 1,
                name: "炳坤专业算命，起名馆 起名 算命",
                des: "专业就是用心起好每个名字，专业就是给你最优的指导,专业就是用心起好每个名字，专业就是给你最优的指导",
                busy: 1,
                price: 15,
                active: 556,
                orderNumber: 666
            },
            {
                id: 2,
                logo: "../../../images/banner/banner6.jpg",
                level: 2,
                name: "炳坤专业算命，起名馆 起名 算命",
                des: "专业就是用心起好每个名字，专业就是给你最优的指导,专业就是用心起好每个名字，专业就是给你最优的指导",
                busy: 0,
                price: 15,
                active: 556,
                orderNumber: 666
            },
            {
                id: 3,
                logo: "../../../images/banner/banner6.jpg",
                level: 3,
                name: "炳坤专业算命，起名馆 起名 算命",
                des: "专业就是用心起好每个名字，专业就是给你最优的指导,专业就是用心起好每个名字，专业就是给你最优的指导",
                busy: 0,
                price: 15,
                active: 556,
                orderNumber: 666
            },
            {
                id: 3,
                logo: "../../../images/banner/banner6.jpg",
                level: 4,
                name: "炳坤专业算命，起名馆 起名 算命",
                des: "专业就是用心起好每个名字，专业就是给你最优的指导,专业就是用心起好每个名字，专业就是给你最优的指导",
                busy: 1,
                price: 15,
                active: 556,
                orderNumber: 666
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
        });
    }
})