// pages/my/toLogistics/toLogistics.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        icon: {
            trouble: "../../../images/icon/trouble.png",
            noLogistics: "../../../images/icon/no-logistics.png"
        },
        datas: {
            id: 1,
            logo: "../../mascot/logo1.png",
            company: "中通快递",
            number: "123123123213",
            phone: "95311",
            logistics: [
                {
                    time: "2017-11-1 14:05:56",
                    content: "甘井子区新中转部-已派件"
                },
                {
                    time: "2017-11-1 14:05:11",
                    content: "辽宁大连中转部-已发往甘井子区新中转部"
                },
                {
                    time: "2017-11-1 14:04:36",
                    content: "广东揭阳航空部-已发往-辽宁大连中转部"
                },
                {
                    time: "2017-11-1 14:03:18",
                    content: "广东揭阳公司-已发件"
                }
            ]
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    copyNumber: function (e) {
        let that = this, number = e.currentTarget.dataset.number;
        wx.setClipboardData({
            data: number,
            success: function () {
                wx.getClipboardData({
                    success: function () {
                        wx.showToast({
                            icon: "success",
                            title: '复制成功',
                        });
                        setTimeout(function () {
                            wx.hideToast();
                        }, 1000);
                    }
                });
            },
            fail: function () {

            },
        })
    },
    sendTrouble: function (e) {
        let that = this, number = e.currentTarget.dataset.number;
        wx.makePhoneCall({
            phoneNumber: number,
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

    }
})