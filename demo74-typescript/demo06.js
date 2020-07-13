// 变量的作用域、函数划分
// function zhengXing(): void {
//     const yangzi:string = '刘德华'
//     console.log(yangzi);
// }
// zhengXing()
// 全局变量  局部变量
var yangzi = '刘德华';
function zhengXing() {
    var yangzi = '马德华';
    console.log(yangzi);
}
zhengXing();
