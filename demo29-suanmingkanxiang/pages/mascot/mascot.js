const app = getApp();
Page({
    data: {
        icon: {
            hot: 'chaoshi_icon_rexiao@2x.png',
            reduce: 'chaoshi_icon_sub@2x.png',
            add: 'chaoshi_icon_add@2x.png',
            cart: 'chaoshi_tab_icon_buy_on@2x.png',
            cartNone: 'chaoshi_tab_icon_buy_none@2x.png',
            clearCart: 'chaoshi_icon_empty@2x.png',
            icon: 'icon.png'
        },
        datas: [
            {
                "cid": 1,
                "cname": "热销",
                "shops": [
                    {
                        "id": 1,
                        "name": "佛珠",
                        "logo": ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"],
                        "oprice": "100.00",
                        "price": "80.00",
                        "type": [
                            {
                                "name": "佛珠",
                                "oprice": "50.00",
                                "price": "30.00",
                                "weight": "200g"
                            },
                            {
                                "name": "佛珠",
                                "oprice": "100.00",
                                "price": "60.00",
                                "weight": "500g"
                            }
                        ],
                    },
                    {
                        "id": 2,
                        "name": "佛珠",
                        "logo": ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"],
                        "oprice": "100.00",
                        "price": "80.00",
                        "type": [
                            {
                                "name": "佛珠",
                                "oprice": "50.00",
                                "price": "30.00",
                                "weight": "200g"
                            },
                            {
                                "name": "佛珠",
                                "oprice": "100.00",
                                "price": "60.00",
                                "weight": "500g"
                            }
                        ],
                    },
                    {
                        "id": 3,
                        "name": "佛珠",
                        "logo": ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"],
                        "oprice": "100.00",
                        "price": "80.00",
                        "type": [
                            {
                                "name": "佛珠",
                                "oprice": "50.00",
                                "price": "30.00",
                                "weight": "200g"
                            },
                            {
                                "name": "佛珠",
                                "oprice": "100.00",
                                "price": "60.00",
                                "weight": "500g"
                            }
                        ],
                    },
                    {
                        "id": 4,
                        "name": "佛珠",
                        "logo": ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"],
                        "oprice": "100.00",
                        "price": "80.00",
                        "type": [
                            {
                                "name": "佛珠",
                                "oprice": "50.00",
                                "price": "30.00",
                                "weight": "200g"
                            },
                            {
                                "name": "佛珠",
                                "oprice": "100.00",
                                "price": "60.00",
                                "weight": "500g"
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "name": "佛珠",
                        "logo": ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"],
                        "oprice": "100.00",
                        "price": "80.00",
                        "type": [
                            {
                                "name": "佛珠",
                                "oprice": "50.00",
                                "price": "30.00",
                                "weight": "200g"
                            },
                            {
                                "name": "佛珠",
                                "oprice": "100.00",
                                "price": "60.00",
                                "weight": "500g"
                            }
                        ]
                    },
                    {
                        "id": 6,
                        "name": "佛珠",
                        "logo": ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"],
                        "oprice": "100.00",
                        "price": "80.00",
                        "type": [
                            {
                                "name": "佛珠",
                                "oprice": "50.00",
                                "price": "30.00",
                                "weight": "200g"
                            },
                            {
                                "name": "佛珠",
                                "oprice": "100.00",
                                "price": "60.00",
                                "weight": "500g"
                            }
                        ]
                    }
                ],
                "totalRecords": 5
            },
            {
                "cid": 2,
                "cname": "珠串",
                "shops": [
                    {
                        "id": 7,
                        "name": "佛珠",
                        "logo": ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"],
                        "oprice": "100.00",
                        "price": "80.00",
                        "type": [
                            {
                                "name": "佛珠",
                                "oprice": "50.00",
                                "price": "30.00",
                                "weight": "200g"
                            },
                            {
                                "name": "佛珠",
                                "oprice": "100.00",
                                "price": "60.00",
                                "weight": "500g"
                            }
                        ]
                    },
                    {
                        "id": 8,
                        "name": "桃木制品",
                        "logo": ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"],
                        "oprice": "100.00",
                        "price": "80.00",
                        "type": [
                            {
                                "name": "佛珠",
                                "oprice": "50.00",
                                "price": "30.00",
                                "weight": "200g"
                            },
                            {
                                "name": "佛珠",
                                "oprice": "100.00",
                                "price": "60.00",
                                "weight": "500g"
                            }
                        ]
                    },
                    {
                        "id": 9,
                        "name": "佛珠",
                        "logo": ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"],
                        "oprice": "100.00",
                        "price": "80.00",
                        "type": [
                            {
                                "name": "佛珠",
                                "oprice": "50.00",
                                "price": "30.00",
                                "weight": "200g"
                            },
                            {
                                "name": "佛珠",
                                "oprice": "100.00",
                                "price": "60.00",
                                "weight": "500g"
                            }
                        ]
                    },
                    {
                        "id": 10,
                        "name": "佛珠",
                        "logo": ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"],
                        "oprice": "100.00",
                        "price": "80.00",
                        "type": [
                            {
                                "name": "佛珠",
                                "oprice": "50.00",
                                "price": "30.00",
                                "weight": "200g"
                            },
                            {
                                "name": "佛珠",
                                "oprice": "100.00",
                                "price": "60.00",
                                "weight": "500g"
                            }
                        ]
                    }, {
                        "id": 11,
                        "name": "佛珠",
                        "logo": ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"],
                        "oprice": "100.00",
                        "price": "80.00",
                        "type": [
                            {
                                "name": "佛珠",
                                "oprice": "50.00",
                                "price": "30.00",
                                "weight": "200g"
                            },
                            {
                                "name": "佛珠",
                                "oprice": "100.00",
                                "price": "60.00",
                                "weight": "500g"
                            }
                        ]
                    },
                    {
                        "id": 12,
                        "name": "佛珠",
                        "logo": ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"],
                        "oprice": "100.00",
                        "price": "80.00",
                        "type": [
                            {
                                "name": "佛珠",
                                "oprice": "50.00",
                                "price": "30.00",
                                "weight": "200g"
                            },
                            {
                                "name": "佛珠",
                                "oprice": "100.00",
                                "price": "60.00",
                                "weight": "500g"
                            }
                        ]
                    }
                ],
                "totalRecords": 5
            },
            {
                "cid": 3,
                "cname": "桃木制品",
                "shops": [
                    {
                        "id": 13,
                        "name": "佛珠",
                        "logo": ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"],
                        "oprice": "100.00",
                        "price": "80.00",
                        "type": [
                            {
                                "name": "佛珠",
                                "oprice": "50.00",
                                "price": "30.00",
                                "weight": "200g"
                            },
                            {
                                "name": "佛珠",
                                "oprice": "100.00",
                                "price": "60.00",
                                "weight": "500g"
                            }
                        ]
                    },
                    {
                        "id": 14,
                        "name": "佛珠",
                        "logo": ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"],
                        "oprice": "100.00",
                        "price": "80.00",
                        "type": [
                            {
                                "name": "佛珠",
                                "oprice": "50.00",
                                "price": "30.00",
                                "weight": "200g"
                            },
                            {
                                "name": "佛珠",
                                "oprice": "100.00",
                                "price": "60.00",
                                "weight": "500g"
                            }
                        ]
                    },
                    {
                        "id": 15,
                        "name": "佛珠",
                        "logo": ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"],
                        "oprice": "100.00",
                        "price": "80.00",
                        "type": [
                            {
                                "name": "佛珠",
                                "oprice": "50.00",
                                "price": "30.00",
                                "weight": "200g"
                            },
                            {
                                "name": "佛珠",
                                "oprice": "100.00",
                                "price": "60.00",
                                "weight": "500g"
                            }
                        ]
                    },
                    {
                        "id": 16,
                        "name": "佛珠",
                        "logo": ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"],
                        "oprice": "100.00",
                        "price": "80.00",
                        "type": [
                            {
                                "name": "佛珠",
                                "oprice": "50.00",
                                "price": "30.00",
                                "weight": "200g"
                            },
                            {
                                "name": "佛珠",
                                "oprice": "100.00",
                                "price": "60.00",
                                "weight": "500g"
                            }
                        ]
                    },
                    {
                        "id": 17,
                        "name": "佛珠",
                        "logo": ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"],
                        "oprice": "100.00",
                        "price": "80.00",
                        "type": [
                            {
                                "name": "佛珠",
                                "oprice": "50.00",
                                "price": "30.00",
                                "weight": "200g"
                            },
                            {
                                "name": "佛珠",
                                "oprice": "100.00",
                                "price": "60.00",
                                "weight": "500g"
                            }
                        ]
                    },
                    {
                        "id": 18,
                        "name": "佛珠",
                        "logo": ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"],
                        "oprice": "100.00",
                        "price": "80.00",
                        "type": [
                            {
                                "name": "佛珠",
                                "oprice": "50.00",
                                "price": "30.00",
                                "weight": "200g"
                            },
                            {
                                "name": "佛珠",
                                "oprice": "100.00",
                                "price": "60.00",
                                "weight": "500g"
                            }
                        ]
                    },
                ],
                "totalRecords": 5
            },
            {
                "cid": 4,
                "cname": "熏香",
                "shops": [
                    {
                        "id": 19,
                        "name": "佛珠",
                        "logo": ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"],
                        "oprice": "100.00",
                        "price": "80.00",
                        "type": [
                            {
                                "name": "佛珠",
                                "oprice": "50.00",
                                "price": "30.00",
                                "weight": "200g"
                            },
                            {
                                "name": "佛珠",
                                "oprice": "100.00",
                                "price": "60.00",
                                "weight": "500g"
                            }
                        ]
                    },
                    {
                        "id": 20,
                        "name": "佛珠",
                        "logo": ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"],
                        "oprice": "100.00",
                        "price": "80.00",
                        "type": [
                            {
                                "name": "佛珠",
                                "oprice": "50.00",
                                "price": "30.00",
                                "weight": "200g"
                            },
                            {
                                "name": "佛珠",
                                "oprice": "100.00",
                                "price": "60.00",
                                "weight": "500g"
                            }
                        ]
                    },
                    {
                        "id": 21,
                        "name": "佛珠",
                        "logo": ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"],
                        "oprice": "100.00",
                        "price": "80.00",
                        "type": [
                            {
                                "name": "佛珠",
                                "oprice": "50.00",
                                "price": "30.00",
                                "weight": "200g"
                            },
                            {
                                "name": "佛珠",
                                "oprice": "100.00",
                                "price": "60.00",
                                "weight": "500g"
                            }
                        ]
                    },
                    {
                        "id": 22,
                        "name": "佛珠",
                        "logo": ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"],
                        "oprice": "100.00",
                        "price": "80.00",
                        "type": [
                            {
                                "name": "佛珠",
                                "oprice": "50.00",
                                "price": "30.00",
                                "weight": "200g"
                            },
                            {
                                "name": "佛珠",
                                "oprice": "100.00",
                                "price": "60.00",
                                "weight": "500g"
                            }
                        ]
                    },
                    {
                        "id": 23,
                        "name": "佛珠",
                        "logo": ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"],
                        "oprice": "100.00",
                        "price": "80.00",
                        "type": [
                            {
                                "name": "佛珠",
                                "oprice": "50.00",
                                "price": "30.00",
                                "weight": "200g"
                            },
                            {
                                "name": "佛珠",
                                "oprice": "100.00",
                                "price": "60.00",
                                "weight": "500g"
                            }
                        ]
                    },
                    {
                        "id": 24,
                        "name": "佛珠",
                        "logo": ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"],
                        "oprice": "100.00",
                        "price": "80.00",
                        "type": [
                            {
                                "name": "佛珠",
                                "oprice": "50.00",
                                "price": "30.00",
                                "weight": "200g"
                            },
                            {
                                "name": "佛珠",
                                "oprice": "100.00",
                                "price": "60.00",
                                "weight": "500g"
                            }
                        ]
                    }
                ],
                "totalRecords": 5
            },
            {
                "cid": 5,
                "cname": "开光吉物",
                "shops": [
                    {
                        "id": 25,
                        "name": "佛珠",
                        "logo": ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"],
                        "oprice": "100.00",
                        "price": "80.00",
                        "type": [
                            {
                                "name": "佛珠",
                                "oprice": "50.00",
                                "price": "30.00",
                                "weight": "200g"
                            },
                            {
                                "name": "佛珠",
                                "oprice": "100.00",
                                "price": "60.00",
                                "weight": "500g"
                            }
                        ]
                    },
                    {
                        "id": 26,
                        "name": "佛珠",
                        "logo": ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"],
                        "oprice": "100.00",
                        "price": "80.00",
                        "type": [
                            {
                                "name": "佛珠",
                                "oprice": "50.00",
                                "price": "30.00",
                                "weight": "200g"
                            },
                            {
                                "name": "佛珠",
                                "oprice": "100.00",
                                "price": "60.00",
                                "weight": "500g"
                            }
                        ]
                    },
                    {
                        "id": 22,
                        "name": "佛珠",
                        "logo": ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"],
                        "oprice": "100.00",
                        "price": "80.00",
                        "type": [
                            {
                                "name": "佛珠",
                                "oprice": "50.00",
                                "price": "30.00",
                                "weight": "200g"
                            },
                            {
                                "name": "佛珠",
                                "oprice": "100.00",
                                "price": "60.00",
                                "weight": "500g"
                            }
                        ]
                    },
                    {
                        "id": 27,
                        "name": "佛珠",
                        "logo": ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"],
                        "oprice": "100.00",
                        "price": "80.00",
                        "type": [
                            {
                                "name": "佛珠",
                                "oprice": "50.00",
                                "price": "30.00",
                                "weight": "200g"
                            },
                            {
                                "name": "佛珠",
                                "oprice": "100.00",
                                "price": "60.00",
                                "weight": "500g"
                            }
                        ]
                    },
                    {
                        "id": 28,
                        "name": "佛珠",
                        "logo": ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"],
                        "oprice": "100.00",
                        "price": "80.00",
                        "type": [
                            {
                                "name": "佛珠",
                                "oprice": "50.00",
                                "price": "30.00",
                                "weight": "200g"
                            },
                            {
                                "name": "佛珠",
                                "oprice": "100.00",
                                "price": "60.00",
                                "weight": "500g"
                            }
                        ]
                    },
                    {
                        "id": 29,
                        "name": "佛珠",
                        "logo": ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"],
                        "oprice": "100.00",
                        "price": "80.00",
                        "type": [
                            {
                                "name": "佛珠",
                                "oprice": "50.00",
                                "price": "30.00",
                                "weight": "200g"
                            },
                            {
                                "name": "佛珠",
                                "oprice": "100.00",
                                "price": "60.00",
                                "weight": "500g"
                            }
                        ]
                    },
                    {
                        "id": 30,
                        "name": "佛珠",
                        "logo": ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"],
                        "oprice": "100.00",
                        "price": "80.00",
                        "type": [
                            {
                                "name": "佛珠",
                                "oprice": "50.00",
                                "price": "30.00",
                                "weight": "200g"
                            },
                            {
                                "name": "佛珠",
                                "oprice": "100.00",
                                "price": "60.00",
                                "weight": "500g"
                            }
                        ]
                    }
                ],
                "totalRecords": 5
            },
            {
                "cid": 6,
                "cname": "宝箓",
                "shops": [
                    {
                        "id": 31,
                        "name": "佛珠",
                        "logo": ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"],
                        "oprice": "100.00",
                        "price": "80.00",
                        "type": [
                            {
                                "name": "佛珠",
                                "oprice": "50.00",
                                "price": "30.00",
                                "weight": "200g"
                            },
                            {
                                "name": "佛珠",
                                "oprice": "100.00",
                                "price": "60.00",
                                "weight": "500g"
                            }
                        ]
                    },
                    {
                        "id": 32,
                        "name": "佛珠",
                        "logo": ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"],
                        "oprice": "100.00",
                        "price": "80.00",
                        "type": [
                            {
                                "name": "佛珠",
                                "oprice": "50.00",
                                "price": "30.00",
                                "weight": "200g"
                            },
                            {
                                "name": "佛珠",
                                "oprice": "100.00",
                                "price": "60.00",
                                "weight": "500g"
                            }
                        ]
                    },
                    {
                        "id": 33,
                        "name": "佛珠",
                        "logo": ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"],
                        "oprice": "100.00",
                        "price": "80.00",
                        "type": [
                            {
                                "name": "佛珠",
                                "oprice": "50.00",
                                "price": "30.00",
                                "weight": "200g"
                            },
                            {
                                "name": "佛珠",
                                "oprice": "100.00",
                                "price": "60.00",
                                "weight": "500g"
                            }
                        ]
                    },
                    {
                        "id": 34,
                        "name": "佛珠",
                        "logo": ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"],
                        "oprice": "100.00",
                        "price": "80.00",
                        "type": [
                            {
                                "name": "佛珠",
                                "oprice": "50.00",
                                "price": "30.00",
                                "weight": "200g"
                            },
                            {
                                "name": "佛珠",
                                "oprice": "100.00",
                                "price": "60.00",
                                "weight": "500g"
                            }
                        ]
                    },
                    {
                        "id": 35,
                        "name": "佛珠",
                        "logo": ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"],
                        "oprice": "100.00",
                        "price": "80.00",
                        "type": [
                            {
                                "name": "佛珠",
                                "oprice": "50.00",
                                "price": "30.00",
                                "weight": "200g"
                            },
                            {
                                "name": "佛珠",
                                "oprice": "100.00",
                                "price": "60.00",
                                "weight": "500g"
                            }
                        ]
                    },
                    {
                        "id": 36,
                        "name": "佛珠",
                        "logo": ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"],
                        "oprice": "100.00",
                        "price": "80.00",
                        "type": [
                            {
                                "name": "佛珠",
                                "oprice": "50.00",
                                "price": "30.00",
                                "weight": "200g"
                            },
                            {
                                "name": "佛珠",
                                "oprice": "100.00",
                                "price": "60.00",
                                "weight": "500g"
                            }
                        ]
                    }
                ],
                "totalRecords": 5
            }
        ],
        toastImage: {
            success: 'success.png',
            fail: 'fail.png'
        },
        tips: {
            oprice: '历史价',
            price: '热销价',
            payNow: '去结算',
            noGoods: '购物车还是空的哦！'
        },
        page: 1,
        pagesize: 10,
        opriceAll: 0,
        priceAll: 0,
        currentType: 0,
        scrollTop: 0,
        typeArrayCurrent: 'type-0',
        showModal: false,
        showCart: false,
        loading: false,
        menuBtn: true,
        menu2Btn: true,
    },
    onLoad: function (options) {
        const that = this;
        // options.name = decodeURI(options.name);
        that.setData({
            options: options,
            imgSite: ''
        });
        that.getList();
    },
    onReady: function () {

    },
    onShow: function () {
    },
    onHide: function () {
    },
    onUnload: function () {
    },
    onPullDownRefresh: function () {

    },
    onReachBottom: function () {

    },
    onShareAppMessage: function () {

    },
    menuClick: function () {
        const that = this, btn = that.data.menuBtn;
        that.setData({
            menuBtn: !btn
        });
    },
    menu2Click: function () {
        const that = this, btn = that.data.menu2Btn;
        that.setData({
            menu2Btn: !btn
        });
        console.log(that.data.menu2Btn);
    },
    scrolltolower: function () {
        var that = this;
        if (that.data.loading) return;
        that.setData({loading: true});
        setTimeout(() => {
            that.setData({
                loading: false,
            });
            wx.showLoading({
                title: 'loading...',
            });
        }, 3000);
        setTimeout(function () {
            wx.hideLoading();
            if (that.data.listPage <= that.data.totalPages) {
                that.getPeople();
            } else {
                wx.showModal({
                    title: 'Tips:',
                    content: '已经加载完成所有商品，确定要是否继续刷新？',
                    confirmText: '取消',
                    showCancel: false,
                    success: function (res) {
                        if (res.confirm) {
                        } else {
                        }
                    }
                })
            }
            ;
        }, 3600);
    },
    getList: function () {
        const that = this;
        // app.getAjax('http://127.0.0.1:3000', {
        //   // ktvid: that.data.options.id
        // },
        //   function (res) {

        //   }, function (res) {
        //   });
        let list = that.data.datas,
            typeArray = [];
        list.forEach(function (ele, index, arr) {
            typeArray.push(index);
            for (let i = 0; i < ele.shops.length; i++) {
                ele.shops[i].showModal = true;
                for (let j = 0; j < ele.shops[i].type.length; j++) {
                    ele.shops[i].type[j].number = 0;
                }
            }
        });
        that.setData({
            list: list,
            numberAll: 0,
            opriceAll: 0,
            priceAll: 0,
            typeArray: typeArray,
            typeArrayCurrent: typeArray[0]
        });
    },
    currentType: function (e) {
        const that = this,
            currentType = e.currentTarget.dataset.index,
            typeArrayCurrent = that.data.typeArray[currentType];
        console.log(currentType, typeArrayCurrent);
        that.setData({
            currentType: currentType,
            typeArrayCurrent: typeArrayCurrent
        });
    },
    showItemModal: function (e) {
        let that = this,
            typeIndex = e.currentTarget.dataset.typeindex,
            shopsIndex = e.currentTarget.dataset.shopsindex,
            list = that.data.list,
            modal = list[typeIndex].shops[shopsIndex].showModal;
        list[typeIndex].shops[shopsIndex].showModal = !modal;
        that.setData({
            list: list
        });
    },
    goodsAdd: function (e) {
        console.log(e);
        const that = this,
            typeIndex = e.currentTarget.dataset.typeindex,
            shopsIndex = e.currentTarget.dataset.shopsindex,
            typesIndex = e.currentTarget.dataset.typesindex,
            id = e.currentTarget.dataset.id,
            list = that.data.list;
        list[typeIndex].shops[shopsIndex].type[typesIndex].number++;
        that.setData({
            list: list
        });
        that.getAllFinallyInfos();
    },
    goodsReduce: function (e) {
        console.log(e);
        const that = this,
            typeIndex = e.currentTarget.dataset.typeindex,
            shopsIndex = e.currentTarget.dataset.shopsindex,
            typesIndex = e.currentTarget.dataset.typesindex,
            id = e.currentTarget.dataset.id,
            list = that.data.list;
        console.log(list[typeIndex].shops[shopsIndex].type[typesIndex].number);
        list[typeIndex].shops[shopsIndex].type[typesIndex].number = Math.max(list[typeIndex].shops[shopsIndex].type[typesIndex].number - 1, 0);
        that.setData({
            list: list
        });
        that.getAllFinallyInfos();
    },
    goodsAddModal: function (e) {
        const that = this,
            typeIndex = e.currentTarget.dataset.typeindex,
            shopsIndex = e.currentTarget.dataset.shopsindex,
            id = e.currentTarget.dataset.id,
            list = that.data.list,
            modal = that.data.modalGoods;
        list[typeIndex].shops[shopsIndex].number++;
        modal.number++;
        that.setData({
            list: list,
            modalGoods: modal
        });
        that.getAllFinallyInfos();
    },
    goodsReduceModal: function (e) {
        const that = this,
            typeIndex = e.currentTarget.dataset.typeindex,
            shopsIndex = e.currentTarget.dataset.shopsindex,
            id = e.currentTarget.dataset.id,
            list = that.data.list,
            modal = that.data.modalGoods;
        list[typeIndex].shops[shopsIndex].number = Math.max(list[typeIndex].shops[shopsIndex].number - 1, 0);
        modal.number = Math.max(modal.number - 1, 0);
        that.setData({
            list: list,
            modalGoods: modal
        });
        that.getAllFinallyInfos();
    },
    getAllFinallyInfos: function () {
        let that = this,
            list = that.data.list,
            numberAll = 0,
            opriceAll = 0,
            priceAll = 0;
        list.forEach(function (ele, index, arr) {
            for (let i = 0; i < ele.shops.length; i++) {
                for (let j = 0; j < ele.shops[i].type.length; j++) {
                    numberAll = numberAll + ele.shops[i].type[j].number;
                    opriceAll = opriceAll + ((ele.shops[i].type[j].number) * (parseFloat(ele.shops[i].type[j].oprice)));
                    priceAll = priceAll + ((ele.shops[i].type[j].number) * (parseFloat(ele.shops[i].type[j].price)));
                }
            }
        });
        that.setData({
            numberAll: numberAll,
            opriceAll: opriceAll,
            priceAll: priceAll
        });
    },
    showDetail: function (e) {
        const that = this,
            typeIndex = e.currentTarget.dataset.typeindex,
            shopsIndex = e.currentTarget.dataset.shopsindex,
            id = e.currentTarget.dataset.id,
            list = that.data.list,
            modalGoods = list[typeIndex].shops[shopsIndex];
        that.setData({
            modalGoods: modalGoods,
            showModal: true,
            typeIndex: typeIndex,
            shopIndex: shopsIndex,
            showCart: false
        });
    },
    closeModal: function () {
        this.setData({
            showModal: false
        });
    },
    lookCart: function () {
        const showCart = !this.data.showCart;
        this.setData({
            showCart: showCart
        });
    },
    clearCart: function () {
        const that = this;
        wx.showModal({
            title: '平台提示:',
            content: '是否要清空购物车?',
            confirmColor: '#f55053',
            confirmText: '确定清空',
            success: function (res) {
                if (res.confirm) {
                    that.clear();
                } else if (res.cancel) {
                }
            }
        });
    },
    clear: function () {
        const that = this, list = that.data.list;
        list.forEach(function (ele, index, arr) {
            for (let i = 0; i < ele.shops.length; i++) {
                for (let j = 0; j < ele.shops[i].type.length; j++) {
                    ele.shops[i].type[j].number = 0;
                }
            }
        });
        that.setData({
            list: list,
            showCart: false
        })
        that.getAllFinallyInfos();
    },
    payNow: function () {
        const that = this, numberAll = that.data.numberAll, list = that.data.list, options = that.data.options;
        if (numberAll > 0) {
            wx.setStorage({
                key: 'marketOrder',
                data: {
                    list: list,
                    opriceAll: that.data.opriceAll,
                    priceAll: that.data.priceAll,
                },
                success: function (res) {
                    wx.navigateTo({
                        url: ''
                    })
                }
            });
        } else {
            wx.showToast({
                title: '您还没有选择商品呢',
                image: that.data.toastImage.fail
            })
            setTimeout(function () {
                wx.hideToast();
            }, 1000);
        }
    },
    getKtvInfo: function () {
        let that = this;
        if (that.data.page == 1) {
            app.getAjax('http://127.0.0.1:3000', {
                page: that.data.page,
                pagesize: that.data.pagesize
            }, function (res) {
                if (res.data.msgcode == 1) {
                    that.setData({
                        page: that.data.page - 0 + 1,
                        totalrecords: res.data.data.totalrecords,
                        ktvNear: res.data.data.businesslist
                    });
                } else {
                    wx.showLoading({
                        title: res.data.msg,
                        icon: 'warn',
                        success: function (res) {
                        }
                    });
                    setTimeout(function () {
                        wx.hideLoading()
                    }, 1000);
                }
            }, function (res) {
            });
        } else if (that.data.page > 1 && that.data.page <= that.data.totalrecords) {
            app.getAjax('http://127.0.0.1:3000', {
                page: that.data.page,
                pagesize: that.data.pagesize
            }, function (res) {
                if (res.data.msgcode == 1) {
                    that.setData({
                        page: that.data.page - 0 + 1,
                        totalrecords: res.data.data.totalrecords,
                        ktvNear: that.data.ktvNear.concat(res.data.data.businesslist)
                    });
                } else {
                    wx.showLoading({
                        title: res.data.msg,
                        icon: 'warn',
                        success: function (res) {
                        }
                    });
                    setTimeout(function () {
                        wx.hideLoading()
                    }, 1000);
                }
            }, function (res) {
            });
        } else {
            wx.showLoading({
                title: '已经加载完最后一页！',
            });
            setTimeout(function () {
                wx.hideLoading();
                that.setData({
                    nothing: true,
                    wentBottom: false
                });
            }, 1000);
        }
    },
})