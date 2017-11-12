// pages/qAndA/answer/answer.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        icon: {
            audio: "../../../images/icon/audio4.png",
            success: "../../../images/icon/success.png",
            fail: "../../../images/icon/fail.png",
            audio1: "../../../images/icon/audio3.png",
            audio2: "../../../images/icon/audio2.gif",
        },
        datas: {
            ask: {
                logo: "../../../images/icon/add.png",
                name: "葫芦岛吴奇隆",
                type: "八字排盘",
                ask: "我下半年运气咋样，女，1982年12月21日，早上三点到四点"
            },
            answer: [
                {
                    logo: "../../../images/banner/banner6.jpg",
                    name: "名艺轩预测起名",
                    judge: "302",
                    answer: "1290",
                    audioUrl: "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46",
                    length: 10,
                    price: "0",
                    isSelf: false,
                },
                {
                    logo: "../../../images/banner/banner6.jpg",
                    name: "名艺轩预测起名",
                    judge: "302",
                    answer: "1290",
                    audioUrl: "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46",
                    length: 10,
                    price: "0",
                    isSelf: true,
                },
                {
                    logo: "../../../images/banner/banner6.jpg",
                    name: "名艺轩预测起名",
                    judge: "302",
                    answer: "1290",
                    isSelf: true,
                    audioUrl: "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46",
                    length: 10,
                    price: "0"
                },
                {
                    logo: "../../../images/banner/banner6.jpg",
                    name: "名艺轩预测起名",
                    judge: "302",
                    isSelf: false,
                    answer: "1290",
                    audioUrl: "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46",
                    length: 10,
                    price: "0"
                }
            ]
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    audioPlay: function () {
        let that = this;
        that.audioCtx.play();
    },
    bindended: function () {
        let that = this, index = that.data.index, datas = that.data.datas;
        datas.answer[index].play = false;
        that.setData({
            datas: datas
        });
    }
    /**
     * 生命周期函数--监听页面初次渲染完成
     */,
    onReady: function () {
        // 使用 wx.createAudioContext 获取 audio 上下文 context
        this.audioCtx = wx.createAudioContext('myAudio');
    },
    notSelf: function () {
        wx.showToast({
            image: this.data.icon.fail,
            title: "不是您的问题",
        });
    },
    plbagAudio: function (activeUrl) {
        wx.getBackgroundAudioPlayerState({
            success: function (res) {
                var status = res.status
                var dataUrl = res.dataUrl
                var currentPosition = res.currentPosition
                var duration = res.duration
                var downloadPercent = res.downloadPercent;
                wx.stopBackgroundAudio();
                wx.playBackgroundAudio({
                    dataUrl: activeUrl,
                });
            },
            fail: function (res) {
                wx.playBackgroundAudio({
                    dataUrl: activeUrl,
                });
            }
        })
    },
    playAudio: function (e) {
        let that = this, index = e.currentTarget.dataset.index, datas = that.data.datas,
            activeUrl = datas.answer[index].audioUrl;
        that.setData({
            datas: datas,
            activeIndex: index
        });
        that.plbagAudio(activeUrl);
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
        wx.stopBackgroundAudio()
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