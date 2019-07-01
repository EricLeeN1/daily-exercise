var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    // 构造器
    function Car(engine) {
        this.str2 = 'world';
        this.engine = engine;
    }
    // 方法
    Car.prototype.disp = function () {
        console.log('====================================');
        console.log("\u53D1\u52A8\u673A\u4E3A:" + Car.strings);
        console.log('====================================');
    };
    return Car;
}());
var GoodCar = /** @class */ (function (_super) {
    __extends(GoodCar, _super);
    function GoodCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GoodCar.prototype.engineName = function () {
        console.log('====================================');
        console.log("\u5F15\u64CE\u540D\u79F0:" + Car.strings);
        console.log('====================================');
    };
    // 方法
    GoodCar.prototype.disp = function () {
        _super.prototype.disp.call(this); // 调用父类的函数
        console.log('====================================');
        console.log("\u53D1\u52A8\u673A\u540D\u5B57\u4E3A:" + Car.strings);
        console.log('====================================');
    };
    return GoodCar;
}(Car));
var AgriLoan = /** @class */ (function () {
    function AgriLoan(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
    return AgriLoan;
}());
var obj = new AgriLoan(10, 1);
console.log("利润为 : " + obj.interest + "，抽成为 : " + obj.rebate);
Car.strings = "12";
var baoma = new GoodCar('baoma');
console.log('====================================');
// Property 'str2' is private and only accessible within class 'Car'.
// console.log(`访问私有属性：` + baoma.str2);
console.log('====================================');
console.log('====================================');
var isCar = baoma instanceof Car;
var isGoodCar = baoma instanceof GoodCar;
console.log('baoma对象是Car类实例化而来的吗？' + isCar);
console.log('baoma对象是GoodCar类实例化而来的吗？' + isGoodCar);
console.log('====================================');
// 访问属性
console.log(baoma.engine);
// 访问父类方法
baoma.disp();
// 访问子类方法
baoma.engineName();
