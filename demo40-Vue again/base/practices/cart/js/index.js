let vm = new Vue({
    el: "#app",
    data: {
        msg: "11",
        selectedALL: false,
        list: [{
                id: 1,
                name: 'iPhone 7',
                price: 6188,
                count: 1,
                selected: false
            },
            {
                id: 2,
                name: 'iPad Pro',
                price: 5888,
                count: 1,
                selected: false
            },
            {
                id: 3,
                name: 'MackBook Pro',
                price: 21488,
                count: 1,
                selected: false
            }
        ]
    },
    computed: {
        totalPrice() {
            let total = 0;
            this.list.forEach(element => {
                if (element.selected) {
                    total += element.price * element.count;
                }
            });
            return total.toString().replace(/\B(?=(\d{3})+$)/g, ',');
        }
    },
    methods: {
        handleReduce(index) {
            // // 写法1
            // if (this.list[index].count === 1) {
            //     return;
            // }
            // this.list[index].count--;
            // 写法2
            this.list[index].count = Math.max(1, this.list[index].count - 1);
        },
        handleAdd(index) {
            this.list[index].count++;
        },
        handleRemove(index) {
            this.list.splice(index, 1);
        },
        countAll() {
            let total = 0;
            if (this.selectedALL) {
                this.list.forEach(element => {
                    element.selected = true;
                });
            } else {
                this.list.forEach(element => {
                    element.selected = false;
                });
            }
        }
    }
});