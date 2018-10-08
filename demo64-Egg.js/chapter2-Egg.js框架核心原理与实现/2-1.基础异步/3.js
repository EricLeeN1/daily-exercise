// 1.发布订阅设计模式

class Evente {
    constructor() {
        this.map = {};
    }
    add(name, fn) {
        if (this.map[name]) {
            this.map[name].push(fn);
            return;
        }
        this.map[name] = [fn];
        return;
    }
    emit(name, ...args) {
        this.map[name].forEach(fn => {
            fn(...args);
        });
    }
}

let e = new Evente();
e.add("hello", (err, name) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(name);
});

e.emit("hello", "发生了错误！");

//第二个参数传递了错误，如果有错的话即报错

e.emit("hello", null, "hello nodejs");



//2. 升级发布订阅设计模式

class ChainEvente {
    constructor() {
        this.map = {};
    }
    add(name, fn) {
        if (this.map[name]) {
            this.map[name].push(fn);
            return;
        }
        this.map[name] = [fn];
        return this;
    }
    emit(name, ...args) {
        this.map[name].forEach(fn => {
            fn(...args);
        });
        return this;
    }
}

let e2 = new ChainEvente();
e2.add("hello", (err, name) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(name);
})
.emit("hello","发生了错误")
.emit("hello",null,"hello nodejs");

const fs = require('fs');
function readFn(err,data) {
    console.log(data.toString);
};
fs.readFile('mock.txt',readFn);
e2.add("readFn",readFn);
fs.readFile('mock.txt',(err,data) => {
    e2.emit('readFn',err,data);
})