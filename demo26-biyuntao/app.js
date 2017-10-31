//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    this.netWork();
    this.netWorkChange();
    this.getSystemInfo();
    this.positionInfo();
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
      site: 'https://api2.buy2019.com',
      imgSite: 'https://img1.buy2019.com',
      success: "../../images/icon/success.png",
      fail: "../../images/icon/fail.png"
  },
    // 设备信息
  getSystemInfo: function () {
      var that = this;
      wx.getSystemInfo({
          success: function (res) {
              that.globalData.systemInfo = res;
              wx.setStorage({
                  key: 'systemInfo',
                  data: res,
              });
          },
      });
  },
    // 位置信息
  positionInfo: function () {
      var page = this
      wx.getLocation({
          type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
          success: function (res) {
              // success
              var longitude = res.longitude;
              var latitude = res.latitude;
              wx.setStorage({
                  key: 'location',
                  data: {
                      getLocation: true,
                      longitude: longitude,
                      latitude: latitude,
                  },
              })
          },
          fail: function () {
              wx.setStorage({
                  key: 'location',
                  data: {
                      getLocation: false,
                      longitude: 113.625368,
                      latitude: 34.7466,
                  },
              })
          },
          complete: function () {
              // complete
          }
      })
  },
    // 网络状态
  netWork: function () {
      wx.getNetworkType({
          success: function (res) {
              if (res.networkType == 'none') {
                  wx.showModal({
                      title: '平台提示:',
                      content: '当前没有网络连接，请检查后重新启动！',
                      confirmColor: "#F55053"
                  });
              }
          },
      })
  },
    //网络改变
  netWorkChange: function () {
      wx.onNetworkStatusChange(function (res) {
          if (res.isConnected == false) {
              wx.showModal({
                  title: '平台提示',
                  content: '当前没有网络连接，请连接网络以后再试！',
                  confirmColor: "#F55053"
              })
          }
          ;
      })
  },
    getAjax: function (url, data, successFun, failFun) {
        wx.request({
            url: url,
            data: data,
            method: "GET",
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            success: successFun,
            fail: failFun
        });
  },
    postAjax: function (url, data, successFun, failFun) {
        wx.request({
            url: url,
            data: data,
            method: "POST",
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            success: successFun,
            fail: failFun
        });
  },
    // 打电话
    makeCall: function () {
        wx.makePhoneCall({
            phoneNumber: '15201173239',
        })
    },
    lookDetail: function (e) {
        const id = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: '../goodsDetails/goodsDetails?id=' + id,
        })
    },
    attendUs: function () {
        wx.navigateTo({
            url: '../attendUs/attendUs',
        });
    },
    myShare: function () {
        wx.navigateTo({
            url: '../myShare/myShare',
        });
    },
    // 吐司
    myToast: function (title, isSuccess) {
        let that = this,
            url = isSuccess == true ? that.globalData.success : that.globalData.fail;
        wx.showToast({
            image: url,
            title: title,
        });
    }
})