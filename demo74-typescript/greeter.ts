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

class Student {
  fullName: string;
  constructor(public firstName, public MiddleInitial, public lastName) {
    this.fullName = firstName + " " + MiddleInitial + " " + lastName
  }
}

class Site {
  name(): void { // void 用于标识方法的返回值的类型，表示该方法没有返回值
    console.log('====================================');
    console.log('Eric');
    console.log('====================================');
  }
}

let obj = new Site();

obj.name()


// 接口
interface Person {
  firstName: string,
  lastName: string,
  // sayHi: ():string => {
  //   return "hi here"
  // }
}

function greeter(person: Person): string {
  return "Hello, " + person.firstName + " " + person.lastName;
}

function price(price: number, rate: number = 0.5) {
  return price * rate
}

console.log('====================================');
console.log('价格是：' + price(100, 0.2));
console.log('====================================');

let user = new Student("Eric", "M.", "Lee");

document.body.innerHTML = greeter(user);


let numbers: number = 1000;
let strings: string = "Eric";
let flag: boolean = true;
let arrs: number[] = [1, 2];
let arrs2: any[] = [1, false, 'fine'];
let yuanzu: [string, number] = ["eric", 1];

enum Color { Red, Green, Blue };
let colors = Color.Blue;
console.log('====================================');
console.log(colors);
console.log('====================================');

var str = '1'
var str2: number = <number><any>str   //str、str2 是 string 类型
console.log(typeof str2)