// pages/qAndA/qAndA.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        icon: {
            banner: "../../images/banner/banner2.png",
            audio: "../../images/icon/audio3.png",
            ask: "../../images/icon/ask.png"
        },
        lists: [
            {
                id: 1,
                logo: "../myShare/1.jpg",
                question: "我的另一半和我是什么关系，在哪里认识,我的另一半和我是什么关系，在哪里认识，我的另一半和我是什么关系，在哪里认识",
                price: "5元",
                number: 7
            },
            {
                id: 2,
                logo: "../myShare/2.jpg",
                question: "我的另一半和我是什么关系，在哪里认识",
                price: "免费",
                number: 7
            },
            {
                id: 3,
                logo: "../myShare/3.jpg",
                question: "我的另一半和我是什么关系，在哪里认识",
                price: "10元",
                number: 7
            },
            {
                id: 4,
                logo: "../myShare/4.jpg",
                question: "我的另一半和我是什么关系，在哪里认识",
                price: "20元",
                number: 7
            },
            {
                id: 5,
                logo: "../myShare/1.jpg",
                question: "我的另一半和我是什么关系，在哪里认识",
                price: "5元",
                number: 7
            },
            {
                id: 6,
                logo: "../myShare/2.jpg",
                question: "我的另一半和我是什么关系，在哪里认识",
                price: "免费",
                number: 7
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    lookDetail: function (e) {
        let that = this, id = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: 'answer/answer?id=' + id,
        })
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
    askQuestion: function () {
        wx.navigateTo({
            url: 'ask/ask',
        });
    }
})