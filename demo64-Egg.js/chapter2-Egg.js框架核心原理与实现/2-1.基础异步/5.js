// Promise异步
const getName = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("nodejs")
    },100);
});

const getNumber = Promise.resolve(1);
const getError = Promise.reject("出错啦");

getError.catch(console.log);