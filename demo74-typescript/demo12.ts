class XiaoJieJie {
    public sex: string
    protected name: string
    private age: number
    public constructor(sex: string, name: string, age: number) {
        this.sex = sex;
        this.name = name;
        this.age = age;
    }
    public sayHelllo() {
        console.log('你好');
    }
    protected sayLove() {
        console.log('我爱你');
    }
}

let jieji: XiaoJieJie = new XiaoJieJie('女', '热巴', 18);
console.log(jieji.sex);
console.log(jieji.name);
console.log(jieji.age);
