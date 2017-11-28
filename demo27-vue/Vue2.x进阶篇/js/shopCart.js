new Vue({
    el: '#app',
    data: {
        //购物车中的数据
        shopListArr: [],
        //是否全选
        isSelectedAll: false,
        //所有商品的总价格
        totalPrice: 0
    },
    //组件已经加载完毕，请求网络数据，业务处理
    mounted() {
        //请求本地的数据
        this.getLocalData();
    },
    update() {
        //1.请求本地的数据
    },
    methods: {
        getLocalData() {
            // GET /someUrl
            this.$http.get('data/cart.json').then(response => {

                // get body data
                // this.someData = response.body;
                const res = response.body;
                if (res) {
                    this.shopListArr = res.allShops.shopList
                } else {

                }
            }, response => {
                // error callback
                console.log('请求数据失败');
            });
        }
    }
});