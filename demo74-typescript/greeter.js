// interface Person {
//   firstName: string;
//   lastName: string;
// }
// function greeter(person: Person) {
//   return "Hello, " + person.firstName + ' ' + person.lastName;
// }
// // let user = "Jane User";
// // let user = ['0', 1, 2]; //Argument of type 'number[]' is not assignable to parameter of type 'string'.
// let user = {
//   firstName: "Eric",
//   lastName: "Lee",
// }
// document.body.innerHTML = greeter(user);
var Student = /** @class */ (function () {
    function Student(firstName, MiddleInitial, lastName) {
        this.firstName = firstName;
        this.MiddleInitial = MiddleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + MiddleInitial + " " + lastName;
    }
    return Student;
}());
var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log('====================================');
        console.log('Eric');
        console.log('====================================');
    };
    return Site;
}());
var obj = new Site();
obj.name();
(function (string) {
    return "hi here";
});
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
function price(price, rate) {
    if (rate === void 0) { rate = 0.5; }
    return price * rate;
}
console.log('====================================');
console.log('价格是：' + price(100, 0.2));
console.log('====================================');
var user = new Student("Eric", "M.", "Lee");
document.body.innerHTML = greeter(user);
var numbers = 1000;
var strings = "Eric";
var flag = true;
var arrs = [1, 2];
var arrs2 = [1, false, 'fine'];
var yuanzu = ["eric", 1];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var colors = Color.Blue;
console.log('====================================');
console.log(colors);
console.log('====================================');
var str = '1';
var str2 = str; //str、str2 是 string 类型
console.log(typeof str2);
