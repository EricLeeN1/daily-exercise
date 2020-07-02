// function search(age:number,name:string):string {
//     return `找到了${age}岁的小姐姐${name}`
// }
// let age:number = 12
// const result:string = search(age,'张三');
// console.log(result);
// 处理剩余参数的函数
function search() {
    var xuqiu = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        xuqiu[_i] = arguments[_i];
    }
    var yy = '找到了';
    for (var i = 0; i < xuqiu.length; i++) {
        var element = xuqiu[i];
        yy = yy + element;
        if (i < xuqiu.length) {
            yy == yy + '、';
        }
    }
    yy = yy + '的小姐姐';
    return yy;
}
var result = search('22', '大长腿', '瓜子脸', '水蛇腰');
console.log(result);
