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
          url: '',
          icon: '../../images/icon/daifukuan.png',
          title: "待付款"
      },
          {
              url: '',
              icon: '../../images/icon/daifahuo.png',
              title: "待发货"
          },
          {
              url: '',
              icon: '../../images/icon/daishouhuo.png',
              title: "待收货"
          },
          {
              url: '',
              icon: '../../images/icon/daipingjia.png',
              title: "待评价"
          },
          {
              url: '',
              icon: '../../images/icon/youhuiquan.png',
              title: "我的优惠券"
          }],
      userRows: [{
          fun: '',
          icon: '../../images/icon/daifukuan.png',
          title: "收货地址"
      },
          {
              fun: '',
              icon: '../../images/icon/daifukuan.png',
              title: "客服与投诉"
          }, {
              fun: '',
              icon: '../../images/icon/daifukuan.png',
              title: "我的分享"
          }, {
              fun: '',
              icon: '../../images/icon/daifukuan.png',
              title: "加盟我们"
          }],
      hasUserInfo: false,
      canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
      if (app.globalData.userInfo) {
          this.setData({
              userInfo: app.globalData.userInfo,
              hasUserInfo: true
          })
      } else if (this.data.canIUse) {
          // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
          // 所以此处加入 callback 以防止这种情况
          app.userInfoReadyCallback = res => {
              this.setData({
                  userInfo: res.userInfo,
                  hasUserInfo: true
              })
          }
      } else {
          // 在没有 open-type=getUserInfo 版本的兼容处理
          wx.getUserInfo({
              success: res => {
                  app.globalData.userInfo = res.userInfo
                  this.setData({
                      userInfo: res.userInfo,
                      hasUserInfo: true
                  })
              }
          })
      }
  },
    getUserInfo: function (e) {
        app.globalData.userInfo = e.detail.userInfo
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
})