class Car {

  static strings: string;

  private str2: string = 1;

  // 字段
  engine: string;
  // 构造器
  constructor(engine: string) {
    this.engine = engine;
  }
  // 方法
  disp(): void {
    console.log('====================================');
    console.log(`发动机为:${Car.strings}`);
    console.log('====================================');
  }
}

class GoodCar extends Car {
  engineName(): void {
    console.log('====================================');
    console.log(`引擎名称:${Car.strings}`);
    console.log('====================================');
  }
  // 方法
  disp(): void {
    super.disp() // 调用父类的函数
    console.log('====================================');
    console.log(`发动机名字为:${Car.strings}`);
    console.log('====================================');
  }
}

Car.strings = "12"

let baoma = new GoodCar('baoma');
let isCar = baoma instanceof Car;
let isGoodCar = baoma instanceof GoodCar;
console.log('baoma对象是Car类实例化而来的吗？' + isCar);
console.log('baoma对象是GoodCar类实例化而来的吗？' + isGoodCar);
console.log('====================================');
// 访问属性
console.log(baoma.engine);
// 访问父类方法
baoma.disp()
// 访问子类方法
baoma.engineName()