var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        icon: {
            edit: "../../images/icon/edit.png",
            delete: "../../images/icon/delete.png",
            add: "../../images/icon/add1.png",
            wechat: "../../images/icon/wechat.png",
            close: "../../images/icon/close1.png",
        },
        region: ["", "", ""],
        changeAddress: 0,
        showAddressModal: false,
        regionChanges: false,
        addressDatas: [
            {
                id: 1,
                name: "李政",
                phonenumber: "15201173139",
                province: "北京",
                city: "北京",
                town: "石景山区",
                street: "北京阿里马科技有限公司",
                choice: 0,
            },
            {
                id: 2,
                name: "李政",
                phonenumber: "15201173139",
                province: "湖南",
                city: "株洲",
                town: "荷塘区",
                street: "银泰财富广场3栋2单元1808",
                choice: 1,
            }
        ]
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
    radioChange: function (e) {
        let that = this, datas = that.data.addressDatas, active = e.detail.value;
        for (let i = 0; i < datas.length; i++) {
            datas[i].choice = 0;
        }
        ;
        datas[active].choice = 1;
        that.setData({
            addressDatas: datas
        });
    },
    showAddressModal: function () {
        this.setData({
            showAddressModal: true,
            changeAddress: 0,
            regionChanges: false
        });
    },
    hideAddressModal: function () {
        this.setData({
            showAddressModal: false,
            regionChanges: false
        });
    },
    addAddressByWechat: function () {
        let that = this, datas = that.data.addressDatas;
        wx.chooseAddress({
            success: function (res) {
                console.log(res);
                let data = {
                    id: 3,
                    name: res.userName,
                    phonenumber: res.telNumber,
                    province: res.provinceName,
                    city: res.cityName,
                    town: res.countyName,
                    street: res.detailInfo,
                    choice: 0,
                };
                datas.push(data);
                that.setData({
                    addressDatas: datas
                });
            },
            fail: function (res) {
                //没有授权激活手动添加
                that.addAddressByHandle();
            }
        });
    },
    bindRegionChange: function (e) {
        this.setData({
            region: e.detail.value,
            regionChanges: true
        });
    },
    addAddressByHandle: function (e) {
        let that = this,
            datas = that.data.addressDatas;
        if (!(e.detail.value.name && e.detail.value.phone && e.detail.value.street)) {
            app.myToast('收货地址不完整', false);
            setTimeout(function () {
                wx.hideToast();
            }, 1200);
        } else {
            let data = {
                name: e.detail.value.name,
                phonenumber: e.detail.value.phone,
                street: e.detail.value.street,
            };
            if (that.data.changeAddress) {
                //  编辑的
                let id = datas[that.data.changingAddress].id,
                    choice = datas[that.data.changingAddress].choice;
                console.log(id, choice);
                data.id = id;
                data.choice = choice;
                if (that.data.regionChanges) {
                    //地址变动了
                    if ((that.data.region[0] == "选择地区") || (that.data.region[1] == "选择地区") || (that.data.region[2] == "选择地区")) {
                        // 收货地址不完整
                        app.myToast('收货地址不完整', false);
                        setTimeout(function () {
                            wx.hideToast();
                        }, 1200);
                    } else {
                        // 收货地址完整的
                        data.province = that.data.region[0];
                        data.city = that.data.region[1];
                        data.town = that.data.region[2];
                        datas[that.data.changingAddress] = data;
                        that.setData({
                            addressDatas: datas,
                            showAddressModal: false,
                            changeAddress: 0
                        });
                        that.resetForm();
                    }
                } else {
                    //地址没变动
                    data.province = datas[that.data.changingAddress].province;
                    data.city = datas[that.data.changingAddress].city;
                    data.town = datas[that.data.changingAddress].town;
                    datas[that.data.changingAddress] = data;
                    that.setData({
                        addressDatas: datas,
                        showAddressModal: false,
                        changeAddress: 0
                    });
                    that.resetForm();
                }
            } else {
                // 新加的
                data.id = that.data.addressDatas[that.data.addressDatas.length - 1].id + 1;
                data.choice = 0;
                if (that.data.regionChanges) {
                    //地址变动了
                    if ((that.data.region[0] == "选择地区") || (that.data.region[1] == "选择地区") || (that.data.region[2] == "选择地区")) {
                        // 收货地址不完整
                        app.myToast('收货地址不完整', false);
                        setTimeout(function () {
                            wx.hideToast();
                        }, 1200);
                    } else {
                        // 收货地址完整的
                        data.province = that.data.region[0];
                        data.city = that.data.region[1];
                        data.town = that.data.region[2];
                        datas.push(data);
                        that.setData({
                            addressDatas: datas,
                            showAddressModal: false,
                            changeAddress: 0
                        });
                        that.resetForm();
                    }
                } else {
                    //地址没变动，此时不完整
                    app.myToast('收货地址不完整', false);
                    setTimeout(function () {
                        wx.hideToast();
                    }, 1200);
                }
            }
        }
    },
    editAddress: function (e) {
        let that = this;
        that.setData({
            changingAddress: e.currentTarget.dataset.index,
            changeAddress: 1,
            showAddressModal: true
        });
    },
    deleteAddress: function (e) {
        let that = this;
        that.setData({
            deletingAddress: e.currentTarget.dataset.index,
        });
    },
    resetForm: function (e) {
        this.setData({
            region: ["", "", ""],
        });
    }
})