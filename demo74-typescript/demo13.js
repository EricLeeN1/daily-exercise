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
var Eric = /** @class */ (function () {
    function Eric(name, age, skill) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
    Eric.prototype.interest = function () {
        console.log('赚钱');
    };
    return Eric;
}());
var EricSon = new Eric('eric', 18, 'codding');
EricSon.interest();
var EricDau = /** @class */ (function (_super) {
    __extends(EricDau, _super);
    function EricDau() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sex = '女孩';
        return _this;
    }
    EricDau.prototype.keai = function () {
        console.log('可爱');
    };
    EricDau.prototype.interest = function () {
        _super.prototype.interest.call(this);
        console.log('挣一个小目标');
    };
    return EricDau;
}(Eric));
var an = new EricDau('An', 5, '可爱');
an.keai();
an.interest();
