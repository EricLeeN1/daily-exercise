// 1.回调实现异步

const fs = require('fs');
let data1 = fs.readFileSync('./mock.txt');

console.log('data1:' + data1);

let data2 = fs.readFile('./mock.txt', (err, data3) => {
    console.log('data3:' + data3.toString());
});

console.log('data2:' + data2);