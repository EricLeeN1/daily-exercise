// 1、字面量声明
// function add(n1: number, n2: number): number {
//     return n1 + n2
// }

// console.log(add(1, 2));

// 2、函数表达式

// const add = function (n1: number, n2: number): number {
//     return n1 + n2
// }
// console.log(add(1, 2));

// 3、箭头函数

const add = (n1: number, n2: number): number => {
    return n1 + n2
}
console.log(add(1, 2));