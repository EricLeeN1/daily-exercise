// onst recorderManager = wx.getRecorderManager()

// recorderManager.onStart(() => {
//   console.log('recorder start')
// })
// recorderManager.onResume(() => {
//   console.log('recorder resume')
// })
// recorderManager.onPause(() => {
//   console.log('recorder pause')
// })
// recorderManager.onStop((res) => {
//   console.log('recorder stop', res)
//   const { tempFilePath } = res
// })
// recorderManager.onFrameRecorded((res) => {
//   const { frameBuffer } = res
//   console.log('frameBuffer.byteLength', frameBuffer.byteLength)
// })

// const options = {
//   duration: 10000,
//   sampleRate: 44100,
//   numberOfChannels: 1,
//   encodeBitRate: 192000,
//   format: 'aac',
//   frameSize: 50
// }

// recorderManager.start(options);
Page({

    /**
     * 页面的初始数据
     */
    data: {
        showService: false,
        icon: {
            audio: "../../../images/icon/audio5.png",
            audio2: "../../../images/icon/audio6.png",
        },
        items2: [
            "微信支付", "卦币支付"
        ],
        datas: {
            logo: "../../../images/banner/banner6.jpg",
            name: "炳坤专业算命，起名馆 起名 算命",
            id: 1,
            level: 4,
            logo: "../../../../images/banner/banner6.jpg",
            active: 225,
            number: 974,
            name: "炳坤",
            title: "炳坤专业算命，起名馆 起名 算命",
            des: "专业就是用心起好每个名字，专业就是给你最优的指导",
            label: "明星大师",
            poster: "../../../images/banner/banner2.png",
            infos: [
                "1954年生，四川人，大连万达集团股份有限公司董事长，中共十七大代表，第十一届全国政协常委，第十一届全国工商联副主席，现任中国慈善联合会副会长，中国民间商会副会长，中国企业联合会、中国企业家协会副会长，美国哈佛大学全球顾问委员会副主席。",
                "1970年入伍，1986年从部队转业，进入大连市西岗区人民政府任办公室主任，1989年担任大连万达集团股份有限公司董事长至今。"
            ],
            posts: [
                "中国慈善联合会副会长",
                "中国商业联合会副会长",
                "中国慈善联合会副会长",
                "中国商业联合会副会长",
                "中国慈善联合会副会长",
                "中国商业联合会副会长"
            ],
            services: [
                {name: '一事一占', price: '128', value: '一事一占'},
                {name: '情感婚姻', price: '128', value: '情感婚姻'},
                {name: '八字合婚', price: '128', value: '八字合婚'},
                {name: '手机号预测', price: '128', value: '手机号预测'},
                {name: '测算名字', price: '128', value: '测算名字'},
                {name: '一事一占', price: '128', value: '一事一占'},
                {name: '情感婚姻', price: '128', value: '情感婚姻'},
                {name: '八字合婚', price: '128', value: '八字合婚'},
                {name: '手机号预测', price: '128', value: '手机号预测'},
                {name: '测算名字', price: '128', value: '测算名字'},
                {name: '一事一占', price: '128', value: '一事一占'},
                {name: '情感婚姻', price: '128', value: '情感婚姻'},
                {name: '八字合婚', price: '128', value: '八字合婚'},
                {name: '手机号预测', price: '128', value: '手机号预测'},
                {name: '测算名字', price: '128', value: '测算名字'}
            ]
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    startAudio: function (e) {
        let that = this;
        wx.startRecord({
            success: function (res) {
                var tempFilePath = res.tempFilePath;
                that.setData({
                    audioUrl: tempFilePath
                })
            },
            fail: function (res) {
                //录音失败
                wx.showToast({
                    title: '录音失败',
                })
            }
        })
        // setTimeout(function () {
        //   //结束录音
        //   wx.stopRecord();
        // }, 10000)
    },
    saveAudio: function (e) {
        wx.stopRecord();
    },
    playAudio: function () {
        let that = this, audioUrl = that.data.audioUrl;
        wx.playVoice({
            filePath: audioUrl,
            complete: function (res) {
            }
        })
    },
    radioChange: function (e) {
        this.setData({
            currentRadio: e.detail.value
        })
    },
    radioChange1: function (e) {
        this.setData({
            currentStyle: e.detail.value
        })
    },

    toggleAllService: function () {
        let that = this, showService = that.data.showService;
        that.setData({
            showService: !showService
        })
    },
    pay: function (options) {
        wx.showToast({
            title: '支付成功',
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        this.audioCtx = wx.createAudioContext('myAudio')
    },
    audioPlay: function () {
        this.audioCtx.play()
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