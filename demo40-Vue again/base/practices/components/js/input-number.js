function isValueNumber(value) {
    return (/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)/).test(value + '');
}
Vue.component("input-number", {
    template: `
    <div class="input-number">
        <input :step="step" @keyup.down="handleDown" type="text" @keyup.up="handleUp" :value="currentValue" @change="handleChange">
        <button @click="handleDown"  :disabled="currentValue <= min">-</button>
        <button @click="handleUp"  :disabled="currentValue >= max">+</button>
    </div>
    `,
    props: {
        max: {
            type: Number,
            default: Infinity
        },
        step:{
            type:Number,
            default:10
        },
        min: {
            type: Number,
            default: -Infinity
        },
        value: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            currentValue: this.value
        }
    },
    watch: {
        currentValue(val) {
            this.$emit('input', val);
            this.$emit('on-change', val);
        },
        value(val) {
            this.updateValue(val);
        }
    },
    methods: {
        updateValue(val) {
            if (val > this.max) {
                val = this.max;
            }
            if (val < this.min) {
                val = this.min
            }
            this.currentValue = val;
        },
        handleDown() {
            if (this.currentValue <= this.min) {
                return;
            }
            this.currentValue -= this.step;
        },
        handleUp() {
            if (this.currentValue >= this.max) {
                return;
            }
            this.currentValue += this.step;
        },
        handleChange(event) {
            let val = event.target.value.trim();
            let max = this.max;
            let min = this.min;
            if (isValueNumber(val)) {
                val = Number(val);
                this.currentValue = val;
                if (val > max) {
                    this.currentValue = max;
                } else if (val < min) {
                    this.currentValue = min;
                }
            } else {
                event.target.value = this.currentValue;
            }
        }
    },
    mounted() {
        this.updateValue(this.value);
    }
});