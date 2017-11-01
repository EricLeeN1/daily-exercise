// pages/my/toComments/toComments.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        scoreDatas: [
            {
                title: "描述相符",
                score: 0
            },
            {
                title: "物理服务",
                score: 0
            },
            {
                title: "物流态度",
                score: 0
            }
        ],
        icon: {
            shop: '../../../images/icon/shop.png',
            camera: '../../../images/icon/camera.png',
            star: '../../../images/icon/star.png',
            star1: '../../../images/icon/star1.png',
            success: '../../../images/icon/success.png',
            fail: '../../../images/icon/fail.png'
        },
        datas: {
            id: 1,
            logo: "../../../images/new/logo@2x.png",
            name: "杜蕾斯，低价风暴，让爱更安全。全球第一安全套品牌，杜蕾斯，低价风暴，让爱更安全。全球第一安全套品牌。杜蕾斯..."
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    commentsStars: function (e) {
        let that = this,
            index = e.currentTarget.dataset.index,
            iindex = e.currentTarget.dataset.iindex,
            datas = that.data.scoreDatas;
        datas[index].score = iindex - 0;
        that.setData({
            scoreDatas: datas
        });
    },
    formSubmit: function (e) {
        let that = this,
            content = e.detail.value.content,
            datas = that.data.scoreDatas;
        if (datas[0].score && datas[1].score && datas[2].score) {
            if (!content) {
                wx.showToast({
                    image: that.data.icon.fail,
                    title: '您还没有评论呢',
                });
                setTimeout(function () {
                    wx.hideToast();
                }, 2000);
            } else {
                wx.showToast({
                    image: that.data.icon.success,
                    title: '提交评论成功!',
                });
                setTimeout(function () {
                    wx.hideToast();
                    wx.navigateBack({
                        delta: 1
                    })
                }, 2000);
            }
        } else {
            wx.showToast({
                image: that.data.icon.fail,
                title: '您还没有评分呢',
            });
            setTimeout(function () {
                wx.hideToast();
            }, 2000);
        }
    },
    loadImage: function (e) {
        let that = this;
        wx.chooseImage({
            count: 9, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                var tempFilePaths = res.tempFilePaths
                that.setData({
                    tempFilePaths: tempFilePaths
                })
            }
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
})