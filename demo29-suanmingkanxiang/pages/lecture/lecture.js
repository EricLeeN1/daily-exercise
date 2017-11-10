// pages/lecture/lecture.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        icon: {
            video: "../../images/icon/video.png"
        },
        showVideoBg: false,
        lectureData: [
            {
                id: 3,
                banner: "../../images/banner/banner2.png",
                btime: "11月1日",
                etime: "12月1日",
                title: "六爻初期",
                lecturer: "仰度大师",
                status: 1,
                number: "200",
                style: "",
                videoUrl: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
                times: "第三期",
                logo: "../../images/banner/banner2.png"
            },
            {
                id: 2,
                banner: "../../images/banner/banner2.png",
                btime: "10月1日",
                etime: "11月1日",
                title: "六爻初期",
                lecturer: "仰度大师",
                status: 0,
                number: 945,
                style: "网络课程",
                logo: "../../images/banner/banner2.png",
                videoUrl: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
                times: "第二期"
            },
            {
                id: 1,
                logo: "../../images/banner/banner2.png",
                banner: "../../images/banner/banner2.png",
                btime: "9月1日",
                etime: "10月1日",
                title: "六爻初期",
                lecturer: "仰度大师",
                status: 0,
                number: 945,
                style: "网络课程",
                videoUrl: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
                times: "第一期"
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    showModal: function () {

    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },
    playThisVideo: function (e) {
        let that = this,
            url = "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
            logo = e.currentTarget.dataset.logo;
        that.setData({
            showVideoBg: true,
            activeUrl: url
        })
    },
    closeVideoBg: function () {
        this.setData({
            showVideoBg: false
        });
    },
    onHide: function () {
        this.setData({
            showVideoBg: false
        });
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
    attend: function (e) {
        let that = this, id = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: 'lectureAttend/lectureAttend?id=' + id,
        });
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