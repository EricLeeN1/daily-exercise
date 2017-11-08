// pages/my/my.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        icon: {
            more: "../../images/icon/more.png"
        },
        userColumns: [{
            url: '../myOrder/myOrder?type=1',
            icon: '../../images/icon/daifukuan.png',
            title: "待付款",
            newNumber: 0
        },
        {
            url: '../myOrder/myOrder?type=2',
            icon: '../../images/icon/daifahuo.png',
            title: "待发货",
            newNumber: 1
        },
        {
            url: '../myOrder/myOrder?type=3',
            icon: '../../images/icon/daishouhuo.png',
            title: "待收货",
            newNumber: 3
        },
        {
            url: '../myOrder/myOrder?type=4',
            icon: '../../images/icon/daipingjia.png',
            title: "待评价",
            newNumber: 10
        },
        // {
        //     url: 'myTickets/myTickets',
        //     icon: '../../images/icon/youhuiquan.png',
        //     title: "我的优惠券"
        // }
        ],
        userRows: [
            {
                fun: 'settingAddress',
                icon: '../../images/icon/address.png',
                title: "收货地址"
            },
            {
                fun: '',
                icon: '../../images/icon/service1.png',
                title: "客服与投诉"
            }, {
                fun: 'myShare',
                icon: '../../images/icon/share-2.png',
                title: "我的分享"
            }, {
                fun: 'attendUs',
                icon: '../../images/icon/audio.png',
                title: "我的语音"
            }],
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {
        let that = this;
        if (app.globalData.userInfo) {
            that.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (that.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                that.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    that.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
    },
    getUserInfo: function (e) {
        app.globalData.userInfo = e.detail.userInfo;
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
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

    // /**
    //  * 用户点击右上角分享
    //  */
    // onShareAppMessage: function () {

    // }
    myShare: function () {
        app.myShare();
    },
    attendUs: function () {
        app.attendUs();
    },
    settingAddress: function () {
        wx.navigateTo({
            url: '../address/address',
        })
    }
})