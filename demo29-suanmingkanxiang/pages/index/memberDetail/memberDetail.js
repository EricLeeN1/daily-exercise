// pages/index/memberDetail/memberDetail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        showDetails: true,
        icon: {
            level: "../../../images/icon/level.png",
            success: "../../../images/icon/success.png",
            fail: "../../../images/icon/fail.png",
            levelpurple: "../../../images/icon/levelpurple.png",
            levelblue: "../../../images/icon/levelblue.png",
            levelgreen: "../../../images/icon/levelgreen.png",
            levelred: "../../../images/icon/level.png",
        },
        commentsLists: [
            {
                id: 1,
                avatarUrl: "../../../images/banner/banner6.jpg",
                name: "葫芦岛吴奇隆",
                time: "2017-10-30",
                des: "专业就是用心起好每个名字，专业就是给你最优的指导,专业就是用心起好每个名字，专业就是给你最优的指导",
                color: "红色",
                size: "超大"
            },
            {
                id: 2,
                avatarUrl: "../../../images/banner/banner6.jpg",
                name: "太原吴彦祖",
                time: "2017-10-30",
                des: "专业就是用心起好每个名字，专业就是给你最优的指导,专业就是用心起好每个名字，专业就是给你最优的指导",
                color: "红色",
                size: "超大"
            }
        ],
        all: 5,
        allTotal: 5,
        datas: {
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
    toggleAllService: function () {
        let that = this, length = that.data.datas.services.length, all = that.data.all;
        if (all == length) {
            all = 5;
        } else {
            all = length
        }
        that.setData({
            all: all
        })
    },
    lookMore: function () {
        wx.navigateTo({
            url: '../comments/comments',
        })
    },
    formSubmit: function (e) {
        console.log(e.detail.value);
        let that = this, value = e.detail.value.type;
        if (value == "") {
            wx.showToast({
                image: that.data.icon.fail,
                title: '您还没有选择呢',
            });
        } else {
            wx.navigateTo({
                url: '../judge/judge?type=' + value,
                success: function (res) {
                },
                fail: function (res) {
                },
                complete: function (res) {
                },
            })
        }
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
    showDetail: function () {
        let that = this, show = that.data.showDetails;
        console.log(show);
        that.setData({
            showDetails: !show
        })
    },
    radioChange: function (e) {
        console.log('radio发生change事件，携带value值为：', e.detail.value)
    }
})